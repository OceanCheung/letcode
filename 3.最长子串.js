/** 
 * 给定一个字符串， 请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: "abcabcbb"
    输出: 3
    解释: 因为无重复字符的最长子串是 "abc"，
    所以其长度为 3。
    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，
    所以其长度为 1。
*/

const str = "bbbccceeeaaed";  // ['b','b','b','c','c','c','e','e','e',a]

/* 解题思路：
    新创建一个数组、
    将字符存入新数组、
    同时判断新数组中是否存在该元素、
    如果存在、则不插入到新数组、不存在、则插入
    最后返回新元素的值 
*/
const fuc = (str) => {
    let sum= 0;
    const new_arr = []; 
    const arr = str.split('');
    for(let i=0;i<arr.length;i++){
        if(new_arr.indexOf(arr[i])==-1){
            new_arr.push(arr[i]);
        }
    }
    return new_arr.length;
}

const len = fuc(str);

console.log(len);