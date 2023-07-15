var p=document.getElementsByClassName("title");
p[0].style.fontWeight="bold";
p[0].style.backgroundColor="green";
var s=document.getElementsByClassName("list-group-item");
for(let i=0;i<s.length;i++)
    {
        s[i].style.fontWeight="bold";
    }
s[2].style.backgroundColor="green";
var m=document.querySelectorAll(".list-group-item");
m[1].style.backgroundColor="green"
m[2].style.visibility = "hidden";
for(let i=0;i<m.length;i++)
    {
        if(i%2===0)
        {
            m[i].style.backgroundColor="green";
        }
    }
var itemlist1=document.querySelector('#items');
//1-parent node or parentname is just same just only change syntax
//itemlist1.parentNode.style.backgroundColor="blue";
itemlist1.parentElement.style.backgroundColor="yellow";
//2-lastelementchild
itemlist1.lastElementChild.style.backgroundColor="blue";
//3-Lastchild
console.log(itemlist1.lastChild);


//5-firstelementchild
itemlist1.firstElementChild.style.backgroundColor="orange";
//6-firstchild
console.log(itemlist1.firstChild);
//7-nextsbiling
console.log(itemlist1.nextSibling);
//8-nextelementsibiling
console.log(itemlist1.nextElementSibling);
//9-previoussibiling
console.log(itemlist1.previousSibling);
//10-previouselemnetsibiling
itemlist1.previousElementSibling.textContent="Awesome create";
itemlist1.previousElementSibling.style.color="green";
//11-createelement
var newdiv1=document.createElement('div');
//12-set attribute
//1-class attribute add
newdiv1.className="hello";
//2-id attribute add
newdiv1.id="hello1";
//3-setattribute
newdiv1.setAttribute('title','vo');
//13-createtextnode
var newdivtext1=document.createTextNode('hello ji');
newdiv1.appendChild(newdivtext1);
//14-addinng into dom
var con=document.querySelector('header .container');
var h1=document.querySelector('header h1');
con1.insertbefore(newdiv,h1);
