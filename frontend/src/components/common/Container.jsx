import { uiTokens } from "../../styles/uiTokens";

function Container({ children, className = "" }) {
  return <div className={`${uiTokens.pageContainer} ${className}`}>{children}</div>;
}

export default Container;
