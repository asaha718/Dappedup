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
        let { educations, deleteEdu, updateEdu, currentUserId, profileId}= this.props; 
        if (this.props.educations){ 
            return ( 
                <div>
                    <ul>
                        { 
                        educations.map(edu=> { 
                            // console.log(typeof this.props.userId); 
                            // console.log(typeof edu.user_id); 
                            
                            // console.log(edu.user_id == this.props.userId) not the same data type
                            if(this.props.userId === edu.user_id){
                                return (<EduIndexItem key={edu.id} edu={edu} deleteEdu={deleteEdu} updateEdu={updateEdu} />)
                            }
    
                            
                            
                        })
                        }
                    </ul>
                </div>
            )

        }
    }
}

export default EduIndex; 
