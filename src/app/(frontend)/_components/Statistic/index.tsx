import GlobalContents from "@/contents/global.json";

export default function Statistic() {
  return (
    <div className="stats container max-w-[1130px] mx-auto bg-gradient-to-r from-[#FFEDD3] to-[#FFCD83] flex justify-between items-center px-[100px] rounded-[30px] w-full h-[180px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2">
      <div className="text-center w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.service}
        </p>
        <p className="font-semibold text-lg">Servis</p>
      </div>
      <div className="text-center w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.customerSatisfaction}
        </p>
        <p className="font-semibold text-lg">Kepuasan Pelanggan</p>
      </div>
      <div className="text-center w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.testDrive}
        </p>
        <p className="font-semibold text-lg">Test Drive</p>
      </div>
      <div className="text-center w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.original}
        </p>
        <p className="font-semibold text-lg">Original</p>
      </div>
      <div className="text-center w-fit h-fit">
        <p className="font-extrabold text-[40px] leading-[60px]">
          {GlobalContents.statistic.experience}
        </p>
        <p className="font-semibold text-lg">Pengalaman</p>
      </div>
    </div>
  );
}
