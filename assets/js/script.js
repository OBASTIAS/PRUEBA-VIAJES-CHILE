/* efecto smooth scroll para navbar y footer*/

$(function() {
    $('nav a').click(function(e) {
        e.preventDefault(); //evitar el eventos del enlace normal
        var strAncla = $(this).attr('href'); //id del ancla
        $('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top
        }, 800); //fadetime
    });
    $('#top-navbar').click(function(e) {
        e.preventDefault(); //evitar el eventos del enlace normal
        var strAncla = $(this).attr('href'); //id del ancla
        $('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top
        }, 800); //fadetime
    });
});

/*tooltip*/

$(function() {
    $('[data-toggle="tooltip"]').tooltip();

});

/*popover para las redes sociales*/

$(function() {
    $('[data-toggle="popover"]').popover();
});


/* script de typeform*/

$(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q)
    }
})