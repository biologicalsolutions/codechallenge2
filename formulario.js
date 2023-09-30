window.onload = function() {
    let respuestaDiv = document.getElementById("respuesta");

    document.getElementById(5).addEventListener("click", function(event) {
        let nombre = document.getElementById(1).value;
        let apellido = document.getElementById(2).value;
        let fecha = document.getElementById(3).value;

        // Comprueba si nombre y apellido no están vacíos
        if (nombre.trim() === "" || apellido.trim() === "") {
            alert("Por favor, ingresa un nombre y un apellido válidos.");
        } else {
            let envio = {
                nombre: nombre,
                apellido: apellido,
                fecha: fecha,
            };

            fetch("https://jsonplaceholder.typicode.com/users", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(envio)
            })
            .then(response => response.json())
            .then(data => {
                respuestaDiv.innerHTML = "Respueta del servidor:<br>" + JSON.stringify(data, null, 4);
                alert("Datos enviados.");
            })
            .catch(error => {
                respuestaDiv.innerHTML = "Error al enviar los datos:<br>" + error.message;
                alert("EHH BO, problemas al envíar los datos");
            });
        }
    });
}