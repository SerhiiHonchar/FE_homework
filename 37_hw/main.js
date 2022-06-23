let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.583244853106436, lng: 30.484860924784886 },
    zoom: 14, 
  });

const locations = [
    
    {
        position: new google.maps.LatLng(50.58871461590717, 30.512365758137108),
        name: 'Київська ГЕС',
        info: 'Київська ГЕС – перша (верхня) сходинка Дніпровського каскаду гідроелектростанцій, розташована на річці Дніпро й знаходиться в кількох кілометрах від Києва.',
        img: `<img src='./img/kyivgaes.jpeg'>`,
    },

    {
        position: new google.maps.LatLng(50.615577543844395, 30.47381458318676),
        name: 'Межигір&#96;я',
        info: '«Межигір&#96;я» — колишня приватна резиденція Віктора Януковича в селі Нові Петрівці Вишгородського району Київської області, яку він займав з 2002 по 2014 роки.',
        img: `<img src='./img/mezhyhirya.jpeg'>`,
    },

    {
        position: new google.maps.LatLng(50.58284700544554, 30.485363671138188),
        name: 'Площа Шевченка',
        info: 'Це центральна площа мого рідного міста Вишгород',
        img: `<img src='./img/shevasquare.jpeg'>`,
    }
];

const infoWindow = new google.maps.InfoWindow();

for(let i = 0; i < locations.length; i++) {
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const marker = new google.maps.Marker({
        position: locations[i].position,
        map: map,
        icon: iconBase + "info-i_maps.png",
    });

    const content = `<div class="img-holder">${locations[i].img}</div>
    <p>${locations[i].name}</p>
    <p>${locations[i].info}</p>
    `;
    
    marker.addListener('click', () => {
        infoWindow.setContent(content);
        infoWindow.open({
            anchor: marker,
            map,
        });
    })
    }
}