sitesApp.controller('AddController', function ($scope, $modal) {

    $scope.items = [];

    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'addSites.html',
            controller: 'ModalInstanceCtrl'
        });
    };
});