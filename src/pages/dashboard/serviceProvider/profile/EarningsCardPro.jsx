import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Wallet } from "lucide-react";

export default function EarningsCardPro() {
  return (
    <Card className="rounded-2xl bg-teal-700 text-white shadow-lg">
      <CardContent className="p-8 space-y-6">
        
        <div className="flex justify-between items-center">
          <p className="text-lg">Monthly Earnings</p>
          <Wallet className="w-6 h-6 opacity-70" />
        </div>

        <h2 className="text-4xl font-bold">$2,450.00</h2>

        <div className="inline-flex items-center gap-2 bg-teal-600/70 px-4 py-2 rounded-full text-sm">
          <ArrowUpRight className="w-4 h-4" />
          12% from last month
        </div>

      </CardContent>
    </Card>
  );
}
