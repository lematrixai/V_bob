'use client';

import { UploadDropzone } from '@uploadthing/react';
import { OurFileRouter } from '../lib/uploadthing';
import { FileIcon, UploadCloud } from 'lucide-react'; 
import { useState } from 'react';
export default function UploadComponent() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br ">
      <div className="w-full max-w-lg p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
        <UploadDropzone<OurFileRouter>
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files uploaded:", res);
            alert("Upload successful!");
          }}
          onUploadError={(error) => {
            console.error("Upload error:", error);
            alert("Upload failed!");
          }}
          onDragOver={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          className={({ isDragActive }) => `
            relative flex flex-col items-center justify-center w-full h-64 p-6
            border-2 border-dashed rounded-lg transition-all duration-300 ease-in-out
            ${isDragActive || isDragging
              ? 'border-indigo-500 bg-indigo-500/20 scale-105'
              : 'border-gray-400 hover:border-indigo-400 hover:bg-indigo-400/10'}
          `}
          content={{
            uploadIcon: <UploadCloud className="w-12 h-12 text-indigo-400" />,
            label: ({ isDragActive }) => (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">
                  {isDragActive || isDragging
                    ? 'Drop it here!'
                    : 'Drag & Drop or Click to Upload'}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Supports images up to 32MB
                </p>
              </div>
            ),
            allowedContent: (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <FileIcon className="w-4 h-4" /> JPG, PNG, GIF
              </span>
            ),
          }}
          appearance={{
            button: ({ isUploading }) => `
              bg-indigo-600 text-white font-medium py-2 px-4 rounded-md
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition-all duration-200
              ${isUploading ? 'opacity-75 cursor-not-allowed py-2 px-4 rounded-md' : ''}
            `,
            container: 'cursor-pointer',
          }}
        />
        <div className="mt-4 text-center text-gray-300 text-sm">
          <p>Powered by Uploadthing & Lematrixia</p>
        </div>
      </div>
    </div>
  );
}