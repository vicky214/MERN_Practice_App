import React,{useState,useEffect} from 'react';
import '../App.css'

export default function ShowData() {
    const [value,setValue] = useState([]);

    useEffect(() => {
        fetch("/data",{
            method:"get",
            headers:{
                "Content-Type":"application/json",
            }
        }).then(res=>res.json())
        .then(result=>{
            setValue(result.data)
            console.log(value)
        })
    })
    return (
        <div className="container-fluid show">
            <div className="row">
                <div className="col-md-12">
                    {
                    value.map(detail=>{
                        return(
                            <div class="card-body">
                              <p class="card-title"><b>Event Name:</b> <span>{detail.eventname}</span></p>
                              <p class="card-text"><b>Organize By:</b> {detail.organize}</p>
                              <p class="card-text"><b>Date:</b> {detail.date}</p>
                              <p class="card-text"><b>Description:</b> {detail.description}</p>
                            </div>
                      )
                        })
                    }
                </div>
            </div>
        </div>
    )

                }