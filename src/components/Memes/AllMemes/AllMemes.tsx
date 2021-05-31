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
  const { pageNumber, chosenMemes } =
    useParams<{ pageNumber: string; chosenMemes: string }>()
  const containerRef = React.useRef<HTMLElement | null>(null)
  const [memes, setMemes] = React.useState<MemeObject[]>([])
  const [availableMemes, setAvailableMemes] = React.useState<typeof memes>([])
  const [slicedMemes, setSlicedMemes] = React.useState<typeof memes>([])
  const [page, setPage] = React.useState<number>(1)

  const memesPerPage = 10
  const indexOfLastMeme = +pageNumber * memesPerPage
  const indexOfFirstMeme = indexOfLastMeme - memesPerPage
  const changePage = (currentPage: number) => {
    history.push(`${currentPage}`)
    setPage(currentPage)
    setSlicedMemes(availableMemes.slice(indexOfFirstMeme, indexOfLastMeme))
    containerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    if (chosenMemes === 'regular') {
      setAvailableMemes(memes)
    } else if (chosenMemes === 'top') {
      const topMemes = memes.filter(meme => meme.upvotes - meme.downvotes >= 5)
      console.log('here', topMemes)
      setAvailableMemes(topMemes)
    }
  }, [chosenMemes, memes])

  React.useEffect(() => {
    setPage(+pageNumber)
  }, [pageNumber])
  React.useEffect(() => {
    setSlicedMemes(availableMemes.slice(indexOfFirstMeme, indexOfLastMeme))
  }, [availableMemes, pageNumber, indexOfFirstMeme, indexOfLastMeme])

  React.useEffect(() => {
    setMemes([])
    getMemes(setMemes)
  }, [chosenMemes])

  return (
    <MemesContainer ref={containerRef}>
      {slicedMemes.map((meme, index) => (
        <SingleMeme key={index} singleMeme={meme} />
      ))}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={Math.ceil(availableMemes.length / memesPerPage)}
      />
    </MemesContainer>
  )
}

export default AllMemes
