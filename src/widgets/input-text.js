require.def('bbcrd/widgets/input-text',
  [
    'antie/widgets/label',
    'antie/events/event'
  ],
  function(Label, Event) {
    'use strict';

    return Label.extend({
      /**
       * @constructor
       * @ignore
       */
      init: function(text, options) {
        this._options = options || {};
        this._initialText = (text === undefined ? "" : text);
        this._super(options.id, text);

        this.addClass('input-text');

        if (options.placeholder) {
          this.addClass('placeholder');
          this.addClass('placeholder-active');
        }
      },

      /**
       * @api
       * @extends Label.setText
       * @param {String} text
       */
      setText: function setText(text){
        if (text === '' && this._options.placeholder) {
          text = this._initialText;
          this.enablePlaceholder();
        }
        else if (this._options.placeholder && this.hasClass('placeholder-active')) {
          this.disablePlaceholder();
        }

        this._super(text);
      },

      /**
       * Activates the placeholder behaviour
       *
       * @api
       */
      enablePlaceholder: function(){
        this.addClass('placeholder-active');
        this.bubbleEvent(new Event('empty'));
      },

      /**
       * Deactivates the placeholder behaviour
       *
       * @api
       */
      disablePlaceholder: function(){
        this.removeClass('placeholder-active');
        this.bubbleEvent(new Event('not-empty'));
      }
    });
  }
);
