import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-slate-300 py-6 w-full mt-0 pt-20">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Team Vidyutashwa. All rights reserved.</p>
        <p className="text-xs mt-2">
          Designed and developed by Ram Kirge | <a href="https://www.linkedin.com/in/ram-kirge-770130249/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;