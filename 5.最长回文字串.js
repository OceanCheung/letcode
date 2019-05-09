/**
 * 给定一个字符串 s， 找到 s 中最长的回文子串。 你可以假设 s 的最大长度为 1000。
 *  输入: "babad"
    输出: "bab"
    输入: "cbbd"
    输出: "bb"
*/

/** 
 * 解题思路：
 * 遍历字符串,
 * 前一个字符和后一个字符相比较,
 * 拿到相同字符串的下标,
 * 再生成新的字符串
 * 
*/
const fuc = (str) => {
    for(let i=0;i<str.length;i++){
       for(let j = i+1;j<str.length-1-i;j++){
            if(str[i]==str[j]){
                return ((i,j)=>{
                    let new_str = '';
                    for(let m=i;m<=j;m++){
                        new_str += `${str[m]}`;
                    }
                    return new_str;
                })(i,j);
            }
       }
    }
}

const str = "cbababc";
const new_str = fuc(str);

console.log('新字符串：',new_str);
