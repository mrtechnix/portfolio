const Contact = () => {
  const contactInfo = {
    email: "mrtechnix@danydevid.my.id", 
    location: "Pasuruan, Indonesia",
    uptime: "13:00 - 22:00 (GMT+7)",
    status: "Open to Work / Freelance"
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] border-t border-[#1E1E1E] font-mono text-[#E0E0E0]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-[#81B29A] text-lg mb-12 uppercase font-bold tracking-tighter">
          [ 04. contact_info ]
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Main Info */}
          <div className="space-y-8">
            <div>
              <p className="text-[#757575] text-xs uppercase mb-2 tracking-widest">// Availability</p>
              <p className="text-lg font-bold">{contactInfo.status}</p>
              <p className="text-[#757575] text-sm italic">Response time: 1-2 hours</p>
            </div>

            <div>
              <p className="text-[#757575] text-xs uppercase mb-2 tracking-widest">// Reach out via email</p>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-xl md:text-2xl font-bold text-[#E53935] hover:underline transition-none"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Secondary Info (Environment) */}
          <div className="bg-[#1E1E1E] p-6 border border-[#333] space-y-6">
            <div className="flex justify-between items-center border-b border-[#333] pb-3">
              <span className="text-[#757575] text-xs uppercase font-bold">Location</span>
              <span className="text-sm font-mono">{contactInfo.location}</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#333] pb-3">
              <span className="text-[#757575] text-xs uppercase font-bold">Working Hours</span>
              <span className="text-sm font-mono">{contactInfo.uptime}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[#757575] text-xs uppercase font-bold">Preferred Connection</span>
              <div className="flex space-x-4">
                <a href="https://github.com/mrtechnix" className="text-[#81B29A] hover:underline text-xs">GitHub</a>
                <a href="https://discord.com/uservpr" className="text-[#81B29A] hover:underline text-xs">Discord</a>
              </div>
            </div>
          </div>
        </div>

        {/* System Logs / Footer Metadata */}
        <div className="mt-24 pt-4 border-t border-[#1E1E1E] flex flex-wrap gap-4 text-[9px] text-[#757575] uppercase tracking-tighter">
          <span>Host: github pages</span>
          <span>Locale: en_US.UTF-8</span>
          <span>TTY: pts/0</span>
          <span>Status: Available</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;