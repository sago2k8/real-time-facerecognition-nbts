const five = require("johnny-five");
// const  board = new five.Board();

module.exports = {
  print(message) {
    board.on("ready", () => {

      const lcd = new five.LCD({ pins: [7, 8, 9, 10, 11, 12] });

      lcd.print(message);
    });
    console.log('hey');
    return console.log(message);
  }
}
