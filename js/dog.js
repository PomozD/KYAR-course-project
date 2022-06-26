function dogs(){
    dogs1();
    dogs2();
}

function dogs1() {
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
        xmlhttp.open("GET", 'xml/dogs1.xml', false);
        //отправка запроса
        xmlhttp.send();
        //получение документа с данными из xml
        xmlDoc = xmlhttp.responseXML;
        //обращение к тегу "dog" из файла xml
        let pet = xmlDoc.getElementsByTagName("dog");
        //цикл перебора всех данных с тегом "dog"
        for (i = 0; i < pet.length; i++) {
          //создание элемента "div"
            let addDiv = document.createElement("div")
            //установка содержимого для переменной addDiv
            addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
            data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
            <img class="img"style=" border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
            </div></a>`
            //полученние элемента с id "dogsgallery1" и вставка в него дочернего элемента addDiv
            document.querySelector('#dogsgallery1').appendChild(addDiv);
        }

}

function dogs2() {
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
    xmlhttp.open("GET", 'xml/dogs2.xml', false);
    //отправка запроса
    xmlhttp.send();
    //получение документа с данными из xml
    xmlDoc = xmlhttp.responseXML;
    //обращение к тегу "dog" из файла xml
    let pet = xmlDoc.getElementsByTagName("dog");
    //цикл перебора всех данных с тегом "dog"
    for (i = 0; i < pet.length; i++) {
      //создание элемента "div"
        let addDiv = document.createElement("div")
        //установка содержимого для переменной addDiv
        addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
        data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
        <img class="img"style=" border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
        </div></a>`
        //полученние элемента с id "dogsgallery1" и вставка в него дочернего элемента addDiv
        document.querySelector('#dogsgallery2').appendChild(addDiv);
    }

}

//срабатывание функции при клике по элементу и изменение стилей
document.getElementById('page1').onclick = function page1 (){
    document.getElementById('dogsgallery1').style.display = 'flex';
    document.getElementById('dogsgallery2').style.display = 'none';


    
    document.getElementById('page1').style.backgroundColor='#692AF4';
    document.getElementById('page1').style.color='#ffffff';
    document.getElementById('page2').style.backgroundColor='#ffffff';
    document.getElementById('page2').style.color='black';

    var a = document.getElementById('page1');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page1').style.borderColor='#692AF4';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page1').style.borderColor='#ffffff';
      };
    var a = document.getElementById('page2');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page2').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page2').style.borderColor='#692AF4';
      };
    }

//срабатывание функции при клике по элементу и изменение стилей
    document.getElementById('page2').onclick = function page2 (){
        document.getElementById('dogsgallery1').style.display = 'none';
        document.getElementById('dogsgallery2').style.display = 'flex';
    
    
        
        document.getElementById('page1').style.backgroundColor='#ffffff';
        document.getElementById('page1').style.color='black';
        document.getElementById('page2').style.backgroundColor='#692AF4';
        document.getElementById('page2').style.color='#ffffff';
    
        var a = document.getElementById('page2');
        //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page2').style.borderColor='#692AF4';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page2').style.borderColor='#ffffff';
          };
        var a = document.getElementById('page1');
        //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page1').style.borderColor='#ffffff';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page1').style.borderColor='#692AF4';
          };
        }
