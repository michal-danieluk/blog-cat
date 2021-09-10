import Link from 'next/link';

const navLinks = [
  { path: '/', label: 'MOJE', id: 1 },
  { path: '/blog', label: 'MOJE PISANIE', id: 2 },
  { path: '/about', label: 'JA', id: 3 }
  //{ path: '/projects', label: 'Projects', id: 4 }
];

export default function Layout({ children }) {
  return (
    <div className="mx-auto font-sans">
      <nav className="sticky top-0 z-10 flex justify-center max-w-full p-2 bg-gray-800">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <a className="p-2 m-2 text-center shadow md:w-40 bg-yellow-500 rounded hover:bg-yellow-300">
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
      <main>{children}</main>
      <footer className="bottom-0 w-screen p-5 text-center text-yellow-500 bg-gray-800">
        © {new Date().getFullYear()} Michał Danieluk
      </footer>
    </div>
  );
}
