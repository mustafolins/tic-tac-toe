import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class Row extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: (parseInt(props.number) - 1) * 3 + 1,
            second: (parseInt(props.number) - 1) * 3 + 2,
            third: parseInt(props.number) * 3
        }
    }

    click(num) {
        if (this.props.winner) {
            return
        }

        var temp = (num - 1) % 3
        if (temp === 0) {
            this.setState({
                first: this.props.playerTurn
            })
        } else if (temp === 1) {
            this.setState({
                second: this.props.playerTurn
            })
        } else {
            this.setState({
                third: this.props.playerTurn
            })
        }

        this.props.updateTurn(parseInt((num - 1) / 3), temp)
    }

    render() {
        return (
            <div>
                <Button variant="contained" color='primary'
                    onClick={() => this.click(this.state.first)}>{this.state.first}</Button>
                <Button variant="contained" color='primary'
                    onClick={() => this.click(this.state.second)}>{this.state.second}</Button>
                <Button variant="contained" color='primary'
                    onClick={() => this.click(this.state.third)}>{this.state.third}</Button>
            </div>
        )
    }
}
