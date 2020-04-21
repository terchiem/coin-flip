import React, {useState} from 'react';
import CoinResult from './CoinResult';
import Coin from './Coin';

function Counter(props) {
  const [isHeads, setIsHeads] = useState("");
  const [total, setTotal] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  function handleClick() {
    const flip = Math.random();
  
    if (flip > 0.5) {
      setHeads(heads + 1);
      setIsHeads(true);
    } else {
      setTails(tails + 1);
      setIsHeads(false)
    }
    setTotal(total + 1);
  };

  const coin = isHeads === "" ? null : <Coin isHeads={isHeads} />;

  return (
    <div>
      <h2>Let's flip a coin!</h2>

      {coin}

      <br></br>
      <button onClick={handleClick}>Flip Coin</button>
      <CoinResult total={total} heads={heads} tails={tails} />
    </div>
  )
};

export default Counter;