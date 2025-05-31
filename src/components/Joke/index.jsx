import React, { useState } from 'react';
import "./style.css";

function Joke({ avatar, name, text, initialLikes, initialDislikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={avatar} alt={name} />
          <p className="user-name">{name}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          className="btn-like btn-like--up"
          onClick={() => setLikes(likes + 1)}
          aria-label="Like"
        ></button>
        <span className="likes-count likes-count--up">{likes}</span>

        <button
          className="btn-like btn-like--down"
          onClick={() => setDislikes(dislikes + 1)}
          aria-label="Dislike"
        ></button>
        <span className="likes-count likes-count--down">{dislikes}</span>
      </div>
    </div>
  );
}

export default Joke;
