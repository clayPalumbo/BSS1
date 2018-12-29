import React, { Component } from 'react';
import ad from './../../img/Ad-1.png';
import '../../App.css';

// handleWebsiteClick=()=>{
//   window.open('https://www.youtube.com/watch?v=TOvdZ4b5VjI', '_blank');
// }

class AdOne extends Component {
  render() {
    return (
      
      <div className="App">
          <img src={ad} className="header" alt="header" />
      </div>
    );
  }
}

export default AdOne;
