
function scroll_to(element_id) {
	document.getElementById(element_id).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
	update_scrollbar();
}

setInterval(update_scrollbar, 5);

function get_doc_height() {
    return Math.max(
        document.body.scrollHeight || 0, 
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0, 
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0, 
        document.documentElement.clientHeight || 0
    );
}

function get_scroll_percent() {
    return (
        (document.body.scrollTop) / get_doc_height()
    ) * 100;
}

const number_of_pages = document.getElementsByClassName("WRAPPER").length;
document.getElementById("SCROLLNUGGET").style.width = (100/number_of_pages) + "vw";
function update_scrollbar() {
	let amount = get_scroll_percent();
	document.getElementById("SCROLLNUGGET").style.marginLeft = amount + "vw";
}
