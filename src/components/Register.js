import { TextField ,Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getClient, addClient} from "../services.js/posts.service"
import '../App.css'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function existingUser() {
    try {
      const apiPosts = await getClient(email,password);
      console.log(apiPosts);
      navigate('/home')
    } catch (error) {
      console.error(error);
    }
  }

  async function newUser() {
    try {
      const apiPosts = await addClient(email,password);
      console.log(apiPosts);
      navigate('/home')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='botton-flowers'>
      <br/>
      <form className="form">
        <TextField type="email" label="email" onChange={handleEmailChange}/>
        <TextField type="password" label="password" onChange={handlePasswordChange}/>
        <Button onClick={existingUser}> existing user</Button>
        <Button onClick={newUser}> new user</Button>
      </form>
    </div>
  )
}