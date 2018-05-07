ddaccordion.init({
    headerclass: "technology", //Shared CSS class name of headers group
    contentclass: "thelanguage", //Shared CSS class name of contents group
    revealtype: "click", //Reveal content when user clicks or onmouseover the header? Valid value: "click", "clickgo", or "mouseover"
    mouseoverdelay: 200, //if revealtype="mouseover", set delay in milliseconds before header expands onMouseover
    collapseprev: true, //Collapse previous content (so only one open at any time)? true/false
    defaultexpanded: [true], //index of content(s) open by default [index1, index2, etc]. [] denotes no content.
    onemustopen: true, //Specify whether at least one header should be open always (so never all headers closed)
    animatedefault: true, //Should contents open by default be animated into view?
    scrolltoheader: false, //scroll to header each time after it's been expanded by the user?
    persiststate: true, //persist state of opened contents within browser session?
    toggleclass: ["closedlanguage", "openlanguage"], //Two CSS classes to be applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
    togglehtml: ["prefix", "<img src='" + __ImageRelated._arrowtop + "' style='width:13px; height:9px' /> ", "<img src='" + __ImageRelated._arrowbott + "' style='width:13px; height:9px' /> "], //Additional HTML added to the header when it's collapsed and expanded, respectively  ["position", "html1", "html2"] (see docs)
    animatespeed: "normal", //speed of animation: integer in milliseconds (ie: 200), or keywords "fast", "normal", or "slow"
    oninit: function (expandedindices) { //custom code to run when headers have initalized
        //do nothing
    },
    onopenclose: function (header, index, state, isuseractivated) { //custom code to run whenever a header is opened or closed
        //do nothing
    }
});
function popupwindow(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}
$(document).ready(function () {
   //
    $('.datepicker').datepicker({
        autoclose: true,
        format: "mm/dd/yyyy",
        todayHighlight: true,
        todayBtn: true
    });

    $('.datepicker1').datepicker({
        autoclose: true,
        minDate: new Date(),
        startDate: new Date(),
        format: "mm/dd/yyyy",
        todayHighlight: true,
        todayBtn: true
    });

    $(".CustomDateFormat").mask("00/00/0000");
    bindmenu();
    GetNotification();
    setInterval(function () { GetNotification(); }, 30 * 1000);
    $('#dvNotificationContainer').on('hidden.bs.dropdown', function (data, e, event) {
        MarkAsReadNotification();
        if ($(e.relatedTarget).parents().find('#dvNotificationContainer').length > 0)
            $(data.target).addClass('open');
    });
    $('#uNotification').on('close.bs.alert', function (data) {
        var ID = $(data.target).attr('id').replace("Noti_", "");
        DeleteNotification(ID);
    });
    $(".topnav").accordion({
        accordion: false,
        speed: 500,
        closedSign: '[+]',
        openedSign: '[-]'
    });
    $('.clockpickerNew').each(function () {
        var clockpicker = $(this).clockpicker({
            autoclose: true,
            twelvehour: true,
            afterDone: function (obj) {
                clockpicker.val(clockpicker.val().slice(0, -2) + ' ' + clockpicker.val().slice(-2));
            }
        });
    });
    $('.clockpicker').each(function () {
        var clockpicker = $(this).clockpicker({
            autoclose: true,
            twelvehour: false
        });
    });
//    $(".datetimepicker").datetimepicker({
//        weekStart: 1,
//        //todayBtn: 1,
//        //autoclose: 1,
//        todayHighlight: 1,
//        startView: 2,
//        forceParse: 0,
//        //showMeridian: 1,
//        showMeridian: true,
//        format: "mm/dd/yyyy HH:ii P",
//        autoclose: true,
//        todayBtn: true,
//        startDate: "2012-02-14 10:00:00",
//        minuteStep: 1
//    });
//});

    $(".datetimepicker").datetimepicker({
        format: "mm/dd/yyyy HH:ii:ss P",
        autoclose: true,
        todayBtn: true,
        startDate: new Date(),
        minuteStep: 1,
        showMeridian: true
    });

    //For restrict the advance date
    $('.DenyAdvanceDateSelection').datepicker('setEndDate', new Date())

    //For restrict the past date
    $(".datetimepicker1").datetimepicker({
        format: "mm/dd/yyyy HH:ii:ss P",
        autoclose: true,
        todayBtn: true,
        todayHighlight:true,
        minDate:new Date(),
        startDate: new Date(),
        minuteStep: 1,
        showMeridian: true
    });


    //////////////--------------------- add on 07.06.2017 ------------------------//////////////
    var digitsOnly = /[1234567890]/g;
    var integerOnly = /[0-9\.]/g;
    var alphaOnly = /[A-Za-z]/g;
    function restrictCharacters(myfield, e, restrictionType) {
        if (!e) var e = window.event
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;
        var character = String.fromCharCode(code);
        if (code == 27) { this.blur(); return false; }
        if (!e.ctrlKey && code != 9 && code != 8 && code != 36 && code != 37 && code != 38 && (code != 39 || (code == 39 && character == "'")) && code != 40) {
            if (character.match(restrictionType)) {
                return true;
            } else {
                return false;
            }

        }
    }
    //////////////--------------------- add on 07.06.2017 ------------------------//////////////



});
//Cell Number Format:
//--------------------
//$('.NewCellNoFormat').keyup(function (e) {
//    if ((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode < 106 && e.keyCode > 95)) {
//        var foo = $(this).val().split("-").join("").slice(0, 10); // remove hyphens
//        foo = foo.match(new RegExp('.{1,4}$|.{1,3}', 'g')).join("-");
//        $(this).val(foo);
//    }

//    //remove all chars, except dash and digits
//    this.value = this.value.replace(/[^\-0-9]/g, '');
//});
$(document).ready(function () {
//$('.UsCellFormat').on('keypress', function (e) {
//    var key = e.charCode || e.keyCode || 0;
//    var phone = $(this);
//    if (phone.val().length == 0) {
//        phone.val(phone.val() + '(');
//    }
//    // Auto-format- do not expose the mask as the user begins to type
//    if (key !== 8 && key !== 9) {
//        if (phone.val().length == 4) {
//            phone.val(phone.val() + ')');
//        }
//        if (phone.val().length == 5) {
//            phone.val(phone.val() + ' ');
//        }
//        if (phone.val().length == 9) {
//            phone.val(phone.val() + '-');
//        }
//        if (phone.val().length >= 14) {
//            phone.val(phone.val().slice(0, 13));
//        }
//    }

//    // Allow numeric (and tab, backspace, delete) keys only
//    return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57));
//})

//.on('focus', function () {
//    phone = $(this);

//    if (phone.val().length == 0) {
//        phone.val('(');
//    } else {
//        var val = phone.val();
//        phone.val('').val(val); // Ensure cursor remains at the end
//    }
//})

//.on('blur', function () {
//    $phone = $(this);

//    if ($phone.val() == '(') {
//        $phone.val('');
//    }
//});

    //US SSN Auto Format:
    //--------------------
//$(".SSN_AutoFormat").keyup(function () {
//    var val = this.value.replace(/\D/g, '');
//    var newVal = '';
//    var sizes = [3, 2, 4];
//    for (var i in sizes) {
//        if (val.length > sizes[i]) {
//            newVal += val.substr(0, sizes[i]) + '-';
//            val = val.substr(sizes[i]);
//        }
//        else
//            break;
//    }

//    newVal += val;
//    if (newVal.length > 11) {
//        this.value = newVal.substring(0, newVal.length - 2);
//    }
//    else {
//        this.value = newVal;
//    }
//});


//Date Format:
//-------------
//$(".CustomDateFormat").keyup(function () {
    
//    if ($(this).val().length == 2) {
//        $(this).val($(this).val() + "/");
//    } else if ($(this).val().length == 5) {
//        $(this).val($(this).val() + "/");
//    }

//    //remove all chars, except slash and digits
//    this.value = this.value.replace(/[^\/0-9]/g, '');
//    if ($(this).val().length >= 10) {
//        $(this).val($(this).val().substr(0, 10));
//    }
//});
});
//------Notification-------
$(document).click(function (e) {

    var container = $("#uNotification");

    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        if (container.css('display') != 'none') {
            $('#dvNotificationContainer').removeClass('open');
            //if ((!(e.target.href != undefined && e.target.href.indexOf('#') == -1 && e.target.href.indexOf('void(0)') == -1)))
            //    MarkAsReadNotification();
        }
    }
});
function GetNotification() {
    var options = {};
    options.url = __NotificationRelated._GetNotification;
    options.type = "Get";
    options.dataType = "json";
    options.contentType = "application/json";
    options.success = function (data) {
        if (data.NotificationCount) {
            $('#sNotificationCount').html(data.NotificationCount);
        }
        else {
            $('#sNotificationCount').html("0");
        }
        if (data.Notifications) {
            $('#uNotification').html(data.Notifications);
        }
    };
    options.error = function () { };
    $.ajax(options);
}
function MarkAsReadNotification() {
    var options = {};
    options.url = __NotificationRelated._MarkAsReadNotification;
    options.type = "Get";
    options.dataType = "json";
    options.contentType = "application/json";
    options.success = function (data) {
        $('#sNotificationCount').html("0");
    };
    options.error = function () { };
    $.ajax(options);
}
function DeleteNotification(id) {
    var options = {};
    options.url = __NotificationRelated._DeleteNotification + "?ID=" + id;
    options.type = "Get";
    options.dataType = "json";
    options.contentType = "application/json";
    options.success = function (data) {
        GetNotification();
    };
    options.error = function () { };
    $.ajax(options);
}


//------Menu-------
function bindmenu() {
    var options = {};
    options.url = __MenuRelated._GetMenu;
    options.type = "Get";
    options.dataType = "json";
    options.contentType = "application/json";
    options.success = function (data) {
        $('#sidebar-wrapper').html(data);
        var ww = document.body.clientWidth;
        $(".navi li a").each(function () {
            if ($(this).next().length > 0) {
                $(this).addClass("parent");
            };
        })

        $(".toggleMenu").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(".navi").slideToggle(500);
        });
        adjustMenu();
    };
    options.error = function () { };
    $.ajax(options);
}


//------Detail Popup-------
function fnShowPopupForDetail(url) {
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=50,width=800,height=1000,center");
}


//pdf
function fnShowEmbededPDF(fileName, obj) {
    $.ajax({
        url: __pdfRelated._embededpdf + "?fileNameandPath=" + fileName,
        type: 'GET',
        error: function () {
            alert('fail');
        },
        dataType: 'json',
        success: function (data) {
            $(obj).html(data);
        }
    });
}
function fnShowPdfInWinPopup(fileName) {
    var link = __pdfRelated._showPdfInWinPopup + "?fileNameandPath=" + fileName;
    popupwindow(link, 'show pdf', 1000, 500);
}
function fnShowPdfInPopup(fileName, headingText) {
    var ModalID = 'pdf__popup';
    if ($("#" + ModalID).length != 0)
        $("#" + ModalID).remove();
    var test = '<div class="modal fade" id="Modal___ID" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="ModalHeading___ID">Modal___Heading</h4></div><div class="modal-body"><div class="PdfPopup" id="Detail___ID"></div></div><div class="modal-footer" id="Modalfooter___ID"></div></div></div></div>';
    test = test.replace("Modal___ID", ModalID);
    test = test.replace("ModalHeading___ID", ModalID + "___Heading");
    test = test.replace("Modal___Heading", headingText);
    test = test.replace("Detail___ID", ModalID + "___Detail");
    test = test.replace("Modalfooter___ID", ModalID + "___Footer");
    $('#CommonArea').append(test);
    $("#" + ModalID + "___Detail").css('text-align', 'center');
    $("#" + ModalID + "___Detail").html('<img style="width:100px;height:100px;" src="' + __CommonImage._loadingimage + '" />');
    $("#" + ModalID).modal();
    $.ajax({
        url: __pdfRelated._ShowPdfInPopup + "?fileNameandPath=" + fileName,
        type: 'GET',
        error: function () {
            alert('fail');
        },
        dataType: 'json',
        success: function (data) {
            $(".modal-body").css('max-height', '490px');
            $("#" + ModalID + "___Detail").css('min-width', '800px');
            $("#" + ModalID + "___Detail").css('min-height', '800px');
            $("#" + ModalID + "___Detail").html(data);
        }
    });
}


//--------list empty Action column  Hide-----------------
$(document).ready(function () {
    if ($("td.tdList_Edit a").length == 0) {
        $("th.tdList_Edit,td.tdList_Edit").hide();
    }
    if ($("td.tdList_Details a").length == 0) {
        $("th.tdList_Details, td.tdList_Details").hide();
    }
    if ($("td.tdList_PDF a").length == 0) {
        //alert('found empty cell');
        $("th.tdList_PDF, td.tdList_PDF").hide();
    }
    if ($("td.tdList_Approve a").length == 0) {
        //alert('found empty cell');
        $("th.tdList_Approve, td.tdList_Approve").hide();
    }


    //check only one checkbox with class checkone

    $('.checkone').change(function () {
        if ($(this).is(":checked")) {
            $('.checkone').not(this).attr("checked", false);
        }
    });
    
});


// get current time
//function fnGetCurentTime() {
//    var currentdate = new Date();
//    var datetime = currentdate.getDate() + "/"
//                + (currentdate.getMonth() + 1) + "/"
//                + currentdate.getFullYear() + " "
//                + currentdate.getHours() + ":"
//                + currentdate.getMinutes() + ":"
//                + currentdate.getSeconds();

//    return datetime;
//}

function fnGetCurentTime() {
    var fullDate = new Date();

    currentHours = fullDate.getHours();
    currentHours = ("0" + currentHours).slice(-2);

    currentMinutes= fullDate.getMinutes();
    currentMinutes = ("0" + currentMinutes).slice(-2);

    currentSeconds = fullDate.getSeconds();
    currentSeconds = ("0" + currentSeconds).slice(-2);

    var formatted = currentHours+":" + currentMinutes +":"+ currentSeconds;

    var twoDigitMonth = fullDate.getMonth() + 1+""; if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate() + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
    var currentDate =  twoDigitMonth + "/" + twoDigitDate + "/"  + fullDate.getFullYear();
    return datetime = currentDate + " " + formatted;
    
}


//--------masking textboxes-----------------
$(document).ready(function () {
    $('.zipcode').mask("00000");
    $('.UsCellFormat').mask('(000) 000-0000');
    $(".SSN_AutoFormat").mask('000-00-0000');
    $(".CustomTimeFormat").mask("00:00");
    $('.ChargedHours').mask("00");
    $('.Percentages').mask("000");
    $('.CardNumbers').mask("0000000000000000");
    $('.unitprice').mask("000.00");
    $('.days').mask("00");
    $('.months').mask("00");
    $('.years').mask("0000");

});

function fn_ICD10_Code_Search() {
    //------ Fire ICD10Search button click event -----//
    //----- Call SearchICDCodes() ------//
    $("#ICD10Search").click();
}

