function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
$(document).ready(function() {
  name = Cookies.get('name');
  var people = new Array("Jeffy Sac", "球球", "崑元", "腿骨");
  var action = new Array("一起夜衝唱K", "一起騎腳踏車上阿里山", "一起美照三連拍", "對唱林俊傑的小酒窩", "一起芭雷舞三連拍", "肚子磨肚子", "互相地趴", "互相壁咚", "公主抱", "臉貼臉五秒鐘", "一起重現開源魔法少女");

  people = shuffle(people);
  action = shuffle(action);

  $('span#gameplayer1').html(name);
  $('span#gameplayer2').html(people[0]);
  $('span#gameaction').html(action[0]);
});
