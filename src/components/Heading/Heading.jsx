const Heading = ({ text, tag = "h2" }) => {
  const Tag = tag;
  return <Tag>{text}</Tag>;
};

export default Heading;
