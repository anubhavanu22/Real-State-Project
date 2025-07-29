import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import { InquiryForm } from "./Components/InquiryForm"; 
import { InquiryForm } from "./InquiryForm";

export function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://transfer-list-cd1d4-default-rtdb.firebaseio.com/.json")
      .then((res) => res.json())
      .then((data) => {
        const all = Object.values(data);
        const match = all.find((item) => String(item.id) === id);
        setProduct(match);
      })
      .catch((err) => alert(err));
  }, [id]);

  if (!product) {
    return <p style={{ textAlign: "center" }}>Loading or property not found...</p>;
  }

  return (
    <div
      style={{
        width: "450px",
        margin: "20px auto",
        border: "1px solid black",
        background: "lightgray",
        padding: "10px",
      }}
    >
      <h2>Title: {product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>Type: {product.type}</h3>
      <h3>Price: ₹{product.price}</h3>
      <h4>
        Bathroom: {product.bathrooms} | Bedroom: {product.bedrooms}
      </h4>
      <p>Location: {product.location}</p>

    
      <InquiryForm propertyTitle={product.title} />

      <Link to="/" style={{ display: "block", marginTop: "20px", textAlign: "center" }}>
        🔙 Back to Property Listings
      </Link>
    </div>
  );
}
