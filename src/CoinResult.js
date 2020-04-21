import React from 'react';

function CoinResult({total, heads, tails}) {
  return (
  <p>Out of {total} flips. There have been {heads} heads and {tails} tails.</p>
  )
}

CoinResult.defaultProps = {
  total: 0,
  heads: 0,
  tails: 0
}

export default CoinResult;