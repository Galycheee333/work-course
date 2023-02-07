const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const locations = [['Park', [10, 5]], ['Sea', [1, 3]], ['Museum', [8, 4]],];
const currentPoints = [5, 5];

// BEGIN (write your solution here)
const getTheNearestLocation = (location, currentPoints) => {
  const locationsMap = new Map(location);
  const offsetCurrentPointOfLocations = new Map();

  locationsMap.forEach((item, key) => {
    const offsetPoints = getDistance(item, currentPoints);
    offsetCurrentPointOfLocations.set(key, offsetPoints);
  });

  const nearestLocationArr = [...offsetCurrentPointOfLocations.entries()];
  const sortedNearestLocation = nearestLocationArr
    .sort((a, b) => a[1] - b[1])[0];

  return [sortedNearestLocation[0], locationsMap.get(sortedNearestLocation[0])];
};
console.log(getTheNearestLocation(locations, currentPoints));

