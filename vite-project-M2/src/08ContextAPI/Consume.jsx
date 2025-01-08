import React, { useContext } from 'react'
import { context } from './ContextApi'

const Consume = () => {
    const data=useContext(context)
    console.log(data)
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data?.map((item) => (
          <div
            key={item.id}
            style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <div style={{ padding: "16px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  margin: "0 0 10px",
                  color: "#333",
                }}
              >
                {item.title}
              </h2>
              {/* <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  margin: "0 0 10px",
                }}
              >
                {item.description}
              </p> */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#000",
                  margin: "0 0 10px",
                }}
              >
                ${item.price}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#777",
                  margin: "0 0 5px",
                }}
              >
                Category: {item.category}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#777",
                  margin: "0",
                }}
              >
                Rating: {item.rating.rate} ({item.rating.count} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    );
    
}

export default Consume