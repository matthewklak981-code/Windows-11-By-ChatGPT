setTimeout(function(){

    document.getElementById("boot").style.display="none";

    document.getElementById("desktop").style.display="block";

},3000);



function openApp(name){

    let box=document.getElementById("appWindow");


    if(name==="Notepad"){

        box.innerHTML=
        `
        <h2>Notepad</h2>
        <textarea style="width:100%;height:200px;"></textarea>
        `;

    }


    else if(name==="Calculator"){

        box.innerHTML=
        `
        <h2>Calculator</h2>
        <input id="calc">
        <button onclick="alert(eval(calc.value))">
        =
        </button>
        `;

    }


    else {

        box.innerHTML=
        `
        <h2>${name}</h2>
        <p>${name} opened.</p>
        `;

    }

}



function startMenu(){

    alert(
    "Start Menu\n\nApps\nSettings\nPower"
    );

}



function restart(){

    location.reload();

}



function shutdown(){

    document.body.innerHTML=

    `
    <div style="
    height:100vh;
    background:black;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;">
    
    Shutting down...

    </div>
    `;

}
