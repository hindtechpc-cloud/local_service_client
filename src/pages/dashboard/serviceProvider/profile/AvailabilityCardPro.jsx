import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function AvailabilityCardPro({ setIsAvailable, isAvailable }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">
            <span className="text-teal-600 mr-2">•</span>
            Availability Status
          </h3>
          <p className="text-teal-600 mt-1">
            You are appearing as online for new jobs
          </p>
        </div>

        <Switch
          checked={isAvailable}
          onCheckedChange={(checked) => setIsAvailable(checked)}
          className="data-[state=checked]:bg-teal-600"
        />
      </CardContent>
    </Card>
  );
}
