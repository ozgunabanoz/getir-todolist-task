import React, { Component } from 'react';

import Collapsible from './../Collapsible/Collapsible';
import FOB from './../FOB/FOB';

class MainBody extends Component {
  render() {
    return (
      <div>
        <Collapsible />
        <FOB />
      </div>
    );
  }
}

export default MainBody;
