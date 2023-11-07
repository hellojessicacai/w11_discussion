// color of the day: Tangerine

// function challenge1(){
//     if (document.getElementById("subscribe").checked==true)
//        {console.log('this works');
//        document.querySelector("#emailDiv").style.display="initial";}
//     else
//         {document.querySelector("#emailDiv").style.display="none";}
//     }

// function challenge2(element){
//     let bill = document.querySelector("#bill")
//     let home = document.querySelector("#home")
//     console.log("home value is" +home.value)
//     console.log("bill value is" +bill.value)
//     if(element.checked){
//         home.value = bill.value;
//         home.disabled = true;
    
// }
    
//     else{home.value = "";
// home.disabled = false;}
//     }

let check = document.querySelector("#subscribe");
check.addEventListener("click", function(){
    if (check.checked){
        document.querySelector("#emailDiv").style.display="block";
    } else {
        document.querySelector("#emailDiv").style.display="none";
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('subscribe');
    const emailDiv = document.getElementById('emailDiv');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        emailDiv.style.display = 'block';
      } else {
        emailDiv.style.display = 'none';
      }
    });
  });
  

