
const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http)=>{

    // this is controller -- Two way data binding
    $scope.title = "Stay Home Stay Safe";
    $scope.sub_heading = "COVID-19 STATS";

    // $scope.changeValue = () => {
    //     $scope.title = "This is Homw Time";
    // };

    console.log("App Loaded");

    // Calling API

    $http.get(URL).then( (response)=>{
        // success
        console.log(response.data);

        $scope.all_data = response.data;

    } , (error)=>{
        // error

        console.log(error);

        } 
    );

    // get Country Data

    $scope.get_c_data = () => {
        let country = $scope.c;
        if(country == "") 
        {
            $scope.c_data = undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`).then( 
            (response) => {
            // for success
            console.log(response.data);
            $scope.c_data = response.data;

        } , 
        (error) => {
            // for error
            console.log(error);
        } )
    };

});