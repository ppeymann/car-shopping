import { useState } from "react";
import styles from "./Search.module.css";
import { useRouter } from "next/router";

const Searchbar = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const router = useRouter();

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter min or max Price! ");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          onChange={(e) => setMin(e.target.value)}
          type="number"
          placeholder="Enter Min-Price $"
        />
        <input
          onChange={(e) => setMax(e.target.value)}
          type="number"
          placeholder="Enter Max-Price $"
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Searchbar;
