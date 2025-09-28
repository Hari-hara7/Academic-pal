'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { dbA } from '@/services/firebaseConfig';
import ResourceCard from '@/components/ResourceCard';
import { Filter, Book, GraduationCap, Calendar, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { Resource } from '@/types/resource';

interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
}

interface HomeProps {
  user?: User | null;
}

const Home = ({ user }: HomeProps) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(dbA, 'resources'));
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          // Ensure backward compatibility for existing data
          shareableLink: docData.shareableLink || docData.resourceUrl,
          semester: typeof docData.semester === 'string' ? parseInt(docData.semester) : docData.semester,
        };
      }) as Resource[];
      console.log('Fetched resources:', data);
      setResources(data);
      setFilteredResources(data);
      if (data.length === 0) {
        toast.info('No resources found in the database.');
      }
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast.error('Failed to load resources. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteResource = async (resourceId: string) => {
    if (!user) {
      toast.error('Please sign in to delete resources.');
      return;
    }

    // Only allow the specific user with this UID to delete resources
    const AUTHORIZED_USER_UID = '8wBHYgtKpPQ37go66ivmLtXVF7b2';
    
    if (user.uid !== AUTHORIZED_USER_UID) {
      toast.error('You are not authorized to delete resources.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await deleteDoc(doc(dbA, 'resources', resourceId));
        toast.success('Resource deleted successfully!');
        console.log('Resource deleted successfully');
        // Refresh the resources list
        fetchResources();
      } catch (error) {
        console.error('Error deleting resource:', error);
        toast.error('Failed to delete resource. Please try again.');
      }
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    let filtered = resources;

    if (year) filtered = filtered.filter((res) => res.year === year);
    if (semester) filtered = filtered.filter((res) => res.semester.toString() === semester);
    if (branch) {
      const b = branch.trim().toLowerCase();
      filtered = filtered.filter((res) => res.branch?.trim().toLowerCase() === b);
    }
    if (subject) {
      const s = subject.trim().toLowerCase();
      filtered = filtered.filter((res) => res.subject?.trim().toLowerCase().includes(s));
    }

    setFilteredResources(filtered);
  }, [year, semester, branch, subject, resources]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400">
            📚 Explore Resources
          </h1>
          {!loading && (
            <p className="text-gray-400 mt-2">
              {filteredResources.length} of {resources.length} resources shown
            </p>
          )}
        </div>
        <button
          onClick={fetchResources}
          disabled={loading}
          className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      <div className="flex flex-wrap md:flex-row flex-col gap-4 justify-center bg-opacity-80 bg-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700 mb-10 overflow-x-auto whitespace-nowrap">
        {/* Year */}
        <div className="relative flex items-center w-full md:w-auto">
          <GraduationCap className="absolute left-3 text-gray-400" size={20} />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        {/* Semester */}
        <div className="relative flex items-center w-full md:w-auto">
          <Calendar className="absolute left-3 text-gray-400" size={20} />
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Semester</option>
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i} value={`${i + 1}`}>{`${i + 1}th Semester`}</option>
            ))}
          </select>
        </div>

        {/* Branch */}
        <div className="relative flex items-center w-full md:w-auto">
          <Filter className="absolute left-3 text-gray-400" size={20} />
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Branch</option>
            <option value="CSE">CSE</option>
            <option value="CSE-FSD">CSE Full Stack Development</option>
            <option value="ISE">ISE</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
            <option value="CyberSecurity">Cyber Security</option>
            <option value="CEC">CEC</option>
            <option value="ECE">ECE</option>
            <option value="ECE-VLSI">ECE VLSI</option>
            <option value="ME">Mechanical</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="CE">Civil</option>
            <option value="EEE">EEE</option>
          </select>
        </div>

        {/* Subject */}
        <div className="relative flex items-center w-full md:w-auto">
          <Book className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Search Subject"
            className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-3 text-center py-12">
            <RefreshCw className="w-8 h-8 mx-auto text-cyan-400 animate-spin mb-4" />
            <p className="text-gray-400 text-lg font-semibold">Loading resources...</p>
          </div>
        ) : filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              user={user}
              onDelete={handleDeleteResource}
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-400 text-lg font-semibold">
              ❌ No resources found. Try adjusting the filters or uploading some resources.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
