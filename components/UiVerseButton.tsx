import React from 'react';
import styled from 'styled-components';

interface UiVerseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const UiVerseButton: React.FC<UiVerseButtonProps> = ({ children, ...props }) => (
  <StyledWrapper>
    <button {...props}>
      <span>{children}</span>
    </button>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  button {
    position: relative;
    margin: 0;
    padding: 0.8em 1em;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    background-color: #333;
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  button:hover {
    animation: sh0 0.5s ease-in-out both;
  }

  @keyframes sh0 {
    0% { transform: rotate(0deg) translate3d(0, 0, 0);}
    25% { transform: rotate(7deg) translate3d(0, 0, 0);}
    50% { transform: rotate(-7deg) translate3d(0, 0, 0);}
    75% { transform: rotate(1deg) translate3d(0, 0, 0);}
    100% { transform: rotate(0deg) translate3d(0, 0, 0);}
  }

  @keyframes storm {
    0% { transform: translateX(0);}
    20% { transform: translateX(-2px);}
    40% { transform: translateX(2px);}
    60% { transform: translateX(-1px);}
    80% { transform: translateX(1px);}
    100% { transform: translateX(0);}
  }

  button:hover span {
    animation: storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  button::before,
  button::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }

  button:hover::before,
  button:hover::after {
    opacity: 0.15;
    transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  button:hover::before {
    transform: translate3d(50%, 0, 0) scale(0.9);
  }

  button:hover::after {
    transform: translate(50%, 0) scale(1.1);
  }
`;

export default UiVerseButton;