// Calculates the pixel-distance between two objects
function calculateDistance (oneX, oneY, twoX, twoY)
{
	xDist = Math.abs(oneX - twoX);
	yDist = Math.abs(oneY - twoY);
	
	return Math.sqrt((xDist * xDist) + (yDist * yDist));
}

// Calculates the looking angle from object ONE at object TWO. Returned value is in DEGREE.
function calculateAngle (oneX, oneY, twoX, twoY)
{
	xDist = twoX - oneX;
	yDist = twoY - oneY;
	return 180 + 180 / Math.PI * Math.atan2(-xDist, -yDist);
}

// Returns the new position of an object after moving it
function moveEntity (xPos, yPos, speed, angle)
{
	angle = toRadians(angle);
	if (angle >= 0 && angle <= 90)
	{
		return [xPos + (speed * Math.sin(angle)), yPos + (speed * Math.cos(angle))];
	}
	if (angle > 90 && angle <= 180)
	{
		return [xPos + (speed * Math.sin(angle - 90)), yPos - (speed * Math.cos(angle - 90))];
	}
	if (angle > 180 && angle <= 270)
	{
		return [xPos - (speed * Math.sin(angle - 180)), yPos - (speed * Math.cos(angle - 180))];
	}
	if (angle > 270 && angle < 360)
	{
		return [xPos - (speed * Math.sin(angle - 270)), yPos + (speed * Math.cos(angle - 270))];
	}
}

function updatePosition (enemyID, newPos)
{
	data.currentEnemies[enemyID].posX = newPos[0];
	data.currentEnemies[enemyID].posY = newPos[1];
	
	data.currentEnemies[enemyID].domElement.css('left', Math.floor(newPos[0]) + "px");
	data.currentEnemies[enemyID].domElement.css('top', Math.floor(newPos[1]) + "px");
}

// Checks if two DOM objects have collided. Tolerance states the pixel-distance for collision
function checkCollision (objectOne, objectTwo, tolerance)
{
	// Center points of both objects are taken into account
	oneX = Math.floor(objectOne.css('left')) + Math.floor(objectOne.css('width')) / 2;
	oneY = Math.floor(objectOne.css('top')) + Math.floor(objectOne.css('height')) / 2;
	twoX = Math.floor(objectTwo.css('left')) + Math.floor(objectTwo.css('width')) / 2;
	twoY = Math.floor(objectTwo.css('top')) + Math.floor(objectTwo.css('height')) / 2;
	if (calculateDistance (oneX, oneY, twoX, twoY) <= tolerance)
	{
		return true;
	}
	else
	{
		return false;
	}
}

// Initiates the animation of a sprite. First call is to cause a delay
function animateSprite (target, frames, loop, playSpeed)
{
	window.setTimeout(function(){ animateSpriteHelper(target, frames, 1, loop, playSpeed) }, playSpeed);
}

// Animates a sprite.
// Target -> JQUERY DIV Object
// frames -> total amount of frames in the animation, including the start frame!
// currentFrame -> currently displayed frame
// loop -> true / false (true: animation will be looped infinitely)
// playSpeed -> pause in milliseconds between animations
function animateSpriteHelper (target, frames, currentFrame, loop, playSpeed)
{
	if (target.length > 0 && data.killAllTimers == false)
	{
		if (currentFrame == 1)
		{
			target.css("background-position", "0px 0px");
		}
		
		target.css("background-position", (target.width() * (currentFrame - 1) * (-1)) + "px 0px");
		currentFrame++;
		
		if (currentFrame <= frames)
		{
			window.setTimeout(function(){ animateSpriteHelper(target, frames, currentFrame, loop, playSpeed) }, playSpeed);
		}
		if (currentFrame > frames && loop)
		{
			window.setTimeout(function(){ animateSpriteHelper(target, frames, 1, loop, playSpeed) }, playSpeed);
		}
	}
}

// Spawns all enemies from a given list one by one in a 500ms interval
function spawnEnemies (startingWaypoint, enemyList)
{
	if (data.killAllTimers == false)
	{
		var domRepresentative = $("<div class='enemy " + enemyList[0] + "' id='" + data.currentEnemyID + "'></div>");
		data.currentEnemies[data.currentEnemyID] = jQuery.extend(true, {domElement : domRepresentative }, data.enemies[enemyList.shift()]);
		
		// give initial position and rotation
		variation = Math.floor((Math.random() * 5) + 1); 
		data.currentEnemies[data.currentEnemyID].posX = startingWaypoint[0]*32 + variation;
		data.currentEnemies[data.currentEnemyID].posY = startingWaypoint[1]*32 + variation;
		
		// give list of waypoints to entity
		data.currentEnemies[data.currentEnemyID].nextWaypoints = data.waypoints[data.currentLevel];
		// calculate looking angle for next waypoint
		nextWaypointPos = calculateNextWaypointPosition(data.currentEnemyID);
		data.currentEnemies[data.currentEnemyID].angle = calculateAngle (data.currentEnemies[data.currentEnemyID].posX, data.currentEnemies[data.currentEnemyID].posY, nextWaypointPos[0], nextWaypointPos[1]);
		// TODO - add initial CSS rotation
		rotate(domRepresentative, data.currentEnemies[data.currentEnemyID].angle);
		domRepresentative.css('left', (startingWaypoint[0]*32 + variation) + "px");
		domRepresentative.css('top', (startingWaypoint[1]*32 + variation) + "px");
		$("#objects").append(domRepresentative);
		
		// initiate animation
		animateSprite(domRepresentative, data.currentEnemies[data.currentEnemyID].animationFrames, true, 200);
		
		data.currentEnemyID++;
		
		if (enemyList.length > 0)
		{
			window.setTimeout(function(){ spawnEnemies(startingWaypoint, enemyList) }, 500);
		}
		
	}
}

// Checks if unit has reached its next waypoint
function checkForNextWaypoint (enemyID)
{
	nextWaypointPos = calculateNextWaypointPosition(enemyID);
	distance = calculateDistance (data.currentEnemies[enemyID].posX, data.currentEnemies[enemyID].posY, nextWaypointPos[0], nextWaypointPos[1]);
	if (distance <= 10)
	{
		data.currentEnemies[enemyID].currentWaypoint++;
		
		// enemy has reached last waypoint
		if (data.currentEnemies[enemyID].currentWaypoint == data.currentEnemies[enemyID].nextWaypoints.length)
		{
			removeEnemy (enemyID);
			reduceLife();
			data.kills++;
		}
		// enemy is still on the go
		else
		{
			nextWaypointPos = calculateNextWaypointPosition(enemyID);
			// calculate looking angle for next waypoint
			data.currentEnemies[enemyID].angle = calculateAngle (data.currentEnemies[enemyID].posX, data.currentEnemies[enemyID].posY, nextWaypointPos[0], nextWaypointPos[1]);
			// also change rotation for DOM Element
			rotate(data.currentEnemies[enemyID].domElement, data.currentEnemies[enemyID].angle);
		}
		return true;
	}
	else
	{
		return false;
	}
}

// provides X and Y coordinates of the next waypoint
function calculateNextWaypointPosition (enemyID)
{
	var nextWaypoint = data.currentEnemies[enemyID].nextWaypoints[data.currentEnemies[enemyID].currentWaypoint];
	var nextWaypointX = nextWaypoint[0] * 32;
	var nextWaypointY = nextWaypoint[1] * 32;
	return [nextWaypointX, nextWaypointY];
}

// Scans for all targets within a towers range
function scanForTargets (towerID)
{
	var bestTarget =	{
							id:			-1,
							waypoint:	0,
						};
	for (key in currentEnemies)
	{
		if (checkCollision(data.currentEnemies[key].domElement, data.currentTowers[towerID].domElement, data.currentTowers[towerID].range))
		{
			if (data.currentEnemies[key].currentWaypoint > besttarget.waypoint)
			{
				bestTarget.id = key;
				bestTarget.waypoint = data.currentEnemies[key].currentWaypoint;
			}
		}
	}
	return bestTarget;
}

// Projectile might hit and damage target
function checkForHittingProjectile (projectileID)
{
	// Check if target is still there
	if (typeof data.currentEnemies[data.currentProjectiles[projectileID].targetID]  != "undefined")
	{
		if (checkCollision(data.currentEnemies[data.currentProjectiles[projectileID].targetID].domElement), data.currentProjectiles[projectileID].domElement, 8)
		{
			// reduce HP of the hit enemy & remove it if applicable
			data.currentEnemies[data.currentProjectiles[projectileID].targetID].hitpoints -= data.currentProjectiles[projectileID].damage;
			if (data.currentEnemies[data.currentProjectiles[projectileID].targetID].hitpoints <= 0)
			{
				// TODO add emitter here
				removeEnemy (data.currentProjectiles[projectileID].targetID);
				data.kills++;
			}
			// TODO add emitter here
			removeProjectile (projectileID);
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		// TODO add emitter here
		removeProjectile (projectileID);
		return false;
	}
}

// removes DOM objects and marks items for deletion
function removeEnemy (enemyID)
{
	$("#" + enemyID).remove();
	data.enemiesToDelete.push(enemyID);
}

// Actually removes enemies after the FOR loop in heart.js has run out
function processEnemiesToDelete ()
{
	while (data.enemiesToDelete.length > 0)
	{
		delete data.currentEnemies[data.enemiesToDelete.pop()];
	}
}

// removes DOM objects and marks items for deletion
function removeProjectile (projectileID)
{
	$("#projectile" + projectileID).remove();
	data.projectilesToDelete.push(projectileID);
}

// Actually removes projectiles after the FOR loop in heart.js has run out
function processProjectilesToDelete ()
{
	while (data.projectilesToDelete.length > 0)
	{
		delete data.currentProjectiles[data.projectilesToDelete.pop()];
	}
}

function reduceLife ()
{
	data.life--;
	// Adjust life display
	// TODO
	if (data.life <= 0)
	{
		// Game Over
		// TODO
		console.log("Lost game!");
	}
}

function determineRequiredKills ()
{
	data.requiredKills = 0;
	for (key in data.waves[data.currentLevel])
	{
		data.requiredKills += data.waves[data.currentLevel][key].length;
	}
}

function rotate(target, degree)
{
    // For webkit browsers: e.g. Chrome
	target.css({ WebkitTransform: 'rotate(' + (-1) * degree + 'deg)'});
    // For Mozilla browser: e.g. Firefox
	target.css({ '-moz-transform': 'rotate(' + (-1) * degree + 'deg)'});
}


function toDegrees (radian)
{
	return radian * (180 / Math.PI);
}

function toRadians (angle)
{
	return angle * (Math.PI / 180);
}

function spawnTower(offsetTop, offsetLeft, towerName){
    var tower =
        $('<div id="'+ data.currentTowerID +'" class="tower '+towerName+'" style="top:'+offsetTop+'px; left:'+offsetLeft+'px;">'+
            '<img class="turret" src="images/turrets/'+towerName+'.png"/>'+
            '<img class="base" src="images/turrets/base.png"/>'+
            '</div>');

    data.currentTowers[data.currentTowerID] = jQuery.extend(true, {domElement : tower}, data.towers[towerName]);
    data.currentTowerID++;

    $('#objects').append(tower);
}