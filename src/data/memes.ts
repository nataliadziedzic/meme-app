import myCode from '../assets/images/memes/01-my-code.jpg';
import sleep from '../assets/images/memes/02-sleep.jpg';
import senior from '../assets/images/memes/03-senior.jpg';
import java from '../assets/images/memes/04-java.jpg';
import daenerys from '../assets/images/memes/05-daenerys.jpg';
import cancelPlans from '../assets/images/memes/06-cancel.jpg';
import restaurant from '../assets/images/memes/07-restaurant.jpg';
import mozarella from '../assets/images/memes/08-mozarella.jpeg';
import backendDev from '../assets/images/memes/09-backend-css.jpg';
import interview from '../assets/images/memes/10-interview-loop.png';
import ai from '../assets/images/memes/11-ai.jpg';
import debugging from '../assets/images/memes/12-save.png';
import smallDogs from '../assets/images/memes/13-small-dogs.jpg';
import insideJokes from '../assets/images/memes/14-inside-jokes.jpg';
import barking from '../assets/images/memes/15-bark-no-reason.png';

type MemesArr = {
  title: string;
  upvotes: number;
  downvotes: number;
  img: string;
}[];

export const memes: MemesArr = [
  {
    title: 'My code is like this',
    upvotes: 7,
    downvotes: 2,
    img: myCode,
  },
  {
    title: 'Sleep',
    upvotes: 9,
    downvotes: 4,
    img: sleep,
  },
  {
    title: 'Senior dev',
    upvotes: 4,
    downvotes: 2,
    img: senior,
  },
  {
    title: 'Java',
    upvotes: 6,
    downvotes: 2,
    img: java,
  },
  {
    title: 'Frontend vs Backend',
    upvotes: 14,
    downvotes: 3,
    img: daenerys,
  },
  {
    title: 'Canceling plans',
    upvotes: 7,
    downvotes: 3,
    img: cancelPlans,
  },
  {
    title: 'Restaurant be like...',
    upvotes: 11,
    downvotes: 3,
    img: restaurant,
  },
  {
    title: 'Mozarella',
    upvotes: 6,
    downvotes: 3,
    img: mozarella,
  },
  {
    title: 'Backend dev',
    upvotes: 12,
    downvotes: 3,
    img: backendDev,
  },
  {
    title: 'Lvl expert',
    upvotes: 16,
    downvotes: 3,
    img: interview,
  },
  {
    title: 'AI',
    upvotes: 11,
    downvotes: 7,
    img: ai,
  },
  {
    title: 'Debugging',
    upvotes: 16,
    downvotes: 12,
    img: debugging,
  },
  {
    title: 'Small dogs',
    upvotes: 16,
    downvotes: 6,
    img: smallDogs,
  },
  {
    title: 'The pun dog',
    upvotes: 16,
    downvotes: 12,
    img: insideJokes,
  },
  {
    title: 'Bark for no reason',
    upvotes: 10,
    downvotes: 6,
    img: barking,
  },
];
