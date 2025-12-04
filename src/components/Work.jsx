export const Work = () => {
  return (
    <div className="w-full flex justify-center bg-[#111827]">
      <div className="max-w-7xl w-full flex flex-col gap-16 pt-24 px-20 
        max-sm:px-4 max-sm:pt-16">

        {/* TOP TEXT */}
        <div className="w-full flex flex-col justify-center items-center gap-4 text-center">
          <button className="w-[75px] h-7 bg-[#374151] rounded-xl text-white">
            Work
          </button>
          <div className="text-white">
            Some of the noteworthy projects I have built:
          </div>
        </div>

        {/* CARD 1 — UBCAB */}
        <div className="w-full bg-[#1f2937] rounded-xl flex 
          max-sm:flex-col">

          {/* LEFT IMAGE */}
          <div className="w-1/2 bg-[#374151] rounded-l-xl p-8 
            max-sm:w-full max-sm:rounded-t-xl max-sm:rounded-b-none max-sm:flex max-sm:justify-center">
            <img
              className="w-full max-w-[480px] rounded-xl 
                max-sm:max-w-[279px] max-sm:h-48 object-cover"
              src="ub.png"
              alt=""
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-1/2 flex flex-col gap-6 p-8 text-white 
            max-sm:w-full max-sm:items-center max-sm:text-center">

            <div className="text-xl font-bold">UBCab</div>

            <div className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra.
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 max-w-[480px]">
              {[
                "React", "Next.js", "Typescript", "Nest.js",
                "PostgreSQL", "Tailwindcss", "Figma",
                "Cypress", "Storybook", "Git"
              ].map((t) => (
                <button
                  key={t}
                  className="px-3 h-7 bg-[#374151] rounded-xl text-sm"
                >
                  {t}
                </button>
              ))}
            </div>

            <img src="icon Button.png" alt="" />
          </div>
        </div>

        {/* CARD 2 — Mentorhub */}
        <div className="w-full bg-[#1f2937] rounded-xl flex 
          max-sm:flex-col">

          {/* LEFT CONTENT */}
          <div className="w-1/2 flex flex-col gap-6 p-8 text-white 
            max-sm:w-full max-sm:items-center max-sm:text-center">

            <div className="text-xl font-bold">Mentorhub</div>

            <div className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra.
            </div>

            <div className="flex flex-wrap gap-2 max-w-[480px]">
              {[
                "React", "Next.js", "Typescript", "Nest.js",
                "PostgreSQL", "Tailwindcss", "Figma",
                "Cypress", "Storybook", "Git"
              ].map((t) => (
                <button
                  key={t}
                  className="px-3 h-7 bg-[#374151] rounded-xl text-sm"
                >
                  {t}
                </button>
              ))}
            </div>

            <img src="icon Button.png" alt="" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 bg-[#374151] rounded-r-xl p-8 
            max-sm:w-full max-sm:rounded-b-xl max-sm:rounded-t-none max-sm:flex max-sm:justify-center">
            <img
              className="w-full max-w-[480px] rounded-xl 
                max-sm:max-w-[279px] max-sm:h-48 object-cover"
              src="mentorhub.png"
              alt=""
            />
          </div>
        </div>

        {/* CARD 3 — iToim */}
        <div className="w-full bg-[#1f2937] rounded-xl flex 
          max-sm:flex-col">

          <div className="w-1/2 bg-[#374151] rounded-l-xl p-8 
            max-sm:w-full max-sm:rounded-t-xl max-sm:rounded-b-none max-sm:flex max-sm:justify-center">
            <img
              className="w-full max-w-[480px] rounded-xl 
                max-sm:max-w-[279px] max-sm:h-48 object-cover"
              src="itoim.jpg"
              alt=""
            />
          </div>

          <div className="w-1/2 flex flex-col gap-6 p-8 text-white 
            max-sm:w-full max-sm:items-center max-sm:text-center">

            <div className="text-xl font-bold">iToim</div>

            <div className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra.
            </div>

            <div className="flex flex-wrap gap-2 max-w-[480px]">
              {[
                "React", "Next.js", "Typescript", "Nest.js",
                "PostgreSQL", "Tailwindcss", "Figma",
                "Cypress", "Storybook", "Git"
              ].map((t) => (
                <button
                  key={t}
                  className="px-3 h-7 bg-[#374151] rounded-xl text-sm"
                >
                  {t}
                </button>
              ))}
            </div>

            <img src="icon Button.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
