const INITIAL_STATE = {
  products: [
    {
      product: "",
      category: "",
      name: "",
      description: "",
      price: "",
      images: [],
      about: [
        {
          title: "",
          value: [],
        },
        {
          title: "",
          value: "",
        },
      ],
    },

    //tablas
    {
      id: 1,
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
      id: 2,
      product: "tablas",
      category: "classix",
      name: "paradise deck",
      description:
        "Un descendiente directo y más corto de nuestro Pin OG, el Basilisk fácil de montar está listo para establecer algunas líneas clásicas. ¡Ábrase camino por el paseo marítimo de noche o de día con las ruedas Lumithane de 67 mm, con núcleos LED que alimentan el uretano Glow in the Dark! Si eso no fue suficiente para iluminar tu camino, el mazo negro completamente sumergido presenta un gráfico de Glow in the Dark que brilla sin importar la hora del día.",
      price: "78.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-2-1.png?alt=media&token=e8aa08c5-2c96-4f64-b622-9af74a2e0513",
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-2-2.png?alt=media&token=65e78ac2-35fc-4cf2-8040-dd3be7b7d295",
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
      id: 3,
      product: "tablas",
      category: "classix",
      name: "basilisk deck",
      description:
        "Un descendiente directo y más corto de nuestro Pin OG, el Basilisk fácil de montar está listo para establecer algunas líneas clásicas. ¡Ábrase camino por el paseo marítimo de noche o de día con las ruedas Lumithane de 67 mm, con núcleos LED que alimentan el uretano Glow in the Dark! Si eso no fue suficiente para iluminar tu camino, el mazo negro completamente sumergido presenta un gráfico de Glow in the Dark que brilla sin importar la hora del día.",
      price: "65.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-3-1.png?alt=media&token=9e0e8d4b-5b18-476c-b25b-0b50ebeaec5b",
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
      id: 4,

      product: "tablas",
      category: "classix",
      name: "basilisk deck",
      description:
        "Un descendiente directo y más corto de nuestro Pin OG, el Basilisk fácil de montar está listo para establecer algunas líneas clásicas. ¡Ábrase camino por el paseo marítimo de noche o de día con las ruedas Lumithane de 67 mm, con núcleos LED que alimentan el uretano Glow in the Dark! Si eso no fue suficiente para iluminar tu camino, el mazo negro completamente sumergido presenta un gráfico de Glow in the Dark que brilla sin importar la hora del día.",
      price: "80.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-classix-product-4-1.png?alt=media&token=40071e94-759e-4b14-88bb-44ddb3e60223",
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
    //tablas

    //bases
    {
      id: 5,

      product: "bases",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "60.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-classix-product-1-1.png?alt=media&token=b427568d-31ac-487e-9017-c31d824cf25a",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '8.00"',
            },
            {
              key: "alto",
              value: '6.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    {
      id: 6,

      product: "bases",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "60.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-classix-product-2-1.png?alt=media&token=4da8217b-9ae8-4575-a6d7-73f173049b8a",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '8.00"',
            },
            {
              key: "alto",
              value: '6.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    {
      id: 7,

      product: "bases",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "60.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-classix-product-3-1.png?alt=media&token=d190dd97-9cad-42fa-9cae-bd0fe9d419f2",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '8.00"',
            },
            {
              key: "alto",
              value: '6.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    {
      id: 8,

      product: "bases",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "60.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-classix-product-4-1.png?alt=media&token=1a5278d0-0d5e-431c-8af6-ca3ad968c5ae",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '8.00"',
            },
            {
              key: "alto",
              value: '6.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    //bases

    //llantas
    {
      id: 9,

      product: "llantas",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "100.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Ftires-classix-product-1-1.png?alt=media&token=445fe417-3538-4cb3-8791-6ef73934fc45",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '4.00"',
            },
            {
              key: "alto",
              value: '4.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    {
      id: 10,

      product: "llantas",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "100.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Ftires-classix-product-2-1.png?alt=media&token=a143d414-a753-476d-8c7b-be246d29fb6c",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '4.00"',
            },
            {
              key: "alto",
              value: '4.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    {
      id: 11,

      product: "llantas",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "100.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Ftires-classix-product-3-1.png?alt=media&token=4bf9a28d-a8d1-4558-aba9-6cc8dc9fd3f3",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '4.00"',
            },
            {
              key: "alto",
              value: '4.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    {
      id: 12,

      product: "llantas",
      category: "classix",
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem. Incidunt voluptates blanditiis harum voluptas laudantium tempore repellendus!",
      price: "100.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Ftires-classix-product-4-1.png?alt=media&token=b780faba-9b06-4e36-9874-e0c8ebfd882c",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "ancho",
              value: '4.00"',
            },
            {
              key: "alto",
              value: '4.00"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit itaque quas! Ab quod quae cumque reiciendis. Nisi ipsum consequuntur expedita rem.",
        },
      ],
    },
    //llantas
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
