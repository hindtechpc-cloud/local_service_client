import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(3),
  experience: z.string().min(1),
  hourlyRate: z.string().min(1),
})

export default function OfferServiceForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log("Professional Data:", data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Professional Account
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

            {["name", "email", "phone", "service", "experience", "hourlyRate"].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {field.name}
                    </FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
              Create Account
            </Button>

          </form>
        </Form>
      </div>
    </div>
  )
}
