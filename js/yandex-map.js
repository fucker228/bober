//Set baloon----------------------------------------------------------------------------
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("YaMap", {
            center: [60.025478, 30.271442],
            zoom: 12,
            controls: ['zoomControl']
        }),
        myPlacemark = new ymaps.Placemark([60.025478, 30.271442], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Наш адрес:",
            balloonContentBody: "194292 <br> Санкт-Петербург, 3-й Верхний переулок, д. 9, корп. 4, лит. А",
            balloonContentFooter: "IBAU",
            hintContent: "IBAU"
        });

    myMap.geoObjects.add(myPlacemark);

    myMap.setCenter([60.025478, 30.271442], 14);

    myMap.behaviors.disable('scrollZoom');

}