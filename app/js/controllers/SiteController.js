sitesApp.controller('SiteController', function($scope, $modal) {

    //Scope creation
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

    //JSON toggle buttons
    $scope.isCollapsedGroups = true;
    $scope.isCollapsedSites = true;

    //Sites functions
    $scope.addSite = function() {
        $scope.model = {};
        $scope.model.id = $scope.vm.sites.length+1;
        $scope.groups = $scope.vm.groups;
        $scope.colors = $scope.vm.colors;
        $scope.modalInstance = $modal.open({
            templateUrl: 'add-site-template',
            scope: $scope
        });
    };

    $scope.saveSite = function(site, addSitesForm) {
        if(addSitesForm.$valid) {
            console.log(site);
            $scope.vm.sites.push(site);
            $scope.modalInstance.close();
        }
    };

    $scope.deleteSite = function(index){
        $scope.vm.sites.splice(index,1);
    };

    //Groups functions
    $scope.addGroup = function() {
        $scope.model = {};
        $scope.model.id = $scope.vm.groups.length+1;
        $scope.colors = $scope.vm.colors;
        $scope.modalInstance = $modal.open({
            templateUrl: 'add-group-template',
            scope: $scope
        });
    };

    $scope.saveGroup = function(group, addGroupForm) {
        if(addGroupForm.$valid) {
            console.log(group);
            $scope.vm.groups.push(group);
            $scope.modalInstance.close();
        }
    };

    $scope.deleteGroup = function(index){
        $scope.vm.groups.splice(index,1);
    };

    //Close modal
    $scope.cancel = function() {
        $scope.modalInstance.close();
    }
});