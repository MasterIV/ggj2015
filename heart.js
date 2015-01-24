jQuery(document).ready(function()
{
   var mapVersion = data.currentLevel;
   $('#mapData').attr('href', 'maps/Map'+mapVersion+'.js');
   renderMap(mapData.layers.mapData, mapData.layers.objectData);
   initiateLevel();
   buildBuilderMenu();

   heartBeat = window.setInterval(updateGame, 25);
   window.setInterval(updateGame, 25);
   $("#map div").on('click', function(){
		$('#buildMenu').css('display', 'block');
		var clicked = this;
        $("#buildMenu button").unbind().on('click', function() {
            var offsetTop = clicked.offsetTop;
            var offsetLeft = clicked.offsetLeft;
            var towerName = this.name;
            console.log(clicked.dataset.blocker);
            if(clicked.dataset.blocker == "false")
            {
                spawnTower(offsetTop, offsetLeft, towerName);
            }
            $('#buildMenu').css('display', 'none');
        });
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
	for(key in data.currentProjectiles)
	{
		if (typeof data.currentEnemies[data.currentProjectiles[key].targetID] != "undefined")
		{
			var angle = calculateAngle (data.currentProjectiles[key].posX, data.currentProjectiles[key].posY, data.currentEnemies[data.currentProjectiles[key].targetID].posX, data.currentEnemies[data.currentProjectiles[key].targetID].posY);
			data.currentProjectiles[key].angle = angle;
			rotate(data.currentProjectiles[key].domElement, angle);
			var newPos = moveEntity (data.currentProjectiles[key].posX, data.currentProjectiles[key].posY, data.currentProjectiles[key].speed, angle);
			data.currentProjectiles[key].posX = newPos[0];
			data.currentProjectiles[key].posY = newPos[1];
			data.currentProjectiles[key].domElement.css('left', (Math.floor(newPos[0])) + "px");
			data.currentProjectiles[key].domElement.css('top', (Math.floor(newPos[1])) + "px");
		}
		checkForHittingProjectile (key);
	}
	processEnemiesToDelete();
	processProjectilesToDelete();
}

function initiateLevel(){
	moneyGiver = setInterval (function() { data.currentCredits += 50; console.log(data.currentCredits);}, 2500);
    for(key in data.waves[data.currentLevel])
    (function(key) {
            setTimeout(function ()
			{
				console.log("Key: " + key);
				spawnEnemies(data.waypoints[data.currentLevel][0], data.waves[data.currentLevel][key]);
			}, key);
    })(key);
}


