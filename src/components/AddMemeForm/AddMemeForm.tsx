import React from 'react';
import Media from 'react-media';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { postImage, postMeme } from '../../api/api';
import { SIZES } from '../../assets/styles/mediaQueries';
import gratefulDog from '../../assets/images/home-doge-2.png';
import SuccessSnackbar from '../Snackbars/SuccessSnackbar';
import cloud from '../../assets/images/cloud.png';
import { FormContainer, UploadButtonWrapper } from './AddMemeForm.style';

const AddMemeForm: React.FC = () => {
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [file, setFile] = React.useState<File | null>();
  const [fileName, setFileName] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setFile(event.target!.files[0]!);
    setFileName(event.target.files[0].name);
  };
  const addMeme = async () => {
    const url: string = await postImage(file!);
    const newMeme = {
      author,
      title,
      image: url,
    };
    postMeme(newMeme, () => setSuccess(true));
    setAuthor('');
    setTitle('');
    setFile(null);
    setFileName('');
  };
  React.useEffect(() => {
    if (author.length && title.length && file) {
      setDisabled(false);
    } else setDisabled(true);
  }, [author, title, file]);
  const cancelFile = () => {
    setFile(null);
    setFileName('');
  };

  return (
    <>
      <FormContainer>
        <Media query={SIZES.tablet}>
          {matches =>
            matches && (
              <>
                <img src={cloud} alt='Cloud' className='cloud' />
                <img src={gratefulDog} alt='Dog, shiba Inu' className='dog' />
              </>
            )
          }
        </Media>
        <h2>Here you can share memes without logging in!</h2>
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
          <UploadButtonWrapper>
            <Button className='uploadButton' variant='outlined' color='primary'>
              <label className='uploadImageLabel' htmlFor='image-upload-input'>
                Upload image <SearchIcon />
              </label>
            </Button>
            <input
              id='image-upload-input'
              style={{ display: 'none' }}
              accept='image/*'
              onChange={uploadFile}
              type='file'
            />
            {fileName && (
              <span className='selectedImage'>
                Selected: {fileName}
                <div className='deleteButton' onClick={cancelFile}>
                  <DeleteOutlineIcon fontSize='small' />
                </div>
              </span>
            )}
          </UploadButtonWrapper>
        </form>
        <Button
          variant='contained'
          color='primary'
          onClick={addMeme}
          disabled={disabled}
        >
          Add
        </Button>
      </FormContainer>
      <SuccessSnackbar
        success={success}
        setSuccess={setSuccess}
        message='Thank you! Your meme has been added!'
      />
    </>
  );
};

export default AddMemeForm;
