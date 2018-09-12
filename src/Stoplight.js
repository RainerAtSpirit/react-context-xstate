import React from 'react';
import { observer } from 'mobx-react'

const Stoplight = observer(({store, ...props}) => {
  const currentState = store.currentState
  const green =
    currentState === 'green' ? 'rgb(79,186,128)' : 'rgb(79,186,128, 0.35)';
  const yellow =
    currentState === 'yellow' ? 'rgb(255,221,21)' : 'rgb(255,221,21,0.35)';
  const red =
    currentState === 'red' ? 'rgb(236,28,36)' : 'rgba(236,28,36, 0.35)';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.162 496.162" style={{ width: '300px' }}>
      <path
        d="M248.077 0C111.072 0 .002 111.062.002 248.083c0 137.005 111.07 248.079 248.075 248.079 137.013 0 248.083-111.074 248.083-248.079C496.16 111.062 385.09 0 248.077 0z"
        fill="#2c3e50"
      />
      <path
        d="M229.787 246.881v248.608c6.041.44 12.139.673 18.29.673 5.371 0 10.696-.19 15.983-.527V246.881h-34.273z"
        fill="#d3d3d3"
      />
      <path
        d="M229.787 246.881v248.608c6.041.44 12.139.673 18.29.673V246.881h-18.29z"
        fill="#eaeaea"
      />
      <path
        d="M248.081 32.082c-52.079 0-94.304 24.952-94.304 55.732v253.533c0 30.78 42.225 55.732 94.304 55.732s94.304-24.952 94.304-55.732V87.814c0-30.78-42.225-55.732-94.304-55.732z"
        fill="#e5e5e5"
      />
      <path
        d="M248.081 42.082c-45.05 0-81.575 23.585-81.575 52.679v239.64c0 29.094 36.525 52.679 81.575 52.679s81.575-23.585 81.575-52.679V94.761c0-29.094-36.525-52.679-81.575-52.679z"
        fill="#3b3b3b"
      />
      <circle cx="248.081" cy="116.581" r="43" fill={red} />
      <circle cx="248.081" cy="217.081" r="43" fill={yellow} />
      <circle cx="248.081" cy="317.081" r="43" fill={green} />
    </svg>
  );
});

Stoplight.displayName = 'Stoplight'

export default Stoplight;
