jQuery(document).ready(function()
{
	if (location.search != "")
	{
		var queryString = location.search.split("=");
		data.currentLevel = parseInt(queryString[1]);
	}
	else
	{
		data.currentLevel = 1;
	}
   var mapVersion = data.currentLevel;
   renderMap(mapData[mapVersion].layers.mapData, mapData[mapVersion].layers.objectData);
   initiateLevel();
   buildBuilderMenu();

   heartBeat = window.setInterval(updateGame, 25);
   //window.setInterval(updateGame, 25);
   $("#map div").on('click', function(){
		$('#buildMenu').css('display', 'block');
		var clicked = this;

       var nodes = $('#buildMenu').children();
       for (var i = 1; i < nodes.length; i++) {
           var towerName = nodes[i].dataset.name;
           if(clicked.dataset.blocker == "true" || data.currentCredits < data.towers[towerName].costs[data.towers[towerName].level])
           {
               $(nodes[i]).addClass('redState');
           }
       }

       $("#buildMenu .towerStoreItem").unbind().on('click', function() {
            var offsetTop = clicked.offsetTop;
            var offsetLeft = clicked.offsetLeft;
            var towerName = this.dataset.name;

            if(clicked.dataset.blocker == "false" && data.currentCredits >= data.towers[towerName].costs[0])
            {
                spawnTower(offsetTop, offsetLeft, towerName);
                $('#buildMenu').css('display', 'none');
            }


        });
    });

    $("#buildMenu .close").on('click', function (){
        $('#buildMenu').css('display', 'none');
    });
	
	$(document).on("click", "#overlayLost .button", function(e) {
		location.href = "index.html?level=" + data.currentLevel;
	});
	
	$(document).on("click", "#overlayNextLevel .button", function(e) {
		location.href = "index.html?level=" + (data.currentLevel + 1);
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
			data.currentTowers[key].angle += 1;
			rotate($("#tower" + key + " > .turret"), data.currentTowers[key].angle);
		}
	}
	processEnemiesToDelete();
	processProjectilesToDelete();

	//check win condition
	if (data.kills == data.requiredKills)
	{
		// next level possible
		if (data.currentLevel < data.maxLevels)
		{
			winLevel();
		}
		else
		{
			winGame();
		}
	}
}

function initiateLevel(){
	data.currentCredits += data.startCredits[data.currentLevel];
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


