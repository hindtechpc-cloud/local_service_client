import { z } from "zod";

export const professionalSchema = z.object({
  name: z.string().min(2, "Name is required"),
  title: z.string().min(2, "Title is required"),
  location: z.string().min(2, "Location is required"),
  experience: z.number().min(0),
  rating: z.number().min(0).max(5),
  jobs: z.number().min(0),
  startingPrice: z.number().min(0),
  expertise: z.array(z.string()).min(1, "Add at least one expertise"),
  services: z.array(
    z.object({
      serviceTitle: z.string().min(2),
      description: z.string().min(5),
      price: z.number().min(0),
    })
  ),
});