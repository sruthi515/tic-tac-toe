import React from 'react';

export default function Square ( props ){
    return (
        <button className='grid-item' onClick={ props.onClick }>
            { props.value }
        </button>
    );
  }
