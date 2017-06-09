import React from 'react';

class Form extends React.Component{
    constructor(props){
      super(props);
      this.state = { username: '', password: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clearForm = this.clearForm.bind(this);
    }

    handleChange(event) {
      if(event.target.name == 'username'){
        this.setState({username: event.target.value});
      }else {
        this.setState({password: event.target.value});
      }
    }

    handleSubmit(e){
      e.preventDefault();
      console.log(this.state);
      this.clearForm();
    }

    clearForm(){
      this.setState({ username: '', password: ''});
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>User Name</label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
              <label>Password</label>
              <input type="Password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
              <input id="submit" type="submit" name="submit" value="submit"/>
            </div>
          </form>
        );
    }
}

export default Form;
