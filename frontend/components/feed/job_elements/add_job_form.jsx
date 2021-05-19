import React from 'react'; 

class AddJob extends React.Component{ 
    constructor(props){ 
        super(props);
        this.state= this.props.job;
        this.handleSubmit=this.handleSubmit.bind(this);  
    }

    handleSubmit(e){ 
        e.preventDefault();
        const job= Object.assign({}, this.state);
        this.props.createJob(job).then(this.props.closeModal)
    }

    update(field){ 
        return e=> { 
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){ 
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title of Position: 
                        <input type='text' value={this.state.title} onChange={this.update('title')} required/>
                    </label>
                    <label>
                        Field of Work: 
                        <input type='text' value={this.state.field} onChange={this.update('field')} required/>
                    </label>
                    <label>
                        Company: 
                        <input type='text' value={this.state.company} onChange={this.update('company')} required/>
                    </label>
                    <label>
                        Location: 
                        <input type='text' value={this.state.location} onChange={this.update('location')} required/>
                    </label>
                    <label>
                        Brief discription of work done: 
                        <textarea value={this.state.description} onChange={this.update('description')} required/>
                    </label>
                    <label>
                        Start Date: 
                        <input type='date' value={this.state.start_date} onChange={this.update('start_date')} required/>
                    </label>
                    <label>
                        End Date: 
                        <input type='date' value={this.state.end_date} onChange={this.update('end_date')} />
                    </label>
                    <input type="submit" value="Add Job" />
                </form>
            </div>
        )
    }
}

export default AddJob