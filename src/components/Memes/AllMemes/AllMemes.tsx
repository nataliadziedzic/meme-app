import * as React from 'react';
import SingleMeme from '../SingleMeme/SingleMeme';
import { MemesContainer } from './AllMemes.style';
import {memes} from '../../../data/memes'

export interface AllMemesProps {
    
}
 
const AllMemes: React.FC<AllMemesProps> = () => {
    return ( 
        <MemesContainer>
          {memes.map((meme, index) => (
            <SingleMeme key={index} meme={meme} />
          ))}
        </MemesContainer>
     );
}
 
export default AllMemes;