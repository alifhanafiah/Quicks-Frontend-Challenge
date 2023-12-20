import SearchBar from "./SearchBar";

const Menu = () => {
  return (
    <div className="absolute bottom-28 right-6 h-40 w-full max-w-xs rounded-[6px] border border-[#828282] bg-white px-8 py-7 md:max-w-2xl">
      <SearchBar />
    </div>
  );
};

export default Menu;
