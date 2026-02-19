import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function HeaderSectionPro() {
  return (
    <div className="flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-teal-600 text-sm font-medium uppercase tracking-wide">
            Welcome Back
          </p>
          <h2 className="text-2xl font-bold">Alex Rivera</h2>
        </div>
      </div>

      <Button variant="ghost" size="icon" className="rounded-full">
        <Bell className="w-5 h-5" />
      </Button>
    </div>
  );
}
