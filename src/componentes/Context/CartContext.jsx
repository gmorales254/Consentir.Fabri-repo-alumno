import React, {useState, createContext} from 'react';


export const CartContext = createContext ();

export function CartProvider ({children}) {
    const [carrito,setCarrito] = useState ([]);

    function addItem (items, quantity,) {
        
      if (isInCart(items.id)){
        let aux= carrito;
        let itemsIndex= aux.indexOf((element)=>element.id === items.id);
        aux[itemsIndex].quantity += quantity;
       
        setCarrito (...aux);
      }else{
        setCarrito ([...carrito, {...items, quantity,total}]);
      }
      
     }

      function clear () {
        setCarrito([]);

    }
    let total = carrito.reduce((price,items)=>price + items.price * items.quantity,0);
   
    const removeItem = (id) => {setCarrito(carrito.filter(element =>element.id))};

    function isInCart (itemsId) {
        carrito.find((element)=>element.id ===itemsId);
}


return (
    <CartContext.Provider value = {{addItem,removeItem,clear,carrito,total}}>
    {children}
    </CartContext.Provider>
)
}