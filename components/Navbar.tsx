import { Car, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-6 w-full mt-8 px-4">
      <div className="flex justify-start items-center gap-2">
        <Car className="text-white h-12 w-12" />
        <p className="text-3xl font-extrabold text-white">CariGO</p>
      </div>
      <Link href="tel:+212715192639" className="flex gap-2 items-center z-10">
        <Phone className="text-blue-800 bg-white rounded-full p-1 w-8 h-8" />
        <div className="text-white text-sm">
          <p>Téléphone</p>
          <p className="font-bold">+212 7 15 19 26 39</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
