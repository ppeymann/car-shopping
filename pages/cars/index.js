import Categories from "@/components/modules/Categories";
import Searchbar from "@/components/modules/Searchbar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "data/carsData";

const index = () => {
  return (
    <div>
      <Searchbar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default index;
