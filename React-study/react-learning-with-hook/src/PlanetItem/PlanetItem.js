import React, { useContext } from "react";

// Import the 'Context' object from "../context"
import Context from "../context/context";

// Import CSS module for styling
import s from "./PlanetItem.module.css";

const PlanetItem = () => {
  // Access the planets array from the Context
  const { planets } = useContext(Context);

  return (
    <>
      {planets.map(
        ({
          id,
          name,
          weight,
          size,
          distanceFromSun,
          material,
          image,
          existenceYears,
        }) => (
          <li key={id} className={s.item}>
            {/* Render the planet's image */}
            <img src={image} alt={name} width={160} className={s.image} />
            <div>
              {/* Render the planet's name */}
              <h3 className={s.title}>{name}</h3>
              {/* Render the planet's weight */}
              <p className={s.text}>
                Weight: <span className={s.textAccent}>{weight}</span>
              </p>
              {/* Render the planet's size */}
              <p className={s.text}>
                Size: <span className={s.textAccent}>{size}</span>
              </p>
              {/* Render the distance from the Sun */}
              <p className={s.text}>
                Distance from Sun:{" "}
                <span className={s.textAccent}>{distanceFromSun}</span>
              </p>
              {/* Render the planet's material */}
              <p className={s.text}>
                Material: <span className={s.textAccent}>{material}</span>
              </p>
              {/* Render the planet's existence years */}
              <p className={s.text}>
                Old: <span className={s.textAccent}>{existenceYears}</span>
              </p>
            </div>
          </li>
        )
      )}
    </>
  );
};

export default PlanetItem;
