const $ = require("jquery");
const ajax = require("./ajax");
const tvSection = require("./buildTvSection");

const makeTvShow = Object.create(
  {},
  {
    addNewTvShow: {
      value: function() {
        console.log("addNewTvShow");
        let name = document.getElementById("nameInput").value;
        let plot = document.getElementById("plotInput").value;
        let seasons = document.getElementById("seasonsInput").value;
        ajax
          .postTvShow(name, plot, seasons)
          .then(buildTvSection.buildSingleTvShow);

        // .then(buildTvSection.buildSingleTvShow());
      }
    }
  }
);

module.exports = makeTvShow;
