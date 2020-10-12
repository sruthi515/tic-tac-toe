import React from 'react';

export default function Dot (props){
    return (
        <div>
            <span className={ props.player[0] ? 'dot' : 'dot-grey' }></span>
            <span className={ props.player[1] ? 'dot' : 'dot-grey' }></span>
            <span className={ props.player[2] ? 'dot' : 'dot-grey' }></span>
            <span className={ props.player[3] ? 'dot' : 'dot-grey' }></span>
            <span className={ props.player[4] ? 'dot' : 'dot-grey' }></span>
            <span className={ props.player[5] ? 'dot' : 'dot-grey' }></span>
        </div>

    );
  }
