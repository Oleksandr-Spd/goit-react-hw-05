import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrailer } from "../Api";
import { Loader } from "../Loader/Loader";
// import css from "./Trailer.module.css";

export const Trailer = () => {
  const { movieId } = useParams();
  const [trailers, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fatched = await getTrailer(movieId);
        setTrailer(fatched);
      } catch (error) {
        console.error("Error fetching films:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <iframe
          width="100%"
          height="800px"
          src={`https://www.youtube.com/embed/${trailers.key}`}
          title="YouTube video player"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          //   allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
