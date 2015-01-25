jQuery(document).ready(function()
{
   var mapVersion = data.currentLevel;
   $('#mapData').attr('href', 'maps/Map'+mapVersion+'.js');
   renderMap(mapData.layers.mapData, mapData.layers.objectData);
   initiateLevel();
   buildBuilderMenu();

   heartBeat = window.setInterval(updateGame, 25);
   //window.setInterval(updateGame, 25);
   $("#map div").on('click', function(){
		$('#buildMenu').css('display', 'block');
		var clicked = this;
        $("#buildMenu .towerStoreItem").unbind().on('click', function() {
            console.log('test');
            var offsetTop = clicked.offsetTop;
            var offsetLeft = clicked.offsetLeft;
            var towerName = this.name;
            if(clicked.dataset.blocker == "false" && data.currentCredits >= data.towers[towerName].costs[0])
            {
                spawnTower(offsetTop, offsetLeft, towerName);
                $('#buildMenu').css('display', 'none');
            } else {
                this.innerHTML = 'Not allowed position or not enough credits!';
            }
        });
    });

    $("#buildMenu .close").on('click', function (){
        $('#buildMenu').css('display', 'none');
    });
});

function updateGame ()
{
	$('#fullTitleBar').css('width', (Math.floor(data.kills / data.requiredKills * 330)) + "px");
	$('#lifeIcon').text(data.life);
	$('#creditIcon').text(data.currentCredits);
	// update movement of all enemies
	for(key in data.currentEnemies)
	{
		checkForNextWaypoint(key);
		var speed = data.currentEnemies[key].speed;
		if (data.currentEnemies[key].slowedTurns > 0)
		{
			speed *= 0.6;
			data.currentEnemies[key].slowedTurns--;
		}
		newPos = moveEntity (data.currentEnemies[key].posX, data.currentEnemies[key].posY, speed, data.currentEnemies[key].angle);
		updatePosition(key, newPos);
	}
	// update movement of all projectiles
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
	// rotate the moneymakers!
	for(key in data.currentTowers)
	{
		if (data.currentTowers[key].special == "moneyBoost")
		{
			data.currentTowers[key].angle += 5;
			rotate(data.currentTowers[key].domElement, data.currentTowers[key].angle);
		}
	}
	processEnemiesToDelete();
	processProjectilesToDelete();
}

function initiateLevel(){
	setTimeout (function() { generateCredits(50); }, 2500);
    for(key in data.waves[data.currentLevel])
    (function(key) {
	setTimeout(function ()
			{
				spawnEnemies(data.waypoints[data.currentLevel][data.waves[data.currentLevel][key][0]][0], data.waves[data.currentLevel][key], 0);
			}, key);
    })(key);
	determineRequiredKills();
}


