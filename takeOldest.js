import _ from "lodash";

const users = [
  {name: 'Tirion', birthday: 'Nov 19, 1988'}, // 0
  {name: 'Sam', birthday: 'Nov 22, 1999'}, // 1
  {name: 'Rob', birthday: 'Jan 11, 1975'}, // 2
  {name: 'Sansa', birthday: 'Mar 20, 2001'}, // 3
  {name: 'Tisha', birthday: 'Feb 27, 1992'}, // 4
  {name: 'Chris', birthday: 'Dec 25, 1995'}, // 5
];
const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};

export default takeOldest;