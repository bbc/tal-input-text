define(['bbcrd/widgets/input-text'], function(InputText){
  describe('widgets/input-text', function(){
    var sandbox;

    beforeEach(function(){
      sandbox = sinon.sandbox.create();
    });

    afterEach(function(){
      sandbox.restore();
    });

    it('should be initialised only with a label', function(){
      var spy = sandbox.spy(InputText.prototype, '_super');
      var i = new InputText('test');

      expect(spy.calledWith(undefined, 'test')).to.equal(true);
    });

    it('should accept a placeholder option', function(){
      var spy = sandbox.spy(InputText.prototype, 'addClass');
      var i = new InputText('test', { placeholder: true });

      expect(spy.calledWith('placeholder')).to.equal(true);
    });

    describe('setText', function(){
      it('should behave like the label it extends', function(){
        var i = new InputText('test');
        var spy = sandbox.spy(i, '_super');

        i.setText('new test');

        expect(spy.calledWith('new test')).to.equal(true);
      });

      it('should disable the placeholder when setting a new text', function(){
        var i = new InputText('test', { placeholder: true });
        var spy = sandbox.stub(i, 'disablePlaceholder');

        sandbox.stub(i, 'hasClass').withArgs('placeholder-active').returns(true);

        i.setText('a');

        expect(spy.calledOnce).to.equal(true);
      });

      it('should enable the placeholder when clearing the text', function(){
        var i = new InputText('test', { placeholder: true });
        var spy = sandbox.stub(i, 'enablePlaceholder');

        i.setText('a');
        expect(spy.calledOnce).to.equal(false);

        i.setText('');
        expect(spy.calledOnce).to.equal(true);
      });
    });

    describe('enablePlaceholder', function(){
      it('should emit an "empty" event when clearing the text', function(){
        var i = new InputText('test', { placeholder: true });
        var spy = sandbox.spy(i, 'bubbleEvent');

        i.addEventListener('empty', spy);
        i.enablePlaceholder();

        expect(spy.calledWith(['empty'])).to.equal(true);
      });
    });

    describe('disablePlaceholder', function(){
      it('should emit a "not-empty" event when setting some text', function(){
        var i = new InputText('test', { placeholder: true });
        var spy = sandbox.spy(i, 'bubbleEvent');

        i.addEventListener('not-empty', spy);
        i.disablePlaceholder();

        expect(spy.calledWith(['not-empty'])).to.equal(true);
      });
    });
  });
});