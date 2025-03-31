const StatisticsItem = ({ title, total }) => {
  return (
    <>
      <span>{total}</span>
      <p>{title}</p>
    </>
  );
};

export default StatisticsItem;
