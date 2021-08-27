    var currentDay = moment().format('dddd,  MMMM Do');
    $('#currentDay').append(currentDay);




    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });



