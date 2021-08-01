function saveColor(){
     var current_color =
     {
        color : $('#hexcode').val()
     };

     if(localStorage.getItem('color') == null)
     {
          localStorage.setItem('color', JSON.stringify(current_color));
     }else{

          var colorArray = JSON.parse(localStorage.getItem('color'));

          for(item in colorArray){
               if (colorArray[item] == $('#hexcode').val()){
                    alert('This color is already on the list');
                    return false;
               }
          }

          var newArray = new Array;

          for(item in colorArray){
               newArray.push(colorArray[item]);
          }
          newArray.unshift($('#hexcode').val());
          localStorage.setItem('color', JSON.stringify(newArray));
     }
     colorList();
}

function modal(){
     if(localStorage.getItem('showModal') != "false"){
          $('.modal').show(300);
     }
}

function deleteItem(item_to_delete){

          var colorArray = JSON.parse(localStorage.getItem('color'));

          var newArray = new Array;

          for(item in colorArray){
               if (colorArray[item] != item_to_delete){
                    newArray.push(colorArray[item]);
               }
          }
          localStorage.setItem('color', JSON.stringify(newArray));

          colorList();

          if(localStorage.getItem('color').length < 3)
          {
               $(".saved").slideToggle(300);
               $(".hidden").slideToggle(300);
          }
}

function colorList(){
     $('#saved-colors').text('');
     var list = JSON.parse(localStorage.getItem('color'));
     $.each(list, function(index, value){
          $('#saved-colors').append('<span class="saved-color"style="background-color:'+value+';"><h1 id="color-code">'+ value +'</h1><div class="saved-color-buttons"><span class="copy-saved" onclick="copySelected(\''+ value +'\')">COPY THIS COLOR</span><span class="copy-saved" onclick="deleteItem(\'' + value + '\')">DELETE</span></span></div>');
     });
}

function copySelected(selectedColor){
     var previous = $('#hexcode').val();
     $('#hexcode').val(selectedColor);
     $('#hexcode').select();
     document.execCommand("copy");
     alert("Color Copied: " + copyText.value);
     $('#hexcode').val(previous);
}

function showcolors(){
     if(localStorage.getItem('color').length < 3)
     {
          alert('No saved color. Please save a color first.');
     }else{
          $(".saved").slideToggle(300);
          $(".hidden").slideToggle(300);
     }
}

$('#showColors').click(function(){showcolors();});

$('#saveColor').click(function(){
     saveColor();
});

$('#close-modal').click(function(){
     $('.modal').hide(300);
     localStorage.setItem('showModal', "false");
});

$(document).ready(function(){
     colorList();
     changeColor();
     modal();
});

document.body.onkeyup = function(e){
     if(e.keyCode == 32){
          changeColor();
     }else if(e.keyCode == 13){
          saveColor();
     }else if(e.keyCode == 83){
          showcolors();
     }
}
