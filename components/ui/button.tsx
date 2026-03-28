import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[13px] font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_2px_6px_rgba(46,49,146,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_3px_10px_rgba(46,49,146,0.4)]",
        destructive:
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_2px_6px_rgba(194,31,31,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_10px_rgba(194,31,31,0.35)]",
        outline:
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.08)]",
        secondary:
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_2px_6px_rgba(46,49,146,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_10px_rgba(46,49,146,0.25)]",
        accent:
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_2px_6px_rgba(66,22,191,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_10px_rgba(66,22,191,0.35)]",
        ghost: "shadow-none",
        link: "shadow-none !h-auto !px-0 !py-0 underline-offset-4",
      },
      size: {
        default: "h-11 px-6 text-[13px]",
        sm: "h-9 px-4 text-[12px]",
        lg: "h-12 px-8 text-[14px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type VariantKey = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;

type VariantStyles = {
  base: React.CSSProperties;
  hover?: React.CSSProperties;
};

const VARIANT_STYLES: Record<VariantKey, VariantStyles> = {
  default: {
    base: {
      background: "linear-gradient(180deg, #3336a4 0%, #2a2d8c 100%)",
      color: "#ffffff",
      border: "1px solid rgba(0, 0, 0, 0.18)",
    },
    hover: {
      background: "linear-gradient(180deg, #3538b5 0%, #272a86 100%)",
    },
  },
  destructive: {
    base: {
      background: "linear-gradient(180deg, #ff8b8b 0%, #c21f1f 100%)",
      color: "#ffffff",
      border: "1px solid #8f1414",
    },
    hover: {
      background: "linear-gradient(180deg, #ff9b9b 0%, #d72626 100%)",
    },
  },
  outline: {
    base: {
      background: "linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%)",
      color: "#4a5668",
      border: "1px solid #d0d5dd",
    },
    hover: {
      background: "linear-gradient(180deg, #f9fafb 0%, #eceef1 100%)",
      color: "#0f1f2e",
    },
  },
  secondary: {
    base: {
      background: "linear-gradient(180deg, #ffffff 0%, #ecedf9 100%)",
      color: "#2e3192",
      border: "1px solid rgba(46, 49, 146, 0.25)",
    },
    hover: {
      background: "linear-gradient(180deg, #f6f6ff 0%, #e3e6fb 100%)",
      color: "#252880",
    },
  },
  accent: {
    base: {
      background: "linear-gradient(180deg, #6f3bff 0%, #4216bf 100%)",
      color: "#ffffff",
      border: "1px solid #320b7a",
    },
    hover: {
      background: "linear-gradient(180deg, #7d4dff 0%, #4b1fd4 100%)",
    },
  },
  ghost: {
    base: {
      background: "transparent",
      color: "#0f1f2e",
      border: "1px solid transparent",
    },
    hover: {
      background: "#ecedf9",
      color: "#252880",
    },
  },
  link: {
    base: {
      background: "transparent",
      color: "#2e3192",
      border: "1px solid transparent",
      textDecoration: "none",
    },
    hover: {
      color: "#252880",
      textDecoration: "underline",
    },
  },
};

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,

      variant,

      size,

      asChild = false,

      style,

      onMouseEnter,

      onMouseLeave,

      disabled,

      ...props
    },

    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
      if (disabled) {
        setIsHovered(false);
      }
    }, [disabled]);

    const resolvedVariant = (variant ?? "default") as VariantKey;

    const styles = VARIANT_STYLES[resolvedVariant] ?? VARIANT_STYLES.default;

    const mergedStyle: React.CSSProperties = {
      ...styles.base,

      ...(isHovered && !disabled ? styles.hover : undefined),

      ...style,
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={cn(
          buttonVariants({
            variant: resolvedVariant,
            size,
            className,
          }),
        )}
        style={mergedStyle}
        onMouseEnter={(event) => {
          if (!disabled) {
            setIsHovered(true);
          }

          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          if (isHovered) {
            setIsHovered(false);
          }

          onMouseLeave?.(event);
        }}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
