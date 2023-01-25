import Link from "next/link";
import styles from "./AllCars.module.css";

const AllCars = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">See All Cars HERE!</Link>
    </div>
  );
};

export default AllCars;
