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
