import styles from "./Filter.module.scss";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";

const Filter = () => {
  // State to show or hide more options in filter
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <div className={styles.filter}>
      <div className={styles.container}>
        <button
          
          onClick={() => {
            showMoreOptions
              ? setShowMoreOptions(false)
              : setShowMoreOptions(true);
          }}
        >
          Filter
          <FiFilter />
        </button>
        <select>
          <option value="0">Select a Brand</option>
        </select>
      </div>

      {/* Toggle section */}
      {showMoreOptions && (
        <div className={styles.filter_toggle}>
          <select>
            <option value="0">Select a Model</option>
          </select>
          <input type="number" placeholder="Mileage" />
          <select>
            <option value="0">Type Fuel Varient</option>
          </select>
          <input type="date" placeholder="Date of Registration" />
        </div>
      )}
    </div>
  );
};

export default Filter;
