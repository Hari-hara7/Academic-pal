'use client';

import { useAuth } from '@/context/AuthContext';
import Chat from '@/components/Chat';
import ProtectedRoute from '@/components/ProtectedRoute';

const ChatPage = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div>{user && <Chat user={user} />}</div>
    </ProtectedRoute>
  );
};

export default ChatPage;

