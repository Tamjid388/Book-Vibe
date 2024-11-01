
import React from 'react';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-800">404</h1>
      <p className="text-2xl font-medium text-gray-700">Page Not Found</p>
      <p className="text-lg text-gray-500">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Go Back Home
      </button>
    </div>
  );
}