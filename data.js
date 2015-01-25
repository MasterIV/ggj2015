data =			{
					currentLevel:		1,
					maxLevels:			13,
					life:				10,
					kills:				0,
					requiredKills:		0,
					killAllTimers:		false,
					currentEnemyID:		0,
					currentTowerID:		0,
					currentProjectileID:0,
					currentCredits:		0,
					currentCreditBoosts:[],
					
					currentEnemies:		{},
					enemiesToDelete:	[],
					currentTowers:		{},
					towersToDelete:		[],
					currentProjectiles:	{},
					projectilesToDelete:[],
					waypoints:			{
											// Level
											1:				{
																// Different paths
																		// Waypoints in order
																1:		[
																			[3,0],
																			[3,6],
																			[6,6],
																			[6,10],
																			[9,10],
																			[9,9],
																			[14,9],
																		],
																2:		[
																			[14,9],
																			[9,9],
																			[3,6],
																		],
															},
															
											2:				{
																1:		[
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
															},
											
											3:				{
																1:		[
																			[0,11],
																			[4,11],
																			[4,2],
																			[16,2],
																			[16,12],
																			[6,12],
																			[6,9],
																			[11,9],
																			[11,7],
															
																		],
															},
											
											4:				{
																1:		[
																			[6,0],
																			[6,2],
																			[8,2],
																			[8,12],
																			[2,12],
																			[2,10],
															
																		],
																		
																2:		[
																			[19,4],
																			[16,4],
																			[16,7],
																			[8,7],
																			[2,12],
																			[2,10],
															
																		],
															},
											
											5:				{
																1:		[
																			[0,3],
																			[3,3],
																			[6,3],
																			[9,3],
																			[9,10],
															
																		],
																		
																2:		[
																			[19,5],
																			[17,5],
																			[17,3],
																			[9,3],
																			[9,10],
															
																		],
															},
															
											6:				{
																1:		[
																			[3,0],
																			[3,11],
																			[5,11],
																			[5,7],
																			[8,7],
																			[8,8],
																			[12,8],
																			[12,5],
																			[17,5],
																			[17,7],
															
																		],
																		
																2:		[
																			[13,0],
																			[13,1],
																			[12,1],
																			[12,2],
																			[12,3],
																			[12,4],
																			[12,5],
																			[17,5],
																			[17,7],
															
																		],
															},
															
											7:				{
																1:		[
																			[1,0],
																			[1,4],
																			[10,4],
																			[10,8],
																			[14,8],
																			[14,12],
																			[17,12],
															
																		],
																		
																2:		[
																			[1,0],
																			[2,1],
																			[7,4],
																			[10,6],
																			[12,8],
																			[14,10],
																			[17,12],
															
																		],
															},
											
											8:				{
																1:		[
																			[16,14],
																			[16,6],
																			[11,6],
																			[11,10],
																			[4,10],
																			[4,2],
															
																		],
																		
																2:		[
																			[19,6],
																			[16,6],
																			[11,6],
																			[4,2],
															
																		],
																		
																3:		[
																			[4,14],
																			[4,13],
																			[4,12],
																			[4,11],
																			[4,10],
																			[4,2],
															
																		],
															},
											
											9:				{
																1:		[
																			[8,14],
																			[8,12],
																			[9,12],
																			[9,6],
																			[7,6],
															
																		],
																		
																2:		[
																			[19,6],
																			[18,6],
																			[12,6],
																			[9,6],
																			[7,6],
															
																		],
																		
																3:		[
																			[13,0],
																			[12,1],
																			[11,2],
																			[10,4],
																			[7,6],
															
																		],
																		
																4:		[
																			[0,6],
																			[1,6],
																			[2,6],
																			[5,6],
																			[7,6],
															
																		],
																		
																5:		[
																			[10,14],
																			[12,6],
																			[10,4],
																			[7,3],
																			[5,6],
																			[7,6],
															
																		],
															},
											
																										
											10:				{
																1:		[
																			[0,5],
																			[11,5],
																			[11,7],
																			[16,7],
															
																		],
																		
																2:		[
																			[0,9],
																			[11,9],
																			[11,7],
																			[16,7],
															
																		],
																		
																3:		[
																			[0,7],
																			[9,7],
																			[11,7],
																			[16,7],
															
																		],
																															
																		
															},
											
											11:				{
																1:		[
																			[9,14],
																			[9,12],
																			[12,12],
																			[12,7],
																			[11,7],
																			[11,6],
																			[9,6],
																			[9,4],
															
																		],
																		
																2:		[
																			[9,14],
																			[9,12],
																			[6,12],
																			[6,7],
																			[7,7],
																			[7,6],
																			[9,6],
																			[9,4],
															
																		],
																		
																3:		[
																			[9,14],
																			[9,12],
																			[9,10],
																			[9,9],
																			[9,8],
																			[9,7],
																			[9,6],
																			[9,4],
															
																		],
																															
																		
															},				

											12:				{
																1:		[
																			[19,7],
																			[16,7],
																			[16,9],
																			[7,9],
																			[3,9],
															
																		],
																		
																2:		[
																			[2,0],
																			[2,5],
																			[7,5],
																			[7,9],
																			[3,9],
															
																		],
																		
																3:		[
																			[10,14],
																			[10,12],
																			[7,12],
																			[7,9],
																			[3,9],
															
																		],
																															
															},														

											13:				{
																1:		[
																			[0,7],
																			[7,7],
																			[10,7],
															
																		],
																		
																2:		[
																			[10,0],
																			[10,4],
																			[10,7],
															
																		],
																		
																3:		[
																			[19,7],
																			[13,7],
																			[10,7],
															
																		],
																		
																4:		[
																			[10,14],
																			[10,10],
																			[10,7],
															
																		],		
																															
															},															
							
			
															
										},
										
					waves:				{
											// Level
											1:				{
																// Wavetime & list, first item is path for that unit
																//800:		[2, "marine", "marine"],
																//7000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																2000:		[1, "marine","marine","marine","marine","marine","marine","marine","marine","marine","marine"],
																//1000:		["marine", "marine", "marine", "marine"],
																//3100:		[2, "marine","marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																//4000:		[1, "marine","marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																//10500:		[2, "marine","marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																//15000:		[1, "marine","marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
															},
											// Level
											2:				{
																// Wavetime & list
																15000:		[1, "marine", "marine", "marine"],
																22000:		[1, "hoverBike", "marine", "marine", "marine"],
																35000:		[1, "jeep"],
																45000:		[1, "marine", "marine", "marine", "hoverBike", "hoverBike"],
																70000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																93000:		[1, "jeep", "jeep"],
																97000:		[1, "jeep", "jeep"],
																100000:		[1, "jeep", "jeep"],
																102500:		[1, "jeep", "jeep"],
																104000:		[1, "jeep", "jeep"],
																115000:		[1, "elite", "marine", "marine", "marine", "marine"],
																130000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike", "jeep"],
																148000:		[1, "jeep", "elite", "jeep", "elite", "specOps", "elite", "specOps"],
															},
															
											3:				{
																// Wavetime & list
																12000:		[1, "jeep", "jeep"],
																28000:		[1, "marine", "marine", "marine", "marine", "marine"],
																35000:		[1, "jeep"],
																51000:		[1, "elite", "specOps", "elite", "specOps"],
																62000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																65000:		[1, "jeep"],
																72000:		[1, "tank"],
																78000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "elite"],
																92000:		[1, "jeep", "jeep", "jeep", "jeep", "jeep"],
																100000:		[1, "tank"],
																107000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																127000:		[1, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																142000:		[1, "tank"],
																145000:		[1, "hoverBike","marine","marine", "marine", "marine", "marine", "marine"],
																151000:		[1, "jeep", "jeep"],
																155000:		[1, "tank"],
																157000:		[1, "marine", "marine", "marine", "marine", "elite", "elite"],
																160000:		[1, "spaceKnight"],
																168000:		[1, "hoverBike", "hoverBike", "tank", "tank", "tank"],
																
															},
															
											4:				{
																// Wavetime & list
																9000:		[1, "marine", "marine"],
																12000:		[1, "marine", "marine", "marine", "marine"],
																13000:		[2, "marine", "marine", "elite"],
																14000:		[1, "hoverBike", "marine", "marine", "marine"],
																16000:		[1, "jeep", "jeep"],
																16500:		[2, "elite", "elite"],
																24000:		[1, "marine", "marine", "marine", "marine", "marine", "marine"],
																26000:		[2, "tank"],
																27500:		[1, "hoverBike"],
																38000:		[1, "specOps", "specOps", "specOps", "specOps"],
																39000:		[1, "jeep", "jeep"],
																41000:		[1, "tank"],
																49000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "elite"],
																51000:		[2, "jeep", "jeep", "jeep"],
																58000:		[1, "tank"],
																63000:		[2, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																77000:		[1, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																78200:		[2, "tank"],
																81000:		[1, "hoverBike", "marine", "marine", "marine"],
																82000:		[2, "jeep", "jeep"],
																83000:		[1, "tank"],
																84000:		[2, "marine", "marine", "marine", "marine", "elite", "elite"],
																88000:		[1, "hoverBike", "hoverBike"],
																100000:		[2, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																101000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																109000:		[2, "marine", "marine", "marine", "marine", "elite", "elite", "marine", "marine", "marine", "marine", "elite", "elite"],
																109500:		[1, "specOps", "specOps", "specOps"],
																112000:		[1, "specOps", "specOps", "specOps"],
																113000:		[1, "specOps", "specOps", "specOps"],
																117000:		[1, "spaceKnight"],
																117500:		[2, "spaceKnight"],
															},
															
											5:				{
																// Wavetime & list
																5000:		[2, "marine", "marine"],
																9000:		[2, "marine", "marine", "marine", "marine"],
																13000:		[2, "marine", "marine", "elite"],
																15000:		[2, "marine", "marine", "elite"],
																20000:		[2, "marine", "elite", "marine", "marine", "elite", "marine", "marine", "elite", "marine"],
																24000:		[1, "hoverBike"],
																28000:		[1, "jeep", "jeep"],
																30000:		[2, "elite", "elite", "elite", "elite"],
																32000:		[1, "jeep", "jeep"],
																34000:		[1, "jeep", "jeep"],
																41000:		[1, "tank"],
																45000:		[2, "marine", "marine", "marine", "marine"],
																51000:		[1, "tank"],
																52000:		[2, "marine", "marine", "marine", "marine"],
																53000:		[2, "marine", "marine", "marine", "marine"],
																55000:		[2, "marine", "marine", "marine", "marine"],
																59000:		[2, "elite", "elite", "elite", "elite"],
																61000:		[1, "tank"],
																61500:		[2, "specOps", "specOps"],
																63000:		[2, "specOps", "specOps"],
																65000:		[2, "specOps", "specOps"],
																66000:		[2, "specOps", "specOps"],
																71000:		[1, "tank"],
																76000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																80000:		[2, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																81000:		[1, "tank"],
																95000:		[2, "marine", "elite", "specOps"],
																99000:		[1, "jeep", "jeep", "jeep", "jeep"],
																100000:		[2, "marine", "elite", "specOps"],
																104000:		[1, "jeep", "jeep", "jeep", "jeep"],
																105000:		[2, "marine", "elite", "specOps"],
																107000:		[1, "tank"],
																109000:		[1, "tank", "tank"],
																110000:		[2, "marine", "elite", "specOps"],
																113000:		[1, "hoverBike", "hoverBike", "hoverBike"],
																115000:		[2, "marine", "elite", "specOps"],
																116000:		[1, "hoverBike", "hoverBike", "hoverBike"],
																119000:		[1, "hoverBike", "hoverBike", "hoverBike", "tank"],
																120000:		[2, "marine", "elite", "specOps"],
																124000:		[1, "tank", "tank", "tank", "tank", "tank"], 
																125000:		[2, "marine", "elite", "specOps"],
																130000:		[2, "marine", "elite", "specOps", "spaceKnight"],
															},
											
											6:				{
																// Wavetime & list
																8000:		[1, "marine", "marine", "marine", "marine", "marine"]
																12000:		[1, "jeep", "jeep"],
																13000:		[1, "marine", "marine", "marine", "marine", "elite"],
																18000:		[1, "marine", "marine", "marine", "marine", "elite"],
																22000:		[1, "marine", "marine", "marine", "marine", "marine", "elite"],
																32000:		[1, "jeep"],
																34000:		[1, "marine", "marine", "marine", "marine", "marine", "elite"],
																35500:		[2, "specOps", "specOps", "specOps"],
																38000:		[1, "marine", "marine", "marine", "marine", "marine", "elite"],
																45500:		[2, "specOps", "specOps", "specOps", "specOps"],
																51000:		[1, "elite", "specOps", "elite", "specOps"],
																62000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																65000:		[1, "jeep"],
																68000:		[1, "marine", "marine", "marine", "elite" "marine", "marine", "elite"],
																69500:		[2, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																72000:		[1, "tank"],
																78000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "elite"],
																79000:		[2, "tank"],
																80000:		[1, "specOps", "specOps", "specOps", "specOps", "specOps"],
																85000:		[1, "marine", "marine", "marine", "marine", "marine"],
																92000:		[1, "jeep", "jeep", "jeep", "jeep", "jeep"],
																98000:		[1, "marine", "marine", "marine", "marine", "marine"],
																99000:		[2, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																100000:		[1, "tank"],
																104000:		[1, "marine", "marine", "marine", "elite" "marine", "marine", "elite"],
																106000:		[2, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																107000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																112000:		[1, "marine", "marine", "marine", "elite" "marine", "marine", "elite"],
																127000:		[1, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																132000:		[1, "elite", "marine", "marine", "elite" "marine", "marine", "elite"],
																133000:		[2, "tank"],
																142000:		[1, "tank"],
																143000:		[1, "elite", "elite", "elite", "elite"],
																145000:		[1, "hoverBike","marine","marine", "marine", "marine", "marine", "marine"],
																148000:		[2, "tank"],
																151000:		[1, "jeep", "jeep"],
																153000:		[2, "specOps", "elite", "specOps", "elite", "specOps", "elite"],
																155000:		[1, "tank"],
																157000:		[1, "marine", "marine", "marine", "marine", "elite", "elite"],
																159000:		[2, "hoverBike", "hoverBike", "hoverBike"],
																162000:		[1, "hoverBike", "hoverBike", "tank", "spaceKnight"],
																165000:		[2, "marine", "marine", "specOps", "specOps", "specOps", "specOps", "tank"],
															},
											
											7:				{
																// Wavetime & list
																8000:		[1, "hoverBike", "hoverBike", "hoverBike"],
																14000:		[1, "tank"],
																16000:		[1, "marine", "marine", "marine", "marine", "elite"],
																20000:		[1, "hoverBike", "hoverBike", "hoverBike"],
																30000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																31000:		[1, "marine", "marine", "marine", "marine", "marine"],
																40000:		[1, "tank"],
																42000:		[1, "tank"],
																44000:		[1, "jeep", "jeep", "jeep", "jeep", "jeep"],
																58000:		[2, "rocketeer"],
																64000:		[1, "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																66000:		[1, "jeep", "jeep", "jeep", "jeep"],
																80000:		[2, "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																81000:		[2, "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																84000:		[1, "spaceKnight"],
																102000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																104000:		[1, "jeep", "jeep", "jeep", "jeep"],
																106000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																116000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																127000:		[1, "tank", "tank", "tank", "tank", "specOps", "specOps", "specOps", "specOps", "specOps", "specOps"],
																137000:		[2, "rocketeer", "rocketeer"],
																144000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																160000:		[2, "jet", "jet"]
																165000:		[2, "jet", "jet", "jet", "jet", "jet", "jet"]
																172000:		[1, "jeep", "jeep"],
																174000:		[1, "tank", "tank"],
																175000:		[1, "hoverBike", "hoverBike"],
																177000:		[1, "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																179000:		[2, "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																181000:		[1, "elite", "elite", "elite", "elite", "specOps", "specOps", "specOps", "specOps"],
																185000:		[1, "spaceKnight"],
																190000:		[1, "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																192000:		[2, "jet", "jet", "jet", "jet", "jet", "jet"]
																
															},
															
												8:				{
																// Wavetime & list
																8000:		["rocketeer", "rocketeer"],
																12000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																12000:		["rocketeer", "rocketeer"],
																15000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																21000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																21000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																25000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																25000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																31000:		["rocketeer", "rocketeer"],
																31000:		["rocketeer", "rocketeer"],
																32000:		["tank", "tank"],
																34000:		["rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer", "rocketeer"],
																40000:		["marine", "marine", "marine", "marine"],
																44000:		["marine", "marine", "marine", "marine"],
																48000:		["marine", "marine", "marine", "marine"],
																52000:		["marine", "marine", "marine", "marine"],
																54000:		["marine", "marine", "marine", "marine"],
																58000:		["marine", "marine", "marine", "marine"],
																62000:		["marine", "marine", "marine", "marine"],
																66000:		["marine", "marine", "marine", "marine"],
																70000:		["marine", "marine", "marine", "marine"],
																74000:		["marine", "marine", "marine", "marine"],
																78000:		["marine", "marine", "marine", "marine"],
																82000:		["marine", "marine", "marine", "marine"],
																86000:		["marine", "marine", "marine", "marine"],
																90000:		["marine", "marine", "marine", "marine"],
																132000:		["marine", "marine", "marine", "marine"],
																136000:		["marine", "marine", "marine", "marine"],
																140000:		["marine", "marine", "marine", "marine"],
																144000:		["marine", "marine", "marine", "marine"],
																148000:		["marine", "marine", "specOps", "specOps"],
																152000:		["marine", "marine", "marine", "marine"],
																156000:		["marine", "marine", "marine", "marine"],
																160000:		["marine", "marine", "specOps", "specOps"],
																164000:		["marine", "marine", "marine", "marine"],
																168000:		["marine", "marine", "marine", "marine"],
																172000:		["marine", "marine", "specOps", "specOps"],
																190000:		["marine", "marine", "marine", "marine"],
																194000:		["marine", "marine", "specOps", "specOps"],
																198000:		["marine", "marine", "marine", "marine"],
																202000:		["marine", "marine", "specOps", "specOps"],
																206000:		["marine", "marine", "marine", "marine"],
																210000:		["elite", "elite", "specOps", "specOps"],
															},
															
												9:			{
																// Wavetime & list
																15000:		["specOps"],
																30000:		["specOps", "specOps", "specOps", "specOps"],
																42000:		["jeep", "jeep"],
																44000:		["jeep", "jeep"],
																52000:		["tank"],
																60000:		["marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																64000:		["elite", "elite"],
																66000:		["tank"],
																88000:		["hoverBike", "hoverBike", "hoverBike"],
																91000:		["hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																101000:		["tank", "tank"],
																111000:		["specOps", "specOps", "specOps", "specOps"],
																111250:		["elite", "elite", "elite", "elite"],
																115000:		["hoverBike", "hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																125000:		["tank", "tank"],
																127000:		["jeep, "jeep", "jeep", "jeep"],
																150000:		["spaceKnight"],
																165000:		["marine", "marine", "marine", "marine"],
																166200:		["marine", "marine", "marine", "marine"],
																167400:		["marine", "marine", "marine", "marine"],
																168800:		["marine", "marine", "marine", "marine"],
																180000:		["hoverBike", "hoverBike", "hoverBike", "hoverBike"], 
																180500:		["hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																184000:		["marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine", "marine"],
																186000:		["elite", "elite", "elite", "elite"],
																200000:		["tank", "tank"],
																200500:		["tank", "tank"],
																202500:		["jeep", "jeep", "jeep", "jeep", "jeep", "jeep"],
																207500:		["hoverBike", "hoverBike", "hoverBike", "hoverBike"],
																218000:		["ironclad"],
															},
										},
					
					enemies:			{
											marine:			{
																maxHitpoints:		14,
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
																slowedTurns:		0,
															},
															
											elite:			{
																maxHitpoints:		35,
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
																slowedTurns:		0,
															},
															
											tank:			{
																maxHitpoints:		100,
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
																slowedTurns:		0,
															},
															
											hoverBike:		{
																maxHitpoints:		20,
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
																slowedTurns:		0,
															},
															
											jeep:			{
																maxHitpoints:		45,
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
																slowedTurns:		0,
															},
															
											spaceKnight:	{
																maxHitpoints:		150,
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
																slowedTurns:		0,
															},
															
											rocketeer:		{
																maxHitpoints:		20,
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
																slowedTurns:		0,
															},
															
											jet:			{
																maxHitpoints:		25,
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
																slowedTurns:		0,
															},
															
											ironclad:		{
																maxHitpoints:		250,
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
																slowedTurns:		0,
															},
															
											specOps:		{
																maxHitpoints:		35,
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
																slowedTurns:		0,
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
																damage:				10,
																targetID:			0,
																type:				"normal",
																special:			"",
															},
															
											bolt:			{
																speed:				4,
																damage:				0,
																targetID:			0,
																type:				"pierce",
																special:			"",
															},
											
											rocket:			{
																speed:				5,
																damage:				0,
																targetID:			0,
																type:				"field",
																special:			"splash",
															},
								
											shockwave:		{
																speed:				6,
																damage:				0,
																targetID:			0,
																type:				"field",
																special:			"slow",
															},
										}
				};