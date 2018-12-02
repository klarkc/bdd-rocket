module.exports = function launchRocket({rocket, space, launchPad, socialEffects}) {
    space.push(rocket);
    launchPad.push(rocket.boosters);
    socialEffects();
}