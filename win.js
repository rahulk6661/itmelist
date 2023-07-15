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
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var editbutton=document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//edit event
editbutton.addEventListener('click',edititem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
//create edit button element
  var editbtn=document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//add class to edit button
  editbtn.className='btn btn-danger btn-sm float-right edit';
  // Append text node
  deleteBtn.appendChild(document.createTextNode("delete"));
// append text node
  editbtn.appendChild(document.createTextNode("edit"));
  // Append button to li
  li.appendChild(deleteBtn);
   //append button to li
  li.appendChild(editbtn);
  // Append li to list
  itemList.appendChild(li);
  editbutton.appendChild(li);
}
//edit item
function edititem(e)
{
  if(e.target.classList.contains('edit'))
    {
      if(confirm('you want edit?'))
                 {
                 var li = e.target.parentElement.textContent;
                 li.contentEditable=true;
          
                 }
    }
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
