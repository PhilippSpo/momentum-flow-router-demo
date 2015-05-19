FlowRouter.route('/', {
	action: function () {
		FlowRouter.go('/main');
	}
});

FlowRouter.route('/main', {
	name: 'main',
	action: function () {
		FlowLayout.render('layout', {
			top: 'mainToolbar',
			main: 'main'
		});
	}
});

FlowRouter.route('/left', {
	name: 'left',
	action: function () {
		FlowLayout.render('layout', {
			top: 'leftToolbar',
			main: 'left'
		});
	}
});

FlowRouter.route('/right', {
	name: 'right',
	action: function () {
		FlowLayout.render('layout', {
			top: 'rightToolbar',
			main: 'right'
		});
	}
});

FlowRouter.route('/fade', {
	name: 'fade',
	action: function () {
		FlowLayout.render('layout', {
			top: 'fadeToolbar',
			main: 'fade'
		});
	}
});
