import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BookingCardPro({
  urgent,
  name,
  service,
  distance,
  time,
  image,
}) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                {" "}
                {urgent && (
                  <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
                    URGENT
                  </span>
                )}
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <Avatar className="h-16 w-16">
                <AvatarImage src={image} />
                <AvatarFallback>
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <p className="text-teal-600">
              {service} · {distance}
            </p>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              {urgent ? (
                <Clock className="w-4 h-4" />
              ) : (
                <Calendar className="w-4 h-4" />
              )}
              {time}
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <Button className="bg-teal-700 hover:bg-teal-800 rounded-xl w-full sm:w-auto">
            Accept Request
          </Button>

          <Button variant="secondary" className="rounded-xl w-full sm:w-auto">
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
