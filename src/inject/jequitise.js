
(function ($) {

    let logo = 'https://raw.githubusercontent.com/mayroonalves/jequitise/master/images/jequiti-logo.png'
    const jequitise = function () {
        $('body').prepend(`<div id="jequitise" style="background-color: #FFF;width: 100%;height: 100%;position: fixed;z-index: 9999;"><img src="${logo}" style="width: 80%; position: relative; transform: translate(-50%, 50%); left: 50%;" /></div>`)
        $("#jequitise").fadeOut('fast', function () {
            $(this).remove()
        })
    }

    const loop = () => {
        let min = 10 * 1000
        let max = 60 * 1000
        let rand = Math.ceil(Math.random() * (max - min)) + min
        setTimeout(function () {
            jequitise()
            loop()
        }, rand)
    }

    loop()
})(jQuery);
