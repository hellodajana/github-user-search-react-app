import "./Stats.scss";

const Stats = ({ repos, follower, following }) => {
  return (
    <ul className="user-stats">
      <li>
        <h4 className="user-stats__title">Repos</h4>
        <h2 className="user-stats__title" id="repo">
          {repos}
        </h2>
      </li>
      <li>
        <h4 className="user-stats__title">Followers</h4>
        <h2 className="user-stats__title" id="follower">
          {follower}
        </h2>
      </li>
      <li>
        <h4 className="user-stats__title">Following</h4>
        <h2 className="user-stats__title" id="following">
          {following}
        </h2>
      </li>
    </ul>
  );
};

export default Stats;
