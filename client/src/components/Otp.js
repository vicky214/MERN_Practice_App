import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import '../App.css';
import axios from 'axios';

export default function Signup(props) {
    const [otp,setOtp] = useState('');
    const history = useHistory();
    let LoginData = props.location.state.LoginData;
    let SignupData = props.location.state.SignupData ;
       const PostData = ()=>{ 
         if(SignupData){
             if(SignupData.otp==otp){
             axios.post('http://localhost:5000/signup',SignupData)
             .then(res=>{
                 console.log('s1',res)
             })
            }
            else{
                console.log('wrong otp')
            }
         }
         else{
            if(LoginData.otp==otp){
            axios.post('http://localhost:5000/login',LoginData)
            .then(res=>{
                console.log('s2',res)
            })
         }
         else{
            console.log('wrong otp')
         }
        }
    }

    return (
        <div className="container home">
            <h4 style={{textAlign:"center"}}>OTP</h4>
            <div className="row">
                <div className="col-md-12">
            <div class="form-group">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter Your Name"/>
            </div>
            <button type="submit" onClick={()=>PostData()} class="btn btn-primary">{SignupData?'Signup':'Login'}</button>
        </div>
        </div>
        </div>
    )
}
