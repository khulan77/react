export const About = () => {
  return (
    <div className="bg-[#111827] h-[826px] w-full flex  justify-center items-center flex-col gap-[48px]  pr-25 pl-24">
      <div className="w-7xl h-[634px] flex flex-col justify-center items-center gap-[48px] pl-[32px] pr-[32px]">
        <button className="bg-[#374151] w-[105px] h-[28px] rounded-xl">
          About me
        </button>
        <div className="flex flex-row w-full h-[588px] justify-between ">
          <div className="w-[584px] h-[558px]">
            <img src="tom.png" alt="" />
          </div>
          <div className="w-[584px] h-[558px] gap-[24px] flex flex-col">
            <div className="text-white text-3xl flex  font-Semi bold ">
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
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <div className="flex w-[584px] h-[58px] gap-[10px] ">
              <div className="w-[287px] h-[58px]">
                <div> B.E. in Computer Engineering</div>
                <div>Full time freelancer</div>
              </div>
              <div>Avid learner</div>
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
