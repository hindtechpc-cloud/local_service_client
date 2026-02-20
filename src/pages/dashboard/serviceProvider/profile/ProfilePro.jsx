import { useEffect, useState } from "react";
import AvailabilityCardPro from "./AvailabilityCardPro";
import BookingRequestsPro from "./BookingRequestsPro";
import EarningsCardPro from "./EarningsCardPro";
import HeaderSectionPro from "./HeaderSectionPro";
import StatsCardsPro from "./StatsCardsPro";
import { email } from "zod";

export default function ProfilePro() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    available: isAvailable ,
  });
  useEffect(() => {
    // setUserData({ ...userData, available: isAvailable });
    console.log(isAvailable);
    console.log(userData);
  }, [isAvailable,userData]);
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-8 space-y-8">
        <HeaderSectionPro
          setUserData={setUserData}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          userData={userData}
        />
        <AvailabilityCardPro
          setIsAvailable={setIsAvailable}
          isAvailable={isAvailable}
        />
        <div className="flex items-center justify-start gap-10">
          <EarningsCardPro />
          <StatsCardsPro />
        </div>
        <BookingRequestsPro />
      </div>
    </div>
  );
}
