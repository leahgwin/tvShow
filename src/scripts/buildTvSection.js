const $ = require("jquery");
const newTvShow = require("./addNewTvShow");
// const buildSection = require("./buildTvShowsSection")

const buildTvSection = Object.create(
  {},
  {
    //create method to write the section, header, and button to the DOM
    buildTvShowSection: {
      value: function() {
        //adding the header, button, and section that will hold TV shows
        $("#tvShowsHolder").append(
          $(`
          <button type="button" class="btn btn-primary" id = "makeNewTvShow" data-toggle="modal" data-target="#newTvShowModal">Add a New TV Show</button>
          <section id = "tvModal"></section>
          <h2>My TV Watchlist</h2>
          <section id = "tvShowList"></section>
          `)
        );
        //framework for the modal
        let modal = `
              <div class="modal fade" id="newTvShowModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <form id="editEventForm">
                    TV Show Name: <input id="nameInput">
                      <br>
                      Plot: <input id="plotInput">
                      <br>
                      Number of Seasons: <input id="seasonsInput">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id = "saveNewTvShow">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>`;
        //this appends the entire modal to the section inside main div
        $("#tvModal").append(modal);
        //need to build a function for addNewTvShow
        $("#saveNewTvShow").on("click", newTvShow.makeTvShow.addNewTvShow);
        //This is where the console log is saying theres a bug ^
      }
    },
    buildSingleTvShow: {
      value: function() {
        return ajax.getField("tvShows").then(tvShowsArray => {
          $("#tvShowList").empty();
          //this is writing to the DOM each tv show
          tvShowsArray.forEach(tvObject => {
            //appends to the tv show list holder
            $("#tvShowList").append(
              $(`
                  <section class = "'${tvObject.id}' singleEvent">
                      <div id="name">${tvObject.name}</div>
                      <div id="plot">${tvObject.plot}</div>
                      <div id="seasons">${tvObject.seasons}</div>
                      <button type="button" class="btn-delete btn-secondary" id ="${
                        tvObject.id
                      }"">Delete TV Show</button>
                  </section>`)
            );
          });
        });
      }
    }
  }
);

buildTvSection.buildTvShowSection();
// console.log(buildTvSection.buildSingleTvShow);

buildTvSection.buildSingleTvShow();

module.exports = buildTvSection;
