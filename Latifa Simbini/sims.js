//SIMBINI LATIFA
//Make a JavaScript program that checks two numbers and returns true if one of the numbers is 65 or if their sum is 65.
function  check(){
var num1 = prompt("enter num1");
var num2= prompt("enter num2");
var sum;
sum = num1 + num2;
	if (num1 == 65 || num2 == 65 || sum == 65){
alert("we have a 65");
return true;
		
	}
else 
{  alert("no we dont");
return false};
	
	
};


//Make a JavaScript program that returns the area of a triangle where the lengths of its three sides are 7, 8, 9.

function areaOfTriangle(){
var a = 7;
var b = 8;
var c = 9;

var semi;
var area;
var root;


semi = 0.5 *( a + b +c);
root = (semi * (semi - a) *(semi - b) * (semi - c));
area = Math.sqrt(root);
alert("area of a triangle with side of 7,8,9 is: " + area);

 return area ;
};


//Make a JavaScript program that returns the largest of three numbers. Bonus points: allow the user to provide 3 numbers and your program will return the largest of the three.
function largestNumber(){
	var num1;
	var num2;
	var num3;
	
	num1 = prompt("enter the first number");
	num2 = prompt("enter the second number");
	num3 = prompt("enter the third number");
	var largest;
	
	if(num1>num2 && num1>num3)
				{
			largest = num1;
				}
				else if(num2>num1 && num2>num3)
				{
					largest = num2;
				}
				else if(num3>num1 && num3>num1)
				{
					largest = num3;
				}
				alert("highest number is: " + largest) ;
				
  return largest;
};


//Make a JavaScript program to convert any number into hours and minutes. (For example, 71 will become 1 hour, 11 minutes; 133 will become 2 hours, 13 minutes.)
function convert(){
var num = prompt("enter number");
	var hours;
	var min;
	
	hours = num /60;
	min = num % 60;
	
	alert(num + " is equal to  " + hours + "  hours and  " + min + " minutes ");
	
	return hours;
};

function common(){
var s1 = prompt("enter fist word");
var s2 = prompt("enter second word");

var arr1 = s1.split("");
var arr2 = s2.split("");
var arr3 = [];

for(var i = 0;i < s1.length;i++){
for(var j = 0;j<s2.length; j++){
if(s1[i] == s2[j]){
arr3.push(s1[1]);}
}
};
alert("common characters are: " + arr3);

return arr3;
};
	
