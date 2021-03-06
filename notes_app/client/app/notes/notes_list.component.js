(function() {
  'use strict';

  NotesCtrl.$inject = ['notesService', 'userService'];
  function NotesCtrl(notesService, userService) {
    var ctrl = this;

    ctrl.userService = userService;
    ctrl.currentPage = 1;
    ctrl.noteLimit = 20;
    ctrl.update = function() {
      notesService.list(ctrl.noteLimit, ((ctrl.currentPage - 1) * ctrl.noteLimit))
      .then(function(response) {
        ctrl.metadata = notesService.data.metadata;
        ctrl.notes = notesService.data.notes;
      });
    };
    ctrl.update();
  }

  angular.module('notes').component('notesList', {
    templateUrl: 'templates/notes_list.tpl.html',
    controller: NotesCtrl
  });
})();
