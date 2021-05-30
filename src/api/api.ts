import axios from 'axios';
import { API_PATH } from '../variables';

const axiosInstance = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'application/json' },
});
const axiosInstanceForFiles = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const postImage = async (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  try {
    const response = await axiosInstanceForFiles.post('/images', formData);
    return response.data.url;
  } catch (error) {
    console.log(error);
  }
};

export const postMeme = async (
  meme: {
    author: string;
    title: string;
    image: string;
  },
  action: () => void
) => {
  try {
    await axiosInstance.post('/memes', meme);
    action();
  } catch (error) {
    console.log(error);
  }
};

export const getMemes = (action: (memes: []) => void) => {
  axiosInstance
    .get('/memes')
    .then(response => action(response.data))
    .catch(error => console.log(error));
};
