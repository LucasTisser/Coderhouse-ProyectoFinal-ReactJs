import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  clear: () => {},
  isInCart: () => {},
  getCartQuantity: () => {},
  getTotalPrice: () => {},
});
export const CartContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const addProduct = (productToAdd) => {
    const repeatedItemIndex = productsList.findIndex(
      (item) => item.id === productToAdd.id
    );
    if (repeatedItemIndex !== -1) {
      setProductsList(
        productsList.map((p) =>
          p.id === productToAdd.id
            ? { ...p, quantity: p.quantity + productToAdd.quantity }
            : p
        )
      );
      // Agregar una logica de cantidades, aca se agrega el producto cuando ya estaba en el carrito, pero se desea agregar mas cantidad del mismo
    } else {
      setProductsList([productToAdd, ...productsList]);
    }
  };
  const removeProduct = (id) => {
    const indexToRemove = productsList.findIndex((item) => item.id === id);

    if (productsList[indexToRemove]) {
      if (productsList[indexToRemove].quantity === 1) {
        setProductsList(productsList.filter((i) => i.id !== id));
      } else {
        setProductsList(
          productsList.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity - 1 } : p
          )
        );
      }
    } else {
      alert("No se encuentra este producto en su carrito");
    }
  };
  const clear = () => {
    setProductsList([]);
  };
  const isInCart = (id) => {
    return productsList.map((p) => p.id).indexOf(id) !== -1;
  };
  const getCartQuantity = () => {
    return productsList.reduce((total, value) => {
      return total + value.quantity;
    }, 0);
    // devuelve la suma de las cantidades de los productos
  };

  const getTotalPrice = () => {
    return productsList.reduce((total, value) => {
      return total + value.precio * value.quantity;
    }, 0);
  };
  return (
    <CartContext.Provider
      value={{
        products: productsList,
        addProduct,
        removeProduct,
        clear,
        isInCart,
        getCartQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext