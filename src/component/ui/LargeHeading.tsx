import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/util";
interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof LargeHeadingVariant> {}

const LargeHeadingVariant = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tight",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(LargeHeadingVariant({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);
LargeHeading.displayName = "HeadingLarge";
export default LargeHeading;
