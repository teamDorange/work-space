
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
    config.start_page.innerHTML = "";
    config.result_page.innerHTML = "";
    config.result_page.innerHTML = `
    <div class="pt-5 d-flex justify-content-center text-center align-items-center row">
        <div class="col-12 d-flex justify-content-center text-center align-items-center">
            <div class="card m-3 col-3 p-1 set" style="width: 30rem">
                <div class="card-body">
                    <h5 class="top">おみくじ結果</h5>
                    <h1 class="result">【大吉】</h1>
                    <p class="comment">今日はいいことがあるでしょう</p>
                    <div class="element">
                        <p class="item">ラッキーアイテム</p>
                        <p class="thing">たぬきの置物</p>
                    </div>
                    <div class="element">
                        <p class="item">ラッキーカラー</p>
                        <p class="thing">黄色</p>
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

    // "戻る" ボタンのイベントリスナーを設定
    buttons.back_button = config.result_page.querySelector("#back_button");
    buttons.back_button.addEventListener("click", function () {
        displayNone(config.result_page);
        displayBlock(config.start_page);
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

// 初期化時に一度だけボタンのイベントリスナーを設定
attachDrawButtonListener();
