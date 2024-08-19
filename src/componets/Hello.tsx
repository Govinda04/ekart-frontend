import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

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
      {/* <FontAwesomeIcon icon={[fa regular fa-bag-shopping"]} /> */}
      <FontAwesomeIcon icon={faBagShopping} />
    </div>
  );
};

export default Hello;
