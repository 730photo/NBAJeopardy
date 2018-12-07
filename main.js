$(() => {

    var score = 0
    //Add 10 points and display CORRECT
    $(".correctTenPoints").on('click', () => {
        score += 10
        console.log(score)
        swal({
            title: "CORRECT",
            icon: "success",
        })
        newScore(score);
    }) 
    //Add 20 points and display CORRECT
    $(".correctTwentyPoints").on('click', () => {
        score += 20
        console.log(score)
        swal({
            title: "CORRECT",
            icon: "success",
        })
        newScore(score)
    })
    //Add 30 points and display CORRECT
    $(".correctThirtyPoints").on('click', () => {
        score += 30
        console.log(score)
        swal({
            title: "CORRECT",
            icon: "success",
        })
        newScore(score);
    })
    //subtract 10 points for INCORRECT
    $(".incorrectTenPoints").on('click', () => {
        score -= 10
        swal({
            title: "INCORRECT",
            icon: "error",
        })
        newScore(score);
    })
    //subtract 20 points for INCORRECT
    $(".incorrectTwentyPoints").on('click', () => {
        score -= 20
        swal({
            title: "INCORRECT",
            icon: "error",
        })
        newScore(score);
    })
     //subtract 30 points for INCORRECT
     $(".incorrectThirtyPoints").on('click', () => {
        score -= 30
        swal({
            title: "INCORRECT",
            icon: "error",
        })
        newScore(score);
    })
    //Disable button once selected
    $(".btn-primary").on('click', (e) => {
        e.target.classList.add('disabled')
    })
    // RESET BUTTON
    $('#reset').click(function() {
        location.reload();
    });
})
// WIN GAME
function newScore(score) {
    $(".scoreboard").text("Score: " + score);
    if (score >= 100)
        swal({
            title: "YOU WIN!",
            icon: "success",
        });
    
}