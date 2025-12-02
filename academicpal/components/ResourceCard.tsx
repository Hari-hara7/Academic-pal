'use client';

import { Resource } from '@/types/resource'; // adjust the path as per your structure
import {
  FaLink,
  FaFileAlt,
  FaUser,
  FaExternalLinkAlt,
  FaBook,
  FaGraduationCap,
  FaTrash,
} from 'react-icons/fa';
import { motion } from 'motion/react';

interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
}

interface Props {
  resource: Resource;
  user?: User | null;
  onDelete?: (resourceId: string) => void;
}

const ResourceCard: React.FC<Props> = ({ resource, user, onDelete }) => {

  const AUTHORIZED_USER_UID = '8wBHYgtKpPQ37go66ivmLtXVF7b2';
  const canDelete = user && user.uid === AUTHORIZED_USER_UID;

  const handleDelete = () => {
    onDelete?.(resource.id!);
  };
  return (
    <motion.div
      className="p-6 border border-white/20 rounded-xl shadow-2xl bg-black backdrop-blur-2xl hover:scale-105 hover:border-blue-500 transition-all duration-300 ease-in-out w-full max-w-md mx-auto"
      whileHover={{ scale: 1.05 }}
    >
      {}
      <div className="flex items-center gap-3 mb-4">
        {(resource.resourceType === 'link' || (!resource.resourceType && (resource.shareableLink || resource.resourceUrl))) ? (
          <FaLink className="text-blue-400 text-4xl" />
        ) : (
          <FaFileAlt className="text-blue-400 text-4xl" />
        )}
        <h2 className="font-extrabold text-xl text-white leading-tight">
          {resource.resourceName}
        </h2>
      </div>

      {}
      <div className="space-y-2 text-gray-300">
        <p className="flex items-center gap-2">
          <FaExternalLinkAlt className="text-blue-400" />
          <span>Type: {resource.resourceType || 'link'}</span>
        </p>
        <p className="flex items-center gap-2">
          <FaUser className="text-blue-400" />
          <span>Uploaded by: {resource.userEmail}</span>
        </p>
        <p className="flex items-center gap-2">
          <FaGraduationCap className="text-blue-400" />
          <span>
            Year: {resource.year}, Semester: {resource.semester}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <FaBook className="text-blue-400" />
          <span>
            Branch: {resource.branch}, Subject: {resource.subject}
          </span>
        </p>
      </div>

      {}
      <div className="mt-4 space-y-2">
        {(resource.shareableLink || resource.resourceUrl) && (
          <a
            href={resource.shareableLink || resource.resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/30 backdrop-blur-xl text-white font-semibold transition-all border border-blue-400/50 shadow-lg hover:bg-blue-500/50 hover:shadow-xl"
          >
            <FaExternalLinkAlt /> Open Resource
          </a>
        )}
        
        {canDelete && (
          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/30 backdrop-blur-xl text-red-400 font-semibold transition-all border border-red-300/50 shadow-lg hover:bg-red-500/50 hover:text-white hover:shadow-xl w-full"
          >
            <FaTrash /> Delete Resource
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ResourceCard;

