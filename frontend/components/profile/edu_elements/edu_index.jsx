import React from "react";
import EduIndexItem from "./edu_index_item";

class EduIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEdus();
  }

  render() {
    let { educations, deleteEdu, updateEdu, currentUserId, openModal } =
      this.props;
    if (this.props.educations) {
      return (
        <div>
          <ul>
            {educations.map((edu) => {
              if (this.props.userId === edu.user_id) {
                return (
                  <EduIndexItem
                    key={edu.id}
                    edu={edu}
                    deleteEdu={deleteEdu}
                    updateEdu={updateEdu}
                    currentUserId={currentUserId}
                    openModal={openModal}
                  />
                );
              }
            })}
          </ul>
        </div>
      );
    }
  }
}

export default EduIndex;
