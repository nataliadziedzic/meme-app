import * as React from 'react'
import AddMemeForm from '../AddMemeForm/AddMemeForm'
import Login from '../Login/Login'
import { GreetingSection } from './Home.style'

const Home: React.FC = () => {
  return (
    <div>
      <GreetingSection>
        <Login />
        <AddMemeForm />
      </GreetingSection>
    </div>
  )
}

export default Home
