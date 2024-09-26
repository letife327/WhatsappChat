"use strict";
$(document).ready(function () {
    $('#btnMe').click(function (e) {
        e.preventDefault();
        let a = (aClass = '') => {
            if (!$.trim($('#inpMe').val()) == '') {
                let newH3 = $(`<h3> </h3>`);
                let line = $(`<div class='line'> </div>`);
                let bigDiv = $(`<div class = "${aClass}"></div>`)
                $(newH3).append($('#inpMe').val());
                $(line).append(newH3);
                $(bigDiv).append(line);

                return bigDiv;
            }
            else {
                return;
            }
        }
        $('#youBox').append(a());
        $('#myBox').append(a(`end`));
        $('#inpMe').val("");
        document.querySelector('#myBox').scrollTo(0, document.querySelector('#myBox').scrollHeight);
        document.querySelector('#youBox').scrollTo(0, document.querySelector('#youBox').scrollHeight)

    });

    $('#btnYou').click(function (e) {
        e.preventDefault();
        let a = (aClass = '') => {
            if (!$.trim($('#inpYou').val()) == '') {
                let newH3 = $(`<h3> </h3>`);
                let line = $(`<div class='line'> </div>`);
                let bigDiv = $(`<div class = "${aClass}"></div>`)
                $(newH3).append($('#inpYou').val());
                $(line).append(newH3);
                $(bigDiv).append(line);

                return bigDiv;
            }
            else {
                return;
            }
        }
        $('#myBox').append(a());
        $('#youBox').append(a(`end`));
        $('#inpYou').val("");
        document.querySelector('#youBox').scrollTo(0, document.querySelector('#youBox').scrollHeight)
        document.querySelector('#myBox').scrollTo(0, document.querySelector('#myBox').scrollHeight)

    });
});