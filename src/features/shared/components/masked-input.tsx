// import React, { useRef, useEffect } from "react";
// import InputMask from "react-input-mask";
// import { cn } from "@/lib/utils";

// export const MaskedInput = React.forwardRef<
//   HTMLInputElement,
//   React.InputHTMLAttributes<HTMLInputElement> & { mask: string }
// >(({ className, mask, onChange, onBlur, value, name, placeholder }, ref) => {
//   const internalRef = useRef<HTMLInputElement>(null);

//   // Si se pasó un ref desde react-hook-form, lo asignamos correctamente
//   useEffect(() => {
//     if (typeof ref === "function") {
//       ref(internalRef.current);
//     } else if (ref) {
//       (ref as React.MutableRefObject<HTMLInputElement | null>).current =
//         internalRef.current;
//     }
//   }, [ref]);

//   return (
//     <InputMask mask={mask} value={value} onChange={onChange} onBlur={onBlur}>
//       {(inputProps) => (
//         <input
//           {...inputProps}
//           ref={internalRef}
//           name={name}
//           placeholder={placeholder}
//           className={cn(
//             "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//             className
//           )}
//         />
//       )}
//     </InputMask>
//   );
// });

// MaskedInput.displayName = "MaskedInput";
