import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

export function VerificationCard({ name, role, image }) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
      <CardContent className="p-6 text-center space-y-4">
        
        {/* Avatar */}
        <Avatar className="h-16 w-16 mx-auto">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>
            {name
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        {/* Info */}
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>

        {/* Button */}
        <Button className="w-full bg-teal-700 hover:bg-teal-800 rounded-xl">
          Review
        </Button>

      </CardContent>
    </Card>
  );
}
