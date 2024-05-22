import { atom } from "recoil";

export const paymentCardsState = atom({
    key: "paymentCards",
    default: [
        {
            type: "Mastercard",
            name: "Pseudo Dev",
            number: "5698512387654321",
            exp: "12/24",
            cvv: "991"
        },
        {
            type: "Mastercard",
            name: "Ozovehe",
            number: "56985123876543021",
            exp: "10/26",
            cvv: "129"
        },
    ]
})

export const userState = atom({
    key: "User",
    default: {
        username: "Pseudo Dev",
        email: "",
        password: "pseudodev@gmail.com",
    }
})

export const selectedProductState = atom({
    key: ""
})

export const cartState = atom({
    key: "Cart",
    default: []
})

export const wishListState = atom({
    key: "WishList",
    default: []
})

export const deliveryAddressState = atom({
    key: "Delivery Address",
    default: []
})