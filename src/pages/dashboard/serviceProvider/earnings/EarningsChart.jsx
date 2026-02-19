import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { day: "M", value: 40 },
  { day: "T", value: 70 },
  { day: "W", value: 120 },
  { day: "T", value: 80 },
  { day: "F", value: 90 },
  { day: "S", value: 30 },
  { day: "S", value: 85 },
];

const EarningsChart = () => {
  //   const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <Tabs defaultValue="weekly" className="mb-8">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex items-end justify-between sm:gap-6 gap-2 ">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center h-64 w-full">
              <div className="relative w-8 md:w-10 bg-slate-200 rounded-full h-full flex items-end overflow-hidden">
                <div
                    style={{ height: `${item.value}px` }}
                  className={`w-full bg-teal-600 rounded-full transition-all duration-500 `}
                />
              </div>

              <span className="mt-3 text-sm text-slate-500">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EarningsChart;
