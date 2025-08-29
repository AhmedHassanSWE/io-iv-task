export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with brown overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#4b2f28]/70" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6 text-white">
        <div className="flex-1" />
        <ul className="hidden md:flex items-center space-x-8">
          <li><a className="hover:text-white/80" href="#">Home</a></li>
          <li><a className="hover:text-white/80" href="#">About us</a></li>
          <li><a className="hover:text-white/80" href="#">Services</a></li>
          <li><a className="hover:text-white/80" href="#">Blog</a></li>
          <li><a className="hover:text-white/80" href="#">Our Team</a></li>
          <li><a className="hover:text-white/80" href="#">Contacts us</a></li>
        </ul>
        <div className="flex-1 flex items-center justify-end space-x-5">
          {/* Search icon */}
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 1 1 4 10.5 6.5 6.5 0 0 1 17 10.5z" />
          </svg>
          <button className="border border-white/70 text-white px-4 py-2 rounded hover:bg-white hover:text-[#4b2f28] transition-colors">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-24 md:pt-20 md:pb-32 flex items-center">
        {/* Left side controls and text */}
        <div className="flex-1 flex items-start">
          {/* Left controls */}
          <div className="flex flex-col items-center mr-8 mt-6">
            <button className="w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-[#4b2f28] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="mt-6 flex flex-col space-y-3">
              {[0,1,2,3,4].map((i) => (
                <span key={i} className={`block w-2 h-2 rounded-full border border-white ${i===1 ? 'bg-white' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Lorem Ipsum</h1>
                         <p className="text-white/90 text-lg leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
            </p>
            <button className="bg-white text-[#4b2f28] px-8 py-3 rounded font-semibold shadow-sm hover:bg-white/90 transition">Read More</button>
          </div>
        </div>

        {/* Portrait */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="relative">
            <div className="absolute -inset-2 rounded-md border-4 border-pink-500" />
            <div className="relative w-[360px] h-[360px] bg-[#6b3f32] rounded-md overflow-hidden flex items-center justify-center">
              {/* Portrait image */}
              <img src="/portrait.png" alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}