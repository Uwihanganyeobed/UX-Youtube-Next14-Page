import React from 'react';
import VideoPreview from './VideoPreview';
import { videos } from '../libs/video';

const VideoGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {videos.map((video, index) => (
        <VideoPreview
          key={index}
          thumbnail={video.thumbnail}
          profilePicture={video.profilePicture}
          videoTitle={video.videoTitle}
          videoAuthor={video.videoAuthor}
          videoStats={video.videoStats}
          videoTime={video.videoTime}
        />
      ))}
    </section>
  );
};

export default VideoGrid;
