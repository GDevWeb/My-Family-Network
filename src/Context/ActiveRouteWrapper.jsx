import { useLocation } from "react-router-dom";

export default function ActiveRouteWrapper({ children }) {
  // 1.State:
  const location = useLocation();

  // 2.Behavior:
  const isActive = (location.pathname = "/albums");

  const style = isActive ? { textDecoration: "underline" } : {};
  //   3.Render:
  return <div style={style}>{children}</div>;
}
