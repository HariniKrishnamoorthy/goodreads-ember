(function() {
  define('ember-cli-shims/deprecations', [], function() {
    var values = {"ember-application":{"default":["@ember/application"]},"ember-array":{"default":["@ember/array"]},"ember-array/mutable":{"default":["@ember/array/mutable"]},"ember-array/utils":{"A":["@ember/array","A"],"isEmberArray":["@ember/array","isArray"],"wrap":["@ember/array","makeArray"]},"ember-component":{"default":["@ember/component"]},"ember-components/checkbox":{"default":["@ember/component/checkbox"]},"ember-components/text-area":{"default":["@ember/component/text-area"]},"ember-components/text-field":{"default":["@ember/component/text-field"]},"ember-computed":{"default":["@ember/object","computed"],"alias":["@ember/object/computed","alias"],"and":["@ember/object/computed","and"],"bool":["@ember/object/computed","bool"],"collect":["@ember/object/computed","collect"],"deprecatingAlias":["@ember/object/computed","deprecatingAlias"],"empty":["@ember/object/computed","empty"],"equal":["@ember/object/computed","equal"],"filter":["@ember/object/computed","filter"],"filterBy":["@ember/object/computed","filterBy"],"filterProperty":["@ember/object/computed","filterProperty"],"gt":["@ember/object/computed","gt"],"gte":["@ember/object/computed","gte"],"intersect":["@ember/object/computed","intersect"],"lt":["@ember/object/computed","lt"],"lte":["@ember/object/computed","lte"],"map":["@ember/object/computed","map"],"mapBy":["@ember/object/computed","mapBy"],"mapProperty":["@ember/object/computed","mapProperty"],"match":["@ember/object/computed","match"],"max":["@ember/object/computed","max"],"min":["@ember/object/computed","min"],"none":["@ember/object/computed","none"],"not":["@ember/object/computed","not"],"notEmpty":["@ember/object/computed","notEmpty"],"oneWay":["@ember/object/computed","oneWay"],"or":["@ember/object/computed","or"],"readOnly":["@ember/object/computed","readOnly"],"reads":["@ember/object/computed","reads"],"setDiff":["@ember/object/computed","setDiff"],"sort":["@ember/object/computed","sort"],"sum":["@ember/object/computed","sum"],"union":["@ember/object/computed","union"],"uniq":["@ember/object/computed","uniq"]},"ember-controller":{"default":["@ember/controller"]},"ember-controller/inject":{"default":["@ember/controller","inject"]},"ember-controller/proxy":{"default":["@ember/array/proxy"]},"ember-debug":{"inspect":["@ember/debug","inspect"],"log":["@ember/debug","debug"],"run":["@ember/debug","runInDebug"],"warn":["@ember/debug","warn"]},"ember-debug/container-debug-adapter":{"default":["@ember/debug/container-debug-adapter"]},"ember-debug/data-adapter":{"default":["@ember/debug/data-adapter"]},"ember-deprecations":{"deprecate":["@ember/application/deprecations","deprecate"],"deprecateFunc":["@ember/application/deprecations","deprecateFunc"]},"ember-enumerable":{"default":["@ember/enumerable"]},"ember-evented":{"default":["@ember/object/evented"]},"ember-evented/on":{"default":["@ember/object/evented","on"]},"ember-globals-resolver":{"default":["@ember/application/globals-resolver"]},"ember-helper":{"default":["@ember/component/helper"],"helper":["@ember/component/helper","helper"]},"ember-instrumentation":{"instrument":["@ember/instrumentation","instrument"],"reset":["@ember/instrumentation","reset"],"subscribe":["@ember/instrumentation","subscribe"],"unsubscribe":["@ember/instrumentation","unsubscribe"]},"ember-locations/hash":{"default":["@ember/routing/hash-location"]},"ember-locations/history":{"default":["@ember/routing/history-location"]},"ember-locations/none":{"default":["@ember/routing/none-location"]},"ember-map":{"default":["@ember/map"],"withDefault":["@ember/map/with-default"]},"ember-metal/events":{"addListener":["@ember/object/events","addListener"],"removeListener":["@ember/object/events","removeListener"],"send":["@ember/object/events","sendEvent"]},"ember-metal/get":{"default":["@ember/object","get"],"getProperties":["@ember/object","getProperties"]},"ember-metal/mixin":{"default":["@ember/object/mixin"]},"ember-metal/observer":{"default":["@ember/object","observer"],"addObserver":["@ember/object/observers","addObserver"],"removeObserver":["@ember/object/observers","removeObserver"]},"ember-metal/on-load":{"default":["@ember/application","onLoad"],"run":["@ember/application","runLoadHooks"]},"ember-metal/set":{"default":["@ember/object","set"],"setProperties":["@ember/object","setProperties"],"trySet":["@ember/object","trySet"]},"ember-metal/utils":{"aliasMethod":["@ember/object","aliasMethod"],"assert":["@ember/debug","assert"],"cacheFor":["@ember/object/internals","cacheFor"],"copy":["@ember/object/internals","copy"],"guidFor":["@ember/object/internals","guidFor"]},"ember-object":{"default":["@ember/object"]},"ember-owner/get":{"default":["@ember/application","getOwner"]},"ember-owner/set":{"default":["@ember/application","setOwner"]},"ember-platform":{"assign":["@ember/polyfills","assign"],"create":["@ember/polyfills","create"],"hasAccessors":["@ember/polyfills","hasPropertyAccessors"],"keys":["@ember/polyfills","keys"]},"ember-route":{"default":["@ember/routing/route"]},"ember-router":{"default":["@ember/routing/router"]},"ember-runloop":{"default":["@ember/runloop","run"],"begin":["@ember/runloop","begin"],"bind":["@ember/runloop","bind"],"cancel":["@ember/runloop","cancel"],"debounce":["@ember/runloop","debounce"],"end":["@ember/runloop","end"],"join":["@ember/runloop","join"],"later":["@ember/runloop","later"],"next":["@ember/runloop","next"],"once":["@ember/runloop","once"],"schedule":["@ember/runloop","schedule"],"scheduleOnce":["@ember/runloop","scheduleOnce"],"throttle":["@ember/runloop","throttle"]},"ember-service":{"default":["@ember/service"]},"ember-service/inject":{"default":["@ember/service","inject"]},"ember-string":{"camelize":["@ember/string","camelize"],"capitalize":["@ember/string","capitalize"],"classify":["@ember/string","classify"],"dasherize":["@ember/string","dasherize"],"decamelize":["@ember/string","decamelize"],"fmt":["@ember/string","fmt"],"htmlSafe":["@ember/string","htmlSafe"],"loc":["@ember/string","loc"],"underscore":["@ember/string","underscore"],"w":["@ember/string","w"]},"ember-test/adapter":{"default":["@ember/test/adapter"]},"ember-utils":{"isBlank":["@ember/utils","isBlank"],"isEmpty":["@ember/utils","isEmpty"],"isNone":["@ember/utils","isNone"],"isPresent":["@ember/utils","isPresent"],"tryInvoke":["@ember/utils","tryInvoke"],"typeOf":["@ember/utils","typeOf"]}};
    
    Object.defineProperty(values, '__esModule', {
      value: true
    });

    return values;
  });
})();