(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dee4b"],{"881f":function(t,n,a){"use strict";a.r(n),a.d(n,"troff",(function(){return h}));a("4917");var r={};function e(t){if(t.eatSpace())return null;var n=t.sol(),a=t.next();if("\\"===a)return t.match("fB")||t.match("fR")||t.match("fI")||t.match("u")||t.match("d")||t.match("%")||t.match("&")?"string":t.match("m[")?(t.skipTo("]"),t.next(),"string"):t.match("s+")||t.match("s-")?(t.eatWhile(/[\d-]/),"string"):t.match("(")||t.match("*(")?(t.eatWhile(/[\w-]/),"string"):"string";if(n&&("."===a||"'"===a)&&t.eat("\\")&&t.eat('"'))return t.skipToEnd(),"comment";if(n&&"."===a){if(t.match("B ")||t.match("I ")||t.match("R "))return"attribute";if(t.match("TH ")||t.match("SH ")||t.match("SS ")||t.match("HP "))return t.skipToEnd(),"quote";if(t.match(/[A-Z]/)&&t.match(/[A-Z]/)||t.match(/[a-z]/)&&t.match(/[a-z]/))return"attribute"}t.eatWhile(/[\w-]/);var e=t.current();return r.hasOwnProperty(e)?r[e]:null}function c(t,n){return(n.tokens[0]||e)(t,n)}var h={startState:function(){return{tokens:[]}},token:function(t,n){return c(t,n)}}}}]);