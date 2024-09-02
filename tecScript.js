// NavBar Button
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".bttnz");

    buttons.forEach(function(button) {
        button.addEventListener("mousedown", function() {
            console.log("Button clicked");
            button.classList.add("active");
        });

        button.addEventListener("mouseup", function() {
            console.log("Button released");
            button.classList.remove("active");
        });
    });
});

//Footer Button
window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("back-to-top").style.display = "block";
            } else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
