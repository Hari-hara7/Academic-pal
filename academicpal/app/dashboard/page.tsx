'use client';

import { useAuth } from '@/context/AuthContext';
import DashboardClient from './DashboardClient';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardHomePage() {
  const { user } = useAuth();

  const email = user?.email || 'Guest';

  return (
    <ProtectedRoute>
      <DashboardClient email={email} />
    </ProtectedRoute>
  );
}

