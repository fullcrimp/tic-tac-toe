const SYMBOL_X = 'x'
const SYMBOL_O = 'o'

class TicTacToe {
    constructor() {
        this.current = SYMBOL_X
        this.winner = null
        this.field = [[null, null, null], [null, null, null], [null, null, null]]
        this.patterns = [
            [[1,1,1],[0,0,0],[0,0,0]], // horizontal
            [[0,0,0],[1,1,1],[0,0,0]],
            [[0,0,0],[0,0,0],[1,1,1]],
            [[1,0,0],[1,0,0],[1,0,0]], // vertical
            [[0,1,0],[0,1,0],[0,1,0]],
            [[0,0,1],[0,0,1],[0,0,1]],
            [[1,0,0],[0,1,0],[0,0,1]], // diagonal
            [[0,0,1],[0,1,0],[1,0,0]]
        ]
    }   

    getCurrentPlayerSymbol() {
        return this.current
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.current

            this.winner = this.isWinner(this.current) ? this.current : null            
            this.current = (this.current === SYMBOL_X) ? SYMBOL_O : SYMBOL_X
        }
    }

    isFinished() {
        return !!this.getWinner() || this.isDraw()
    }

    getWinner() {   
        return this.winner
    }

    isWinner(symbol_) {
        return this.patterns.some((pattern) => {
            return pattern.every((row, rowIndex) => {
                return row.every((item, colIndex) => {
                    return ((item === 1 && this.field[rowIndex][colIndex] === symbol_) || (item === 0))
                })
            })
        })
    }

    noMoreTurns() {
        return this.field.every((row) => {
            return row.every((item) => {
                return (item === SYMBOL_X || item === SYMBOL_O) ? true : false                
            })
        })
    }

    isDraw() {
        return (this.getWinner() === null) && this.noMoreTurns()
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
