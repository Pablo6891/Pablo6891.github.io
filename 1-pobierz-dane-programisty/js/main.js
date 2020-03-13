
$(function(){
  $('button').click(function(){
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
        $('#dane-programisty').after(
            'Imię: ' + data.imie + '<br> Nazwisko: ' + data.nazwisko + '<br> Zawód: ' + data.zawod + ' <br> Firma: ' + data.firma);
  });
  });
 });
// $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
//     $('#dane-programisty').after(
//       'Imię: ' + data.imie + ' Nazwisko: ' + data.nazwisko + ' Zawód: ' + data.zawod + ' Firma: ' + data.firma);
//   });
    


// $(function(data){
//   $('#dane-programisty').click(
//     'Imię: ' + data.imie + ' Nazwisko: ' + data.nazwisko + ' Zawód: ' + data.zawod + ' Firma: ' + data.firma);
// });

