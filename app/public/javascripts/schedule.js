function createSchedule()
{
    var containerDiv = document.getElementById("schedule");
    // create a new table tag and append it to the div container
    var mainTable    = createHTMLTag("table");
    mainTable.setAttribute("id","mainTable");
    containerDiv.appendChild(mainTable);

    // create the content for the table
    var tHead = createHTMLTag("thead");
    var header = createHTMLTag("th");
    header.setAttribute("id","mainHeader");
    appendNodeValue(header,"MySchedule");
    tHead.appendChild(header);
    mainTable.appendChild(tHead);

    var tBody       = createHTMLTag("tbody");
    var innerTable  = createHTMLTag("table");
    innerTable.setAttribute("id","innerTable");
    tBody.appendChild(innerTable);
    mainTable.appendChild(tBody);
    
    populateScheduleTable(innerTable);
}

// Helper functions
function createHTMLTag(tagName)
{
    var htmlTag = document.createElement(tagName);
    return htmlTag;
}

function appendNodeValue(tag, nodeValue)
{
    var newValue;
    var textNode;
    if(nodeValue.length >= 20)
    {
        newValue = nodeValue.slice(0,17) + "...";
        textNode = document.createTextNode(newValue);
    }
    else
        textNode = document.createTextNode(nodeValue);

    if(tag.textContent.length != 0)
    {
        // it means that we have already something there ...
        var newline = createHTMLTag("br");
        tag.appendChild(newline);
        tag.appendChild(textNode);
    }
    else
        tag.appendChild(textNode);
}

function populateScheduleTable(table)
{
    // create the header with the week days
    var tHead = createHTMLTag("thead");
    appendDaysHeaders(tHead);
    table.appendChild(tHead);

    var tBody = createHTMLTag("tbody");
    table.appendChild(tBody);
    createScheduleTableRow(tBody,"8",1);
    createScheduleTableRow(tBody,"10",2);
    createScheduleTableRow(tBody,"12",3);
    createScheduleTableRow(tBody,"14",4);
    createScheduleTableRow(tBody,"16",5);
    createScheduleTableRow(tBody,"18",6);
}

function appendDaysHeaders(tableHeader)
{
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for(i=0; i<days.length; i++)
    {
        var header = createHTMLTag("th");
        header.setAttribute("id","innerTableHeaderCell");
        header.setAttribute("class", "innerTableHeaderCell" + (i+1));
        appendNodeValue(header,days[i]);
        tableHeader.appendChild(header);
    }
}

function createScheduleTableRow(bodyContainer,innerHeaderInfo,rowNumber)
{
    var tableRow = createHTMLTag("tr");
    bodyContainer.appendChild(tableRow);

    for(i=0; i<7; i++) // for each day of the week, we'll create a new schedule cell
    {
        var tData       = createHTMLTag("td");    
        var innerTable  = createHTMLTag("table");
        innerTable.setAttribute("id","scheduleCell");
        tData.appendChild(innerTable);
        tableRow.appendChild(tData);

        var thead       = createHTMLTag("thead");
        var header      = createHTMLTag("th");
        header.setAttribute("class","scheduleCellHeader");
        header.setAttribute("id","scheduleCellHeader" + (i+1) + "_" + rowNumber);
        header.setAttribute("colspan","2");
        appendNodeValue(header,innerHeaderInfo);
        thead.appendChild(header);
        innerTable.appendChild(thead);

        var tBody       = createHTMLTag("tbody");
        var bodyRow     = createHTMLTag("tr");
        bodyRow.setAttribute("id","scheduleCellDataRow" + (i+1) + "_" + rowNumber);
        var bodyRowData = createHTMLTag("td");
        bodyRowData.setAttribute("class","scheduleCellData");
        bodyRowData.setAttribute("id","scheduleCellData" + "_1_" + (i+1) + "_" + rowNumber);

        var bodyRowData2 = createHTMLTag("td");
        bodyRowData2.setAttribute("class","scheduleCellData");
        bodyRowData2.setAttribute("id","scheduleCellData" + "_2_" + (i+1) + "_" + rowNumber);

        if(Math.random() * i >= 2.25)
        {
            bodyRowData.addEventListener('click',viewScheduleItem);
            populateCellData(bodyRowData);
            populateCellData2(bodyRowData2);

            bodyRow.appendChild(bodyRowData);            
            bodyRow.appendChild(bodyRowData2);
            tBody.appendChild(bodyRow);
        }
        else
        {
            bodyRowData.addEventListener('click',addScheduleItem);
            var unusedDiv = createHTMLTag("div");
            unusedDiv.setAttribute("class","unused");
            unusedDiv.setAttribute("id","unusedCellData" + (i+1) + "_" + rowNumber);

            bodyRowData.appendChild(unusedDiv);
            bodyRow.appendChild(bodyRowData);
            tBody.appendChild(bodyRow);
        }

        innerTable.appendChild(tBody);
    }
}

function populateCellData(container)
{
    // var divContainer = createHTMLTag("div");
    // divContainer.setAttribute("id","used");

    // var par1 = createHTMLTag("p");
    appendNodeValue(container,"Pedagogie II (Teoria si metodologia instruirii + Teoria si metodologia evaluarii)");
    // var par2 = createHTMLTag("p");
    appendNodeValue(container,"--Seminar--");

    // divContainer.appendChild(par1);
    // divContainer.appendChild(par2);
    // container.appendChild(divContainer);
}

function populateCellData2(container)
{
    var divContainer = createHTMLTag("div");
    divContainer.setAttribute("onclick","viewDetailedInformations()");
    appendNodeValue(divContainer,"Dezvoltarea aplicatiilor Web la nivel de client");
    appendNodeValue(divContainer,"--Seminar--");

    container.appendChild(divContainer);
}


// to implement
function addScheduleItem(event)
{
    // HOW TO DO: incercam sa aflam ziua si ora pentru celula in care a fost facut click,
    // iar cu informatiile acestea incercam sa populam tabelul cu sugestii de completare

    // 1. Unhide the page
    document.getElementById("overlayAdd").style.top = 0;
	document.getElementById("overlayAdd").style.bottom = 0;
}

function cancelAddScheduleItem()
{
    document.getElementById("overlayAdd").style.top = "-100%";
	document.getElementById("overlayAdd").style.bottom = "200%";
}

function viewScheduleItem(event)
{
    event = event || window.event;
    var target  = event.target || event.srcElement,
        text    = target.textContent || text.innerText;

    // Start collecting the informations
    // 1. Find the start hour and compute the end hour
    var startHour = findStartHour(target);
    document.getElementById("scheduleItemStartHourInput").setAttribute("value",startHour);
    document.getElementById("scheduleItemEndHourInput").setAttribute("value",parseInt(startHour) + 2);

    
    console.log('set on click event to delete button...');
    // n. set the onclick event to the delete button
    document.getElementById("deleteButton").addEventListener('click', function(){
        deleteScheduleItem(target.cloneNode(true));
    });

    // un-hide the page
    document.getElementById("overlayEdit").style.top = 0;
	document.getElementById("overlayEdit").style.bottom = 0;
}

function cancelViewDetailedInformations()
{
    document.getElementById("overlayEdit").style.top = "-100%";
	document.getElementById("overlayEdit").style.bottom = "200%";
}

function deleteScheduleItem(target)
{
    var targetId = target.getAttribute("id");
    var rowAndIndexColumn = targetId.slice(targetId.length - 3);
    var tableRow = document.getElementById("scheduleCellDataRow" + rowAndIndexColumn);

    var childs = Array.prototype.slice.call(tableRow.childNodes);
    for(i = 0; i < childs.length; i++)
    {
        if(childs[i].getAttribute("id") === targetId)
        {
            console.log("removing child: " + childs[i]);
            tableRow.removeChild(childs[i]);
        }
    }

    childs = Array.prototype.slice.call(tableRow.childNodes);
    console.log("left childs size: " + childs.length);
    if(childs.length === 0)
    {
        // create a new cell with class unused
        console.log("Creating a new table data...");
        var rowData = createHTMLTag("td");
        rowData.setAttribute("class","scheduleCellData");
        rowData.addEventListener('click',addScheduleItem);
        var unusedDiv = createHTMLTag("div");
        unusedDiv.setAttribute("class","unused");
        unusedDiv.setAttribute("id","unusedCellData" + rowAndIndexColumn);

        rowData.appendChild(unusedDiv);
        tableRow.appendChild(rowData);
        console.log("Data created and appended to the row.");
    }

    // hide the page
    cancelViewDetailedInformations();
}


function findStartHour(target)
{
    // get the row and column index from target, then search the proper column
    var targetId = target.getAttribute("id");
    var rowAndIndexColumn = targetId.slice(targetId.length - 3);
    var element = document.getElementById("scheduleCellHeader" + rowAndIndexColumn);
    return element.textContent;
}