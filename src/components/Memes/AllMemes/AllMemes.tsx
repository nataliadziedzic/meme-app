import * as React from 'react';
import SingleMeme from '../SingleMeme/SingleMeme';
import { MemesContainer } from './AllMemes.style';
import { memes } from '../../../data/memes';
import { useHistory, useParams } from 'react-router';
import Pagination from '../../Pagination/Pagination';

export interface AllMemesProps {}

const AllMemes: React.FC<AllMemesProps> = () => {
  const history = useHistory();
  const { pageNumber } = useParams<{ pageNumber: string }>();

  const [slicedMemes, setSlicedMemes] = React.useState<typeof memes>([]);
  const [page, setPage] = React.useState<number>(1);
  const memesPerPage = 10;

  const changePage = (currentPage: number) => {
    history.push(`${currentPage}`);
    setPage(currentPage);
  };

  React.useEffect(() => {
    setSlicedMemes(memes.slice(0, memesPerPage));
  }, []);
  React.useEffect(() => {
    setPage(+pageNumber);
  }, [pageNumber]);

  React.useEffect(() => {
    const indexOfLastMeme = page * memesPerPage;
    const indexOfFirstMeme = indexOfLastMeme - memesPerPage;
    setSlicedMemes(memes.slice(indexOfFirstMeme, indexOfLastMeme));
  }, [page]);

  return (
    <MemesContainer>
      {slicedMemes.map((meme, index) => (
        <SingleMeme key={index} meme={meme} />
      ))}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={Math.ceil(memes.length / memesPerPage)}
      />
    </MemesContainer>
  );
};

export default AllMemes;