// -----JS CODE-----
//@input SceneObject[] screens;
//@input int defaultScreenIndex;

var t = 0;
var i = 0;


init();

function init()
{
    loadScreenByIndex(script.defaultScreenIndex);
}

function onUpdate(eventData)
{
    // update functionality
}


// disable all other screens except the one at index i
function loadScreenByIndex(i)
{
    for(var x = 0; x < script.screens.length; x++)
    {
        script.screens[x].enabled = x == i ? true : false;
    }
}

// load screen on top of the current screen
function loadScreenByIndexAdditive(i)
{
    script.screens[i].enabled = true;
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate)