// Chapter #38 to 44


// Task no 1


// var a = 3 ;
// var b = 7 ;
// var c = Math.pow(a , b);
// document.write(c);


// Task no 2

// var year = parseInt(prompt("Enter a year to check year is leap year or not "));

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// document.write( leapyear(year));



// Task no 3

// var a = 5; 
// var b = 6; 
// var c = 7; 
// var S = (a + b + c)/2;
// var area =  Math.sqrt(S*((S-a)*(S-b)*(S-c)));
// document.write(area);

// Task no 4


// var sub1 = parseInt(prompt("Enter your math marks"));
// var sub2 = parseInt(prompt("Enter your biology marks"));
// var sub3 = parseInt(prompt("Enter your english marks"));
// var totalSub = parseInt(prompt("Enter your total marks"));

// var a = sub1+sub2+sub3;

// function average(){
//     return(a/3);
// }
// document.write("average marks"+average(a));

// function percentage(){
//     return(a/totalSub*100);
// }
// document.write(percentage(a));


// Task no 5

// var a = "Pakistan";

// function character(){
//     return(a.indexOf("t"))
// }
// document.write(" In " + a + " the indexof  't' is  "  + character(a));




// Task no 6

//var string = prompt("Write a word to remove vowels in it")

//function removeVowels() {
//    return string.replace(/[aeiouAEIOU]/gi, '');
//  }

//document.write("Before removing vowel " + string + "<br>" + "After removing vowel " + removeVowels(string))


// Task no7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
    
    
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
      
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
    
//     return count;
//   }
  
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findOccurrences();
  
//   document.write(found);


// Task no 8


// 1 km = 1000m , 1 km = 3280.84feet , 1 km = 39370.1 inches , 1 km = 100000 cm


// var distance = parseInt(prompt("Write a distance between two cities in ('km')"));

// function convertM(){
//     return(distance*1000)
// }
// function convertFeet(){
//     return(distance*3280.84)
// }
// function convertInches(){
//     return(distance*39370.1)
// }
// function convertCm(){
//     return(distance*100000)
// }

// document.write(distance + "km" + "<br>" + convertM(distance) + "m" + "<br>" + convertFeet(distance) + "feet" + "<br>" + convertInches(distance) + "inches" + "<br>" + convertCm(distance) +  "cm"  ) 



// Task no 9



// function get_salary() {

//     var hours = 40;
//     var rate = 12.00;
    
    
//     if (hours>= 40)
    
//     {
//     regpay = (rate * 40)
//     overtimepay = ((rate * 1.5) * (hours - 40))
//     pay = (regpay + overtimepay)
    
//         return ("You earned overtime " + hours + "hours !" + " Your total pay is " + pay);
    
//     }
    
//     else 
//     {
//     regpay = (rate * hours)
//     overtimepay = 0.00
    
//     document.write("Your total pay is " + regpay);
//     }
//     }

//     document.write(get_salary());



// Task no 10

// var cash = +prompt("Enter cash (in hundreds): ");
//     var hundred = Math.round(cash / 130);
//     var fifty = Math.round((cash %100 )/ 50);
//     var ten = Math.round(((cash %100)%50)/10);

// function currencyDenomination() {
//      return ( "You have " + hundred + "Hundred notes" + fifty  + "fifty notes"+ ten + "ten notes" )
//     }

// document.write (currencyDenomination());





// Chapter no 43 to 48


// Task no 1

//// In HTML we code like this////

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    //<a href="#" onclick="alert('Welcome!')"> click </a>
// </body>
// <script src="app.js"></script>
// </html>



// Task no 2

////// In HTML we write this//////

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <img src="https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
//     <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1318&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
//     <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
//     <img src="https://images.unsplash.com/photo-1567700853887-bf34052f994b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
// </body>
// <script src="app.js"></script>
// </html>


/// Task no 3

// var arrHead = new Array();	// array for header.
//     arrHead = ['', 'Index', 'Name', 'Class'];

//     // first create TABLE structure with the headers. 
//     function createTable() {
//         var empTable = document.createElement('table');
//         empTable.setAttribute('id', 'empTable'); // table id.

//         var tr = empTable.insertRow(-1);
//         for (var h = 0; h < arrHead.length; h++) {
//             var th = document.createElement('th'); // create table headers
//             th.innerHTML = arrHead[h];
//             tr.appendChild(th);
//         }

//         var div = document.getElementById('cont');
//         div.appendChild(empTable);  // add the TABLE to the container.
//     }

//     // now, add a new to the TABLE.
//     function addRow() {
//         var empTab = document.getElementById('empTable');

//         var rowCnt = empTab.rows.length;   // table row count.
//         var tr = empTab.insertRow(rowCnt); // the table row.
//         tr = empTab.insertRow(rowCnt);

//         for (var c = 0; c < arrHead.length; c++) {
//             var td = document.createElement('td'); // table definition.
//             td = tr.insertCell(c);

//             if (c == 0) {      // the first column.
//                 // add a button in every new row in the first column.
//                 var button = document.createElement('input');

//                 // set input attributes.
//                 button.setAttribute('type', 'button');
//                 button.setAttribute('value', 'Remove');

//                 // add button's 'onclick' event.
//                 button.setAttribute('onclick', 'removeRow(this)');

//                 td.appendChild(button);
//             }
//             else {
//                 // 2nd, 3rd and 4th column, will have textbox.
//                 var ele = document.createElement('input');
//                 ele.setAttribute('type', 'text');
//                 ele.setAttribute('value', '');

//                 td.appendChild(ele);
//             }
//         }
//     }

//     // delete TABLE row function.
//     function removeRow(oButton) {
//         var empTab = document.getElementById('empTable');
//         empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
//     }



// Task no 4

// function swapImg() {
//     document.getElementById("imG").src = "https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80";
// }
// function returnImg() {
//     document.getElementById("imG").src = "https://images.unsplash.com/photo-1567700853887-bf34052f994b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
// }



// document.write("<img src='https://images.unsplash.com/photo-1567700853887-bf34052f994b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' id= 'imG' onMouseover='swapImg()' onmouseout='returnImg()' style=' height= '100px'; width ='200px ' ' alt =''>")


// Task no 5


/////// In HTML we write//////////////////


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//<div>
// <h1 id= "count">0</h1>
// </div>
//<button id= "increase" onclick= "start()">Increase</button>
//<button id = "decrease" onclick= "deCount()">Decrease</button>
// </body>
// <script src="app.js"></script>
// </html>

///////// And in Javascript file we write //////////

//var count = 0;
//var count.Heading = document.getElementById("count");
// interval;

//function counter(){
            //count++
            //countHeading.innerHTML = count;
//}
//function start() {
     //count++
            //countHeading.innerHTML = count;
            //clearInterval(interval)

            
// }
//function deCount() {
        // --count
        //countHeading.innerHTML = count;
            //clearInterval(interval);
// }






/////// Chapter no 49 to 52//////////


// Task no 1

// document.write("<h1 style = text-align:center;>Singnup Please</h1>")
// var f = document.createElement("form");
// f.style.textAlign = "center";


// var i = document.createElement("input");
// i.type = "text";
// i.name = "user_name";
// i.id = "user_name1";
// i.placeholder = "Enter your user name";
// i.style.border = "1px solid black";
// i.style.width = "170px"
// i.style.height = "20px"
// i.maxLength = "30";
// var space = document.createElement("br");
// var space2 = document.createElement("br");

// var i2 = document.createElement("input");
// i2.type = "text";
// i2.name = "email_address";
// i2.id = "email";
// i2.placeholder = "Enter your email address";
// i2.style.border = "1px solid black";
// i2.style.width = "170px"
// i2.style.height = "20px"
// i2.maxLength = "30";
// var space3 = document.createElement("br");
// var space4 = document.createElement("br");

// var i3 = document.createElement("input");
// i3.type = "password";
// i3.name = "password";
// i3.id = "password";
// i3.placeholder = "Enter your Password";
// i3.style.border = "1px solid black";
// i3.style.width = "170px"
// i3.style.height = "20px"
// i3.maxLength = "30";
// var space6 = document.createElement("br");
// var space7 = document.createElement("br");


// var textbox = document.createElement("textarea");
// textbox.name = "comment";
// textbox.placeholder = "Write some comment"
// textbox.style.border = "1px solid black";
// textbox.maxLength = "50"; 
// var space5 = document.createElement("br")



// var s = document.createElement("input");
// s.type = "submit";
// s.value = "Submit";
// s.addEventListener("click",function data1() {
//     document.write(" Your user name : " + i.value +"<br>" + " Your email address : " + i2.value + "<br>")
//     document.write("Your Password  : " + i3.value + "<br>")
//     document.write("Your comments : " + textbox.value )
// })

// f.appendChild(i);
// f.appendChild(space);
// f.appendChild(space2);
// f.appendChild(i2);
// f.appendChild(space3);
// f.appendChild(space4);
// f.appendChild(i3);
// f.appendChild(space6);
// f.appendChild(space7);
// f.appendChild(textbox);
// f.appendChild(space5);                          
// f.appendChild(s);

// document.getElementsByTagName('body')[0].appendChild(f);

// Task no 2

// function moreLoris(){
//     var moreParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genusNycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive colorationpatterns that are species-dependent. The hands and feet of slow lorises have several adaptationsthat give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow    lorises have a toxic bite, a rare trait among mammals"
//     document.getElementById("slowloris").innerHTML = moreParagraph;
// }

// document.write("<h1>Slow Loris</h1> " + "<br>" + "<p id='slowloris'>Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus."+"<button><a href='javascript:void(0);'onClick='moreLoris()' style='text-decoration: none;' >Read More</a></button></p>") 

// Task no 3

// createEditButton: function() {
//     let editButton = document.createElement('a');
//     editButton.href = "#";
//     editButton.textContent = "edit";
//     editButton.className = 'edit';
//     return editButton;
//   }






// document.write("<h1 style = text-align:center;>Students Registration Page</h1>" + "<br>" + "<br>")
// var f = document.createElement("form");
// // f.style.textAlign = "center";
// f.style.border = "1px solid black";
// f.style.width = "500px";
// f.style.margin = "0 auto";
// f.style.height = "400px";
// f.style.textAlign = "center";
// f.style.backgroundColor = "#fff"


// var para = document.createTextNode("If you want to become a student of our faculty complete form given below");
// var uNam = document.createTextNode("Username  : ");
// var fNam = document.createTextNode("First Name : ");
// var lNam = document.createTextNode("Last Name : ");
// var eMail = document.createTextNode("E-mail : ");   
// var pass = document.createTextNode("Password : ");
// var pInfo = document.createTextNode("Personal Information");
// var span = document.createElement("span");
// span.style.fontSize = "20px";
// span.appendChild(pInfo);


// var space15 = document.createElement("br");
// var space14 = document.createElement("br");
// var space12 = document.createElement("br");
// var space13 = document.createElement("br");
// var space16 = document.createElement("br");

// var i = document.createElement("input");
// i.type = "text";
// i.name = "user_name";
// i.id = "user_name1";
// i.placeholder = "Enter your user name";
// i.style.border = "1px solid black";
// i.style.width = "270px";
// i.style.height = "20px";

// i.maxLength = "30";
// var space = document.createElement("br");
// var space2 = document.createElement("br");


// var i4 = document.createElement("input");
// i4.type = "text";
// i4.name = "first_name";
// i4.id = "first_name1";
// i4.placeholder = "Enter your first name";
// i4.style.border = "1px solid black";
// i4.style.width = "270px"
// i4.style.height = "20px"
// i4.maxLength = "30";
// var space8 = document.createElement("br");
// var space9 = document.createElement("br");

// var i5 = document.createElement("input");
// i5.type = "text";
// i5.name = "last_name";
// i5.id = "last_name1";
// i5.placeholder = "Enter your last name";
// i5.style.border = "1px solid black";
// i5.style.width = "270px"
// i5.style.height = "20px"
// i5.maxLength = "30";
// var space10 = document.createElement("br");
// var space11 = document.createElement("br");


// var i2 = document.createElement("input");
// i2.type = "text";
// i2.name = "email_address";
// i2.id = "email";
// i2.placeholder = "Enter your email address";
// i2.style.border = "1px solid black";
// i2.style.width = "270px"
// i2.style.height = "20px"
// i2.maxLength = "30";
// var space3 = document.createElement("br");
// var space4 = document.createElement("br");

// var i3 = document.createElement("input");
// i3.type = "password";
// i3.name = "password";
// i3.id = "password";
// i3.placeholder = "Enter your Password";
// i3.style.border = "1px solid black";
// i3.style.width = "270px"
// i3.style.height = "20px"
// i3.maxLength = "30";
// var space6 = document.createElement("br");
// var space7 = document.createElement("br");


// var iVal = document.createTextNode(i.value)
// var sub = document.createTextNode("Submit");
// var s = document.createElement("button");
// s.type = "button";
// s.value = "Submit";
// s.appendChild(sub)

// s.setAttribute("onclick","addTable()");

// var body = document.getElementById("body");
// let header = false;
// function addTable(){
   

//     var tab =  document.createElement("table");
//     var tr1 =  document.createElement("tr")
//     var th1 =  document.createElement("th")
//     var th2 =  document.createElement("th")
//     var th3 =  document.createElement("th")
//     var th4 =  document.createElement("th")
//     var th5 =  document.createElement("th")
//     if(!header){
//         th1.appendChild(uNam);
//         th2.appendChild(fNam);
//         th3.appendChild(lNam);
//         th4.appendChild(eMail);
//         th5.appendChild(pass);
//         header = true;
//     }

//     var tr2 =  document.createElement("tr")
//     var td1 =  document.createElement("td")
//     var td2 =  document.createElement("td")
//     var td3 =  document.createElement("td")
//     var td4 =  document.createElement("td")
//     var td5 =  document.createElement("td")
//     tr1.appendChild(th1);
//     tr1.appendChild(th1);
//     tr1.appendChild(th2);
//     tr1.appendChild(th3);
//     tr1.appendChild(th4);
//     tr1.appendChild(th5);
//     tr2.appendChild(td1).textContent = i.value;
//     tr2.appendChild(td2).textContent = i4.value;
//     tr2.appendChild(td3).textContent = i5.value;
//     tr2.appendChild(td4).textContent = i2.value;
//     tr2.appendChild(td5).textContent = i3.value;
//     tab.appendChild(tr1)
//     tab.appendChild(tr2)
//     i.value = "";
//    i4.value = "";
//    i5.value = "";
//    i2.value = "";
//    i3.value = "";
//     body.appendChild(tab)

// }

// f.appendChild(para);
// f.appendChild(space14);
// f.appendChild(space15);
// f.appendChild(space16);
// f.appendChild(span);
// f.appendChild(space12);
// f.appendChild(space13);
// f.appendChild(uNam);
// f.appendChild(i);
// f.appendChild(space);
// f.appendChild(space2);
// f.appendChild(fNam);
// f.appendChild(i4);
// f.appendChild(space8);
// f.appendChild(space9);
// f.appendChild(lNam);
// f.appendChild(i5);
// f.appendChild(space10);
// f.appendChild(space11);
// f.appendChild(eMail);
// f.appendChild(i2);
// f.appendChild(space3);
// f.appendChild(space4);
// f.appendChild(pass);
// f.appendChild(i3);
// f.appendChild(space6);
// f.appendChild(space7);                          
// f.appendChild(s);

// document.getElementsByTagName('body')[0].appendChild(f);

// document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(238,243,250)";


  


// Chapter no 53 to 58


// Task no 1

// var img = document.createElement("img");
// img.id = "myTag";
// img.src = "./1.jpg";
// img.alt = "Salar de Uyuni, Bolivia";
// img.style.width = "100%";
// img.style.maxWidth = "300px"
// img.style.borderRadius = "5px";
// img.style.cursor = "pointer";
// img.style.transition = "0.3s";


// var modal = document.createElement("div");
// modal.id = "myModal";
// modal.className = "modal";
// modal.style.display = "none";
// modal.style.position = "fixed";
// modal.zIndex = "1";
// modal.style.paddingTop = "100px";
// modal.style.left = "0";
// modal.style.top = "0";
// modal.style.width = "100%";
// modal.style.height = "100%";
// modal.style.backgroundColor = "rgb(0,0,0)";
// modal.style.backgroundColor = "rgba(0,0,0,0.9)";

// var span = document.createElement("span");
// span.className = "close";
// span.innerHTML = "&times;";
// span.style.position = "absolute";
// span.style.top = "15px";
// span.style.right = "35px";
// span.style.fontSize = "40px";
// span.style.fontWeight = "bold";
// span.style.transition = "0.3s";


// var img2 = document.createElement("img");
// img2.className = "modal-content";
// img2.id = "img01";
// img2.style.margin = "auto";
// img2.style.display = "block";
// img2.style.width = "80%";
// img2.style.maxWidth = "700px";
// img2.style.animationName = "zoom";
// img2.style.animationDuration = "0.6s";

// var caption = document.createElement("div");
// caption.id = "caption";
// caption.style.margin = "auto";
// caption.style.display = "block";
// caption.style.width = "80%";
// caption.style.maxWidth = "700px";
// caption.style.textAlign = "center";
// caption.style.color = "#ccc";
// caption.style.padding = "10px 0";
// caption.style.height = "150px";
// caption.style.animationName = "zoom";
// caption.style.animationDuration = "0.6s";



// modal.appendChild(span);
// modal.appendChild(img2);
// modal.appendChild(caption);

// img.onclick = function(){
//  modal.style.display = "block";
//  img2.src = "./1.jpg";
//  caption.innerHTML = "Salar de Uyuni, Bolivia";
// }




// document.getElementsByTagName('body')[0].appendChild(img)


// Task no 2 

// var para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum ipsa quae quod officia sapiente aut velit tempora, nobis esse?"

// var para2 = document.createElement("p");
// para2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum ipsa quae quod officia sapiente aut velit tempora, nobis esse?"
// var currTextSize = 20; 
// para2.style.fontSize  = currTextSize + 'px';

// var z1T = document.createTextNode("zoomin");
// var z2T = document.createTextNode("zoomout");
// var z1 = document.createElement("button"); 

// z1.appendChild(z1T);
// z1.style.fontSize = "12px";
// z1.onclick = function big(){
//     ++currTextSize;
//     para2.style.fontSize = currTextSize + 'px';
// }


// var z2 = document.createElement("button");
// z2.appendChild(z2T);
// z2.style.fontSize = "12px";
// z2.onclick = function big(){
//     --currTextSize;
//     para2.style.fontSize = currTextSize + 'px';
// }

// document.getElementsByTagName("body")[0].appendChild(para2);
// document.getElementsByTagName("body")[0].appendChild(z1);
// document.getElementsByTagName("body")[0].appendChild(z2);


/////// Chapter no  58 to 67 ///////////


 // task no 1  (i)

//var nCon = document.getElementsByTagName("p");

//var p = document.getElementById("main-content")


 














































