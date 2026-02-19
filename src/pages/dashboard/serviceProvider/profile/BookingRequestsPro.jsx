import BookingCardPro from "./BookingCardPro";

export default function BookingRequestsPro() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Booking Requests</h2>
        <button className="text-teal-600 font-medium">View all</button>
      </div>
      <div className="flex items-center justify-start gap-5 flex-wrap">
        <BookingCardPro
          urgent
          name="John D."
          image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
          service="Electrical Inspection"
          distance="2.5 miles away"
          time="Starts at 2:00 PM"
        />

        <BookingCardPro
          name="Sarah L."
          image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
          service="Math Tutoring"
          distance="1.2 miles away"
          time="Tomorrow, 10:00 AM"
        />
      </div>
    </div>
  );
}
