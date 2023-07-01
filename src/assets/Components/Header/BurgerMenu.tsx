import React, { FC, MouseEvent } from 'react'
import './BurgerMenu.scss';

interface IBurgerMenuProps {
  isBurgerActive: boolean;
  handleBurgerClick: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ isBurgerActive, handleBurgerClick }) => {
  return (
    <div className={`burger ${isBurgerActive ? "_active" : ""}`} onClick={handleBurgerClick}>
      <img className="telephone" src="img/telephone.svg" alt="telephone" />
      <span></span>
    </div>
  );
};

export default BurgerMenu;
