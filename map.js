/**
 * @param mapData
 */
function renderMap(mapData)
{
    var i = 0;
    var map = "";
    var tiles = tileIdToClass(mapData);

    tiles.forEach(function (tile) {
        map = map + "<div id='" + i +"' class='"+ tile +"'></div>";
        i++;
    });

    $('#map').append(map);
}

/**
 *
 * @param mapData TileIDs
 * @returns {Array} tiles
 */
function tileIdToClass(mapData)
{
    var tiles = [];
    mapData.forEach(function(tile) {
        if(tile == 1)
        {
            tiles.push('wegHorizontal');
        } else if(tile == 2)
        {
            tiles.push('wegVertikal');
        }
    });

    return tiles;
}

/**
 * @returns {Array} waypointsWithPosition
 * @param waypoints
 */
function getWaypointsPosition(waypoints)
{
    var tileHeight = 32;
    var tileWidth = 32;
    var waypointsWithPosition = [];

    waypoints.forEach(function(waypoint) {
        var multiplikator = Math.floor((waypoint / 20));
        var positions = [];

        positions['id'] = waypoint;
        positions['top'] = tileHeight * multiplikator;
        positions['left'] = waypoint%20 * tileWidth;

        waypointsWithPosition.push(positions);
    });

    return waypointsWithPosition;
}
