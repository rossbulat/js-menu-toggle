import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MenuToggle1 } from '../img/menuToggle1.svg';
import { ReactComponent as MenuToggle2 } from '../img/menuToggle2.svg';

const ToggleWrapper = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 5rem;
  position: relative;
  width: 5rem;
 
  /* svg animations */

  @keyframes rotate_in_cw {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(45deg) }
  }

  @keyframes rotate_out_cw {
    0% { transform: rotate(45deg) }
    100% { transform: rotate(0deg) }
  }

  @keyframes rotate_in_ccw {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(-45deg) }
  }
  @keyframes rotate_out_ccw {
    0% { transform: rotate(-45deg) }
    100% { transform: rotate(0deg) }
  }

  @keyframes draw_in {
    50% { stroke-dashoffset: 100%; }
    100% { stroke-dashoffset: 0%; }
  }

  @keyframes draw_out {
    50% { stroke-dashoffset: 0%; }
    100% { stroke-dashoffset: 100%; }
  }

  .svg-1 {
    animation: ${props => props.status === 'open' ? `rotate_in_cw` : `rotate_out_cw`} 0.8s;
    animation-fill-mode: forwards;

    .line-1 {
      animation: ${props => props.status === 'open' ? `draw_out` : `draw_in`} 0.8s;
      animation-fill-mode: forwards;
    }
    .line-3 {
      animation: ${props => props.status === 'open' ? `draw_out` : `draw_in`} 0.8s;
      animation-fill-mode: forwards;
    }
  }

  .svg-2 {
    animation: ${props => props.status === 'open' ? `rotate_in_ccw` : `rotate_out_ccw`} 0.8s;
    animation-fill-mode: forwards;
  }

  /* default line offsets */

  .svg-1 {
    .line-1, .line-3 {
      stroke-dashoffset: ${props => props.status === 'open' ? `0%` : `100%`};
    }
  }

  svg {
    height: 100%;
    overflow: visible;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;

    path {
      stroke: #000;
      stroke-dasharray: 100%;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 20px;
    }
  }
`;

export const MenuToggle = () => {

  const [iconStatus, setIconStatus] = React.useState('default');

  const toggle = () => {
    iconStatus === 'default'
      ? setIconStatus('open')
      : setIconStatus('default');
  }

  return (
    <ToggleWrapper
      onClick={() => { toggle() }}
      status={iconStatus}
    >
      <MenuToggle1 className='svg-1' />
      <MenuToggle2 className='svg-2' />
    </ToggleWrapper>
  );
}

export default MenuToggle;