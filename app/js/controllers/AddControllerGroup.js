sitesApp.controller('AddControllerGroup', function ($scope, $modal) {


    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'addGroups.html',
            controller: 'ModalInstanceCtrl'
        });
    };

    $scope.groups = [
        {
            name:'',
            color:'',
            sites: []
        },
        {
            name:'',
            color:'',
            sites: []
        },
        {
            name:'',
            color:'',
            sites: []
        }
    ];
});