sitesApp.controller('AddControllerGroup', function ($scope, $modal) {

    $scope.items = [];

    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'addGroups.html',
            controller: 'ModalInstanceCtrl'
        });
    };
});