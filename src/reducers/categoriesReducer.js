const INITIAL_STATE = {
  categories: [
    {
      name: "tablas",
      description:
        "Estas tablas han resistido la prueba del tiempo y continúan rodando milla tras milla, todo sobre el mundo.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fboards.png?alt=media&token=4828f1de-8571-45ed-b133-695f56357cfa",
      subCategories: [
        {
          name: "classix",
          description:
            "Si las tablas fáciles de montar en la serie Classix te dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fboards-classix.png?alt=media&token=29ae2345-f1ee-4d72-854e-b36505406f95",
        },
        {
          name: "downhill",
          description:
            "Si las tablas fáciles de montar en la serie Downhillte dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fboards-downhill.png?alt=media&token=5020fc88-4a2c-44d9-b9dc-d0c311de03cd",
        },
        {
          name: "platinum",
          description:
            "Si las tablas fáciles de montar en la serie Platinum dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fboards-platinum.png?alt=media&token=7f9973f1-8b7f-4bd9-aefc-3dbacb355457",
        },
      ],
    },
    {
      name: "bases",
      description:
        "Estamos orgullosos de utilizar las bases de nuestra empresa hermana, Gullwing, para todos nuestros productos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases.png?alt=media&token=e54a685e-8d58-48bb-b8d5-b80d03269409",
      subCategories: [
        {
          name: "reverse",
          description:
            "Como su nombre lo indica, nuestras Bases Reverse cuentan con un estilo de perno rey inverso y se utilizan mejor para tallar y descender, y el perno estriado se mantiene seguro en su lugar mientras se conduce todo tipo de terreno.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases-reverse.png?alt=media&token=c1e47558-b856-4dea-acbc-f276996bc0ea",
        },
        {
          name: "sidewinder ii",
          description:
            "Sidewinder II presentan un estilo patentado de doble perno rey y el más adecuado para tallar. ¡Los Kingpins moleteados permanecen seguros en su lugar mientras conduces y te permitirán tallar más fuerte, más profundo y más liso de lo que jamás hayas imaginado!",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases-sidewinder%20ii.png?alt=media&token=a7f5b1b9-a3f8-41b8-bd72-a86fc393cc12",
        },
      ],
    },
    {
      name: "llantas",
      description:
        "Sin lugar a dudas, un buen juego de ruedas puede convertir una tabla promedio en una buena.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Ftires.png?alt=media&token=e75eb480-9f5a-403f-b88e-f4455e0c838b",
      subCategories: [
        {
          name: "nineballs",
          description:
            "Nuestras Nineballs han sido durante mucho tiempo las favoritas de los patinadores de todos los ámbitos de la vida. Desde niños de crucero hasta cargadores de freeride, tenemos algo para todos en esta colección.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fwheels-nineballs.png?alt=media&token=900056d9-4fb9-4f96-90d1-663ca9d53d99",
        },
        {
          name: "race formula",
          description:
            "Una de nuestras consignas desde hace mucho tiempo aquí en el Sector 9 es '¡Si no ganas la carrera, gana la fiesta!', ¡Pero estamos bastante seguros de que nuestra fórmula de carrera te ayudará a cruzar la línea de meta primero!.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fwheels-raceFormula.png?alt=media&token=792a204b-138c-4ab2-a8fb-ed8841a09f42",
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
