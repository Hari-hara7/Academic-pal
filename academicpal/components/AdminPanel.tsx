'use client';

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { dbA } from "@/services/firebaseConfig"; // Adjust path to your Project A firebase config
import { FaLink, FaFileAlt, FaCloudUploadAlt, FaBook } from "react-icons/fa";
import { toast } from "sonner";

interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
}

export default function AdminPanel({ user }: { user: User }) {
  const [resourceName, setResourceName] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !user.email?.endsWith("@nmamit.in")) {
      toast.error("Only @nmamit.in emails are allowed to upload resources.");
      return;
    }

    // Validate URL format
    try {
      new URL(shareableLink);
    } catch {
      toast.error("Please enter a valid URL for the shareable link.");
      return;
    }

    try {
      const resourceData = {
        userEmail: user.email,
        resourceName: resourceName.trim(),
        resourceType: "link" as const,
        resourceUrl: shareableLink,
        shareableLink: shareableLink,
        year,
        semester: parseInt(semester),
        branch,
        subject: subject.trim(),
        createdAt: new Date(),
      };

      console.log("Uploading resource:", resourceData);
      
      await addDoc(collection(dbA, "resources"), resourceData);

      toast.success("Resource uploaded successfully! It should now appear in the resource list.");
      setResourceName("");
      setShareableLink("");
      setYear("");
      setSemester("");
      setBranch("");
      setSubject("");
    } catch (error) {
      console.error("Error uploading resource:", error);
      toast.error(`Upload failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto mt-8 border border-gray-700"
    >
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center flex items-center justify-center gap-2">
        <FaCloudUploadAlt className="text-4xl text-blue-500" />
        Upload <span className="text-blue-500">Resource</span>
      </h2>

      {/* Resource Name */}
      <div className="mb-4">
        <label htmlFor="resourceName" className="text-gray-300 font-medium mb-2 block">
          <FaFileAlt className="inline-block mr-2 text-gray-400" />
          Resource Name
        </label>
        <input
          id="resourceName"
          type="text"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
          placeholder="Enter Resource Name"
          className="w-full p-3 border border-gray-600 bg-gray-800/80 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Shareable Link */}
      <div className="mb-4">
        <label htmlFor="shareableLink" className="text-gray-300 font-medium mb-2 block">
          <FaLink className="inline-block mr-2 text-gray-400" />
          Shareable Link (Drive, etc.)
        </label>
        <input
          id="shareableLink"
          type="url"
          value={shareableLink}
          onChange={(e) => setShareableLink(e.target.value)}
          placeholder="Enter Shareable Link"
          className="w-full p-3 border border-gray-600 bg-gray-800/80 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-gray-300 font-medium mb-2 block">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-3 border border-gray-600 bg-gray-800/80 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        <div>
          <label className="text-gray-300 font-medium mb-2 block">Semester</label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full p-3 border border-gray-600 bg-gray-800/80 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select Semester</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={`${i + 1}`}>
                {`${i + 1}th Semester`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Branch */}
      <div className="mb-4">
        <label className="text-gray-300 font-medium mb-2 block">Branch</label>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="w-full p-3 border border-gray-600 bg-gray-800/80 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          required
        >
          <option value="">Branch</option>
          {[
            "CSE",
            "CSE-FSD",
            "ISE",
            "AIML",
            "AIDS",
            "CyberSecurity",
            "CEC",
            "ECE",
            "ECE-VLSI",
            "ME",
            "Biotechnology",
            "CE",
            "EEE",
          ].map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label className="text-gray-300 font-medium mb-2 block">
          <FaBook className="inline-block mr-2 text-gray-400" />
          Subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter Subject Name"
          className="w-full p-3 border border-gray-600 bg-gray-800/80 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      >
        <FaCloudUploadAlt className="text-lg" />
        Upload Resource
      </button>
    </form>
  );
}
