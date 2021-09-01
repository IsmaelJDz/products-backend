const getDataResult = dbData => {
  let resultData = [
    {
      author: {
        name: "Ismael",
        lastname: "BRojas",
      },
      categories: [
        "Electrónica, Audio y Video",
        "iPod",
        "Reproductores",
        "iPod touch",
      ],
      items: [...dbData],
    },
  ];

  return resultData;
};

const getDataResultProduct = dbData => {
  let resultDataProduct = [
    {
      author: {
        name: "Ismael",
        lastname: "BRojas",
      },
      ...dbData,
    },
  ];

  return resultDataProduct;
};

module.exports = {
  getDataResult,
  getDataResultProduct,
};
