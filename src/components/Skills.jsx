export const Skills = () => {
  return (
    <div className="w-full h-[560px]  flex flex-row justify-center pt-20 pr-25 pl-24 ">
      <div className="flex flex-col gap-[48px]">
        <div className="w-full h-[72px] flex flex-col justify-center items-center gap-[5px]">
          <button className="bg-[#374151] flex justify-center w-[75px] h-[28px] items-center rounded-xl">
            Skills
          </button>
          <div>The skills, tools and technologies I am really good at:</div>
        </div>
        <div className="w-full h-[248px] flex  flex-col gap-[48px]">
          <div className="w-full h-[100px] flex gap-[86.7px]">
            <div>
              <img src="icon-javscript.svg" alt="" />
              Javascript
            </div>
            <div>
              <img src="icon-typescript.svg" alt="" />
              Typescript
            </div>
            <div>
              <img src="icon-react.svg" alt="" />
              React
            </div>
            <div>
              <img src="icon-nextjs.svg" alt="" />
              Next.js
            </div>
            <div>
              <img src="Vector.png" alt="" />
              Node.js
            </div>
            <div>
              <img src="icon-express.svg" alt="" />
              Express.js
            </div>
            <div>
              <img src="icon-nest.svg" alt="" />
              Nest.js
            </div>
            <div>
              <img src="icon-socket.svg" alt="" />
              Socket.io
            </div>
          </div>
          <div className="w-full h-[100px] flex gap-[80px]">
            <div>
              <img src="icon-postgresql.svg" alt="" />
              PostgrezSQL
            </div>
            <div>
              <img src="icon-mongodb.svg" alt="" />
              MongoDB
            </div>
            <div>
              <img src="icon-sass.svg" alt="" />
              Sass/Scss
            </div>
            <div>
              <img src="icon-tailwindcss.svg" alt="" />
              Tailwindcss
            </div>
            <div>
              <img src="icon-figma.svg" alt="" />
              Figma
            </div>
            <div>
              <img src="icon-cypress.svg" alt="" />
              Cypress
            </div>
            <div>
              <img src="icon-storybook.svg" alt="" />
              StoryBook
            </div>
            <div>
              <img src="icon-git.svg" alt="" />
              Git
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
