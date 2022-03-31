var family = ["Father", "Mother", "Sister", "Brother"];
var images = ["father.jpg", "mother.jpg", "sister.jpg", "brother.jpg"];
var i = 0;


function change()
{
   if(i < 4)
   {
     document.getElementById("ImgOne").src = images[i];
     document.getElementById("LabelOne").innerHTML = family[i];
     console.log(i);
   }
    i++;
   
  
}

function reset()
{
  var i=0 ;
  document.getElementById("ImgOne").src = images[i];
  document.getElementById("LabelOne").innerHTML = family[i];
}
