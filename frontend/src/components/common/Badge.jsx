import { getBadgeClasses } from "../../styles/uiTokens";

function Badge({ variant = "featured", children }) {
  return <span className={getBadgeClasses(variant)}>{children}</span>;
}

export default Badge;
