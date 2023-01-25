import Cards from "../modules/Cards";
import styled from "./carsPage.module.css";

const CarsPage = ({ data }) => {
  return (
    <div className={styled.container}>
      {data.map((cars) => (
        <Cards key={cars.id} {...cars} />
      ))}
    </div>
  );
};

export default CarsPage;
