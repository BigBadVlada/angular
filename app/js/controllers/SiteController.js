sitesApp.controller('SiteController', function($scope, $modal) {

    $scope.vm = {};
    $scope.vm.sites = [];
    $scope.vm.groups = [];

    $scope.vm.colors = [{
        name: 'Red',
        value: 'red'
    }, {
        name: 'Green',
        value: 'green'
    }, {
        name: 'Blue',
        value: 'blue'
    }, {
        name: 'Cyan',
        value: 'cyan'
    }, {
        name: 'Magenta',
        value: 'magenta'
    }];

    $scope.addSite = function() {
        $scope.model = {};
        $scope.groups = $scope.vm.groups;
        $scope.colors = $scope.vm.colors;
        $scope.modalInstance = $modal.open({
            templateUrl: 'add-site-template',
            scope: $scope
        });
    };

    $scope.addGroup = function() {
        $scope.model = {};
        $scope.colors = $scope.vm.colors;
        $scope.modalInstance = $modal.open({
            templateUrl: 'add-group-template',
            scope: $scope
        });
    };

    $scope.saveSite = function(site) {
        console.log(site);
        $scope.vm.sites.push(site)
        $scope.modalInstance.close();
    }

    $scope.saveGroup = function(group) {
        console.log(group);
        $scope.vm.groups.push(group);
        $scope.modalInstance.close();
    }

    $scope.cancel = function() {
        $scope.modalInstance.close();
    }



});