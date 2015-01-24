data =			{
					currentLevel:		1,
					life:				10,
					killAllTimers:		false,
					currentEnemyID:		0,
					currentTowerID:		0,
					currentProjectileID:0,
					
					currentEnemies:		{},
					enemiesToDelete:	[],
					currentTowers:		{},
					towersToDelete:		[],
					currentProjectiles:	{},
					projectilesToDelete:[],
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
															
											2:				[
																[17,0],
																[17,3],
																[16,3],
																[16,4],
																[4,4],
																[4,7],
																[12,7],
																[12,9],
																[6,9],
																[6,12],
															],
											
											3:			[
															[0,11],
															[4,11],
															[4,2],
															[16,2],
															[16,12],
															[6,12],
															[6,9],
															[11,9],
															[11,7],
														]
															
										},
										
					waves:				{
											// Level
											1:				{
																// Wavetime & list
																1000:		["marine"],
																//1000:		["marine", "marine", "marine", "marine"],
																3100:		["marine","marine"],
															},
											// Level
											2:				{
																// Wavetime & list
																5000:		["marine", "marine", "marine"],
																8000:		["marine", "marine"],
															},
										},
					
					enemies:			{
											marine:			{
																hitpoints:			15,
																speed:				0.8,
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
																level:				1,
																damage:				[5, 6, 7, 8, 9],
																firerate:			[1000, 9500, 900, 850, 800],
																range:				[64, 72, 80, 88, 96],
																damageType:			"normal",
																special:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																projectile:			"laser",
															},
										},
										
					projectiles:		{
											laser:			{
																speed:				5,
																damage:				0,
																tagetID:			0,
																special:			"",
															}
										}
				};