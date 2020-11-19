function show_helium() {
    /* Показывает на схеме течение гелия */
    document.getElementById("component").style.visibility ="visible";
    document.getElementById("component").src="./images/helium.png";
    /* Показывает на легенде нужное*/
    document.getElementById("helium_tank").style.visibility ="visible";
    document.getElementById("helium_tank_legend").style.visibility ="visible";
    document.getElementById("helium_tank_description").style.visibility ="visible";
}

function show_oxygen() {
    /* Показывает на схеме течение кислорода */
    document.getElementById("component").style.visibility ="visible";
    document.getElementById("component").src="./images/кислород.png";
    /* Показывает на легенде нужное */

    /* Убирает ненужное на легенде*/
    document.getElementById("helium_tank").style.visibility ="hidden";
    document.getElementById("helium_tank_legend").style.visibility ="hidden";
    document.getElementById("helium_tank_description").style.visibility ="hidden";
}