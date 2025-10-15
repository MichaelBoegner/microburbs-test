import PropertyCard from "./PropertyCard";
import PropertyImage from "./PropertyImage";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className="property-list">
      {properties.map((p) => (
        <div className="property-row" key={p.gnaf_pid}>
          <PropertyImage />
          <PropertyCard property={p} />
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
