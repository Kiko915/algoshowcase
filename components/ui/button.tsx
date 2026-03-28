import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-transparent shadow-[0_4px_0_rgba(12,15,15,0.18)] translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(12,15,15,0.18)] active:translate-y-0 active:shadow-[0_2px_0_rgba(12,15,15,0.28)]",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(180deg,#7a7a7a,#3a3a3a)] text-primary-foreground border border-[#262626] hover:brightness-110",
        destructive:
          "bg-[linear-gradient(180deg,#ff8b8b,#c21f1f)] text-destructive-foreground border border-[#8f1414] hover:brightness-110",
        outline:
          "border border-border bg-[linear-gradient(180deg,#ffffff,#f3f3f3)] text-foreground hover:bg-[linear-gradient(180deg,#fdfdfd,#ebebeb)]",
        secondary:
          "bg-[linear-gradient(180deg,#fdfdfd,#dcdcdc)] text-secondary-foreground border border-[#c7c7c7] hover:brightness-105",
        accent:
          "bg-[linear-gradient(180deg,#8f4dff,#4b02c7)] text-accent-foreground border border-[#320b7a] hover:brightness-110",
        ghost:
          "bg-transparent text-foreground border border-transparent shadow-none translate-y-0 hover:bg-muted hover:text-foreground/90 hover:-translate-y-0 hover:shadow-none active:translate-y-0 active:shadow-none focus-visible:ring-0",
        link: "border-none bg-transparent p-0 h-auto shadow-none translate-y-0 text-foreground underline-offset-4 hover:underline hover:-translate-y-0 active:translate-y-0 focus-visible:ring-0",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-10 px-7 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
