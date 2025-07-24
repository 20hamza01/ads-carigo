import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CarFront, Coins, Gift } from "lucide-react";
import Image from "next/image";

const cars = [
  // Economic Cars
  {
    class: "Economic",
    brand: "Peugeot",
    model: "208",
    pricePerDay: 350,
    image: "/cars/peugeot-208.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 350,
  },
  {
    class: "Economic",
    brand: "Hyundai",
    model: "Accent",
    pricePerDay: 500,
    image: "/cars/accent.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 500,
  },
  {
    class: "Economic",
    brand: "Renault",
    model: "Clio 5",
    pricePerDay: 350,
    image: "/cars/clio5.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 350,
  },
  {
    class: "Economic",
    brand: "Dacia",
    model: "Logan",
    pricePerDay: 300,
    image: "/cars/dacia-Logan.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 300,
  },
  {
    class: "Economic",
    brand: "Citroen",
    model: "C3",
    pricePerDay: 420,
    image: "/cars/citroen_c3.png",
    carType: "Manual",
    fuel: "Diesel",
    pointsEarnedPerDay: 22,
    pointsNeededForRent: 420,
  },

  // Mid-Class Cars
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Tucson",
    pricePerDay: 800,
    image: "/cars/hyundai-tucson.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 800,
  },
  {
    class: "Mid-Class",
    brand: "Volkswagen",
    model: "T\u2011Roc", // \u2011 is a hyphen, but not a breakable hyphen.
    pricePerDay: 800,
    image: "/cars/t-roc.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 800,
  },
  {
    class: "Mid-Class",
    brand: "Hyundai",
    model: "Creta",
    pricePerDay: 800,
    image: "/cars/hyundai-creta.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 800,
  },
  {
    class: "Mid-Class",
    brand: "Changan",
    model: "C35",
    pricePerDay: 650,
    image: "/cars/Changan-C35-auto.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 650,
  },
  {
    class: "Mid-Class",
    brand: "MG",
    model: "ZS",
    pricePerDay: 750,
    image: "/cars/MG-ZS.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 750,
  },
  {
    class: "Mid-Class",
    brand: "Renault",
    model: "Arkana Hybrid",
    pricePerDay: 850,
    image: "/cars/renault-arkana.png",
    carType: "Automatic",
    fuel: "Essence",
    pointsEarnedPerDay: 45,
    pointsNeededForRent: 850,
  },

  // Luxury Cars
  {
    class: "Luxury",
    brand: "Range Rover",
    model: "Sport HSE",
    pricePerDay: 4500,
    image: "/cars/range-rover-hse.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 4500,
  },
  {
    class: "Luxury",
    brand: "Volkswagen",
    model: "Touareg",
    pricePerDay: 1500,
    image: "/cars/volkswagen-touareg.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 1500,
  },
  {
    class: "Luxury",
    brand: "Range Rover",
    model: "Vogue",
    pricePerDay: 5500,
    image: "/cars/range-rover-vogue.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 5500,
  },
  {
    class: "Luxury",
    brand: "Mercedes Benz",
    model: "AMG G63",
    pricePerDay: 9000,
    image: "/cars/Mercedes-Benz-AMG-G63.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 9000,
  },
  {
    class: "Luxury",
    brand: "Mercedes Benz",
    model: "S400",
    pricePerDay: 7500,
    image: "/cars/Mercedes-Benz-S400.png",
    carType: "Automatic",
    fuel: "Diesel",
    pointsEarnedPerDay: 225,
    pointsNeededForRent: 7500,
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

export default function OfferTable() {
  return (
    <Table>
      <TableHeader
        className="[&>tr]:border-b-2 [&>tr]:border-white font-noto"
        dir="rtl"
      >
        <TableRow className="text-sm">
          <TableHead className="border-r-2 border-white text-white font-bold">
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-5 w-5" />
              النقاط اللازمة للكراء
            </div>
          </TableHead>
          <TableHead className="border-r-2 border-white text-white font-bold">
            <div className="flex items-center justify-center gap-2">
              <Coins className="h-5 w-5" />
              النقاط / اليوم
            </div>
          </TableHead>
          <TableHead className="text-white font-bold">
            <div className="flex items-center justify-center gap-2">
              <CarFront className="h-5 w-5" />
              السيارة
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&>tr]:border-b-2 [&>tr]:border-white text-white">
        {cars.map((car, index) => (
          <TableRow key={`${car.brand}-${car.model}-${index}`}>
            <TableCell className="border-r-2 border-white" dir="rtl">
              <div className="flex items-center gap-2 font-bold justify-center">
                {car.pointsNeededForRent}
                <p>نقطة</p>
              </div>
            </TableCell>
            <TableCell className="border-r-2 border-white" dir="rtl">
              <div className="flex items-center gap-2 font-bold justify-center">
                {car.pointsEarnedPerDay}
                <p>نقطة</p>
              </div>
            </TableCell>
            <TableCell className="">
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={car.image}
                  width={80}
                  height={80}
                  alt="Whatsapp icon"
                />
                <div className="flex flex-col items-center justify-center gap-2 font-bold">
                  <p>{car.brand}</p>
                  <p>{car.model}</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
