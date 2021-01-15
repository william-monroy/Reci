// Initialize and add the map
function initMap() {
    
    d3.json("data.json", function (error, resultado) {
        if (error){
            throw error;
        }
        console.log(resultado);
        
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: resultado[0] 
        });
        
        for (let i = 0; i < resultado.length; i++) {
            var maker = new google.maps.Marker({
                position: resultado[i],
                map: map,
            })
        }
        
    });
    
}

function crear() {
    const latitud = parseInt(document.getElementById('lat').value);
    const longitud = parseInt(document.getElementById('long').value);
    if (latitud == '' || longitud == '') {
        alert('Introduzca datos validos')
    }else{
        console.log('latitud:' + latitud);
        console.log('longitud:' + longitud);

        d3.json("data.json", function (error, data) {
            if (error){
                throw error;
            }
            this.data = data;
            console.log(data);
        });
    }
    // 25.6783295515985, -100.3140002911494
}