define('mocks/event', [], function(){
  'use strict';

  var EventClass = function EventClass(){
    return Array.prototype.slice.call(arguments);
  };

  return EventClass;
});