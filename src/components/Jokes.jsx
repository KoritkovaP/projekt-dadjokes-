import React from 'react';
import { jokes } from '../jokes';
import { Joke } from './Joke';

export function Jokes() {
  return (
    <div>
      {jokes.map((joke) => (
        <Joke
          key={joke?.id}
          avatar={joke?.avatar}
          name={joke?.name}
          text={joke?.text}
          initialLikes={joke?.likes}
          initialDislikes={joke?.dislikes}
        />
      ))}
    </div>
  );
}
