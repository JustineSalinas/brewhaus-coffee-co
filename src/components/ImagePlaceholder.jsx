import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

function ImagePlaceholder({ className, iconClassName }) {
  return (
    <div
      className={cn(
        "group flex items-center justify-center overflow-hidden bg-secondary/60 border border-border",
        className,
      )}
    >
      <Coffee
        className={cn(
          "text-muted-foreground/40 transition-transform duration-300 group-hover:scale-110",
          iconClassName,
        )}
        strokeWidth={1.25}
      />
    </div>
  );
}

export default ImagePlaceholder;
