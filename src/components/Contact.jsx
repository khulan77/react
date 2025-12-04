export const Contact = () => {
  return (
    <div className="w-full h-[560px] flex justify-center">
      <div className="w-7xl h-[368px] flex flex-col justify-center items-center pl-20 pr-20 pt-24 gap-12">
        <div className="w-full h-[100px] flex  flex-col gap-4 justify-center items-center  pl-16 pr-16">
          <button className="w-[122px] h-7  rounded-xl bg-[#374151]">
            Get in touch
          </button>
          <div className="w-full h-14 flex flex-col justify-center items-center">
            <div className="w-[450px]  h-7 justify-center">
              What’s next? Feel free to reach out to me if you're looking for a
            </div>
            <div className="w-[380px]  h-7 justify-center items-center ">
              developer, have a query, or simply want to connect
            </div>
          </div>
        </div>
        <div className="w-[436px] h-[104px] flex flex-col justfy-center items-center">
          <div className="w-full h-11 flex justify-between">
            <div>
              <img src="mail.png" alt="" />
            </div>
            <div className="text-4xl text-white font-bold">tom@pinecone.mn</div>
            <div>
              <img src="copy.png" alt="" />
            </div>
          </div>
          <div className="w-[388px] h-11 flex justify-between">
            <div>
              <img src="phone.png" alt="" />
            </div>
            <div className="text-4xl text-white font-bold">+976 88112233</div>
            <div>
              <img src="copy.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[312px] h-[68px] flex flex-col justify-center items-center gap-2">
          <div className="text-base">
            You may also find me on these platforms!
          </div>
          <div className="h-9 w-[116px] flex flex-row justify-between">
            <div>
              <img src="github.png" alt="" />
            </div>
            <div>
              <img src="twiter.png" alt="" />
            </div>
            <div>
              <img src="figma.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
