import ANN from '../../src/ANN.js';

describe('ANN', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(ANN, 'greet');
      ANN.greet();
    });

    it('should have been run once', () => {
      expect(ANN.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(ANN.greet).to.have.always.returned('hello');
    });
  });
});
