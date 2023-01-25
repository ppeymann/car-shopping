import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
import React from "react";

const Sport = () => {
  const sport = carsData.filter((cars) => cars.category === "sport");
  return <CarList data={sport} />;
};

export default Sport;
