import styled from 'styled-components';
import React from 'react';

function Spinner() {
  return (
    <StyledSpinner>
      <div className="spinner__circle"></div>
    </StyledSpinner>
  );
}

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;

  .spinner__circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid #1973e8;
    border-top-color: transparent;
    animation: spinner 0.8s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
