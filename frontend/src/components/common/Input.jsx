import { uiTokens } from "../../styles/uiTokens";
import { cn } from "../../utils/cn";

function Input({ className, ...props }) {
  return <input className={cn(uiTokens.input, className)} {...props} />;
}

export default Input;
