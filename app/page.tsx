import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import OfferTable from "@/components/OfferTable";
import { Button } from "@/components/ui/button";
import { CarFront, Coins, Gift, PartyPopper, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-gradient-to-b from-blue-800 to-blue-500 w-full min-h-screen relative overflow-hidden">
      <div className="rounded-full bg-white/9 absolute h-[500px] w-[500px] left-[230px] top-[-200px]"></div>
      <div className="rounded-full bg-white/9 absolute h-[500px] w-[500px] right-[260px] top-160"></div>

      <Navbar />

      <div className="py-8 flex flex-col items-center justify-between">
        {/* TITLE */}
        <div className="font-noto flex flex-col gap-8 items-center justify-center my-8 pb-4 mx-6 px-6 w-full">
          <div className="flex items-center justify-center gap-2 text-white w-full">
            {/* <p
              className="font-bold text-xl text-center leading-relaxed"
              dir="rtl"
            >
              كري طوموبيل اليوم، وغدا ديها فابور!
            </p> */}

            <div
              className="font-bold text-3xl text-center leading-loose"
              dir="rtl"
            >
              <p>كري طوموبيل اليوم،</p>
              <p> وديها فابور غدا !!! </p>
            </div>
          </div>
          <div
            className="bg-white font-bold text-2xl text-blue-800 rounded-3xl text-center py-2 w-full leading-relaxed"
            dir="rtl"
          >
            <p>كيفاش هاد البلان؟</p>
          </div>
        </div>

        {/* DEATILS */}
        <div className="border-4 border-white shadow-xl rounded-2xl my-4 mx-5 px-2 py-4">
          {/* <Image
            src="/Fidelity_points_roadmap.png"
            alt="Fidelity Points roadmap"
            height={400}
            width={400}
          /> */}
          <div className="flex flex-col gap-5 items-end justify-between">
            <div
              className="flex gap-4 items-start justify-start text-white font-bold font-noto text-base"
              dir="rtl"
            >
              <CarFront className="h-6 w-6" />
              <p dir="rtl">مع Carigo، كل مرة كتكرّي فيها طوموبيل كتربح نقاط.</p>
            </div>
            <div
              className="flex gap-4 items-center justify-start text-white font-bold font-noto text-base"
              dir="rtl"
            >
              <Coins className="h-6 w-6" />
              <p dir="rtl">جمع النقاط.</p>
            </div>
            <div
              className="flex gap-4 items-center justify-start text-white font-bold font-noto text-base"
              dir="rtl"
            >
              <Target className="h-6 w-6" />
              <p dir="rtl">وصّل عدد كافي واستعمل نقاطك باش تكري فابور.</p>
            </div>
            <div
              className="flex gap-4 items-center justify-start text-white font-bold font-noto text-base"
              dir="rtl"
            >
              <Gift className="h-6 w-6" />
              <p dir="rtl"> خدم النقاط ديالك وقت ما بغيت.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 font-noto font-bold text-lg text-white z-10 mx-auto">
          <CTA />
        </div>

        {/* TABLE */}
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="z-10 border-2 border-white rounded-2xl mt-12">
            <OfferTable />
          </div>
          <Link href={"https://www.carigo.ma/fr"}>
            <Button
              asChild
              variant={"link"}
              className="text-white font-bold hover:underline"
            >
              <div className="font-noto">
                اكتشف تفاصيل عروضنا في الموقع ديالنا
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
