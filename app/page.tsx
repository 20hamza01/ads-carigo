import { Carousel } from "@/components/Carousel";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import { cars } from "@/lib/cars";
import { CarFront, Hourglass, PartyPopper } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="mt-8 px-6">
        <Navbar />
      </div>

      <div className="mt-4 py-8 flex flex-col items-center justify-between">
        {/* TITLE */}
        <div className="font-noto flex flex-col gap-4 items-center justify-center mb-8">
          <div className="flex gap-4 items-center text-white">
            <PartyPopper className="h-10 w-10" />
            <p className="font-bold text-2xl">أول مرة غتكري طوموبيلتك معانا؟</p>
          </div>
          <p className="bg-white font-bold text-2xl text-blue-800 rounded-3xl px-4 py-2">
            !! ستافد من تخفيض 100 دابا دابا
          </p>
        </div>

        {/* DEATILS */}
        <div className="flex flex-col items-end justify-between font-noto text-white font-bold py-8 px-16 gap-8 text-xl">
          <div className="flex items-center gap-2">
            <p>العرض شامل جميع السيارات</p>
            <CarFront size={32} />
          </div>
          <div className="flex items-center gap-2">
            <p>عرض خاص ومحدود لزبنائنا 10 الأوائل</p>
            <Hourglass size={32} />
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="z-10">
          <Carousel cars={cars} />
        </div>

        {/* CTA */}
        <div className="pt-16 pb-8 font-noto font-bold text-lg text-white z-10 mx-auto">
          <CTA />
        </div>
      </div>
    </div>
  );
}
