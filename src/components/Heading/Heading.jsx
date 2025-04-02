import s from "./Heading.module.css";
import clsx from "clsx";

const Heading = ({ text, tag = "h2", bottom, mTop, variant }) => {
  const Tag = tag;
  return (
    <Tag
      className={clsx(s.title, {
        [s.bottom]: bottom,
        [s.top]: mTop,
        [s[variant]]: variant,
      })}
    >
      {text}
    </Tag>
  );
};

export default Heading;
// [s.title,bottom?s.bottom :""].join(" ")
// clsx(s.title ,bottom&&s.bottom, mTop && s.top)
// clsx(s.title ,{[s.bottom ]: bottom,[s.top]: mTop})
