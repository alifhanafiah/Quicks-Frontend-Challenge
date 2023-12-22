import SearchIcon from "../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center overflow-hidden rounded-md border border-primary-gray-500 md:px-14">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 placeholder:text-[#333] focus:outline-none"
      />
      <button type="submit" className="p-2">
        <img src={SearchIcon} alt="Search" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchBar;
