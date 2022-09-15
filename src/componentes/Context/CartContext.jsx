import React, {useState, createContext} from 'react';


export const CartContext = createContext ();

export function CartProvider ({children}) {
    const [item,setItem] = useState ([]);

    function addItem (items, quantity) {
        
      if (isInCart(items.id)){
        let aux= item;
        let itemsIndex= aux.indexOf((element)=>element.id === items.id);
        aux[itemsIndex].quantity += quantity;
        aux[itemsIndex].total += items.price * quantity;
        setItem (...aux);
      }else{
        setItem ([...item, {items, quantity}]);
      }
     }

      function clear () {
        setItem =([]);

    }
    const removeItem = (id) => {setItem(item.filter(element =>element.id))};

    function isInCart (itemsId) {
        item.find((element)=>element.id ===itemsId);
}


return (
    <CartContext.Provider value = {{addItem,removeItem,clear,item}}>
    {children}
    </CartContext.Provider>
)
}