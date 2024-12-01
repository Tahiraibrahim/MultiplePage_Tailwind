import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3> 
            <p className="text-gray-300 text-sm">
              We are dedicated to providing the best service to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3> 
            <ul className="space-y-1"> 
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3> 
            <address className="text-gray-300 not-italic text-sm">
              Email: tahirasalahuddin77@gmail.com<br />
              Phone: (021) 456-7890<br />
              Address: 123 Main St, Karachi
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
