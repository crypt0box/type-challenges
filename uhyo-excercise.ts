// 2-3
// declare function addEventListener(
//   str: string,
//   func: () => {},
//   obj?: { capture?: boolean; once?: boolean; passive?: boolean } | boolean
// );

// // 使用例
// addEventListener("foobar", () => {});
// addEventListener("event", () => {}, true);
// addEventListener("event2", () => {}, {});
// addEventListener("event3", () => {}, {
//   capture: true,
//   once: false,
// });

// // エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true,
// });

// 2-2
// type Speed = 'slow' | 'medium' | 'fast';

// function getSpeed(speed: Speed): number {
//   switch (speed) {
//     case "slow":
//       return 10;
//     case "medium":
//       return 50;
//     case "fast":
//       return 200;
//   }
// }

// // 使用例
// const slowSpeed = getSpeed("slow");
// const mediumSpeed = getSpeed("medium");
// const fastSpeed = getSpeed("fast");

// // エラー例
// getSpeed("veryfast");

// 2-1 回答例
// function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] | T {
//   const result = [];
//   for (const elm of arr) {
//     if (predicate(elm)) {
//       result.push(elm);
//     }
//   }
//   return result;
// }

// // 使用例
// const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
// const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// // エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

// 2-1 不正解
// function myFilter<T>(arr: T[], predicate) {
//   const result = [];
//   for (const elm of arr) {
//     if (predicate(elm)) {
//       result.push(elm);
//     }
//   }
//   return result;
// }

// // 使用例
// const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
// const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// // エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

// 1-4
// function sumOfPos(arr: number[]) {
//   return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

// // 使用例
// const sum: number = sumOfPos([1, 3, -2, 0]);

// // エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);

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
