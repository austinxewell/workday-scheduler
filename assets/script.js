
    var clockElement = document.getElementById('currentDay');

    function clock() {
        clockElement.textContent = moment().format('dddd MMMM Do')
    }

    setInterval(clock, 1000);