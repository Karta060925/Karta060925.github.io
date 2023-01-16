// 英雄資料陣列
let heroArray = [];
let container;
let result;
let btnCreateHeroArray, btnListHero, btnTableHero;
let tbody;

window.onload = function () {

    //DOM
    // 選到 #container, 選到 btn 建立&清除, 選到btn 顯示文字, 選到btn 顯示表格, 選到 #result(顯示表格)
    container = document.querySelector("#container");
    btnCreateHeroArray = document.getElementById("createhero");
    btnListHero = document.getElementById("listhero");
    btnTableHero = document.getElementById("tablehero");
    result = document.getElementById("result");
    tbody = document.querySelector('tbody');

    //event click
    // btn 建立&清除 監聽
    btnCreateHeroArray.addEventListener("click", function () {
        alert("從DOM建立英雄人物陣列資料成功！");

        // 選到 #container 裡的 .card
        let card = container.querySelectorAll('.card');
        card.forEach((data, index) => {
            // .card 裡的 .card-img-top(圖片)
            let img = data.querySelector('.card-img-top');
            // .card 裡的 .card-text(敘述)
            let text = data.querySelector('.card-text');
            heroArray.push({
                index: index,
                name: data.id,
                text: text.innerText,
                img: img.getAttribute('src')
            });
        });

        console.log(heroArray);

        // 清除 container
        document.querySelector("#container").innerHTML = "";
    });


    // btn 顯示文字 監聽
    btnListHero.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("請先建立陣列資料");
            return;
        }

        // 清空
        tbody.innerHTML = "";
        result.style.display = 'none';

        // 顯示 heroArray[]內容 到 HTML
        heroArray.forEach(data => {
            container.innerHTML += `<div class="col-4 mb-3"><div class="item"><p>編號：${data.index}</p><p>名稱：${data.name}</p><p>敘述：${data.text}</p><p>圖片：<br>${data.img}</p></div></div>`;
        });
    });



    // btn 顯示表格 監聽
    btnTableHero.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("請先建立陣列資料");
            return;
        }
        // 清空
        result.style.display = 'block';
        document.querySelector("#container").innerHTML = "";

        // 顯示 heroArray[]內容 到 HTML
        heroArray.forEach(data => {
            tbody.innerHTML += `<tr><th scope="row">${data.index}</th><td>${data.name}</td><td>${data.text}</td><td>${data.img}</td></tr>`;

        });
    });
}