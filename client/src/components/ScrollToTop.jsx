import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component scrolls the window to the top when the pathname changes.
// It uses the useLocation hook from react-router-dom to get the current pathname.
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
};

export default ScrollToTop;