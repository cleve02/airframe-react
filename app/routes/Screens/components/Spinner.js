import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RotatingSvg = styled.svg`
  animation: ${rotate} 0.8s linear infinite;
`;

const LoaderCircle = () => (
  <RotatingSvg
    version="1.1"
    id="loader-circle"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="30px" height="30px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve"
  >
    <g>
      <path
        fill="#e7e7e7"
        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
      />
      <path
        fill="#1EB7FF"
        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"
      >
      </path>
    </g>
  </RotatingSvg>
);

export default LoaderCircle;
