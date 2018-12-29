import React, { Component } from 'react';
import ad2 from './../../img/AdTwo.png';
import '../../App.css';

// handleWebsiteClick=()=>{
//   window.open('https://www.youtube.com/watch?v=TOvdZ4b5VjI', '_blank');
// }

class AdTwo extends Component {
  render() {
    return (
      <div className="App">
          <a href="https://www.youtube.com/watch?v=_HmtqcECxQo"><img src={ad2} className="header mb-5" alt="header" /></a>
      </div>
    );
  }
}

export default AdTwo;
