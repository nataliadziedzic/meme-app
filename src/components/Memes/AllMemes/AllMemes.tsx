import * as React from 'react'
import { useHistory, useParams } from 'react-router'
import { getMemes } from '../../../api/api'
import SingleMeme from '../SingleMeme/SingleMeme'
import Pagination from '../../Pagination/Pagination'
import { MemesContainer } from './AllMemes.style'

type MemeObject = {
  title: string
  author: string
  image: string
  upvotes: number
  downvotes: number
  _id: number
  publicationDate: Date
}

const AllMemes: React.FC = () => {
  const history = useHistory()
  const { pageNumber, chosenMemes } = useParams<{ pageNumber: string; chosenMemes: string }>()
  const [loaded, setLoaded] = React.useState(false)
  const [memes, setMemes] = React.useState<MemeObject[]>([])
  const [availableMemes, setAvailableMemes] = React.useState<typeof memes>([])
  const [slicedMemes, setSlicedMemes] = React.useState<typeof memes>([])
  const [page, setPage] = React.useState(1)

  const memesPerPage = 10
  const changePage = async (currentPage: number) => {
    if (page !== currentPage) {
      setSlicedMemes([])
      history.push(`${currentPage}`)
      setPage(currentPage)
    }
  }

  React.useEffect(() => {
    if (chosenMemes === 'regular') {
      setAvailableMemes(memes)
    } else if (chosenMemes === 'top') {
      const topMemes = memes.filter(meme => meme.upvotes - meme.downvotes >= 5)
      setAvailableMemes(topMemes)
    }
  }, [chosenMemes, memes])

  React.useEffect(() => {
    setPage(+pageNumber)
  }, [pageNumber])

  React.useEffect(() => {
    const indexOfLastMeme = +pageNumber * memesPerPage
    const indexOfFirstMeme = indexOfLastMeme - memesPerPage
    setSlicedMemes(availableMemes.slice(indexOfFirstMeme, indexOfLastMeme))
    document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' })
  }, [availableMemes, pageNumber])

  React.useEffect(() => {
    setLoaded(false)
    getMemes(setMemes, setLoaded)
  }, [chosenMemes])

  return (
    <MemesContainer>
      {loaded && availableMemes.length === 0 && (
        <h2 className='heading'>Sorry, no memes here yet :( </h2>
      )}
      {loaded && availableMemes.length > 0 && (
        <>
          {slicedMemes.map((meme, index) => (
            <SingleMeme key={index} singleMeme={meme} />
          ))}
          <Pagination
            page={page}
            changePage={changePage}
            totalPages={Math.ceil(availableMemes.length / memesPerPage)}
          />
        </>
      )}
    </MemesContainer>
  )
}

export default AllMemes
