// DOsplays the build menu for towers
function buildBuilderMenu()
{
    var buildTowerHTML = "";
    
    $.each(data.towers, function(key, value) {
        buildTowerHTML = buildTowerHTML +
            '<div data-name="'+key+'" class="towerStoreItem">'+
                '<img src="images/turrets/'+ key +'.png" />'+
                '<div id="price">Price: '+value.costs[value.level + 1]+'</div>'+
                '<h4 class="name">'+ key +'</h4>'+
                '<ul>'+
                    '<li>'+
                        '<div class="damageIcon"></div><span class="damage">Damage: '+ value.damage[value.level] +'</span>'+
                    '</li>'+
                    '<li>'+
                        '<div class="firerateIcon"></div><span class="firerate">Firerate: '+ value.firerate[value.level] +'</span>'+
                    '</li>'+
                    '<li>'+
                        '<div class="rangeIcon"></div><span class="range">Range: '+ value.range[value.level] +'</span>'+
                    '</li>'+
                    '<li>'+
                        '<div class="weaknessIcon"></div><span class="weakness">Weakness: '+ value.damageType +'</span>'+
                    '</li>'+
                '</ul>'+
            '</div>';
    });

    $('.close').after(buildTowerHTML);
}

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
	data.currentEnemies[enemyID].domLifebar.css('left', Math.floor(newPos[0]) + 6 + "px");
	data.currentEnemies[enemyID].domLifebar.css('top', Math.floor(newPos[1]) - 6 + "px");
}

// Checks if two DOM objects have collided. Tolerance states the pixel-distance for collision
function checkCollision (objectOne, objectTwo, tolerance)
{
	// Center points of both objects are taken into account
	oneX = parseInt(objectOne.css('left').split("px")) + objectOne.width() / 2;
	oneY = parseInt(objectOne.css('top').split("px")) + objectOne.height() / 2;
	twoX = parseInt(objectTwo.css('left').split("px")) + objectTwo.width() / 2;
	twoY = parseInt(objectTwo.css('top').split("px")) + objectTwo.height() / 2;
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
function spawnEnemies (startingWaypoint, enemyList, unitPath)
{
	if (data.killAllTimers == false)
	{
		if (unitPath == 0)
		{
			// Waypoint information, which is always element 0, needs to be killed and stored differently!
			var unitPath = enemyList.shift();
		}
		
		var domRepresentative = $("<div class='enemy " + enemyList[0] + "' id='" + data.currentEnemyID + "'></div>");
		var lifeBar = $("<div class='lifebar' id='lifebar" + data.currentEnemyID + "'><div class='currentLife'></div></div>");
		data.currentEnemies[data.currentEnemyID] = jQuery.extend(true, {domElement : domRepresentative, domLifebar : lifeBar }, data.enemies[enemyList.shift()]);
		
		// give initial position and rotation
		variation = Math.floor((Math.random() * 5) + 1); 
		data.currentEnemies[data.currentEnemyID].posX = startingWaypoint[0]*32 + variation;
		data.currentEnemies[data.currentEnemyID].posY = startingWaypoint[1]*32 + variation;
		
		// give list of waypoints to entity
		data.currentEnemies[data.currentEnemyID].nextWaypoints = data.waypoints[data.currentLevel][unitPath];
		// calculate looking angle for next waypoint
		nextWaypointPos = calculateNextWaypointPosition(data.currentEnemyID);
		data.currentEnemies[data.currentEnemyID].angle = calculateAngle (data.currentEnemies[data.currentEnemyID].posX, data.currentEnemies[data.currentEnemyID].posY, nextWaypointPos[0], nextWaypointPos[1]);
		// TODO - add initial CSS rotation
		rotate(domRepresentative, data.currentEnemies[data.currentEnemyID].angle);
		domRepresentative.css('left', (startingWaypoint[0]*32 + variation) + "px");
		domRepresentative.css('top', (startingWaypoint[1]*32 + variation) + "px");
		lifeBar.css('left', (startingWaypoint[0]*32 + variation + 6) + "px");
		lifeBar.css('top', (startingWaypoint[1]*32 + variation - 6) + "px");
		$("#objects").append(domRepresentative);
		$("#objects").append(lifeBar);
		
		// initiate animation
		animateSprite(domRepresentative, data.currentEnemies[data.currentEnemyID].animationFrames, true, 200);
		
		data.currentEnemyID++;
		
		if (enemyList.length > 0)
		{
			window.setTimeout(function(){ spawnEnemies(startingWaypoint, enemyList, unitPath) }, 500);
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

// Tower tries to emit a projectile
function towerShoots (towerID)
{
	var target = scanForTargets(towerID);
	if (target.id >= 0)
	{
		// Tower turns towards target on shooting
		var angle = calculateAngle (data.currentTowers[towerID].posX, data.currentTowers[towerID].posY, data.currentEnemies[target.id].posX, data.currentEnemies[target.id].posY);
		rotate($("#tower" + towerID + " > .turret"), angle);
		spawnProjectile (towerID, target.id);
	}
}

// Scans for all targets within a towers range
function scanForTargets (towerID)
{
	var bestTarget =	{
							id:			-1,
							waypoint:	0,
						};
	for (key in data.currentEnemies)
	{
		if (checkCollision(data.currentEnemies[key].domElement, data.currentTowers[towerID].domElement, data.currentTowers[towerID].range[data.currentTowers[towerID].level]))
		{
			if (data.currentEnemies[key].currentWaypoint > bestTarget.waypoint)
			{
				bestTarget.id = key;
				bestTarget.waypoint = data.currentEnemies[key].currentWaypoint;
			}
		}
	}
	return bestTarget;
}

// Spawns a projectile from a turret's position
function spawnProjectile (towerID, targetID)
{
	var domRepresentative = $("<div class='projectile " + data.currentTowers[towerID].projectile + "' id='projectile" + data.currentProjectileID + "'></div>");
	data.currentProjectiles[data.currentProjectileID] = jQuery.extend(true, {domElement : domRepresentative }, data.projectiles[data.currentTowers[towerID].projectile]);
	data.currentProjectiles[data.currentProjectileID].targetID = targetID;
	data.currentProjectiles[data.currentProjectileID].damage = data.currentTowers[towerID].damage[data.currentTowers[towerID].level];
	
	// give initial position and rotation
	data.currentProjectiles[data.currentProjectileID].posX = data.currentTowers[towerID].posX;
	data.currentProjectiles[data.currentProjectileID].posY = data.currentTowers[towerID].posY;
	domRepresentative.css('left', (data.currentTowers[towerID].posX) + "px");
	domRepresentative.css('top', (data.currentTowers[towerID].posY) + "px");
	// calculate looking angle for next waypoint
	var angle = calculateAngle (data.currentProjectiles[data.currentProjectileID].posX, data.currentProjectiles[data.currentProjectileID].posY, data.currentEnemies[targetID].posX, data.currentEnemies[targetID].posY);
	data.currentProjectiles[data.currentProjectileID].angle = angle;
	rotate(domRepresentative, angle);
	// put projectile ahead of turret
	var newPos = moveEntity (data.currentProjectiles[data.currentProjectileID].posX, data.currentProjectiles[data.currentProjectileID].posY, 8, angle);
	data.currentProjectiles[data.currentProjectileID].posX = newPos[0];
	data.currentProjectiles[data.currentProjectileID].posY = newPos[1];
	domRepresentative.css('left', (Math.floor(newPos[0])) + "px");
	domRepresentative.css('top', (Math.floor(newPos[1])) + "px");
	
	$("#objects").append(domRepresentative);
	
	data.currentProjectileID++;
}

// Projectile might hit and damage target
function checkForHittingProjectile (projectileID)
{
	// Check if target is still there
	if (typeof data.currentEnemies[data.currentProjectiles[projectileID].targetID]  != "undefined")
	{
        // reduce HP of the hit enemy & remove it if applicable
		if (checkCollision(data.currentEnemies[data.currentProjectiles[projectileID].targetID].domElement, data.currentProjectiles[projectileID].domElement, 12))
		{
            if(data.currentEnemies[data.currentProjectiles[projectileID].targetID].resistence == data.currentProjectiles[projectileID].type)
            {
                data.currentEnemies[data.currentProjectiles[projectileID].targetID].hitpoints -= Math.floor(data.currentProjectiles[projectileID].damage / 3);
            } else {
                data.currentEnemies[data.currentProjectiles[projectileID].targetID].hitpoints -= data.currentProjectiles[projectileID].damage;
            }
			$("#lifebar" + data.currentProjectiles[projectileID].targetID + " .currentLife").css("width", (Math.floor(data.currentEnemies[data.currentProjectiles[projectileID].targetID].hitpoints / data.currentEnemies[data.currentProjectiles[projectileID].targetID].maxHitpoints * 20)) + "px");
			// apply slow effect
			if (data.currentProjectiles[projectileID].special == "slow")
			{
				data.currentEnemies[data.currentProjectiles[projectileID].targetID].slowedTurns = 80;
			}
			if (data.currentEnemies[data.currentProjectiles[projectileID].targetID].hitpoints <= 0)
			{
				if (data.currentProjectiles[projectileID].special == "splash")
				{
                    for (var key in data.currentEnemies)
                    {
                        if (checkCollision(data.currentEnemies[key].domElement, data.currentProjectiles[projectileID].domElement, 50) && key != data.currentProjectiles[projectileID].targetID)
                        {
                            if(data.currentEnemies[key].resistence == data.currentProjectiles[projectileID].type)
                            {
                                data.currentEnemies[key].hitpoints -= Math.floor(data.currentProjectiles[projectileID].damage / 3);
                            } else {
                                data.currentEnemies[key].hitpoints -= data.currentProjectiles[projectileID].damage;
                            }
							$("#lifebar" + key + " .currentLife").css("width", (Math.floor(data.currentEnemies[key].hitpoints / data.currentEnemies[key].maxHitpoints * 20)) + "px");

                            if( data.currentEnemies[key].hitpoints <= 0 )
                            {
                                removeEnemy (key);
                                spawnEmitter ("bloodSplash", 5, 40, 0, 0, data.currentEnemies[key].posX, data.currentEnemies[key].posY);
                                data.kills++;
                            }
                        }
                    }
					spawnEmitter ("explosion", 5, 40, 0, 0, data.currentEnemies[data.currentProjectiles[projectileID].targetID].posX, data.currentEnemies[data.currentProjectiles[projectileID].targetID].posY);
				}
				else
				{
					spawnEmitter ("bloodSplash", 5, 40, 0, 0, data.currentEnemies[data.currentProjectiles[projectileID].targetID].posX, data.currentEnemies[data.currentProjectiles[projectileID].targetID].posY);
				}
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


// Spawns a temporary GFX emitter
function spawnEmitter (cssClass, frames, playSpeed, offsetX, offsetY, posX, posY)
{
	var domRepresentative = $("<div class='" + cssClass + "' id='emitter" + data.currentEmitterID + "'></div>");
	domRepresentative.css("left", posX + offsetX); 
	domRepresentative.css("top", posY + offsetY);
	animateSprite (domRepresentative, frames, false, playSpeed);
	$("#objects").append(domRepresentative);
	// emitter terminates itself after being played
	setTimeout(function(){ domRepresentative.remove(); }, frames * playSpeed);
}

// removes DOM objects and marks items for deletion
function removeEnemy (enemyID)
{
	$("#" + enemyID).remove();
	$("#lifebar" + enemyID).remove();
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
		data.killAllTimers = true;
		$("#shroud").css("display", "block");
		$("#overlayLost").css("display", "block");
	}
}

function winLevel ()
{
	$("#shroud").css("display", "block");
	$("#overlayNextLevel").css("display", "block");
}

function winGame ()
{
	$("#shroud").css("display", "block");
	$("#overlayWon").css("display", "block");
}

function determineRequiredKills ()
{
	data.requiredKills = 0;
	for (key in data.waves[data.currentLevel])
	{
		data.requiredKills += data.waves[data.currentLevel][key].length - 1;
	}
}

function rotate(target, degree)
{
    // For webkit browsers: e.g. Chrome
	target.css({ WebkitTransform: 'rotate(' + (-1) * degree + 'deg)'});
    // For Mozilla browser: e.g. Firefox
	target.css({ '-moz-transform': 'rotate(' + (-1) * degree + 'deg)'});
}

function generateCredits (amount)
{
	if (data.killAllTimers == false)
	{
		data.currentCredits += amount;
		setTimeout (function () { generateCredits(amount); }, 2500);
	}
}


function toDegrees (radian)
{
	return radian * (180 / Math.PI);
}

function toRadians (angle)
{
	return angle * (Math.PI / 180);
}

function spawnTower(offsetTop, offsetLeft, towerName)
{
    var tower =
        $('<div id="tower'+ data.currentTowerID +'" class="tower '+towerName+'" style="top:'+offsetTop+'px; left:'+offsetLeft+'px;">'+
            '<img class="turret" src="images/turrets/'+towerName+'.png"/>'+
            '<img class="base" src="images/turrets/base.png"/>'+
            '</div>');

    data.currentTowers[data.currentTowerID] = jQuery.extend(true, {domElement : tower}, data.towers[towerName]);
    data.currentTowers[data.currentTowerID].posY = offsetTop;
    data.currentTowers[data.currentTowerID].posX = offsetLeft;
	spawnEmitter ("summon", 7, 70, 0, 0, offsetLeft, offsetTop);
	var towerID = data.currentTowerID;
    data.currentTowers[data.currentTowerID].firePulse = setInterval(function() { towerShoots(towerID) }, data.currentTowers[data.currentTowerID].firerate[data.currentTowers[data.currentTowerID].level]);
	if (data.currentTowers[data.currentTowerID].special == "moneyBoost")
	{
		setTimeout (function () { generateCredits(3);}, 2500);
	}
    data.currentCredits -= data.currentTowers[data.currentTowerID].costs[data.currentTowers[data.currentTowerID].level];
    data.currentTowerID++;
    $('#objects').append(tower);
}