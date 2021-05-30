import * as React from 'react';
import Media from 'react-media';
import firstDog from '../../assets/images/home-doge-1.png';
import { SIZES } from '../../assets/styles/mediaQueries';
import AddMemeForm from '../AddMemeForm/AddMemeForm';
import Login from '../Login/Login';
import { GreetingSection } from './Home.style';

const Home: React.FC = () => {
  return (
    <div>
      <GreetingSection>
        <Media query={SIZES.tablet}>
          {matches => matches && <img src={firstDog} alt='Dog, shiba Inu' />}
        </Media>
        <Login />
      </GreetingSection>
      <AddMemeForm />
    </div>
  );
};

export default Home;
