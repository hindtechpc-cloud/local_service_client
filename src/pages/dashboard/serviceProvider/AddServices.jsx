"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { professionalSchema } from "@/utils/validations";

export default function AddServices() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      expertise: [],
      services: [{ serviceTitle: "", description: "", price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  const onSubmit = (data) => {
    console.log(data);
    // Send to backend API
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-4xl mx-auto p-8"
    >
      {/* BASIC INFO */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>

          <Input placeholder="Full Name" {...register("name")} />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>

          <Input placeholder="Professional Title" {...register("title")} />
          <Input placeholder="Location" {...register("location")} />

          <div className="grid grid-cols-3 gap-4">
            <Input
              type="number"
              placeholder="Experience (Years)"
              {...register("experience", { valueAsNumber: true })}
            />
            <Input
              type="number"
              placeholder="Rating"
              step="0.1"
              {...register("rating", { valueAsNumber: true })}
            />
            <Input
              type="number"
              placeholder="Jobs Completed"
              {...register("jobs", { valueAsNumber: true })}
            />
          </div>

          <Input
            type="number"
            placeholder="Starting Price"
            {...register("startingPrice", { valueAsNumber: true })}
          />
        </CardContent>
      </Card>

      {/* EXPERTISE */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Expertise</h2>

          <Input
            placeholder="Comma separated (EV Charging, Smart Lighting)"
            {...register("expertise", {
              setValueAs: (v) => {
                if (typeof v !== "string") return [];
                return v
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean);
              },
            })}
          />
        </CardContent>
      </Card>

      {/* SERVICES */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">Services & Pricing</h2>

          {fields.map((field, index) => (
            <div key={field.id} className="space-y-3 border p-4 rounded-xl">
              <Input
                placeholder="Service Title"
                {...register(`services.${index}.serviceTitle`)}
              />

              <Textarea
                placeholder="Description"
                {...register(`services.${index}.description`)}
              />

              <Input
                type="number"
                placeholder="Price"
                {...register(`services.${index}.price`, {
                  valueAsNumber: true,
                })}
              />

              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            type="button"
            onClick={() =>
              append({ serviceTitle: "", description: "", price: 0 })
            }
          >
            Add Service
          </Button>
        </CardContent>
      </Card>

      <Button type="submit" size="lg" className="w-full">
        Save Profile
      </Button>
    </form>
  );
}
