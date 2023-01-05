
let iPhone14Pro = [
    { color: "#645B6D", colorText: "深紫色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-deeppurple.jpg", storage: "128GB", price: 20900 },
    { color: "#645B6D", colorText: "深紫色", pic: "../AppleShop/img/iPhone14/iphone-14-pro-finish-select-202209-6-7inch-deeppurple.jpg", storage: "256GB", price: 24400 },
    { color: "#645B6D", colorText: "深紫色", pic: "../AppleShop/img/iPhone14/iphone-14-pro-finish-select-202209-6-7inch-deeppurple.jpg", storage: "512GB", price: 31400 },

    { color: "#F4E8CE", colorText: "金色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-gold.jpg", storage: "128GB", price: 20900 },
    { color: "#F4E8CE", colorText: "金色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-gold.jpg", storage: "256GB", price: 24400 },
    { color: "#F4E8CE", colorText: "金色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-gold.jpg", storage: "512GB", price: 31400 },

    { color: "#F1F3F3", colorText: "銀色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-silver.jpg", storage: "128GB", price: 20900 },
    { color: "#F1F3F3", colorText: "銀色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-silver.jpg", storage: "256GB", price: 24400 },
    { color: "#F1F3F3", colorText: "銀色", pic: "../AppleShop/img/iPhone14-pro/iphone-14-pro-finish-select-202209-6-7inch-silver.jpg", storage: "512GB", price: 31400 }
];
let iPhone14 = [
    { color: "#313841", colorText: "黑色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-midnight.jpg", storage: "128GB", price: 20900 },
    { color: "#313841", colorText: "黑色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-midnight.jpg", storage: "256GB", price: 24400 },
    { color: "#313841", colorText: "黑色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-midnight.jpg", storage: "512GB", price: 31400 },

    { color: "#FC1533", colorText: "紅色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-product-red.jpg", storage: "128GB", price: 20900 },
    { color: "#FC1533", colorText: "紅色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-product-red.jpg", storage: "256GB", price: 24400 },
    { color: "#FC1533", colorText: "紅色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-product-red.jpg", storage: "512GB", price: 31400 },

    { color: "#FAF7F2", colorText: "白色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-starlight.jpg", storage: "128GB", price: 20900 },
    { color: "#FAF7F2", colorText: "白色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-starlight.jpg", storage: "256GB", price: 24400 },
    { color: "#FAF7F2", colorText: "白色", pic: "../AppleShop/img/iPhone14/iphone-14-finish-select-202209-6-1inch-starlight.jpg", storage: "512GB", price: 31400 }
]
let iPhone13 = [
    { color: "#437691", colorText: "藍色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-blue.jpg", storage: "128GB", price: 20900 },
    { color: "#437691", colorText: "藍色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-blue.jpg", storage: "256GB", price: 24400 },
    { color: "#437691", colorText: "藍色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-blue.jpg", storage: "512GB", price: 31400 },

    { color: "#4F604E", colorText: "綠色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-green.jpg", storage: "128GB", price: 20900 },
    { color: "#4F604E", colorText: "綠色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-green.jpg", storage: "256GB", price: 24400 },
    { color: "#4F604E", colorText: "綠色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-green.jpg", storage: "512GB", price: 31400 },

    { color: "#D07C85", colorText: "粉紅色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-pink.jpg", storage: "128GB", price: 200 },
    { color: "#D07C85", colorText: "粉紅色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-pink.jpg", storage: "256GB", price: 24400 },
    { color: "#D07C85", colorText: "粉紅色", pic: "../AppleShop/img/iPhoen13/iphone-13-finish-select-202207-5-4inch-pink.jpg", storage: "512GB", price: 31400 }
]


let dataArr = [];
dataArr.push(iPhone14Pro, iPhone14, iPhone13);

let picArray = ["../AppleShop/img/iPhone14pro.jpg", "../AppleShop/img/iPhone14.jpg", "../AppleShop/img/iPhone13.jpg"]

let appleContent = document.querySelector(".apple-content");

// 產品按鈕
let btnModel = document.querySelectorAll(".btn-model");

let price = document.querySelector('.price');
let btnChange = document.querySelector('.btn-change');

window.onload = function () {

    btnModel.forEach((item, index) => {


        //事件: 按下上排按鈕跳換產品
        item.addEventListener('click', () => {

            // 產品標題 與 價錢
            appleContent.innerHTML = "";

            let phone = dataArr[index];

            // 購買標題 生成
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('container-fluid');

            let titleRowDiv = document.createElement('div');
            titleRowDiv.classList.add('row', 'justify-content-center', 'title-text');

            let titleColDiv = document.createElement('div');
            titleColDiv.classList.add('col-lg-11');

            let titleH2 = document.createElement('h2');
            let titleSpan = document.createElement('span');
            titleH2.innerText = '購買 ';
            titleSpan.innerText = item.innerText;
            titleSpan.classList.add('product-title');

            let titleP = document.createElement('p');
            titleP.classList.add('product-price');

            titleH2.append(titleSpan)
            titleColDiv.append(titleH2)
            titleColDiv.append(titleP)
            titleRowDiv.append(titleColDiv)
            containerDiv.append(titleRowDiv)

            // 產品圖生成
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row', 'justify-content-center');

            let colDiv = document.createElement('div');
            colDiv.classList.add('col-12', 'col-lg-8');

            let picDiv = document.createElement('div');
            picDiv.classList.add('pic');

            let img = document.createElement("img");
            img.classList.add("img");
            img.src = picArray[index];

            picDiv.append(img);
            colDiv.append(picDiv);
            rowDiv.append(colDiv);


            // 產品顏色生成
            let productColDiv = document.createElement('div');
            productColDiv.classList.add('col-12', 'col-lg-3');

            let sideChangeDiv = document.createElement('div');
            sideChangeDiv.classList.add('side-change');

            let changeItem = document.createElement('div');
            changeItem.classList.add('change-item', 'color-item');

            let colorH3 = document.createElement('h3');
            let colorSpan = document.createElement('span');
            colorH3.innerText = '外觀。 '
            colorSpan.innerText = '挑選你喜愛的外觀。'

            let colorP = document.createElement('P');
            let colorPSpan = document.createElement('span');

            colorP.innerText = '顏色'
            colorPSpan.classList.add('color-text-val');

            colorP.append(colorPSpan);
            colorH3.append(colorSpan);

            let colorDiv = document.createElement('div');
            colorDiv.classList.add('color-change', 'color-block');

            let countArr = [];
            phone.forEach((color, ind) => {
                countArr.push(color['colorText']);
            });

            let setColor = new Set(countArr);
            let colorArr = [];
            phone.forEach((colorText, ind) => {
                colorArr.push(colorText['color']);
            })

            let set21 = new Set(colorArr);
            let set2 = [];
            set21.forEach(x => {
                set2.push(x)
            });

            let set = [];
            setColor.forEach(x => {
                set.push(x);
            })

            set.forEach((color, ind) => {
                let btnColor = document.createElement('div');
                btnColor.classList.add('btn-color');
                btnColor.style.backgroundColor = set2[ind];
                btnColor.innerText = set2[ind];
                colorDiv.append(btnColor);
            });

            changeItem.append(colorH3)
            changeItem.append(colorP)
            changeItem.append(colorDiv);
            sideChangeDiv.append(changeItem);
            productColDiv.append(sideChangeDiv);
            rowDiv.append(productColDiv);


            //規格價錢生成
            let specificationChangeItem = document.createElement('div');
            specificationChangeItem.classList.add('change-item');

            let specificationH3 = document.createElement('h3');
            let specificationSpan = document.createElement('span');

            specificationH3.innerText = `儲存裝置。 `;
            specificationSpan.innerText = `你需要多少儲存空間？`;
            specificationH3.append(specificationSpan);

            let specificationDiv = document.createElement('div');
            specificationDiv.classList.add('specification-change', 'specification-block')

            let typeArr = [];
            phone.forEach((storage, ind) => {
                typeArr.push(storage['storage']);
            })

            let set31 = new Set(typeArr);
            let set3 = [];
            set31.forEach(x => {
                set3.push(x);
            });

            let priceArr = [];
            phone.forEach((price, ind) => {
                priceArr.push(price['price']);
            });

            set3.forEach((x, ind) => {
                let btnChange = document.createElement('div');
                btnChange.classList.add('btn-change');

                let btnChangeP = document.createElement('p');
                let btnChangeSpan = document.createElement('span');
                btnChangeSpan.classList.add('price');
                btnChangeP.innerText = x;
                btnChangeSpan.innerText = 'NT$' + phone[ind]['price'];

                btnChange.append(btnChangeP)
                btnChange.append(btnChangeSpan)
                specificationDiv.append(btnChange);
            });

            specificationChangeItem.append(specificationH3)
            specificationChangeItem.append(specificationDiv)
            sideChangeDiv.append(specificationChangeItem)

            containerDiv.append(rowDiv);
            appleContent.append(containerDiv);



            // 規格按鈕 顯示價錢
            let productPrice = document.querySelector(".product-price");
            let choosePrice = document.querySelectorAll(".btn-change");

            choosePrice.forEach(item => {
                item.addEventListener('click', () => {
                    productPrice.innerText = item.querySelector(".price").innerText;
                })
            });

            // 顏色按鈕 更換圖片宇顯示顏色文字
            let chooseColorArr = document.querySelectorAll(".btn-color");
            let colorTextVal = document.querySelector('.color-text-val');

            chooseColorArr.forEach(item => {
                item.addEventListener('click', () => {
                    // 判斷條件true 才能取值
                    let colorer = phone.find(x => x['color'] == item.innerText)['colorText'];
                    let RGB = phone.find(x => x['color'] == item.innerText)['pic'];
                    colorTextVal.innerText = ` - ${colorer}`
                    img.src = RGB;
                })
            })
        })
    })
};



