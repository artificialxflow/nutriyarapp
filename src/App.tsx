/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  // Simple routing based on URL hash if needed, but state is fine for this demo
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['admin'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <LandingPage onStart={() => setCurrentPage('dashboard')} />;
    }
  };

  return (
    <div className="font-sans antialiased text-slate-900 select-none">
      {renderPage()}
      
      {/* Hidden debug route for Admin Panel */}
      <div className="fixed bottom-4 left-4 z-[9999] opacity-0 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setCurrentPage(currentPage === 'admin' ? 'landing' : 'admin')}
          className="bg-slate-800 text-white p-2 rounded text-[10px]"
        >
          Toggle Admin/Landing
        </button>
      </div>
    </div>
  );
}

