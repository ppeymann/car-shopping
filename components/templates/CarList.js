import { useRouter } from "next/router";
import styles from "./CarList.module.css";
import Back from "../icons/Back";
import Cards from "../modules/Cards";

const CarList = ({ data }) => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {data.map((cars) => (
          <Cards key={cars.id} {...cars} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
