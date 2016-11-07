define(function (require) {
	var Tip = function (Msg) {
        this.Msg =Msg
        $("div.msg").html(this.Msg)
        $("div.testTip").slideDown();
        this.hidden = function () {
            $("div.testTip").slideUp();
        }
        setTimeout(this.hidden, 1500)
    }
    return Tip
})





