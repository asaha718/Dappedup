import React from 'react'; 
import EduIndexItem from './edu_index_item'; 

class EduIndex extends React.Component{ 
    constructor(props){ 
        super(props)
    }

    componentDidMount(){ 
        this.props.fetchEdus()
    }

    render(){ 
        let { educations, updateEdu}= this.props
        return ( 
            <div>
                { educations.map(edu=> <EduIndexItem key={edu.id} edu={edu} updateEdu={updateEdu} />)}
            </div>
        )
    }
}

export default EduIndex; 
