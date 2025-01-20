import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token || token === "undefined") {
      // Check for null, undefined, or 'undefined' as a string
      if (window.location.pathname === "/login") {
        navigate("/login");
      } else if (window.location.pathname === "/signup") {
        navigate("/signup");
      }
    } else {
      // Optionally, check the validity of the token
      navigate("/"); // Redirect authenticated users
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthRoute;
