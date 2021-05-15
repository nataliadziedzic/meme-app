import * as React from 'react';
import SingleMeme from '../SingleMeme/SingleMeme';
import { MemesContainer } from './AllMemes.style';
import { memes } from '../../../data/memes';
import { useHistory, useParams } from 'react-router';
import Pagination from '../../Pagination/Pagination';

export interface AllMemesProps {}

const AllMemes: React.FC<AllMemesProps> = () => {
  const history = useHistory();
  const { pageNumber, chosenMemes } =
    useParams<{ pageNumber: string; chosenMemes: string }>();

  const [availableMemes, setAvailableMemes] = React.useState<typeof memes>([]);
  const [slicedMemes, setSlicedMemes] = React.useState<typeof memes>([]);
  const [page, setPage] = React.useState<number>(1);
  const memesPerPage = 10;

  const changePage = (currentPage: number) => {
    history.push(`${currentPage}`);
    setPage(currentPage);
    const indexOfLastMeme = currentPage * memesPerPage;
    const indexOfFirstMeme = indexOfLastMeme - memesPerPage;
    setSlicedMemes(availableMemes.slice(indexOfFirstMeme, indexOfLastMeme));
  };

  React.useEffect(() => {
    if (chosenMemes === 'regular') {
      setSlicedMemes(memes.slice(0, memesPerPage));
      setAvailableMemes(memes);
    } else if (chosenMemes === 'top') {
      const topMemes = memes.filter(meme => meme.upvotes - meme.downvotes > 5);
      setAvailableMemes(topMemes);
      setSlicedMemes(topMemes.slice(0, memesPerPage));
    }
  }, [chosenMemes]);
  React.useEffect(() => {
    setPage(+pageNumber);
  }, [pageNumber]);

  return (
    <MemesContainer>
      {slicedMemes.map((meme, index) => (
        <SingleMeme key={index} meme={meme} />
      ))}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={Math.ceil(availableMemes.length / memesPerPage)}
      />
    </MemesContainer>
  );
};

export default AllMemes;
