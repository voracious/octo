(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0f28"],{"69c2":function(e,n,t){"use strict";t.r(n),t.d(n,"apl",(function(){return c}));var l={"+":["conjugate","add"],"−":["negate","subtract"],"×":["signOf","multiply"],"÷":["reciprocal","divide"],"⌈":["ceiling","greaterOf"],"⌊":["floor","lesserOf"],"∣":["absolute","residue"],"⍳":["indexGenerate","indexOf"],"?":["roll","deal"],"⋆":["exponentiate","toThePowerOf"],"⍟":["naturalLog","logToTheBase"],"○":["piTimes","circularFuncs"],"!":["factorial","binomial"],"⌹":["matrixInverse","matrixDivide"],"<":[null,"lessThan"],"≤":[null,"lessThanOrEqual"],"=":[null,"equals"],">":[null,"greaterThan"],"≥":[null,"greaterThanOrEqual"],"≠":[null,"notEqual"],"≡":["depth","match"],"≢":[null,"notMatch"],"∈":["enlist","membership"],"⍷":[null,"find"],"∪":["unique","union"],"∩":[null,"intersection"],"∼":["not","without"],"∨":[null,"or"],"∧":[null,"and"],"⍱":[null,"nor"],"⍲":[null,"nand"],"⍴":["shapeOf","reshape"],",":["ravel","catenate"],"⍪":[null,"firstAxisCatenate"],"⌽":["reverse","rotate"],"⊖":["axis1Reverse","axis1Rotate"],"⍉":["transpose",null],"↑":["first","take"],"↓":[null,"drop"],"⊂":["enclose","partitionWithAxis"],"⊃":["diclose","pick"],"⌷":[null,"index"],"⍋":["gradeUp",null],"⍒":["gradeDown",null],"⊤":["encode",null],"⊥":["decode",null],"⍕":["format","formatByExample"],"⍎":["execute",null],"⊣":["stop","left"],"⊢":["pass","right"]},a=/[\.\/⌿⍀¨⍣]/,r=/⍬/,u=/[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/,i=/←/,o=/[⍝#].*$/,s=function(e){var n;return n=!1,function(t){return n=t,t!==e||"\\"===n}},c={startState:function(){return{prev:!1,func:!1,op:!1,string:!1,escape:!1}},token:function(e,n){var t;return e.eatSpace()?null:(t=e.next(),'"'===t||"'"===t?(e.eatWhile(s(t)),e.next(),n.prev=!0,"string"):/[\[{\(]/.test(t)?(n.prev=!1,null):/[\]}\)]/.test(t)?(n.prev=!0,null):r.test(t)?(n.prev=!1,"atom"):/[¯\d]/.test(t)?(n.func?(n.func=!1,n.prev=!1):n.prev=!0,e.eatWhile(/[\w\.]/),"number"):a.test(t)||i.test(t)?"operator":u.test(t)?(n.func=!0,n.prev=!1,l[t]?"variableName.function.standard":"variableName.function"):o.test(t)?(e.skipToEnd(),"comment"):"∘"===t&&"."===e.peek()?(e.next(),"variableName.function"):(e.eatWhile(/[\w\$_]/),n.prev=!0,"keyword"))}}}}]);