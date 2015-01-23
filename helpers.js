// Calculates the pixel-distance between two objects
function calculateDistance (oneX, oneY, twoX, twoY)
{
	xDist = Math.abs(oneX - twoX);
	yDist = Math.abs(oneY - twoY);
	
	return Math.sqrt((xDist * xDist) + (yDist * yDist));
}

// Calculates the looking angle from object ONE at object TWO
function calculateAngle (oneX, oneY, twoX, twoY)
{
	xDist = oneX - twoX;
	yDist = oneY - twoY;
	if (xDist != 0 || yDist != 0)
	{
		return Math.atan2(yDist, xDist);
	}
}

// Returns the new position of an object after moving it
function moveEntity (xPos, yPos, speed, angle)
{	
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

// Checks if two objects have collided. Tolerance states the pixel-distance for collision
function checkCollision (oneX, oneY, twoX, twoY, tolerance)
{
	if (calculateDistance (oneX, oneY, twoX, twoY) <= tolerance)
	{
		return true;
	}
	else
	{
		return false;
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