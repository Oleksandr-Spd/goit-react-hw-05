import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === "") {
      toast.error(`Please enter something`);
      return;
    }

    onSearch(event.target.elements.query.value);
    event.target.reset();
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search your favorites film"
      />
      <button className={css.searchBtn} type="submit">
        <FontAwesomeIcon className={css.galarySearchSvg} icon={faSearch} />
        &nbsp; Search
      </button>
    </form>
  );
};
