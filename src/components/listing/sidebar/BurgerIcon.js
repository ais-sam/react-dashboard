import React from 'react'
import burger from "../../../assets/icons/burger.png"
import miniBurger from "../../../assets/icons/mini_burger.png"

const BurgerIcon = ({mini,onClick}) => {
    if (!mini) {
        return (
          <div className="border-b-[0.1px]  border-b-gray-600 px-5 py-4">
            <button onClick={onClick}>
              <img src={burger} className="w-10" />
            </button>
          </div>
        );
    }
    return (
      <div className="border-b-[0.1px]  border-b-gray-600 px-3 mx-4 pt-5 pb-6 flex justify-start">
        <button onClick={onClick}>
          <img src={miniBurger} className="w-8" />
        </button>
      </div>
    );
}

export default BurgerIcon