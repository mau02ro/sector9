const INITIAL_STATE = {
  products: [
    // tablas
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
      id: 1,
      product: "tablas",
      category: "downhill",
      name: "ripped luis pro deck",
      description:
        "¡Agregue un poco de chisporroteo a su viaje con el Ripped Louis Pro! Esta tabla presenta un cóncavo ondulado en la parte delantera, que proporciona un bolsillo para bloquear los pies y te ayudará a ganar confianza en tus toboganes. La construcción rígida, liviana de fibra de vidrio y arce permite un fácil control, a cualquier velocidad. El montaje al ras del camión, la micro caída y la cola de patada complementan las otras características de la tabla y aseguran que te divertirás sin importar a dónde te lleve el viaje.",
      price: "72.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-downhill-product-1-1.png?alt=media&token=98eb8241-5e83-4c73-82f1-c16e40923091",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "longitud",
              value: '39.5"',
            },
            {
              key: "ancho",
              value: '9.75"',
            },
            {
              key: "distancia ente ejes",
              value: '26"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Ligera arce / fibra de vidrio de la construcción de tilo ondulado parte inferior de color chapa con pozos de rueda.",
        },
      ],
    },

    {
      id: 2,
      product: "tablas",
      category: "platinum",
      name: "canyon catapult deck",
      description:
        "La Canyon Catapult es una tabla multifacética que proporciona una conducción baja e increíblemente estable. Ya sea que esté presionando una larga distancia, probando para nuestro equipo de la División de Descenso en pendientes pronunciadas o simplemente haciendo freeride por sus lugares locales favoritos, puede contar constantemente con este tablero para cumplir o superar todas sus expectativas.",
      price: "94.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-platinum-product-1-1.png?alt=media&token=e5457388-5a83-46de-94f5-d5de144cc775",
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-platinum-product-1-2.png?alt=media&token=ec9aaea9-51ce-4437-93ca-d3f7dcb1b96b",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "longitud",
              value: '38"',
            },
            {
              key: "ancho",
              value: '9.5"',
            },
            {
              key: "distancia ente ejes",
              value: '29"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Rieles afilados de 8 capas de arce para agarre y control extra Elíptico desplegable Molde desplegable a través de forma simétrica.",
        },
      ],
    },

    {
      id: 3,
      product: "tablas",
      category: "platinum",
      name: "daybreak static deck",
      description:
        "Nos propusimos diseñar el Estático con grandes esperanzas. Queríamos una tabla freeride de caída libre que fuera lo suficientemente rígida como para ser súper funcional con su nariz y cola, sin el alto precio de los compuestos o el peso agregado. Además, agregamos un poco cóncavo a las pequeñas áreas de la nariz y la cola y le damos aún más impulso al boom. Está amaneciendo en la ciudad, y tienes tecnología donde la necesitas.",
      price: "94.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fboards-platinum-product-2-1.png?alt=media&token=a4e1864a-7030-49f0-b628-5cbac096681f",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "longitud",
              value: '39.5"',
            },
            {
              key: "ancho",
              value: '9.75"',
            },
            {
              key: "distancia ente ejes",
              value: '26.5"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value: "Pozos de ruedas CNC de arce de 8 capas.",
        },
      ],
    },

    // Bases
    {
      id: 4,
      product: "bases",
      category: "sidewinder ii",
      name: "sidewinder ii silver",
      description: null,
      price: "32.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-sidewinder%20ii-1-1.png?alt=media&token=e6763523-5744-452f-9c1a-cf912b64ec68",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "Ancho",
              value: '9.0"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value: "6 agujeros",
        },
      ],
    },
    {
      id: 5,
      product: "bases",
      category: "sidewinder ii",
      name: "gullwing reverse black",
      description: null,
      price: "32.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-sidewinder%20ii-2-1.png?alt=media&token=3432766f-5265-4c3a-bd8a-59edea646064",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "Ancho",
              value: '9.0"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value: "6 agujeros",
        },
      ],
    },
    {
      id: 6,
      product: "bases",
      category: "reverse",
      name: "gullwing reverse black",
      description: null,
      price: "32.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-reverse-1-1.png?alt=media&token=e0b68442-ba0f-4d3b-815d-9117cf38199e",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "Ancho",
              value: '9.0"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value: "6 agujeros",
        },
      ],
    },
    {
      id: 7,
      product: "bases",
      category: "reverse",
      name: "gullwing reverse white",
      description: null,
      price: "32.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fbases-reverse-2-1.png?alt=media&token=605d33da-1d79-4f23-a9a7-49ebb232caef",
      ],
      about: [
        {
          title: "dimensiones",
          value: [
            {
              key: "Ancho",
              value: '9.0"',
            },
          ],
        },
        {
          title: "caracteristicas",
          value: "6 agujeros",
        },
      ],
    },

    // LLantas
    {
      id: 8,
      product: "llantas",
      category: "nineballs",
      name: "64mm 78a nineballs green",
      description:
        "Nos propusimos diseñar el Estático con grandes esperanzas. Queríamos una tabla freeride de caída libre que fuera lo suficientemente rígida como para ser súper funcional con su nariz y cola, sin el alto precio de los compuestos o el peso agregado. Además, agregamos un poco cóncavo a las pequeñas áreas de la nariz y la cola y le damos aún más impulso al boom. Está amaneciendo en la ciudad, y tienes tecnología donde la necesitas.",
      price: "34.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fwheels-nineballs-1-1.png?alt=media&token=463d7955-bfd1-4b86-8b2b-a5c016097422",
      ],
      about: [
        {
          title: "especificaciones",
          value: [
            {
              key: "diámetro",
              value: "64mm",
            },
            {
              key: "durómetro",
              value: "78A",
            },
            {
              key: "parche de contacto",
              value: "35mm",
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Buena velocidad de balanceo labios redondos para toboganes lisos sobre grietas e imperfecciones en el camino.",
        },
      ],
    },
    {
      id: 9,
      product: "llantas",
      category: "nineballs",
      name: "74mm 78a nineballs red",
      description:
        "Nos propusimos diseñar el Estático con grandes esperanzas. Queríamos una tabla freeride de caída libre que fuera lo suficientemente rígida como para ser súper funcional con su nariz y cola, sin el alto precio de los compuestos o el peso agregado. Además, agregamos un poco cóncavo a las pequeñas áreas de la nariz y la cola y le damos aún más impulso al boom. Está amaneciendo en la ciudad, y tienes tecnología donde la necesitas.",
      price: "34.00",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fwheels-nineballs-2-1.png?alt=media&token=c6d0bfcc-ec20-4aaf-9968-bd7e535593bf",
      ],
      about: [
        {
          title: "especificaciones",
          value: [
            {
              key: "diámetro",
              value: "74mm",
            },
            {
              key: "durómetro",
              value: "78A",
            },
            {
              key: "parche de contacto",
              value: "50mm",
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "El acabado natural proporciona un agarre adicional, los rollos de mayor tamaño sobre escombros e imperfecciones ayuda a mantener la velocidad por más tiempo.",
        },
      ],
    },

    {
      id: 10,
      product: "llantas",
      category: "race formula",
      name: "70mm race formula white",
      description: null,
      price: "37.50",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fwheels-raceFormula-1-1.png?alt=media&token=8b92fe06-d2e7-4e3a-b902-fad93524abed",
      ],
      about: [
        {
          title: "especificaciones",
          value: [
            {
              key: "diámetro",
              value: "70mm",
            },
            {
              key: "durómetro",
              value: "80A",
            },
            {
              key: "parche de contacto",
              value: "38mm",
            },
          ],
        },
        {
          title: "caracteristicas",
          value:
            "Rieles afilados de 8 capas de arce para agarre y control extra Elíptico desplegable Molde desplegable a través de forma simétrica.",
        },
      ],
    },
    {
      id: 11,
      product: "llantas",
      category: "race formula",
      name: "70mm offset yellow",
      description: null,
      price: "37.50",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fwheels-raceFormula-2-1.png?alt=media&token=6ef6b351-bcac-463a-ae3c-1d8909d65086",
      ],
      about: [
        {
          title: "especificaciones",
          value: [
            {
              key: "diámetro",
              value: "70mm",
            },
            {
              key: "durómetro",
              value: "78A",
            },
            {
              key: "parche de contacto",
              value: "38mm",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      product: "llantas",
      category: "race formula",
      name: "70mm centerset blue",
      description: null,
      price: "37.50",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/product%2Fwheels-raceFormula-3-1.png?alt=media&token=1f5f2f4e-87c4-48de-a139-f0539d490361",
      ],
      about: [
        {
          title: "especificaciones",
          value: [
            {
              key: "diámetro",
              value: "70mm",
            },
            {
              key: "durómetro",
              value: "80A",
            },
            {
              key: "parche de contacto",
              value: "38mm",
            },
          ],
        },
      ],
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
