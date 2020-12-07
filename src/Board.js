import React, { Component } from 'react'
import Row from './Row'

export default class Board extends Component {
    constructor(props){
        super(props)

        // have to do this to bind the updateTurn function to this class so child components
        // can call it
        this.updateTurn = this.updateTurn.bind(this)

        this.state = {
            playerTurn: props.playerTurn,
            rows: [
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    ".",
                    ".",
                    "."
                ]
            ],
            winner: null
        }
    }

    updateTurn(row, col){

        // update row col position
        var temp = this.state.rows
        temp[row][col] = this.state.playerTurn
        this.setState({
            rows: temp
        })

        if (this.isWin(this.state.rows)) {
            this.setState({
                winner: this.state.playerTurn
            })
        }

        // update player turn
        this.setState({
            playerTurn: this.state.playerTurn === 'X' ? 'O' : 'X'
        })
    }

    isWin(board){
        return this.isColumnWin(board) || this.isRowWin(board) || this.isDiagonalWin(board)
    }

    isRowWin(board){
        for (let i = 0; i < board.length; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== ".") {
                return true
            }
        }
        return false
    }

    isColumnWin(board){
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== ".") {
                return true
            }
        }
        return false
    }

    isDiagonalWin(board){
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ".") {
            return true
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ".") {
            return true
        }
        return false
    }

    render() {
        return (
            <div>
                <br></br>
                <h2>Player {(this.state.winner) ? this.state.winner : this.state.playerTurn} {(this.state.winner) ?  "wins." : "'s turn."}</h2>
                <br></br>
                <Row number='1' playerTurn={this.state.playerTurn} updateTurn={this.updateTurn} winner={this.state.winner}/>
                <Row number='2' playerTurn={this.state.playerTurn} updateTurn={this.updateTurn} winner={this.state.winner}/>
                <Row number='3' playerTurn={this.state.playerTurn} updateTurn={this.updateTurn} winner={this.state.winner}/>
            </div>
        )
    }
}
