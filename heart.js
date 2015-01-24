jQuery(document).ready(function()
{
   var mapVersion = data.currentLevel;
   $('#mapData').attr('href', 'maps/Map'+mapVersion+'.js');
    renderMap(mapData.layers.mapData, mapData.layers.objectData);
    initiateLevel();

   window.setInterval(updateGame, 25);
});


function updateGame ()
{
}

function initiateLevel(){
    for(key in data.waves[data.currentLevel])
        {
            console.log(key);
            setTimeout(function () {
            spawnEnemies(data.waypoints[data.currentLevel][0], data.waves[data.currentLevel][key]);
        }, key);
    }
}
