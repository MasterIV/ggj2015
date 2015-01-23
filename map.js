/**
 * Returns Map HTML string
 * @var mapdata JSON
 */
function renderMap(mapData)
{
    var i = 1;
    var map = "";

    mapData.forEach(function (tile) {
            map = map + "<div id='" + i +"' class='"+ tile +"' data-waypoint='false'></div>";
            i++;
    });

    $('#map').append(map);
}
