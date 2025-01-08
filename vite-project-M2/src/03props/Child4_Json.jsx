import React from 'react';

const Child4_Json = ({ info }) => {
  return (
<div className="Json">
  {info.map((item) => (
    <div key={item.id} id="card">
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <p><strong>Price:</strong> ${item.price}</p>
      {/* <p>{item.description}</p> */}
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Rating:</strong> {item.rating.rate} ({item.rating.count} reviews)</p>
    </div>
  ))}
</div>

  );
};

export default Child4_Json;
