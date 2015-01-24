
data =			{
					currentLevel:		0,
					life:				10,
					currentWaypoints:	[],
					killAllTimers:		false,
					currentEnemyID:		0,
					
					currentEnemies:		[],
					
					waypoints:			{
											// Level
											1:				{
																// Waypoint order
																1:	[0,0],
																2:	[0,0],
															},
										}
										
					waves:				{
											// Level
											1:				{
																// Wavetime & list
																5000:		[marine, marine, marine];
																8000:		[marine, marine];
															},
											// Level
											2:				{
																// Wavetime & list
																5000:		[marine, marine, marine];
																8000:		[marine, marine];
															},
										}
					
					enemies:			{
											marine:			{
																hitpoints:			1,
																speed:				0.2,
																image:				"",
																flying:				false,
																resistence:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	0,
															},
										},
					
					towers:				{
											tower1:			{
																costs:				[1, 1, 1, 1],
																level:				0,
																damage:				[1, 1, 1, 1],
																firerate:			[1000, 1000, 1000, 1500],
																range:				[1, 1, 1, 1],
																damageType:			"",
																special:			"",
																posX:				0,
																posY:				0,
																angle:				0,
															},
										},
				};