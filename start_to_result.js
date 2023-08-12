//おみくじ結果のデータセット
const results = [["大吉","今日は最高の一日になります！"],["中吉","今日はいいことがあるでしょう"],["吉","なにかいいことがあるかも"],["末吉","良くも悪くもなし！"],["凶","何か悪いことがあるので気を付けよう"],["大凶","今日は何もしないでください"]];
const result_set = [0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5];
const colors = ["赤","青","黄","緑","橙","紫","白","黒","紺","金","銀"];
const items = ["コーヒー","スイーツ","入浴剤","お花","食器","お酒","キッチン用品","アロマ","バッグ","ハンドクリーム","タオル"];

const config = {
    start_page : document.getElementById("start_page"),
    result_page : document.getElementById("result_page"), 
}
const buttons ={
    draw_button : document.getElementById("drawOmikuji"),
    back_button : null,
}

function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}
function displayBlock(ele){
    ele.classList.add("d-block");
    ele.classList.remove("d-none");
}

function attachDrawButtonListener() {
    // 既存のイベントリスナーを削除
    buttons.draw_button.removeEventListener("click", drawButtonClickListener);

    // 新しいイベントリスナーを設定
    buttons.draw_button.addEventListener("click", drawButtonClickListener);

}

function drawButtonClickListener() {
    // "おみくじを引く" ボタンのクリックイベントの処理...
    displayNone(config.start_page);
    displayBlock(config.result_page);
    config.start_page.classList.remove("d-flex");//d-flexがあると結果が下に寄ってしまうため。
    config.start_page.innerHTML = "";
    config.result_page.innerHTML = "";
    config.result_page.innerHTML = `
    <div class="pt-5 d-flex justify-content-center text-center align-items-center row">
        <div class="col-12 d-flex justify-content-center text-center align-items-center">
            <div class="card m-3 col-3 p-1 set" style="width: 30rem">
                <div class="card-body">
                    <h5 class="top">おみくじ結果</h5>
                    <h1 class="result" id="result"></h1>
                    <p class="comment" id="comment"></p>
                    <div class="element">
                        <p class="item">ラッキーアイテム</p>
                        <p class="thing" id="item">たぬきの置物</p>
                    </div>
                    <div class="element">
                        <p class="item">ラッキーカラー</p>
                        <p class="thing" id="color">黄色</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-10">
            <button id="back_button" class="btn btn-danger mb-2">
                戻る
            </button>
        </div>
    </div>
    `;
    random_result();
    // "戻る" ボタンのイベントリスナーを設定
    buttons.back_button = config.result_page.querySelector("#back_button");
    buttons.back_button.addEventListener("click", function () {
        displayNone(config.result_page);
        displayBlock(config.start_page);
        config.start_page.classList.add("d-flex");
        config.result_page.innerHTML = "";
        config.start_page.innerHTML = "";
        config.start_page.innerHTML = `
            <div>
                <h1 class="text-center"  >おみくじ</h1>
            </div>
            <div>
                <img src="syougatsu2_omijikuji2.png" class="text-align-items image-fluid">
            </div>
            <div>
                <button id="drawOmikuji" class="btn btn-danger btn-lg border-radious">おみくじを引く</button>
            </div>
        `;

        // "おみくじを引く" ボタンのイベントリスナーを再度設定
        attachDrawButtonListener();
    });
}

//おみくじ結果の出力
function random_result(){
    var result_number = result_set[Math.floor( Math.random()*39 )];
    var color_number = Math.floor( Math.random()*11 );
    var item_number = Math.floor( Math.random()*11 );

    var resultPart = document.getElementById("result");
    var commentPart = document.getElementById("comment");
    var colorPart = document.getElementById("color");
    var itemPart = document.getElementById("item");

    resultPart.innerHTML = "【" + results[result_number][0] + "】";
    commentPart.innerHTML = results[result_number][1];
    colorPart.innerHTML = colors[color_number];
    itemPart.innerHTML = items[item_number];

}

// 初期化時に一度だけボタンのイベントリスナーを設定
attachDrawButtonListener();
