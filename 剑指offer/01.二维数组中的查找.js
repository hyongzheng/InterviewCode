/* 
  题目描述：
  在一个二维数组中（ 每个一维数组的长度相同）， 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数， 判断数组中是否含有该整数。

  难度：简单

  我的思路：暴力法遍历
*/

function Find(target, array) {
  // write code here
  var lenX = array.length;
  var lenY = array[0].length;
  for (var i = lenX - 1, j = 0; i >= 0 && j < lenY;) {
    if (target < array[i][j]) {
      i--;
    } else if (target > array[i][j]) {
      j++;
    } else {
      return true;
    }

  }
  return false;
}