import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../Api";
import { Poster } from "../Poster/Poster";
import css from "./MovieCast.module.css";
import { Loader } from "../Loader/Loader";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { cast } = await getCredits(movieId);
        setCredits(cast);
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
      {/* {error && <Error />} */}
      {loading && <Loader />}
      {credits.length > 0 && !loading && (
        <ul className={css.galery}>
          {credits.map((credit) => (
            <li className={css.galleryItem} key={credit.id}>
              <Poster
                key={`credit-${credit.id}`}
                filePath={credit.profile_path}
                fileSize="w200"
                width="200px"
                height="300px"
              />
              <p>{credit.name}</p>
              <p>{credit.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
