import SearchIcon from "../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center overflow-hidden rounded-md border md:px-14">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 focus:outline-none"
      />
      <button type="submit" className="p-2">
        <img src={SearchIcon} alt="Search" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchBar;
