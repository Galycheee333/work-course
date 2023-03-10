const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

const cb = (acc, student) => {
  if(!Object.hasOwn(acc, student.mark)) {
    acc[student.mark] = [];
  }
  acc[student.mark].push(student);
  return acc;
}

const groupBy = students.reduce(cb, {});

console.log(groupBy);

// BEGIN
//const groupBy = (objects, key) => objects.reduce((acc, object) => {
  // из каждого объекта берётся значение по ключу
 // const groupName = object[key];
  // контейнером группы выступает массив
  // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  //const group = acc[groupName] ?? [];
  // возвращается новый объект аккумулятора
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
  // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
 // return { ...acc, [groupName]: group.concat(object) };
//}, {});

//export default groupBy;
// END