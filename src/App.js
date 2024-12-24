import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Componants/Navbar';

function App() {
  return (
    <div className="flex">
      <div className="w-[16%] h-screen bg-white border border-gray-600  shadow-2xl fixed top-0 left-0 z-10">
        <Navbar />
      </div>
      <div className="w-[84%] h-screen bg-white text-black overflow-y-auto ml-[16%]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
