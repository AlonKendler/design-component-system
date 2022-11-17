import "./Hero.css";

export interface Heroprops {
  id: number;

  title: string;

  img: string;

  content: string;

  loading: boolean;
}

export const Hero = ({
  id,
  title,
  img,
  content,
  loading,
  ...props
}: Heroprops) => {
  return (
    <>
      <div className="hero">
        {loading ? (
          <div id="preloader">
            <div id="loader"></div>
          </div>
        ) : (
          <div className="hero-content">
            <h1>{title}</h1>

            <img src={img} alt={title} />

            <p>{content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
