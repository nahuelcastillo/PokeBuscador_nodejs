const btnRes = document.getElementById("btnRegist")
const btnLog = document.getElementById("btnLogin")

 //Login
 btnLog.addEventListener("click", async ()=> {
    const name = document.getElementById("inputNombreLog").value
    const playerName = document.getElementById("inputPlayernameLog").value

    const data2 = {
        name: name,
        playerName: playerName
    }

    //Hacer el fetcg a la url login para validar si existe
    await fetch(`login`,{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data2)
    }
    )
    .then(data => {localStorage.setItem("user", data2.name)
        if(data.ok === false){
            alert("Usario no encintrado")
        }
        else{
            redirect()
        }
    })
    

})

//Registrer con post
btnRes.addEventListener("click", async ()=> {
    const name = document.getElementById("inputNombreReg").value
    const playerName = document.getElementById("inputPlayernameReg").value

    const data2 = {
        name: name,
        playerName: playerName
    }
    //Hace el fetch a la url local pero zona profile para crear
        await fetch(`Profile`,{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data2)
        }
        )
        .then(data => {localStorage.setItem("user", data2.playerName)})
            redirect()
        })
        



function redirect(){
    window.location="Profile.html";
}