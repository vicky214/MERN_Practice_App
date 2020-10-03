import React,{useState} from 'react'
import {useHistory,Link } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import '../App.css';
import axios from 'axios'

export default function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
       
       const PostData = async ()=>{ 
               axios.get('http://localhost:5000/otp')
               .then(res=>{
                   console.log('resultotp',res.data)
                   const SignupData= {
                    name,
                    email,
                    phone,
                    password,
                    otp:res.data
                }
                    history.push({
                        pathname:'/otp',
                        state:{SignupData}
                    })
               })
    }

    return (
        <div className="container home">
            <h4 style={{textAlign:"center"}}>Signup</h4>
            <div className="row">
                <div className="col-md-12">
            <div class="form-group">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/>
            </div>
            
            <div class="form-group">
                <label for="inputAddress">Email ID</label>
                <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email ID" />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Phone Number</label>
                <input type="text" class="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Your Phone Number" />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Password</label>
                <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            </div>
    
            <button type="submit" onClick={()=>PostData()} class="btn btn-primary">Signup</button>
        </div>
        </div>
        </div>
    )
}
