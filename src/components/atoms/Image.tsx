import React from "react";
import './styles/atomStyle.css'

interface Props {
  src?: string;
  alt?: string;
  href?: string;
  className?: string;
  style?: any;
  containerClass?: any;
}

const Image = (props: Props) => {
  const { src, style, alt, href, className, containerClass } = props;

  return (
    <div className={containerClass}>
      <a href={href}>
        <img src={src} alt={alt} style={style} className={className} />
      </a>
    </div>
  );
};

export default Image;
