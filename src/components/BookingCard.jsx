import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare } from "lucide-react"

export default function BookingCard({
  status,
  title,
  provider,
  price,
  date,
  statusColor = "gray",
  completed = false,
}) {
  const statusStyles = {
    yellow: "bg-yellow-100 text-yellow-700",
    teal: "bg-teal-100 text-teal-700",
    gray: "bg-gray-200 text-gray-600",
  }

  return (
    <Card className="rounded-2xl shadow-sm border-none overflow-hidden">
      <div
        className={`h-2 ${
          statusColor === "yellow"
            ? "bg-yellow-400"
            : statusColor === "teal"
            ? "bg-teal-600"
            : "bg-gray-300"
        }`}
      ></div>

      <CardContent className="p-6 space-y-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex gap-4">

            {/* Image */}
            <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>

            <div>
              <Badge
                className={`mb-2 ${statusStyles[statusColor]}`}
              >
                {status}
              </Badge>

              <h3 className="text-xl font-semibold">
                {title}
              </h3>

              <p className="text-gray-500 text-sm">
                {provider}
              </p>
            </div>
          </div>

          <div className="text-lg font-semibold text-teal-600">
            {price}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t">

          <p className="text-gray-600 text-sm">
            {date}
          </p>

          {!completed ? (
            <Button className="bg-teal-600 hover:bg-teal-700 rounded-xl">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </Button>
          ) : (
            <Button
              variant="outline"
              className="rounded-xl border-teal-600 text-teal-600"
            >
              Rate Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
