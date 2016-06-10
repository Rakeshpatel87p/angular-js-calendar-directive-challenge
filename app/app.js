var calendarDemoApp = angular.module('calendarDemoApp', [])

.controller('dataCompiler', ['$scope', function($scope) {
    $scope.monthsSelector = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    var d = new Date();
    $scope.monthSelected = $scope.monthsSelector[d.getMonth()];
    $scope.yearSelected = d.getFullYear();

    $scope.submission = function() {
        $scope.days = CalendarRange.getMonthlyRange($scope.monthSelected.toString() + $scope.yearSelected.toString()).days;

    }

    $scope.submission();
    // $scope.$watchGroup(['monthSelected', 'yearSelected'], 
    //     function(newVal, oldVal){
    //         console.log(newVal[0]);
    //         console.log(oldVal[0]);
    //         console.log(newVal[1]);
    //         console.log(oldVal[1]);
    // })
    // $scope.$watch('monthSelected',
    //     function(newVal, oldVal) {
    //         $scope.days = CalendarRange.getMonthlyRange(newVal + $scope.yearSelected.toString()).days;
    //         console.log(newVal);
    //     });
    
    // $scope.$watch('yearSelected', 
    //     function(newVal, oldVal){
    //         $scope.days = CalendarRange.getMonthlyRange($scope.monthSelected.toString() + "1, " + newVal);
    //         console.log($scope.monthSelected.toString() + newVal);
        
    //     })

    $scope.years = [];
    for (i = ((CalendarRange.prepareDate(Date.now()).year) - 20); i <= (CalendarRange.prepareDate(Date.now()).year); i++) {
        $scope.years.push(i);
    }

    for (i = CalendarRange.prepareDate(Date.now()).year; i <= ((CalendarRange.prepareDate(Date.now()).year) + 20); i++) {
        $scope.years.push(i);
    }

}])

// your controller and directive code go here
