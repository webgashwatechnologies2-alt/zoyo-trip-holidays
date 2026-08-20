import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div className="space-y-4">
          <p className="text-gray-400">
            We help you find and book the perfect stay from cozy guesthouses to top hotels with ease, trust, and the best deals.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-white mb-2">Happy Travelers</h4>
            <div className="bg-white/10 p-2 rounded inline-block">
              ⭐ 5000+ Happy Travelers
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-white mb-4">International Destination</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-white">Bali</Link></li>
            <li><Link href="#" className="hover:text-white">Bhutan</Link></li>
            <li><Link href="#" className="hover:text-white">Dubai</Link></li>
            <li><Link href="#" className="hover:text-white">Maldives</Link></li>
            <li><Link href="#" className="hover:text-white">Mauritius</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-white mb-4">National Destination</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-white">Andaman</Link></li>
            <li><Link href="#" className="hover:text-white">Assam</Link></li>
            <li><Link href="#" className="hover:text-white">Goa</Link></li>
            <li><Link href="#" className="hover:text-white">Gujarat</Link></li>
            <li><Link href="#" className="hover:text-white">Himachal Pradesh</Link></li>
            <li><Link href="#" className="hover:text-white">Karnataka</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 mb-6">
            <li><Link href="#" className="hover:text-white">Help Centre</Link></li>
            <li><Link href="#" className="hover:text-white">Live Chat Support</Link></li>
            <li><Link href="#" className="hover:text-white">FAQs</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
          </ul>
          
          <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-white">(+91) 8091660060</Link></li>
            <li><Link href="#" className="hover:text-white">info@zoyotrip.in</Link></li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <span className="text-xl cursor-pointer">📘</span>
            <span className="text-xl cursor-pointer">📸</span>
            <span className="text-xl cursor-pointer">🐦</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>© 2026 Zoyo Trip Holidays. All rights reserved.</p>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <div className="bg-white px-2 py-1 rounded text-black text-xs font-bold">VISA</div>
          <div className="bg-white px-2 py-1 rounded text-black text-xs font-bold">MasterCard</div>
          <div className="bg-white px-2 py-1 rounded text-black text-xs font-bold">PayPal</div>
          <div className="bg-white px-2 py-1 rounded text-black text-xs font-bold">GPay</div>
        </div>
      </div>
    </footer>
  );
}
