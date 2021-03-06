// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isSomebodyAdult = people.some(person => {
      const currentYear = (new Date()).getFullYear(); // зачем new Date в скобках?
      if(currentYear - person.year >= 19) { // можно просто вычесть из текущего года person.year
        return true; 
      }
  });

  console.log(isSomebodyAdult);

  // Array.prototype.every() // is everyone 19 or older?
  const isAllAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19); // то же ES6

  console.log({isAllAdults}); // можно работать с объектом

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findId = comments.find(phrase => phrase.id === 823423);

  console.log(findId);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const findIndexOfId = comments.findIndex(phrase => phrase.id === 823423);

  console.log(findIndexOfId);

  // comments.splice(findIndexOfId, 1);

  const newComments = [
    ...comments.slice(0, findIndexOfId),
    ...comments.slice(findIndexOfId + 1)
  ]; // этот момент не понял, что он делает? Создает новый массив?

