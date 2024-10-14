
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
});