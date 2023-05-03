const Filter = ({ text, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={changeFilter} value={text} type="text" name="filter" />
    </label>
  );
};
export default Filter;
