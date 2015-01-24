jQuery(document).ready(function()
{
   var mapVersion = data.currentLevel;
   $('#mapData').attr('href', 'maps/Map'+mapVersion+'.js');
    renderMap(mapData.layers.mapData, mapData.layers.objectData);
    initiateLevel();
    buildBuilderMenu();

   heartBeat = window.setInterval(updateGame, 25);
   window.setInterval(updateGame, 25);
    $("#map div").on('click', function(){
        $('#buildMenu').css('display', 'block');
        var clicked = this;
        $("#buildMenu button").unbind().on('click', function() {
            var offsetTop = clicked.offsetTop;
            var offsetLeft = clicked.offsetLeft;
            var towerName = this.name;
            spawnTower(offsetTop, offsetLeft, towerName);
            $('#buildMenu').css('display', 'none');
        });
    });

});

function spawnTower(offsetTop, offsetLeft, towerName){
    var tower =
        '<div id="'+ data.currentTowerID +'" class="tower '+towerName+'" style="top:'+offsetTop+'px; left:'+offsetLeft+'px;">'+
            '<img class="turret" src="images/turrets/'+towerName+'.png"/>'+
            '<img class="base" src="images/turrets/base.png"/>'+
        '</div>';

    data.currentTowers[data.currentTowerID] = jQuery.extend(true, {domElement : tower}, data.towers[towerName]);
    data.currentTowerID++;

    $('#objects').append(tower);
}

function updateGame ()
{
	for(key in data.currentEnemies)
	{
		checkForNextWaypoint(key);
		newPos = moveEntity (data.currentEnemies[key].posX, data.currentEnemies[key].posY, data.currentEnemies[key].speed, data.currentEnemies[key].angle);
		updatePosition(key, newPos);
	}
	processEnemiesToDelete();
	processProjectilesToDelete();
}

function initiateLevel(){
    for(key in data.waves[data.currentLevel])
    (function(key) {
            setTimeout(function ()
			{
				console.log("Key: " + key);
				spawnEnemies(data.waypoints[data.currentLevel][0], data.waves[data.currentLevel][key]);
			}, key);
    })(key);
}

function buildBuilderMenu()
{
    var buildTowerHTML = "";
    
    $.each(data.towers, function(key, value) {
        buildTowerHTML = buildTowerHTML +
            '<div id="rockets">'+
                '<img src="images/turrets/'+ key +'.png" />'+
                '<h4 class="name">'+ key +'</h4>'+
                '<ul>'+
                    '<li class="damageIcon">'+
                        '<span class="damage">'+ value.damage +'</span>'+
                    '</li>'+
                    '<li class="firerateIcon">'+
                        '<span class="firerate">'+ value.firerate +'</span>'+
                    '</li>'+
                    '<li class="rangeIcon">'+
                        '<span class="range">'+ value.range +'</span>'+
                    '</li'+
                    '<li class="weaknessIcon">'+
                        'Weak: <span class="weakness">'+ value.damageType +'</span>'+
                    '</li>'+
                '</ul>'+
                '<button name="'+key+'" class="buildButton">Bauen</button>'+
            '</div>';
    });

    $('.buildExplanationHeader').after(buildTowerHTML);
}
