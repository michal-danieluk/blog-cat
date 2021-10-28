//import Link from 'next/link';
//import Image from 'next/image';
import Nav from 'components/Nav';

const navLinks = [
  //{ path: '/', label: 'HOME', id: 1 },
  { path: '/blog', label: 'artykuły', id: 2 },
  { path: '/about', label: 'info', id: 3 }
  //{ path: '/projects', label: 'Projects', id: 4 }
];

export default function Layout({ children }) {
  return (
    <div className="mx-auto font-sans">

      <Nav />

      {/*       <nav className="sticky top-0 z-10 flex justify-center max-w-full m-2 p-2 bg-gray-300">
        <div className="mr-auto">
          <Link href="/"><a>
            <Image
              src="/wdekster_logo.png"
              height={27}
              width={150}
            /></a></Link>

        </div>
        <div className="mr-auto">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.id}>
              <a className="p-2 m-2 text-center md:w-40 uppercase	 tracking-wide rounded-tl-lg rounded-bl-lg rounded-tr-lg hover:underline">
                <span className="tracking-widest"> {link.label} </span>
              </a>
            </Link>
          ))}
        </div>
      </nav>
 */}


      <main>{children}</main>
      <footer className="bottom-0 w-screen p-5 text-center text-yellow-500 bg-gray-800">
        © {new Date().getFullYear()} Michał Danieluk
      </footer>
    </div>
  );
}
