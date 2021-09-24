const getDataResult = (dbData, search) => {
  const formatText = search.toLowerCase();

  console.log(formatText);

  let resultData = [
    {
      author: {
        name: "Ismael",
        lastname: "BRojas",
      },
      categories:
        formatText === "ipod"
          ? [
              "Electrónica, Audio y Video",
              "iPod",
              "Reproductores",
              "iPod touch",
            ]
          : ["Electrónica, Audio y Video", "iPhone", "Reproductores", "iPhone"],
      items: [...dbData],
    },
  ];

  return resultData;
};

const getDataResultProduct = dbData => {
  const categoryFormat = dbData.category;

  let resultDataProduct = [
    {
      author: {
        name: "Ismael",
        lastname: "BRojas",
      },
      categories:
        categoryFormat === "ipod"
          ? [
              "Electrónica, Audio y Video",
              "iPod",
              "Reproductores",
              "iPod touch",
            ]
          : ["Electrónica, Audio y Video", "iPhone", "Reproductores", "iPhone"],
      ...dbData,
    },
  ];

  return resultDataProduct;
};

module.exports = {
  getDataResult,
  getDataResultProduct,
};
