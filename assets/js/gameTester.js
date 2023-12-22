window.addEventListener("gamepadconnected", function (e) {
    gamepadHandler(e, true);
});

window.addEventListener("gamepaddisconnected", function (e) {
    gamepadHandler(e, false);
});

function gamepadHandler(event, connecting) {
    var gamepad = event.gamepad;

    if (connecting) {
        console.log("Gamepad connected:", gamepad);
    } else {
        console.log("Gamepad disconnected:", gamepad);
    }

    requestAnimationFrame(updateStatus);
}

function updateStatus() {
    var gamepads = navigator.getGamepads();
    var output = document.getElementById("output");
    output.innerHTML = "";

    for (var i = 0; i < gamepads.length; i++) {
        var gamepad = gamepads[i];

        if (gamepad) {
            output.innerHTML += "<h2>Gamepad " + (i + 1) + "</h2>";

            for (var j = 0; j < gamepad.buttons.length; j++) {
                output.innerHTML += "Button " + j + ": " + gamepad.buttons[j].value + "<br>";
            }

            for (var k = 0; k < gamepad.axes.length; k += 2) {
                output.innerHTML += "Stick " + (k / 2) + ": (" + gamepad.axes[k].toFixed(2) + ", " + gamepad.axes[k + 1].toFixed(2) + ")<br>";
            }
        }
    }

    requestAnimationFrame(updateStatus);
}
