import "./PropertyImage.css";

function PropertyImage() {
  const randomImage = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1000
  )}/200/150`;

  return (
    <div className="property-image">
      <img src={randomImage} alt="Property" />
    </div>
  );
}

export default PropertyImage;
