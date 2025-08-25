import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "Elamai App"; // Default title

    switch (location.pathname) {
      case "/":
        pageTitle = "Home | Elamai App";
        break;
      case "/about":
        pageTitle = "About | Elamai App";
        break;
      case "/contact":
        pageTitle = "Contact | Elamai App";
        break;
      default:
        pageTitle = "404 Not Found | Elamai App";
        break;
    }

    document.title = pageTitle;
  }, [location]);

  return null; // This component doesn’t render anything
};

export default TitleUpdater;
