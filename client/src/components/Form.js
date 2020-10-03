import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import '../App.css';

export default function Form() {
    const [eventname,setEventname] = useState('');
    const [date,setDate] = useState('');
    const [organize,setOrganize] = useState('');
    const [description,setDescription] = useState('');
    const history = useHistory();

    
       const form = ()=>{ 
        fetch("/form",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
               eventname,
               date,
               organize,
               description
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                store.addNotification({
                    title: "Sorry",
                    message: data.error,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000
                      }
                })
             }
             else{
                store.addNotification({
                    title: "Congratulate",
                    message: data.message,
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000
                      }
                })
                 history.push('/data')
             }            
        })
        .catch(err=>{
            console.log(err)
        })
        .catch(err=>{
            console.log(err)
        }) 
    }
    

    return (
        <div className="container home">
            <h4 style={{textAlign:"center"}}>Event</h4>
            <div className="row">
                <div className="col-md-12">
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Event Name</label>
                <input type="text" class="form-control" value={eventname} onChange={(e)=>setEventname(e.target.value)} placeholder="Enter Your FirstName"/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Date</label>
                <input type="date" class="form-control" value={date} onChange={(e)=>setDate(e.target.value)}  placeholder="Enter Your LastName"/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Organize By</label>
                <input type="text" class="form-control" value={organize} onChange={(e)=>setOrganize(e.target.value)} placeholder="Enter Your Email ID" />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Description</label>
                <textarea class="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} rows="5"></textarea>
            </div>
    
            <button type="submit" onClick={()=>form()} class="btn btn-primary">Submit</button>
        </div>
        </div>
        </div>
    )
}
