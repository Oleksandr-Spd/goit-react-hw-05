import { useEffect, useState } from "react";
import { getTrends } from "../../components/Api";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const time_window = "week";

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        const { results } = await getTrends(time_window);
        setTrends(results);
        console.log(results);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    fetchData();
  }, [time_window]);

  return (
    <div>
      {error && <Error />}
      {!error && <PageTitle title="Popular this week" />}
      {loading && !error && <Loader />}
      {!loading && !error && <MovieList items={trends} />}
    </div>
  );
}
