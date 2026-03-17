import { uiTokens } from "../../styles/uiTokens";
import { cn } from "../../utils/cn";

function Button({ as: Component = "button", children, className, variant = "primary", ...props }) {
  return (
    <Component className={cn(variant === "primary" ? uiTokens.button.primary : uiTokens.button.secondary, className)} {...props}>
      {children}
    </Component>
  );
}

export default Button;
