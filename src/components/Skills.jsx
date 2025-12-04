export const Skills = () => {
  return (
    <div className="w-full h-[560px]  flex flex-row justify-center pt-20 pr-25 pl-24 ">
      <div className="flex flex-col gap-12">
        <div className="w-full h-[72px] flex flex-col justify-center items-center gap-[5px]">
          <button className="bg-[#374151] flex justify-center w-[75px] h-7 items-center rounded-xl">
            Skills
          </button>
          <div>The skills, tools and technologies I am really good at:</div>
        </div>
        <div className="w-full h-[248px] flex  flex-col gap-12">
          <div className="w-full h-[100px] flex gap-[86.7px]">
            <div className="w-[88px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img className="w-16 h-16" src="icon-javscript.svg" alt="" />
              Javascript
            </div>
            <div className="w-[90px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-typescript.svg" alt="" />
              Typescript
            </div>
            <div className="w-[69px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-react.svg" alt="" />
              React
            </div>
            <div className="w-16 h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-nextjs.svg" alt="" />
              Next.js
            </div>
            <div className="w-[65px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="Vector.png" alt="" />
              Node.js
            </div>
            <div className="w-[86px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-express.svg" alt="" />
              Express.js
            </div>
            <div className="w-[67px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-nest.svg" alt="" />
              Nest.js
            </div>
            <div className="w-[77px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-socket.svg" alt="" />
              Socket.io
            </div>
          </div>
          <div className="w-full h-[100px] flex gap-20">
            <div className="w-[102px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-postgresql.svg" alt="" />
              PostgrezSQL
            </div>
            <div className="w-[84px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-mongodb.svg" alt="" />
              MongoDB
            </div>
            <div className="w-[88px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-sass.svg" alt="" />
              Sass/Scss
            </div>
            <div className="w-[104px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-tailwindcss.svg" alt="" />
              Tailwindcss
            </div>
            <div className="w-[52px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-figma.svg" alt="" />
              Figma
            </div>
            <div className="w-[70px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-cypress.svg" alt="" />
              Cypress
            </div>
            <div className="w-[89px] h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-storybook.svg" alt="" />
              StoryBook
            </div>
            <div className="w-16 h-[100px] flex flex-col justify-center items-center gap-2">
              <img src="icon-git.svg" alt="" />
              Git
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
