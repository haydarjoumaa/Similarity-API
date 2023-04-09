import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/util";
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariant> {}

const paragraphVariant = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm, sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(paragraphVariant({ size, className }))}
      >
        {children}
      </div>
    );
  }
);
Paragraph.displayName = "Paragraph";
export default Paragraph;
