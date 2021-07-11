const Title = ({ text = "Text" }) => {
  return (
    <div className="patterns">
      <svg width="100%" height="100%">
        <text x="50%" y="60%" textAnchor="middle">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Title;
