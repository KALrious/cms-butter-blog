import { useEffect, useState, useRef } from 'react';

export default function HeaderSection({}) {
  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Home</span>
              <img
                className="h-8 w-auto sm:h-8"
                src="/images/spider.png"
                alt="home"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
