/**
 * @param {Array} array 
 * @param {HTMLElement} thead 
 * @param {HTMLElement} tbody 
 * This simply renders the table using given parameters from the array
 */
function renderTable(array, thead, tbody){
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            thead.innerHTML = "";
            const trH = document.createElement('tr');
            thead.appendChild(trH);
            const th1 = document.createElement('th');
            trH.appendChild(th1);
            th1.innerHTML = array[i].nationality;
            const th2 = document.createElement('th');
            trH.appendChild(th2);
            th2.innerHTML = array[i].name;
            const th3 = document.createElement('th');
            trH.appendChild(th3);
            th3.innerHTML = array[i].work;
        } else {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            if (array[i].nationality != undefined) {
                const td1 = document.createElement('td');
                tr.appendChild(td1);
                td1.innerHTML = array[i].nationality;
                if (array[i + 1] != undefined && array[i + 1].nationality == undefined){
                    td1.rowSpan = 2;
                }
            }
            const td2 = document.createElement('td');
            tr.appendChild(td2);
            td2.innerHTML = array[i].name;
            const td3 = document.createElement('td');
            tr.appendChild(td3);
            td3.innerHTML = array[i].work;
        }
    }
}

/**
 * @param {HTMLElement} inputElement 
 * @param {String} inputErrorMessage 
 * @returns false if the inputElement's value is an empty string and true if it isn't
 * Also adds an error message to the empty div located under it, however the error message won't disappear no matter what I try,
 * so I'll just live with it. Kinda sadge
 */
function validateFormField(inputElement, inputErrorMessage){
    if (inputElement.value == ''){
        const parentElement = inputElement.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = inputErrorMessage;
        }
        return false;
    } else {
        return true;
    }
}

/**
 * @param {HTMLElement} inputNameElement 
 * @param {HTMLElement} inputWorkElement 
 * @returns false if one of the two inputs is an empty string and true if that's not the case
 * It uses the validateFormField above, so if they don't match it will always return false, however this also means
 * that the aforementioned issue of the error message being stuck there is still very much a problem
 */
function validateTwoWriters(inputNameElement, inputWorkElement){
    if (inputNameElement.value != '' && inputWorkElement.value == ''){
        return validateFormField(inputWorkElement, "Mind két mezőt ki kell tölteni!");
    } else if (inputNameElement.value == '' && inputWorkElement.value != '') {
        return validateFormField(inputNameElement, "Mind két mezőt ki kell tölteni!")
    }
    return true;
}

/**
 * Using no inputs whatsoever this is a self contained form generator meant to be only used ONCE, othewise it'll most break everything.
 * It also uses a different function to avoid massive amounts of code repetition
 */
function renderForm() {
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '';
    document.body.appendChild(form);

    formField(form, "text", "Származás:", "szarmazas")
    formField(form, "text", "1. szerző:", "szerzo1")
    formField(form, "text", "1. szerző műve:", "szerzo1mu")
    formField(form, "text", "2. szerző:", "szerzo2")
    formField(form, "text", "2. szerző műve:", "szerzo2mu")

    const button = document.createElement('button');
    button.innerHTML = "Hozzáadás";
    form.appendChild(button);
}

/**
 * @param {HTMLElement} form 
 * @param {String} type 
 * @param {String} labelText 
 * @param {String} id 
 * This is the thing that renderForm uses to avoid MASSIVE amounts of code repetition unlike rednerTable, which doesn't have any
 */
function formField(form, type, labelText, id){
    const mainDiv = document.createElement('div');
    form.appendChild(mainDiv);

    const label = document.createElement('label');
    label.for = id;
    label.innerHTML = labelText;
    mainDiv.appendChild(label);
    const br1 = document.createElement('br');
    mainDiv.appendChild(br1);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    mainDiv.appendChild(input);
    const br2 = document.createElement('br');
    mainDiv.appendChild(br2);

    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error'); 
    mainDiv.appendChild(errorDiv);
    const br3 = document.createElement('br');
    mainDiv.appendChild(br3);
}