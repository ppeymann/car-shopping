import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";

const Hatchback = () => {
  const hatchbackCars = carsData.filter(
    (cars) => cars.category === "hatchback"
  );
  return <CarList data={hatchbackCars} />;
};

export default Hatchback;
