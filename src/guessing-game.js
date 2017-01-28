class GuessingGame {
    constructor() {
        this.arrRange = [];
        this.expected = this.last = this.first = this.length = 0;
    }

    setRange(min, max) {
        this.length = max - min;
        for (var i = min; i < this.length; i++) {
            this.arrRange.push(i);
        }
        this.first = 0;
        this.last = this.arrRange.length - 1;
    }

    guess() {
        this.expected = Math.ceil(this.first + (this.last - this.first) / 2);
        return this.arrRange[this.expected];
    }

    lower() {
        this.last = this.expected;
    }

    greater() {
        this.first = this.expected;
    }
}

module.exports = GuessingGame;