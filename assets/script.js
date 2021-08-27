
    // var clockElement = document.getElementById('currentDay');

    // function clock() {
    //     clockElement.textContent = moment().format('dddd MMMM Do')
    // }
    
    var currentDay = moment().format('dddd,  MMMM Do');
    $('#currentDay').append(currentDay);




    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    // $(".saveBtn").on("click", "p", function() {
    //     var text = $(this).text().trim();

    //     var textInput = $("<textarea>")
    //     .addClass("textarea")
    //     .val(text)


    //     $(this).replaceWith(textInput);
    //     textInput.trigger("focus");
    //   });


    setInterval(clock, 1000);


