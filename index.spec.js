const {defineFeature, loadFeature} = require('jest-cucumber');

const feature = loadFeature('./features/rocket_launching.feature');
const launchRocket = require('.');

defineFeature(feature, scenario => {
    scenario('Launching a SpaceX rocket', ({given, then, when}) => {
        let person;
        const faithlessPeople = [];
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

        when('I launch the rocket', () => {
            launchRocket(rocket, space, launchPad);
        });

        then('the rocket should end up in space', () => {
            expect(space).toContain(rocket);
        });

        then('the boster(s) should land back on the launch pad', () => {
            expect(launchPad).toContain(rocket.boosters);
        });

        then('nobody should doubt me ever again', () => {
            expect(faithlessPeople).toHaveLength(0);
        })
    })
})