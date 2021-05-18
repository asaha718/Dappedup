import React from 'react'; 

class EditPostItem extends React.Component{ 
    constructor(props){ 
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
            <div className="edit-post-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-post-modal-header">
                        <h2>Edit Post</h2>
                        <div className="close-x-ctn">
                            <div onClick={this.props.closeModal} className="close-x">x</div>
                        </div>
                    </div>
                    <label>Body: 
                        <textarea value={this.state.body} onChange={this.update("body")}/>
                    </label>
                    <input className="update-post-btn" type="submit" value="update"/>
                </form>
            </div>
        )
    }
}

export default EditPostItem; 