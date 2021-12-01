var estado = "False";

function menu() {
    const menu = document.getElementById("menu");

    setTimeout(5000);
    if (estado == "False") {
        menu.style.display="initial";
        console.log("Menu Aberto");
        estado = "True";
    } else if (estado == "True"){
        menu.style.display="none"
        console.log("Menu Fechado");
        estado = "False";
    }
}
