// 2-5 不正解
// 回答例
/** 2-5. useState */
// type setStateArgs<T> = T | ((prev: T) => T);
// type setState<T> = (updater: setStateArgs<T>) => void;
// declare function useState<T>(initial: T): [T, setState<T>];
// // 使用例
// // number型のステートを宣言 (numStateはnumber型)
// const [numState, setNumState] = useState(0);
// // setNumStateは新しい値で呼び出せる
// setNumState(3);
// // setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
// setNumState((state) => state + 10);

// // 型引数を明示することも可能
// const [anotherState, setAnotherState] = useState<number | null>(null);
// setAnotherState(100);

// // エラー例
// setNumState("foobar");

// 2-4 不正解
// function giveId(obj) {
//   const id = "本当はランダムがいいけどここではただの文字列";
//   return {
//     ...obj,
//     id
//   };
// }

// 回答例
// function giveId<T>(obj: T): T & { id: string } {
//   const id = "本当はランダムがいいけどここではただの文字列";
//   return {
//     ...obj,
//     id
//   };
// }

// // 使用例
// const obj1: {
//   id: string;
//   foo: number;
// } = giveId({ foo: 123 });
// const obj2: {
//   id: string;
//   num: number;
//   hoge: boolean;
// } = giveId({
//   num: 0,
//   hoge: true
// });

// // エラー例
// const obj3: {
//   id: string;
//   piyo: string;
// } = giveId({
//   foo: "bar"
// });

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
