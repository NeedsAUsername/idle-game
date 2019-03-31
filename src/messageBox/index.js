import React from 'react'; 
import './style.css';

class MessageBox extends React.Component {  
  renderMessages = () => (
    this.props.messages.map((message, index) => 
      <li key={index} className="message">
        {message}
      </li>
    )
  )
  render () { 
    return (
      <div className="MessageBox">  
        <ul className="messages">Message Box
          {this.renderMessages()}
        </ul> 
      </div>
    )
  }
}

export default MessageBox;
