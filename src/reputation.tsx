interface Reputation {
  value: number; 
  title: string;
}
interface Props {
  data: Reputation[];
}
const Feputation = ( {data}:Props ) => {
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

export default Feputation;
