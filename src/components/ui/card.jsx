import * as React from "react";
import { cn } from "@/lib/utils";

const make = (name, base) => {
  const C = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(base, className)} {...props} />
  ));
  C.displayName = name;
  return C;
};

export const Card = make("Card", "rounded-lg border border-border bg-card text-card-foreground");
export const CardHeader = make("CardHeader", "flex flex-col gap-1.5 p-5");
export const CardContent = make("CardContent", "p-5 pt-0");
export const CardFooter = make("CardFooter", "flex items-center p-5 pt-0");
