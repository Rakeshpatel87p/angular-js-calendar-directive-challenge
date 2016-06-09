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
        
        $scope.submission = function(){
            console.log($scope.monthSelected.toString(), $scope.yearSelected.toString())
            console.log(CalendarRange.getMonthlyRange($scope.monthSelected.toString() + $scope.yearSelected.toString()));
        }

        $scope.years = [];
        	for(i=((CalendarRange.prepareDate(Date.now()).year) - 20); i <= (CalendarRange.prepareDate(Date.now()).year); i++) {
        		$scope.years.push(i);
        	}
        	
        	for(i=CalendarRange.prepareDate(Date.now()).year; i <= ((CalendarRange.prepareDate(Date.now()).year) + 20); i++) {
        		$scope.years.push(i);
        	}

    }])

// your controller and directive code go here
