(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21368b"],{ad0b:function(e,t,n){"use strict";n.r(t),n.d(t,"vbScript",(function(){return a})),n.d(t,"vbScriptASP",(function(){return i}));n("a481"),n("4917"),n("3b2b");function r(e){var t="error";function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var r=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),a=new RegExp("^((<>)|(<=)|(>=))"),i=new RegExp("^[\\.,]"),o=new RegExp("^[\\(\\)]"),c=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),b=["class","sub","select","while","if","function","property","with","for"],u=["else","elseif","case"],l=["next","loop","wend"],s=n(["and","or","not","xor","is","mod","eqv","imp"]),v=["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"],d=["true","false","nothing","empty","null"],m=["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"],p=["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"],h=["WScript","err","debug","RegExp"],f=["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"],y=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"],g=["server","response","request","session","application"],w=["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"],k=["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],x=y.concat(f);h=h.concat(p),e.isASP&&(h=h.concat(g),x=x.concat(k,w));var I=n(v),C=n(d),L=n(m),S=n(h),D=n(x),E='"',O=n(b),T=n(u),z=n(l),R=n(["end"]),j=n(["do"]),F=n(["on error resume next","exit"]),A=n(["rem"]);function B(e,t){t.currentIndent++}function N(e,t){t.currentIndent--}function W(e,n){if(e.eatSpace())return null;var b=e.peek();if("'"===b)return e.skipToEnd(),"comment";if(e.match(A))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var u=!1;if((e.match(/^\d*\.\d+/i)||e.match(/^\d+\.\d*/)||e.match(/^\.\d+/))&&(u=!0),u)return e.eat(/J/i),"number";var l=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?l=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),l=!0):e.match(/^0(?![\dx])/i)&&(l=!0),l)return e.eat(/L/i),"number"}return e.match(E)?(n.tokenize=q(e.current()),n.tokenize(e,n)):e.match(a)||e.match(r)||e.match(s)?"operator":e.match(i)?null:e.match(o)?"bracket":e.match(F)?(n.doInCurrentLine=!0,"keyword"):e.match(j)?(B(e,n),n.doInCurrentLine=!0,"keyword"):e.match(O)?(n.doInCurrentLine?n.doInCurrentLine=!1:B(e,n),"keyword"):e.match(T)?"keyword":e.match(R)?(N(e,n),N(e,n),"keyword"):e.match(z)?(n.doInCurrentLine?n.doInCurrentLine=!1:N(e,n),"keyword"):e.match(I)?"keyword":e.match(C)?"atom":e.match(D)?"variableName.special":e.match(L)||e.match(S)?"builtin":e.match(c)?"variable":(e.next(),t)}function q(e){var t=1==e.length,n="string";return function(r,a){while(!r.eol()){if(r.eatWhile(/[^'"]/),r.match(e))return a.tokenize=W,n;r.eat(/['"]/)}return t&&(a.tokenize=W),n}}function J(e,n){var r=n.tokenize(e,n),a=e.current();return"."===a?(r=n.tokenize(e,n),a=e.current(),!r||"variable"!==r.substr(0,8)&&"builtin"!==r&&"keyword"!==r?t:("builtin"!==r&&"keyword"!==r||(r="variable"),x.indexOf(a.substr(1))>-1&&(r="keyword"),r)):r}return{startState:function(){return{tokenize:W,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=J(e,t);return t.lastToken={style:n,content:e.current()},null===n&&(n=null),n},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(z)||r.match(R)||r.match(T)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit}}}var a=r({}),i=r({isASP:!0})}}]);