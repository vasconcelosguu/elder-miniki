const getItemDetails = async (itemId) => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/items/${itemId}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
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

const getBossDetails = async (bossId) => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/bosses/${bossId}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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

const getWeaponsId = (query) => {
  console.log(query);
};

const getAllWeapons = async (page) => {
  try {
    const response = await fetch(`https://eldenring.fanapis.com/api/weapons?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getClassesId = (query) => {
  console.log(query);
};

const getAllClasses = async () => {
  try {
    const response = await fetch('https://eldenring.fanapis.com/api/classes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getItemDetails,
  getAllItems,
  getAllBosses,
  getBossDetails,
  getWeaponsId,
  getAllWeapons,
  getClassesId,
  getAllClasses,
};
