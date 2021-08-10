//Пример работы с замыканием и применение стрелочной функции

//Здесь находится замыкающая функция
function changeParagraph(){
  function Hi(){
    return word;
  }
  var word = "Function with closure used!";
  return Hi();
}

$(document).ready(function() {
  //Здесь находится стрелочная функция
  $("#btn").on("click", () => $("#text").html(changeParagraph()));
 });
 

