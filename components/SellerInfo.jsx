import AuthLayout from "./AuthLayout";
import styles from "./SellerInfo.module.scss";
import parent_styles from "./AuthLayout.module.scss";

const SellerInfo = () => {
  return (
    <AuthLayout>
      <div className={styles.seller_info}>
        <h3>Seller</h3>
        <h1>Info</h1>
        <p>Provide some personal info for smooth and easy journey</p>
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <div className={(styles.form_group, parent_styles.form_group)}>
            <input type="tel" placeholder="Phone Number" />
            <p className={parent_styles.small_text}>
              This number will not be shown on ads
            </p>
          </div>
          <input type="text" placeholder="Street, House no." />
          <input type="text" placeholder="Country" />
          <input type="number" placeholder="Zip Code" />
          <input type="text" placeholder="City" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SellerInfo;
