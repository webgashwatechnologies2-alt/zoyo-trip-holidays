import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay,
  FaApplePay
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-6 text-sm font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div className="space-y-4">
          <p className="text-gray-400 leading-relaxed">
            We help you find and book the perfect stay from cozy guesthouses to top hotels with ease, trust, and the best deals.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-white mb-2">Happy Travelers</h4>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 text-xs font-semibold">
              <FaStar className="text-amber-400 text-sm" /> 50 Lakh Happy Travelers
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide text-[15px]">International Destinations</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/international/bali" className="hover:text-[#f26c22] transition">Bali</Link></li>
            <li><Link href="/international/bhutan" className="hover:text-[#f26c22] transition">Bhutan</Link></li>
            <li><Link href="/international/dubai" className="hover:text-[#f26c22] transition">Dubai</Link></li>
            <li><Link href="/international/maldives" className="hover:text-[#f26c22] transition">Maldives</Link></li>
            <li><Link href="/international/malaysia" className="hover:text-[#f26c22] transition">Malaysia</Link></li>
          </ul> <br />
          <h4 className="font-semibold text-white mb-4 tracking-wide text-[15px]">National Destinations</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/national/assam" className="hover:text-[#f26c22] transition">Assam</Link></li>
            <li><Link href="/national/goa" className="hover:text-[#f26c22] transition">Goa</Link></li>
            <li><Link href="/national/gujarat" className="hover:text-[#f26c22] transition">Gujarat</Link></li>
            <li><Link href="/national/himachal-pradesh" className="hover:text-[#f26c22] transition">Himachal Pradesh</Link></li>
            <li><Link href="/national/karnataka" className="hover:text-[#f26c22] transition">Karnataka</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide text-[15px]">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-[#f26c22] transition">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-[#f26c22] transition">Tour Gallery</Link></li>
            <li><Link href="/news-events" className="hover:text-[#f26c22] transition">News & Events</Link></li>
            <li><Link href="/vision-mission" className="hover:text-[#f26c22] transition">Vision & Mission</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#f26c22] transition">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-[#f26c22] transition">Refund Policy</Link></li>
            <li><Link href="/cancellation-policy" className="hover:text-[#f26c22] transition">Cancellation Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-[#f26c22] transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide text-[15px]">Support</h4>
          <ul className="space-y-2 text-gray-400 mb-6">
            <li><Link href="/contact" className="hover:text-[#f26c22] transition">Help Centre</Link></li>
            <li><Link href="https://wa.me/918091660060" target="_blank" rel="noreferrer" className="hover:text-[#f26c22] transition">Live WhatsApp Support</Link></li>
            <li><Link href="/contact" className="hover:text-[#f26c22] transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-[#f26c22] transition">Contact Us</Link></li>
          </ul>
          
          <h4 className="font-semibold text-white mb-3 tracking-wide text-[15px]">Get In Touch</h4>
          <ul className="space-y-2 text-gray-400 text-xs">
            <li>
              <a href="tel:+918091660060" className="hover:text-[#f26c22] flex items-center gap-2 transition">
                <FaPhoneAlt className="text-[#f26c22] shrink-0" />
                <span>(+91) 8091660060</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@zoyotrip.in" className="hover:text-[#f26c22] flex items-center gap-2 transition">
                <FaEnvelope className="text-[#f26c22] shrink-0" />
                <span>info@zoyotrip.in</span>
              </a>
            </li>
          </ul>

          <div className="flex space-x-3 mt-5">
            <a href="https://www.facebook.com/ZoyoTripHolidays/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white transition-all">
              <FaFacebookF className="text-xs" />
            </a>
            <a href="https://www.instagram.com/zoyotripholidays/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] flex items-center justify-center text-white transition-all">
              <FaInstagram className="text-xs" />
            </a>
            <a href="https://www.linkedin.com/in/zoyo-trip-holidays/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-all">
              <FaLinkedinIn className="text-xs" />
            </a>
            <a href="https://www.youtube.com/@zoyotripholidays" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center text-white transition-all">
              <FaYoutube className="text-xs" />
            </a>
            <a href="https://x.com/zoyotrip" target="_blank" rel="noreferrer" aria-label="X Twitter" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all">
              <FaXTwitter className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
        <p className="text-xs">© 2026 Zoyo Trip Holidays. All rights reserved.</p>
        <div className="flex items-center space-x-3 text-2xl text-gray-400">
          <FaCcVisa className="hover:text-white transition" title="Visa" />
          <FaCcMastercard className="hover:text-white transition" title="Mastercard" />
          <FaCcPaypal className="hover:text-white transition" title="PayPal" />
          <FaGooglePay className="text-3xl hover:text-white transition" title="Google Pay" />
          <FaApplePay className="text-3xl hover:text-white transition" title="Apple Pay" />
        </div>
      </div>
    </footer>
  );
}
