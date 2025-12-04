export const Contact = () => {
  return (
    <div className="w-full flex justify-center py-24 max-sm:py-16">
      <div className="w-full max-w-5xl flex flex-col items-center gap-12 px-6">

        {/* Top text */}
        <div className="flex flex-col items-center gap-4 text-center">
          <button className="px-4 py-1 rounded-xl bg-[#374151] text-white">
            Get in touch
          </button>

          <div className="flex flex-col gap-1 text-center text-white">
            <p>What’s next? Feel free to reach out to me if you're looking for a</p>
            <p>developer, have a query, or simply want to connect</p>
          </div>
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col gap-6 items-center">
          {/* Email */}
          <div className="flex items-center gap-3">
            <img src="mail.png" alt="mail" />
            <span className="text-4xl font-bold text-white max-sm:text-2xl">
              tom@pinecone.mn
            </span>
            <img src="copy.png" alt="copy" />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <img src="phone.png" alt="phone" />
            <span className="text-4xl font-bold text-white max-sm:text-2xl">
              +976 88112233
            </span>
            <img src="copy.png" alt="copy" />
          </div>
        </div>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-2 text-white">
          <span>You may also find me on these platforms!</span>

          <div className="flex gap-4">
            <img src="github.png" alt="github" />
            <img src="twiter.png" alt="twitter" />
            <img src="figma.png" alt="figma" />
          </div>
        </div>
        
      </div>
    </div>
  );
};