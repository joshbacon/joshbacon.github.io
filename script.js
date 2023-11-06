function smoothScroll(div) {
    document.getElementById(div).scrollIntoView({
        behavior: "smooth"
    });
}

$(document).on("scroll", async function() {
    let pageTop = $(document).scrollTop();
    let pageBottom = pageTop + $(window).height();

    let skills = [
        $(".skill-react"),
        $(".skill-js"),
        $(".skill-html"),
        $(".skill-css"),
        $(".skill-flutter"),
        $(".skill-godot"),
        $(".skill-python"),
        $(".skill-java")
    ];

    let list = $(".skills-list");

    if ($(list).position().top < pageBottom) {
        for (let s in skills) {
            $(skills[s]).addClass("visible");
            await new Promise(r => setTimeout(r, 250));
        }
    } else {
        for (let s in skills) {
            $(skills[s]).removeClass("visible");
        }
    }
});
