import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import HistoryItem from "./HistoryItem";

const RecentHistory = () => {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="md:p-8 p-4">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Recent History
          </h2>
          <button className="text-teal-600 font-medium">
            See All
          </button>
        </div>

        <div className="space-y-4">
          <HistoryItem
            name="John Doe"
            service="Emergency Plumbing"
            date="Oct 12"
            image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
            amount="$150.00"
          />
          <HistoryItem
            name="Sarah Smith"
            service="Math Tutoring"
            date="Oct 11"
            image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
            amount="$45.00"
          />
          <HistoryItem
            name="Robert Chen"
            service="Electrical Repair"
            date="Oct 10"
            image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
            amount="$210.00"
          />
          <HistoryItem
            name="Emily Watson"
            service="Piano Lesson"
            date="Oct 09"
            image="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
            amount="$60.00"
          />
        </div>

      </CardContent>
    </Card>
  );
};

export default RecentHistory;
