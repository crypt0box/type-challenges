1-4
function sumOfPos(arr: number[]) {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);

// エラー例
sumOfPos(123, 456);
sumOfPos([123, "foobar"]);

// 1-3
// type IsPositiveFunc = (num: number) => boolean

// const isPositive: IsPositiveFunc = num => num >= 0;

// // 使用例
// isPositive(5);

// // エラー例
// isPositive('foo');
// const res: number = isPositive(123);

// 1-2
// function showUserInfo(user: User) {
//   // 省略
// }

// type User = {
//   name: string;
//   age: number;
//   private: boolean;
// }

// // 使用例
// showUserInfo({
//   name: 'John Smith',
//   age: 16,
//   private: false,
// });

// // エラー例
// showUserInfo({
//   name: 'Mary Sue',
//   private: false,
// });
// const usr: User = {
//   name: 'Gombe Nanashino',
//   age: 100,
// };

// 1-1
// function isPositive(num: number): boolean {
//   return num >= 0;
// }

// // 使用例
// isPositive(3);

// // エラー例
// isPositive('123');
// const numVar: number = isPositive(-5);