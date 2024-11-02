import React from 'react';
import { Link } from 'react-router-dom';

export default function Test() {
    const testID=1
  return (
 <Link to={`/test/${testID}`}>
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Test Component</h1>
        <p className="text-gray-700 text-center mb-6">
          This is a sample component designed with Tailwind CSS. You can customize it to fit your needs.
        </p>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
      </div>
    </div>
 
 </Link>
  );
}
