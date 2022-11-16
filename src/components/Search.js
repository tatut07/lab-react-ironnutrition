import { Divider, Input } from 'antd';

const Search = ({ query, setQuery }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={query} type="text" onChange={handleChange} />
    </>
  );
};

export default Search;
