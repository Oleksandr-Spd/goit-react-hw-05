import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../Api";
import css from "./MovieReviews.module.css";
import { nanoid } from "nanoid";
import { Loader } from "../Loader/Loader";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
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
      {reviews.length > 0 && !loading && (
        <ul className={css.reviewsGallery}>
          {reviews.map((review) => (
            <li key={`${nanoid()}${review.id}`} className={css.reviewItem}>
              <div className={css.reviewDetails}>
                <p className={css.author}>Author:</p>
                <span className={css.authorUser}> {review.author}</span>
                <span className={css.reviewsData}>
                  {review.created_at.slice(0, 10)}
                </span>
              </div>
              <p className={css.comment}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
