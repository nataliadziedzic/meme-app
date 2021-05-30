import * as React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { API_PATH } from '../../../variables';
import { Meme, VotesWrapper } from './SingleMeme.style';

export interface MemeObject {
  title: string;
  upvotes: number;
  downvotes: number;
  image: string;
}
export interface SingleMemeProps {
  meme: MemeObject;
}
const SingleMeme: React.FC<SingleMemeProps> = ({ meme }) => {
  return (
    <Meme>
      <h2 className='title'>{meme.title}</h2>
      <img src={`${API_PATH}${meme.image}`} alt='' />
      <VotesWrapper>
        <div className='button'>
          <ThumbUpAltIcon />
          <span className='votesNumber'>{meme.upvotes}</span>
        </div>
        <span className='text'>Vote!</span>
        <div className='button'>
          <ThumbDownIcon />
          <span className='votesNumber'>{meme.downvotes}</span>
        </div>
      </VotesWrapper>
    </Meme>
  );
};

export default SingleMeme;
