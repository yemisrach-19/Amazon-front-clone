import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reduce = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
    const existingItem=state.basket.find((item)=>item.id===action.item.id)
    if(!existingItem )
      return {
        ...state,

        basket: [...state.basket,{... action.item,amount:1}],
      };
      else{const updateBasket=satisfies.basket.map ((item)=>{return item.id===action.item.id?{...item,amount:item.amount+1}:item})
      return{...state,basket:updateBasket}}
      

    default:return state;
  }

}