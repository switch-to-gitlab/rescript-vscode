// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_int64 from "rescript/lib/es6/caml_int64.js";
import * as JSResource from "JSResource";
import * as DeadValueTest from "./DeadValueTest.bs.js";
import * as ImmutableArray from "./ImmutableArray.bs.js";
import * as BootloaderResource from "BootloaderResource";
import * as DynamicallyLoadedComponent from "./DynamicallyLoadedComponent.bs.js";

console.log(ImmutableArray.fromArray);

var Inner = {
  thisIsAlsoMarkedDead: 99
};

var M = {
  thisSignatureItemIsDead: 34
};

var VariantUsedOnlyInImplementation = {
  a: /* A */0
};

var UnderscoreInside = {};

var MM = {
  x: 55,
  y: 55
};

console.log(55);

console.log(DeadValueTest.valueAlive);

function unusedRec(_param) {
  while(true) {
    _param = undefined;
    continue ;
  };
}

function split_map(l) {
  split_map(l);
  return /* [] */0;
}

function rec1(_param) {
  while(true) {
    _param = undefined;
    continue ;
  };
}

function rec2(_param) {
  while(true) {
    _param = undefined;
    continue ;
  };
}

function recWithCallback(_param) {
  while(true) {
    _param = undefined;
    continue ;
  };
}

function foo(_param) {
  while(true) {
    _param = undefined;
    continue ;
  };
}

function bar(param) {
  return foo(undefined);
}

function withDefaultValue(paramWithDefaultOpt, y) {
  var paramWithDefault = paramWithDefaultOpt !== undefined ? paramWithDefaultOpt : 3;
  return paramWithDefault + y | 0;
}

var Ext_buffer = {};

console.log(/* Root */{
      _0: "xzz"
    });

var reasonResource = JSResource("DynamicallyLoadedComponent.bs");

function makeProps(prim0, prim1, prim2) {
  var tmp = {
    s: prim0
  };
  if (prim1 !== undefined) {
    tmp.key = prim1;
  }
  return tmp;
}

function make(props) {
  return React.createElement(BootloaderResource.read(reasonResource).make, props);
}

var LazyDynamicallyLoadedComponent2 = {
  reasonResource: reasonResource,
  makeProps: makeProps,
  make: make
};

var Chat = {};

console.log(React.createElement(DynamicallyLoadedComponent.make, {
          s: ""
        }));

var second = Caml_int64.one;

var minute = Caml_int64.mul([
      0,
      60
    ], second);

var deadRef = {
  contents: 12
};

function DeadTest(Props) {
  return Props.s;
}

console.log(DeadTest);

console.log(123);

var GloobLive = {
  globallyLive1: 1,
  globallyLive2: 2,
  globallyLive3: 3
};

var WithInclude = {};

console.log(/* A */0);

function funWithInnerVars(param) {
  return 70;
}

var fortytwo = 42;

var fortyTwoButExported = 42;

var thisIsUsedOnce = 34;

var thisIsUsedTwice = 34;

var thisIsMarkedDead = 99;

var thisIsKeptAlive = 42;

var thisIsMarkedLive = 42;

var zzz;

var make$1 = DeadTest;

var theSideEffectIsLogging;

var stringLengthNoSideEffects = 5;

export {
  fortytwo ,
  fortyTwoButExported ,
  thisIsUsedOnce ,
  thisIsUsedTwice ,
  thisIsMarkedDead ,
  thisIsKeptAlive ,
  thisIsMarkedLive ,
  Inner ,
  M ,
  VariantUsedOnlyInImplementation ,
  UnderscoreInside ,
  MM ,
  unusedRec ,
  split_map ,
  rec1 ,
  rec2 ,
  recWithCallback ,
  foo ,
  bar ,
  withDefaultValue ,
  Ext_buffer ,
  LazyDynamicallyLoadedComponent2 ,
  Chat ,
  zzz ,
  second ,
  minute ,
  deadRef ,
  make$1 as make,
  theSideEffectIsLogging ,
  stringLengthNoSideEffects ,
  GloobLive ,
  WithInclude ,
  funWithInnerVars ,
  
}
/*  Not a pure module */
