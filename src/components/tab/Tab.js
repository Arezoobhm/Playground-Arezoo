import React from 'react';
import './tabs.css';

class Tab extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    if (this.props.isSelected) {
      return (
        <div className="tab-content">
          {this.props.loader === true ? <img src={"./loader/loader.png"} alt="" /> :
            this.props.children}
          {console.log(this.props.loader)}
        </div>
      );
    }
    return null;
  }
}

export default Tab;
