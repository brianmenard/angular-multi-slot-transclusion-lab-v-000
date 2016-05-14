 function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			title: 'h6',
			desc: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<h4>Name: </h4><span ng-transclude="name"></span>',
				'<h6>Position: </h6><span ng-transclude="title"></span>',
				'<label>Description: </label><span ng-transclude="desc"></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
