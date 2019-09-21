/* 
  题目描述：
  输入一个链表， 按链表从尾到头的顺序返回一个ArrayList。

  思路：

  备注：这道题有点怪。怎么是输出一个数组呢，应该返回一个链表结点才对吧。
*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  // write code here
  var pNode = head;
  const arr = [];
  while (pNode) {
    arr.unshift(pNode.val);
    pNode = pNode.next;
  }
  return arr;
}