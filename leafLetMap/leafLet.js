// 宣告
let map
const areaDataRequest = fetch('https://raw.githubusercontent.com/ChouJustice/ChouJustice.github.io/main/Map/%E5%8F%B0%E7%81%A3%E8%A1%8C%E6%94%BF%E5%9C%B0%E5%8D%80.json')

const museumDataRequest = fetch('https://raw.githubusercontent.com/Karta060925/FileStorage/main/%E5%8D%9A%E7%89%A9%E9%A4%A8%20json')

let areaData // 行政區資校
let museumData
let museumAreaData
let markers = L.markerClusterGroup() // marker 叢集

const pinIcon = L.icon({
    iconUrl: 'img/pin.png',
    iconSize: [60, 60]
})

// DOM
const countySelect = document.querySelector('#county')
const museumName = document.querySelector('#museumName')
const content = document.querySelector('.content')

// function
function initMap() {
    // leafLet 初始化設定
    map = L.map('map', {
        center: [23.965891189394522, 120.96220828240284], // 座標
        zoom: 8 // 縮放
    })

    // 設定圖層
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 19 }) // 設定縮放 最小8 最大19
    map.addLayer(osm)
}

function setMapItem() {
    // 抓資料
    Promise.all([areaDataRequest, museumDataRequest])
        .then(res => Promise.all(res.map(x => x.json())))
        .then(jsonData => {
            [areaData, museumData] = jsonData
            console.log(jsonData)

            // renderMarker()
            initCountySelect()
        })
}

function renderMarker(cityName) {
    if (markers) markers.clearLayers() // 確保使用前清空

    let museumDataName = museumData.filter(x => x.cityName == cityName)

    console.log(museumDataName)
    content.innerHTML = ''
    museumName.innerText = '查無資訊'

    museumDataName.forEach(x => {
        // marker圖釘宣告 座標定位 + 換 icon
        let marker = L.marker([x.latitude, x.longitude], { icon: pinIcon })


        museumName.innerText = `博物館資訊 共${museumDataName.length}筆`

        let p = document.createElement('p')
        p.innerText = x.name
        // p.setAttribute.add('data-index', x.longitude)
        content.appendChild(p)
        p.addEventListener('mousedown', function () {
            map.setView([x.latitude, x.longitude], 19)

        })
        // console.log(x.name)
        // Popup 提示彈出
        marker.bindPopup(`<h4>${x.name}<span>${x.name_eng}</span></h4>`)

        marker.addEventListener('click', function () {
            let textHead = document.querySelector('.text-head')
            textHead.innerHTML = ` <h2>${x.name}
                        <span>類型：${x.type}</span></h2> `

            let textBody = document.querySelector('.text-body')


            if (x.email == null) { x.email = '無' }
            if (x.phone == null) { x.phone = '無' }
            if (x.website == null) { x.website = '無' }
            if (x.ticketPrice == null) { x.ticketPrice = '無' }
            textBody.innerHTML = `<p><span><i class="fa-solid fa-location-dot"></i></span>${x.address}</p>
            <a href="tel:${x.phone}"><span><i class="fa-solid fa-phone"></i></span> ${x.phone}</a>
            <a href="mailto:${x.email}"><span><i class="fa-solid fa-envelope"></i></span> ${x.email}</a>
            <a target="_blank" href="${x.website}"><span><i class="fa-solid fa-earth-americas"></i></span> 官方網站</a><p>購票資訊<br>${x.ticketPrice}</p>`
        })
        markers.addLayer(marker)
    })
    map.addLayer(markers)
}

function initCountySelect() {
    ['請選擇', ...new Set(areaData.map(x => x.City))].forEach(city => {
        let option = document.createElement('option')
        option.innerText = city
        option.value = city == '請選擇' ? '' : city
        countySelect.appendChild(option)
    })

    countySelect.onchange = function () {
        if (this.value != '') {
            // 改變地圖焦點
            museumName.innerText = '博物館資訊'
            let county = areaData.find(x => x.City == this.value)
            map.setView([county.Lat, county.Lng], 10)
        }

        let cityName = this.value
        console.log(cityName)
        renderMarker(cityName)
    }
}


// window.onload
window.onload = function () {
    initMap()
    setMapItem()
}

// 註冊 groupBy
Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        const val = item[prop]

        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, {})
}