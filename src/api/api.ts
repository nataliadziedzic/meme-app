import axios from 'axios'
import { API_PATH } from '../variables'

const axiosInstance = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'application/json' },
})
const axiosInstanceForFiles = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'multipart/form-data' },
})

export const postImage = async (image: File) => {
  const formData = new FormData()
  formData.append('image', image)
  try {
    const response = await axiosInstanceForFiles.post('/images', formData)
    return response.data.url
  } catch (error) {
    console.log(error)
  }
}

export const postMeme = async (
  meme: {
    author: string
    title: string
    image: string
  },
  action: () => void
) => {
  try {
    await axiosInstance.post('/memes', meme)
    action()
  } catch (error) {
    console.log(error)
  }
}
export const updateMeme = async (
  id: number,
  updatedMeme: {
    title?: string
    downvotes?: number
    upvotes?: number
  },
  action: (arg: {
    title: string
    upvotes: number
    downvotes: number
    _id: number
    image: string
  }) => void
) => {
  try {
    const response = await axiosInstance.patch(`/memes/${id}`, updatedMeme)
    const meme = response.data
    action({
      title: meme.title,
      upvotes: meme.upvotes,
      downvotes: meme.downvotes,
      _id: meme._id,
      image: meme.image,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMemes = async (action: (memes: []) => void) => {
  try {
    const response = await axiosInstance.get('/memes')
    action(response.data.reverse())
  } catch (error) {
    console.log(error)
  }
}
