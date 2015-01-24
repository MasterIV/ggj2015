jQuery(document).ready(function()
{
   var mapVersion = data.currentLevel;
   $('#mapData').attr('href', 'maps/Map'+mapVersion+'.js');
    renderMap(mapData.layers.mapData, mapData.layers.objectData);
    initiateLevel();

   heartBeat = window.setInterval(updateGame, 25);
   window.setInterval(updateGame, 25);
    $("#map div").click(function(){
        $('#buildMenu').css('display', 'block');
    });

});


function updateGame ()
{
	for(key in data.currentEnemies)
	{
		checkForNextWaypoint(key);
		newPos = moveEntity (data.currentEnemies[key].posX, data.currentEnemies[key].posY, data.currentEnemies[key].speed, data.currentEnemies[key].angle);
		updatePosition(key, newPos);
	}
	processEnemiesToDelete();
	processProjectilesToDelete();
}

function initiateLevel(){
    for(key in data.waves[data.currentLevel])
    (function(key) {
            setTimeout(function ()
			{
				console.log("Key: " + key);
				spawnEnemies(data.waypoints[data.currentLevel][0], data.waves[data.currentLevel][key]);
			}, key);
    })(key);
}
