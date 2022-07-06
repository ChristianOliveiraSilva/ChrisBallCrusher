
function init() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const game = {
        stage: 1,
        canvas: null,
        ctx: null,
        wp: null,
        hp: null,
    }

    game.canvas = document.getElementById('game')
    game.canvas.width = width
    game.canvas.height = height
    game.wp = width / 100
    game.hp = height / 100

    game.ctx = game.canvas.getContext('2d')

    start(game)
}

function start(game) {
    update(game)
    render(game)
    window.requestAnimationFrame(() => start(game))
}