

function update(game) {
    const { gameInfo, phase } = game
    let { stage } = gameInfo

    if (!phase) {
        // mock
        const currentPhase = {
            blocks: [
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}],
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}],
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}],
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}],
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}],
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}],
                [{id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}, {id: 1, count: 10}]
            ],
            balls: 50
        }

        game.phase = currentPhase;
    }

}