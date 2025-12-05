import { Rubik_Mono_One } from "next/font/google";
const tom = Rubik_Mono_One({ subsets: ["Latin"], weight: ["400"] });

export const Header = () => {
  return (
    <div className="flex flex-row bg-[#030712] w-full h-[68px] pt-4 pr-20 pb-4 pl-20 items-center justify-between max-sm:pl-4 max-sm:pr-4">
      <div
        className={`w-19 h-9 text-[30px] font-normal  ${tom.className} max-sm:`}
      >
        TOM
      </div>
      <div className="w-[554px] h-9 gap-6 flex flex-row items-center text-[#D1D5DB] font-medium text-[16px] max-sm:hidden ">
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <div>|</div>
        <img src="icon.png" alt="" />
        <img className="w-9 h-9" src="moon.png" alt="" />
        <div className="w-[136] h-9 rounded-xl flex justify-center items-center gap-2 bg-[#F9FAFB] text-[#111827] text-[16px] font-medium">
          Download CV
        </div>
      </div>
      <img
        className="w-9 h=[36px] hidden max-sm:flex max-sm:justify-center "
        src="three77.png"
        alt=""
      />
    </div>
  );
};
