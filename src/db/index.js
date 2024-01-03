
const getItemId = (query) => {
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

const getAllItems = async (page) => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/items?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getBossId = (query) => {

}

const getAllBosses = async (page) => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/bosses?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getWeaponsId = (query) => {}

const getAllWeapons = async (page) => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/weapons?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getClassesId = (query) => {}

const getAllClasses = async () => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/classes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {
  getItemId,
  getAllItems,
  getAllBosses,
  getBossId,
  getWeaponsId,
  getAllWeapons,
  getClassesId,
  getAllClasses,
};

