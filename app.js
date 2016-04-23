// var app = angular.module('app', []);
//
// function MainCtrl($scope, $http) {
//     $scope.portfolioItems = [{
//         id: 1,
//         title: 'item 1',
//         desc: 'item 1',
//         thumbnail: 'images/thumbnail-character.png',
//         link: '/characteranimation',
//         date: '03.29.16'
//     }, {
//         id: 2,
//         title: 'item 2',
//         desc: 'item 2',
//         thumbnail: 'images/thumbnail-dva.png',
//         link: '/characteranimation',
//         date: '12.19.15'
//     }, {
//         id: 3,
//         title: 'item 3',
//         desc: 'item 3',
//         thumbnail: 'images/thumbnail-insight.png',
//         link: '/characteranimation',
//         date: '11.23.15'
//     }, ];
//
// }
angular.module('app', ['appServices'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'home.html',
      controller: ListCtrl
    }).

    when('/:itemId', {
      templateUrl: 'detail.html',
      controller: DetailCtrl
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);


/* Controllers */

function MainCtrl($scope, Page) {
  console.log(Page);
  $scope.page = Page;
}

function ListCtrl($scope, Page, Model) {
  Page.setTitle("Items");
  $scope.items = Model.notes();

}

function DetailCtrl($scope, Page, Model, $routeParams, $location) {
  Page.setTitle("Detail");
  var id = $scope.itemId = $routeParams.itemId;
  $scope.item = Model.get(id);
}

/* Services */

angular.module('appServices', [])

.factory('Page', function($rootScope) {
  var pageTitle = "Untitled";
  return {
    title: function() {
      return pageTitle;
    },
    setTitle: function(newTitle) {
      pageTitle = newTitle;
    }
  }
})

.factory('Model', function() {
  var data = [{
    id: 0,
    title: 'JB!',
    thumbnail: 'images/thumbnail-jb.png',
    tags: 'Portrait, Acrylic, Painting',
    image: 'images/jb.png',
    date: '05.26.16',
    detail: 'Acrylic Portrait of the hunky Justin Beiber',
  }, {
    id: 1,
    title: 'Character Animation Test',
    thumbnail: 'images/thumbnail-character.png',
    tags: 'Character Design, After Effects, Motion Graphics',
    image: 'images/character.gif',
    date: '02.20.16',
    detail: 'Character animation test done in After Effects. Learning from the Frasier Davidson Skillshare class.',
  }, {
    id: 2,
    title: 'Overwatch Art',
    thumbnail: 'images/thumbnail-dva.png',
    tags: "Character Design, Digital Painting, Overwatch",
    image: 'images/thumbnail-dva.png',
    date: '03.23.16',
    detail: 'Photoshop Painting of D.Va from the new Overwatch',
  }, {
    id: 3,
    title: 'Insight',
    thumbnail: 'images/thumbnail-insight.png',
    tags: "Logo Design, Branding",
    image: 'images/insight.png',
    date: '12.10.15',
    detail: 'Branding and logo options for Insight',
  }];

  return {
    notes: function() {
      return data;
    },
    get: function(id) {
      return data[id];
    },
    add: function(note) {
      var currentIndex = data.length;
      data.push({
        id: currentIndex,
        title: note.title,
        detail: note.detail
      });
    }
  }
});
