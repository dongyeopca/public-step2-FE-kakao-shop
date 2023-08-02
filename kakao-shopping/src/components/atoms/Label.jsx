const Label = ({ htmlFor, children, className }) => {
  return (
    // label의 for 속성, id 값을 넣게되면 라벨이 클릭되는 효과
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;