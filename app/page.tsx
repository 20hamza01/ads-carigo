import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import OfferTable from "@/components/OfferTable";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
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
        <div className="font-noto flex flex-col gap-8 items-center justify-center mx-2 my-8 pb-4">
          <div className="flex items-center justify-center gap-2 text-white w-full">
            <p
              className="font-bold text-xl text-center leading-relaxed"
              dir="rtl"
            >
              تكري طوموبيل اليوم، وغدا تكريها فابور!{" "}
            </p>
            <PartyPopper className="h-8 w-8" />
          </div>
          <div
            className="bg-white font-bold text-xl text-blue-800 rounded-3xl text-center px-4 py-2 w-full leading-relaxed"
            dir="rtl"
          >
            <p>كيفاش هاد البلان؟</p>
          </div>
        </div>

        {/* DEATILS */}
        <div className="border-4 border-white shadow-xl rounded-2xl px-4 my-4">
          <Image
            src="/Fidelity Points roadmap.png"
            alt="Fidelity Points roadmap"
            height={400}
            width={400}
          />
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
