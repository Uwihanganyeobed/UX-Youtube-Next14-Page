"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IInterpretations {
  $id: string;
  term: string;
  interpretation: string;
}

export default function HomeSkeleton() {
  return (
    <div className="p-4 my-2 rounded-md border leading-8 animate-pulse border-gray-400">
      <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-2 border border-gray-400"></div>
      <div className="h-4 bg-gray-500 rounded-md w-full mb-2 border border-gray-400"></div>
      <div className="flex gap-4 mt-4 justify-end">
        <div className="h-8 w-16 bg-gray-300 rounded-md border border-gray-400"></div>
        <div className="h-8 w-16 bg-gray-300 rounded-md border border-gray-400"></div>
      </div>
    </div>
  );
}
