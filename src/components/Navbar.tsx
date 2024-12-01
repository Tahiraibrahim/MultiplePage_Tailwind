import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            TI Software House
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}