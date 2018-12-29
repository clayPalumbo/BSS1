import React, { Component } from 'react';
import ad from './../../img/AdThree.png';
import '../../App.css';

// handleWebsiteClick=()=>{
//   window.open('https://www.youtube.com/watch?v=TOvdZ4b5VjI', '_blank');
// }

class AdThree extends Component {
  render() {
    return (
      
      <div className="App">
          <a href="https://www.youtube.com/watch?v=TOvdZ4b5VjI"><img src={ad} className="header" alt="header" /></a>
      </div>
    );
  }
}

export default AdThree;
