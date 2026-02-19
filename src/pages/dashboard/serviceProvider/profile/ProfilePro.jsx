import AvailabilityCardPro from "./AvailabilityCardPro";
import BookingRequestsPro from "./BookingRequestsPro";
import EarningsCardPro from "./EarningsCardPro";
import HeaderSectionPro from "./HeaderSectionPro";
import StatsCardsPro from "./StatsCardsPro";

export default function ProfilePro() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-8 space-y-8">
        <HeaderSectionPro />
        <AvailabilityCardPro />
        <div className="flex items-center justify-start gap-10">
          <EarningsCardPro />
          <StatsCardsPro />
        </div>
        <BookingRequestsPro />
      </div>
    </div>
  );
}
