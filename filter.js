const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

const getGirlFriends = (users) => {
  const friendsOfUsers = users.flatMap(({friends}) => friends);
  const femaleFriends = friendsOfUsers.filter((friend) => friend.gender === 'female');
  return femaleFriends;
};
console.log(getGirlFriends(users));