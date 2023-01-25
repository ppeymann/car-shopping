import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";

const Suv = () => {
  const suv = carsData.filter((cars) => cars.category === "suv");
  return <CarList data={suv} />;
};

export default Suv;
