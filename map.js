/**
 *
 * @param mapData
 * @param objectData
 * @returns {boolean}
 */
function renderMap(mapData, objectData)
{
    var map = "";
    var tiles = getTilesPosition(mapData);
    var blockers = getTileIDsForBlockers(objectData);
    var i = 0;
    var blocker;

    tiles.forEach(function (tile) {
        blocker = false;
        blockers.forEach(function(id){
            if (id == i)
            {
                blocker = true;
            }
        });

        map = map + "<div data-blocker='"+ blocker +"' style='background-position: -"+ (tile['left'] - 32) +"px -"+ tile['top'] +"px'></div>";
        i++;
    });

    $('#map').append(map);
}

/**
 *
 * @param objectData
 */
function getTileIDsForBlockers(objectData)
{
    var tileIDs = [];
    var i = 0;
    objectData.forEach(function (object) {
        if(object != 0) {
            tileIDs.push(i);
        }
        i++;
    });

    return tileIDs;
}

/**
 * @returns {Array} waypointsWithPosition
 * @param tiles
 */
function getTilesPosition(tiles)
{
    var tileHeight = 32;
    var tileWidth = 32;
    var tilesWithPosition = [];

    tiles.forEach(function(tile) {
        var multiplikator = Math.floor((tile / 20));
        var positions = [];

        positions['id'] = tile;
        positions['top'] = tileHeight * multiplikator;
        positions['left'] = tile%20 * tileWidth;

        tilesWithPosition.push(positions);
    });

    return tilesWithPosition;
}
