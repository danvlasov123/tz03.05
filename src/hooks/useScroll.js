import { useEffect, useState } from "react";

function useScroll() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return scrollTop;
}

export default useScroll;
