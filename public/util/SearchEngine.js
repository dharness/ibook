/**
 * SearchEngine provides a set of utilities
 for querying facebook 's graph API to find fan-pages
 * @author Dylan Harness - May 2015
 **/

// Construct SE with a copy of a facebook app ID
searchEngine = (function() {

    ////////////////////////////////////////////////////////////////////
    //                         Attributes                             //
    ////////////////////////////////////////////////////////////////////
    // var table = document.getElementById("results");
    // var searchField = document.getElementById('search');

    ////////////////////////////////////////////////////////////////////
    //                       Public Methods                           //
    ////////////////////////////////////////////////////////////////////
    var search = function() {
        table = document.getElementById("results");
        searchField = document.getElementById('search');
        var term = searchField.value;
        FB.api('search?q=' + term + '&type=page', 'GET', null, function(res, err) {
            if (!err) {
                var data = res.data;

                for (var p = data.length; p--;) {
                    page = data[p];

                    var pageData = addName({}, page.name);
                    addURL(pageData, page.id);
                }

            }
        });
    }

    var gather = function() {
        alert('this feature is not yet implemented');
    }

    ////////////////////////////////////////////////////////////////////
    //                      Private Methods                           //
    ////////////////////////////////////////////////////////////////////

    var addName = function(pageData, name) {
        pageData.name = name;
        return pageData;
    }

    var addURL = function(pageData, id) {
        FB.api('/' + id, 'GET', null, function(res, err) {

            pageData.url = res.link;
            addImage(pageData, id);
        });
    }

    var addImage = function(pageData, id) {
        FB.api('/' + id + '/picture', 'GET', null, function(res, err) {
            pageData.image = res.data.url
            buildCell(pageData)
        });
    }

    var buildCell = function(pageData) {
        var row = table.insertRow(1);
        row.insertCell(0).innerHTML = "<img src='" + pageData.image + "'>";
        row.insertCell(1).innerHTML = pageData.name;
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        row.insertCell(2).innerHTML = "<a target='_blank' href='" + pageData.url + "'>" + pageData.url + "</a>";
        row.insertCell(3).innerHTML = "<input type='checkbox'></input>";
    }

    ////////////////////////////////////////////////////////////////////
    //                       Exposed Methods                          //
    ////////////////////////////////////////////////////////////////////
    return {
        search: search,
        gather: gather
    }

})();