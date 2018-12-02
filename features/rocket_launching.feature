Feature: Rocket Launching

Scenario: Launching a SpaceX rocket
    Given the rocket is not launched
    And the launch pad is empty
    And I am Elon Musk anttempting to launch a rocket into space
    When I launch the rocket
    Then the rocket should end up in space
    And the boster(s) should land back on the launch pad
    And nobody should doubt me ever again