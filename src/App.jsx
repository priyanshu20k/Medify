import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Footer } from './components/Footer/Footer';
import { DownloadApp } from './components/Sections/DownloadApp/DownloadApp';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CssBaseline />
      <main className="flex-grow">
        <Outlet />
      </main>
      <DownloadApp />
      <Footer />
    </div>
  );
}
