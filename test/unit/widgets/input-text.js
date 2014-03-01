define(['lib/mockapplication', 'bbcrd/widgets/input-text'], function(App, InputText){
  describe('widgets/input-text', function(){
    var sandbox;

    beforeEach(function(){
      sandbox = sinon.sandbox.create();
    });

    afterEach(function(){
      sandbox.restore();
    });

    it('should be initialised only with a label', function(){
      var i = new InputText('test');

      expect(i.getText()).to.equal('test');
    });

    it('should accept a placeholder option', function(){
      var i = new InputText('test', { placeholder: true });

      expect(i.hasClass('placeholder')).to.equal(true);
    });

    describe('setText', function(){
      it('should behave like the label it extends', function(){
        var i = new InputText('test');

        i.setText('new test');

        expect(i.getText()).to.equal('new test');
      });

      it('should disable the placeholder when setting a new text', function(){
        var i = new InputText('test', { placeholder: true });
        var spy = sandbox.stub(i, 'disablePlaceholder');

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
        var spy = sandbox.spy();

        i.addEventListener('empty', spy);
        i.enablePlaceholder();

        expect(spy.calledOnce).to.equal(true);
      });
    });

    describe('disablePlaceholder', function(){
      it('should emit a "not-empty" event when setting some text', function(){
        var i = new InputText('test', { placeholder: true });
        var spy = sandbox.spy();

        i.addEventListener('not-empty', spy);
        i.disablePlaceholder();

        expect(spy.calledOnce).to.equal(true);
      });
    });
  });
});