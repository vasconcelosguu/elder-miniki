
const getItem = (query) => {
  fetch(`https://eldenring.fanapis.com/api/items/${query}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error(error);
    return error;
  });
};

const getAllItems = () => {
  fetch(`https://eldenring.fanapis.com/api/items`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error(error);
    return error;
  });
}

export {
  getItem,
  getAllItems
};
