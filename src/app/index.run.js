(function() {
  'use strict';

  angular
    .module('foundationPoc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
