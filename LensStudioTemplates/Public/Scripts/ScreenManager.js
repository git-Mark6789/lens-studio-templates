// -----JS CODE-----
//@input float testFloat


var t = 0;

// Test
function logTime(eventData)
{
    t += eventData.getDeltaTime();
    print(addOne(t));
}

function addOne(x)
{
    return x + 1;
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(logTime)