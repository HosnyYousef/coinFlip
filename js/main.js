
// click button, show one of the images
// calculation to show image 50%

// eventListener for button
    // if clicked, iniate calcualtion
    // if clicked again, reset
        //and iniate calcualtion again
    // 

//on click: refresh page
    const refreshBtn = document.getElementById("btnRefresh");

    function handleClick() {
      window.location.reload();
    }
    
    refreshBtn.addEventListener("click", handleClick);
    
//on click: flip coin
    document.querySelector('#flipButton').addEventListener('click', flip)

    function flip (event){
        let heads = document.querySelector('#heads')
        let tails = document.querySelector('#tails')
        let result = document.getElementsByClassName("coin");
        var x = Math.floor(Math.random() * 2);
        console.log(x);
        if (x == 0) {
        document.querySelector('#heads').classList.toggle = 'hidden'
        result.innerHTML= "<img alt=\"the frontside of a coin\" src=\"img/heads.webp\" />";
        tails.style.display = 'none'
    } else if (x == 1){
        document.querySelector('#tails').classList.toggle = 'hidden'
        result.innerHTML= "<img alt=\"the backside of a coin\" src=\"img/tails.webp\" />";
        heads.style.display = 'none'
      }
}

// document.querySelector('#flipButton').addEventListener('click', flip)

// function flip (){
//    return Math.random() < 0.5;
//    //choose one img and hide the other
//    //
// }

// return Math.random() < 0.5;