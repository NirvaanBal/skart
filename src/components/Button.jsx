function Button({ children, id }) {
  return (
    <button type="button" data-id={id}>
      {children}
    </button>
  );
}

export default Button;
