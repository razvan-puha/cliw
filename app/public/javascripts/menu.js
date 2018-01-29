function removeCheckedCheckBox()
{
    var checkbox = document.getElementById('toggleMenu');
    console.log("Is checked? " + checkbox.checked);
    if(checkbox.checked)
    {
        checkbox.checked = false;
        hideMenu();
    }
}

function showMenu()
{
    var checkbox = document.getElementById('toggleMenu');
    if(checkbox.checked)
    {
        makeMenuVisible();	
    }
    else
    {
        hideMenu();
    }
}

function makeMenuVisible()
{
    var menu 			= document.getElementById("menu");
    console.log(menu.style.left);
    menu.style.marginTop = 0;
    menu.style.left	 	= 0;
    menu.style.zIndex	= 2;
    console.log(menu.style.left);
}

function hideMenu()
{
    var menu 			= document.getElementById("menu");
    console.log(menu.style.left);
    menu.style.left	 	= "-250px";
    console.log(menu.style.left);
}