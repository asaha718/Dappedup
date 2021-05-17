import React from 'react'; 

class EditPostItem extends React.Component{ 
    constructor(props){ 
        // debugger
        super(props)
        this.state= props.post; 
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    
    update(field){ 
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){ 
        e.preventDefault(); 
        this.props.updatePost(this.state).then(this.props.closeModal())
    }

    render(){ 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <h2>Edit Post</h2>
                    <label>Body: 
                        <textarea value={this.state.body} onChange={this.update("body")}/>
                    </label>
                    {/* <label>Image: 
                        <input type='file' value={this.state.photoUrl} onChange={this.update("photoUrl")}/>
                    </label> */}
                    <input type="submit" value="update"/>
                </form>
            </div>
        )
    }
}

export default EditPostItem; 