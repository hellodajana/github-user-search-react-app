import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import searhIcon from "../assets/icon-search.svg";
import Profile from "./Profile";

const SearchBar = () => {
  const [username, setUsername] = useState("octocat");
  const [usernameAPI, setUsernameAPI] = useState([]);

  useEffect(() => {
    requestProfile(username);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestProfile() {
    const api_link = `https://api.github.com/users/${username}`;
    const res = await fetch(api_link, { catche: "no-catche" });
    const json = await res.json();

    setUsernameAPI(json);
  }

  return (
    <main>
      <div className="container-app">
        <form
          className="search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            requestProfile();
          }}
        >
          <div className="search-bar__search">
            <img src={searhIcon} alt="search icon" />
            <input
              type="text"
              className="search-bar__input"
              id="github-username"
              name="GitHub username"
              value={username}
              spellCheck="false"
              // autocomplete="off"
              onFocus={(e) => (e.target.value = "")}
              placeholder="Search GitHub username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onBlur={(e) => {
                setUsername(e.target.value);
              }}
            />

            <p className="search-bar__error hidden" id="search-error">
              No result
            </p>
          </div>
          <button
            className="search-bar__btn hidden"
            type="submit"
            id="submit-btn"
          >
            Search
          </button>
        </form>
        <Profile
          name={usernameAPI.name}
          user={usernameAPI.login}
          avatar={usernameAPI.avatar_url}
          date={usernameAPI.created_at}
          bio={usernameAPI.bio}
          repos={usernameAPI.public_repos}
          follower={usernameAPI.followers}
          following={usernameAPI.following}
          blog={usernameAPI.blog}
          twitter={usernameAPI.twitter_username}
          company={usernameAPI.company}
          location={usernameAPI.location}
        />
      </div>
    </main>
  );
};

export default SearchBar;
