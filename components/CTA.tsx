"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  const handleWhatsAppClick = async () => {
    await fetch("/api/tiktok", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: window.location.href,
        referrer: document.referrer,
      }),
    });

    // Then redirect to WhatsApp
    window.open(
      "https://wa.me/+212715192639?text=سلام%20👋%D8%8C%20بغيت%20نستافد%20من%20العرض",
      "_blank"
    );
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <Link
        href={
          "https://wa.me/+212715192639?text=سلام%20👋%D8%8C%20بغيت%20نستافد%20من%20العرض"
        }
      >
        <Button
          asChild
          className="bg-green-500 font-bold hover:bg-green-600 cursor-pointer"
          onClick={handleWhatsAppClick}
        >
          <div>
            بغيتي تحجز؟ كليكي هنا و راسلنا دابا
            <Image
              src={"/whatsapp-icon.png"}
              width={25}
              height={25}
              alt="Whatsapp icon"
            />
          </div>
        </Button>
      </Link>

      <Link href={"https://www.carigo.ma/fr"}>
        <Button
          asChild
          variant={"link"}
          className="text-white font-bold hover:underline"
        >
          <div className="">اكتشف عروضنا في الموقع ديالنا</div>
        </Button>
      </Link>
    </div>
  );
};

export default CTA;
