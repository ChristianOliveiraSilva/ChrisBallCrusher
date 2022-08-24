
function init() {
    const width = 600;
    const height = 600;
    const game = {
        canvas: document.getElementById('game'),
        ctx: document.getElementById('game').getContext('2d'),
        wp: width / 100,
        hp: height / 100,
        gameInfo: {
            stage: 1
        }
    }
    game.canvas.width = width
    game.canvas.height = height

    start(game)
}

function start(game) {
    update(game)
    render(game)
    window.requestAnimationFrame(() => start(game))
}