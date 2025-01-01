import * as React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utilitis";
import { sign } from 'crypto';

const buttonVarints = cva(
  "inline-flex items-center text-slate-500 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring:ring disable-pointer-evets-none disable:opacity-50 ",
  {
    variants: {
      variant: {
        default: "bg-primary text-slate-500 text-primary-forground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-slate-500 text-destructive-forground shado-sm hover:bg-destructive/90 ",
        outline: "border border-inpput text-slate-500 bg-background shado-sm hover:bg-accent hover:text-accent-forground",
        secondary: "bg-secondary text-slate-500 text-secondary-forground shado-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent text-slate-500 hover:text-accent-forground",
        link: "text-primary text-slate-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVarints({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVarints };
