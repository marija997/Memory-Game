import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ to = "#", text = "Text", handleClick = () => {} }) => {
  const [animation, setAnimation] = useState(false);
  console.log(handleClick);
  const handleAnimation = useCallback(() => {
    setAnimation(!animation);
  }, [animation, setAnimation]);

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`bubbly-button ${animation ? "animate" : ""}`}
      onMouseOver={handleAnimation}
    >
      <svg width="300px" height="60px" viewBox="0 0 300 60" className="border">
        <polyline points="299,1 299,59 1,59 1,1 299,1" className="bg-line" />
        <polyline points="299,1 299,59 1,59 1,1 299,1" className="hl-line" />
      </svg>
      <span>{text}</span>
    </Link>
  );
};

export default Button;
