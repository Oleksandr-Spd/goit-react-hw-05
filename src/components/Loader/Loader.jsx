import { Watch } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <Watch
        visible={true}
        height="200"
        width="200"
        radius="48"
        color="#242424"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
