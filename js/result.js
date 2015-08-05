function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
$(document).ready(function() {
  name = Cookies.get('name');

  staff  = ["崑元", "Clarence", "Penny", "零葉", "蝦子", "莫風", "味噌", "泰泰", "PCC", "ZAL", "洋蔥", "腿骨", "松鼠", "Sunset", "靈夢", "JefferySAC", "球球", "Victor", "Beauty", "YW", "小米", "葉子", "Emma", "芥龍", "小寒", "阿哲", "克莉絲汀"];
  var people = new Array();
  var action = new Array("一起美照三連拍", "對唱林俊傑的小酒窩", "對唱「找不到」", "一起芭蕾舞三連拍", "肚子磨肚子", "互相地趴", "互相壁咚", "公主抱", "臉貼臉五秒鐘", "一起重現開源魔法少女", "一起表演濕滑變臉", "跟台大開源的兩屆社長一起拍女神三連拍", "找十個人一起做村長的招牌動作", "跟活動組長一起可愛三連拍");

  people = shuffle(people);
  action = shuffle(action);
  staff  = shuffle(staff);

  if(name == "undefined" || name == null || name == "" ) {
    $('span#gameplayer1').html(staff[0]);
  } else {
    $('span#gameplayer1').html(name);
  }

  if(Cookies.get('teammates1') == "undefined" || Cookies.get('teammates1') == null || Cookies.get('teammates1') == "") {
      people.push(staff[1]);
  } else {
    people.push(Cookies.get('teammates1'));
  }

  if(Cookies.get('teammates2') == "undefined" || Cookies.get('teammates2') == null || Cookies.get('teammates2') == "") {
      people.push(staff[2]);
  } else {
    people.push(Cookies.get('teammates2'));
  }

  if(Cookies.get('teammates3') == "undefined" || Cookies.get('teammates3') == null || Cookies.get('teammates3') == "") {
      people.push(staff[3]);
  } else {
    people.push(Cookies.get('teammates3'));
  }

  $('span#gameplayer2').html(people[0]);
  $('span#gameaction').html(action[0]);
});
