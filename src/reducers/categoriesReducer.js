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
        "Estas bases han resistido la prueba del tiempo y continúan rodando milla tras milla, todo sobre el mundo.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases.png?alt=media&token=e54a685e-8d58-48bb-b8d5-b80d03269409",
      subCategories: [
        {
          name: "classix",
          description:
            "Si las bases fáciles de montar en la serie Classix dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases-classix.png?alt=media&token=13bbf104-90aa-4530-9663-62f6ea35faf4",
        },
        {
          name: "downhill",
          description:
            "Si las bases fáciles de montar en la serie Downhillte dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases-downhill.png?alt=media&token=83690c6c-bec7-4374-86e3-a777c865bb96",
        },
        {
          name: "platinum",
          description:
            "Si las bases fáciles de montar en la serie Platinum dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Fbases-platinum.png?alt=media&token=d32ee87e-b3df-4ca2-9344-1bb491e84af3",
        },
      ],
    },
    {
      name: "llantas",
      description:
        "Estas llantas han resistido la prueba del tiempo y continúan rodando milla tras milla, todo sobre el mundo.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Ftires.png?alt=media&token=e75eb480-9f5a-403f-b88e-f4455e0c838b",
      subCategories: [
        {
          name: "classix",
          description:
            "Si las llantas fáciles de montar en la serie Classix dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Ftires-classix.png?alt=media&token=e9f97af8-277d-4c09-aebd-ca5ff3806d4d",
        },
        {
          name: "downhill",
          description:
            "Si las llantas fáciles de montar en la serie Downhillte dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Ftires-downhill.png?alt=media&token=8aa5c4ac-4f73-4b45-b22e-74df21804f11",
        },
        {
          name: "platinum",
          description:
            "Si las llantas fáciles de montar en la serie Platinum dan ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso (con tu patineta, por supuesto), entonces hemos hecho nuestro trabajo.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/categories%2Ftires-platinum.png?alt=media&token=0c46c205-d5dd-4db7-8522-afa176781261",
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
