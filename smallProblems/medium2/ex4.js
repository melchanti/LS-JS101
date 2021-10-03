/*
Problem:
  Input: Number (year)
  Output: Number (number of Fridays that fall on the 13)
  Rules:
    1. Return the number of Fridays that fall on the 13th of the month
    2. All years are greater than 1752
    3. Friday is the 6th day of the week (starting at index 0, that makes Friday index 5)
Examples: Given

Data Structures: Represent the months as an array

Algorithm:
  1. Type all the months into an array
  2. Find the 13th day of the month
  3. Determine if it's a Friday, if that's the case add 1 to the total count
  4. Repeat for all months of that year.
*/

function fridayThe13ths (year) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let numberOfFridays = months.reduce ((accum, month) => {
    let date = new Date (`${month} 13, ${year}`);
  
    let day = date.getDay();
  
    return day === 5 ? accum += 1 : accum;
  }, 0);

  console.log (numberOfFridays);

  return numberOfFridays;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2