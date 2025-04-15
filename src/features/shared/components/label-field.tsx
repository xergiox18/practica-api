import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
// import { MaskedInput } from "./masked-input";

interface LabelFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
  type?: "text" | "file" | "date";
  mask?: string;
}

export default function LabelField({
  controlName,
  title,
  placeholder,
  description,
  type = "text",
}: LabelFieldProps) {
  return (
    <FormField
      name={controlName}
      render={({ field }) => {
        const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
          if (value.length >= 3 && value.length <= 4)
            value = value.replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
          else if (value.length > 4)
            value = value.replace(/^(\d{2})(\d{2})(\d{1,4}).*/, "$1/$2/$3");
          field.onChange(value);
        };

        return (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              {type === "file" ? (
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file);
                    }
                  }}
                />
              ) : type === "date" ? (
                <Input
                  placeholder={placeholder}
                  maxLength={10}
                  value={field.value}
                  onChange={handleDateChange}
                />
              ) : (
                <Input placeholder={placeholder} {...field} />
              )}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
