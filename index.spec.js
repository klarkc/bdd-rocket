const {defineFeature, loadFeature} = require('jest-cucumber');

const feature = loadFeature('./features/rocket_launching.feature');
const launchRocket = require('.');

function aboutFilter(about) {
    return opnion => opnion.about === about;
}

function positiveFilter(positive = true) {
    return opnion => opnion.positive === positive;
}

function doSocialEffects(peopleOpnions, person) {
    return peopleOpnions.filter(aboutFilter(person)).map(opnion => ({
        ...opnion,
        positive: false,
    }));
}

defineFeature(feature, scenario => {
    scenario('Launching a SpaceX rocket', ({given, then, when}) => {
        let person;
        let peopleOpnions = [
            {about: 'Elon Musk', positive: false}
        ];
        const launchPad = [];
        const rocket = {
            boosters: undefined,
        }
        const space = [];

        given('the rocket is not launched', () => {
            expect(space).not.toContain(rocket);
        });
        
        given('the launch pad is empty', () => {
            expect(launchPad).not.toContain(rocket.boosters);
        });

        given('I am Elon Musk anttempting to launch a rocket into space', () => {
            person = 'Elon Musk';
        });

        given('there are faithless people about me', () => {
            expect(peopleOpnions).not.toHaveLength(0);
        });

        when('I launch the rocket', () => {
            const socialEffects = () => {
               peopleOpnions = doSocialEffects(peopleOpnions, person);
            }
            launchRocket({rocket, space, launchPad, socialEffects});
        });

        then('the rocket should end up in space', () => {
            expect(space).toContain(rocket);
        });

        then('the boster(s) should land back on the launch pad', () => {
            expect(launchPad).toContain(rocket.boosters);
        });

        then('nobody should doubt me ever again', () => {
            const aboutMe = peopleOpnions.filter(aboutFilter(person));
            expect(aboutMe.filter(positiveFilter())).toHaveLength(0);
        })
    })
})