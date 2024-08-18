import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
  name?: string;
}
const Hello = (props: Props) => {
  const { name = "world" } = props;

  const { userId, name: uname } = useParams();
  const [first, setfirst] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setfirst(100);
    }, 2000);
  }, []);

  return (
    <div>
      Hello {uname || name}-{userId} - {first}
      <br />
      <Link to={`/`}>tony</Link>
      <br />
      <Link to={`/govinda`}>govinda</Link>
      <br />
      <Link to={`/mitesh`}>mitesh</Link>
      <br />
    </div>
  );
};

export default Hello;
