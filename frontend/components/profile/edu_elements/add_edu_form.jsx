import React from 'react'; 

class AddEdu extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state= this.props.edu;
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){ 
        e.preventDefault();
        const edu= Object.assign({}, this.state);
        this.props.createEdu(edu).then(this.props.closeModal)
    }

    update(field){ 
        return e=> { 
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){ 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>School: 
                        <input type="text" value={this.state.school} onChange={this.update('school')} required/>
                    </label>
                    <label>
                        Field of Study: 
                        <input type='text' value={this.state.field_of_study} onChange={this.update('field_of_study')} required/>
                    </label>
                    <label>
                        Start Date: 
                        <input type='date' value={this.state.start_date} onChange={this.update('start_date')} required/>
                    </label>
                    <label>
                        End Date: 
                        <input type='date' value={this.state.end_date} onChange={this.update('end_date')} />
                    </label>
                    <input type="submit" value="Add Education" />
                </form>

            </div>
        )
    }
}

export default AddEdu