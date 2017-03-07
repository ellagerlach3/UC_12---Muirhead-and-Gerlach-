QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test("Errors thrown for getAreaCode", function (assert) {
    assert.throws( function() {
        getAreaCode("415)444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );
});

QUnit.test("Test the getCoCode function.", function (assert) {
    var num = "(415) 827-3775";
    var result = getCoCode(num);
    assert.deepEqual(result, "827", "Valid CO code has passed.");
});

QUnit.test( "Errors thrown for getCoCode", function( assert ) {
    assert.throws( function() {
        getCoCode("(415) 8237-3775");
    }, "Invalid - CO Code too long. An error should have been thrown." );

    assert.throws( function() {
        getCoCode("(415) b27-3775");
    }, "Invalid 'b'. An error should have been thrown." );
});

QUnit.test("Test the getLineCode function", function (assert) {
    var num = "(415) 555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});

QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415)4445555");
    }, "Missing '-'. An error should have been thrown." );

    assert.throws( function() {
        getLineCode("(415) 444-555");
    }, "Missing '5'. An error should have been thrown." );
});
