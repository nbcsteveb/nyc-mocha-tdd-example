export {$on, $newEvent, $fireEvent}

const EventEmitter = require('eventemitter3')
class Events extends EventEmitter {}
const events = new Events()

function $newEvent (eventName, callback) {
  events.on(eventName, callback)
}

function $fireEvent (eventName, data) {
  events.emit(eventName, data)
}

// addEventListener wrapper:
function $on (target, type, callback, useCapture) {
  target.addEventListener(type, callback, !!useCapture)
}
