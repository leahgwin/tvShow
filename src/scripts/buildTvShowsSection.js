const $ = require("jquery");

const buildTvSection = Object.create({}, {
    //create method to write the section, header, and button to the DOM
    "buildTvShowSection": {
        value: function () {
            //adding the header, button, and section that will hold TV shows
            $("#tvShowsHolder").append($(`
        <button type="button" class="btn btn-primary" id = "saveNewTvShow" data-toggle="modal" data-target="#newTvShowModal">Add a New TV Show</button>
        <section id = "tvModal"></section>
        <h2>My TV Watchlist</h2>
        <section id = "tvShowList"></section>
            <div id = "tvName"></section>
            <div id = "tvPlot"></section>
            <div id = "tvSeasons"></div>
            <div id = "watchedShow"></div>
            <div id = "deleteButton"></div>
        `))
        //framework for the modal
            let modal = (`
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
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>`)
            //this appends the entire modal to the section inside main div
            $("#tvModal").append(modal);
            //need to build a function for addNewTvShow
            $("#saveNewTvShow").on("click", makeTvShow.addNewTvShow);
        }
    },
    buildSingleTvShow() {



    }
})

buildTvSection.buildTvShowSection();

const makeTvShow = Object.create({}, {

        // "editTvShow": {
        //     value: function () {
        //     console.log("edit event", event.target.id);

        //     ajax.getField(`events/${event.target.id}`).then((eventInfo) => {
        //         console.log("INFO", eventInfo.name);
        //         $(`#editEventInput${eventInfo.id}`).val(eventInfo.name);
        //         $(`#editEventLocation${eventInfo.id}`).val(eventInfo.location);
        //         $(`#editEventParty-time${eventInfo.id}`).val(eventInfo.date);
        //     })
        //     }
        // }
"addNewTvShow": {
        function () {
            console.log('addNewTvShow');
            let name = document.getElementById("nameInput").value;
            let plot = document.getElementById("plotInput").value;
            let seasons = document.getElementById("seasonsInput").value;
            ajax.postEvent(name, plot, seasons).then(
                // buildTvSection.PLUGSOMETHINGHERE());
            )}
    }
    })
// module.exports = buildTvSection;

