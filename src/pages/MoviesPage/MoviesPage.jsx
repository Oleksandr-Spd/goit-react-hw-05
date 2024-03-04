import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getFilms } from "../../components/Api";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { useSearchParams } from "react-router-dom";
import { LoadMore } from "../../components/LoadMore/Button";

export default function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("value") ?? "";
  console.log(query);

  useEffect(() => {
    const controller = new AbortController();
    if (!query) {
      return;
    }
    setLoading(true);
    setLoadMore(true);
    async function fetchData() {
      try {
        setError(false);
        const { results, total_results, total_pages } = await getFilms(
          query.split("/")[1],
          page,
          {
            abortController: controller,
          }
        );

        if (total_results !== undefined && total_results !== null) {
          toast.success(
            `Hooray! We found ${total_results} movies matching your request ${
              query.split("/")[1]
            }.`
          );
        }
        setTotalPage(total_pages);
        setFilms((prevFilms) => [...prevFilms, ...results]);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
        return [];
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [query, page]);

  const handleSubmit = (query) => {
    setFilms([]);
    setPage(1);
    setSearchParams({ value: `${Date.now()}/${query}` });
  };
  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  console.log(films);
  return (
    <div>
      {error && <Error />}
      <SearchBar onSearch={handleSubmit} />
      {films.length === 0 && <p>Put something</p>}
      {films.length > 0 && <MovieList items={films} />}
      {loading && <Loader />}
      {loadMore && !loading && page < totalPage && (
        <LoadMore onClick={onLoadMore} />
      )}
      <Toaster />
    </div>
  );
}
