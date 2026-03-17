import { getFormMessageClasses } from "../../styles/uiTokens";
import { cn } from "../../utils/cn";

function StatusMessage({ type = "success", children }) {
  return (
    <div className={cn(getFormMessageClasses(type))} role={type === "error" ? "alert" : "status"} aria-live="polite">
      {children}
    </div>
  );
}

export default StatusMessage;
