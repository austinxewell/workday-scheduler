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

         for (var i = 0; i < 10; i++) {
        var timeSlot = momentTime.add(1, "hour").format("HH:mm A");

    if (hour == i + 9) {     
        // try {
            // console.log(textareaEl[i].classList);
            $(textareaEl[i]).removeClass('future', 'past');
            $(textareaEl[i]).addClass('present');
        // }
        // catch(error){ 
        // }    

    } else if (hour < i + 9) {
        // try {
            $(textareaEl[i]).removeClass('present', 'past');
            $(textareaEl[i]).addClass('future');
        // }
        // catch(error){ 
        // }

    } else if (hour > i + 9) {
        // try {
            $(textareaEl[i]).removeClass('present', 'future');
            $(textareaEl[i]).addClass('past');
        // }
        // catch(error){ 
        // }
    }};

    for (i = 0; i < 10; i++) {
        if (localStorage.getItem(i + 9)) {
            textareaEl[i].value = localStorage.getItem(i + 9);
        }
    }
