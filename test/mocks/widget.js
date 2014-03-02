define('mocks/widget', [], function(){
  'use strict';

  var fn = function(){};

  var extendFn = function(object){
    var newClass = function(){
      this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    newClass.prototype = Object.create(Widget.prototype);

    for(var prop in object){
      newClass.prototype[prop] = object[prop];
    }

    return newClass;
  };

  var Widget = function WidgetClass(){

  };

  Widget.extend = extendFn;

  Widget.prototype = {
    hasClass: fn,
    addClass: fn,
    removeClass: fn,
    bubbleEvent: fn,
    addEventListener: fn,
    getText: fn,
    _super: fn
  };

  return Widget;
});