function litcats1() {
        if (window.XMLHttpRequest) {
            //Создание объекта XMLHttpRequest 
            // для IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            //Создание объекта ActiveXObject 
            // для IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLDOM");
        }
//определение параметров для запроса
        xmlhttp.open("GET", 'xml/kotyata.xml', false);
        //отправка запроса
        xmlhttp.send();
        //получение документа с данными из xml
        xmlDoc = xmlhttp.responseXML;
        //обращение к тегу "cat" из файла xml
        let pet = xmlDoc.getElementsByTagName("cat");
        //цикл перебора всех данных с тегом "cat"
        for (i = 0; i < pet.length; i++) {
            //создание элемента "div"
            let addDiv = document.createElement("div")
            //установка содержимого для переменной addDiv
            addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
            data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
            <img class="img"style=" border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
            </div></a>`
            //полученние элемента с id "litcatsgallery1" и вставка в него дочернего элемента addDiv
            document.querySelector('#litcatsgallery1').appendChild(addDiv);
        }

}