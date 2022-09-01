import Stats from "./Stats";
import Socials from "./Socials";
import "./Profile.scss";

const Profile = ({
  name,
  user,
  avatar,
  date,
  bio,
  repos,
  follower,
  following,
  blog,
  twitter,
  company,
  location,
}) => {
  const emptyText = <span className="opacity">This profile has no bio</span>;
  const newDate = (currentDate) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const format = currentDate.split("T").shift().split("-");
    const day = format[2];
    const month = format[1];
    const year = format[0];
    const formattedDate = `Joined ${day} ${months[month - 1]} ${year} `;
    return formattedDate;
  };
  return (
    <div className="container-profile">
      <section className="container-profile__header">
        <header className="container-profile__main">
          <div
            id="avatar"
            className="container-profile__avatar"
            alt="GitHub Avatar"
          >
            <img src={avatar} alt="" />
          </div>

          <div className="container-profile__name">
            <h2 className="username" id="github-name">
              {name !== null ? name : user}
            </h2>
            <p className="githubusername" id="github-user">
              @{user}
            </p>
            <div className="container-profile__date" id="date">
              {date !== undefined ? newDate(date) : date}
            </div>
          </div>
          <p
            className="container-profile__bio transparent not-transperent"
            id="bio"
          >
            {bio !== null ? bio : emptyText}
          </p>
        </header>
      </section>
      <Stats repos={repos} follower={follower} following={following} />
      <Socials
        location={location}
        blog={blog}
        twitter={twitter}
        company={company}
      />
    </div>
  );
};

export default Profile;
