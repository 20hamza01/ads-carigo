import { Carousel } from "@/components/Carousel";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import { cars } from "@/lib/cars";
import { CarFront, Hourglass, PartyPopper } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-gradient-to-b from-blue-800 to-blue-500 w-full min-h-screen relative overflow-hidden">
      <div className="rounded-full bg-white/9 absolute h-[500px] w-[500px] left-[230px] top-[-200px]"></div>
      <div className="rounded-full bg-white/9 absolute h-[500px] w-[500px] right-[260px] top-160"></div>

      <Navbar />

      <div className="py-8 flex flex-col items-center justify-between">
        {/* TITLE */}
        <div className="font-noto flex flex-col gap-4 items-center justify-center px-4">
          <div className="flex gap-4 items-center justify-center text-white">
            <p className="font-bold text-xl text-center" dir="rtl">
              أول مرة غتكري طوموبيلتك معانا؟
            </p>
            <PartyPopper className="h-10 w-10" />
          </div>
          <p
            className="bg-white font-bold text-xl text-blue-800 rounded-3xl text-center px-4 py-2"
            dir="rtl"
          >
            ستافد من تخفيض 100 درهم دابا دابا !!
          </p>
        </div>

        {/* DEATILS */}
        <div className="flex flex-col items-center font-noto text-white font-bold pt-10 px-1 gap-8 text-lg">
          <div className="flex items-center justify-center gap-2">
            <p dir="rtl">العرض شامل جميع السيارات.</p>
            <CarFront size={32} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <p dir="rtl">عرض خاص ومحدود لزبنائنا 10 الأوائل.</p>
            <Hourglass size={32} />
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="z-10">
          <Carousel cars={cars} />
        </div>

        {/* CTA */}
        <div className="pt-8 pb-8 font-noto font-bold text-lg text-white z-10 mx-auto">
          <CTA />
        </div>
      </div>
    </div>
  );
}
