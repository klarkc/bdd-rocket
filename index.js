module.exports = function launchRocket(rocket, space, launchPad) {
    space.push(rocket);
    launchPad.push(rocket.boosters);
}