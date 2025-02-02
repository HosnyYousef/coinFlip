

// click button, show one of the images
// calculation to show image 50%
// 


// eventListener for button
    // if clicked, iniate calcualtion
    // if clicked again, reset
        //and iniate calcualtion again
    // 

    document.querySelector('#flipButton').addEventListener('click', flip)

    function flip (){
        let heads = document.querySelector('#heads')
        let tails = document.querySelector('#tails')
        var x = Math.floor(Math.random() * 2);
        console.log(x);
        if (x == 0) {
        heads.style.visability = 'hidden'
    } else {
        tails.style.visability = 'hidden'
      }
}



// document.querySelector('#flipButton').addEventListener('click', flip)


// function flip (){
//    return Math.random() < 0.5;
//    //choose one img and hide the other
//    //
// }

// return Math.random() < 0.5;