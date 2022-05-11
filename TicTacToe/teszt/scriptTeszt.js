QUnit.module('row', function() {
    QUnit.test('a row létezik-e', function(assert) {
      assert.ok(row, "a row létezik");
    });
    QUnit.test('a row fv-e', function(assert) {
      assert.ok(typeof row, "a row fv");
    });
    QUnit.test('row - alap tömbbel', function(assert) {
        tomb=["-", "-", "-", "-", "-", "-", "-", "-", "-"];
      assert.equal(row(), false);
    });
    QUnit.test('row - első sor csak "X"', function(assert) {
        tomb=["X", "X", "X", 
              "O", "-", "-", 
              "O", "", "-"];
      assert.equal(row(), true);
    });
    QUnit.test('row - második sor csak "X"', function(assert) {
        tomb=["-", "O", "O", 
              "X", "X", "X", 
              "-", "-", "-"];
      assert.equal(row(), true);
    });
    QUnit.test('row - harmadik sor csak "X"', function(assert) {
        tomb=["O", "-", "-", 
              "-", "O", "-", 
              "X", "X", "X"];
      assert.equal(row(), true);
    });
    QUnit.test('row - első sor csak "O"', function(assert) {
        tomb=["O", "O", "O", 
              "-", "X", "-", 
              "X", "-", "-"];
      assert.equal(row(), true);
    });
    QUnit.test('row - második sor csak "O"', function(assert) {
        tomb=["X", "-", "-", 
              "O", "O", "O", 
              "X", "-", "-"];
      assert.equal(row(), true);
    });
    QUnit.test('row - harmadik sor csak "O"', function(assert) {
        tomb=["-", "-", "-", 
              "X", "X", "-", 
              "O", "O", "O"];
      assert.equal(row(), true);
    });
    QUnit.test('row - első sor "X O X"', function(assert) {
        tomb=["X", "O", "X", 
              "X", "X", "-", 
              "-", "O", "-"];
      assert.equal(row(), false);
    });
    QUnit.test('row - harmadik sor "O X O"', function(assert) {
        tomb=["-", "X", "-", 
              "O", "-", "X", 
              "O", "X", "O"];
      assert.equal(row(), false);
    });
  });

  QUnit.module('column', function() {
    QUnit.test('a column létezik-e', function(assert) {
        assert.ok(column, "a column létezik");
      });
      QUnit.test('a column fv-e', function(assert) {
        assert.ok(typeof column, "a column fv");
      });
      QUnit.test('column - alap tömbbel', function(assert) {
          tomb=["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(column(), false);
      });
      QUnit.test('column - első oszlop "X O X"', function(assert) {
          tomb=["X", "-", "-", 
                "O", "-", "-", 
                "X", "-", "-"];
        assert.equal(column(), false);
      });
      QUnit.test('column - második oszlop "O X O"', function(assert) {
          tomb=["-", "O", "-", 
                "X", "X", "X", 
                "-", "O", "-"];
        assert.equal(column(), false);
      });
      QUnit.test('column - harmadik oszlop "X X O"', function(assert) {
          tomb=["-", "O", "X", 
                "-", "X", "X", 
                "-", "O", "O"];
        assert.equal(column(), false);
      });
      QUnit.test('column - harmadik oszlop "X X X"', function(assert) {
          tomb=["-", "O", "X", 
                "-", "-", "X", 
                "-", "O", "X"];
        assert.equal(column(), true);
      });
      QUnit.test('column - első oszlop "O O O"', function(assert) {
          tomb=["O", "-", "X", 
                "O", "X", "X", 
                "O", "-", "-"];
        assert.equal(column(), true);
      });
    });

    QUnit.module('balrolJobbra', function() {
        QUnit.test('balrolJobbra létezik-e', function(assert) {
            assert.ok(balrolJobra, "a balrolJobbra létezik");
        });
        QUnit.test('balrolJobbra fv-e', function(assert) {
            assert.ok(typeof balrolJobra, "a balrolJobbra fv");
        });
        QUnit.test('balrolJobra - balrol jobbra átló "O X -"', function(assert) {
            tomb=["O", "O", "X", 
                  "O", "X", "X", 
                  "-", "-", "-"];
          assert.equal(balrolJobra(), false);
        });
        QUnit.test('balrolJobra - balrol jobbra átló "X X X"', function(assert) {
            tomb=["X", "-", "X", 
                  "O", "X", "O", 
                  "O", "-", "X"];
          assert.equal(balrolJobra(), true);
        });
        QUnit.test('balrolJobra - balrol jobbra átló "X O X"', function(assert) {
            tomb=["X", "-", "X", 
                  "O", "O", "-", 
                  "O", "-", "X"];
          assert.equal(balrolJobra(), false);
        });
      });
    QUnit.module('jobbrolBalra', function() {
        QUnit.test('jobbrolBalra létezik-e', function(assert) {
            assert.ok(jobbrolBalra, "a jobbrolBalra létezik");
        });
        QUnit.test('jobbrolBalra fv-e', function(assert) {
            assert.ok(typeof jobbrolBalra, "a jobbrolBalra fv");
        });
        QUnit.test('jobbrolBalra - jobbról balra átló "X X O"', function(assert) {
            tomb=["O", "O", "X", 
                  "-", "X", "X", 
                  "O", "-", "-"];
          assert.equal(jobbrolBalra(), false);
        });
        QUnit.test('jobbrolBalra - jobbról balra átló "X X X"', function(assert) {
            tomb=["X", "-", "X", 
                  "O", "X", "O", 
                  "X", "-", "O"];
          assert.equal(jobbrolBalra(), true);
        });
        QUnit.test('jobbrolBalra - jobbról balra átló "X X O"', function(assert) {
            tomb=["X", "-", "X", 
                  "O", "X", "O", 
                  "O", "-", "-"];
          assert.equal(jobbrolBalra(), false);
        });
        QUnit.test('jobbrolBalra - jobbról balra átló "X O X"', function(assert) {
            tomb=["X", "-", "X", 
                  "-", "O", "O", 
                  "O", "-", "X"];
          assert.equal(jobbrolBalra(), false);
        });
      });

      QUnit.module('cross', function() {
        QUnit.test('cross létezik-e', function(assert) {
            assert.ok(cross, "a cross létezik");
        });
        QUnit.test('cross fv-e', function(assert) {
            assert.ok(typeof cross, "a cross fv");
        });
        QUnit.test('cross - cross egyik - "O O O" masik - "X O X"', function(assert) {
            tomb=["X", "X", "O", 
                  "X", "O", "O", 
                  "O", "X", "X"];
          assert.equal(cross(), true);
        });
        QUnit.test('cross - cross egyik - "O X X" masik - "O X O"', function(assert) {
            tomb=["O", "X", "O", 
                  "X", "X", "O", 
                  "O", "O", "X"];
          assert.equal(cross(), false);
        });
      });
      QUnit.module('ellenorzes', function() {
        QUnit.test('ellenorzes létezik-e', function(assert) {
            assert.ok(ellenorzes, "a ellenorzes létezik");
        });
        QUnit.test('ellenorzes fv-e', function(assert) {
            assert.ok(typeof ellenorzes, "a ellenorzes fv");
        });
        QUnit.test('ellenorzes - "O O O"', function(assert) {
            tomb=["X", "O", "X", 
                  "O", "O", "O", 
                  "O", "X", "X"];
          assert.equal(ellenorzes(), true);
        });
        QUnit.test('ellenorzes - nincs nyeres', function(assert) {
            tomb=["O", "X", "X", 
                  "X", "O", "O", 
                  "X", "O", "X"];
          assert.equal(ellenorzes(), false);
        });
      });