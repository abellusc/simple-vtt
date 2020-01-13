import React from 'react';
import { connect } from 'react-redux';

class Board extends React.Component {
    renderBackground(canvas) {
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'pink';
        ctx.fillRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
        ctx.fillStyle = 'transparent';
    }
    renderGrid(canvas) {
        const ctx = canvas.getContext('2d');

        console.log(ctx);
        for (let ox = 0; ox < (this.props.canvasWidth / this.props.gridSquareWidth); ox += 1) {
            for (let oy = 0; oy < (this.props.canvasHeight / this.props.gridSquareHeight); oy += 1) {
                ctx.strokeStyle = 'black';
                ctx.strokeRect(
                    ox * this.props.gridSquareWidth,
                    oy * this.props.gridSquareHeight,
                    this.props.gridSquareWidth,
                    this.props.gridSquareHeight,
                );
                ctx.strokeStyle = 'transparent';
            }
        }
        ctx.strokeStyle = 'black';
        ctx.strokeRect(
            0,
            0,
            this.props.canvasWidth,
            this.props.canvasHeight,
        );
        ctx.strokeStyle = 'transparent';
    }
    renderBoard(canvas) {
        // console.log('Rendering...');
        this.renderBackground(canvas);
        this.renderGrid(canvas);
        // console.log('Render complete.');
    }
    componentDidMount() {
        console.log('Mounted component, ready to initialize board update loop.');
        const canvas = this.refs.canvas;
        console.log('Retrieved canvas ref.');
        setInterval(() => this.renderBoard(canvas), this.props.refreshRate);
    }
    render() {
        return (
            <canvas id="canvas" ref="canvas" width={this.props.canvasWidth} height={this.props.canvasHeight} className="canvasMain" />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = (state) => {
    console.log('Received mapped state', {
        ...state.board,
    });
    return {
        ...state.board,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);