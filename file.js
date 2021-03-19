/*nero 01*/
var tooltip_nero_01 = d3.selectAll(".tooltip_nero_01:not(.css)");
var HTML_nero_01 = d3.select("div.tooltip_nero_01.mouse");
var spicchio_nero_01 = d3.select("svg").select(".nero_01");

spicchio_nero_01.on("mouseover", function() {
        tooltip_nero_01.style("opacity", "1");
    })
    .on("mousemove", function() {
        HTML_nero_01
            .style("left", Math.max(0, d3.event.pageX - 150) + "px")
            .style("top", (d3.event.pageY + 20) + "px");
    })
    .on("mouseout", function() {
        return tooltip_nero_01.style("opacity", "0");
    });

/*nero 02*/
var tooltip_nero_02 = d3.selectAll(".tooltip_nero_02:not(.css)");
var HTML_nero_02 = d3.select("div.tooltip_nero_02.mouse");
var spicchio_nero_02 = d3.select("svg").select(".nero_02");

spicchio_nero_02.on("mouseover", function() {
        tooltip_nero_02.style("opacity", "1");
    })
    .on("mousemove", function() {
        HTML_nero_02
            .style("left", Math.max(0, d3.event.pageX - 150) + "px")
            .style("top", (d3.event.pageY + 20) + "px");
    })
    .on("mouseout", function() {
        return tooltip_nero_02.style("opacity", "0");
    });

/*nero 03*/
var tooltip_nero_03 = d3.selectAll(".tooltip_nero_03:not(.css)");
var HTML_nero_03 = d3.select("div.tooltip_nero_03.mouse");
var spicchio_nero_03 = d3.select("svg").select(".nero_03");

spicchio_nero_03.on("mouseover", function() {
        tooltip_nero_03.style("opacity", "1");
    })
    .on("mousemove", function() {
        HTML_nero_03
            .style("left", Math.max(0, d3.event.pageX - 150) + "px")
            .style("top", (d3.event.pageY + 20) + "px");
    })
    .on("mouseout", function() {
        return tooltip_nero_03.style("opacity", "0");
    });

/*nero 04*/
var tooltip_nero_04 = d3.selectAll(".tooltip_nero_04:not(.css)");
var HTML_nero_04 = d3.select("div.tooltip_nero_04.mouse");
var spicchio_nero_04 = d3.select("svg").select(".nero_04");

spicchio_nero_04.on("mouseover", function() {
        tooltip_nero_04.style("opacity", "1");
    })
    .on("mousemove", function() {
        HTML_nero_04
            .style("left", Math.max(0, d3.event.pageX - 150) + "px")
            .style("top", (d3.event.pageY + 20) + "px");
    })
    .on("mouseout", function() {
        return tooltip_nero_04.style("opacity", "0");
    });