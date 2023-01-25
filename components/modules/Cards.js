import Link from "next/link";
import Location from "../icons/Location";
import styled from "./Cards.module.css";

const Cards = ({ id, name, model, year, distance, location, price, image }) => {
  return (
    <Link href={`/cars/${id}`}>
      <div className={styled.container}>
        <img src={image} className={styled.image} />
        <h4 className={styled.title}>{`${name} ${model}`}</h4>
        <p className={styled.detail}>{`${year} . ${distance}KM`}</p>
        <div className={styled.footer}>
          <p className={styled.price}>$ {price}</p>
          <div className={styled.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
