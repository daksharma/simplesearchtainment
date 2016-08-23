angular.module('searchServiceModule', []).factory('SearchApiDb', function($http){

    var searchApiUrl = "http://www.omdbapi.com/?t=";
    var searchApiType = "&r=json";
    var searchResult;
    var getSearchResults = function (userSearchInput) {
        var actualResult;
        var fullSearchUr = searchApiUrl + userSearchInput + searchApiType;
        searchResult = $http.get(fullSearchUr).success(function(data, status) {
            actualResult = data;
            console.log(actualResult);
            return actualResult;
        }).error(function(err) {
            console.log(err);
        }).then(function(data) {
            actualResult = data;
            return data;
        });
        return searchResult;
    };

    return {
        getResult : getSearchResults
    }

});