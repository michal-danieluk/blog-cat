import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react'

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-gray-700 p-3 '>

        <Link href="/">

          <a className='inline-flex items-center p-2 mr-4 ring '>
            <Image
              src="/wdekster_logo.png"
              height={27}
              width={150}
            /></a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? 'visible' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/blog'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Blog
                </a>
              </Link>
              <Link href='/about'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Info
                </a>
              </Link>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Kontakt
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};


/*
const navLinks = [
  //{ path: '/', label: 'HOME', id: 1 },
  { path: '/blog', label: 'artykuły', id: 2 },
  { path: '/about', label: 'info', id: 3 }
  //{ path: '/projects', label: 'Projects', id: 4 }
];
*/
/*
export default function Nav() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky top-0 z-10 flex justify-center max-w-full p-4 bg-gray-700">
          <div className="mr-auto">
            <Link href="/"><a className="ring ">
              <Image
                src="/wdekster_logo.png"
                height={27}
                width={150}
              /></a></Link>

          </div>

          {/*10
      <div className="mr-auto">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <a className="p-2 m-2 text-center md:w-40 uppercase text-xl font-bold	text-gray-200 tracking-wide rounded-tl-lg rounded-bl-lg rounded-tr-lg hover:underline">
              <span className="tracking-widest"> {link.label} </span>
            </a>
          </Link>
        ))}
      </div>
 }

      <button
        className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      <div
        className={`${active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >

        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/blog'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Blog
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Info
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Kontakt
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  )


};
*/
