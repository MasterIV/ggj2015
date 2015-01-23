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
	window.setTimeout(animateSpriteHelper(target, frames, 1, loop, playSpeed), playSpeed);
}

// Animates a sprite.
// Target -> JQUERY DIV Object
// frames -> total amount of frames in the animation, including the start frame!
// currentFrame -> currently displayed frame
// loop -> true / false (true: animation will be looped infinitely)
// playSpeed -> pause in milliseconds between animations
function animateSpriteHelper (target, frames, currentFrame, loop, playSpeed)
{
	if (target.length > 0)
	{
		target.css('background-position', target.css('width') + target.css('background-position').split(' ')[0] + 'px 0px');
		currentFrame++;
		if (currentFrame < frames)
		{
			window.setTimeout(animateSpriteHelper(target, frames, currentFrame, loop, playSpeed), playSpeed);
		}
		if (currentFrame == frames && loop)
		{	
			window.setTimeout(animateSpriteHelper(target, frames, 1, loop, playSpeed), playSpeed);
		}
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