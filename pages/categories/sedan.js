import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";

const Sedan = () => {
  const sedan = carsData.filter((cars) => cars.category === "sedan");
  return <CarList data={sedan} />;
};

export default Sedan;
