// Chapter 1
// Task 1
alert("Welcome :)");

// Task 2
    alert("Error! Please enter a valid password.");

// Task 3
    alert("Welcome to js Land.. \n Happy Coding!");

// Task 4
    alert("Welcome to JS Land..");
    alert("Happy Coding!");

// Task 5
// Press f12 go to console
// write alert("Hello I can run this through my browsers console."); Press Enter

// Task 6
// I am using alert in my projects

// Task 7 
// Practice is done

// Chapter 2
// Task 1
    var username;

// Task 2
    var myName = "M Ahmed Raza";

// Task 3
    var message;
    message = "Hello World";
    alert(message);

// Task 4
    var name = "Ahmed";
    var age = "19 years old"
    var course = "Web & Mob Hybird Application"
    alert(name);
    alert(age);
    alert(course);

// Task 5


// Task 6
    var email = "itsmeeeahmed@gmail.com";
    alert("My email address is "+email);

// Task 7
    var book ="A smarter way to learn JS"
    alert("I am trying to learn from the Book "+book);

// Task 8
    document.getElementById("heading").innerHTML= "Yeah i can write Html content through JS";
    //There is a file outside it is also done in that

// Task 9
    var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(design);

// Chapter 3
// Task 1
    var my_age = 19;
    alert("I am "+my_age+" years old");

// Task 2


// Task 3
    var birthYear = 2000;
    document.getElementById("head1").innerHTML= "My birth year is "+birthYear+" <br>Data type of my variable is "+typeof(birthYear);
     //There is a file outside it is also done in that


// Task 4
    var visitorName = prompt("Your name:");
    var prodName = prompt("Product:");
    var quantity = prompt("Quantity:");
    document.getElementById("head").innerHTML= visitorName+" ordered "+quantity+" "+prodName+" on xyz shoe house";
     //There is a file outside it is also done in that


//Chapter 4
// Task 1
    var nam; var nam2; var nam3;

// Task 2 
    var _name;
    var $fname;
    var var_1;
    var a1;
    var f_name;
    var 1var;
    var full name;
    var 554;
    var &;
    var let;

// Task 3
document.getElementById("para").innerHTML= "A variable can only contain letters, numbers, dollar signs and underscores. <br>Variables must begin with a letter, underscore, dollar sign <br>Variable names are case sensitive.<br>Variable name should not be a Keyword" ;
//There is a file outside it is also done in that

// Chapter 5
// Task 1
    var no1 = 2;
    var no2 = 7;
    var sum = no1+no2;
    document.getElementById("he").innerHTML= "Sum of "+no1+" and "+no2+" is "+sum;
//There is a file outside it is also done in that

// Task 2
var no1 = 2;
var no2 = 7;
var sub = no1-no2;
var div = no1/no2;
var mult = no1*no2;
var mod = no1%no2;
 document.getElementById("she").innerHTML= "Substration of "+no1+" and "+no2+" is "+sub+"<br>Multiplication :"+mult+"<br>Division :"+div+"<br>Modulus :"+mod;  
//There is a file outside it is also done in that

// Task 3
var variable; 
document.getElementById("s1").innerHTML = "Value after variable declaration is "+variable;
variable = 5;
document.getElementById("s2").innerHTML = "Intial value: "+variable;
variable = variable++;
document.getElementById("s3").innerHTML = "Value after increment is "+variable;
variable = variable+7;
document.getElementById("s4").innerHTML = "Value after addition is "+variable;
variable = variable--;
document.getElementById("s5").innerHTML = "Value after decrement is "+variable;
variable = variable%3;
document.getElementById("s6").innerHTML = "The remainder is "+variable;
//There is a file outside it is also done in that


// Task 4
var cost = 600;
document.getElementById("cost").innerHTML= "Total cost to buy 5 tickets to a movie is "+(cost*5);    

// Task 5
var table = 4;
document.write('Table of '+table);
for (let i = 1; i <= 10; i++) {
 document.write("<br>4x"+i+"="+(table*i));    
}

// Task 6
var cel = 25;
document.write(cel+"C is "+(((cel*9)/5)+32)+"F");
document.write("<br>")
var far = 70;
document.write(far+"F is "+((far-32)*5/9)+"C")

// Task 7
var pItem1 = 350;
var pItem2 = 520;
var qItem1 = 2;
var qItem2 = 9;
var sCharges = 100;
document.write("<h1>Shopping Cart</h1>")
document.write('<br>Price of item 1 is '+pItem1);
document.write('<br>Quantity of item 1 is'+qItem1);
document.write("<br>Price of item 2 is "+pItem2);
document.write('<br>Quantity of item 1 is'+qItem2);
document.write('<br>Shipping Charges is'+sCharges);
document.write("<br>");
document.write("Total cost of your order is "+((qItem1*pitem1)+(qItem2*pitem2)+sCharges))

// Task 8
var tmarks = 980;
var omarks = 804;
var per = (omarks/tmarks)*100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total marks: "+tmarks);
document.write("<br>Obtained marks: "+omarks);
document.write("<br>Percentage: "+per);

// Task 9
var $ = 10;
var riyal = 25;
document.write("<h1>Currency in PKR</h1>");
document.write("<br>Total Currency in PKR: "+(($*104.80)+(riyal*28)));

// Task 10
var intial = 1;
intial = ((intial+5)*5)/2;

// Task 11
var cYear = 2020;
var bYear = 2000;
var urAge = cYear - bYear;

document.write("<h1>Age Ca;culator</h1>");
document.write("<br>Current Year: "+cYear);
document.write("<br>Birth Year: "+bYear);
document.write("<br>Your age: "+urAge);

// Task 12
var snack  = "chocolate";
var cage = 19;
var mage = 65;
var apday = 3;
var Rototal = (mage-cage)*apday;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack:"+snack);
document.write("<br>Curremt Age:"+cage);
document.write("<br>Estimated maximum age:"+mage);
document.write("<br>Amount of Snack per day:"+apday);
document.write("<br>“You will need "+Rototal+" to last you until the ripe old age of:"+mage);


// Chapter 6-9

// Task 1
var a = 10
    document.write("Result:")
    document.write("<br>The value of a is:"+a)
    
    document.write("<br><br>The value of ++a is:"+(++a))
    document.write("<br>Now the value of a is:"+a)
    
    document.write("<br><br>The value of a++ is:"+(a++))
    document.write("<br>Now the value of a is:"+a)

    document.write("<br><br>The value of --a is:"+(--a))
    document.write("<br>Now the value of a is:"+a)

    document.write("<br><br>The value of a-- is:"+(a--))
    document.write("<br>Now the value of a is:"+a)

//Task 2

var a = 2, b = 1;
document.write("a is:"+a)
document.write("<br>b is:"+b)
var result = --a - --b + ++b + b--;
document.write("<br>Result is:"+result)

//Task 3
var gretnam = prompt("Your good name:")
document.write("Hello "+gretnam+" have a good day")

// Task 4
var table = prompt('Write a NUMBER that table you want:')
table = Number(table)

        
if(isNaN(table)){
    table = 5 
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 


} else {
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 
}

//Task 5
var s1 = prompt('Write name of 1st subject')
  var s2 = prompt('Write name of 2nd subject')
  var s3 = prompt('Write name of 3rd subject')
  var TMarks = 100
  var AllTmarks = TMarks*3
  var s1Marks = Number(prompt(`Write marks obtained in ${s1}`))
  var s2Marks = Number(prompt(`Write marks obtained in ${s2}`))
  var s3Marks = Number(prompt(`Write marks obtained in ${s3}`))
  var TobtMarks = s1Marks+s2Marks+s3Marks
  var s1Perc = (s1Marks/TMarks)*100
  var s2Perc = (s2Marks/TMarks)*100
  var s3Perc = (s3Marks/TMarks)*100

  document.write(`<table><tr>
    <th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>
  </tr>
  <tr>
    <td>${s1}</td><td>${TMarks}</td><td>${s1Marks}</td><td>${s1Perc}%</td>
  </tr>
  <tr>
    <td>${s2}</td><td>${TMarks}</td><td>${s2Marks}</td><td>${s2Perc}%</td>
  </tr>
  <tr>
    <td>${s3}</td><td>${TMarks}</td><td>${s3Marks}</td><td>${s3Perc}%</td>
  </tr>
  <tr>
    <th></th><th>${AllTmarks}</th><th>${TobtMarks}</th><th>${(TobtMarks/AllTmarks)*100}%</th>
  </tr>
  </table>`)

  //Chapter 9-11

  //Task 1
  var cityName = prompt("Your city name")
  if(cityName.toLowerCase()=="karachi"){
      document.write('Welcome to the city of lights')
  }

  //Task 2
  var gen = prompt('What is your Gender? <br> Write M if male & F if female')
  if(gen.toLowerCase() == "m" ){
      document.write("Good Morning Sir")
  } else if (gen.toLowerCase() == "f"){
      document.write("Good Morning Ma'am")
  } else{
      document.write("Write in a correct manner")
  }

  //Task 3
  var TSig = prompt('Traffic Signal Color? \n Choose between Red Yellow or Green')
  if(TSig.toLowerCase() == "red" ){
      document.write("Must Stop")
  } else if (TSig.toLowerCase() == "yellow"){
      document.write("Ready to Move")
  } else if (TSig.toLowerCase() == "green"){
      document.write("Move now")
  } else{
      document.write("Write in a correct manner")
  }

  //Task 4
  var fuel = Number(prompt('Remaining fuel of car in liters'))
        if(fuel<0.25){
            document.write('Please refill the fuel in your car')
        } else if (fuel>0.25){
            document.write('You have enough fuel')
        } else {
            document.write("Write in a correct manner")
        }

//Task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if(false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }

//Task 6
var sub1 = Number(prompt('Enter marks obtainer of 1st subject:'))
        var sub2 = Number(prompt('Enter marks obtained of 2nd subject:'))
        var sub3 = Number(prompt('Enter marks of obtained 3rd subject:'))
        var totalMark = Number(prompt('Enter Total marks:'))
        var Omark = sub1 + sub2+ sub3
        var Per = (Omark/totalMark*100)
        var grade;
        var remarks;
        if(Per>=80){
            remarks = "Excelent"
            grade = "A-one"
        } else if (Per>=70){
            remarks = "Good"
            grade = "A"
            
        }else if (Per>=60){
            remarks = "You need to improve"
            grade = "B"
            
        }else if (Per<60){
            remarks = "Fail"
            grade = "Sorry"
            
        }


        document.write("<h1>Marks Sheet</h1>")
        document.write('<br>Total Marks:'+totalMark)
        document.write('<br>Marks Obtained:'+Omark)
        document.write('<br>Percentage:'+Per+"%")
        document.write('<br>Grade:'+grade)
        document.write('<br>Remarks:'+remarks)

        //Task 7
        var sno = 8;
        var uno = Number(prompt("Guess a no between 1-10"))
        if(uno==sno){
            document.write("Bingo! Correct answer")

        }else if (uno== sno+1){
            document.write('Very Close')
        } else {
            document.write("Wrong ans")
        }

        //Task 8
        var n1 = Number(prompt('Write a no to check if it is divisilbe by 3'))
        if(n1%3===0){
            document.write("It is divisible by 3")
        }else{
            document.write("It is not divisible by 3")
        }

        //Task 9
        var num = Number(prompt("Write any no:"))
        if (num%2==0) {
            document.write("Its Even No")
        } else  {
            document.write("Its Odd no")
        } 

        //Task 10
        var T = Number(prompt("What is temperature:"))
        if (T>40) {
            document.write("Its too hot outside")
        } else if (T>30) {
            document.write("The weather today is Normal")
        } else if (T>20) {
            document.write("Today’s Weather is cool.")
        } else if (T>10) {
            document.write("OMG! Today’s weather is so Cool.")
        } 

        //Task 11
        var no1st = Number(prompt("1st No:"))
        var no2nd = Number(prompt("2nd No:"))
        var operator = prompt("Operator:")
        var rslt;
        if(operator=="+"){
            rslt = no1st+no2nd
        } else if (operator == "-"){
            rslt = no1st-no2nd
        }else if (operator == "*"){
            rslt = no1st*no2nd
        }else if (operator == "%"){
            rslt = no1st%no2nd
        }else if (operator == "/"){
            rslt = no1st/no2nd
        }
        document.write("<h1>Calculator</h1>")
        document.write(`${no1st} ${operator} ${no2nd} = ${rslt}`)
        
        //Chapter 12-13

        //Task 1


        //Task 2
        var int1 = Number(prompt("1st Integer:"))
        var int2 = Number(prompt("2nd Integer:"))
        var lg;
        if (int1>int2)
        {
            lg = "large no is:"+int1
        } else if(int2>int1){
            lg = "large no is:"+int2
        } else if (int1==int2){
            lg = "Both are equal"
        }
        document.write(lg)

        //Task 3
        var nmbr = Number(prompt("Write any no:"))
        
        var mg;
        if (nmbr>0)
        {
            mg = "Positive no"
        } else if(nmbr<0){
            mg = "Negative No"
        } else if (nmbr==0){
            mg = "Zero"
        }
        alert(mg)

        //Task 4
        var lmbr = prompt("Write an aphabate of length 1:")
        if(lmbr=="a"|| lmbr=='e'|| lmbr=='i'|| lmbr=='o'|| lmbr=='u'){
            alert(true)
        } else{
            alert(false)
        }
        
        //Task 5
        var cPass = "12345"
        var uPass = prompt("Enter your password:")
        if (cPass == uPass){
            alert("Correct Password")
        } else if (uPass ==''){
            alert('Please enter your Password')
        } else {
            alert('Incorrect Password')
        }

        //Task 6
        var greeting;
        var hour = 13;
        if (hour < 18) {
        greeting = "Good day";}
        else{
        greeting = "Good evening";
        }

        //Task 7
        var tym = Number(prompt('Write time in 24 hour like 1400'))
        if (tym>=0000&&tym<1200) {
        alert('Good morning')
        } else if(tym>=1200&&tym<1700) {
        alert('Good afternoon')
        }else if(tym>=1700&&tym<2100) {
        alert('Good evening')
        }else if(tym>=2100&&tym<2359) {
        alert('Good night')
        }

        //Chapter 14-16

        //Task 1
        var aaa = []
        //Task 2
        var bbb = new Array()
        //Task 3
        var str = ['ahmed',"ali","haris"]

        //Task 4
        var n1 = [1,2,3,4,5]

        //Task 5
        var boool = [true,false,false,true]

        //Task 6
        var mix = ['Ahmed', 12 , true]

        //Task 7
        var qual = new Array('SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PHD')
        document.write('QUALIFICATION:')
        for (let i = 0; i < qual.length; i++) {
            document.write(`<br>${i+1}) ${qual[i]}`)
            
        }

        //Task 8
        var stu= new Array('Ali','Ahmed','Shayan')
        var scr = new Array(420,380,395)
        var tot = 500;
        for (let i = 0; i < stu.length; i++) {
            document.write(`Score of ${stu[i]} is ${scr[i]}. Percentage: ${(scr[i]/tot)*100}%<br>`)
            
        }

        //Task 9
        var colr = ['white','blue','green']
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.push(prompt('Write a color to add in end'))
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.unshift(prompt('Again write a color to add in beginning'))
        alert(colr)
        colr.shift()
        alert("1st color deleted\n"+colr)
        colr.pop()
        alert("Last color deleted\n"+colr)
        var ind = prompt(`In which index you want to add lenght 0 - ${colr.length - 1}`)
        colr[ind] = prompt('Which color?')
        alert(colr)
        ind = Number(prompt(`In which index you want to delete lenght 0 - ${colr.length - 1}`))
        ind1= Number(prompt(`How many color you want to remove from desired index`))
        colr.splice(ind,ind1)
        alert(colr)

        //Task 10
        var scr =[320,230,480,120]
       document.write("Scores of Students: "+scr)
       document.write("<br>Ordered Scores od Students: "+scr.sort())

       //Task 11
       var cities = new Array('Karachi' , 'Islamabad' , 'Peshawar', 'Quetta')
       var selectedCities = cities.slice(0,3)
       document.write(`Cities List:<br>${cities}<br><br>Selected cities list:<br>${selectedCities}`)
      
       //Task 12
        var arr = ["This" ,  "is" ,  "my" , "cat"];
        var stringline = arr.join(' ')
        document.write(`Array: <br> ${arr} <br><br>String: <br> ${stringline}`)   

        //Task 13
        var device = ['Keyboard', "LED" , 'Mouse' ,'Printer']
        document.write(`Devices: <br>${device}<br>`)
        for (let i = 0; i < device.length; i++) {
        document.write(`<br> Out: <br> ${device[i]}`)}
            
        //Task 14
        var devic = ['Keyboard', "LED" , 'Mouse' ,'Printer']
        document.write(`Devices: <br>${devic}<br>`)
        for (let i = devic.length - 1; i > -1; i--) {
            document.write(`<br> Out: <br> ${devic[i]}`)
            
        }

        //Task 15
        var phone = new Array ("Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier")
        document.write("<select>")
        for (let i = 0; i < phone.length; i++) {
        document.write(`<option>${phone[i]}</option>`)
        }
        document.write("</select>")

        //Chapter 17-20
        //Task 1
        var marr = [[],[]]

        //Task 2
        var mat = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
        for (let i = 0; i < mat.length; i++) {
          document.write(mat[i].join(' ')+ "<br>")
            
        }

        //Task 3
        for (let i = 1; i <= 10; i++) {
            document.write(i+"<br>")
              
          }

        //Task 4
        var tab = Number (prompt("Enter no to show its multiplication table"))
        var len = Number (prompt("Enter length of multiplication table"))
        for (let i = 1; i <= len; i++) {
          document.write(`${tab} x ${i} = ${tab*i} <br>`)
            
        }

        //Task 5
        fruits = ["apple", "banana", "mango", "orange",'strawberry']
        for (let i = 0; i < fruits.length; i++) {
          document.write(`${fruits[i]} <br>`)
          
        }
        document.write('<br>')
        for (let i = 0; i < fruits.length; i++) {
          document.write(`Element at index ${i} is ${fruits[i]} <br>`)
          
        }

        //Task 6
        document.write("<h4>Counting</h4>")
        for (let i = 1; i <= 15; i++) {
          document.writeln(`${i},`)
          
        }
        document.write("<h4>Reverse Counting</h4>")
        for (let i = 10; i > 0; i--) {
          document.writeln(`${i},`)
          
        }
        document.write("<h4>Even</h4>")
        for (let i = 0; i <= 20; i++) {
          if (i%2==0) {
            document.writeln(`${i},`)
          }
        }
        document.write("<h4>Odd</h4>")
        for (let i = 0; i <= 20; i++) {
          if (!(i%2==0)) {
            document.writeln(`${i},`)
          }
        }
        document.write("<h4>Series</h4>")
        for (let i = 1; i <= 20; i++) {
          if (i%2==0) {
            document.writeln(`${i}k,`)
          }
        }

        //Task 7
        var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var inp = prompt('Welcome to our Bakery what do you want to order?').toLowerCase()
    var scre; 
    for (let i = 0; i < A.length; i++) {
        if(inp==A[i])
        {
            document.write(`${inp} is avliable at index ${i} in our bakery.`)
            scre = 1;
        }
    }
    if (scre!=1)
    {
        document.write(`We are sorry. ${inp} is not avliable at our bakery.`)
    }


    //Task 8
    var lar = [24, 53, 78, 91, 12]
    var larg;
    document.write("Array Items: "+ lar)
    for (let i = 0; i < lar.length; i++) {
        larg = lar[i]
        for (let i = 0; i < lar.length; i++) {
            if(larg<lar[i]){
                larg=lar[i]
               
            }
            
        }
        
    }
    document.write('<br>The largest no is '+larg)

    //Task 9
    var lar = [24, 53, 78, 91, 12]
    var sm;
    document.write("Array Items: "+ lar)
    for (let i = 0; i < lar.length; i++) {
        sm = lar[i]
        for (let i = 0; i < lar.length; i++) {
            if(sm>lar[i]){
                sm=lar[i]
               
            }
            
        }
        
    }
    document.write('<br>The smallest no is '+sm)

    //Task 10
    for (let i = 1; i <= 100; i++) {
        if (i%5 == 0){
            document.writeln(i)
        }
        
    }







// CHAPTER 21-25

//Task 1
var Fname = prompt('First name')
var Lname = prompt('Last name')
var FullName = Fname + " " + Lname
alert("Asalamualikum "+FullName)

//Task 2
var mbl = prompt('What is your favpourite mobile?')
document.write("My Favourite Mobile is "+mbl+"<br>Length of string is "+mbl.length)

//Task 3
var cn = "Pakistani"
document.write('String: '+cn+"<br>Indec of 'n': "+cn.indexOf('n'))

//Task 4
var hl = 'Hello world'
document.write('String: '+hl+"<br>Last index of 'l': "+hl.lastIndexOf("l"))


//Task 5
var cn = "Pakistani"
document.write('String: '+cn+"<br>Character at 3rd index: "+cn.charAt(3))

//Task 6
var Fname = prompt('First name')
var Lname = prompt('Last name')
var FullName = Fname.concat(" ",Lname)
alert("Asalamualikum ".concat(FullName))

//Task 7
var city = 'Hyderabad'
document.write('City: '+city+"<br>After replacement: "+city.replace('Hyder','Islam'))

//Task 8
var message = "Ali and Sami are best friends. They play cricket and football together"
document.write(message.split('and').join('&'))

//Task 9
var val ='472'
var Nval = Number(val)
document.write(`Value: ${val}<br>Type: ${typeof(val)}<br>Value: ${Nval}<br>Type: ${typeof(Nval)}`)

//Task 10
var food = prompt('Favourite food?')
document.write(`User input: ${food}<br>Upper case: ${food.toUpperCase()}`)

//Task 11
var inp = prompt('Your input:')
document.write(`User Input: ${inp}<br>Title Case: ${inp[0].toUpperCase()}${inp.slice(1,)}`)

//Task 12
var num = 35.36 ;
alert(String(num).replace('.',''))

//Task 13
var usr = prompt('Username:')
for (let i = 0; i < usr.length; i++) {
    if (usr[i]==String.fromCharCode(33)||usr[i]==String.fromCharCode(44)||usr[i]==String.fromCharCode(46)||usr[i]==String.fromCharCode(64)) {
    alert("Please enter valid name")
}
    
//Task 14 
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var ip = prompt('Welcome to our Bakery what do you want to order?').toLowerCase()
    var scre; 
    for (let i = 0; i < A.length; i++) {
        if(ip==A[i])
        {
            document.write(`${ip} is avliable at index ${i} in our bakery.`)
            scre = 1;
        }
    }
    if (scre!=1)
    {
        document.write(`We are sorry. ${ip} is not avliable at our bakery.`)
    }
}

//Task 15


//Task 16
var university = "University of Karachi"
var uniArray = university.split(' ')

for (let i = 0; i < uniArray.length; i++) {
    for (let j = 0; j < uniArray[i].length; j++) {
        document.write( uniArray[i][j]+'<br>')
    }
    document.write("<br>")
    
}

//Task 17
var cin = prompt('Write any word:')
document.write(`User input: ${cin} <br>Last character of input: ${cin[cin.length-1]}`)

//Task 18
var temp = "The quick brown fox jumps over the lazy dog"
var count = temp.toLowerCase().split('the').length-1
document.write('Text: '+temp+'<br> There are '+(count)+' occurance(s) of word "the"')

//CHAPTER 26-30
//Task 1
var n0 = 3.45214
document.write(`number: ${n0}<br>round off value: ${Math.round(n0)}<br>floor value: ${Math.floor(n0)}<br>ceil value: ${Math.ceil(n0)}`)

//Task 2
var nu = -2.854
document.write(`number: ${nu}<br>round off value: ${Math.round(nu)}<br>floor value: ${Math.floor(nu)}<br>ceil value: ${Math.ceil(nu)}`)

//Task 3
var neg = -4
var negAbs = Math.abs(neg)
document.write(`The absolute value of ${neg} is ${negAbs}`)

//Task 4
var dice1 = Math.floor(Math.random()*6+1)
var dice2 = Math.floor(Math.random()*6+1)
document.write(`Random dice value1: ${dice1}<br>Random dice value2: ${dice2}`)

//Task 5
var rand = Math.round(Math.random())
var coin ;
if(rand==1){
    coin = 'Head'
} else {
    coin = 'Tail'
}
document.write(`${rand} <br>Random coin value ${coin}`)

//Task 6
var rand1_100 = Math.floor(Math.random()*100+1)
document.write(`Random no between 1-100 is ${rand1_100}`)

//Task 7
var weight = prompt("Enter your weight:").toLowerCase()
weight = weight.replace('kgs','')
weight = weight.replace('kilograms','')
document.write(`The weight of the user is: ${weight} kilograms`)

//Task 8
var rand10 = Math.floor(Math.random()*10+1)
var secretNo = prompt('Guess any no between 1 - 10 ')
if (rand10==secretNo){
    alert("Congarts")
} else{
    alert('Try again')
}

//Chapter 31-34
//Task 1
var d = new Date()
document.write(d)

//Task 2
var d = new Date()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
alert('Current month: '+months[d.getMonth()])

//Task 3
var d = new Date()
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
alert('Today is: '+days[d.getDay()])

//Task 4
var d = new Date()
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
var today = days[d.getDay()]
if(today=='Sun' || today=='Sat'){
alert('Its a Fun day')
} else{
    alert('Its not a fun day')
}

//Task 5


//Task 6
var minutes = 60*1000
var d = new Date()
var ms = d.getTime()
var min = ms/minutes
document.write(`Current Date: ${d}<br>Elapsed milliseconds since January 1, 1970: ${ms}<br>Elapsed minutes since January 1, 1970: ${min}`)

//Task 7

//Task 8
var d = new Date()
var laterDate = new Date(d.getFullYear(),d.getMonth(),0)
document.write(`Later date: ${laterDate}`)

//Task 9
var ramadan = new Date("18/05/2015")
var d = new Date()
var time = d.getTime() - ramadan.getTime()
var dy = time/(1000*3600*24)
document.write(dy+' days has passed since 1st Ramadan 2015')



//Chapter 35-38
//Task 1
function dateTimeNow(){
    var d = new Date()
    alert(d)
}
dateTimeNow()

//Task 2
function fullName(firstname, lastname){
    alert('Aslamualikum '+firstname+' '+lastname)
}
fullName('Ahmed','Raza')

//Task 3
function addNo (no1,no2) {
    alert(`${no1} + ${no2} = ${no1+no2}`)
}
var noOne =Number( prompt('1st No:'))
var noTwo = Number(prompt('2nd No'))
addNo(noOne,noTwo)

//Task 4
function calculator(firstNo,secNo,operator){
    var result
    if(operator=='+'){
        result = firstNo+secNo
    } else if(operator=='-'){
        result = firstNo-secNo
    }else if(operator=='/'){
        result = firstNo/secNo
    }else if(operator=='%'){
        result = firstNo%secNo
    }else if(operator=='*'){
        result = firstNo*secNo
    }
    document.write(`${firstNo} ${operator} ${secNo} = ${result}`)

}
var Fno =Number(prompt('Write First No:'))
var Lno =Number(prompt('Write Last No:'))
var Op =(prompt('Operator:'))
calculator(Fno,Lno,Op)


//Task 5
function square (no){
    alert(`Square of ${no} is ${Math.pow(no,2)}`)
}
var numb = Number(prompt('Write a no:'))
square(numb)

//Task 6
function factorial (no){
    var result = no
    for (let i = 1; i < no; i++) {
        result= result*i
    }
    alert(`Factorial: ${result}`)
}
var fact = Number(prompt('Write a no:'))

factorial(fact)

//Task 7
function counting (start, end){
    var strt = start
    for (let i = start; i <= end; i++) {
         
      document.write(strt+'<br>')
      strt+= 1
       
    }
}
var startNo = Number(prompt('Conting starts with:'))
var endNo = Number(prompt('Conting ends with:'))
counting(startNo,endNo)

//Task 8
function calculateSquare(numbr){
    return Math.pow(numbr,2)
}
function calculateHypotenuse(base, perp){
    return (calculateSquare(base) + calculateSquare(perp))

}
var Base = Number(prompt('Write base value:'))
var Perp =  Number(prompt('Write perpendicular value:')) 
alert(`H^2 = ${calculateSquare(Base,Perp)}`)

//Task 9
function areaRectange(width,height){
    alert(`Area of rectange: ${width*height}`)

}
//i 
areaRectange(2,8)
//ii
var Height = 5
var Width = 9
areaRectange(Width,Height)

//Task 10
var word = prompt('Write a word')
function palindrome(wrd){
 var lett = wrd.toLowerCase()
 var RevLett = lett.split('').reverse().join('')
  if(lett==RevLett){
      alert('Its palindrome')
  } else{
      alert('Its not palindrome')
  }
}
palindrome(word)

//Task 11
var strg = prompt('Write a sentence:')
function TitleCase(stri){
    var st = stri.split(' ')
    for (let i = 0; i < st.length; i++) {
            st[i]=st[i][0].toUpperCase()+st[i].slice(1,).toLowerCase()
        }
    return st.join(' ')

}
document.write(`Given string: ${strg}<br>Title Case: ${TitleCase(strg)}`)


//Task 12
var sen =prompt('Write a sentence:')
var sent = sen.split(' ')
function LongestWord(sente) {

    var longWord = sente[0]
    for (let i = 0; i < sente.length; i++) {
        if(sente[i].length>longWord.length){
            longWord = sente[i]
        }
        
    }
    return longWord
    
}
document.write(`String: ${sen}<br>Long word in a string:${LongestWord(sent)}`)

//Task 13
var str = prompt('Write a string:').toLowerCase()
var ch = prompt('Write a word to count occurance:')

function occurance(str,ch){
var cnt = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i]==ch){
            cnt += 1
        }
    
    }
alert(cnt)

}
occurance(str,ch)

//Task 14
function calcCircumference(r){
    return Math.round(2*Math.PI*r)
}
function calcArea(r){
    return Math.round( Math.PI*(Math.pow(r,2)))
}
var radius = Number(prompt('Radius of a circle:'))
document.write(`Circumference of a circle is: ${calcCircumference(radius)}<br>Area of a circle is: ${calcArea(radius)}`)






                //Chap 38-42
        //Task 1
function pwr(a,b){
    alert( Math.pow(a,b))
}
var ftVal = Number(prompt("write base value"))
var sdVal = Number(prompt("write base value"))
pwr(ftVal,sdVal)

        //Task 2
var lY = Number(prompt('Write a year'))
if(lY%4 == 0){
    alert('It is leap year')
}else{
    alert('It is not a leap year')
}       
         //Task 3
function S(a,b,c){
    return (a+b+c)/2
}
function AreaOfTriangle(S,a,b,c){
    var ans =  S*(S-a)*(S-b)*(S-c)
    alert('Area of traingle is: '+ans)
}

var valA = Number(prompt("Write the length of 1st side:"))
var valB = Number(prompt("Write the length of 2nd side:"))
var valC = Number(prompt("Write the length of 3rd side:"))
var valS = S(valA,valB,valC)
AreaOfTriangle(valS,valA,valB,valC)       
                
             //Task 4   
 var marksOne = Number(prompt('Write marks of subject 1 out of 10'))
var marksTwo = Number(prompt('Write marks of subject 2 out of 10'))
var marksThree = Number(prompt('Write marks of subject 3 out of 10'))
function percentage(a,b,c){
    return ((a+b+c)/30)*100
}
function average(a,b,c)
{
    return (a+b+c)/3
}

function mainFunction(){
alert('Percentage: '+percentage(marksOne,marksTwo,marksThree)+"\n"+'Averge: '+average(marksOne,marksTwo,marksThree))
}

mainFunction()

            //Task 5
function findIndex(strin,chara){
    var index;
    if(chara.length > 1){
        alert('Character should be given')
    }else{
    for (let i = 0; i < strin.length ; i++) {
        if(strin[i]== chara){
            index = i
            break
        } else {
            index = NaN
        }
        
    }
}
 return index
}

var param1 = prompt('Write a string:')
var para2 = prompt('Write a character you want to find index:')
alert(findIndex(param1,para2))

            //Task 6
function vowelRemover(p1){
    var arrr =p1.split('')
    for (let i = 0; i < arrr.length; i++) {
        if(arrr[i]=='a'||arrr[i]=='e'||arrr[i]=='i'||arrr[i]=='o'||arrr[i]=='u')
        {
            arrr[i]=''
        }
    }
    return arrr.join('')
}

var in1 = prompt('Write a sentence')
alert(vowelRemover(in1))

            //Task 7.
var avov = prompt("Write a line:")
var vov = avov.split('')
var cnt = 0
for (let i = 0; i < vov.length; i++) {
    switch(vov[i]){
        case 'a':
            cnt+=1;
        case 'e':
            cnt+=1;
        case 'i':
            cnt+=1;
        case 'o':
            cnt+=1;
        case 'u':
            cnt+=1;
        
        }
    
}
alert(cnt)
            //Task 8
var km = Number(prompt('Write a distance between two cities in KM"'))
function meters(km){
    return km*1000
}
function feet(km){
    return km*3281

}
function inches(km){
    return km*39370

}
function centimeter (km){
    return km*100000
}

alert(km + 'To' + meters(km) + 'Meters \n' + km + 'To' + feet(km) + 'Feet \n' +km + 'To' + inches(km) + 'Inches \n' +km + 'To' + centimeter(km) + 'centieters ' )

                //Task 9

                
                //Chap 43-48
        //Task 1
<a href="" onclick="alert('Hello You click on a link')">Im a link click on me</a>
        
        //TAsk 2
{/* <h1>Latest Mobile</h1>
<img src="img/m1.jpg" alt="Mobile 1" onclick="mob()" style="height:200px; cursor: pointer;">
<img src="img/m2.png" alt="Mobile 2" onclick="mob()" style="height:200px; cursor: pointer;">
<img src="img/m3.jpg" alt="Mobile 3" onclick="mob()" style="height:200px; cursor: pointer;">
    <script src="app.js"></script> */}
    function mob(){
        alert('Thanks For purchasing')
    }

        //Task 3
/* <center>
        <table>
            <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Class</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>Raza</td>
                <td>10</td>
                <td><input type="button" class="delete" value="Delete"  ></td>
            </tr>
            <tr>
             <td>2</td>
             <td>Shafiq</td>
             <td>18</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>3</td>
             <td>Rafiq</td>
             <td>12</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>4</td>
             <td>Khan</td>
             <td>9</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>5</td>
             <td>Noman</td>
             <td>7</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>6</td>
             <td>Aqib</td>
             <td>11</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>7</td>
             <td>Arsalan</td>
             <td>13</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>8</td>
             <td>Anas</td>
             <td>8</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>9</td>
             <td>Ashan</td>
             <td>15</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
            <tr>
             <td>10</td>
             <td>Anshar</td>
             <td>16</td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
        </table>
     </center> 
     <script src="app.js"></script> */
var delet =document.getElementsByClassName('delete')
for (let i = 0; i < delet.length; i++) {
    var button = delet[i]
    button.addEventListener('click',del)
    
}


function del(event){
    var btn = event.target
    btn.parentElement.parentElement.remove()
}

 //Task 4
{/* <img id='pic' src="img/i1.png" style="height: 500px" onmouseover="chngpic()" onmouseout="undopic()" alt=""></img>
 <script src="app.js"></script> */}
 function chngpic(){
    document.getElementById('pic').src = 'img/i2.png'
}
function undopic(){
    document.getElementById('pic').src = 'img/i1.png'
}

        //Task 5
{/* <center>
 <input type="button" value="+" id="inc">
 <input type="number" id="counter" disabled>
 <input type="button" value=" - " id="dec">
</center>
<script src="app.js"></script> */}
var incBTN = document.getElementById('inc')
var decBTN = document.getElementById('dec')
var counter = document.getElementById('counter')
var count = 0
incBTN.addEventListener('click',increase)
decBTN.addEventListener('click',decrease)
function increase(){
    count += 1
    counter.value = count
}
function decrease(){
    count -= 1
    counter.value = count
}

                //Chap 49-52
        //Task 1
/* <center>
<form action="">
    <label for="firstname">First Name</label>
    <input type="text" name="fn" id="firstname"><br>
    <label for="lastname">Last Name</label>
    <input type="text" name="ln" id="lastname"><br>
    <label for="FatherName">Father Name</label>
    <input type="text" name="ftn" id="FatherName"><br>
    <label for="email">Email</label>
    <input type="email" name="email" id="email"><br>
    <input type="button" value="Sign In" id="signinbtn" onclick="signIn()">

</form> 
<p id="FN"></p>
<p id="LN"></p>
<p id="FTN"></p>
<p id="EML"></p>
</center>
 <script src="app.js"></script> */

 var FirstName 
 var LastName 
 var FatherName 
 var Email 
function signIn (){
   FirstName = document.getElementById('firstname').value
   LastName = document.getElementById('lastname').value
   FatherName = document.getElementById('FatherName').value
  Email = document.getElementById('email').value
   document.getElementById('FN').innerHTML = FirstName
   document.getElementById('LN').innerHTML = LastName
   document.getElementById('FTN').innerHTML = FatherName
   document.getElementById('EML').innerHTML = Email

}

        //Task 2
/* <center>
    <p style="height: 40px; overflow: hidden;" id="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores odit ratione natus eius repellat adipisci, quo, illum temporibus officia ducimus! Sequi voluptate suscipit commodi officiis, molestiae aut saepe explicabo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio commodi nemo totam incidunt ipsa neque sit, qui a error reprehenderit? Necessitatibus deserunt animi provident aliquam qui dicta tempora aperiam voluptatum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam, cumque, facilis consectetur ullam dolores quis neque animi nihil quidem eos illum rerum labore soluta dolorum eaque necessitatibus natus provident!
        
    </p>
    <input type="button" value="Read More"  onclick="ReadMore()">
    </center>
 <script src="app.js"></script> */
 function ReadMore(){
    var para =document.getElementById('para')
     para.style.overflow = 'visible'
     para.style.height = '100%'}


        //Task 3
{/* <center>
        <table>
            <tr>
             
                <th>Name</th>
                <th>Class</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
              
                <td><input type="text" value="Raza" onmouseout="mouseout()" id="nameInput" disabled></td>
                <td><input type="number" value="10" id="noInput" disabled></td>
                <td><input type="button" class="edit" value="Edit"  ></td>
            
                <td><input type="button" class="delete" value="Delete"  ></td>
            </tr>
            
            <tr>
             
             <td>Shafiq</td>
             <td>18</td>
             <td><input type="button" class="edit" value="Edit"  ></td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
          
        </table>
     </center> 
     */}



        var delet =document.getElementsByClassName('delete')
        var editt = document.getElementsByClassName('edit')
        for (let i = 0; i < delet.length; i++) {
            var button = delet[i]
            button.addEventListener('click',del)
            
        }
        for (let i = 0; i < editt.length; i++) {
            var button = editt[i]
            button.addEventListener('click',edit)
            
        }
        
        function del(event){
            var btn = event.target
            btn.parentElement.parentElement.remove()
        }
        function edit(event){
         var btn = event.target
         console.log(btn.parentElement.parentElement.childNodes[1].childNodes[0].disabled = false)
        }
     




            // Chap 53-58
        //Task 1
{/* 
<head>
    <style>
        .image{
            width:300px 
        }
        #model{
            position: relative;
            background-color: #0000005c;
          
            display: none;
         
        }
        #model img{
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 800px;
        }
        #main{
            position: absolute;
            
        }
    </style>
</head>
<body>

<div id="main">

</div>
<div id = "model">
    <button onclick="removeModel()" >Close</button>
    <img src="" >
    
</div>
<script src="app.js"></script> */}

var source = ['img/1.jpg','img/3.jpg','img/4.png']
var mn =  document.getElementById('main')
var mdl = document.getElementById('model')
for (let i = 0; i < source.length; i++) {
    var img = document.createElement('img')
    img.setAttribute("src",source[i])
    img.setAttribute("class",'image')
    img.setAttribute('onclick', "imgCliked(this)")
    mn.appendChild(img)   
}
function imgCliked(a){
    var s = a.src
    mdl.style.display = 'block'
    mdl.childNodes[3].src = s
}
function removeModel(){
    mdl.style.display = ' none'
}



        //Task 2
{/* <p id="para">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint atque saepe dolore doloribus possimus voluptatibus quisquam adipisci maxime iusto blanditiis voluptatum, nam dolorum provident quam? Repellat cupiditate doloribus ex!Loremlore
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, et. Repudiandae voluptas omnis sequi natus. Enim animi doloribus omnis officiis dolores. Odit ducimus laboriosam aut architecto tempora nemo nulla? Nostrum!Lorem

</p>
<button onclick= 'ZoomIn()'>+</button>
<button onclick="ZoomOut()">-</button>
<script src="app.js"></script> */}


var para = document.getElementById('para')
var size =16
function ZoomIn(){
    size += 10
    para.style.fontSize = size+'px'
}
function ZoomOut(){
    size -= 10
    para.style.fontSize = size+'px'
}        


            // Chap 58-67
        // Task 1
// i
var main_cont = document.getElementById("main-content")
//ii
console.log(main_cont.children)

//iii
var rend = document.getElementsByClassName('render')

for (let i = 0; i < rend.length; i++) {
    console.log(rend[i].innerHTML)
}

//iv
document.getElementById('first-name').value = 'Muhammad'

//v
document.getElementById('last-name').value = 'Raza'
document.getElementById('email').value = 'Raza@mail.com'

        //Task 2
// i
var form_cont = document.getElementById("form-content")
console.log(form_cont.nodeType)

// ii 
var LN = document.getElementById('lastName')
console.log(LN.nodeType)
console.log(LN.childNodes[0].nodeType)

//iii
console.log(LN.childNodes[0] = 'Last Name = Zender')

//iv 
console.log(main_cont.firstChild)
console.log(main_cont.lastChild)

//v
console.log(LN.nextSibling)
console.log(LN.previousSibling)
//vi
var ml = document.getElementById('email')
console.log(ml.parentNode)
console.log(ml.nodeType)