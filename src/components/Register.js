import { TextField ,Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getClient, addClient} from "../services.js/posts.service"
import '../App.css'
export default function Register()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
     async function existingUser(){
        const apiPosts = await getClient(email,password)
    }
    async function newUser(){
        const apiPosts = await addClient(email,password)
    }
    return <div className='botton-flowers'><br/><form className="form">
        <TextField type="email" label="email" onChange={handleEmailChange}/>
        <TextField type="password" label="password" onChange={handlePasswordChange}/>
        <Button onClick={existingUser}>התחברות</Button>
        <Button onClick={newUser}>הרשמה</Button>
    </form></div>
}