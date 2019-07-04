import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Box.css';

class Box extends Component{
  static propTypes = {
    id:PropTypes.number.isRequired,
    cardState: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    showing:PropTypes.bool.isRequired
}
render(){
  const {id} = this.props;
    const style = {};
    if(this.props.showing){
      style.backgroundColor = this.props.backgroundColor;
    }
     return(
      <button 
      className = "box" 
      style={style}
      onClick={()=>this.props.onClick(id)}
      >
      </button>
     )
 }
}  
  export default Box;