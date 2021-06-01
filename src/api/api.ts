import axios from 'axios'
import { hideLoader, showLoader } from '../commonFunctions/handleLoader'
import { API_PATH } from '../variables'

const axiosInstance = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'application/json' },
})
const axiosInstanceForFiles = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'multipart/form-data' },
})
axiosInstance.interceptors.request.use(function (config) {
  showLoader()
  return config
})
axiosInstance.interceptors.response.use(
  function (response) {
    hideLoader()
    return response
  },
  function (error) {
    hideLoader()
    return Promise.reject(error)
  }
)

export const postImage = async (image: File) => {
  const formData = new FormData()
  formData.append('image', image)
  try {
    const response = await axiosInstanceForFiles.post('/images', formData)
    return response.data.url
  } catch (error) {
    console.log(error.message)
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
    console.log(error.message)
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
    console.log(error.message)
  }
}

export const getMemes = async (
  action: (memes: []) => void,
  setLoaded: (loaded: boolean) => void
) => {
  try {
    const response = await axiosInstance.get('/memes')
    action(response.data.reverse())
    setLoaded(true)
  } catch (error) {
    console.log(error.message)
  }
}
