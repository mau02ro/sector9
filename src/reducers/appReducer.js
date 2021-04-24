import {
  ADD_SHOPPING_CART_TYPE,
  REMOVE_SHOPPING_CART_TYPE,
} from "../types/appReducer";

const INITIAL_STATE = {
  shoppingCart: [
    {
      id: 0,
      product: "tablas",
      category: "classix",
      name: "basilisk deck",
      description:
        "Un descendiente directo y más corto de nuestro Pin OG, el Basilisk fácil de montar está listo para establecer algunas líneas clásicas. ¡Ábrase camino por el paseo marítimo de noche o de día con las ruedas Lumithane de 67 mm, con núcleos LED que alimentan el uretano Glow in the Dark! Si eso no fue suficiente para iluminar tu camino, el mazo negro completamente sumergido presenta un gráfico de Glow in the Dark que brilla sin importar la hora del día.",
      price: "72.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-1-1.png?alt=media&token=98eee2ae-9f9f-4bf3-b284-c11ded3574de",
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-1-2.png?alt=media&token=72e7b23d-6b9d-4f5b-b7df-ead6196f662a",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "longitud",
              value: '40.0"',
            },
            {
              key: "ancho",
              value: '9.25"',
            },
            {
              key: "distancia ente ejes",
              value: '27.75"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "7 capas de arce Full Dip Black Deck LED Powered GID Lumithane Wheels Brillan en la oscuridad Lámina por Daniel Sheridan",
        },
      ],
    },
    {
      id: 0,
      product: "tablas",
      category: "classix",
      name: "basilisk deck",
      description:
        "Un descendiente directo y más corto de nuestro Pin OG, el Basilisk fácil de montar está listo para establecer algunas líneas clásicas. ¡Ábrase camino por el paseo marítimo de noche o de día con las ruedas Lumithane de 67 mm, con núcleos LED que alimentan el uretano Glow in the Dark! Si eso no fue suficiente para iluminar tu camino, el mazo negro completamente sumergido presenta un gráfico de Glow in the Dark que brilla sin importar la hora del día.",
      price: "72.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-1-1.png?alt=media&token=98eee2ae-9f9f-4bf3-b284-c11ded3574de",
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-1-2.png?alt=media&token=72e7b23d-6b9d-4f5b-b7df-ead6196f662a",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "longitud",
              value: '40.0"',
            },
            {
              key: "ancho",
              value: '9.25"',
            },
            {
              key: "distancia ente ejes",
              value: '27.75"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "7 capas de arce Full Dip Black Deck LED Powered GID Lumithane Wheels Brillan en la oscuridad Lámina por Daniel Sheridan",
        },
      ],
    },
  ],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SHOPPING_CART_TYPE:
      state.shoppingCart.push(action.payload);
      console.log(state.shoppingCart);
      return state;

    case REMOVE_SHOPPING_CART_TYPE:
      let newCart = [];

      state.shoppingCart.forEach((product, index) => {
        if (index !== action.payload) {
          newCart.push(product);
        }
      });

      return {
        ...state,
        shoppingCart: newCart,
      };

    default:
      return state;
  }
};
