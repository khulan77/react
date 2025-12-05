export const About = () => {
  return (
    <div
      className="bg-[#111827] w-full flex justify-center items-center flex-col gap-12  
                     max-sm:justify-center
                    max-sm:items-center"
    >
      <div
        className="w-7xl flex flex-col justify-center items-center gap-12  pt-24 pb-24
                      max-sm:w-full max-sm:px-2"
      >
        <button className="bg-[#374151] w-[105px] h-7 rounded-xl text-white">
          About me
        </button>

        <div className="flex flex-row w-full justify-between max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-8">
          <div className="w-[400px] h-[480px] flex max-sm:hidden">
            <img
              src="about.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden max-sm:w-[250px] max-sm:h-[260px] max-sm:flex">
            <img src="about1.png" alt="" />
          </div>
          <div className="w-[584px]  gap-6 flex flex-col text-white max-sm:w-full">
            <div className="text-3xl font-semibold">
              Curious about me? Here you have it:
            </div>

            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>

            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>

            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding.
            </p>

            <p>Finally, some quick bits about me.</p>

            <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
              <div>
                <div>• B.E. in Computer Engineering</div>
                <div>• Full time freelancer</div>
              </div>
              <div>• Avid learner</div>
            </div>

            <div>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
