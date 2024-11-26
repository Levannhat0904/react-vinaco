const reputation = ( {data} ) => {
  return (
    <div className="reputation">
      <h2>Our Reputation</h2>
      <ul className="reputation-item">
      {data.map((item, index) => (
          <li key={index}>
            <h3>{item.title} - {item.value}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default reputation;
