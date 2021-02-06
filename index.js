const bttn = document.querySelector("#btn");

const bus = document.querySelector("#bus");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const doj = document.querySelector("#doj");
const nme = document.querySelector("#name");
const seat = document.querySelector("#seat");
const rfrnc = document.querySelector("#reference");

const add = document.querySelector("#addingInfo");

bttn.addEventListener('click',function(){

    if(from.value=='' || to.value=='' || doj.value=='' || nme.value=='' || seat.value=='' || rfrnc.value==''){
        alert('Please fill-up all the input feild');
    } else{
        const newRow = document.createElement('tr');

        const newBus = document.createElement('td');
        newBus.innerHTML = bus.value;
        newRow.appendChild(newBus);

        const newFrom = document.createElement('td');
        newFrom.innerHTML = from.value;
        newRow.appendChild(newFrom);

        const newTo = document.createElement('td');
        newTo.innerHTML = to.value;
        newRow.appendChild(newTo);

        const newDoj = document.createElement('td');
        newDoj.innerHTML = doj.value;
        newRow.appendChild(newDoj);

        const newName = document.createElement('td');
        newName.innerHTML = nme.value;
        newRow.appendChild(newName);

        const newSeat = document.createElement('td');
        newSeat.innerHTML = seat.value;
        newRow.appendChild(newSeat);

        const newrefer = document.createElement('td');
        newrefer.innerHTML = rfrnc.value;
        newRow.appendChild(newrefer);

        add.appendChild(newRow);
    }
})