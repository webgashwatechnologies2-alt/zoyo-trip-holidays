'use client';
import Link from 'next/link';

const services = [
  {
    label: ['Hotel', 'Booking'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="40" height="32" rx="3" />
        <path d="M4 22h40" />
        <path d="M16 22V10" />
        <rect x="20" y="28" width="8" height="14" />
        <rect x="8" y="26" width="5" height="5" />
        <rect x="35" y="26" width="5" height="5" />
      </svg>
    ),
  },
  {
    label: ['Top', 'Destinations'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4C16.268 4 10 10.268 10 18c0 11 14 26 14 26s14-15 14-26c0-7.732-6.268-14-14-14z" />
        <circle cx="24" cy="18" r="5" />
      </svg>
    ),
  },
  {
    label: ['Visa', 'Processing'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="26" rx="3" />
        <circle cx="19" cy="21" r="5" />
        <path d="M6 34c0 0 4-6 13-6s13 6 13 6" />
        <path d="M32 16h8M32 21h6M32 26h8" />
      </svg>
    ),
  },
  {
    label: ['Tour', 'Experineces'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36l10-14 8 8 6-8 10 14H8z" />
        <circle cx="34" cy="16" r="5" />
      </svg>
    ),
  },
  {
    label: ['Customize', 'Package'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="28" y="4" width="16" height="16" rx="2" />
        <rect x="4" y="28" width="16" height="16" rx="2" />
        <path d="M36 28v16M28 36h16" />
      </svg>
    ),
  },
  {
    label: ['Adventure', 'Travel'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34l10-16 8 10 6-8 12 14H6z" />
        <path d="M30 12l8-4-2 8" />
        <circle cx="38" cy="10" r="3" />
      </svg>
    ),
  },
];
export default function TrustedCompanySection() {
  return (
    <section className="relative w-full bg-[#fdf6ed] py-14 lg:py-20 overflow-hidden font-sans">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #d8c9b0 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute bottom-5 left-5 w-14 h-14 sm:w-16 sm:h-16 pointer-events-none z-10 select-none opacity-90">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#1f2937" strokeWidth="3.5" />
          <path d="M50,8 A42,42 0 0,1 80,20 L71,29 A28,28 0 0,0 50,22 Z" fill="#e53e3e" stroke="#1f2937" strokeWidth="2.5" />
          <path d="M92,50 A42,42 0 0,1 80,80 L71,71 A28,28 0 0,0 78,50 Z" fill="#e53e3e" stroke="#1f2937" strokeWidth="2.5" />
          <path d="M50,92 A42,42 0 0,1 20,80 L29,71 A28,28 0 0,0 50,78 Z" fill="#e53e3e" stroke="#1f2937" strokeWidth="2.5" />
          <path d="M8,50 A42,42 0 0,1 20,20 L29,29 A28,28 0 0,0 22,50 Z" fill="#e53e3e" stroke="#1f2937" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="23" fill="#fdf6ed" stroke="#1f2937" strokeWidth="3.5" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 17" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 text-amber-400 text-2xl select-none">
        ✦
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-6">
          <div className="w-full lg:w-[52%] flex flex-col">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-weight: 900 text-[#111827] leading-[1.2] tracking-tight mb-5">
              India&apos;s Trusted Tour And<br />
              Destination Management<br />
              Company
            </h2>
            <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.72] mb-6 max-w-lg">
              Plan your perfect holiday with Zoyo Trip Holidays, India&apos;s most trusted travel and
              destination management company. We specialize in customized domestic (India Only) and{' '}
              <Link href="#" className="underline font-medium text-[#111827] hover:text-[#f26c22] transition-colors">
                International tour packages
              </Link>{' '}
              (World Wide), offering end-to-end travel solutions that include flight bookings, hotel
              accommodations, transportation, train and bus tickets, and even exclusive helicopter
              ride experiences.
            </p>
            <div className="flex items-center gap-3 mb-9">
              <div className="relative w-[72px] h-[56px] shrink-0">
                <svg viewBox="0 0 90 72" className="w-full h-full">
                  <path
                    d="M25,14 C34,3 56,3 65,14 C73,23 69,40 55,52 L53,58 L37,58 L35,52 C21,40 17,23 25,14 Z"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M45,5 C45,22 45,42 45,58" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M33,10 C37,24 40,42 40,58" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M57,10 C53,24 50,42 50,58" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                  <rect x="39" y="61" width="12" height="8" rx="1.5" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  <path
                    d="M44,69 C32,76 22,63 36,57 C46,52 60,58 66,70 C70,77 82,78 90,72"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-start leading-none">
                  <span className="text-[52px] sm:text-[58px] font-black text-[#111827] leading-none tracking-tight">5</span>
                  <span className="text-[22px] font-bold text-[#111827] mt-1 ml-0.5">+</span>
                </div>
                <div className="flex flex-col leading-tight ml-1">
                  <span className="text-[13px] font-bold text-[#374151]">Years</span>
                  <span className="text-[13px] font-bold text-[#374151]">of Experience</span>
                </div>
              </div>
            </div>
            <h4 className="text-[13.5px] font-bold text-[#111827] mb-3">
              We Provide to Smart Services
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl py-3.5 px-2 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-2 text-center cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-700 group-hover:bg-gray-100 transition-colors">
                    {svc.icon}
                  </div>
                  <div className="flex flex-col">
                    {svc.label.map((line, j) => (
                      <span key={j} className="text-[11px] font-bold text-[#111827] leading-snug">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[46%] flex justify-center relative">
            <div className="absolute -top-6 left-8 right-8 h-14 pointer-events-none z-20 hidden sm:block">
              <svg viewBox="0 0 320 56" className="w-full h-full" preserveAspectRatio="none">
                <circle cx="48" cy="44" r="3.5" fill="#1f2937" />
                <path
                  d="M48,44 Q160,-16 272,16"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                />
                <circle cx="272" cy="16" r="3.5" fill="#1f2937" />
              </svg>
            </div>
            <div className="relative flex items-end justify-center gap-3 w-full max-w-[600px] h-[340px] sm:h-[560px]">
              <div
                className="relative overflow-hidden shadow-lg bg-amber-100 flex-1"
                style={{
                  height: '86%',
                  borderRadius: '999px 999px 18px 18px',
                  border: '3.5px solid #e27126',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop"
                  alt="Tropical Beach"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="relative overflow-hidden shadow-xl bg-amber-100 flex-1"
                style={{
                  height: '100%',
                  borderRadius: '999px 999px 18px 18px',
                  border: '3.5px solid #e27126',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop"
                  alt="Waterfall Adventure"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1.5 shadow-[0_4px_18px_rgba(0,0,0,0.18)] ring-2 ring-[#e27126]/20 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#9333ea] flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-8 h-8">
                      <circle cx="12" cy="19" r="5.5" fill="none" stroke="white" strokeWidth="2" />
                      <circle cx="24" cy="19" r="5.5" fill="none" stroke="white" strokeWidth="2" />
                      <circle cx="12" cy="19" r="2.5" fill="#ef4444" />
                      <circle cx="24" cy="19" r="2.5" fill="#22c55e" />
                      <polygon points="18,20 16,24 20,24" fill="white" />
                      <path d="M7,13 Q18,9 29,13" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-3 mt-10 flex-wrap text-[13.5px] font-medium text-gray-800">
          <span className="font-extrabold text-[#111827] text-[15px]">Excellent!</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[22px] h-[22px] bg-[#00b67a] flex items-center justify-center rounded-[3px]">
                <svg className="w-[14px] h-[14px] fill-white" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            ))}
          </div>
          <span className="text-gray-600 font-normal">
            5.0 Rating out of 5.0 based on{' '}
            <Link href="#" className="underline font-semibold text-gray-800 hover:text-black transition-colors">
              24K+ reviews
            </Link>
          </span>
          <div className="flex items-center gap-1.5 font-bold text-[#111827]">
            <svg className="w-4 h-4 fill-[#00b67a]" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
