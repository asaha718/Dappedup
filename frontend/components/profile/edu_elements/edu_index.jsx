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
        let { educations, deleteEdu, updateEdu, currentUserId}= this.props
        return ( 
            <div>
                <ul>
                    { 
                    educations.map(edu=> { 
                        if(edu.user_id=== currentUserId)
                        return (
                            <EduIndexItem key={edu.id} 
                                        edu={edu} 
                                        deleteEdu={deleteEdu} 
                                        updateEdu={updateEdu} />
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default EduIndex; 
