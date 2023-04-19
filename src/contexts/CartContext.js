import { createContext, useState } from "react";

export const Cart = createContext();

const CartContext = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalUniqueItems, setTotalUniqueItems] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);
    const [cartTotal, setCartTotal] = useState(0);
    const updateCart = (newCart) => {
        setItems(newCart);
        setTotalUniqueItems(newCart.length);
        setIsEmpty(newCart.length === 0 ? true : false);
        let total = 0;
        for (let i = 0; i < newCart.length; i++) {
            total += newCart[i].totalPrice;
        }
        setCartTotal(total);
    };
    const addItem = (item, quantity = 1) => {
        let tmp = items;
        const toAdd = {
            id: item.id,
            quantity: quantity,
            item: item,
            price: item.price,
            totalPrice: item.price * quantity,
        };
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].id == item.id) {
                tmp[i].quantity++;
                tmp[i].totalPrice = tmp[i].quantity * tmp[i].price;
                updateCart(tmp);
                return;
            }
        }
        tmp.push(toAdd);
        updateCart(tmp);
    };
    const removeItem = (item_id) => {
        let tmp = [];

        for (let i = 0; i < items.length; i++) {
            if (items[i].id !== item_id) {
                tmp.push(items[i]);
            }
        }
        updateCart(tmp);
    };
    const updateItemQuantity = (item_id, quantity = 1) => {
        const tmp = items;
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].id == item_id) {
                if (tmp[i].quantity + quantity > 0) {
                    tmp[i].quantity += quantity;
                    tmp[i].totalPrice = tmp[i].quantity * tmp[i].price;
                    break;
                } else {
                    removeItem(item_id);
                    return;
                }
            }
        }
        updateCart(tmp);
    };
    const emptyCart = () => {
        updateCart([]);
    };
    return (
        <Cart.Provider
            value={{
                items,
                addItem,
                removeItem,
                totalUniqueItems,
                isEmpty,
                cartTotal,
                updateItemQuantity,
                emptyCart,
            }}
        >
            {children}
        </Cart.Provider>
    );
};

export default CartContext;
