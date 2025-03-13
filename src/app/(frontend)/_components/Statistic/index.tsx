import GlobalContents from "@/contents/global.json";

export default function Statistic() {
  return (
    <div className="stats container max-w-[1130px] mx-auto bg-gradient-to-r from-[#FFEDD3] to-[#FFCD83] overflow-x-auto lg:overflow-hidden flex whitespace-nowrap gap-7 lg:gap-0 lg:whitespace-normal justify-between items-center px-5 lg:px-[100px] rounded-[30px] w-[90%] lg:w-full h-[180px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2">
      <div className="text-center flex-[0_0_50%] lg:flex-none w-full lg:w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.service}
        </p>
        <p className="font-semibold text-lg">Servis</p>
      </div>
      <div className="text-center flex-[0_0_50%] lg:flex-none w-full lg:w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.customerSatisfaction}
        </p>
        <p className="font-semibold text-lg">Kepuasan Pelanggan</p>
      </div>
      <div className="text-center flex-[0_0_50%] lg:flex-none w-full lg:w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.testDrive}
        </p>
        <p className="font-semibold text-lg">Test Drive</p>
      </div>
      <div className="text-center flex-[0_0_50%] lg:flex-none w-full lg:w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.original}
        </p>
        <p className="font-semibold text-lg">Original</p>
      </div>
      <div className="text-center flex-[0_0_50%] lg:flex-none w-full lg:w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.experience}
        </p>
        <p className="font-semibold text-lg">Pengalaman</p>
      </div>
    </div>
  );
}
