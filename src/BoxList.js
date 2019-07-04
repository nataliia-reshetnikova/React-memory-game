import React, { Component} from 'react';
import Box from './Box';
import './BoxList.css';
import PropTypes from 'prop-types';

class BoxList extends Component{
    static propTypes = {
        boxes: PropTypes.arrayOf(PropTypes.object),
        handleClick: PropTypes.func.isRequired
    }
    render(){
        const handleClick = this.props.handleClick;
        const boxes = this.props.boxes.map((box) => (
            <Box
              key={box.id}
              {...box}
              showing={box.cardState !== 0}
              backgroundColor={box.backgroundColor}
              onClick={()=>handleClick(box.id)}
            />
          ));
        return(
            <div className="BoxList">
                {boxes}
            </div>
        );
    }
}
   export default BoxList;