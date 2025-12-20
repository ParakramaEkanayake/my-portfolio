import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* keep existing route-change behavior */}
      {/* The null render for routing is already handled by the effect above */}

      {/* Floating button */}
      {visible && (
        <button
          aria-label="Scroll to top"
          onClick={handleClick}
          style={{
            position: "fixed",
            right: 60,
            bottom: 60,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#c770f0,#ff68e3)",
            color: "white",
            border: "none",
            boxShadow: "0 6px 18px rgba(199,113,240,0.25)",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.18s ease, opacity 0.18s ease",
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.96)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <AiOutlineArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
