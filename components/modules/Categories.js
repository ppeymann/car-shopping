import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>SUV</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <p>HatchBack</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <p>Sport Cars</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
};

export default Categories;
