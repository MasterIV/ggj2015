
jQuery(document).ready(function()
{
   var mapVersion = data.currentLevel;
   $('#mapData').attr('href', 'maps/Map'+mapVersion+'.js')
   renderMap(mapData.layers.mapData, mapData.layers.objectData);
   window.setInterval(updateGame, 25);
});
function updateGame ()
{
}
