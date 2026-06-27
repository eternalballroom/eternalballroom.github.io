
import { useEffect, useState } from "react";
import { FloatingSparkles } from "performative-ui";
import "performative-ui/styles.css";

export default function FloatingSparklesNoSSR() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <FloatingSparkles
  count={15}
  glyphs={["✨", "⭐", "💫"]}
  sizeRange={[10, 22]}
  durationS={[10, 16]}
/>;
}


