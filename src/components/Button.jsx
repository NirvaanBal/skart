function Button({ children, id, handleClick }) {
  return (
    <button type="button" data-id={id} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
