import Link from 'next/link';
import GitHub from '../../../public/icons8-github.svg';
import LinkedIn from '../../../public/icons8-linkedin.svg';
import React from 'react';
import Image from 'next/image';

function PortfolioNavBar() {
  return (
    <>
      <div className="navbar bg-base-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
              <li><Link href="https://github.com/shawnvera?tab=repositories">Portfolio</Link></li>
              <li><Link href="about">About</Link></li>
              <li><Link href="https://docs.google.com/document/d/1Ly5uWZaV--JbVKES369zlAdAaDp1EkSdl9SZFYXvzmw/edit?usp=sharing">Resume</Link></li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <Link href="/" className="btn normal-case text-xl">HOME</Link>
        </div>

        {/* GitHub and LinkedIn icon links */}
        <div className="navbar-end">
          <Link href="https://github.com/shawnvera" className='hover:animate-spin'><Image src={GitHub} alt="Link to Shawn's GitHub" /></Link>
          <Link href="https://www.linkedin.com/in/shawn-vera/" className='hover:animate-bounce'><Image src={LinkedIn} alt="Link to Shawn's LinkedIn" /></Link>
        </div>
      </div>

    </>
  );
}

export default PortfolioNavBar;