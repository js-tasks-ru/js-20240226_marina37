/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const arr = Object.entries(obj);
      
  const filteredArr = arr.filter(([key, value]) => !fields.includes(key));


  
  const filteredObj = Object.fromEntries(filteredArr);
  
  return filteredObj;
};
