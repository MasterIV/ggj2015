data =			{
					currentLevel:		1,
					life:				10,
					kills:				0,
					requiredKills:		0,
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
											
											3:				[
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
																1000:		["marine", "marine", "marine"],
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
																hitpoints:			14,
																speed:				0.6,
																flying:				false,
																resistence:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											elite:			{
																hitpoints:			35,
																speed:				0.65,
																flying:				false,
																resistence:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											tank:			{
																hitpoints:			100,
																speed:				0.2,
																flying:				false,
																resistence:			"normal",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											hoverBike:			{
																hitpoints:			20,
																speed:				1.3,
																flying:				false,
																resistence:			"pierce",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											jeep:			{
																hitpoints:			45,
																speed:				0.8,
																flying:				false,
																resistence:			"normal",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											spaceKnight:	{
																hitpoints:			150,
																speed:				0.4,
																flying:				false,
																resistence:			"normal",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											rocketeer:		{
																hitpoints:			20,
																speed:				0.6,
																flying:				true,
																resistence:			"field",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											jet:			{
																hitpoints:			25,
																speed:				1.3,
																flying:				true,
																resistence:			"field",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											ironclad:		{
																hitpoints:			250,
																speed:				0.2,
																flying:				true,
																resistence:			"normal",
																posX:				0,
																posY:				0,
																angle:				0,
																animationFrames:	4,
																nextWaypoints:		[],
																currentWaypoint:	1,
															},
															
											specOps:		{
																hitpoints:			35,
																speed:				0.75,
																flying:				false,
																resistence:			"pierce",
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
																damage:				[5, 7, 9, 11, 13],
																firerate:			[1000, 823, 690, 582, 500],
																range:				[64, 72, 80, 88, 96],
																damageType:			"normal",
																special:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																projectile:			"laser",
															},
															
											boltBasher:		{
																costs:				[200, 250, 300, 350, 400],
																level:				0,
																damage:				[14, 23, 32, 41, 50],
																firerate:			[1800, 1750, 1700, 1650, 1600],
																range:				[72, 81, 90, 99, 108],
																damageType:			"pierce",
																special:			"",
																posX:				0,
																posY:				0,
																angle:				0,
																projectile:			"bolt",
											
															},
											
											sploder:		{
																costs:				[200, 250, 300, 350, 400],
																level:				0,
																damage:				[8, 11, 14, 17, 20],
																firerate:			[1616, 1338, 1194, 991, 875],
																range:				[64, 72, 80, 88, 96],
																damageType:			"field",
																special:			"splash",
																posX:				0,
																posY:				0,
																angle:				0,
																projectile:			"rocket",
															
															},
											
											distorter:		{
																costs:				[170, 220, 270, 320, 370],
																level:				0,
																damage:				[3, 4, 5, 6, 7],
																firerate:			[1000, 833, 714, 625, 555],
																range:				[70, 78, 86, 94, 102],
																damageType:			"field",
																special:			"slow",
																posX:				0,
																posY:				0,
																angle:				0,
																projectile:			"shockwave",
															
															},
															
											moneyMaker:		{
															
																costs:				[60],
																level:				0,
																damage:				[0],
																firerate:			[10000000],
																range:				[0],
																damageType:			"field",
																special:			"moneyBoost",
																posX:				0,
																posY:				0,
																angle:				0,
																projectile:			"shockwave",
															
															},
										
															
										},
										
					projectiles:		{
											laser:			{
																speed:				5,
																damage:				0,
																tagetID:			0,
																special:			"",
															},
															
											bolt:			{
																speed:				4,
																damage:				0,
																tagetID:			0,
																special:			"",
															},
											
											rocket:			{
																speed:				5,
																damage:				0,
																tagetID:			0,
																special:			"splash",
															},
								
											shockwave:		{
																speed:				6,
																damage:				0,
																tagetID:			0,
																special:			"slow",
															},
										}
				};