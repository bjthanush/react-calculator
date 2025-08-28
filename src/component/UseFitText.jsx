import { useRef, useEffect, useState } from "react";

export function UseFitText(maxFontSize = 70, minFontSize = 20) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useEffect(() => {
    if (!ref.current) return;
    const resizeText = () => {
      const element = ref.current;
      let newSize = maxFontSize;
      element.style.fontSize = `${newSize}px`;

      while (element.scrollWidth > element.clientWidth && newSize > minFontSize) {
        newSize -= 1;
        element.style.fontSize = `${newSize}px`;
      }
      setFontSize(newSize);
    };

    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, [maxFontSize, minFontSize]);

  return { ref, fontSize };
}
