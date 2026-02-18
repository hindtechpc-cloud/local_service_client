import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function VerificationCard({ name, role }) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 text-center space-y-4">
        <div className="h-16 w-16 mx-auto bg-teal-100 rounded-full" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <Button className="w-full bg-teal-700 hover:bg-teal-800 rounded-xl">
          Review
        </Button>
      </CardContent>
    </Card>
  );
}
