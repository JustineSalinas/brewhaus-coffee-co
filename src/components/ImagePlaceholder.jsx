import { useState } from "react";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

function ImagePlaceholder({ className, iconClassName, imgClassName, label, src }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div className={cn("group overflow-hidden bg-secondary/60", className)}>
        <img
          src={src}
          alt={label || ""}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
            imgClassName,
          )}
        />
      </div>
    );
  }

  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(
        "group flex items-center justify-center overflow-hidden bg-secondary/60 border border-border",
        className,
      )}
    >
      <Coffee
        aria-hidden="true"
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
