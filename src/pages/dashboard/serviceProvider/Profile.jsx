"use client";

import { Bell, DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Welcome Back
              </p>
              <h1 className="text-2xl font-bold">Alex Rivera</h1>
            </div>
          </div>

          <div className="bg-white rounded-full p-3 shadow cursor-pointer">
            <Bell className="h-5 w-5" />
          </div>
        </div>

        {/* Availability + Earnings Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Availability Card */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 bg-green-500 rounded-full" />
                  Availability Status
                </h2>
                <p className="text-muted-foreground mt-2">
                  You are appearing as online for new jobs
                </p>
              </div>

              <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
            </CardContent>
          </Card>

          {/* Earnings Card */}
          <Card className="bg-teal-700 text-white rounded-2xl shadow-xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg">Monthly Earnings</p>
                <DollarSign />
              </div>

              <h2 className="text-4xl font-bold">$2,450.00</h2>

              <div className="inline-flex items-center gap-2 bg-teal-600 px-4 py-1 rounded-full text-sm">
                <TrendingUp className="h-4 w-4" />
                12% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-muted-foreground">Today's Jobs</p>
              <h2 className="text-3xl font-bold mt-2">4</h2>
              <p className="text-sm text-teal-600 mt-1">active</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-muted-foreground">Pending</p>
              <h2 className="text-3xl font-bold mt-2">3</h2>
              <p className="text-sm text-yellow-500 mt-1">New</p>
            </CardContent>
          </Card>
        </div>

        {/* Booking Requests */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Booking Requests</h2>
            <button className="text-teal-600 font-medium hover:underline">
              View all
            </button>
          </div>

          {/* Request Card 1 */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              
              <div className="space-y-2">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                  URGENT
                </span>

                <h3 className="text-lg font-semibold">John D.</h3>
                <p className="text-muted-foreground">
                  Electrical Inspection · 2.5 miles away
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Starts at 2:00 PM
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button className="bg-teal-700 hover:bg-teal-800 rounded-xl">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Accept Request
                </Button>
                <Button variant="secondary" className="rounded-xl">
                  Decline
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Request Card 2 */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Sarah L.</h3>
                <p className="text-muted-foreground">
                  Math Tutoring · 1.2 miles away
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Tomorrow, 10:00 AM
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button className="bg-teal-700 hover:bg-teal-800 rounded-xl">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Accept Request
                </Button>
                <Button variant="secondary" className="rounded-xl">
                  Decline
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
