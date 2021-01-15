var info;



// Initialize and add the map
function initMap() {
    /* The location of Uluru
    const uluru = {
        lat: -25.344,
        lng: 131.036
        
    };*/
    
    d3.json("data.json", function (error, data) {
        if (error){
            throw error;
        }
        this.data = data;
        console.log(data);
    });

    var geo = [
        {
            lat: 25.652141088781722, 
            lng: -100.29682220205787
        },
        {
            lat: 25.646724987221507, 
            lng: -100.32548965119364
        },
        {
            lat: 25.656473793012132, 
            lng: -100.2757078532932
        },
        {
            lat: 25.654008470930716, 
            lng: -100.29223323721736
        }
    ];

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: geo[0],
    });
    
    for (let i = 0; i < geo.length; i++) {
        var maker = new google.maps.Marker({
            position: geo[i],
            map: map,
        })
    }
}