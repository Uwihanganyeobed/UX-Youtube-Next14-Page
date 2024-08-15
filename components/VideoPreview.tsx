import React from 'react';

interface VideoPreviewProps {
  thumbnail: string;
  profilePicture: string;
  videoTitle: string;
  videoAuthor: string;
  videoStats: string;
  videoTime: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  thumbnail,
  profilePicture,
  videoTitle,
  videoAuthor,
  videoStats,
  videoTime,
}) => {
  return (
    <div className="space-y-2">
      <div className="relative">
        <img src={thumbnail} alt={videoTitle} className="w-full" />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 py-0.5 rounded">{videoTime}</span>
      </div>
      <div className="flex space-x-3">
        <img src={profilePicture} alt={videoAuthor} className="h-9 w-9 rounded-full" />
        <div>
          <p className="text-sm font-bold line-clamp-2">{videoTitle}</p>
          <p className="text-xs text-gray-500">{videoAuthor}</p>
          <p className="text-xs text-gray-500">{videoStats}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
