(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213783"],{ad8b:function(t,r,e){"use strict";e.r(r),e.d(r,"mscgen",(function(){return o})),e.d(r,"msgenny",(function(){return i})),e.d(r,"xu",(function(){return c}));e("4917"),e("3b2b");function n(t){return{startState:u,copyState:l,token:b(t),languageData:{commentTokens:{line:"#",block:{open:"/*",close:"*/"}}}}}var o=n({keywords:["msc"],options:["hscale","width","arcgradient","wordwraparcs"],constants:["true","false","on","off"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}),i=n({keywords:null,options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:null,brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}),c=n({keywords:["msc","xu"],options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip","title","deactivate","activate","activation"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]});function a(t){return new RegExp("^\\b("+t.join("|")+")\\b","i")}function s(t){return new RegExp("^(?:"+t.join("|")+")","i")}function u(){return{inComment:!1,inString:!1,inAttributeList:!1,inScript:!1}}function l(t){return{inComment:t.inComment,inString:t.inString,inAttributeList:t.inAttributeList,inScript:t.inScript}}function b(t){return function(r,e){if(r.match(s(t.brackets),!0,!0))return"bracket";if(!e.inComment){if(r.match(/\/\*[^\*\/]*/,!0,!0))return e.inComment=!0,"comment";if(r.match(s(t.singlecomment),!0,!0))return r.skipToEnd(),"comment"}if(e.inComment)return r.match(/[^\*\/]*\*\//,!0,!0)?e.inComment=!1:r.skipToEnd(),"comment";if(!e.inString&&r.match(/\"(\\\"|[^\"])*/,!0,!0))return e.inString=!0,"string";if(e.inString)return r.match(/[^\"]*\"/,!0,!0)?e.inString=!1:r.skipToEnd(),"string";if(t.keywords&&r.match(a(t.keywords),!0,!0))return"keyword";if(r.match(a(t.options),!0,!0))return"keyword";if(r.match(a(t.arcsWords),!0,!0))return"keyword";if(r.match(s(t.arcsOthers),!0,!0))return"keyword";if(t.operators&&r.match(s(t.operators),!0,!0))return"operator";if(t.constants&&r.match(s(t.constants),!0,!0))return"variable";if(!t.inAttributeList&&t.attributes&&r.match("[",!0,!0))return t.inAttributeList=!0,"bracket";if(t.inAttributeList){if(null!==t.attributes&&r.match(a(t.attributes),!0,!0))return"attribute";if(r.match("]",!0,!0))return t.inAttributeList=!1,"bracket"}return r.next(),null}}}}]);