/* eslint-disable react/prop-types */
import circle from "../assets/circle.png";
function Image({
  relativeSrc = "",
  alt = "",
  className = "",
  absoluteClassName = "",
  divClassName = "",
}) {
  return (
    <div className={`relative  ${divClassName} ${className}`}>
      <img
        src={relativeSrc}
        alt={alt}
        className={`rounded-full z-10 object-cover ${className}`}
      />
      <img
        src={circle}
        alt=""
        className={`absolute  ${absoluteClassName}`}
      />
    </div>
  );
}

export default Image;
