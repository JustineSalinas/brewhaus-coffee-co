import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Brewhaus Coffee Co.` : "Brewhaus Coffee Co.";
  }, [title]);
}
