import React from 'react';
import { FormControl, Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import gratefulDog from '../../assets/images/home-doge-2.png';
import { FormContainer } from './AddMemeForm.style';

export interface AddMemeFormProps {}

const AddMemeForm: React.FC<AddMemeFormProps> = () => {
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('image from app');
  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setImage('image from the app');
    console.log(image);
  };
  const addMeme = () => {};
  return (
    <FormContainer>
      <img src={gratefulDog} alt='Dog, shiba Inu' className='dog' />
      <h2>Here you can share it without logging in</h2>
      <form>
        <TextField
          label='Author'
          inputProps={{
            maxLength: 50,
          }}
          helperText={`${author.length}/50`}
          value={author}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value.slice(0, 25))
          }
          multiline
          margin='normal'
        />
        <TextField
          label='Title'
          inputProps={{
            maxLength: 50,
          }}
          helperText={`${title.length}/50`}
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value.slice(0, 50))
          }
          multiline
          margin='normal'
        />
        <FormControl>
          <label className='uploadImageBtn' htmlFor='image-upload-input'>
            Upload image <SearchIcon />
          </label>
          <input
            id='image-upload-input'
            style={{ display: 'none' }}
            accept='image/*'
            onChange={uploadFile}
            type='file'
          />
        </FormControl>
      </form>
      <Button variant='contained' color='primary' onClick={addMeme}>
        Add
      </Button>
    </FormContainer>
  );
};

export default AddMemeForm;
