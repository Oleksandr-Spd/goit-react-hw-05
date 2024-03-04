import css from "./Poster.module.css";

export const Poster = ({ fileSize, filePath, width, height }) => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const imageUrl = filePath
    ? `https://image.tmdb.org/t/p/${fileSize}${filePath}`
    : defaultImg;

  return (
    <img
      className={css.posterBox}
      width={width}
      height={height}
      src={imageUrl}
      alt="Movie Poster"
    />
  );
};
