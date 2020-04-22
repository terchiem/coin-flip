import React from 'react';
import './Coin.css';

function Coin({isHeads}) {
  const imgSrc = isHeads ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/608px-2017-D_Roosevelt_dime_obverse_transparent.png' :
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png';

  return <img src={imgSrc} data-testid="coin" /> ;
}


export default Coin;