$.get("Nodes.xml", function (xml) {
    var tabla = "<tr><th>nombre</th><th>autor</th><th>duracion</th></tr>"
    $(xml).find("cancion").each(function () {
        var nombre = $(this).find('nombre').text();
        var autor = $(this).find('autor').text();
        var duracion = $(this).find('duracion').text();

        tabla += "<tr><td>"
        tabla += nombre
        tabla += "</td><td>"
        tabla += autor
        tabla += "</td><td>"
        tabla += duracion
        tabla += "</td>"
    });
    document.getElementById("demo").innerHTML = tabla
});