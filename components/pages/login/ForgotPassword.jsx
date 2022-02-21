import { useEffect, useState } from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    error: false,
    time: 30,
    resendState: false,
  });

  const { email, error, time, resendState } = values;

  const changeValue = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = () => {
    // Send data to the api or whatever from here
    // Then call the countDown method.
    countDown();
  };

  useEffect(() => {
    countDown();
    console.log(values);
  }, [time]);

  //TODO: Still needs to work on this..
  const countDown = () => {
    let newTime;
    if (time == 0) {
      return setValues({ ...values, resendState: true });
    } else {
      setInterval(1, 1000);
      newTime = time - 1;
    }
    return setValues({ ...values, time: newTime });
  };

  return (
    <div className={styles.forgotPassword}>
      <h3>Buyer</h3>
      <h1>Forgot Password</h1>
      <p>Reset your password quickly</p>
      <form>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={changeValue}
          required
        />
        {error && (
          <p className={styles.smallText}>Enter a valid email ID !!!</p>
        )}
        <button type="submit">Send Link</button>
        {resendState ? (
          <p className={styles.normalText}>Resend</p>
        ) : (
          <p className={styles.normalText}>Link will be send in {time} sec</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
