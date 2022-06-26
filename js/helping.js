  
  
   //срабатывание функции при клике по элементу и изменение стилей
    document.getElementById('financeHelp').onclick = function financeHelp (){
    document.getElementById('divsFinanceHelp').style.display = 'flex';
    document.getElementById('divsVolunteers').style.display = 'none';
    document.getElementById('divsFeed').style.display = 'none';
    document.getElementById('divsMedicines').style.display = 'none';
      
    document.getElementById('financeHelp').style.backgroundColor = 'white';
    document.getElementById('financeHelp').style.color = 'black';
    document.getElementById('financeHelp').style.borderColor = '#5B14F2';


    document.getElementById('volunteers').style.backgroundColor = '#5B14F2';
    document.getElementById('volunteers').style.color = 'white';
    var a = document.getElementById('volunteers');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('volunteers').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('volunteers').style.borderColor='#ffffff';
      };


    document.getElementById('feed').style.backgroundColor = '#5B14F2';
    document.getElementById('feed').style.color = 'white';
    var a = document.getElementById('feed');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('feed').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('feed').style.borderColor='#ffffff';
      };


    document.getElementById('medicines').style.backgroundColor = '#5B14F2';
    document.getElementById('medicines').style.color = 'white';
    var a = document.getElementById('medicines');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('medicines').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('medicines').style.borderColor='#ffffff';
      };
        
    }


//срабатывание функции при клике по элементу и изменение стилей
    document.getElementById('volunteers').onclick = function volunteers (){
    document.getElementById('divsFinanceHelp').style.display = 'none';
    document.getElementById('divsVolunteers').style.display = 'flex';
    document.getElementById('divsFeed').style.display = 'none';
    document.getElementById('divsMedicines').style.display = 'none';

    document.getElementById('volunteers').style.backgroundColor = 'white';
    document.getElementById('volunteers').style.color = 'black';
    document.getElementById('volunteers').style.borderColor = '#5B14F2';
    

    document.getElementById('financeHelp').style.backgroundColor = '#5B14F2';
    document.getElementById('financeHelp').style.color = 'white';
    var a = document.getElementById('financeHelp');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('financeHelp').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('financeHelp').style.borderColor='#ffffff';
      };


    document.getElementById('feed').style.backgroundColor = '#5B14F2';
    document.getElementById('feed').style.color = 'white';
    var a = document.getElementById('feed');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('feed').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('feed').style.borderColor='#ffffff';
      };


    document.getElementById('medicines').style.backgroundColor = '#5B14F2';
    document.getElementById('medicines').style.color = 'white';
    var a = document.getElementById('medicines');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('medicines').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('medicines').style.borderColor='#ffffff';
      };


      /////
//срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers1').onclick = function divVolunteers1(){
        document.getElementById('divVolunteers1').style.display = 'none';
        document.getElementById('divVolunteers11').style.display = 'flex';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers11').onclick = function divVolunteers11(){
        document.getElementById('divVolunteers1').style.display = 'flex';
        document.getElementById('divVolunteers11').style.display = 'none';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers2').onclick = function divVolunteers2(){
        document.getElementById('divVolunteers2').style.display = 'none';
        document.getElementById('divVolunteers22').style.display = 'flex';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers22').onclick = function divVolunteers22(){
        document.getElementById('divVolunteers2').style.display = 'flex';
        document.getElementById('divVolunteers22').style.display = 'none';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers3').onclick = function divVolunteers3(){
        document.getElementById('divVolunteers3').style.display = 'none';
        document.getElementById('divVolunteers33').style.display = 'flex';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers33').onclick = function divVolunteers33(){
        document.getElementById('divVolunteers3').style.display = 'flex';
        document.getElementById('divVolunteers33').style.display = 'none';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers4').onclick = function divVolunteers4(){
        document.getElementById('divVolunteers4').style.display = 'none';
        document.getElementById('divVolunteers44').style.display = 'flex';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divVolunteers44').onclick = function divVolunteers44(){
        document.getElementById('divVolunteers4').style.display = 'flex';
        document.getElementById('divVolunteers44').style.display = 'none';
      }
    }



//срабатывание функции при клике по элементу и изменение стилей
    document.getElementById('feed').onclick = function feed (){
    document.getElementById('divsFinanceHelp').style.display = 'none';
    document.getElementById('divsVolunteers').style.display = 'none';
    document.getElementById('divsFeed').style.display = 'flex';
    document.getElementById('divsMedicines').style.display = 'none';

    document.getElementById('feed').style.backgroundColor = 'white';
    document.getElementById('feed').style.color = 'black';
    document.getElementById('feed').style.borderColor = '#5B14F2';


    document.getElementById('financeHelp').style.backgroundColor = '#5B14F2';
    document.getElementById('financeHelp').style.color = 'white';
    var a = document.getElementById('financeHelp');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('financeHelp').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('financeHelp').style.borderColor='#ffffff';
      };


    document.getElementById('volunteers').style.backgroundColor = '#5B14F2';
    document.getElementById('volunteers').style.color = 'white';
    var a = document.getElementById('volunteers');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('volunteers').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('volunteers').style.borderColor='#ffffff';
      };


    document.getElementById('medicines').style.backgroundColor = '#5B14F2';
    document.getElementById('medicines').style.color = 'white';
    var a = document.getElementById('medicines');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('medicines').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('medicines').style.borderColor='#ffffff';
      };

      //////
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divFeed1').onclick = function divFeed1(){
        document.getElementById('divFeed1').style.display = 'none';
        document.getElementById('divFeed11').style.display = 'flex';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divFeed11').onclick = function divFeed11(){
        document.getElementById('divFeed1').style.display = 'flex';
        document.getElementById('divFeed11').style.display = 'none';
      }
    }

//срабатывание функции при клике по элементу и изменение стилей
    document.getElementById('medicines').onclick = function medicines (){
    document.getElementById('divsFinanceHelp').style.display = 'none';
    document.getElementById('divsVolunteers').style.display = 'none';
    document.getElementById('divsFeed').style.display = 'none';
    document.getElementById('divsMedicines').style.display = 'flex';

    document.getElementById('medicines').style.backgroundColor = 'white';
    document.getElementById('medicines').style.color = 'black';
    document.getElementById('medicines').style.borderColor = '#5B14F2';


    document.getElementById('financeHelp').style.backgroundColor = '#5B14F2';
    document.getElementById('financeHelp').style.color = 'white';
    var a = document.getElementById('financeHelp');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('financeHelp').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('financeHelp').style.borderColor='#ffffff';
      };


    document.getElementById('volunteers').style.backgroundColor = '#5B14F2';
    document.getElementById('volunteers').style.color = 'white';
    var a = document.getElementById('volunteers');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('volunteers').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('volunteers').style.borderColor='#ffffff';
      };


    document.getElementById('feed').style.backgroundColor = '#5B14F2';
    document.getElementById('feed').style.color = 'white';
    var a = document.getElementById('feed');
    //событие изменения стилей когда курсор мыши выходит за пределы элемента
    a.onmouseout = function(e) {
      document.getElementById('feed').style.borderColor='#5B14F2';
      }
//событие изменения стилей при наведении на элемент
    a.onmouseover = function(e) {
      document.getElementById('feed').style.borderColor='#ffffff';
      }; 

      //////
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divMedicines1').onclick = function divMedicines1(){
        document.getElementById('divMedicines1').style.display = 'none';
        document.getElementById('divMedicines11').style.display = 'flex';
      }
      //срабатывание функции при клике по элементу и изменение стилей
      document.getElementById('divMedicines11').onclick = function divMedicines11(){
        document.getElementById('divMedicines1').style.display = 'flex';
        document.getElementById('divMedicines11').style.display = 'none';
      }

    }    