import Stats from "./Stats";
import Socials from "./Socials";
import "./Profile.scss";
// import noAvatar from "../assets/illustration-empty.svg";

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
  // let hero = { noAvatar };
  // if (avatar.length) {
  //   hero = avatar[0];
  // }

  return (
    <div className="container-profile">
      <section className="container-profile__header">
        <header className="container-profile__main">
          <div
            id="avatar"
            className="container-profile__avatar"
            alt="GitHub Avatar"
          ></div>
          <div className="container-profile__name">
            <h2 className="username" id="github-name">
              {name}
            </h2>
            <p className="githubusername" id="github-user">
              {user}
            </p>
            <div className="container-profile__date" id="date">
              Joined {date}
            </div>
          </div>
          <p className="container-profile__bio" id="bio">
            {bio !== null ? bio : "This profile has no bio"}
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
