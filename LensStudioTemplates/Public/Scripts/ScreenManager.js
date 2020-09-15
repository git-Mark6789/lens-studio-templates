// -----JS CODE-----
//@input float testFloat


var t = 0;

// Test
function logTime(eventData)
{
    t += eventData.getDeltaTime();
    print(t);
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(logTime)