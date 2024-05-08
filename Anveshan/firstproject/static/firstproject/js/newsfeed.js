$(document).ready(function () {
    function rearrangetiles() {
        let tilesgroup = document.getElementById("tilesgroup");
        let leaderboard = document.getElementById("leaderboard");
        let event_center = document.getElementById("eventcenter");
        let team_pegasus = document.getElementById("teampg");
        let team_phoenix = document.getElementById("teamph");
        let team_hercules = document.getElementById("teamhr");
        let team_vega = document.getElementById("teamvg");
        let newsfeed = document.getElementById("newsfeed");

        if ($(window).width() > 960) {
            tilesgroup.removeAttribute("class");
            leaderboard.removeAttribute("class");
            event_center.removeAttribute("class");
            team_pegasus.removeAttribute("class");
            team_phoenix.removeAttribute("class");
            team_hercules.removeAttribute("class");
            team_vega.removeAttribute("class");
            newsfeed.removeAttribute("class");

            tilesgroup.setAttribute("class", "tiles-grid tiles-group size-6");
            leaderboard.setAttribute("class", "col-1 row-5 tile-large");
            event_center.setAttribute("class", "col-5 row-5 tile-large")
            team_pegasus.setAttribute("class", "col-9 row-1 bg-teampg tile-medium");
            team_phoenix.setAttribute("class", "col-11 row-1 bg-teamph tile-medium");
            team_hercules.setAttribute("Class", "col-9 row-3 bg-teamhr tile-medium");
            team_vega.setAttribute("class", "col-11 row-3 bg-teamvg tile-medium");
            newsfeed.setAttribute("Class", "col-9 row-5 tile-large");
        }
        else if ($(window).width() < 960) {
            tilesgroup.removeAttribute("class");
            leaderboard.removeAttribute("class");
            event_center.removeAttribute("class");
            team_pegasus.removeAttribute("class");
            team_phoenix.removeAttribute("class");
            team_hercules.removeAttribute("class");
            team_vega.removeAttribute("class");
            newsfeed.removeAttribute("class");

            tilesgroup.setAttribute("class", "tiles-grid tiles-group size-4");
            team_pegasus.setAttribute("class", "col-1 row-5 bg-teampg tile-medium");
            team_phoenix.setAttribute("class", "col-3 row-5 bg-teamph tile-medium");
            leaderboard.setAttribute("class", "col-1 row-7 tile-large");
            team_hercules.setAttribute("Class", "col-5 row-5 bg-teamhr tile-medium");
            team_vega.setAttribute("class", "col-7 row-5 bg-teamvg tile-medium");
            event_center.setAttribute("class", "col-5 row-7 tile-wide");
            newsfeed.setAttribute("Class", "col-5 row-9 tile-wide");

        }
        else {
        }
    }
    $(window).on("resize", rearrangetiles);
    rearrangetiles();
});