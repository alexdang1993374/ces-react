import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState, useEffect, useRef } from "react";
import productList from "../../constants/data.json";

const options = productList.map((product) => product.name);

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchValue.length === 0) {
      setSuggestions([]);
    } else {
      const delayDebounceFn = setTimeout(() => {
        const filteredSuggestions = options.filter((option) =>
          option.toLowerCase().includes(searchValue.toLowerCase())
        );
        setIsOpen(true);
        setSuggestions(filteredSuggestions);
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
    setSuggestions([]);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleInsideClick = (event: MouseEvent) => {
      if (
        !isOpen &&
        wrapperRef.current &&
        wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mousedown", handleInsideClick);
    return () => {
      document.removeEventListener("mousedown", handleInsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <div className="flex items-center relative">
        <div ref={textRef}>
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Enter keyword, item, model, or part number"
            className="text-[1.2rem] w-[45rem] focus:border-none outline-none placeholder-gray-500 border border-black"
          />
        </div>

        {searchValue && (
          <div className="flex justify-end items-center">
            <button
              className="w-10 h-10  text-gray-400 absolute transform flex justify-center items-center"
              onClick={clearSearch}
            >
              <ClearRoundedIcon fontSize="large" />
            </button>
          </div>
        )}

        <button className="w-[5rem] h-[5rem] bg-red-600 flex justify-center items-center">
          <SearchRoundedIcon fontSize="large" className="text-white" />
        </button>
      </div>

      {suggestions.length > 0 && isOpen && (
        <div className="w-[50rem] absolute z-10 bg-white border border-gray-300 p-2 rounded">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index} className="cursor-pointer">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
