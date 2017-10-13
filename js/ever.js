function codeCheck() {
    var e = $(".check-code-input"), a = $(".check-code-result"), o = $(".check-code-btn"), t = /^\d+$/;
    o.on("click", function (o) {
        o.preventDefault();
        var n = e.val().length, r = e.val();
        return t.test(r) && 15 == n ? a.text(codeOk) : "" !== e.val() && " " !== e.val() && "  " !== e.val() ? a.text(codeWrong) : a.text(codeEmpty)
    })
}
function soldToday() {
    var e = new Date, a = 2 * (60 * e.getHours() + e.getMinutes()) + 2e3;
    $(".todayBuy").html(a)
}
function addDataAtr(e) {
    $("body").attr("data-invalid-name-text", localization[e].invalidNameText).attr("data-invalid-phone-text", localization[e].invalidPhoneText)
}
var popaps = {
    prodsLeft: productQuantity, generateName: function (e) {
        var a = Math.floor(Math.random() * e.length - 1) + 1;
        return e[a]
    }, insertText: function (e, a) {
        $(e).html(a)
    }, usersOnline: function (e) {
        return Math.floor(301 * Math.random() + 300)
    }, elemText: function (e) {
        return $(e).text()
    }, generatePopupUsersOnline: function () {
        var e = tagOnlineStart + usersOnline + popaps.usersOnline(".users-online") + tagEndDivAndSpan;
        popaps.insertText(".users-online", e), $(".users-online").addClass("show-order"), setTimeout(function () {
            $(".users-online").removeClass("show-order")
        }, intervalTime / 2)
    }, generatePopupMadeOrder: function () {
        var e = tagCallBackStart + popaps.generateName(nameList) + orderedCallback + tagEndDivAndSpan;
        popaps.insertText(".users-online", e), $(".users-online").addClass("show-order"), setTimeout(function () {
            $(".users-online").removeClass("show-order")
        }, intervalTime / 2)
    }, generatePopupOrderMake: function () {
        var e;
        e = popaps.prodsLeft <= 10 ? popaps.prodsLeft - 5 : Math.floor(5 * Math.random()) + 1;
        var a = tagCartStart + beforenametext + popaps.generateName(nameList) + madeOrderOnSum + popaps.elemText(".x_price_current:first").toString() * e + " " + popaps.elemText(".x_currency:first") + wasOrdered + e + " " + popaps.elemText(".paced:first") + left + shared + tagBlinkAnim + popaps.prodsLeft + tagEndSpan + "&nbsp" + (popaps.prodsLeft - e) + tagEndDivAndSpan;
        popaps.prodsLeft -= e, $(".order-modal").addClass("show-order"), setTimeout(function () {
            $(".order-modal").removeClass("show-order")
        }, intervalTime / 2), popaps.checkNumberOfSymbols(), popaps.insertText(".order-modal", a)
    }, generatePopupLeftFive: function () {
        var e = tagCartStart + packsLeft + tagBlinkSpan + popaps.prodsLeft + tagEndSpan + tagEndDivAndSpan;
        popaps.insertText(".users-online", e), $(".users-online").addClass("show-order")
    }, checkNumberOfSymbols: function () {
        if (3 == $(".lastpack").attr("data-number")) {
            if (2 == popaps.prodsLeft.toString().length)var e = "0" + popaps.prodsLeft.toString(); else if (1 == popaps.prodsLeft.toString().length)var e = "00" + popaps.prodsLeft.toString(); else var e = popaps.prodsLeft.toString();
            var a = tagStartSpan + e[0] + tagEndSpan + tagStartSpan + e[1] + tagEndSpan + tagStartSpan + e[2] + tagEndSpan
        } else if (2 == $(".lastpack").attr("data-number")) {
            if (1 == popaps.prodsLeft.toString().length)var e = "0" + popaps.prodsLeft.toString(); else var e = popaps.prodsLeft.toString();
            var a = tagStartSpan + e[0] + tagEndSpan + tagStartSpan + e[1] + tagEndSpan
        } else var a = popaps.prodsLeft;
        popaps.insertText(".lastpack", a), $(".lastpack").each(function (e, a) {
            2 == $(this).attr("data-number") && $(this).find("span:first").remove()
        })
    }, closedModalCalculations: function () {
        var e;
        if (e = popaps.prodsLeft <= 10 ? popaps.prodsLeft - 5 : Math.floor(5 * Math.random()) + 1, popaps.prodsLeft -= e, 3 == $(".lastpack").attr("data-number")) {
            if (2 == popaps.prodsLeft.toString().length)var a = "0" + popaps.prodsLeft.toString(); else if (1 == popaps.prodsLeft.toString().length)var a = "00" + popaps.prodsLeft.toString(); else var a = popaps.prodsLeft.toString();
            var o = tagStartSpan + a[0] + tagEndSpan + tagStartSpan + a[1] + tagEndSpan + tagStartSpan + a[2] + tagEndSpan
        } else if (2 == $(".lastpack").attr("data-number")) {
            if (1 == popaps.prodsLeft.toString().length)var a = "0" + popaps.prodsLeft.toString(); else var a = popaps.prodsLeft.toString();
            var o = tagStartSpan + a[0] + tagEndSpan + tagStartSpan + a[1] + tagEndSpan
        } else var o = popaps.prodsLeft;
        popaps.insertText(".lastpack", o), $(".lastpack").each(function (e, a) {
            2 == $(this).attr("data-number") && $(this).find("span:first").remove()
        })
    }, mainFunc: function () {
        popaps.checkNumberOfSymbols(), setTimeout(popaps.generatePopupUsersOnline, 2e3);
        var e = setInterval(function () {
            popaps.generatePopupOrderMake(), popaps.prodsLeft <= 50 && (clearInterval(e), setTimeout(popaps.generatePopupMadeOrder, intervalTime), setTimeout(function () {
                e = setInterval(function () {
                    popaps.generatePopupOrderMake(), popaps.prodsLeft <= 35 && (clearInterval(e), setTimeout(popaps.generatePopupUsersOnline, intervalTime), setTimeout(function () {
                        e = setInterval(function () {
                            popaps.generatePopupOrderMake(), popaps.prodsLeft <= 20 && (clearInterval(e), setTimeout(popaps.generatePopupMadeOrder, intervalTime), setTimeout(function () {
                                e = setInterval(function () {
                                    popaps.generatePopupOrderMake(), popaps.prodsLeft <= 10 && (clearInterval(e), popaps.checkNumberOfSymbols(), setTimeout(function () {
                                        popaps.generatePopupOrderMake()
                                    }, intervalTime), setTimeout(function () {
                                        popaps.generatePopupLeftFive()
                                    }, 2 * intervalTime))
                                }, intervalTime)
                            }, intervalTime))
                        }, intervalTime)
                    }, intervalTime))
                }, intervalTime)
            }, intervalTime))
        }, intervalTime);
        $(window).load(function () {
            $("body").append('<div class="order-modal"></div> <div class="users-online"></div>'), $(".order-modal, .users-online").click(function (a) {
                clearInterval(e);
                var o = setInterval(function () {
                    popaps.closedModalCalculations(), popaps.prodsLeft <= 5 && (popaps.prodsLeft = 5, popaps.checkNumberOfSymbols(), clearInterval(o))
                }, intervalTime / 2);
                $(".order-modal, .users-online").removeClass("show-order").hide(0)
            })
        })
    }
}, modals = {
    modalClasses: [], formWrapAddClass: function () {
        $(".clone-this-mobile").length ? $(window).width() >= mobileFormBreakPoint ? ($(".clone-this-mobile:first").removeClass(formForCloneMobile), $(".clone-this:first").addClass(formForClone)) : ($(".clone-this:first").removeClass(formForClone), $(".clone-this-mobile:first").addClass(formForCloneMobile)) : $(".clone-this:first").addClass(formForClone)
    }, makeClone: function () {
        return $(".clone-this-mobile").length ? $(window).width() >= mobileFormBreakPoint ? $("." + formForClone + ":first").clone() : $("." + formForCloneMobile + ":first").clone() : $("." + formForClone + ":first").clone()
    }, createModalLayout: function () {
        $("body").append('<div class="modal-wrap"><div class="inner-modal"><div class="close">×</div></div></div>')
    }, addClassToModal: function () {
        $(".modal-wrap").each(function (e) {
            $(this).addClass(modals.modalClasses[e])
        })
    }, insertFormIntoModal: function () {
        $(".inner-modal").append(modals.makeClone())
    }, getModalClasses: function () {
        $(".open-modal").each(function (e, a) {
            modals.createModalLayout();
            var o = $(this).attr("data-modal-create");
            modals.modalClasses.push(o)
        })
    }, mouseUp: function () {
        modals.createModalLayout(), $('div[class="modal-wrap"]').addClass("mouse-out-modal"), $(".mouse-out-modal .inner-modal").append(modals.makeClone()), $(window).on("mouseleave", function (e) {
            e.pageY - $(window).scrollTop() < 1 && !$(".modal-wrap").hasClass("show-modal") && ($(".mouse-out-modal").addClass("show-modal"), $(window).off("mouseleave"))
        })
    }, invokeModal: function (e) {
        $(e).click(function () {
            var e = $(this).attr("data-modal-create");
            $(".modal-wrap." + e).addClass("show-modal")
        })
    }, closeModal: function () {
        $(".close").on("click", function () {
            $(".modal-wrap").removeClass("show-modal")
        }), $(document).keyup(function (e) {
            "27" == e.which && $(".modal-wrap").removeClass("show-modal")
        }), $(".modal-wrap").on("click", function (e) {
            ($(e.target).is($(".modal-wrap")) || $(e.target).is(".close")) && $(".modal-wrap").removeClass("show-modal")
        })
    }, addPhoneBtn: function () {
        $("body").append('<div class="bluePhone open-modal" data-modal-create="phone-btn"><div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><div class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></div></div></div>')
    }, clearModals: function () {
        $(".modal-wrap .inner-modal .close + div").remove()
    }
};
if (1 == checkCode && codeCheck(), 1 == todaySold && soldToday(), 1 == orderPopups && (popaps.mainFunc(), popaps.insertText(".paced", packName), popaps.checkNumberOfSymbols()), 1 == modalsClone) {
    if ($(".clone-this-mobile").length)var formForCloneMobile = "form-for-clone-mobile", formForClone = "form-for-clone"; else var formForClone = "form-for-clone";
    modals.formWrapAddClass(), modals.addPhoneBtn(), modals.getModalClasses(), modals.addClassToModal(), modals.insertFormIntoModal(), modals.mouseUp(), modals.closeModal(), modals.invokeModal(".open-modal"), $(window).on("resize", function (e) {
        $(window).width() < 1e3 ? (modals.clearModals(), modals.formWrapAddClass(), modals.insertFormIntoModal()) : (modals.clearModals(), modals.formWrapAddClass(), modals.insertFormIntoModal())
    })
}
addDataAtr(countryCodeLocation);