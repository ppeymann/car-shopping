import AllCars from "@/components/modules/AllCars";
import Categories from "@/components/modules/Categories";
import Searchbar from "@/components/modules/Searchbar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <Searchbar />
      <Categories />
      <AllCars />
      <CarsPage data={cars} />
    </div>
  );
}
