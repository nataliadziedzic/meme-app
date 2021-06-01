import * as React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { updateMeme } from '../../../api/api'
import { API_PATH } from '../../../variables'
import WarningSnackbar from '../../Snackbars/WarningSnackbar'
import { Meme, VotesWrapper } from './SingleMeme.style'

export interface MemeObject {
  title: string
  upvotes: number
  downvotes: number
  _id: number
  image: string
}
export interface SingleMemeProps {
  singleMeme: MemeObject
}
const SingleMeme: React.FC<SingleMemeProps> = ({ singleMeme }) => {
  enum VotingAction {
    ADD,
    SUBSTRACT,
  }
  const [meme, setMeme] = React.useState(singleMeme)
  const [warning, setWarning] = React.useState(false)

  const vote = (action: VotingAction) => {
    let dataToUpdate
    const votedMemes = localStorage.getItem('votedMemes')
      ? JSON.parse(localStorage.getItem('votedMemes')!)
      : []
    if (!votedMemes?.includes(meme._id)) {
      if (action === VotingAction.ADD) {
        dataToUpdate = { upvotes: meme.upvotes + 1 }
      } else {
        dataToUpdate = { downvotes: meme.downvotes + 1 }
      }
      updateMeme(meme._id, dataToUpdate, setMeme)
      votedMemes.push(meme._id)
      localStorage.setItem('votedMemes', JSON.stringify(votedMemes))
    } else {
      setWarning(true)
    }
  }

  React.useEffect(() => {
    if (!localStorage.getItem('votedMemes')) {
      localStorage.setItem('votedMemes', JSON.stringify([]))
    }
  }, [])

  return (
    <>
      <Meme>
        <h2 className='title'>{meme.title}</h2>
        <img src={`${API_PATH}${meme.image}`} alt='' />
        <VotesWrapper>
          <div className='button' onClick={() => vote(VotingAction.ADD)}>
            <ThumbUpAltIcon />
            <span className='votesNumber'>{meme.upvotes}</span>
          </div>
          <span className='text'>Vote!</span>
          <div className='button' onClick={() => vote(VotingAction.SUBSTRACT)}>
            <ThumbDownIcon />
            <span className='votesNumber'>{meme.downvotes}</span>
          </div>
        </VotesWrapper>
      </Meme>
      <WarningSnackbar
        warning={warning}
        setWarning={setWarning}
        message="It looks like you've already voted for this meme."
      />
    </>
  )
}

export default SingleMeme
