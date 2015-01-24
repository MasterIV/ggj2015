/**
 * @param mapData
 */
function renderMap(mapData)
{
    var map = "";
    var tiles = getTilesPosition(mapData);

    tiles.forEach(function (tile) {
        map = map + "<div style='background-position: "+tile['top']+"px "+tile['left']+"px'></div>";
    });

    $('#map').append(map);
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
