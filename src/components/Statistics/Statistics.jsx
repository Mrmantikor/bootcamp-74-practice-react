import StatisticsItem from "../StatisticsItem/StatisticsItem";

const Statistics = ({ stats }) => {
  return (
    <ul>
      {stats.map(({ id, ...rest }) => {
        return (
          <li key={id}>
            <StatisticsItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
};

export default Statistics;
