let wingsImgs = document.querySelectorAll(".wings");
let canvas = document.getElementById('smoke-animation');

let btns = document.querySelectorAll(".buttons p");
var firstAction = false;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let arr = [];
        e.target.parentNode.querySelectorAll("p").forEach((child) => {
            if (child !== e.target) {

                if (e.target.classList.contains("first")) {

                    canvas.style.display="inherit";
                    wingsImgs.forEach((wingsImg) => {
                        wingsImg.classList.add("one");
                        wingsImg.style.animationDuration = `1s`;
                        wingsImg.style.animationPlayState = `running`;
                    })
                } else if (e.target.classList.contains("second")) {
                    canvas.style.display="inherit";
                    wingsImgs.forEach((wingsImg) => {
                        wingsImg.classList.add("two");
                        wingsImg.style.animationDuration = `.5s`;
                        wingsImg.style.animationPlayState = `running`;
                    });

                } else if (e.target.classList.contains("third")) {
                    canvas.style.display="inherit";

                    wingsImgs.forEach((wingsImg) => {
                        wingsImg.classList.add("third");
                        wingsImg.style.animationDuration = `0.1s`;
                        wingsImg.style.animationPlayState = `running`;
                    });

                } else if (e.target.classList.contains("stop")) {

                    canvas.style.display="none";

                    wingsImgs.forEach((wingsImg) => {
                        wingsImg.classList.add("stop");
                        wingsImg.style.animationPlayState = `paused`;
                    });
                }

            }
        })
    });

    if (!firstAction) {
        canvas.style.display="inherit";
        wingsImgs.forEach((wingsImg) => {
            wingsImg.classList.add("one");
            wingsImg.style.animationDuration = `1s`;
            wingsImg.style.animationPlayState = `running`;
        })
        firstAction = true;
    }
});
