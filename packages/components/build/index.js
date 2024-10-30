(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@simplexui/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@simplexui/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.simplexui = {}, global.React, global.core));
})(this, (function (exports, $670gB$react, core) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ":root{--color-default:#b1b1b1;--color-primary:#1a73e9;--color-secondary:#d61de4;--color-success:#1de427;--color-warning:#c3e41d;--color-error:#e4311d;--spacing-0:0;--spacing-1:.25rem;--spacing-2:.5rem;--spacing-3:.75rem;--spacing-3_5:.875rem;--spacing-4:1rem;--spacing-5:1.25rem;--spacing-6:1.5rem;--spacing-7:1.75rem;--spacing-8:2rem;--spacing-9:2.25rem;--spacing-10:2.5rem;--radius-none:0;--radius-sm:.5rem;--radius-md:.75rem;--radius-lg:.875rem;--radius-full:9999px;--font-tiny:.75rem;--line-tiny:1rem;--font-small:.875rem;--line-small:1.25rem;--font-medium:1rem;--line-medium:1.5rem;--font-large:1.125rem;--line-large:1.75rem}.styles-module_textTiny__hi4S7{font-size:var(--font-tiny);line-height:var(--line-tiny)}.styles-module_textSmall__Q7Iag{font-size:var(--font-small);line-height:var(--line-small)}.styles-module_textMedium__nCMUK{font-size:var(--font-medium);line-height:var(--line-medium)}.styles-module_textLarge__7E6zh{font-size:var(--font-large);line-height:var(--line-large)}";
  styleInject(css_248z$1);

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_production_min = {};

  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactJsxRuntime_production_min;

  function requireReactJsxRuntime_production_min () {
  	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  	hasRequiredReactJsxRuntime_production_min = 1;
  var f=$670gB$react,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
  	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
  	return reactJsxRuntime_production_min;
  }

  var reactJsxRuntime_development = {};

  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactJsxRuntime_development;

  function requireReactJsxRuntime_development () {
  	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  	hasRequiredReactJsxRuntime_development = 1;

  	if (process.env.NODE_ENV !== "production") {
  	  (function() {

  	var React = $670gB$react;

  	// ATTENTION
  	// When adding new symbols to this file,
  	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
  	// The Symbol used to tag the ReactElement-like types.
  	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
  	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
  	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
  	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
  	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
  	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
  	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
  	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
  	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
  	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
  	var REACT_MEMO_TYPE = Symbol.for('react.memo');
  	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
  	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
  	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
  	var FAUX_ITERATOR_SYMBOL = '@@iterator';
  	function getIteratorFn(maybeIterable) {
  	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
  	    return null;
  	  }

  	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  	  if (typeof maybeIterator === 'function') {
  	    return maybeIterator;
  	  }

  	  return null;
  	}

  	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

  	function error(format) {
  	  {
  	    {
  	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
  	        args[_key2 - 1] = arguments[_key2];
  	      }

  	      printWarning('error', format, args);
  	    }
  	  }
  	}

  	function printWarning(level, format, args) {
  	  // When changing this logic, you might want to also
  	  // update consoleWithStackDev.www.js as well.
  	  {
  	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
  	    var stack = ReactDebugCurrentFrame.getStackAddendum();

  	    if (stack !== '') {
  	      format += '%s';
  	      args = args.concat([stack]);
  	    } // eslint-disable-next-line react-internal/safe-string-coercion


  	    var argsWithFormat = args.map(function (item) {
  	      return String(item);
  	    }); // Careful: RN currently depends on this prefix

  	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
  	    // breaks IE9: https://github.com/facebook/react/issues/13610
  	    // eslint-disable-next-line react-internal/no-production-logging

  	    Function.prototype.apply.call(console[level], console, argsWithFormat);
  	  }
  	}

  	// -----------------------------------------------------------------------------

  	var enableScopeAPI = false; // Experimental Create Event Handle API.
  	var enableCacheElement = false;
  	var enableTransitionTracing = false; // No known bugs, but needs performance testing

  	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
  	// stuff. Intended to enable React core members to more easily debug scheduling
  	// issues in DEV builds.

  	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

  	var REACT_MODULE_REFERENCE;

  	{
  	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
  	}

  	function isValidElementType(type) {
  	  if (typeof type === 'string' || typeof type === 'function') {
  	    return true;
  	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
  	    return true;
  	  }

  	  if (typeof type === 'object' && type !== null) {
  	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
  	    // types supported by any Flight configuration anywhere since
  	    // we don't know which Flight build this will end up being used
  	    // with.
  	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
  	      return true;
  	    }
  	  }

  	  return false;
  	}

  	function getWrappedName(outerType, innerType, wrapperName) {
  	  var displayName = outerType.displayName;

  	  if (displayName) {
  	    return displayName;
  	  }

  	  var functionName = innerType.displayName || innerType.name || '';
  	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
  	} // Keep in sync with react-reconciler/getComponentNameFromFiber


  	function getContextName(type) {
  	  return type.displayName || 'Context';
  	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


  	function getComponentNameFromType(type) {
  	  if (type == null) {
  	    // Host root, text node or just invalid type.
  	    return null;
  	  }

  	  {
  	    if (typeof type.tag === 'number') {
  	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
  	    }
  	  }

  	  if (typeof type === 'function') {
  	    return type.displayName || type.name || null;
  	  }

  	  if (typeof type === 'string') {
  	    return type;
  	  }

  	  switch (type) {
  	    case REACT_FRAGMENT_TYPE:
  	      return 'Fragment';

  	    case REACT_PORTAL_TYPE:
  	      return 'Portal';

  	    case REACT_PROFILER_TYPE:
  	      return 'Profiler';

  	    case REACT_STRICT_MODE_TYPE:
  	      return 'StrictMode';

  	    case REACT_SUSPENSE_TYPE:
  	      return 'Suspense';

  	    case REACT_SUSPENSE_LIST_TYPE:
  	      return 'SuspenseList';

  	  }

  	  if (typeof type === 'object') {
  	    switch (type.$$typeof) {
  	      case REACT_CONTEXT_TYPE:
  	        var context = type;
  	        return getContextName(context) + '.Consumer';

  	      case REACT_PROVIDER_TYPE:
  	        var provider = type;
  	        return getContextName(provider._context) + '.Provider';

  	      case REACT_FORWARD_REF_TYPE:
  	        return getWrappedName(type, type.render, 'ForwardRef');

  	      case REACT_MEMO_TYPE:
  	        var outerName = type.displayName || null;

  	        if (outerName !== null) {
  	          return outerName;
  	        }

  	        return getComponentNameFromType(type.type) || 'Memo';

  	      case REACT_LAZY_TYPE:
  	        {
  	          var lazyComponent = type;
  	          var payload = lazyComponent._payload;
  	          var init = lazyComponent._init;

  	          try {
  	            return getComponentNameFromType(init(payload));
  	          } catch (x) {
  	            return null;
  	          }
  	        }

  	      // eslint-disable-next-line no-fallthrough
  	    }
  	  }

  	  return null;
  	}

  	var assign = Object.assign;

  	// Helpers to patch console.logs to avoid logging during side-effect free
  	// replaying on render function. This currently only patches the object
  	// lazily which won't cover if the log function was extracted eagerly.
  	// We could also eagerly patch the method.
  	var disabledDepth = 0;
  	var prevLog;
  	var prevInfo;
  	var prevWarn;
  	var prevError;
  	var prevGroup;
  	var prevGroupCollapsed;
  	var prevGroupEnd;

  	function disabledLog() {}

  	disabledLog.__reactDisabledLog = true;
  	function disableLogs() {
  	  {
  	    if (disabledDepth === 0) {
  	      /* eslint-disable react-internal/no-production-logging */
  	      prevLog = console.log;
  	      prevInfo = console.info;
  	      prevWarn = console.warn;
  	      prevError = console.error;
  	      prevGroup = console.group;
  	      prevGroupCollapsed = console.groupCollapsed;
  	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

  	      var props = {
  	        configurable: true,
  	        enumerable: true,
  	        value: disabledLog,
  	        writable: true
  	      }; // $FlowFixMe Flow thinks console is immutable.

  	      Object.defineProperties(console, {
  	        info: props,
  	        log: props,
  	        warn: props,
  	        error: props,
  	        group: props,
  	        groupCollapsed: props,
  	        groupEnd: props
  	      });
  	      /* eslint-enable react-internal/no-production-logging */
  	    }

  	    disabledDepth++;
  	  }
  	}
  	function reenableLogs() {
  	  {
  	    disabledDepth--;

  	    if (disabledDepth === 0) {
  	      /* eslint-disable react-internal/no-production-logging */
  	      var props = {
  	        configurable: true,
  	        enumerable: true,
  	        writable: true
  	      }; // $FlowFixMe Flow thinks console is immutable.

  	      Object.defineProperties(console, {
  	        log: assign({}, props, {
  	          value: prevLog
  	        }),
  	        info: assign({}, props, {
  	          value: prevInfo
  	        }),
  	        warn: assign({}, props, {
  	          value: prevWarn
  	        }),
  	        error: assign({}, props, {
  	          value: prevError
  	        }),
  	        group: assign({}, props, {
  	          value: prevGroup
  	        }),
  	        groupCollapsed: assign({}, props, {
  	          value: prevGroupCollapsed
  	        }),
  	        groupEnd: assign({}, props, {
  	          value: prevGroupEnd
  	        })
  	      });
  	      /* eslint-enable react-internal/no-production-logging */
  	    }

  	    if (disabledDepth < 0) {
  	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
  	    }
  	  }
  	}

  	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
  	var prefix;
  	function describeBuiltInComponentFrame(name, source, ownerFn) {
  	  {
  	    if (prefix === undefined) {
  	      // Extract the VM specific prefix used by each line.
  	      try {
  	        throw Error();
  	      } catch (x) {
  	        var match = x.stack.trim().match(/\n( *(at )?)/);
  	        prefix = match && match[1] || '';
  	      }
  	    } // We use the prefix to ensure our stacks line up with native stack frames.


  	    return '\n' + prefix + name;
  	  }
  	}
  	var reentry = false;
  	var componentFrameCache;

  	{
  	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  	  componentFrameCache = new PossiblyWeakMap();
  	}

  	function describeNativeComponentFrame(fn, construct) {
  	  // If something asked for a stack inside a fake render, it should get ignored.
  	  if ( !fn || reentry) {
  	    return '';
  	  }

  	  {
  	    var frame = componentFrameCache.get(fn);

  	    if (frame !== undefined) {
  	      return frame;
  	    }
  	  }

  	  var control;
  	  reentry = true;
  	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  	  Error.prepareStackTrace = undefined;
  	  var previousDispatcher;

  	  {
  	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
  	    // for warnings.

  	    ReactCurrentDispatcher.current = null;
  	    disableLogs();
  	  }

  	  try {
  	    // This should throw.
  	    if (construct) {
  	      // Something should be setting the props in the constructor.
  	      var Fake = function () {
  	        throw Error();
  	      }; // $FlowFixMe


  	      Object.defineProperty(Fake.prototype, 'props', {
  	        set: function () {
  	          // We use a throwing setter instead of frozen or non-writable props
  	          // because that won't throw in a non-strict mode function.
  	          throw Error();
  	        }
  	      });

  	      if (typeof Reflect === 'object' && Reflect.construct) {
  	        // We construct a different control for this case to include any extra
  	        // frames added by the construct call.
  	        try {
  	          Reflect.construct(Fake, []);
  	        } catch (x) {
  	          control = x;
  	        }

  	        Reflect.construct(fn, [], Fake);
  	      } else {
  	        try {
  	          Fake.call();
  	        } catch (x) {
  	          control = x;
  	        }

  	        fn.call(Fake.prototype);
  	      }
  	    } else {
  	      try {
  	        throw Error();
  	      } catch (x) {
  	        control = x;
  	      }

  	      fn();
  	    }
  	  } catch (sample) {
  	    // This is inlined manually because closure doesn't do it for us.
  	    if (sample && control && typeof sample.stack === 'string') {
  	      // This extracts the first frame from the sample that isn't also in the control.
  	      // Skipping one frame that we assume is the frame that calls the two.
  	      var sampleLines = sample.stack.split('\n');
  	      var controlLines = control.stack.split('\n');
  	      var s = sampleLines.length - 1;
  	      var c = controlLines.length - 1;

  	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
  	        // We expect at least one stack frame to be shared.
  	        // Typically this will be the root most one. However, stack frames may be
  	        // cut off due to maximum stack limits. In this case, one maybe cut off
  	        // earlier than the other. We assume that the sample is longer or the same
  	        // and there for cut off earlier. So we should find the root most frame in
  	        // the sample somewhere in the control.
  	        c--;
  	      }

  	      for (; s >= 1 && c >= 0; s--, c--) {
  	        // Next we find the first one that isn't the same which should be the
  	        // frame that called our sample function and the control.
  	        if (sampleLines[s] !== controlLines[c]) {
  	          // In V8, the first line is describing the message but other VMs don't.
  	          // If we're about to return the first line, and the control is also on the same
  	          // line, that's a pretty good indicator that our sample threw at same line as
  	          // the control. I.e. before we entered the sample frame. So we ignore this result.
  	          // This can happen if you passed a class to function component, or non-function.
  	          if (s !== 1 || c !== 1) {
  	            do {
  	              s--;
  	              c--; // We may still have similar intermediate frames from the construct call.
  	              // The next one that isn't the same should be our match though.

  	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
  	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
  	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
  	                // but we have a user-provided "displayName"
  	                // splice it in to make the stack more readable.


  	                if (fn.displayName && _frame.includes('<anonymous>')) {
  	                  _frame = _frame.replace('<anonymous>', fn.displayName);
  	                }

  	                {
  	                  if (typeof fn === 'function') {
  	                    componentFrameCache.set(fn, _frame);
  	                  }
  	                } // Return the line we found.


  	                return _frame;
  	              }
  	            } while (s >= 1 && c >= 0);
  	          }

  	          break;
  	        }
  	      }
  	    }
  	  } finally {
  	    reentry = false;

  	    {
  	      ReactCurrentDispatcher.current = previousDispatcher;
  	      reenableLogs();
  	    }

  	    Error.prepareStackTrace = previousPrepareStackTrace;
  	  } // Fallback to just using the name if we couldn't make it throw.


  	  var name = fn ? fn.displayName || fn.name : '';
  	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  	  {
  	    if (typeof fn === 'function') {
  	      componentFrameCache.set(fn, syntheticFrame);
  	    }
  	  }

  	  return syntheticFrame;
  	}
  	function describeFunctionComponentFrame(fn, source, ownerFn) {
  	  {
  	    return describeNativeComponentFrame(fn, false);
  	  }
  	}

  	function shouldConstruct(Component) {
  	  var prototype = Component.prototype;
  	  return !!(prototype && prototype.isReactComponent);
  	}

  	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  	  if (type == null) {
  	    return '';
  	  }

  	  if (typeof type === 'function') {
  	    {
  	      return describeNativeComponentFrame(type, shouldConstruct(type));
  	    }
  	  }

  	  if (typeof type === 'string') {
  	    return describeBuiltInComponentFrame(type);
  	  }

  	  switch (type) {
  	    case REACT_SUSPENSE_TYPE:
  	      return describeBuiltInComponentFrame('Suspense');

  	    case REACT_SUSPENSE_LIST_TYPE:
  	      return describeBuiltInComponentFrame('SuspenseList');
  	  }

  	  if (typeof type === 'object') {
  	    switch (type.$$typeof) {
  	      case REACT_FORWARD_REF_TYPE:
  	        return describeFunctionComponentFrame(type.render);

  	      case REACT_MEMO_TYPE:
  	        // Memo may contain any component type so we recursively resolve it.
  	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

  	      case REACT_LAZY_TYPE:
  	        {
  	          var lazyComponent = type;
  	          var payload = lazyComponent._payload;
  	          var init = lazyComponent._init;

  	          try {
  	            // Lazy may contain any component type so we recursively resolve it.
  	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
  	          } catch (x) {}
  	        }
  	    }
  	  }

  	  return '';
  	}

  	var hasOwnProperty = Object.prototype.hasOwnProperty;

  	var loggedTypeFailures = {};
  	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  	function setCurrentlyValidatingElement(element) {
  	  {
  	    if (element) {
  	      var owner = element._owner;
  	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
  	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
  	    } else {
  	      ReactDebugCurrentFrame.setExtraStackFrame(null);
  	    }
  	  }
  	}

  	function checkPropTypes(typeSpecs, values, location, componentName, element) {
  	  {
  	    // $FlowFixMe This is okay but Flow doesn't know it.
  	    var has = Function.call.bind(hasOwnProperty);

  	    for (var typeSpecName in typeSpecs) {
  	      if (has(typeSpecs, typeSpecName)) {
  	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
  	        // fail the render phase where it didn't fail before. So we log it.
  	        // After these have been cleaned up, we'll let them throw.

  	        try {
  	          // This is intentionally an invariant that gets caught. It's the same
  	          // behavior as without this statement except with a better message.
  	          if (typeof typeSpecs[typeSpecName] !== 'function') {
  	            // eslint-disable-next-line react-internal/prod-error-codes
  	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
  	            err.name = 'Invariant Violation';
  	            throw err;
  	          }

  	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
  	        } catch (ex) {
  	          error$1 = ex;
  	        }

  	        if (error$1 && !(error$1 instanceof Error)) {
  	          setCurrentlyValidatingElement(element);

  	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

  	          setCurrentlyValidatingElement(null);
  	        }

  	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
  	          // Only monitor this failure once because there tends to be a lot of the
  	          // same error.
  	          loggedTypeFailures[error$1.message] = true;
  	          setCurrentlyValidatingElement(element);

  	          error('Failed %s type: %s', location, error$1.message);

  	          setCurrentlyValidatingElement(null);
  	        }
  	      }
  	    }
  	  }
  	}

  	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

  	function isArray(a) {
  	  return isArrayImpl(a);
  	}

  	/*
  	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
  	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
  	 *
  	 * The functions in this module will throw an easier-to-understand,
  	 * easier-to-debug exception with a clear errors message message explaining the
  	 * problem. (Instead of a confusing exception thrown inside the implementation
  	 * of the `value` object).
  	 */
  	// $FlowFixMe only called in DEV, so void return is not possible.
  	function typeName(value) {
  	  {
  	    // toStringTag is needed for namespaced types like Temporal.Instant
  	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
  	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
  	    return type;
  	  }
  	} // $FlowFixMe only called in DEV, so void return is not possible.


  	function willCoercionThrow(value) {
  	  {
  	    try {
  	      testStringCoercion(value);
  	      return false;
  	    } catch (e) {
  	      return true;
  	    }
  	  }
  	}

  	function testStringCoercion(value) {
  	  // If you ended up here by following an exception call stack, here's what's
  	  // happened: you supplied an object or symbol value to React (as a prop, key,
  	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  	  // coerce it to a string using `'' + value`, an exception was thrown.
  	  //
  	  // The most common types that will cause this exception are `Symbol` instances
  	  // and Temporal objects like `Temporal.Instant`. But any object that has a
  	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  	  // exception. (Library authors do this to prevent users from using built-in
  	  // numeric operators like `+` or comparison operators like `>=` because custom
  	  // methods are needed to perform accurate arithmetic or comparison.)
  	  //
  	  // To fix the problem, coerce this object or symbol value to a string before
  	  // passing it to React. The most reliable way is usually `String(value)`.
  	  //
  	  // To find which value is throwing, check the browser or debugger console.
  	  // Before this exception was thrown, there should be `console.error` output
  	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  	  // problem and how that type was used: key, atrribute, input value prop, etc.
  	  // In most cases, this console output also shows the component and its
  	  // ancestor components where the exception happened.
  	  //
  	  // eslint-disable-next-line react-internal/safe-string-coercion
  	  return '' + value;
  	}
  	function checkKeyStringCoercion(value) {
  	  {
  	    if (willCoercionThrow(value)) {
  	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

  	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
  	    }
  	  }
  	}

  	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
  	var RESERVED_PROPS = {
  	  key: true,
  	  ref: true,
  	  __self: true,
  	  __source: true
  	};
  	var specialPropKeyWarningShown;
  	var specialPropRefWarningShown;
  	var didWarnAboutStringRefs;

  	{
  	  didWarnAboutStringRefs = {};
  	}

  	function hasValidRef(config) {
  	  {
  	    if (hasOwnProperty.call(config, 'ref')) {
  	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

  	      if (getter && getter.isReactWarning) {
  	        return false;
  	      }
  	    }
  	  }

  	  return config.ref !== undefined;
  	}

  	function hasValidKey(config) {
  	  {
  	    if (hasOwnProperty.call(config, 'key')) {
  	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

  	      if (getter && getter.isReactWarning) {
  	        return false;
  	      }
  	    }
  	  }

  	  return config.key !== undefined;
  	}

  	function warnIfStringRefCannotBeAutoConverted(config, self) {
  	  {
  	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
  	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

  	      if (!didWarnAboutStringRefs[componentName]) {
  	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

  	        didWarnAboutStringRefs[componentName] = true;
  	      }
  	    }
  	  }
  	}

  	function defineKeyPropWarningGetter(props, displayName) {
  	  {
  	    var warnAboutAccessingKey = function () {
  	      if (!specialPropKeyWarningShown) {
  	        specialPropKeyWarningShown = true;

  	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
  	      }
  	    };

  	    warnAboutAccessingKey.isReactWarning = true;
  	    Object.defineProperty(props, 'key', {
  	      get: warnAboutAccessingKey,
  	      configurable: true
  	    });
  	  }
  	}

  	function defineRefPropWarningGetter(props, displayName) {
  	  {
  	    var warnAboutAccessingRef = function () {
  	      if (!specialPropRefWarningShown) {
  	        specialPropRefWarningShown = true;

  	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
  	      }
  	    };

  	    warnAboutAccessingRef.isReactWarning = true;
  	    Object.defineProperty(props, 'ref', {
  	      get: warnAboutAccessingRef,
  	      configurable: true
  	    });
  	  }
  	}
  	/**
  	 * Factory method to create a new React element. This no longer adheres to
  	 * the class pattern, so do not use new to call it. Also, instanceof check
  	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
  	 * if something is a React Element.
  	 *
  	 * @param {*} type
  	 * @param {*} props
  	 * @param {*} key
  	 * @param {string|object} ref
  	 * @param {*} owner
  	 * @param {*} self A *temporary* helper to detect places where `this` is
  	 * different from the `owner` when React.createElement is called, so that we
  	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
  	 * functions, and as long as `this` and owner are the same, there will be no
  	 * change in behavior.
  	 * @param {*} source An annotation object (added by a transpiler or otherwise)
  	 * indicating filename, line number, and/or other information.
  	 * @internal
  	 */


  	var ReactElement = function (type, key, ref, self, source, owner, props) {
  	  var element = {
  	    // This tag allows us to uniquely identify this as a React Element
  	    $$typeof: REACT_ELEMENT_TYPE,
  	    // Built-in properties that belong on the element
  	    type: type,
  	    key: key,
  	    ref: ref,
  	    props: props,
  	    // Record the component responsible for creating this element.
  	    _owner: owner
  	  };

  	  {
  	    // The validation flag is currently mutative. We put it on
  	    // an external backing store so that we can freeze the whole object.
  	    // This can be replaced with a WeakMap once they are implemented in
  	    // commonly used development environments.
  	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
  	    // the validation flag non-enumerable (where possible, which should
  	    // include every environment we run tests in), so the test framework
  	    // ignores it.

  	    Object.defineProperty(element._store, 'validated', {
  	      configurable: false,
  	      enumerable: false,
  	      writable: true,
  	      value: false
  	    }); // self and source are DEV only properties.

  	    Object.defineProperty(element, '_self', {
  	      configurable: false,
  	      enumerable: false,
  	      writable: false,
  	      value: self
  	    }); // Two elements created in two different places should be considered
  	    // equal for testing purposes and therefore we hide it from enumeration.

  	    Object.defineProperty(element, '_source', {
  	      configurable: false,
  	      enumerable: false,
  	      writable: false,
  	      value: source
  	    });

  	    if (Object.freeze) {
  	      Object.freeze(element.props);
  	      Object.freeze(element);
  	    }
  	  }

  	  return element;
  	};
  	/**
  	 * https://github.com/reactjs/rfcs/pull/107
  	 * @param {*} type
  	 * @param {object} props
  	 * @param {string} key
  	 */

  	function jsxDEV(type, config, maybeKey, source, self) {
  	  {
  	    var propName; // Reserved names are extracted

  	    var props = {};
  	    var key = null;
  	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
  	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
  	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
  	    // but as an intermediary step, we will use jsxDEV for everything except
  	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
  	    // key is explicitly declared to be undefined or not.

  	    if (maybeKey !== undefined) {
  	      {
  	        checkKeyStringCoercion(maybeKey);
  	      }

  	      key = '' + maybeKey;
  	    }

  	    if (hasValidKey(config)) {
  	      {
  	        checkKeyStringCoercion(config.key);
  	      }

  	      key = '' + config.key;
  	    }

  	    if (hasValidRef(config)) {
  	      ref = config.ref;
  	      warnIfStringRefCannotBeAutoConverted(config, self);
  	    } // Remaining properties are added to a new props object


  	    for (propName in config) {
  	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
  	        props[propName] = config[propName];
  	      }
  	    } // Resolve default props


  	    if (type && type.defaultProps) {
  	      var defaultProps = type.defaultProps;

  	      for (propName in defaultProps) {
  	        if (props[propName] === undefined) {
  	          props[propName] = defaultProps[propName];
  	        }
  	      }
  	    }

  	    if (key || ref) {
  	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

  	      if (key) {
  	        defineKeyPropWarningGetter(props, displayName);
  	      }

  	      if (ref) {
  	        defineRefPropWarningGetter(props, displayName);
  	      }
  	    }

  	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  	  }
  	}

  	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
  	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  	function setCurrentlyValidatingElement$1(element) {
  	  {
  	    if (element) {
  	      var owner = element._owner;
  	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
  	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
  	    } else {
  	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
  	    }
  	  }
  	}

  	var propTypesMisspellWarningShown;

  	{
  	  propTypesMisspellWarningShown = false;
  	}
  	/**
  	 * Verifies the object is a ReactElement.
  	 * See https://reactjs.org/docs/react-api.html#isvalidelement
  	 * @param {?object} object
  	 * @return {boolean} True if `object` is a ReactElement.
  	 * @final
  	 */


  	function isValidElement(object) {
  	  {
  	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	  }
  	}

  	function getDeclarationErrorAddendum() {
  	  {
  	    if (ReactCurrentOwner$1.current) {
  	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

  	      if (name) {
  	        return '\n\nCheck the render method of `' + name + '`.';
  	      }
  	    }

  	    return '';
  	  }
  	}

  	function getSourceInfoErrorAddendum(source) {
  	  {

  	    return '';
  	  }
  	}
  	/**
  	 * Warn if there's no key explicitly set on dynamic arrays of children or
  	 * object keys are not valid. This allows us to keep track of children between
  	 * updates.
  	 */


  	var ownerHasKeyUseWarning = {};

  	function getCurrentComponentErrorInfo(parentType) {
  	  {
  	    var info = getDeclarationErrorAddendum();

  	    if (!info) {
  	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

  	      if (parentName) {
  	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
  	      }
  	    }

  	    return info;
  	  }
  	}
  	/**
  	 * Warn if the element doesn't have an explicit key assigned to it.
  	 * This element is in an array. The array could grow and shrink or be
  	 * reordered. All children that haven't already been validated are required to
  	 * have a "key" property assigned to it. Error statuses are cached so a warning
  	 * will only be shown once.
  	 *
  	 * @internal
  	 * @param {ReactElement} element Element that requires a key.
  	 * @param {*} parentType element's parent's type.
  	 */


  	function validateExplicitKey(element, parentType) {
  	  {
  	    if (!element._store || element._store.validated || element.key != null) {
  	      return;
  	    }

  	    element._store.validated = true;
  	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
  	      return;
  	    }

  	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  	    // property, it may be the creator of the child that's responsible for
  	    // assigning it a key.

  	    var childOwner = '';

  	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
  	      // Give the component that originally created this child.
  	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  	    }

  	    setCurrentlyValidatingElement$1(element);

  	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

  	    setCurrentlyValidatingElement$1(null);
  	  }
  	}
  	/**
  	 * Ensure that every element either is passed in a static location, in an
  	 * array with an explicit keys property defined, or in an object literal
  	 * with valid key property.
  	 *
  	 * @internal
  	 * @param {ReactNode} node Statically passed child of any type.
  	 * @param {*} parentType node's parent's type.
  	 */


  	function validateChildKeys(node, parentType) {
  	  {
  	    if (typeof node !== 'object') {
  	      return;
  	    }

  	    if (isArray(node)) {
  	      for (var i = 0; i < node.length; i++) {
  	        var child = node[i];

  	        if (isValidElement(child)) {
  	          validateExplicitKey(child, parentType);
  	        }
  	      }
  	    } else if (isValidElement(node)) {
  	      // This element was passed in a valid location.
  	      if (node._store) {
  	        node._store.validated = true;
  	      }
  	    } else if (node) {
  	      var iteratorFn = getIteratorFn(node);

  	      if (typeof iteratorFn === 'function') {
  	        // Entry iterators used to provide implicit keys,
  	        // but now we print a separate warning for them later.
  	        if (iteratorFn !== node.entries) {
  	          var iterator = iteratorFn.call(node);
  	          var step;

  	          while (!(step = iterator.next()).done) {
  	            if (isValidElement(step.value)) {
  	              validateExplicitKey(step.value, parentType);
  	            }
  	          }
  	        }
  	      }
  	    }
  	  }
  	}
  	/**
  	 * Given an element, validate that its props follow the propTypes definition,
  	 * provided by the type.
  	 *
  	 * @param {ReactElement} element
  	 */


  	function validatePropTypes(element) {
  	  {
  	    var type = element.type;

  	    if (type === null || type === undefined || typeof type === 'string') {
  	      return;
  	    }

  	    var propTypes;

  	    if (typeof type === 'function') {
  	      propTypes = type.propTypes;
  	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
  	    // Inner props are checked in the reconciler.
  	    type.$$typeof === REACT_MEMO_TYPE)) {
  	      propTypes = type.propTypes;
  	    } else {
  	      return;
  	    }

  	    if (propTypes) {
  	      // Intentionally inside to avoid triggering lazy initializers:
  	      var name = getComponentNameFromType(type);
  	      checkPropTypes(propTypes, element.props, 'prop', name, element);
  	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
  	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

  	      var _name = getComponentNameFromType(type);

  	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
  	    }

  	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
  	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  	    }
  	  }
  	}
  	/**
  	 * Given a fragment, validate that it can only be provided with fragment props
  	 * @param {ReactElement} fragment
  	 */


  	function validateFragmentProps(fragment) {
  	  {
  	    var keys = Object.keys(fragment.props);

  	    for (var i = 0; i < keys.length; i++) {
  	      var key = keys[i];

  	      if (key !== 'children' && key !== 'key') {
  	        setCurrentlyValidatingElement$1(fragment);

  	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

  	        setCurrentlyValidatingElement$1(null);
  	        break;
  	      }
  	    }

  	    if (fragment.ref !== null) {
  	      setCurrentlyValidatingElement$1(fragment);

  	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

  	      setCurrentlyValidatingElement$1(null);
  	    }
  	  }
  	}

  	var didWarnAboutKeySpread = {};
  	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  	  {
  	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  	    // succeed and there will likely be errors in render.

  	    if (!validType) {
  	      var info = '';

  	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
  	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
  	      }

  	      var sourceInfo = getSourceInfoErrorAddendum();

  	      if (sourceInfo) {
  	        info += sourceInfo;
  	      } else {
  	        info += getDeclarationErrorAddendum();
  	      }

  	      var typeString;

  	      if (type === null) {
  	        typeString = 'null';
  	      } else if (isArray(type)) {
  	        typeString = 'array';
  	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
  	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
  	        info = ' Did you accidentally export a JSX literal instead of a component?';
  	      } else {
  	        typeString = typeof type;
  	      }

  	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  	    }

  	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
  	    // TODO: Drop this when these are no longer allowed as the type argument.

  	    if (element == null) {
  	      return element;
  	    } // Skip key warning if the type isn't valid since our key validation logic
  	    // doesn't expect a non-string/function type and can throw confusing errors.
  	    // We don't want exception behavior to differ between dev and prod.
  	    // (Rendering will throw with a helpful message and as soon as the type is
  	    // fixed, the key warnings will appear.)


  	    if (validType) {
  	      var children = props.children;

  	      if (children !== undefined) {
  	        if (isStaticChildren) {
  	          if (isArray(children)) {
  	            for (var i = 0; i < children.length; i++) {
  	              validateChildKeys(children[i], type);
  	            }

  	            if (Object.freeze) {
  	              Object.freeze(children);
  	            }
  	          } else {
  	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
  	          }
  	        } else {
  	          validateChildKeys(children, type);
  	        }
  	      }
  	    }

  	    {
  	      if (hasOwnProperty.call(props, 'key')) {
  	        var componentName = getComponentNameFromType(type);
  	        var keys = Object.keys(props).filter(function (k) {
  	          return k !== 'key';
  	        });
  	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

  	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
  	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

  	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

  	          didWarnAboutKeySpread[componentName + beforeExample] = true;
  	        }
  	      }
  	    }

  	    if (type === REACT_FRAGMENT_TYPE) {
  	      validateFragmentProps(element);
  	    } else {
  	      validatePropTypes(element);
  	    }

  	    return element;
  	  }
  	} // These two functions exist to still get child warnings in dev
  	// even with the prod transform. This means that jsxDEV is purely
  	// opt-in behavior for better messages but that we won't stop
  	// giving you warnings if you use production apis.

  	function jsxWithValidationStatic(type, props, key) {
  	  {
  	    return jsxWithValidation(type, props, key, true);
  	  }
  	}
  	function jsxWithValidationDynamic(type, props, key) {
  	  {
  	    return jsxWithValidation(type, props, key, false);
  	  }
  	}

  	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
  	// for now we can ship identical prod functions

  	var jsxs =  jsxWithValidationStatic ;

  	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
  	reactJsxRuntime_development.jsx = jsx;
  	reactJsxRuntime_development.jsxs = jsxs;
  	  })();
  	}
  	return reactJsxRuntime_development;
  }

  var hasRequiredJsxRuntime;

  function requireJsxRuntime () {
  	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  	hasRequiredJsxRuntime = 1;

  	if (process.env.NODE_ENV === 'production') {
  	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
  	} else {
  	  jsxRuntime.exports = requireReactJsxRuntime_development();
  	}
  	return jsxRuntime.exports;
  }

  var jsxRuntimeExports = requireJsxRuntime();

  var css_248z = ":import(\"../../../styles.module.css\"){i__imported_textSmall_0:textSmall}.Button-module_base__CDlYu{background-color:var(--btn-color);border:2px solid var(--btn-color);border-radius:var(--radius-sm)}.Button-module_default__B838g{--btn-color:var(--color-default)}.Button-module_primary__S1QuK{--btn-color:var(--color-primary)}.Button-module_secondary__3FC-5{--btn-color:var(--color-secondary)}.Button-module_success__nigIj{--btn-color:var(--color-success)}.Button-module_warning__nb-PH{--btn-color:var(--color-warning)}.Button-module_error__y6dgV{--btn-color:var(--color-error)}";
  var styles = {"base":"Button-module_base__CDlYu i__imported_textSmall_0","default":"Button-module_default__B838g","primary":"Button-module_primary__S1QuK","secondary":"Button-module_secondary__3FC-5","success":"Button-module_success__nigIj","warning":"Button-module_warning__nb-PH","error":"Button-module_error__y6dgV"};
  styleInject(css_248z);

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? ($670gB$react).useLayoutEffect : ()=>{};

  /*
   * Copyright 2023 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 

  function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
      const ref = ($670gB$react.useRef)(null);
      ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
          ref.current = fn;
      }, [
          fn
      ]);
      // @ts-ignore
      return ($670gB$react.useCallback)((...args)=>{
          const f = ref.current;
          return f === null || f === void 0 ? void 0 : f(...args);
      }, []);
  }

  let $bdb11010cef70236$var$idsUpdaterMap = new Map();
  function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
      if (idA === idB) return idA;
      let setIdsA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
      if (setIdsA) {
          setIdsA.forEach((fn)=>fn(idB));
          return idB;
      }
      let setIdsB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
      if (setIdsB) {
          setIdsB.forEach((fn)=>fn(idA));
          return idA;
      }
      return idB;
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ /**
   * Calls all functions in the order they were chained with the same arguments.
   */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
      return (...args)=>{
          for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
      };
  }

  const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
      var _el_ownerDocument;
      return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
  };
  const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
      if (el && 'window' in el && el.window === el) return el;
      const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
      return doc.defaultView || window;
  };

  function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 


  function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
      // Start with a base clone of the first argument. This is a lot faster than starting
      // with an empty object and adding properties as we go.
      let result = {
          ...args[0]
      };
      for(let i = 1; i < args.length; i++){
          let props = args[i];
          for(let key in props){
              let a = result[key];
              let b = props[key];
              // Chain events
              if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
              key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = ($ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
              else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (clsx)(a, b);
              else if (key === 'id' && a && b) result.id = ($bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
              else result[key] = b !== undefined ? b : a;
          }
      }
      return result;
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
      'id'
  ]);
  const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
      'aria-label',
      'aria-labelledby',
      'aria-describedby',
      'aria-details'
  ]);
  // See LinkDOMProps in dom.d.ts.
  const $65484d02dcb7eb3e$var$linkPropNames = new Set([
      'href',
      'hrefLang',
      'target',
      'rel',
      'download',
      'ping',
      'referrerPolicy'
  ]);
  const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
  function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
      let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
      let filteredProps = {};
      for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
      return filteredProps;
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
      if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
          preventScroll: true
      });
      else {
          let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
          element.focus();
          $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
      }
  }
  let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
  function $7215afc6de606d6b$var$supportsPreventScroll() {
      if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
          $7215afc6de606d6b$var$supportsPreventScrollCached = false;
          try {
              let focusElem = document.createElement('div');
              focusElem.focus({
                  get preventScroll () {
                      $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                      return true;
                  }
              });
          } catch (e) {
          // Ignore
          }
      }
      return $7215afc6de606d6b$var$supportsPreventScrollCached;
  }
  function $7215afc6de606d6b$var$getScrollableElements(element) {
      let parent = element.parentNode;
      let scrollableElements = [];
      let rootScrollingElement = document.scrollingElement || document.documentElement;
      while(parent instanceof HTMLElement && parent !== rootScrollingElement){
          if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
              element: parent,
              scrollTop: parent.scrollTop,
              scrollLeft: parent.scrollLeft
          });
          parent = parent.parentNode;
      }
      if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
          element: rootScrollingElement,
          scrollTop: rootScrollingElement.scrollTop,
          scrollLeft: rootScrollingElement.scrollLeft
      });
      return scrollableElements;
  }
  function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
      for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
          element.scrollTop = scrollTop;
          element.scrollLeft = scrollLeft;
      }
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ function $c87311424ea30a05$var$testUserAgent(re) {
      var _window_navigator_userAgentData;
      if (typeof window === 'undefined' || window.navigator == null) return false;
      return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
  }
  function $c87311424ea30a05$var$testPlatform(re) {
      var _window_navigator_userAgentData;
      return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
  }
  function $c87311424ea30a05$var$cached(fn) {
      let res = null;
      return ()=>{
          if (res == null) res = fn();
          return res;
      };
  }
  const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testPlatform(/^Mac/i);
  });
  const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
  });
  const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
      $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
  });
  const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
  });
  const $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
  });
  const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
  });
  const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testUserAgent(/Android/i);
  });
  const $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
      return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
  });

  function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
      var _window_event_type, _window_event;
      let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
      // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
      // will prevent links with target="_blank" from opening. However, it does allow the event if the
      // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
      // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
      if (($c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
          if (($c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
          else ctrlKey = true;
      }
      // WebKit does not support firing click events with modifier keys, but does support keyboard events.
      // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
      let event = ($c87311424ea30a05$export$78551043582a6a98)() && ($c87311424ea30a05$export$9ac100e40613ea10)() && !($c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent('keydown', {
          keyIdentifier: 'Enter',
          metaKey: metaKey,
          ctrlKey: ctrlKey,
          altKey: altKey,
          shiftKey: shiftKey
      }) : new MouseEvent('click', {
          metaKey: metaKey,
          ctrlKey: ctrlKey,
          altKey: altKey,
          shiftKey: shiftKey,
          bubbles: true,
          cancelable: true
      });
      $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
      ($7215afc6de606d6b$export$de79e2c695e052f3)(target);
      target.dispatchEvent(event);
      $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
  }
  // https://github.com/parcel-bundler/parcel/issues/8724
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ // We store a global list of elements that are currently transitioning,
  // mapped to a set of CSS properties that are transitioning for that element.
  // This is necessary rather than a simple count of transitions because of browser
  // bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
  // than one or the other. So we need to track what's actually transitioning so that
  // we can ignore these duplicate events.
  let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
  // A list of callbacks to call once there are no transitioning elements.
  let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
  function $bbed8b41f857bcc0$var$setupGlobalEvents() {
      if (typeof window === 'undefined') return;
      function isTransitionEvent(event) {
          return 'propertyName' in event;
      }
      let onTransitionStart = (e)=>{
          if (!isTransitionEvent(e) || !e.target) return;
          // Add the transitioning property to the list for this element.
          let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
          if (!transitions) {
              transitions = new Set();
              $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
              // The transitioncancel event must be registered on the element itself, rather than as a global
              // event. This enables us to handle when the node is deleted from the document while it is transitioning.
              // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
              e.target.addEventListener('transitioncancel', onTransitionEnd, {
                  once: true
              });
          }
          transitions.add(e.propertyName);
      };
      let onTransitionEnd = (e)=>{
          if (!isTransitionEvent(e) || !e.target) return;
          // Remove property from list of transitioning properties.
          let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
          if (!properties) return;
          properties.delete(e.propertyName);
          // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
          if (properties.size === 0) {
              e.target.removeEventListener('transitioncancel', onTransitionEnd);
              $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
          }
          // If no transitioning elements, call all of the queued callbacks.
          if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
              for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
              $bbed8b41f857bcc0$var$transitionCallbacks.clear();
          }
      };
      document.body.addEventListener('transitionrun', onTransitionStart);
      document.body.addEventListener('transitionend', onTransitionEnd);
  }
  if (typeof document !== 'undefined') {
      if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
      else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
  }
  function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
      // Wait one frame to see if an animation starts, e.g. a transition on mount.
      requestAnimationFrame(()=>{
          // If no transitions are running, call the function immediately.
          // Otherwise, add it to a list of callbacks to run at the end of the animation.
          if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
          else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
      });
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
      let globalListeners = ($670gB$react.useRef)(new Map());
      let addGlobalListener = ($670gB$react.useCallback)((eventTarget, type, listener, options)=>{
          // Make sure we remove the listener after it is called with the `once` option.
          let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
              globalListeners.current.delete(listener);
              listener(...args);
          } : listener;
          globalListeners.current.set(listener, {
              type: type,
              eventTarget: eventTarget,
              fn: fn,
              options: options
          });
          eventTarget.addEventListener(type, listener, options);
      }, []);
      let removeGlobalListener = ($670gB$react.useCallback)((eventTarget, type, listener, options)=>{
          var _globalListeners_current_get;
          let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
          eventTarget.removeEventListener(type, fn, options);
          globalListeners.current.delete(listener);
      }, []);
      let removeAllGlobalListeners = ($670gB$react.useCallback)(()=>{
          globalListeners.current.forEach((value, key)=>{
              removeGlobalListener(value.eventTarget, value.type, key, value.options);
          });
      }, [
          removeGlobalListener
      ]);
      // eslint-disable-next-line arrow-body-style
      ($670gB$react.useEffect)(()=>{
          return removeAllGlobalListeners;
      }, [
          removeAllGlobalListeners
      ]);
      return {
          addGlobalListener: addGlobalListener,
          removeGlobalListener: removeGlobalListener,
          removeAllGlobalListeners: removeAllGlobalListeners
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
      ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
          if (context && context.ref && ref) {
              context.ref.current = ref.current;
              return ()=>{
                  if (context.ref) context.ref.current = null;
              };
          }
      });
  }

  /*
   * Copyright 2022 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  function $6a7db85432448f7f$export$60278871457622de(event) {
      // JAWS/NVDA with Firefox.
      if (event.mozInputSource === 0 && event.isTrusted) return true;
      // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
      // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
      // to detect TalkBack virtual clicks.
      if (($c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
      return event.detail === 0 && !event.pointerType;
  }
  function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
      // If the pointer size is zero, then we assume it's from a screen reader.
      // Android TalkBack double tap will sometimes return a event with width and height of 1
      // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
      // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
      // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
      // Talkback double tap from Windows Firefox touch screen press
      return !($c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  // Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
  // rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
  let $14c0b72509d70225$var$state = 'default';
  let $14c0b72509d70225$var$savedUserSelect = '';
  let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
  function $14c0b72509d70225$export$16a4697467175487(target) {
      if (($c87311424ea30a05$export$fedb369cb70207f1)()) {
          if ($14c0b72509d70225$var$state === 'default') {
              // eslint-disable-next-line no-restricted-globals
              const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(target);
              $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
              documentObject.documentElement.style.webkitUserSelect = 'none';
          }
          $14c0b72509d70225$var$state = 'disabled';
      } else if (target instanceof HTMLElement || target instanceof SVGElement) {
          // If not iOS, store the target's original user-select and change to user-select: none
          // Ignore state since it doesn't apply for non iOS
          $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
          target.style.userSelect = 'none';
      }
  }
  function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
      if (($c87311424ea30a05$export$fedb369cb70207f1)()) {
          // If the state is already default, there's nothing to do.
          // If it is restoring, then there's no need to queue a second restore.
          if ($14c0b72509d70225$var$state !== 'disabled') return;
          $14c0b72509d70225$var$state = 'restoring';
          // There appears to be a delay on iOS where selection still might occur
          // after pointer up, so wait a bit before removing user-select.
          setTimeout(()=>{
              // Wait for any CSS transitions to complete so we don't recompute style
              // for the whole page in the middle of the animation and cause jank.
              ($bbed8b41f857bcc0$export$24490316f764c430)(()=>{
                  // Avoid race conditions
                  if ($14c0b72509d70225$var$state === 'restoring') {
                      // eslint-disable-next-line no-restricted-globals
                      const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(target);
                      if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                      $14c0b72509d70225$var$savedUserSelect = '';
                      $14c0b72509d70225$var$state = 'default';
                  }
              });
          }, 300);
      } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
      // Ignore state since it doesn't apply for non iOS
      {
          if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
              let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
              if (target.style.userSelect === 'none') target.style.userSelect = targetOldUserSelect;
              if (target.getAttribute('style') === '') target.removeAttribute('style');
              $14c0b72509d70225$var$modifiedElementMap.delete(target);
          }
      }
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = ($670gB$react).createContext({
      register: ()=>{}
  });
  $ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';

  function _class_apply_descriptor_get(receiver, descriptor) {
      if (descriptor.get) return descriptor.get.call(receiver);

      return descriptor.value;
  }

  function _class_extract_field_descriptor(receiver, privateMap, action) {
      if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

      return privateMap.get(receiver);
  }

  function _class_private_field_get(receiver, privateMap) {
      var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
      return _class_apply_descriptor_get(receiver, descriptor);
  }

  function _check_private_redeclaration(obj, privateCollection) {
      if (privateCollection.has(obj)) {
          throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
  }

  function _class_private_field_init(obj, privateMap, value) {
      _check_private_redeclaration(obj, privateMap);
      privateMap.set(obj, value);
  }

  function _class_apply_descriptor_set(receiver, descriptor, value) {
      if (descriptor.set) descriptor.set.call(receiver, value);
      else {
          if (!descriptor.writable) {
              // This should only throw in strict mode, but class bodies are
              // always strict and private fields can only be used inside
              // class bodies.
              throw new TypeError("attempted to set read only private field");
          }
          descriptor.value = value;
      }
  }

  function _class_private_field_set(receiver, privateMap, value) {
      var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
      _class_apply_descriptor_set(receiver, descriptor, value);
      return value;
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ // Portions of the code in this file are based on code from react.
  // Original licensing for the following can be found in the
  // NOTICE file in the root directory of this source tree.
  // See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions







  function $f6c31cce2adf654f$var$usePressResponderContext(props) {
      // Consume context from <PressResponder> and merge with props.
      let context = ($670gB$react.useContext)(($ae1eeba8b9eafd08$export$5165eccb35aaadb5));
      if (context) {
          let { register: register, ...contextProps } = context;
          props = ($3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
          register();
      }
      ($e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
      return props;
  }
  var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
  class $f6c31cce2adf654f$var$PressEvent {
      continuePropagation() {
          (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
      }
      get shouldStopPropagation() {
          return (_class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
      }
      constructor(type, pointerType, originalEvent, state){
          (_class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
              writable: true,
              value: void 0
          });
          (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
          var _state_target;
          let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
          const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
          let x, y = 0;
          let clientX, clientY = null;
          if (originalEvent.clientX != null && originalEvent.clientY != null) {
              clientX = originalEvent.clientX;
              clientY = originalEvent.clientY;
          }
          if (rect) {
              if (clientX != null && clientY != null) {
                  x = clientX - rect.left;
                  y = clientY - rect.top;
              } else {
                  x = rect.width / 2;
                  y = rect.height / 2;
              }
          }
          this.type = type;
          this.pointerType = pointerType;
          this.target = originalEvent.currentTarget;
          this.shiftKey = originalEvent.shiftKey;
          this.metaKey = originalEvent.metaKey;
          this.ctrlKey = originalEvent.ctrlKey;
          this.altKey = originalEvent.altKey;
          this.x = x;
          this.y = y;
      }
  }
  const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol('linkClicked');
  function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
      let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ref: _, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
      let [isPressed, setPressed] = ($670gB$react.useState)(false);
      let ref = ($670gB$react.useRef)({
          isPressed: false,
          ignoreEmulatedMouseEvents: false,
          ignoreClickAfterPress: false,
          didFirePressStart: false,
          isTriggeringEvent: false,
          activePointerId: null,
          target: null,
          isOverTarget: false,
          pointerType: null
      });
      let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
      let triggerPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType)=>{
          let state = ref.current;
          if (isDisabled || state.didFirePressStart) return false;
          let shouldStopPropagation = true;
          state.isTriggeringEvent = true;
          if (onPressStart) {
              let event = new $f6c31cce2adf654f$var$PressEvent('pressstart', pointerType, originalEvent);
              onPressStart(event);
              shouldStopPropagation = event.shouldStopPropagation;
          }
          if (onPressChange) onPressChange(true);
          state.isTriggeringEvent = false;
          state.didFirePressStart = true;
          setPressed(true);
          return shouldStopPropagation;
      });
      let triggerPressEnd = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true)=>{
          let state = ref.current;
          if (!state.didFirePressStart) return false;
          state.ignoreClickAfterPress = true;
          state.didFirePressStart = false;
          state.isTriggeringEvent = true;
          let shouldStopPropagation = true;
          if (onPressEnd) {
              let event = new $f6c31cce2adf654f$var$PressEvent('pressend', pointerType, originalEvent);
              onPressEnd(event);
              shouldStopPropagation = event.shouldStopPropagation;
          }
          if (onPressChange) onPressChange(false);
          setPressed(false);
          if (onPress && wasPressed && !isDisabled) {
              let event = new $f6c31cce2adf654f$var$PressEvent('press', pointerType, originalEvent);
              onPress(event);
              shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
          }
          state.isTriggeringEvent = false;
          return shouldStopPropagation;
      });
      let triggerPressUp = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType)=>{
          let state = ref.current;
          if (isDisabled) return false;
          if (onPressUp) {
              state.isTriggeringEvent = true;
              let event = new $f6c31cce2adf654f$var$PressEvent('pressup', pointerType, originalEvent);
              onPressUp(event);
              state.isTriggeringEvent = false;
              return event.shouldStopPropagation;
          }
          return true;
      });
      let cancel = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
          let state = ref.current;
          if (state.isPressed && state.target) {
              if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
              state.isPressed = false;
              state.isOverTarget = false;
              state.activePointerId = null;
              state.pointerType = null;
              removeAllGlobalListeners();
              if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
          }
      });
      let cancelOnPointerExit = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
          if (shouldCancelOnPointerExit) cancel(e);
      });
      let pressProps = ($670gB$react.useMemo)(()=>{
          let state = ref.current;
          let pressProps = {
              onKeyDown (e) {
                  if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                      var _state_metaKeyEvents;
                      if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                      // If the event is repeating, it may have started on a different element
                      // after which focus moved to the current element. Ignore these events and
                      // only handle the first key down event.
                      let shouldStopPropagation = true;
                      if (!state.isPressed && !e.repeat) {
                          state.target = e.currentTarget;
                          state.isPressed = true;
                          shouldStopPropagation = triggerPressStart(e, 'keyboard');
                          // Focus may move before the key up event, so register the event on the document
                          // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                          // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                          let originalTarget = e.currentTarget;
                          let pressUp = (e)=>{
                              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && originalTarget.contains(e.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
                          };
                          addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'keyup', ($ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
                      }
                      if (shouldStopPropagation) e.stopPropagation();
                      // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                      // macOS has a bug where keyup events are not fired while the Meta key is down.
                      // When the Meta key itself is released we will get an event for that, and we'll act as if
                      // all of these other keys were released as well.
                      // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                      // https://bugs.webkit.org/show_bug.cgi?id=55291
                      // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                      if (e.metaKey && ($c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                  } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
              },
              onClick (e) {
                  if (e && !e.currentTarget.contains(e.target)) return;
                  if (e && e.button === 0 && !state.isTriggeringEvent && !($ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
                      let shouldStopPropagation = true;
                      if (isDisabled) e.preventDefault();
                      // If triggered from a screen reader or by using element.click(),
                      // trigger as if it were a keyboard click.
                      if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || ($6a7db85432448f7f$export$60278871457622de)(e.nativeEvent))) {
                          // Ensure the element receives focus (VoiceOver on iOS does not do this)
                          if (!isDisabled && !preventFocusOnPress) ($7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                          let stopPressStart = triggerPressStart(e, 'virtual');
                          let stopPressUp = triggerPressUp(e, 'virtual');
                          let stopPressEnd = triggerPressEnd(e, 'virtual');
                          shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                      }
                      state.ignoreEmulatedMouseEvents = false;
                      state.ignoreClickAfterPress = false;
                      if (shouldStopPropagation) e.stopPropagation();
                  }
              }
          };
          let onKeyUp = (e)=>{
              var _state_metaKeyEvents;
              if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                  var _state_metaKeyEvents1;
                  if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                  let target = e.target;
                  triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', state.target.contains(target));
                  removeAllGlobalListeners();
                  // If a link was triggered with a key other than Enter, open the URL ourselves.
                  // This means the link has a role override, and the default browser behavior
                  // only applies when using the Enter key.
                  if (e.key !== 'Enter' && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                      // Store a hidden property on the event so we only trigger link click once,
                      // even if there are multiple usePress instances attached to the element.
                      e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                      ($ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e, false);
                  }
                  state.isPressed = false;
                  (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
              } else if (e.key === 'Meta' && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                  var _state_target;
                  // If we recorded keydown events that occurred while the Meta key was pressed,
                  // and those haven't received keyup events already, fire keyup events ourselves.
                  // See comment above for more info about the macOS bug causing this.
                  let events = state.metaKeyEvents;
                  state.metaKeyEvents = undefined;
                  for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent('keyup', event));
              }
          };
          if (typeof PointerEvent !== 'undefined') {
              pressProps.onPointerDown = (e)=>{
                  // Only handle left clicks, and ignore events that bubbled through portals.
                  if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                  // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                  // Ignore and let the onClick handler take care of it instead.
                  // https://bugs.webkit.org/show_bug.cgi?id=222627
                  // https://bugs.webkit.org/show_bug.cgi?id=223202
                  if (($6a7db85432448f7f$export$29bf1b5f2c56cf63)(e.nativeEvent)) {
                      state.pointerType = 'virtual';
                      return;
                  }
                  // Due to browser inconsistencies, especially on mobile browsers, we prevent
                  // default on pointer down and handle focusing the pressable element ourselves.
                  if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
                  state.pointerType = e.pointerType;
                  let shouldStopPropagation = true;
                  if (!state.isPressed) {
                      state.isPressed = true;
                      state.isOverTarget = true;
                      state.activePointerId = e.pointerId;
                      state.target = e.currentTarget;
                      if (!isDisabled && !preventFocusOnPress) ($7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                      if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
                      shouldStopPropagation = triggerPressStart(e, state.pointerType);
                      addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointermove', onPointerMove, false);
                      addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointerup', onPointerUp, false);
                      addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                  }
                  if (shouldStopPropagation) e.stopPropagation();
              };
              pressProps.onMouseDown = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  if (e.button === 0) {
                      // Chrome and Firefox on touch Windows devices require mouse down events
                      // to be canceled in addition to pointer events, or an extra asynchronous
                      // focus event will be fired.
                      if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
                      e.stopPropagation();
                  }
              };
              pressProps.onPointerUp = (e)=>{
                  // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                  if (!e.currentTarget.contains(e.target) || state.pointerType === 'virtual') return;
                  // Only handle left clicks
                  // Safari on iOS sometimes fires pointerup events, even
                  // when the touch isn't over the target, so double check.
                  if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
              };
              // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
              // Use pointer move events instead to implement our own hit testing.
              // See https://bugs.webkit.org/show_bug.cgi?id=199803
              let onPointerMove = (e)=>{
                  if (e.pointerId !== state.activePointerId) return;
                  if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                      if (!state.isOverTarget && state.pointerType != null) {
                          state.isOverTarget = true;
                          triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                      }
                  } else if (state.target && state.isOverTarget && state.pointerType != null) {
                      state.isOverTarget = false;
                      triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                      cancelOnPointerExit(e);
                  }
              };
              let onPointerUp = (e)=>{
                  if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                      if ($f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                      else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                      state.isPressed = false;
                      state.isOverTarget = false;
                      state.activePointerId = null;
                      state.pointerType = null;
                      removeAllGlobalListeners();
                      if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                      // Prevent subsequent touchend event from triggering onClick on unrelated elements on Android. See below.
                      // Both 'touch' and 'pen' pointerTypes trigger onTouchEnd, but 'mouse' does not.
                      if ('ontouchend' in state.target && e.pointerType !== 'mouse') addGlobalListener(state.target, 'touchend', onTouchEnd, {
                          once: true
                      });
                  }
              };
              // This is a workaround for an Android Chrome/Firefox issue where click events are fired on an incorrect element
              // if the original target is removed during onPointerUp (before onClick).
              // https://github.com/adobe/react-spectrum/issues/1513
              // https://issues.chromium.org/issues/40732224
              // Note: this event must be registered directly on the element, not via React props in order to work.
              // https://github.com/facebook/react/issues/9809
              let onTouchEnd = (e)=>{
                  // Don't preventDefault if we actually want the default (e.g. submit/link click).
                  if ($f6c31cce2adf654f$var$shouldPreventDefaultUp(e.target)) e.preventDefault();
              };
              let onPointerCancel = (e)=>{
                  cancel(e);
              };
              pressProps.onDragStart = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                  cancel(e);
              };
          } else {
              pressProps.onMouseDown = (e)=>{
                  // Only handle left clicks
                  if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                  // Due to browser inconsistencies, especially on mobile browsers, we prevent
                  // default on mouse down and handle focusing the pressable element ourselves.
                  if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
                  if (state.ignoreEmulatedMouseEvents) {
                      e.stopPropagation();
                      return;
                  }
                  state.isPressed = true;
                  state.isOverTarget = true;
                  state.target = e.currentTarget;
                  state.pointerType = ($6a7db85432448f7f$export$60278871457622de)(e.nativeEvent) ? 'virtual' : 'mouse';
                  if (!isDisabled && !preventFocusOnPress) ($7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                  let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                  if (shouldStopPropagation) e.stopPropagation();
                  addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'mouseup', onMouseUp, false);
              };
              pressProps.onMouseEnter = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  let shouldStopPropagation = true;
                  if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                      state.isOverTarget = true;
                      shouldStopPropagation = triggerPressStart(e, state.pointerType);
                  }
                  if (shouldStopPropagation) e.stopPropagation();
              };
              pressProps.onMouseLeave = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  let shouldStopPropagation = true;
                  if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                      state.isOverTarget = false;
                      shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                      cancelOnPointerExit(e);
                  }
                  if (shouldStopPropagation) e.stopPropagation();
              };
              pressProps.onMouseUp = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || 'mouse');
              };
              let onMouseUp = (e)=>{
                  // Only handle left clicks
                  if (e.button !== 0) return;
                  state.isPressed = false;
                  removeAllGlobalListeners();
                  if (state.ignoreEmulatedMouseEvents) {
                      state.ignoreEmulatedMouseEvents = false;
                      return;
                  }
                  if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                  else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                  state.isOverTarget = false;
              };
              pressProps.onTouchStart = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                  if (!touch) return;
                  state.activePointerId = touch.identifier;
                  state.ignoreEmulatedMouseEvents = true;
                  state.isOverTarget = true;
                  state.isPressed = true;
                  state.target = e.currentTarget;
                  state.pointerType = 'touch';
                  // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                  // on the emulated mouse event and handle focusing the pressable element ourselves.
                  if (!isDisabled && !preventFocusOnPress) ($7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                  if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
                  let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                  if (shouldStopPropagation) e.stopPropagation();
                  addGlobalListener(($431fbd86ca7dc216$export$f21a1ffae260145a)(e.currentTarget), 'scroll', onScroll, true);
              };
              pressProps.onTouchMove = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  if (!state.isPressed) {
                      e.stopPropagation();
                      return;
                  }
                  let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                  let shouldStopPropagation = true;
                  if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                      if (!state.isOverTarget && state.pointerType != null) {
                          state.isOverTarget = true;
                          shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                      }
                  } else if (state.isOverTarget && state.pointerType != null) {
                      state.isOverTarget = false;
                      shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                      cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
                  }
                  if (shouldStopPropagation) e.stopPropagation();
              };
              pressProps.onTouchEnd = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  if (!state.isPressed) {
                      e.stopPropagation();
                      return;
                  }
                  let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                  let shouldStopPropagation = true;
                  if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                      triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                      shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                  } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                  if (shouldStopPropagation) e.stopPropagation();
                  state.isPressed = false;
                  state.activePointerId = null;
                  state.isOverTarget = false;
                  state.ignoreEmulatedMouseEvents = true;
                  if (state.target && !allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                  removeAllGlobalListeners();
              };
              pressProps.onTouchCancel = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  e.stopPropagation();
                  if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
              };
              let onScroll = (e)=>{
                  if (state.isPressed && e.target.contains(state.target)) cancel({
                      currentTarget: state.target,
                      shiftKey: false,
                      ctrlKey: false,
                      metaKey: false,
                      altKey: false
                  });
              };
              pressProps.onDragStart = (e)=>{
                  if (!e.currentTarget.contains(e.target)) return;
                  cancel(e);
              };
          }
          return pressProps;
      }, [
          addGlobalListener,
          isDisabled,
          preventFocusOnPress,
          removeAllGlobalListeners,
          allowTextSelectionOnPress,
          cancel,
          cancelOnPointerExit,
          triggerPressEnd,
          triggerPressStart,
          triggerPressUp
      ]);
      // Remove user-select: none in case component unmounts immediately after pressStart
      // eslint-disable-next-line arrow-body-style
      ($670gB$react.useEffect)(()=>{
          return ()=>{
              var _ref_current_target;
              if (!allowTextSelectionOnPress) // eslint-disable-next-line react-hooks/exhaustive-deps
              ($14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : undefined);
          };
      }, [
          allowTextSelectionOnPress
      ]);
      return {
          isPressed: isPressedProp || isPressed,
          pressProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
      };
  }
  function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
      return target.tagName === 'A' && target.hasAttribute('href');
  }
  function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
      const { key: key, code: code } = event;
      const element = currentTarget;
      const role = element.getAttribute('role');
      // Accessibility for keyboards. Space and Enter only.
      // "Spacebar" is for IE 11
      return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
      !((role === 'link' || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== 'Enter');
  }
  function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
      const { targetTouches: targetTouches } = event;
      if (targetTouches.length > 0) return targetTouches[0];
      return null;
  }
  function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
      const changedTouches = event.changedTouches;
      for(let i = 0; i < changedTouches.length; i++){
          const touch = changedTouches[i];
          if (touch.identifier === pointerId) return touch;
      }
      return null;
  }
  function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
      let clientX = 0;
      let clientY = 0;
      if (e.targetTouches && e.targetTouches.length === 1) {
          clientX = e.targetTouches[0].clientX;
          clientY = e.targetTouches[0].clientY;
      }
      return {
          currentTarget: target,
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          altKey: e.altKey,
          clientX: clientX,
          clientY: clientY
      };
  }
  function $f6c31cce2adf654f$var$createEvent(target, e) {
      let clientX = e.clientX;
      let clientY = e.clientY;
      return {
          currentTarget: target,
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          altKey: e.altKey,
          clientX: clientX,
          clientY: clientY
      };
  }
  function $f6c31cce2adf654f$var$getPointClientRect(point) {
      let offsetX = 0;
      let offsetY = 0;
      if (point.width !== undefined) offsetX = point.width / 2;
      else if (point.radiusX !== undefined) offsetX = point.radiusX;
      if (point.height !== undefined) offsetY = point.height / 2;
      else if (point.radiusY !== undefined) offsetY = point.radiusY;
      return {
          top: point.clientY - offsetY,
          right: point.clientX + offsetX,
          bottom: point.clientY + offsetY,
          left: point.clientX - offsetX
      };
  }
  function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
      // check if they cannot overlap on x axis
      if (a.left > b.right || b.left > a.right) return false;
      // check if they cannot overlap on y axis
      if (a.top > b.bottom || b.top > a.bottom) return false;
      return true;
  }
  function $f6c31cce2adf654f$var$isOverTarget(point, target) {
      let rect = target.getBoundingClientRect();
      let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
      return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
  }
  function $f6c31cce2adf654f$var$shouldPreventDefaultDown(target) {
      // We cannot prevent default if the target is a draggable element.
      return !(target instanceof HTMLElement) || !target.hasAttribute('draggable');
  }
  function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
      if (target instanceof HTMLInputElement) return false;
      if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
      if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
      return true;
  }
  function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
      if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
      return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
  }
  const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
      'checkbox',
      'radio',
      'range',
      'color',
      'file',
      'image',
      'button',
      'submit',
      'reset'
  ]);
  function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
      // Only space should toggle checkboxes and radios, not enter.
      return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 

  class $8a9cb279dc87e130$export$905e7fc544a71f36 {
      isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
      }
      preventDefault() {
          this.defaultPrevented = true;
          this.nativeEvent.preventDefault();
      }
      stopPropagation() {
          this.nativeEvent.stopPropagation();
          this.isPropagationStopped = ()=>true;
      }
      isPropagationStopped() {
          return false;
      }
      persist() {}
      constructor(type, nativeEvent){
          this.nativeEvent = nativeEvent;
          this.target = nativeEvent.target;
          this.currentTarget = nativeEvent.currentTarget;
          this.relatedTarget = nativeEvent.relatedTarget;
          this.bubbles = nativeEvent.bubbles;
          this.cancelable = nativeEvent.cancelable;
          this.defaultPrevented = nativeEvent.defaultPrevented;
          this.eventPhase = nativeEvent.eventPhase;
          this.isTrusted = nativeEvent.isTrusted;
          this.timeStamp = nativeEvent.timeStamp;
          this.type = type;
      }
  }
  function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
      let stateRef = ($670gB$react.useRef)({
          isFocused: false,
          observer: null
      });
      // Clean up MutationObserver on unmount. See below.
      // eslint-disable-next-line arrow-body-style
      ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
          const state = stateRef.current;
          return ()=>{
              if (state.observer) {
                  state.observer.disconnect();
                  state.observer = null;
              }
          };
      }, []);
      let dispatchBlur = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
          onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      });
      // This function is called during a React onFocus event.
      return ($670gB$react.useCallback)((e)=>{
          // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
          // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
          // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
          // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
              stateRef.current.isFocused = true;
              let target = e.target;
              let onBlurHandler = (e)=>{
                  stateRef.current.isFocused = false;
                  if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                  dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                  // We no longer need the MutationObserver once the target is blurred.
                  if (stateRef.current.observer) {
                      stateRef.current.observer.disconnect();
                      stateRef.current.observer = null;
                  }
              };
              target.addEventListener('focusout', onBlurHandler, {
                  once: true
              });
              stateRef.current.observer = new MutationObserver(()=>{
                  if (stateRef.current.isFocused && target.disabled) {
                      var _stateRef_current_observer;
                      (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                      let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                      target.dispatchEvent(new FocusEvent('blur', {
                          relatedTarget: relatedTargetEl
                      }));
                      target.dispatchEvent(new FocusEvent('focusout', {
                          bubbles: true,
                          relatedTarget: relatedTargetEl
                      }));
                  }
              });
              stateRef.current.observer.observe(target, {
                  attributes: true,
                  attributeFilter: [
                      'disabled'
                  ]
              });
          }
      }, [
          dispatchBlur
      ]);
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ // Portions of the code in this file are based on code from react.
  // Original licensing for the following can be found in the
  // NOTICE file in the root directory of this source tree.
  // See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



  function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
      let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
      const onBlur = ($670gB$react.useCallback)((e)=>{
          if (e.target === e.currentTarget) {
              if (onBlurProp) onBlurProp(e);
              if (onFocusChange) onFocusChange(false);
              return true;
          }
      }, [
          onBlurProp,
          onFocusChange
      ]);
      const onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
      const onFocus = ($670gB$react.useCallback)((e)=>{
          // Double check that document.activeElement actually matches e.target in case a previously chained
          // focus handler already moved focus somewhere else.
          const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(e.target);
          if (e.target === e.currentTarget && ownerDocument.activeElement === e.target) {
              if (onFocusProp) onFocusProp(e);
              if (onFocusChange) onFocusChange(true);
              onSyntheticFocus(e);
          }
      }, [
          onFocusChange,
          onFocusProp,
          onSyntheticFocus
      ]);
      return {
          focusProps: {
              onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
              onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
          }
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ // Portions of the code in this file are based on code from react.
  // Original licensing for the following can be found in the
  // NOTICE file in the root directory of this source tree.
  // See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



  let $507fabe10e71c6fb$var$currentModality = null;
  let $507fabe10e71c6fb$var$changeHandlers = new Set();
  let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
  let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  // Only Tab or Esc keys will make focus visible on text input elements
  const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
      Tab: true,
      Escape: true
  };
  function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
      for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
  }
  /**
   * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
   */ function $507fabe10e71c6fb$var$isValidKey(e) {
      // Control and Shift keys trigger when navigating back to the tab with keyboard.
      return !(e.metaKey || !($c87311424ea30a05$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
  }
  function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      if ($507fabe10e71c6fb$var$isValidKey(e)) {
          $507fabe10e71c6fb$var$currentModality = 'keyboard';
          $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
      }
  }
  function $507fabe10e71c6fb$var$handlePointerEvent(e) {
      $507fabe10e71c6fb$var$currentModality = 'pointer';
      if (e.type === 'mousedown' || e.type === 'pointerdown') {
          $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
          $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
      }
  }
  function $507fabe10e71c6fb$var$handleClickEvent(e) {
      if (($6a7db85432448f7f$export$60278871457622de)(e)) {
          $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
          $507fabe10e71c6fb$var$currentModality = 'virtual';
      }
  }
  function $507fabe10e71c6fb$var$handleFocusEvent(e) {
      // Firefox fires two extra focus events when the user first clicks into an iframe:
      // first on the window, then on the document. We ignore these events so they don't
      // cause keyboard focus rings to appear.
      if (e.target === window || e.target === document) return;
      // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
      // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
      if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
          $507fabe10e71c6fb$var$currentModality = 'virtual';
          $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
      }
      $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
      $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  }
  function $507fabe10e71c6fb$var$handleWindowBlur() {
      // When the window is blurred, reset state. This is necessary when tabbing out of the window,
      // for example, since a subsequent focus event won't be fired.
      $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
      $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
  }
  /**
   * Setup global event listeners to control when keyboard focus style should be visible.
   */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
      if (typeof window === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get(($431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
      const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
      const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
      // Programmatic focus() calls shouldn't affect the current input modality.
      // However, we need to detect other cases when a focus event occurs without
      // a preceding user event (e.g. screen reader focus). Overriding the focus
      // method on HTMLElement.prototype is a bit hacky, but works.
      let focus = windowObject.HTMLElement.prototype.focus;
      windowObject.HTMLElement.prototype.focus = function() {
          $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
          focus.apply(this, arguments);
      };
      documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
      documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
      documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
      // Register focus events on the window so they are sure to happen
      // before React's event listeners (registered on the document).
      windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
      windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
      if (typeof PointerEvent !== 'undefined') {
          documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
      } else {
          documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
      }
      // Add unmount handler
      windowObject.addEventListener('beforeunload', ()=>{
          $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
      }, {
          once: true
      });
      $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
          focus: focus
      });
  }
  const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
      const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
      const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
      if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
      if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
      windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
      documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
      documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
      documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
      windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
      windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
      if (typeof PointerEvent !== 'undefined') {
          documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
      } else {
          documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
          documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
      }
      $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
  };
  function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
      const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
      let loadListener;
      if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
      else {
          loadListener = ()=>{
              $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
          };
          documentObject.addEventListener('DOMContentLoaded', loadListener);
      }
      return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
  }
  // Server-side rendering does not have the document object defined
  // eslint-disable-next-line no-restricted-globals
  if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
  function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
      return $507fabe10e71c6fb$var$currentModality !== 'pointer';
  }
  function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
      return $507fabe10e71c6fb$var$currentModality;
  }
  const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
      'checkbox',
      'radio',
      'range',
      'color',
      'file',
      'image',
      'button',
      'submit',
      'reset'
  ]);
  /**
   * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
   * focus visible style can be properly set.
   */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
      var _e_target;
      const IHTMLInputElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
      const IHTMLTextAreaElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
      const IHTMLElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
      const IKeyboardEvent = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
      isTextInput = isTextInput || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLTextAreaElement || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLElement && (e === null || e === void 0 ? void 0 : e.target.isContentEditable);
      return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
  }
  function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents();
      ($670gB$react.useEffect)(()=>{
          let handler = (modality, e)=>{
              if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
              fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
          };
          $507fabe10e71c6fb$var$changeHandlers.add(handler);
          return ()=>{
              $507fabe10e71c6fb$var$changeHandlers.delete(handler);
          };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, deps);
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ // Portions of the code in this file are based on code from react.
  // Original licensing for the following can be found in the
  // NOTICE file in the root directory of this source tree.
  // See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


  function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
      let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
      let state = ($670gB$react.useRef)({
          isFocusWithin: false
      });
      let onBlur = ($670gB$react.useCallback)((e)=>{
          // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
          // when moving focus inside the element. Only trigger if the currentTarget doesn't
          // include the relatedTarget (where focus is moving).
          if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
              state.current.isFocusWithin = false;
              if (onBlurWithin) onBlurWithin(e);
              if (onFocusWithinChange) onFocusWithinChange(false);
          }
      }, [
          onBlurWithin,
          onFocusWithinChange,
          state
      ]);
      let onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
      let onFocus = ($670gB$react.useCallback)((e)=>{
          // Double check that document.activeElement actually matches e.target in case a previously chained
          // focus handler already moved focus somewhere else.
          if (!state.current.isFocusWithin && document.activeElement === e.target) {
              if (onFocusWithin) onFocusWithin(e);
              if (onFocusWithinChange) onFocusWithinChange(true);
              state.current.isFocusWithin = true;
              onSyntheticFocus(e);
          }
      }, [
          onFocusWithin,
          onFocusWithinChange,
          onSyntheticFocus
      ]);
      if (isDisabled) return {
          focusWithinProps: {
              // These should not have been null, that would conflict in mergeProps
              onFocus: undefined,
              onBlur: undefined
          }
      };
      return {
          focusWithinProps: {
              onFocus: onFocus,
              onBlur: onBlur
          }
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ // Portions of the code in this file are based on code from react.
  // Original licensing for the following can be found in the
  // NOTICE file in the root directory of this source tree.
  // See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

  // iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
  // We want to ignore these emulated events so they do not trigger hover behavior.
  // See https://bugs.webkit.org/show_bug.cgi?id=214609.
  let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  let $6179b936705e76d3$var$hoverCount = 0;
  function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
      // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
      // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
      // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
      // the distant future because a user previously touched the element.
      setTimeout(()=>{
          $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
      }, 50);
  }
  function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
      if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
  }
  function $6179b936705e76d3$var$setupGlobalTouchEvents() {
      if (typeof document === 'undefined') return;
      if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
      else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
      $6179b936705e76d3$var$hoverCount++;
      return ()=>{
          $6179b936705e76d3$var$hoverCount--;
          if ($6179b936705e76d3$var$hoverCount > 0) return;
          if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
          else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
      };
  }
  function $6179b936705e76d3$export$ae780daf29e6d456(props) {
      let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
      let [isHovered, setHovered] = ($670gB$react.useState)(false);
      let state = ($670gB$react.useRef)({
          isHovered: false,
          ignoreEmulatedMouseEvents: false,
          pointerType: '',
          target: null
      }).current;
      ($670gB$react.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
      let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = ($670gB$react.useMemo)(()=>{
          let triggerHoverStart = (event, pointerType)=>{
              state.pointerType = pointerType;
              if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
              state.isHovered = true;
              let target = event.currentTarget;
              state.target = target;
              if (onHoverStart) onHoverStart({
                  type: 'hoverstart',
                  target: target,
                  pointerType: pointerType
              });
              if (onHoverChange) onHoverChange(true);
              setHovered(true);
          };
          let triggerHoverEnd = (event, pointerType)=>{
              state.pointerType = '';
              state.target = null;
              if (pointerType === 'touch' || !state.isHovered) return;
              state.isHovered = false;
              let target = event.currentTarget;
              if (onHoverEnd) onHoverEnd({
                  type: 'hoverend',
                  target: target,
                  pointerType: pointerType
              });
              if (onHoverChange) onHoverChange(false);
              setHovered(false);
          };
          let hoverProps = {};
          if (typeof PointerEvent !== 'undefined') {
              hoverProps.onPointerEnter = (e)=>{
                  if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                  triggerHoverStart(e, e.pointerType);
              };
              hoverProps.onPointerLeave = (e)=>{
                  if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
              };
          } else {
              hoverProps.onTouchStart = ()=>{
                  state.ignoreEmulatedMouseEvents = true;
              };
              hoverProps.onMouseEnter = (e)=>{
                  if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                  state.ignoreEmulatedMouseEvents = false;
              };
              hoverProps.onMouseLeave = (e)=>{
                  if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
              };
          }
          return {
              hoverProps: hoverProps,
              triggerHoverEnd: triggerHoverEnd
          };
      }, [
          onHoverStart,
          onHoverChange,
          onHoverEnd,
          isDisabled,
          state
      ]);
      ($670gB$react.useEffect)(()=>{
          // Call the triggerHoverEnd as soon as isDisabled changes to true
          // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
          if (isDisabled) triggerHoverEnd({
              currentTarget: state.target
          }, state.pointerType);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [
          isDisabled
      ]);
      return {
          hoverProps: hoverProps,
          isHovered: isHovered
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
      if (!handler) return undefined;
      let shouldStopPropagation = true;
      return (e)=>{
          let event = {
              ...e,
              preventDefault () {
                  e.preventDefault();
              },
              isDefaultPrevented () {
                  return e.isDefaultPrevented();
              },
              stopPropagation () {
                  console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
              },
              continuePropagation () {
                  shouldStopPropagation = false;
              }
          };
          handler(event);
          if (shouldStopPropagation) e.stopPropagation();
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
      return {
          keyboardProps: props.isDisabled ? {} : {
              onKeyDown: ($93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
              onKeyUp: ($93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
          }
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 

  function $6a99195332edec8b$export$80f3e147d781571c(element) {
      // If the user is interacting with a virtual cursor, e.g. screen reader, then
      // wait until after any animated transitions that are currently occurring on
      // the page before shifting focus. This avoids issues with VoiceOver on iOS
      // causing the page to scroll when moving focus if the element is transitioning
      // from off the screen.
      const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
      if (($507fabe10e71c6fb$export$630ff653c5ada6a9)() === 'virtual') {
          let lastFocusedElement = ownerDocument.activeElement;
          ($bbed8b41f857bcc0$export$24490316f764c430)(()=>{
              // If focus did not move and the element is still in the document, focus it.
              if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) ($7215afc6de606d6b$export$de79e2c695e052f3)(element);
          });
      } else ($7215afc6de606d6b$export$de79e2c695e052f3)(element);
  }

  function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
      let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
      let state = ($670gB$react.useRef)({
          isFocused: false,
          isFocusVisible: autoFocus || ($507fabe10e71c6fb$export$b9b3dfddab17db27)()
      });
      let [isFocused, setFocused] = ($670gB$react.useState)(false);
      let [isFocusVisibleState, setFocusVisible] = ($670gB$react.useState)(()=>state.current.isFocused && state.current.isFocusVisible);
      let updateState = ($670gB$react.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
      let onFocusChange = ($670gB$react.useCallback)((isFocused)=>{
          state.current.isFocused = isFocused;
          setFocused(isFocused);
          updateState();
      }, [
          updateState
      ]);
      ($507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible)=>{
          state.current.isFocusVisible = isFocusVisible;
          updateState();
      }, [], {
          isTextInput: isTextInput
      });
      let { focusProps: focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
          isDisabled: within,
          onFocusChange: onFocusChange
      });
      let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
          isDisabled: !within,
          onFocusWithinChange: onFocusChange
      });
      return {
          isFocused: isFocused,
          isFocusVisible: isFocusVisibleState,
          focusProps: within ? focusWithinProps : focusProps
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 



  let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ ($670gB$react).createContext(null);
  function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
      let context = ($670gB$react.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
      ($e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, ref);
      // eslint-disable-next-line
      let { ref: _, ...otherProps } = context;
      return otherProps;
  }
  function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
      let { focusProps: focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)(props);
      let { keyboardProps: keyboardProps } = ($46d819fcbaf35654$export$8f71654801c2f7cd)(props);
      let interactions = ($3ef42575df84b30b$export$9d1611c77c2fe928)(focusProps, keyboardProps);
      let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
      let interactionProps = props.isDisabled ? {} : domProps;
      let autoFocusRef = ($670gB$react.useRef)(props.autoFocus);
      ($670gB$react.useEffect)(()=>{
          if (autoFocusRef.current && domRef.current) ($6a99195332edec8b$export$80f3e147d781571c)(domRef.current);
          autoFocusRef.current = false;
      }, [
          domRef
      ]);
      return {
          focusableProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)({
              ...interactions,
              tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
          }, interactionProps)
      };
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 


  function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
      let { elementType: elementType = 'button', isDisabled: isDisabled, onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onPressChange: onPressChange, preventFocusOnPress: preventFocusOnPress, allowFocusWhenDisabled: // @ts-ignore - undocumented
      allowFocusWhenDisabled, // @ts-ignore
      onClick: deprecatedOnClick, href: href, target: target, rel: rel, type: type = 'button' } = props;
      let additionalProps;
      if (elementType === 'button') additionalProps = {
          type: type,
          disabled: isDisabled
      };
      else additionalProps = {
          role: 'button',
          tabIndex: isDisabled ? undefined : 0,
          href: elementType === 'a' && isDisabled ? undefined : href,
          target: elementType === 'a' ? target : undefined,
          type: elementType === 'input' ? type : undefined,
          disabled: elementType === 'input' ? isDisabled : undefined,
          'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
          rel: elementType === 'a' ? rel : undefined
      };
      let { pressProps: pressProps, isPressed: isPressed } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
          onPressStart: onPressStart,
          onPressEnd: onPressEnd,
          onPressChange: onPressChange,
          onPress: onPress,
          onPressUp: onPressUp,
          isDisabled: isDisabled,
          preventFocusOnPress: preventFocusOnPress,
          ref: ref
      });
      let { focusableProps: focusableProps } = ($e6afbd83fe6ebbd2$export$4c014de7c8940b4c)(props, ref);
      if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
      let buttonProps = ($3ef42575df84b30b$export$9d1611c77c2fe928)(focusableProps, pressProps, ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
          labelable: true
      }));
      return {
          isPressed: isPressed,
          buttonProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(additionalProps, buttonProps, {
              'aria-haspopup': props['aria-haspopup'],
              'aria-expanded': props['aria-expanded'],
              'aria-controls': props['aria-controls'],
              'aria-pressed': props['aria-pressed'],
              onClick: (e)=>{
                  if (deprecatedOnClick) {
                      deprecatedOnClick(e);
                      console.warn('onClick is deprecated, please use onPress');
                  }
              }
          })
      };
  }

  function useButton(props) {
    var as = props.as,
      ref = props.ref,
      children = props.children;
      props.className;
      var isDisabled = props.isDisabled,
      _a = props.color,
      color = _a === void 0 ? 'default' : _a,
      otherProps = __rest(props, ["as", "ref", "children", "className", "isDisabled", "color"]);
    var Element = as || 'button';
    var domRef = core.useDOMRef(ref);
    var _b = $701a24aa0da5b062$export$ea18c227d4417cc3(__assign(__assign({}, otherProps), {
        isDisabled: isDisabled,
        preventFocusOnPress: true,
        elementType: as
      }), domRef),
      buttonAriaProps = _b.buttonProps,
      isPressed = _b.isPressed;
    var _c = $6179b936705e76d3$export$ae780daf29e6d456({
        isDisabled: isDisabled
      }),
      hoverProps = _c.hoverProps,
      isHovered = _c.isHovered;
    var _d = $f7dceffc5ad7768b$export$4e328f61c538687f(),
      focusProps = _d.focusProps,
      isFocusVisible = _d.isFocusVisible;
    var classes = [styles.base, isHovered ? styles.hover : '', isPressed ? styles.pressed : '', isFocusVisible ? styles.focused : '', styles[color]].join(' ');
    var getProps = $670gB$react.useCallback(function () {
      return __assign(__assign({}, $3ef42575df84b30b$export$9d1611c77c2fe928(buttonAriaProps, hoverProps, focusProps)), {
        disabled: isDisabled,
        className: classes
      });
    }, [buttonAriaProps]);
    return {
      Element: Element,
      children: children,
      domRef: domRef,
      getProps: getProps
    };
  }

  var Button = /*#__PURE__*/$670gB$react.forwardRef(function (props, ref) {
    var _a = useButton(__assign(__assign({}, props), {
        ref: ref
      })),
      Element = _a.Element,
      children = _a.children,
      domRef = _a.domRef,
      getProps = _a.getProps;
    return jsxRuntimeExports.jsx(Element, __assign({}, getProps(), {
      ref: domRef,
      children: children
    }));
  });
  Button.displayName = 'simplexui.Button';

  function Checkbox() {
    return jsxRuntimeExports.jsx("div", {
      children: "hola mundo"
    });
  }

  exports.Button = Button;
  exports.Checkbox = Checkbox;

}));
//# sourceMappingURL=index.js.map
