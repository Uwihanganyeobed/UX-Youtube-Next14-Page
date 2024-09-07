import React from 'react';

export default function EditPageSkeleton() {
  return (
    <div>
      <h2 className="text-2xl font-bold my-8 animate-pulse bg-gray-300 h-8 w-1/2 rounded-md"></h2>
      <form className="flex gap-2 flex-col animate-pulse">
        <div className="py-1 px-4 border rounded-md bg-gray-300 h-10 w-full"></div>
        <div className="py-1 px-4 border rounded-md bg-gray-300 h-32 w-full"></div>
        <div className="bg-gray-400 text-white mt-5 px-4 py-1 rounded-md cursor-pointer h-10 w-1/4"></div>
      </form>
    </div>
  );
}
