import BlurImage from "@/app/components/BlurImage";
import Statistic from "../Statistic";

export default function Workflow() {
  return (
    <section
      id="Workflow"
      className="container max-w-[1130px] mx-auto pt-[100px] pb-[200px] relative"
    >
      <div className="flex flex-col gap-[50px] justify-center">
        <h2 className="font-extrabold text-[50px] leading-[70px] text-center lg:w-4/5 mx-auto">
          Langkah Mudah Perawatan Kendaraan Anda
        </h2>
        <div className="flex justify-between items-start">
          <div className="w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
            <div className="flex-none">
              <BlurImage src="/images/icons/messages-notif.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-[10px] text-center">
              <p className="font-extrabold text-[22px] leading-[33px]">
                Cek dan Diagnosa Awal
              </p>
              <p className="text-lg leading-[34px]">
                Tim ahli kami akan memeriksa kendaraan Anda untuk memastikan
                kondisi terbaik sebelum melakukan perawatan atau perbaikan.
              </p>
            </div>
          </div>
          <div className="w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
            <div className="flex-none">
              <BlurImage
                src="/images/icons/programming-notif.svg"
                height="150"
                className="h-[150px]"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-[10px] text-center">
              <p className="font-extrabold text-[22px] leading-[33px]">
                Proses Perawatan atau Perbaikan
              </p>
              <p className="text-lg leading-[34px]">
                Perbaikan dilakukan dengan teknologi terkini dan komponen asli,
                memastikan kualitas terbaik untuk kendaraan Anda.
              </p>
            </div>
          </div>
          <div className="w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
            <div className="flex-none">
              <BlurImage src="/images/icons/like-notif.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-[10px] text-center">
              <p className="font-extrabold text-[22px] leading-[33px]">
                Kendaraan Siap Digunakan
              </p>
              <p className="text-lg leading-[34px]">
                Setelah selesai, kendaraan Anda akan diuji coba dan diserahkan
                dalam kondisi optimal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Statistic />
    </section>
  );
}
