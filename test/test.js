
import Shape from '../js/shape.js'; 
import EvilCircle from '../js/evil-circle.js';

QUnit.module('Shape super class', function() {
    QUnit.test('Shape is a class', function(assert) {
        assert.ok(typeof Shape === 'function', 'Shape should be a constructor function (class)');
    });

    QUnit.test('Shape instance is an object', function(assert) {
        var shape = new Shape(1, 2, 3, 4);
        assert.ok(typeof shape === 'object', 'shape should be an object');
    });
});

QUnit.module('Evil Circle extends Shape class', function() {
    QUnit.test('Shape is a class', function(assert) {
        assert.ok(typeof EvilCircle === 'function', 'evil circle should be a constructor function (class)');
    });

    QUnit.test('EvilCircle instance is a Shape', function(assert) {
        var circle = new EvilCircle(1, 2, 3, 4);
        assert.ok(circle instanceof Shape, 'EvilCircle instance should be a Shape');
    });

    QUnit.test('EvilCircle velX value is 20', function(assert) {
        var circle = new EvilCircle(1, 2, 3, 4);
        assert.equal(20, circle.velX, 'Evil circle velX value should be 20');
    });

    QUnit.test('EvilCircle color is white', function(assert) {
        var circle = new EvilCircle(1, 2, 3, 4);
        assert.equal('white', circle.color, 'Evil Circle should be white');
    });


});