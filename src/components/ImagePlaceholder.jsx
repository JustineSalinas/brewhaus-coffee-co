import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

function ImagePlaceholder({ className, iconClassName }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-secondary/60 border border-border",
        className,
      )}
    >
      <Coffee className={cn("text-muted-foreground/40", iconClassName)} strokeWidth={1.25} />
    </div>
  );
}

export default ImagePlaceholder;
