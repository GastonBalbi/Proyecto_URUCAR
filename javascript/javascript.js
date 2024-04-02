//---------- javascript para FORMULARIO----------

//---------- javascript para VALIDACION DE DATOS----------

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email")

const valida = {
    nombre:false,
    apellido:false,
    telefono:false,
    email:false
}

//enviar formulario

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    let errorV = false;

    for(const property in valida){
        if(valida[property] == false)
            errorV = true;
    }

    if(!errorV){
        formulario.submit();
    }
})


//validar NOMBRE

nombre.addEventListener("blur",()=>{    
    let nombre_re = /^[a-zA-Z ]{2,15}$/;

    if (nombre.value == "" || nombre.value == null) {
        
        setErrorFor(nombre,"No puede dejar este apartado en blanco.");
        valida.nombre = false;
    }else{
        if (!nombre_re.exec(nombre.value)){
        setErrorFor(nombre,"El nombre solo debe estar formado por letras y un maximo de 15 caracteres.");
        valida.nombre = false;
        }else{
            setSuccessFor(nombre)
            valida.nombre = true;
        }
    }
})

//validar APELLIDO

apellido.addEventListener("blur",()=>{
    let apellido_re = /^[a-zA-Z ]{2,30}$/;

    if (apellido.value == "" || apellido.value == null) {
        
        setErrorFor(apellido,"No puede dejar este apartado en blanco.");
        valida.apellido = false;
    }else{
        if (!apellido_re.exec(apellido.value)){
        setErrorFor(apellido,"El apellido solo debe estar formado por letras y un maximo de 15 caracteres.");
        valida.apellido = false;
        }else{
            setSuccessFor(apellido)
            valida.apellido = true;
        }
    }

})

//validar TELEFONO

telefono.addEventListener("blur",()=>{
    let telefono_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

    if (telefono.value == "" || telefono.value == null) {
        
        setErrorFor(telefono,"No puede dejar este apartado en blanco.");
        valida.telefono = false;
    }else{
        if (!telefono_re.exec(telefono.value)){
        setErrorFor(telefono,"El número de telefono debe tener 9 numeros.");
        valida.telefono = false;
        }else{
            setSuccessFor(telefono)
            valida.telefono = true;
        }
    }

})

//validar EMAIL

email.addEventListener("blur",()=>{
    let email_re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (email.value == "" || email.value == null) {
        
        setErrorFor(email,"No puede dejar este apartado en blanco.");
        valida.email = false;
    }else{
        if (!email_re.exec(email.value)){
        setErrorFor(email,"No ingresó un email valido.");
        valida.nombre = false;
        }else{
            setSuccessFor(email)
            valida.email = true;
        }
    }


})
    
//mensaje de ERROR

function setErrorFor(input,mensaje){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = mensaje;
    

}

//si todo esta CORRECTO

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}

//---------------------------------------- Mapa ----------------------------------------

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(sucess,error,options);

}else{
    alert("Los servicios de geolocalización no está disponible");
}

var options= {
    enbleHighAccuracy: true,
    timeout:5000,
    maximumAge:0
};

function sucess(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let map = L.map ('map',{
        center: [latitude, longitude],
        zoom: 12
    });


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([latitude, longitude]).bindTooltip('Aquí estas Tú').addTo(map)
}


function error(){
    let map = L.map ('map',{
        center:[40.44115,-3.69733],
        zoom: 17
    });


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    let marker = L.marker([40.44115,-3.69733]).bindTooltip('MasterD').addTo(map)
}