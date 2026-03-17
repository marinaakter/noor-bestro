import { uiTokens } from "../../styles/uiTokens";
import { cn } from "../../utils/cn";

function Textarea({ className, ...props }) {
  return <textarea className={cn(uiTokens.textarea, className)} {...props} />;
}

export default Textarea;
