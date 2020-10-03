import React, {Component} from 'react';

class Rating extends Component{
    constructor(props){
        super(props)
        this.state={
            rate:''
        }
    }
    render(){
        const {rate} = this.state;
        return(
            <div class="row" style={{maxWidth:'600px',marginLeft:'auto',marginRight:'auto'}}>
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Give Rating</span>
                        <div style={{display:'flex',justifyContent:"space-between"}}>
                            <div value={rate} onClick={(e)=>{this.setState(e.target.value)}} className="s12 m6 l4" style={{padding:'25px',paddingLeft:"38px",paddingRight:"40px",backgroundColor:'white',color:'black',borderRadius:'50%'}}>
                                <h2>1</h2>
                            </div>
                            <div className="s12 m6 l4" style={{padding:'25px',paddingLeft:"38px",paddingRight:"40px",backgroundColor:'white',color:'black',borderRadius:'50%'}}>
                                <h2>2</h2>
                            </div>
                            <div className="s12 m6 l4" style={{padding:'25px',paddingLeft:"38px",paddingRight:"40px",backgroundColor:'white',color:'black',borderRadius:'50%'}}>
                                <h2>3</h2>
                            </div>
                            <div className="s12 m6 l4" style={{padding:'25px',paddingLeft:"38px",paddingRight:"40px",backgroundColor:'white',color:'black',borderRadius:'50%'}}>
                                <h2>4</h2>
                            </div>
                            <div className="s12 m6 l4" style={{padding:'25px',paddingLeft:"38px",paddingRight:"40px",backgroundColor:'white',color:'black',borderRadius:'50%'}}>
                                <h2>5</h2>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                    <button type="submit" class="btn">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Rating;