import React from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import EarningsCard from "./earnings/EarningsCard";
import EarningsChart from "./earnings/EarningsChart";
import RecentHistory from "./earnings/RecentHistory";

const EarningsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <h1 className="text-2xl font-semibold">Earnings</h1>

          <Button variant="ghost" size="icon">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        {/* Earnings Card */}
        <EarningsCard />

        {/* Chart Section */}
        <div className="mt-10">
          <EarningsChart/>
        </div>

        {/* History */}
        <div className="mt-12">
          <RecentHistory />
        </div>

      </div>
    </div>
  );
};

export default EarningsPage;
