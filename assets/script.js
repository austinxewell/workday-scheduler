    var currentDay = moment().format('dddd,  MMMM Do');
    $('#currentDay').append(currentDay);

    var textareaEl = document.querySelectorAll('#textArea')

    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    var momentTime = moment().startOf("day").add(8, "hour");
    var hour = moment().format("H");

    setInterval(function() {for (var i = 0; i < 10; i++) {
        var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
        var currentState;

    if (hour == i + 9) {
        currentState = 'present';       
        try {
            textareaEl[i].classList.remove('future', 'past');
        }
        catch(error){ 
        }
        textareaEl[i].classList.add('present');
    } else if (hour < i + 9) {
        currentState = 'future';
        try {
            textareaEl[i].classList.remove('present', 'past');
            textareaEl[i].classList.add('future');
        }
        catch(error){ 
        }

    } else if (hour > i + 9) {
        currentState = 'past';
        try {
            textareaEl[i].classList.remove('present', 'future');
        }
        catch(error){ 
        }
        textareaEl[i].classList.add('past');
    }}}, 3000);

    for (i = 0; i < 10; i++)
    textareaEl[i].value = localStorage.getItem(i+9);
