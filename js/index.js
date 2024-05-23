

var puntaje=0;
var intento=0;

function adivinacion(identificador){
    
    if(identificador=='idexcadrill'){
        document.getElementById('idimg').src='/img/pcolor.jpg';

        var display=document.getElementById('display');
        display.innerText='Felicitaciones, has seleccionado la opción correcta';
        display.style.background="blue";
        display.style.fontFamily="'Times New Roman', Times, serif";
        display.style.border="3px solid black";

        console.log("Intentost: "+intento);
        if(intento==0){
            intento=intento+1;
            puntaje=5;
            document.getElementById('idIntentos').innerText=intento;
            document.getElementById('idPuntaje').innerText=puntaje;
            
        }else if(intento==1){
            puntaje=3;
        }else if(intento==2){
            puntaje=1;
        }

        console.log("puntajes: "+puntaje);


    }else{
        var display=document.getElementById('display');
        display.innerText='Pokémon incorrecto, intentalo nuevamente';
        display.style.background="red";
        display.style.fontFamily="'Times New Roman', Times, serif";
        display.style.border="3px solid black";

        intento=intento+1;
        console.log("Intentosf: "+intento);
        document.getElementById('idIntentos').innerText=intento;

        if (intento==3){
            console.log("TENGO QUE RESETEAR");
            reset();
        }

    }

}


function reset(){
    var display=document.getElementById('display');
        display.innerText='...';
        display.style.background="";
        display.style.fontFamily="";
        display.style.border="";

        document.getElementById('idimg').src='/img/pnegro.jpg';

        window.puntaje=0;
        window.intento=0;
        document.getElementById('idIntentos').innerText=intento;
        document.getElementById('idPuntaje').innerText=puntaje;
}

