i = 1
function render(game) {
    const { gameInfo, phase, ctx, canvas } = game
    let { stage } = gameInfo

    console.log(canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw scene
    if (phase) {
        ctx.beginPath();
        ctx.rect(20 + i++, 20, 150, 100);
        ctx.stroke();
    }


}