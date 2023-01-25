import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const FilterCars = () => {
  const router = useRouter();
  const [min, max] = router.query.filters || [];
  const filterItem = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if (!filterItem.length) return <h3>NOT FOUND :\</h3>;
  return <div>{<CarList data={filterItem} />}</div>;
};

export default FilterCars;
