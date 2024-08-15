import React from 'react';
import { FaHome, FaCompass, FaYoutube, FaMusic, FaFolder, FaPlayCircle } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const icons = [
    FaHome,
    FaCompass,
    FaYoutube,
    FaPlayCircle,
    FaMusic,
    FaFolder,
  ];

  const labels = [
    'Home',
    'Explore',
    'Subscriptions',
    'Originals',
    'Musics',
    'Library',
  ];

  return (
    <aside className="fixed left-0 top-14 text-black bottom-0 bg-green-100 w-20 z-40">
      {labels.map((item, index) => {
        const Icon = icons[index];
        return (
          <div key={index} className="flex flex-col items-center justify-center h-20 cursor-pointer hover:bg-blue-200">
            <Icon className="h-10 mb-2 text-gray-700" />
            <span className="text-xs">{item}</span>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
