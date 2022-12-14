import "./Socials.scss";
import iconLocation from "../assets/icon-location.svg";
import iconWebsite from "../assets/icon-website.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconCompany from "../assets/icon-company.svg";

const Socials = ({ location, blog, twitter, company }) => {
  const emptyText = <span className="opacity">Not Available</span>;
  return (
    <section className="container-profile__socials">
      <div className="social-icons row-1">
        <img src={iconLocation} alt="location icon" />
      </div>
      <p className="social-par row-1 par-1" id="location">
        {location !== null ? location : emptyText}
      </p>

      <div className="social-icons row-2">
        <img src={iconWebsite} alt="website icon" />
      </div>
      <p
        className="social-par row-2 par-2"
        id="page"
        onClick={() => window.open(blog.toString(), "_blank")}
      >
        {blog !== "" || null ? blog : emptyText}
      </p>

      <div className="social-icons row-3">
        <img src={iconTwitter} alt="twitter icon" />
      </div>
      <p
        className="social-par row-3 par-3"
        id="twitter"
        onClick={() => window.open(twitter.toString(), "_blank")}
      >
        {twitter !== null ? twitter : emptyText}
      </p>

      <div className="social-icons row-4">
        <img src={iconCompany} alt="company icon" />
      </div>
      <p
        className="social-par row-4 par-4"
        id="company"
        onClick={() =>
          window.open(`https://github.com/${company.toString()}`, "_blank")
        }
      >
        {company !== null ? company : emptyText}
      </p>
    </section>
  );
};

export default Socials;
