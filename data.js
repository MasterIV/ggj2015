
data =			{
					currentLevel:		1,
					life:				10,
					killAllTimers:		false,
					currentEnemyID:		0,
					
					currentEnemies:		{},
					
					waypoints:			{
											// Level
											1:				[
																// Waypoints in order
																[3,0],
																[3,6],
																[6,6],
																[6,10],
																[9,10],
																[9,9],
																[14,9],
															],
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
																hitpoints:			15,
																speed:				0.8,
																image:				"",
																flying:				false,
																resistence:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
										},
					
					towers:				{
											laserChaser:	{
																costs:				[150, 200, 250, 300, 350],
																level:				0,
																damage:				[5, 6, 7, 8, 9],
																firerate:			[1000, 9500, 900, 850, 800],
																range:				[64, 72, 80, 88, 96],
																damageType:			"normal",
																special:			"",
																posX:				0,
																posY:				0,
																angle:				0,
															},
										},
				};