"use client";

import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Car {
  name: string;
  image: string;
}

interface CarouselProps {
  cars: Car[];
}

export const Carousel = ({ cars }: CarouselProps) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cars.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cars.length]);

  const currentCar = cars[current];

  return (
    <div className="flex flex-col justify-center items-center relative h-80 w-full">
      <Image
        src={currentCar.image}
        alt={currentCar.name}
        height={400}
        width={400}
      />
      <p className="text-white font-extrabold text-3xl">{currentCar.name}</p>
    </div>
  );
};
