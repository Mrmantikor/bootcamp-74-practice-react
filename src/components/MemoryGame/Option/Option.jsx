const Option = ({ valueArray }) => {
  return (
    <>
      {valueArray.map(({ name, value }) => {
        return (
          <option key={value} value={value}>
            {name ? name : value}
          </option>
        );
      })}
    </>
  );
};

export default Option;
