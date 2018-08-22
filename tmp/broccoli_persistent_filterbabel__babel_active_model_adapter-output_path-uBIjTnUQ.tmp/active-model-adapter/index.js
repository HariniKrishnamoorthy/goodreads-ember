define('active-model-adapter/index', ['exports', 'active-model-adapter/active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, _activeModelAdapter, _activeModelSerializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ActiveModelSerializer = exports.ActiveModelAdapter = undefined;
  exports.default = _activeModelAdapter.default;
  exports.ActiveModelAdapter = _activeModelAdapter.default;
  exports.ActiveModelSerializer = _activeModelSerializer.default;
});