// HABILITAMOS TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// HABILITAMOS POPOVERS
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))




// LÓGICA PARA QUE APAREZCA EL alert

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
}



// FIN LÓGICA PARA QUE APREZCA EL ALERT

//EVENTO BUTTON SPINNER

let btnEnviar = document.getElementById("btnEnviar");
let spinnerBtnEnviar = document.getElementById("spinnerBtnEnviar");
let textBtnEnviar = document.getElementById("textBtnEnviar");


btnEnviar.addEventListener("click", function(event){
    console.log("capturando evento click botón spinner");
    btnEnviar.disabled = true;
    spinnerBtnEnviar.classList.remove("d-none");
    textBtnEnviar.innerText = "Procesando mensaje";


    setTimeout(()=> {
        btnEnviar.disabled = false;
        spinnerBtnEnviar.classList.add("d-none");
        textBtnEnviar.innerText = "Enviar";
        //appendAlert('Mensaje procesado con éxito', 'success');
        appendAlert('¡Su mensaje fue recibido con éxito!', 'danger');
    },)
});



