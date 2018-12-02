module.expots = function launchRocket(rocket, space, launchPad) {
    space.push(rocket);
    launchPad.push(rocket.boosters);
}