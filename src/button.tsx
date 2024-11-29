interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: IButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
