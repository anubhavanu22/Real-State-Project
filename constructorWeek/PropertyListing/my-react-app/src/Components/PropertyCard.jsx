import { Link } from "react-router-dom";

export function PropertyCard({ property, showRemove, onRemove }) {
  const addToFavorites = () => {
    fetch(`https://transfer-list-cd1d4-default-rtdb.firebaseio.com/favorites/${property.id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Added to Firebase Favorites!");
      })
      .catch((err) => alert("❌ Error adding to favorites: " + err));
  };

  return (
    <div
      style={{
        width: "450px",
        height: "auto",
        margin: "12px",
        borderRadius: "16px",
        padding: "16px",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", 
        color: "#2c2c2c", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        src={property.image}
        alt={property.title}
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}
      />
      <div style={{ marginTop: "12px" }}>
        <h2 style={{ margin: "8px 0" }}>🏠 {property.title}</h2>
        <h3>Type: {property.type}</h3>
        <h4>Price: ₹{property.price}</h4>
        <h4>Bathroom: {property.bathrooms} | Bedroom: {property.bedrooms}</h4>
        <p>📍 {property.location}</p>

        <Link to={`/property/${property.id}`} style={{ display: "inline-block", marginTop: "8px" }}>
          🔍 View Details
        </Link>

        <div style={{ marginTop: "10px" }}>
          {!showRemove ? (
            <button onClick={addToFavorites}>❤️ Add to Favorites</button>
          ) : (
            <button onClick={onRemove} style={{ backgroundColor: "red", color: "white" }}>
              🗑 Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
