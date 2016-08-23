angular.module('simpleResultModule', ['ngRoute', 'ngResource'])
.controller('searchResultViewController', function ($scope, SearchApiDb) {
    var currentSearch = $scope;
    var userSearchText = currentSearch.userSearchInput;
    console.log(currentSearch.resultObject);
    currentSearch.searchMakeCall = function() {
        userSearchText = currentSearch.userSearchInput;
        var modString = userSearchText.replace(/\s+/g, '+');
        currentSearch.resultScope = SearchApiDb.getResult(modString);
        // currentSearch.actualResultScope = currentSearch.resultScope.$$state.value.data;
        console.log("DATAAAAA:", currentSearch.resultObject);
        setTimeout(function(){
            currentSearch.actualResultScope = currentSearch.resultScope.$$state.value.data;
            console.log(currentSearch.actualResultScope);
            // console.log(currentSearch.resultScope.$$state.value.data);
        }, 200);
    };
    console.log(currentSearch.resultObject);

    // get the user entered search text
    // if there are any spaces in the text, replace them with plus + signs
    // combine the search api url and the search text
    // make an api call got get json back
    // sort the json
    // output the result to user with title (for now, just the title)

});


