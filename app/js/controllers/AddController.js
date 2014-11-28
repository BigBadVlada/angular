sitesApp.controller('AddController', function ($scope, $modal) {


    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'addSites.html',
            controller: 'ModalInstanceCtrl'
        });
    };

    $scope.sites = [
        {
            url:'',
            color:'',
            groups: []
        },
        {
            url:'',
            color:'',
            groups: []
        },
        {
            url:'',
            color:'',
            groups: []
        }
    ];
});