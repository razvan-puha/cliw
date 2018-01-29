function loadDynamicRegisterForm()
{
    var e       = document.getElementById("account_type_select");
    var strUser = e.value;
    if(strUser === 'student')
        loadStudentRegistrationForm();
    else if(strUser === 'proffesor')
        loadProffesorRegistrationForm();
}

function loadStudentRegistrationForm()
{
    var formItem            = document.getElementById("form-item-right");
    clearTag(formItem);

    // form item for type of study: Undergraduate / Master
    var studyTypeFormItem   = createHTMLTag("div");
    studyTypeFormItem.setAttribute("class","form-item");
    
    var studyTypeLabel      = createHTMLTag("label");
    studyTypeLabel.setAttribute("for","type_of_study");
    
    var studyTypeSpan       = createHTMLTag("span");
    studyTypeSpan.setAttribute("class","required");
    studyTypeSpan.setAttribute("id","type_of_study");
    appendNodeValue(studyTypeSpan," Type of study:");
    
    var studyTypeSelect     = createSelectTag(["Undergraduate","Master"]);
    studyTypeSelect.setAttribute("id","type_of_study_select");
    studyTypeSelect.setAttribute("name","type_of_study");
    studyTypeSelect.setAttribute("onchange","loadFormForStudyType()");
    
    formItem.appendChild(studyTypeFormItem);
    studyTypeFormItem.appendChild(studyTypeLabel);
    studyTypeLabel.appendChild(studyTypeSpan);
    studyTypeLabel.appendChild(studyTypeSelect);
    loadUndergraduateRegistrationForm();
}

function loadProffesorRegistrationForm()
{
    var formItem            = document.getElementById("form-item-right");
    clearTag(formItem);

    // form item for proffesor name
    var nameFormItem    = createHTMLTag("div");
    nameFormItem.setAttribute("class","form-item");
    
    var nameLabel       = createHTMLTag("label");
    nameLabel.setAttribute("for","name");
    
    var nameSpan        = createHTMLTag("span");
    nameSpan.setAttribute("class","required");
    nameSpan.setAttribute("id","name");
    appendNodeValue(nameSpan," Name:");
    
    var nameInput       = createHTMLTag("input");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("id","name_input");
    nameInput.setAttribute("name","name");
    nameInput.setAttribute("value","");
    nameInput.setAttribute("placeholder","Name...");
    nameInput.setAttribute("required","required");

    
    formItem.appendChild(nameFormItem);
    nameFormItem.appendChild(nameLabel);
    nameLabel.appendChild(nameSpan);
    nameLabel.appendChild(nameInput);

    // form item for proffesor surname
    var surnameFormItem    = createHTMLTag("div");
    surnameFormItem.setAttribute("class","form-item");
    
    var surnameLabel       = createHTMLTag("label");
    surnameLabel.setAttribute("for","surname");
    
    var surnameSpan        = createHTMLTag("span");
    surnameSpan.setAttribute("class","required");
    surnameSpan.setAttribute("id","surname");
    appendNodeValue(surnameSpan," Surname:");
    
    var surnameInput       = createHTMLTag("input");
    surnameInput.setAttribute("type","text");
    surnameInput.setAttribute("id","surname_input");
    surnameInput.setAttribute("name","surname");
    surnameInput.setAttribute("value","");
    surnameInput.setAttribute("placeholder","Surname...");
    surnameInput.setAttribute("required","required");

    
    formItem.appendChild(surnameFormItem);
    surnameFormItem.appendChild(surnameLabel);
    surnameLabel.appendChild(surnameSpan);
    surnameLabel.appendChild(surnameInput);
}

function loadFormForStudyType()
{
    var e       = document.getElementById("type_of_study_select");
    var strUser = e.value;
    if(strUser === 'undergraduate')
        loadUndergraduateRegistrationForm();
    else if(strUser === 'master')
        loadMasterRegistrationForm();
}

function loadUndergraduateRegistrationForm()
{
    var formItem            = document.getElementById("form-item-right");
    clearTagChildsExceptFirst(formItem);

    // form item for study year
    var studyYearFormItem   = createHTMLTag("div");
    studyYearFormItem.setAttribute("class","form-item");

    var studyYearLabel      = createHTMLTag("label");
    studyYearLabel.setAttribute("for","year_of_study");

    var studyYearSpan       = createHTMLTag("span");
    studyYearSpan.setAttribute("class","required");
    studyYearSpan.setAttribute("id","year_of_study");
    appendNodeValue(studyYearSpan," Year of Study:");

    var studyYearSelect     = createSelectTag(["1","2","3"]);
    studyYearSelect.setAttribute("id","year_of_study_select");
    studyYearSelect.setAttribute("name","year_of_study");

    formItem.appendChild(studyYearFormItem);
    studyYearFormItem.appendChild(studyYearLabel);
    studyYearLabel.appendChild(studyYearSpan);
    studyYearLabel.appendChild(studyYearSelect);

    // form item for semi year
    var semiYearFormItem   = createHTMLTag("div");
    semiYearFormItem.setAttribute("class","form-item");

    var semiYearLabel      = createHTMLTag("label");
    studyYearLabel.setAttribute("for","semi_year");

    var semiYearSpan       = createHTMLTag("span");
    semiYearSpan.setAttribute("class","required");
    semiYearSpan.setAttribute("id","semi_year");
    appendNodeValue(semiYearSpan," Semi Year:");

    var semiYearSelect     = createSelectTag(["A","B"]);
    semiYearSelect.setAttribute("id","semi_year_select");
    semiYearSelect.setAttribute("name","semi_year");

    formItem.appendChild(semiYearFormItem);
    semiYearFormItem.appendChild(semiYearLabel);
    semiYearLabel.appendChild(semiYearSpan);
    semiYearLabel.appendChild(semiYearSelect);

    // form item for group number
    var groupFormItem   = createHTMLTag("div");
    groupFormItem.setAttribute("class","form-item");

    var groupLabel      = createHTMLTag("label");
    groupLabel.setAttribute("for","group");

    var groupSpan       = createHTMLTag("span");
    groupSpan.setAttribute("class","required");
    groupSpan.setAttribute("id","group");
    appendNodeValue(groupSpan," Group:");

    var groupSelect     = createSelectTag(["1","2","3","4","5","6","7"]);
    groupSelect.setAttribute("id","group_select");
    groupSelect.setAttribute("name","group");

    formItem.appendChild(groupFormItem);
    groupFormItem.appendChild(groupLabel);
    groupLabel.appendChild(groupSpan);
    groupLabel.appendChild(groupSelect);
}

function loadMasterRegistrationForm()
{
    var formItem            = document.getElementById("form-item-right");
    clearTagChildsExceptFirst(formItem);

    // form item for study year
    var studyYearFormItem   = createHTMLTag("div");
    studyYearFormItem.setAttribute("class","form-item");

    var studyYearLabel      = createHTMLTag("label");
    studyYearLabel.setAttribute("for","year_of_study");

    var studyYearSpan       = createHTMLTag("span");
    studyYearSpan.setAttribute("class","required");
    studyYearSpan.setAttribute("id","year_of_study");
    appendNodeValue(studyYearSpan," Year of Study:");

    var studyYearSelect     = createSelectTag(["1","2"]);
    studyYearSelect.setAttribute("id","year_of_study_select");
    studyYearSelect.setAttribute("name","year_of_study");

    formItem.appendChild(studyYearFormItem);
    studyYearFormItem.appendChild(studyYearLabel);
    studyYearLabel.appendChild(studyYearSpan);
    studyYearLabel.appendChild(studyYearSelect);

    // form item for master domain
    var masterDomainFormItem   = createHTMLTag("div");
    masterDomainFormItem.setAttribute("class","form-item");

    var masterDomainLabel      = createHTMLTag("label");
    masterDomainLabel.setAttribute("for","master_domain");

    var masterDomainSpan       = createHTMLTag("span");
    masterDomainSpan.setAttribute("class","required");
    masterDomainSpan.setAttribute("id","master_domain");
    appendNodeValue(masterDomainSpan," Master Domain:");

    var masterDomainSelect     = createSelectTag(["Software Engineering","Computational Linguistics","Distributed Systems","Information Security"]);
    masterDomainSelect.setAttribute("id","master_domain_select");
    masterDomainSelect.setAttribute("name","master_domain");

    formItem.appendChild(masterDomainFormItem);
    masterDomainFormItem.appendChild(masterDomainLabel);
    masterDomainLabel.appendChild(masterDomainSpan);
    masterDomainLabel.appendChild(masterDomainSelect);
}

// Helper functions
function createHTMLTag(tagName)
{
    var htmlTag = document.createElement(tagName);
    return htmlTag;
}

function appendNodeValue(tag, nodeValue)
{
    var textNode = document.createTextNode(nodeValue);
    tag.appendChild(textNode);
}

function createSelectTag(optionArray)
{
    var select = createHTMLTag("select");
    for(i=0; i<optionArray.length; i++)
    {
        var option = createHTMLTag("option");
        option.setAttribute("value",optionArray[i].toLowerCase());
        appendNodeValue(option,optionArray[i]);
        select.appendChild(option);
    }

    return select;
}

function clearTag(tagName)
{
    while (tagName.firstChild) 
    {
        tagName.removeChild(tagName.firstChild);
    }
}

function clearTagChildsExceptFirst(tagName)
{
    var childs = Array.prototype.slice.call(tagName.childNodes);
    for(i = 1; i < childs.length; i++)
    {
        tagName.removeChild(childs[i]);
    }
}