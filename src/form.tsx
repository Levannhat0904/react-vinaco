interface Ichildren {
  children: string;
}
const Form = () => {
  function Box({ children }:Ichildren) {
    return <div className="box">{children}</div>;
  }
  
  return (
    <>
      <form className="form-input">
      <h2>Contact Us</h2>
        <input className="input-item" type="text" placeholder="Enter your name" />
        <input className="input-item" type="email" placeholder="Enter your email" />
        <input className="input-item" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
