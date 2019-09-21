/* 
  题目描述
  请实现一个函数， 将一个字符串中的每个空格替换成“ % 20”。 例如， 当字符串为We Are Happy.则经过替换之后的字符串为We % 20 Are % 20 Happy。

  难度：简单
*/

function replaceSpace(str) {
  // write code here
  /*while(str.indexOf(' ') > -1) str = str.replace(' ','%20');
  return str;*/
  str = str.split(' ').join('%20');
  return str;
}