function catalogs(){
    catalog1();
    catalog2();
    catalog3();
    catalog4();
    catalog5();
    catalog6();
}

function catalog1() {
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
        xmlhttp.open("GET", 'xml/catalog1.xml', false);
        //отправка запроса
        xmlhttp.send();
        //получение документа с данными из xml
        xmlDoc = xmlhttp.responseXML;
        //обращение к тегу "pet" из файла xml
        let pet = xmlDoc.getElementsByTagName("pet");
        //цикл перебора всех данных с тегом "pet"
        for (i = 0; i < pet.length; i++) {
          //создание элемента "div"
            let addDiv = document.createElement("div")
            //установка содержимого для переменной addDiv
            addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
            data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
            <img class="img"style="border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
            </div></a>`
            //полученние элемента с id "gallery1" и вставка в него дочернего элемента addDiv
            document.querySelector('#gallery1').appendChild(addDiv);
        }

}

function catalog2() {
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
    xmlhttp.open("GET", 'xml/catalog2.xml', false);
    //отправка запроса
    xmlhttp.send();
    //получение документа с данными из xml
    xmlDoc = xmlhttp.responseXML;
    //обращение к тегу "pet" из файла xml
    let pet = xmlDoc.getElementsByTagName("pet");
    //цикл перебора всех данных с тегом "pet"
    for (i = 0; i < pet.length; i++) {
      //создание элемента "div"
        let addDiv = document.createElement("div")
        //установка содержимого для переменной addDiv
        addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
        data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
        <img class="img"style="border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
        </div></a>`
        //полученние элемента с id "gallery1" и вставка в него дочернего элемента addDiv
        document.querySelector('#gallery2').appendChild(addDiv);
    }

}

function catalog3() {
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
  xmlhttp.open("GET", 'xml/catalog3.xml', false);
  //отправка запроса
  xmlhttp.send();
  //получение документа с данными из xml
  xmlDoc = xmlhttp.responseXML;
  //обращение к тегу "pet" из файла xml
  let pet = xmlDoc.getElementsByTagName("pet");
  //цикл перебора всех данных с тегом "pet"
  console.log(pet);
  for (i = 0; i < pet.length; i++) {
    //создание элемента "div"
      let addDiv = document.createElement("div")
      //установка содержимого для переменной addDiv
      addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
      data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
      <img class="img"style="border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
      </div></a>`
      //полученние элемента с id "gallery1" и вставка в него дочернего элемента addDiv
      document.querySelector('#gallery3').appendChild(addDiv);
  }

}

function catalog4() {
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
  xmlhttp.open("GET", 'xml/catalog4.xml', false);
  //отправка запроса
  xmlhttp.send();
  //получение документа с данными из xml
  xmlDoc = xmlhttp.responseXML;
  //обращение к тегу "pet" из файла xml
  let pet = xmlDoc.getElementsByTagName("pet");
  //цикл перебора всех данных с тегом "pet"
  console.log(pet);
  for (i = 0; i < pet.length; i++) {
    //создание элемента "div"
      let addDiv = document.createElement("div")
      //установка содержимого для переменной addDiv
      addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
      data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
      <img class="img"style="border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
      </div></a>`
      //полученние элемента с id "gallery1" и вставка в него дочернего элемента addDiv
      document.querySelector('#gallery4').appendChild(addDiv);
  }

}

function catalog5() {
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
  xmlhttp.open("GET", 'xml/catalog5.xml', false);
  //отправка запроса
  xmlhttp.send();
  //получение документа с данными из xml
  xmlDoc = xmlhttp.responseXML;
  //обращение к тегу "pet" из файла xml
  let pet = xmlDoc.getElementsByTagName("pet");
  //цикл перебора всех данных с тегом "pet"
  console.log(pet);
  for (i = 0; i < pet.length; i++) {
    //создание элемента "div"
      let addDiv = document.createElement("div")
      //установка содержимого для переменной addDiv
      addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
      data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
      <img class="img"style="border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
      </div></a>`
      //полученние элемента с id "gallery1" и вставка в него дочернего элемента addDiv
      document.querySelector('#gallery5').appendChild(addDiv);
  }

}

function catalog6() {
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
  xmlhttp.open("GET", 'xml/catalog6.xml', false);
  //отправка запроса
  xmlhttp.send();
  //получение документа с данными из xml
  xmlDoc = xmlhttp.responseXML;
  //обращение к тегу "pet" из файла xml
  let pet = xmlDoc.getElementsByTagName("pet");
  //цикл перебора всех данных с тегом "pet"
  console.log(pet);
  for (i = 0; i < pet.length; i++) {
    //создание элемента "div"
      let addDiv = document.createElement("div")
      //установка содержимого для переменной addDiv
      addDiv.innerHTML = `<a href="${pet[i].getElementsByTagName('link')[0].innerHTML}.html"><div class="petsDiv" data-title="${pet[i].getElementsByTagName('name')[0].innerHTML}"
      data-description="${pet[i].getElementsByTagName('history')[0].innerHTML}">
      <img class="img"style="border-radius:20px;"src="img/${pet[i].getElementsByTagName('image')[0].innerHTML}" width="356px"; height="356px">
      </div></a>`
      //полученние элемента с id "gallery1" и вставка в него дочернего элемента addDiv
      document.querySelector('#gallery6').appendChild(addDiv);
  }

}
//срабатывание функции при клике по элементу и изменение стилей
document.getElementById('page1').onclick = function page1 (){
    document.getElementById('gallery1').style.display = 'flex';
    document.getElementById('gallery2').style.display = 'none';
    document.getElementById('gallery3').style.display = 'none';
    document.getElementById('gallery4').style.display = 'none';
    document.getElementById('gallery5').style.display = 'none';
    document.getElementById('gallery6').style.display = 'none';


    
    document.getElementById('page1').style.backgroundColor='#692AF4';
    document.getElementById('page1').style.color='#ffffff';
    document.getElementById('page2').style.backgroundColor='#ffffff';
    document.getElementById('page2').style.color='black';
    document.getElementById('page3').style.backgroundColor='#ffffff';
    document.getElementById('page3').style.color='black';
    document.getElementById('page4').style.backgroundColor='#ffffff';
    document.getElementById('page4').style.color='black';
    document.getElementById('page5').style.backgroundColor='#ffffff';
    document.getElementById('page5').style.color='black';
    document.getElementById('page6').style.backgroundColor='#ffffff';
    document.getElementById('page6').style.color='black';

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
      
      var a = document.getElementById('page3');
      //событие изменения стилей когда курсор мыши выходит за пределы элемента
      a.onmouseout = function(e) {
        document.getElementById('page3').style.borderColor='#ffffff';
        }
  //событие изменения стилей при наведении на элемент
      a.onmouseover = function(e) {
        document.getElementById('page3').style.borderColor='#692AF4';
        };
        var a = document.getElementById('page4');
        //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page4').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page4').style.borderColor='#692AF4';
      };
      var a = document.getElementById('page5');
      //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page5').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page5').style.borderColor='#692AF4';
      };
      var a = document.getElementById('page6');
      //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page6').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page6').style.borderColor='#692AF4';
      };  
    }

//срабатывание функции при клике по элементу и изменение стилей
    document.getElementById('page2').onclick = function page2 (){
    document.getElementById('gallery1').style.display = 'none';
    document.getElementById('gallery2').style.display = 'flex';
    document.getElementById('gallery3').style.display = 'none';
    document.getElementById('gallery4').style.display = 'none';
    document.getElementById('gallery5').style.display = 'none';
    document.getElementById('gallery6').style.display = 'none';



    document.getElementById('page1').style.backgroundColor='#ffffff';
    document.getElementById('page1').style.color='black';
    var a = document.getElementById('page1');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page1').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page1').style.borderColor='#692AF4';
      };
    
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


    document.getElementById('page3').style.backgroundColor='#ffffff';
    document.getElementById('page3').style.color='black';
      var a = document.getElementById('page3');
      //событие изменения стилей когда курсор мыши выходит за пределы элемента
      a.onmouseout = function(e) {
        document.getElementById('page3').style.borderColor='#ffffff';
        }
  //событие изменения стилей при наведении на элемент
      a.onmouseover = function(e) {
        document.getElementById('page3').style.borderColor='#692AF4';
        };
        document.getElementById('page4').style.backgroundColor='#ffffff';
    document.getElementById('page4').style.color='black';
        var a = document.getElementById('page4');
        //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page4').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page4').style.borderColor='#692AF4';
      };
      document.getElementById('page5').style.backgroundColor='#ffffff';
    document.getElementById('page5').style.color='black';
      var a = document.getElementById('page5');
      //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page5').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page5').style.borderColor='#692AF4';
      };
      document.getElementById('page6').style.backgroundColor='#ffffff';
    document.getElementById('page6').style.color='black';
      var a = document.getElementById('page6');
      //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('page6').style.borderColor='#ffffff';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('page6').style.borderColor='#692AF4';
      };
      
      

//срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('page3').onclick = function page3 (){
        document.getElementById('gallery1').style.display = 'none';
        document.getElementById('gallery2').style.display = 'none';
        document.getElementById('gallery3').style.display = 'flex';
        document.getElementById('gallery4').style.display = 'none';
        document.getElementById('gallery5').style.display = 'none';
        document.getElementById('gallery6').style.display = 'none';
    
        document.getElementById('page1').style.backgroundColor='#ffffff';
        document.getElementById('page1').style.color='black';
        var a = document.getElementById('page1');
        //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page1').style.borderColor='#ffffff';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page1').style.borderColor='#692AF4';
          };
        
        document.getElementById('page3').style.backgroundColor='#692AF4';
        document.getElementById('page3').style.color='#ffffff';
        var a = document.getElementById('page3');
        //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page3').style.borderColor='#692AF4';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page3').style.borderColor='#ffffff';
          };
    
    
          document.getElementById('page2').style.backgroundColor='#ffffff';
          document.getElementById('page2').style.color='black';
          var a = document.getElementById('page2');
          //событие изменения стилей когда курсор мыши выходит за пределы элемента
          a.onmouseout = function(e) {
            document.getElementById('page2').style.borderColor='#ffffff';
            }
      //событие изменения стилей при наведении на элемент
          a.onmouseover = function(e) {
            document.getElementById('page2').style.borderColor='#692AF4';
            };
            document.getElementById('page4').style.backgroundColor='#ffffff';
    document.getElementById('page4').style.color='black';
            var a = document.getElementById('page4');
            //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page4').style.borderColor='#ffffff';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page4').style.borderColor='#692AF4';
          };
          document.getElementById('page5').style.backgroundColor='#ffffff';
    document.getElementById('page5').style.color='black';
          var a = document.getElementById('page5');
          //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page5').style.borderColor='#ffffff';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page5').style.borderColor='#692AF4';
          };
          document.getElementById('page6').style.backgroundColor='#ffffff';
    document.getElementById('page6').style.color='black';
          var a = document.getElementById('page6');
          //событие изменения стилей когда курсор мыши выходит за пределы элемента
        a.onmouseout = function(e) {
          document.getElementById('page6').style.borderColor='#ffffff';
          }
    //событие изменения стилей при наведении на элемент
        a.onmouseover = function(e) {
          document.getElementById('page6').style.borderColor='#692AF4';
          };


          
          
//срабатывание функции при клике по элементу и изменение стилей
          document.getElementById('page4').onclick = function page4 (){
            document.getElementById('gallery1').style.display = 'none';
            document.getElementById('gallery2').style.display = 'none';
            document.getElementById('gallery3').style.display = 'none';
            document.getElementById('gallery4').style.display = 'flex';
            document.getElementById('gallery5').style.display = 'none';
            document.getElementById('gallery6').style.display = 'none';
        
            document.getElementById('page1').style.backgroundColor='#ffffff';
            document.getElementById('page1').style.color='black';
            var a = document.getElementById('page1');
            //событие изменения стилей когда курсор мыши выходит за пределы элемента
            a.onmouseout = function(e) {
              document.getElementById('page1').style.borderColor='#ffffff';
              }
        //событие изменения стилей при наведении на элемент
            a.onmouseover = function(e) {
              document.getElementById('page1').style.borderColor='#692AF4';
              };
            
            document.getElementById('page4').style.backgroundColor='#692AF4';
            document.getElementById('page4').style.color='#ffffff';
            var a = document.getElementById('page4');
            //событие изменения стилей когда курсор мыши выходит за пределы элемента
            a.onmouseout = function(e) {
              document.getElementById('page4').style.borderColor='#692AF4';
              }
        //событие изменения стилей при наведении на элемент
            a.onmouseover = function(e) {
              document.getElementById('page4').style.borderColor='#ffffff';
              };
        
        
              document.getElementById('page3').style.backgroundColor='#ffffff';
              document.getElementById('page3').style.color='black';
              var a = document.getElementById('page3');
              //событие изменения стилей когда курсор мыши выходит за пределы элемента
              a.onmouseout = function(e) {
                document.getElementById('page3').style.borderColor='#ffffff';
                }
          //событие изменения стилей при наведении на элемент
              a.onmouseover = function(e) {
                document.getElementById('page3').style.borderColor='#692AF4';
                };
                document.getElementById('page2').style.backgroundColor='#ffffff';
    document.getElementById('page2').style.color='black';
                var a = document.getElementById('page2');
                //событие изменения стилей когда курсор мыши выходит за пределы элемента
            a.onmouseout = function(e) {
              document.getElementById('page2').style.borderColor='#ffffff';
              }
        //событие изменения стилей при наведении на элемент
            a.onmouseover = function(e) {
              document.getElementById('page2').style.borderColor='#692AF4';
              };
              document.getElementById('page5').style.backgroundColor='#ffffff';
    document.getElementById('page5').style.color='black';
              var a = document.getElementById('page5');
              //событие изменения стилей когда курсор мыши выходит за пределы элемента
            a.onmouseout = function(e) {
              document.getElementById('page5').style.borderColor='#ffffff';
              }
        //событие изменения стилей при наведении на элемент
            a.onmouseover = function(e) {
              document.getElementById('page5').style.borderColor='#692AF4';
              };
              document.getElementById('page6').style.backgroundColor='#ffffff';
    document.getElementById('page6').style.color='black';
              var a = document.getElementById('page6');
              //событие изменения стилей когда курсор мыши выходит за пределы элемента
            a.onmouseout = function(e) {
              document.getElementById('page6').style.borderColor='#ffffff';
              }
        //событие изменения стилей при наведении на элемент
            a.onmouseover = function(e) {
              document.getElementById('page6').style.borderColor='#692AF4';
              };
              
              
//срабатывание функции при клике по элементу и изменение стилей
              document.getElementById('page5').onclick = function page5 (){
                document.getElementById('gallery1').style.display = 'none';
                document.getElementById('gallery2').style.display = 'none';
                document.getElementById('gallery3').style.display = 'none';
                document.getElementById('gallery4').style.display = 'none';
                document.getElementById('gallery5').style.display = 'flex';
                document.getElementById('gallery6').style.display = 'none';
            
                document.getElementById('page1').style.backgroundColor='#ffffff';
                document.getElementById('page1').style.color='black';
                var a = document.getElementById('page1');
                //событие изменения стилей когда курсор мыши выходит за пределы элемента
                a.onmouseout = function(e) {
                  document.getElementById('page1').style.borderColor='#ffffff';
                  }
            //событие изменения стилей при наведении на элемент
                a.onmouseover = function(e) {
                  document.getElementById('page1').style.borderColor='#692AF4';
                  };
                
                document.getElementById('page5').style.backgroundColor='#692AF4';
                document.getElementById('page5').style.color='#ffffff';
                var a = document.getElementById('page5');
                //событие изменения стилей когда курсор мыши выходит за пределы элемента
                a.onmouseout = function(e) {
                  document.getElementById('page5').style.borderColor='#692AF4';
                  }
            //событие изменения стилей при наведении на элемент
                a.onmouseover = function(e) {
                  document.getElementById('page5').style.borderColor='#ffffff';
                  };
            
            
                  document.getElementById('page3').style.backgroundColor='#ffffff';
                  document.getElementById('page3').style.color='black';
                  var a = document.getElementById('page3');
                  //событие изменения стилей когда курсор мыши выходит за пределы элемента
                  a.onmouseout = function(e) {
                    document.getElementById('page3').style.borderColor='#ffffff';
                    }
              //событие изменения стилей при наведении на элемент
                  a.onmouseover = function(e) {
                    document.getElementById('page3').style.borderColor='#692AF4';
                    };
                    document.getElementById('page4').style.backgroundColor='#ffffff';
    document.getElementById('page4').style.color='black';
                    var a = document.getElementById('page4');
                    //событие изменения стилей когда курсор мыши выходит за пределы элемента
                a.onmouseout = function(e) {
                  document.getElementById('page4').style.borderColor='#ffffff';
                  }
            //событие изменения стилей при наведении на элемент
                a.onmouseover = function(e) {
                  document.getElementById('page4').style.borderColor='#692AF4';
                  };
                  document.getElementById('page2').style.backgroundColor='#ffffff';
    document.getElementById('page2').style.color='black';
                  var a = document.getElementById('page2');
                  //событие изменения стилей когда курсор мыши выходит за пределы элемента
                a.onmouseout = function(e) {
                  document.getElementById('page2').style.borderColor='#ffffff';
                  }
            //событие изменения стилей при наведении на элемент
                a.onmouseover = function(e) {
                  document.getElementById('page2').style.borderColor='#692AF4';
                  };
                  document.getElementById('page6').style.backgroundColor='#ffffff';
    document.getElementById('page6').style.color='black';
                  var a = document.getElementById('page6');
                  //событие изменения стилей когда курсор мыши выходит за пределы элемента
                a.onmouseout = function(e) {
                  document.getElementById('page6').style.borderColor='#ffffff';
                  }
            //событие изменения стилей при наведении на элемент
                a.onmouseover = function(e) {
                  document.getElementById('page6').style.borderColor='#692AF4';
                  };
                  
                  

//срабатывание функции при клике по элементу и изменение стилей
                  document.getElementById('page6').onclick = function page6 (){
                    document.getElementById('gallery1').style.display = 'none';
                    document.getElementById('gallery2').style.display = 'none';
                    document.getElementById('gallery3').style.display = 'none';
                    document.getElementById('gallery4').style.display = 'none';
                    document.getElementById('gallery5').style.display = 'none';
                    document.getElementById('gallery6').style.display = 'flex';
                
                    document.getElementById('page1').style.backgroundColor='#ffffff';
                    document.getElementById('page1').style.color='black';
                    var a = document.getElementById('page1');
                    //событие изменения стилей когда курсор мыши выходит за пределы элемента
                    a.onmouseout = function(e) {
                      document.getElementById('page1').style.borderColor='#ffffff';
                      }
                //событие изменения стилей при наведении на элемент
                    a.onmouseover = function(e) {
                      document.getElementById('page1').style.borderColor='#692AF4';
                      };
                    
                    document.getElementById('page6').style.backgroundColor='#692AF4';
                    document.getElementById('page6').style.color='#ffffff';
                    var a = document.getElementById('page6');
                    //событие изменения стилей когда курсор мыши выходит за пределы элемента
                    a.onmouseout = function(e) {
                      document.getElementById('page6').style.borderColor='#692AF4';
                      }
                //событие изменения стилей при наведении на элемент
                    a.onmouseover = function(e) {
                      document.getElementById('page6').style.borderColor='#ffffff';
                      };
                
                
                      document.getElementById('page3').style.backgroundColor='#ffffff';
                      document.getElementById('page3').style.color='black';
                      var a = document.getElementById('page3');
                      //событие изменения стилей когда курсор мыши выходит за пределы элемента
                      a.onmouseout = function(e) {
                        document.getElementById('page3').style.borderColor='#ffffff';
                        }
                  //событие изменения стилей при наведении на элемент
                      a.onmouseover = function(e) {
                        document.getElementById('page3').style.borderColor='#692AF4';
                        };
                        document.getElementById('page4').style.backgroundColor='#ffffff';
    document.getElementById('page4').style.color='black';
                        var a = document.getElementById('page4');
                        //событие изменения стилей когда курсор мыши выходит за пределы элемента
                    a.onmouseout = function(e) {
                      document.getElementById('page4').style.borderColor='#ffffff';
                      }
                //событие изменения стилей при наведении на элемент
                    a.onmouseover = function(e) {
                      document.getElementById('page4').style.borderColor='#692AF4';
                      };
                      document.getElementById('page5').style.backgroundColor='#ffffff';
    document.getElementById('page5').style.color='black';
                      var a = document.getElementById('page5');
                      //событие изменения стилей когда курсор мыши выходит за пределы элемента
                    a.onmouseout = function(e) {
                      document.getElementById('page5').style.borderColor='#ffffff';
                      }
                //событие изменения стилей при наведении на элемент
                    a.onmouseover = function(e) {
                      document.getElementById('page5').style.borderColor='#692AF4';
                      };
                      document.getElementById('page2').style.backgroundColor='#ffffff';
    document.getElementById('page2').style.color='black';
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
  }
}
}
}
