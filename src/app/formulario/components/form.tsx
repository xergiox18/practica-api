"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import LabelField from "../../../features/shared/components/label-field";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      lastName: "",
      number: "",
      image: undefined,
      date: "",
    },
    mode: "onChange",
  });

  const [data, setData] = React.useState({});

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("number", data.number);

    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    setData(response);

    const visualData = {
      name: data.name,
      lastName: data.lastName,
      number: data.number,
      image: data.image?.name ?? "No file selected",
    };

    setData(visualData);
  }

  return (
    <div className="space-y-16 scroll-m-20 text-xl font-semibold tracking-tight">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="mb-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Formulario
          </CardTitle>
          <CardDescription>Ingresa tus Datos</CardDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-4"
            >
              <LabelField title="Name" controlName="name" />
              <LabelField title="Last Name" controlName="lastName" />
              <LabelField title="Number" controlName="number" />
              <LabelField title="Image" controlName="image" type="file" />
              <LabelField
                title="Date of Birth"
                controlName="date"
                type="date"
                placeholder="dd/mm/yyyy"
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardHeader>
        <pre className="px-4 py-6 bg-gray-50 border border-gray-200 rounded-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      </Card>
    </div>
  );
}

// }  return (
//     <div className="space-y-16 scroll-m-20 text-xl font-semibold tracking-tight">
//       <Card className="w-[600px]">
//         <CardHeader>
//           <CardTitle className="mb-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
//             Formulario
//           </CardTitle>
//           <CardDescription>Ingresa tus Datos</CardDescription>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="grid gap-4"
//             encType="multipart/form-data"
//           >
//             <Input
//               type="text"
//               placeholder="name"
//               className="rounded-lg"
//               {...register("name")}
//             />
//             {errors.name && (
//               <p className="text-sm text-red-400">{errors.name.message}</p>
//             )}
//             <Input
//               type="text"
//               placeholder="Last Name"
//               className="rounded-lg"
//               {...register("lastName")}
//             />
//             {errors.lastName && (
//               <p className="text-sm text-red-400">{errors.lastName.message}</p>
//             )}
//             <Input
//               type="number"
//               placeholder="Cedula"
//               className="rounded-lg"
//               {...register("number")}
//             />
//             {errors.number && (
//               <p className="text-sm text-red-400">{errors.number.message}</p>
//             )}

//             <Input
//               type="file"
//               accept="image/*"
//               className="rounded-lg"
//               {...register("image", {
//                 required: "Image is required",
//               })}
//             />

//             <Button
//               type="submit"
//               className="rounded-lg bg-black text-white py-2 hover size-15"
//             >
//               Submit
//             </Button>
//           </form>
//         </CardHeader>
//         <pre className="px-4 py-6 bg-gray-50 border border-gray-200 rounded-lg">
//           {JSON.stringify(data, null, 2)}
//         </pre>
//       </Card>
//     </div>
//   );
// }
