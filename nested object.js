
const getNested = (data, keys) => keys.reduce((prev, current) => prev?.hasOwnProperty(current) ? prev[current] : null, data);
console.log(getNested());