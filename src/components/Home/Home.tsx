import * as React from 'react';
import firstDog from '../../assets/images/home-doge-1.png';
import AddMemeForm from '../AddMemeForm/AddMemeForm';
import Login from '../Login/Login';
import { GreetingSection } from './Home.style';

const Home: React.FC = () => {
  return (
    <div>
      <GreetingSection>
        <img src={firstDog} alt='Dog, shiba Inu' />
        <Login />
      </GreetingSection>
      <AddMemeForm />
    </div>
  );
};

export default Home;
