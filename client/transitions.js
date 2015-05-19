Transitioner.setTransitions({
  'main->left': 'left-to-right',
  'left->main': 'right-to-left',

  'main->right': 'right-to-left',
  'right->main': 'left-to-right',

  'default': 'fade'
});
