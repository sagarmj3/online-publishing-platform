import React from 'react';
import { CheckCircleIcon, CodeIcon, DeviceCameraIcon, SearchIcon } from '@primer/octicons-react'

class DraftPublish extends React.Component {
   
    constructor(props){
        super(props);

        this.state = {
            fields: {}
        }

    }

    handleChange = (e, name) => {
        
        let fields = this.state.fields;
        fields[name] = e.target.value;
        this.setState({fields});
    }

    handleSubmit = (fields) => {
        this.props.prophandleSubmit(fields);
        
    }

    render(){

    return (
    
    <div>

        <div className="card">
            <div className="card-body">
               
                    <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" onChange={(e) => this.handleChange(e, 'title')} className="form-control" placeholder="Enter title..." aria-label="title" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" onChange={(e) => this.handleChange(e, 'overview')} className="form-control" placeholder="Enter overview..." aria-label="overview" aria-describedby="basic-addon1" />
                    </div>
                        <button onClick={() => {this.handleSubmit(this.state.fields)}} type="button" className="btn btn-success" >Publish</button>
                    </div>    
                
            </div>
        </div>

            <p className="navbar-brand">
        
                <CodeIcon size={24} />
                <DeviceCameraIcon size={24} />
                <CheckCircleIcon size={24} />
                <SearchIcon size={24} />
                
            </p>
        </div>
        
        );
    }
}

export default DraftPublish;
