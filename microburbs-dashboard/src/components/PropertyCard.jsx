import "./PropertyCard.css";

function PropertyCard({ property }) {
  const {
    address,
    attributes,
    price,
    property_type,
    listing_date,
    coordinates,
  } = property;

  const shortDescription = attributes.description
    ? attributes.description.split("\n")[0]
    : "No description available.";

  return (
    <div className="property-card">
      <h2>{address.street}</h2>
      <p className="location">
        {address.sal}, {address.state}
      </p>
      <p className="price">${price.toLocaleString()}</p>

      <div className="details">
        <span>🛏 {attributes.bedrooms || 0} Beds</span>
        <span>🛁 {attributes.bathrooms || 0} Baths</span>
        <span>🚗 {attributes.garage_spaces || 0} Garage</span>
        <span>📏 {attributes.land_size}</span>
      </div>

      <p className="desc">{shortDescription}</p>
      <p className="meta">
        Type: {property_type} | Listed: {listing_date}
      </p>

      <a
        href={`https://www.google.com/maps?q=${address.street},${address.sal},${address.state}`}
        target="_blank"
        rel="noreferrer"
        className="map-link"
      >
        View on Google Maps
      </a>
    </div>
  );
}

export default PropertyCard;
