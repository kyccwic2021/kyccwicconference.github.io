const todaysDate = new Date();
const eventDate = new Date("September 10, 2021 8:45:00 GMT-0500"); //Friday's links will open at an hour before the event


if (todaysDate < eventDate) {
    var teamsButtons, i;
    teamsButtons = document.querySelectorAll(".teams-link-btn");
    for (i = 0; i < teamsButtons.length; i++) {
        teamsButtons[i].classList.add("disabled");
    }
}