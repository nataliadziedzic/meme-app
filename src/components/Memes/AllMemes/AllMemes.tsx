import * as React from 'react';
import { useHistory, useParams } from 'react-router';
import { memes } from '../../../data/memes';
import SingleMeme from '../SingleMeme/SingleMeme';
import Pagination from '../../Pagination/Pagination';
import { MemesContainer } from './AllMemes.style';

export interface AllMemesProps {}

const AllMemes: React.FC<AllMemesProps> = () => {
  const history = useHistory();
  const { pageNumber, chosenMemes } =
    useParams<{ pageNumber: string; chosenMemes: string }>();

  const containerRef = React.useRef<HTMLElement | null>(null);
  const [availableMemes, setAvailableMemes] = React.useState<typeof memes>([]);
  const [slicedMemes, setSlicedMemes] = React.useState<typeof memes>([]);
  const [page, setPage] = React.useState<number>(1);

  const memesPerPage = 10;
  const indexOfLastMeme = +pageNumber * memesPerPage;
  const indexOfFirstMeme = indexOfLastMeme - memesPerPage;

  const changePage = (currentPage: number) => {
    history.push(`${currentPage}`);
    setPage(currentPage);
    setSlicedMemes(availableMemes.slice(indexOfFirstMeme, indexOfLastMeme));
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (chosenMemes === 'regular') {
      setAvailableMemes(memes);
    } else if (chosenMemes === 'top') {
      const topMemes = memes.filter(meme => meme.upvotes - meme.downvotes > 5);
      setAvailableMemes(topMemes);
    }
  }, [chosenMemes]);

  React.useEffect(() => {
    setPage(+pageNumber);
  }, [pageNumber]);
  React.useEffect(() => {
    availableMemes.length &&
      setSlicedMemes(availableMemes.slice(indexOfFirstMeme, indexOfLastMeme));
  }, [availableMemes, pageNumber, indexOfFirstMeme, indexOfLastMeme]);

  return (
    <MemesContainer ref={containerRef}>
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
