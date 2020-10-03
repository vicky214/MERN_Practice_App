import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import '../App.css';
import axios from 'axios'

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    
        const PostData = ()=>{ 
            axios.get('http://localhost:5000/otp')
            .then(res=>{
                console.log('loginotp',res.data)
                const LoginData= {
                 email,
                 password,
                 otp:res.data
             }
                 history.push({
                     pathname:'/otp',
                     state:{LoginData}
                 })
            })
    }


    return (
        <div className="container home">
            <h4 style={{textAlign:"center"}}>Login</h4>
            <div className="row">
                <div className="col-md-12">
            <div class="form-group">
                <label for="inputEmail4">Email</label>
                <input type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Name"/>
            </div>
            
           
            <div class="form-group">
                <label for="inputAddress2">Password</label>
                <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            </div>
    
            <button type="submit" onClick={()=>PostData()} class="btn btn-primary">Login</button>
        </div>
        </div>
        </div>
    )
}
