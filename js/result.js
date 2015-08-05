function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
$(document).ready(function() {
  name = Cookies.get('name');
  var people = new Array("Jeffy Sac", "球球", "崑元", "腿骨");
  var action = new Array("一起美照三連拍", "對唱林俊傑的小酒窩", "一起芭雷舞三連拍", "肚子磨肚子", "互相地趴", "互相壁咚", "公主抱", "臉貼臉五秒鐘", "一起重現開源魔法少女", "一起表演濕滑變臉", "跟台大開源的兩屆社長一起拍女神三連拍", "找十個人一起做村長的招牌動作", "跟活動組長一起可愛三連拍");

  people = shuffle(people);
  action = shuffle(action);

  $('span#gameplayer1').html(name);
  $('span#gameplayer2').html(people[0]);
  $('span#gameaction').html(action[0]);
});
