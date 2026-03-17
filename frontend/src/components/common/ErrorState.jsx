import { getFormMessageClasses } from "../../styles/uiTokens";

function ErrorState({ message }) {
  return (
    <div className={getFormMessageClasses("error")} role="alert" aria-live="assertive">
      <p>{message}</p>
    </div>
  );
}

export default ErrorState;
