import React from 'react'

const StatusMessage = ( {winner, current}) => {
    
    const noMovesLeft= current.board.every(el => el!=null);
    return (
        <div className="status-message">
            {winner && (
                <>
                    Winner is {' '}
                    <span className={winner==='X' ? 'text-green' : 'text-orange'}>{winner}</span>
                </>
            )}
            {!winner && !noMovesLeft && (
                <>
                    Next Player is {' '}
                    <span className={current.isXNext ? 'text-green' : 'text-orange'}>{ current.isXNext ? 'X' : 'O'}</span>
                </>
            )}
            {!winner && noMovesLeft && `It's a Tie`}
        </div>

    )
}

export default StatusMessage
