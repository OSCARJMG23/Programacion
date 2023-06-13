//https://www.youtube.com/watch?v=-rNQeJi3Wp4

var selectedRow = null

const formulario = document.getElementById('formulario')

function onFormSubmit(){
    if(validate()){
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
            else
            updateRecord(formData)
        resetform();
    }
}

function readFormData(){
    var formData = {};
    var contador = 1;
    formData['id'] = contador
    formData['cedula'] = document.getElementById('cedula').value;
    formData['nombres'] = document.getElementById('nombres').value;
    formData['apellidos'] = document.getElementById('apellidos').value;
    formData['telefono'] = document.getElementById('telefono').value;
    formData['correo'] = document.getElementById('correo').value;
    formData['nacimiento'] = document.getElementById('nacimiento').value;
    formData['nacionalidad'] = document.getElementById('nacionalidad').value;
    formulario.reset()
    return formData;
    
}

function insertNewRecord(data){
    var table = document.getElementById('listaClientes').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cedula;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nombres;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.apellidos;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.telefono;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.correo;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.nacimiento;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.nacionalidad;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit<a/> 
                       <a onClick="onDelete(this)">Delete<a/>`;
    contador++
}
function resetform(){
    document.getElementById('cedula').value = ''
    document.getElementById('nombres').value = ''
    document.getElementById('apellidos').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('nacimiento').value = ''
    document.getElementById('nacionalidad').value = ''
    selectedRow = null
}
function onEdit(td){
   selectedRow = td.parentElement.parentElement;
   /* document.getElementById('fullName').value = selectedRow.cells[0].innerHTML; */
   document.getElementById('cedula').value = selectedRow.cells[1].innerHTML;
   document.getElementById('nombres').value = selectedRow.cells[2].innerHTML;
   document.getElementById('apellidos').value = selectedRow.cells[3].innerHTML;
   document.getElementById('telefono').value = selectedRow.cells[4].innerHTML;
   document.getElementById('correo').value = selectedRow.cells[5].innerHTML;
   document.getElementById('nacimiento').value = selectedRow.cells[6].innerHTML;
   document.getElementById('nacionalidad').value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData){
    /* selectedRow.cells[0].innerHTML = formData.fullName; */
    selectedRow.cells[1].innerHTML = formData.cedula;
    selectedRow.cells[2].innerHTML = formData.nombres;
    selectedRow.cells[3].innerHTML = formData.apellidos;
    selectedRow.cells[4].innerHTML = formData.telefono;
    selectedRow.cells[5].innerHTML = formData.correo;
    selectedRow.cells[6].innerHTML = formData.nacimiento;
    selectedRow.cells[7].innerHTML = formData.nacionalidad;

}
function onDelete(td){
    if(confirm('Esta seguro de eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById("listaClientes").deleteRow(row.rowIndex);
        resetform();
    }
}
function validate(){
    isValid = true
    if(document.getElementById('nombres').value == ''){
        isValid = false
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
        document.getElementById("fullNameValidationError").classList.add("hide");
    }

    return isValid
}

formulario.addEventListener('submit', event=>{
    event.preventDefault();
    validate();
    onFormSubmit();
    formulario.reset()
})