import React from 'react'; 

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "", 
        bio: "", 
        location: "", 
        job_title: "", 
        full_name: ""
      } 
      this.handleSubmit = this.handleSubmit.bind(this);
       
    };

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }; 

    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user); 
    
    }; 

    renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

    componentDidMount(){ 
      if (this.props.errors.length !==0) this.props.clearErrors()
    }

    render() {
      if (this.props.formType=== 'Signup'){ 
        return (
          <div className="signup-page">
            <div className="signup-form-container">
              <form onSubmit={this.handleSubmit} className="signup-form-box">
                <div className="welcome-greeting">
                  <h2>Make the most of your professional life</h2>
                </div>
                <br/>
                {/* <h4>Please {this.props.formType} or {this.props.navLink}</h4> */}
                <div className="errors">
                  {this.renderErrors()}
                </div>
                <div className="signup-form">
                  <br/>
                  <label>Email:
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="signup-input"
                    />
                  </label>
                  <br/>
                  <label>Password:
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="signup-input"
                    />
                  </label>
                  <br/>
                  <label>Full Name:
                    <input type="text"
                      value={this.state.full_name}
                      onChange={this.update('full_name')}
                      className="signup-input"
                      required
                    />
                  </label>
                  <br/>
                  <label>Bio:
                    <textarea
                      value={this.state.bio}
                      onChange={this.update('bio')}
                      className="signup-input"
                      required
                    />
                  </label>
                  <br/>
                  <label>Location:
                    <input type="text"
                      value={this.state.location}
                      onChange={this.update('location')}
                      className="signup-input"
                      required
                    />
                  </label>
                  <br/>
                  <label>Job Title:
                    <input type="text"
                      value={this.state.job_title}
                      onChange={this.update('job_title')}
                      className="signup-input"
                      required
                    />
                  </label>
                  <br/>
                  <input className="session-submit" type="submit" value={this.props.formType} />
                </div>
              </form>
            </div>
          </div>
          );

      }else if( this.props.formType==='Login'){ 
        return ( 
          <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="welcome-greeting">
                <h2>Welcome to DappedUp!</h2>
              </div>
                <br/>
                <div className="errors">
                  {this.renderErrors()}
                </div>
                <div className="login-form">
                  <br/>
                  <label>Email:
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="login-input"
                    />
                  </label>
                  <br/>
                  <label>Password:
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                    />
                  </label>
                  <br/>
                  <input className="session-submit" type="submit" value="Sign in" />
                  <div onClick={this.props.demoUser} className="session-submit">Demo Login</div>
                </div>
              </form>
          </div>

        )
      } 
    }
}

export default SessionForm; 