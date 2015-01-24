//console.log (moveEntity(0,0,5,225));

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

// Checks if two DOM objects have collided. Tolerance states the pixel-distance for collision
function checkCollision (objectOne, objectTwo, tolerance)
{
	// Center points of both objects are taken into account
	oneX = objectOne.css('left') + objectOne.css('width') / 2;
	oneY = objectOne.css('top') + objectOne.css('height') / 2;
	twoX = objectTwo.css('left') + objectTwo.css('width') / 2;
	twoY = objectTwo.css('top') + objectTwo.css('height') / 2;
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
		
		target.css("background-position", target.css('width') + target.css('background-position').split(' ')[0] + "px 0px");
		currentFrame++;
		
		if (currentFrame < frames)
		{
			window.setTimeout(function(){ animateSpriteHelper(target, frames, currentFrame, loop, playSpeed) }, playSpeed);
		}
		if (currentFrame == frames && loop)
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
		var domRepresentative = $("<div class='enemy " + data.enemies[enemyList[0]] + "' id='" + data.currentEnemyID + "'></div>");
		data.currentEnemies[data.currentEnemyID] = jQuery.extend(true, {domElement : domRepresentative }, data.enemies[enemyList.shift()]);
		data.currentEnemyID++;
		
		// give initial position
		data.currentEnemies[data.currentEnemyID].posX = startingWaypoint[0]*32;
		data.currentEnemies[data.currentEnemyID].posY = startingWaypoint[1]*32;
		domRepresentative.css('left', startingWaypoint[0]*32 + " px");
		domRepresentative.css('top', startingWaypoint[1]*32 + " px");
		$("#objects").append(domRepresentative);
		
		// give list of waypoints to entity
		data.currentEnemies[data.currentEnemyID].nextWaypoints = data.waypoints[data.currentLevel];
		
		// initiate animation
		animateSprite(domRepresentative, data.currentEnemies[data.currentEnemyID].animationFrames, true, 100);
		
		if (enemyList.length > 0)
		{
			window.setTimeout(function(){ spawnEnemies(startingWaypoint, enemyList) }, 500);
		}
	}
}

// Checks if unit has reached its next waypoint
function checkForNextWaypoint (enemyID)
{
	distance = calculateDistance (data.currentEnemies[data.currentEnemyID].posX, data.currentEnemies[data.currentEnemyID].posY, twoX, twoY)
	if ()
}

function toDegrees (radian)
{
	return radian * (180 / Math.PI);
}

function toRadians (angle)
{
	return angle * (Math.PI / 180);
}