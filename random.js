let results = [["大吉","今日は最高の一日になります！"],["中吉","今日はいいことがあるでしょう"],["吉","なにかいいことがあるかも"],["末吉","良くも悪くもなし！"],["凶","何か悪いことがあるので気を付けよう"],["大凶","今日は何もしないでください"]];
let result_set = [0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5];
let colors = ["赤","青","黄","緑","橙","紫","白","黒","紺","金","銀"];
let items = ["コーヒー","スイーツ","入浴剤","お花","食器","お酒","キッチン用品","アロマ","バッグ","ハンドクリーム","タオル"];

function random_result(){
    var result_number = result_set[Math.floor( Math.random()*39 )];
    var color_number = Math.floor( Math.random()*11 );
    var item_number = Math.floor( Math.random()*11 );

    return[results[result_number],colors[color_number],items[item_number]];
}
var [result,color,item] = random_result();
//console.log(random_result());

var resultPart = document.getElementById("result");
var commentPart = document.getElementById("comment");
var colorPart = document.getElementById("color");
var itemPart = document.getElementById("item");

resultPart.innerHTML = "【" + result[0] + "】";
commentPart.innerHTML = result[1];
colorPart.innerHTML = color;
itemPart.innerHTML = item;