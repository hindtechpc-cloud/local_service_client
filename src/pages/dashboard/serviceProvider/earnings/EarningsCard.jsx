import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const EarningsCard = () => {
  return (
    <Card className="rounded-2xl shadow-sm bg-white border">
      <CardContent className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        <div>
          <p className="text-slate-500 text-sm mb-2">
            Available to Withdraw
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            $2,480.00
          </h2>
        </div>

        <Button className="mt-6 lg:mt-0 bg-teal-600 hover:bg-teal-700 rounded-xl px-8 py-6 text-base">
          <Wallet className="w-5 h-5 mr-2" />
          Withdraw Funds
        </Button>

      </CardContent>
    </Card>
  );
};

export default EarningsCard;
