import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "There was an error, please try again...",
}: ErrorMessageProps) => {
  return <p className={styles.text}>{message}</p>;
};

export default ErrorMessage;
