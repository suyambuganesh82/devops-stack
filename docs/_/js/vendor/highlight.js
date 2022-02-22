!function(){var e,n,a={};e=function(s){var a,g=[],r=Object.keys,w=Object.create(null),t=Object.create(null),O=!0,n=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,i=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,M="</span>",R="Could not find the language '{}', did you forget to load/include a language module?",S={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},c="of and for in not or if then".split(" ");function A(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(e){return e.nodeName.toLowerCase()}function o(e){return n.test(e)}function d(e){var n,a={},s=Array.prototype.slice.call(arguments,1);for(n in e)a[n]=e[n];return s.forEach(function(e){for(n in e)a[n]=e[n]}),a}function b(e){var i=[];return function e(n,a){for(var s=n.firstChild;s;s=s.nextSibling)3===s.nodeType?a+=s.nodeValue.length:1===s.nodeType&&(i.push({event:"start",offset:a,node:s}),a=e(s,a),u(s).match(/br|hr|img|input/)||i.push({event:"stop",offset:a,node:s}));return a}(e,0),i}function m(e,n,a){var s=0,i="",r=[];function t(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){i+="<"+u(e)+g.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+A(e.value).replace(/"/g,"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+u(e)+">"}function o(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){var d=t();if(i+=A(a.substring(s,d[0].offset)),s=d[0].offset,d===e){for(r.reverse().forEach(c);o(d.splice(0,1)[0]),(d=t())===e&&d.length&&d[0].offset===s;);r.reverse().forEach(l)}else"start"===d[0].event?r.push(d[0].node):r.pop(),o(d.splice(0,1)[0])}return i+A(a.substr(s))}function _(n){return n.variants&&!n.cached_variants&&(n.cached_variants=n.variants.map(function(e){return d(n,{variants:null},e)})),n.cached_variants||(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(n)?[d(n,{starts:n.starts?d(n.starts):null})]:Object.isFrozen(n)?[d(n)]:[n])}function E(e){if(a&&!e.langApiRestored){for(var n in e.langApiRestored=!0,a)e[n]&&(e[a[n]]=e[n]);(e.contains||[]).concat(e.variants||[]).forEach(E)}}function f(n,s){var i={};return"string"==typeof n?a("keyword",n):r(n).forEach(function(e){a(e,n[e])}),i;function a(a,e){(e=s?e.toLowerCase():e).split(" ").forEach(function(e){var n=e.split("|");i[n[0]]=[a,(e=n[0],(n=n[1])?Number(n):function(e){return-1!=c.indexOf(e.toLowerCase())}(e)?0:1)]})}}function C(s){function d(e){return e&&e.source||e}function g(e,n){return new RegExp(d(e),"m"+(s.case_insensitive?"i":"")+(n?"g":""))}function i(i){var r={},t=[],l={},a=1;function e(e,n){r[a]=e,t.push([e,n]),a+=new RegExp(n.toString()+"|").exec("").length-1+1}for(var n=0;n<i.contains.length;n++){var s,c=(s=i.contains[n]).beginKeywords?"\\.?(?:"+s.begin+")\\.?":s.begin;e(s,c)}i.terminator_end&&e("end",i.terminator_end),i.illegal&&e("illegal",i.illegal);var o=g(function(e,n){for(var a=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,s=0,i="",r=0;r<e.length;r++){var t=s+=1,l=d(e[r]);for(0<r&&(i+=n),i+="(";0<l.length;){var c=a.exec(l);if(null==c){i+=l;break}i+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+t):(i+=c[0],"("==c[0]&&s++)}i+=")"}return i}(t.map(function(e){return e[1]}),"|"),!0);return l.lastIndex=0,l.exec=function(e){var n;if(0===t.length)return null;o.lastIndex=l.lastIndex;var a=o.exec(e);if(!a)return null;for(var s=0;s<a.length;s++)if(null!=a[s]&&null!=r[""+s]){n=r[""+s];break}return"string"==typeof n?(a.type=n,a.extra=[i.illegal,i.terminator_end]):(a.type="begin",a.rule=n),a},l}if(s.contains&&-1!=s.contains.indexOf("self")){if(!O)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");s.contains=s.contains.filter(function(e){return"self"!=e})}!function n(a,e){a.compiled||(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords&&(a.keywords=f(a.keywords,s.case_insensitive)),a.lexemesRe=g(a.lexemes||/\w+/,!0),e&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=g(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=g(a.end)),a.terminator_end=d(a.end)||"",a.endsWithParent&&e.terminator_end&&(a.terminator_end+=(a.end?"|":"")+e.terminator_end)),a.illegal&&(a.illegalRe=g(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return _("self"===e?a:e)})),a.contains.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,e),a.terminators=i(a))}(s)}function x(n,e,s,a){var i=e;function r(e,n,a,s){if(!a&&""===n)return"";if(!e)return n;s='<span class="'+(s?"":S.classPrefix);return(s+=e+'">')+n+(a?"":M)}function t(){var e,n,a,s,i;if(!m.keywords)return A(p);for(a="",m.lexemesRe.lastIndex=e=0,n=m.lexemesRe.exec(p);n;)a+=A(p.substring(e,n.index)),s=m,i=n,i=b.case_insensitive?i[0].toLowerCase():i[0],(i=s.keywords.hasOwnProperty(i)&&s.keywords[i])?(N+=i[1],a+=r(i[0],A(n[0]))):a+=A(n[0]),e=m.lexemesRe.lastIndex,n=m.lexemesRe.exec(p);return a+A(p.substr(e))}function l(){E+=(null!=m.subLanguage?function(){var e="string"==typeof m.subLanguage;if(e&&!w[m.subLanguage])return A(p);var n=e?x(m.subLanguage,p,!0,_[m.subLanguage]):T(p,m.subLanguage.length?m.subLanguage:void 0);return 0<m.relevance&&(N+=n.relevance),e&&(_[m.subLanguage]=n.top),r(n.language,n.value,!1,!0)}:t)(),p=""}function c(e){E+=e.className?r(e.className,"",!0):"",m=Object.create(e,{parent:{value:m}})}function o(e){var n=e[0],e=e.rule;return e&&e.endSameAsBegin&&(e.endRe=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),e.skip?p+=n:(e.excludeBegin&&(p+=n),l(),e.returnBegin||e.excludeBegin||(p=n)),c(e),e.returnBegin?0:n.length}function d(e){var n=e[0],e=i.substr(e.index),a=function e(n,a){if(s=n.endRe,i=a,(i=s&&s.exec(i))&&0===i.index){for(;n.endsParent&&n.parent;)n=n.parent;return n}var s,i;if(n.endsWithParent)return e(n.parent,a)}(m,e);if(a){e=m;for(e.skip?p+=n:(e.returnEnd||e.excludeEnd||(p+=n),l(),e.excludeEnd&&(p=n));m.className&&(E+=M),m.skip||m.subLanguage||(N+=m.relevance),(m=m.parent)!==a.parent;);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),c(a.starts)),e.returnEnd?0:n.length}}var g={};function u(e,n){var a=n&&n[0];if(p+=e,null==a)return l(),0;if("begin"==g.type&&"end"==n.type&&g.index==n.index&&""===a)return p+=i.slice(n.index,n.index+1),1;if("illegal"===g.type&&""===a)return p+=i.slice(n.index,n.index+1),1;if("begin"===(g=n).type)return o(n);if("illegal"===n.type&&!s)throw new Error('Illegal lexeme "'+a+'" for mode "'+(m.className||"<unnamed>")+'"');if("end"===n.type){n=d(n);if(null!=n)return n}return p+=a,a.length}var b=D(n);if(!b)throw console.error(R.replace("{}",n)),new Error('Unknown language: "'+n+'"');C(b);for(var m=a||b,_={},E="",f=m;f!==b;f=f.parent)f.className&&(E=r(f.className,"",!0)+E);var p="",N=0;try{for(var v,h,y=0;;){if(m.terminators.lastIndex=y,!(v=m.terminators.exec(i)))break;h=u(i.substring(y,v.index),v),y=v.index+h}for(u(i.substr(y)),f=m;f.parent;f=f.parent)f.className&&(E+=M);return{relevance:N,value:E,illegal:!1,language:n,top:m}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:A(i)};if(O)return{relevance:0,value:A(i),language:n,top:m,errorRaised:e};throw e}}function T(a,e){e=e||S.languages||r(w);var s={relevance:0,value:A(a)},i=s;return e.filter(D).filter(y).forEach(function(e){var n=x(e,a,!1);n.language=e,n.relevance>i.relevance&&(i=n),n.relevance>s.relevance&&(i=s,s=n)}),i.language&&(s.second_best=i),s}function p(e){return S.tabReplace||S.useBR?e.replace(i,function(e,n){return S.useBR&&"\n"===e?"<br>":S.tabReplace?n.replace(/\t/g,S.tabReplace):""}):e}function N(e){var n,a,s,i,r=function(e){var n,a,s,i,r=e.className+" ";if(r+=e.parentNode?e.parentNode.className:"",a=l.exec(r)){var t=D(a[1]);return t||(console.warn(R.replace("{}",a[1])),console.warn("Falling back to no-highlight mode for this block.",e)),t?a[1]:"no-highlight"}for(n=0,s=(r=r.split(/\s+/)).length;n<s;n++)if(o(i=r[n])||D(i))return i}(e);o(r)||(S.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,a=r?x(r,i,!0):T(i),(n=b(n)).length&&((s=document.createElement("div")).innerHTML=a.value,a.value=m(n,b(s),i)),a.value=p(a.value),e.innerHTML=a.value,e.className=(s=e.className,i=r,r=a.language,i=i?t[i]:r,r=[s.trim()],s.match(/\bhljs\b/)||r.push("hljs"),-1===s.indexOf(i)&&r.push(i),r.join(" ").trim()),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function v(){var e;v.called||(v.called=!0,e=document.querySelectorAll("pre code"),g.forEach.call(e,N))}var h={disableAutodetect:!0};function D(e){return e=(e||"").toLowerCase(),w[e]||w[t[e]]}function y(e){e=D(e);return e&&!e.disableAutodetect}return s.highlight=x,s.highlightAuto=T,s.fixMarkup=p,s.highlightBlock=N,s.configure=function(e){S=d(S,e)},s.initHighlighting=v,s.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",v,!1),window.addEventListener("load",v,!1)},s.registerLanguage=function(n,e){var a;try{a=e(s)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!O)throw e;console.error(e),a=h}E(w[n]=a),a.rawDefinition=e.bind(null,s),a.aliases&&a.aliases.forEach(function(e){t[e]=n})},s.listLanguages=function(){return r(w)},s.getLanguage=D,s.requireLanguage=function(e){var n=D(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},s.autoDetection=y,s.inherit=d,s.debugMode=function(){O=!1},s.IDENT_RE="[a-zA-Z]\\w*",s.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",s.NUMBER_RE="\\b\\d+(\\.\\d+)?",s.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",s.BINARY_NUMBER_RE="\\b(0b[01]+)",s.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",s.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},s.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[s.BACKSLASH_ESCAPE]},s.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[s.BACKSLASH_ESCAPE]},s.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},s.COMMENT=function(e,n,a){a=s.inherit({className:"comment",begin:e,end:n,contains:[]},a||{});return a.contains.push(s.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},s.C_LINE_COMMENT_MODE=s.COMMENT("//","$"),s.C_BLOCK_COMMENT_MODE=s.COMMENT("/\\*","\\*/"),s.HASH_COMMENT_MODE=s.COMMENT("#","$"),s.NUMBER_MODE={className:"number",begin:s.NUMBER_RE,relevance:0},s.C_NUMBER_MODE={className:"number",begin:s.C_NUMBER_RE,relevance:0},s.BINARY_NUMBER_MODE={className:"number",begin:s.BINARY_NUMBER_RE,relevance:0},s.CSS_NUMBER_MODE={className:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},s.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[s.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[s.BACKSLASH_ESCAPE]}]},s.TITLE_MODE={className:"title",begin:s.IDENT_RE,relevance:0},s.UNDERSCORE_TITLE_MODE={className:"title",begin:s.UNDERSCORE_IDENT_RE,relevance:0},s.METHOD_GUARD={begin:"\\.\\s*"+s.UNDERSCORE_IDENT_RE,relevance:0},[s.BACKSLASH_ESCAPE,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,s.PHRASAL_WORDS_MODE,s.COMMENT,s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE,s.HASH_COMMENT_MODE,s.NUMBER_MODE,s.C_NUMBER_MODE,s.BINARY_NUMBER_MODE,s.CSS_NUMBER_MODE,s.REGEXP_MODE,s.TITLE_MODE,s.UNDERSCORE_TITLE_MODE,s.METHOD_GUARD].forEach(function(e){!function n(a){Object.freeze(a);var s="function"==typeof a;Object.getOwnPropertyNames(a).forEach(function(e){!a.hasOwnProperty(e)||null===a[e]||"object"!=typeof a[e]&&"function"!=typeof a[e]||s&&("caller"===e||"callee"===e||"arguments"===e)||Object.isFrozen(a[e])||n(a[e])});return a}(e)}),s},n="object"==typeof window&&window||"object"==typeof self&&self,void 0===a||a.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(a);function s(e){return{aliases:["adoc"],contains:[e.COMMENT("^/{4,}\\n","\\n/{4,}$",{relevance:10}),e.COMMENT("^//","$",{relevance:0}),{className:"title",begin:"^\\.\\w.*$"},{begin:"^[=\\*]{4,}\\n",end:"\\n^[=\\*]{4,}$",relevance:10},{className:"section",relevance:10,variants:[{begin:"^(={1,5}) .+?( \\1)?$"},{begin:"^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]},{className:"meta",begin:"^:.+?:",end:"\\s",excludeEnd:!0,relevance:10},{className:"meta",begin:"^\\[.+?\\]$",relevance:0},{className:"quote",begin:"^_{4,}\\n",end:"\\n_{4,}$",relevance:10},{className:"code",begin:"^[\\-\\.]{4,}\\n",end:"\\n[\\-\\.]{4,}$",relevance:10},{begin:"^\\+{4,}\\n",end:"\\n\\+{4,}$",contains:[{begin:"<",end:">",subLanguage:"xml",relevance:0}],relevance:10},{className:"bullet",begin:"^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"},{className:"symbol",begin:"^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",relevance:10},{className:"strong",begin:"\\B\\*(?![\\*\\s])",end:"(\\n{2}|\\*)",contains:[{begin:"\\\\*\\w",relevance:0}]},{className:"emphasis",begin:"\\B'(?!['\\s])",end:"(\\n{2}|')",contains:[{begin:"\\\\'\\w",relevance:0}],relevance:0},{className:"emphasis",begin:"_(?![_\\s])",end:"(\\n{2}|_)",relevance:0},{className:"string",variants:[{begin:"``.+?''"},{begin:"`.+?'"}]},{className:"code",begin:"(`.+?`|\\+.+?\\+)",relevance:0},{className:"code",begin:"^[ \\t]",end:"$",relevance:0},{begin:"^'{3,}[ \\t]*$",relevance:10},{begin:"(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",returnBegin:!0,contains:[{begin:"(link|image:?):",relevance:0},{className:"link",begin:"\\w",end:"[^\\[]+",relevance:0},{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0,relevance:0}],relevance:10}]}}function i(e){var n={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,a,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}function r(e){return{aliases:["patch"],contains:[{className:"meta",relevance:10,variants:[{begin:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{begin:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{className:"comment",variants:[{begin:/Index: /,end:/$/},{begin:/={3,}/,end:/$/},{begin:/^\-{3}/,end:/$/},{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{begin:/^\*{15}$/}]},{className:"addition",begin:"^\\+",end:"$"},{className:"deletion",begin:"^\\-",end:"$"},{className:"addition",begin:"^\\!",end:"$"}]}}function t(e){return{aliases:["docker"],case_insensitive:!0,keywords:"from maintainer expose env arg user onbuild stopsignal",contains:[e.HASH_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"}}function l(e){var n={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],keywords:n,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}function c(e){var n="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",a={className:"number",begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",relevance:0};return{aliases:["jsp"],keywords:n,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface",end:/[{;=]/,excludeEnd:!0,keywords:"class interface",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"function",begin:"([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},a,{className:"meta",begin:"@[A-Za-z]+"}]}}function o(e){var n="<>",a="</>",s=/<[A-Za-z0-9\\._:-]+/,i=/\/[A-Za-z0-9\\._:-]+>|\/>/,r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},l={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},c={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},o={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,c],subLanguage:"xml"}},d={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,c],subLanguage:"css"}},g={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,c]};return c.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,d,g,l,e.REGEXP_MODE],c=c.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]),{aliases:["js","jsx","mjs","cjs"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,d,g,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,l,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:r+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:r,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+r+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:r},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:c}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:n,end:a},{begin:s,end:i}],subLanguage:"xml",contains:[{begin:s,end:i,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:r}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:c}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}function d(e){var n={literal:"true false null"},a=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],s=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],i={end:",",endsWithParent:!0,excludeEnd:!0,contains:s,keywords:n},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(i,{begin:/:/})].concat(a),illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(i)],illegal:"\\S"};return s.push(r,i),a.forEach(function(e){s.push(e)}),{contains:s,keywords:n,illegal:"\\S"}}function g(e){var n={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"};return{aliases:["mk","mak"],keywords:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",lexemes:/[\w-]+/,contains:[e.HASH_COMMENT_MODE,n,a,{className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[n]},s,{className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{"meta-keyword":".PHONY"},lexemes:/[\.\w]+/},{className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]}]}}function u(e){return{aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$"},{begin:"^.+?\\n[=-]{2,}$"}]},{begin:"<",end:">",subLanguage:"xml",relevance:0},{className:"bullet",begin:"^\\s*([*+-]|(\\d+\\.))\\s+"},{className:"strong",begin:"[*_]{2}.+?[*_]{2}"},{className:"emphasis",variants:[{begin:"\\*.+?\\*"},{begin:"_.+?_",relevance:0}]},{className:"quote",begin:"^>\\s+",end:"$"},{className:"code",variants:[{begin:"^```\\w*\\s*$",end:"^```[ ]*$"},{begin:"`.+?`"},{begin:"^( {4}|\\t)",end:"$",relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},{begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}function b(e){var n=e.COMMENT("#","$"),a="([A-Za-z_]|::)(\\w|::)*",s=e.inherit(e.TITLE_MODE,{begin:a}),i={className:"variable",begin:"\\$"+a},a={className:"string",contains:[e.BACKSLASH_ESCAPE,i],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/}]};return{aliases:["pp"],contains:[n,i,a,{beginKeywords:"class",end:"\\{|;",illegal:/=/,contains:[s,n]},{beginKeywords:"define",end:/\{/,contains:[{className:"section",begin:e.IDENT_RE,endsParent:!0}]},{begin:e.IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\S/,contains:[{className:"keyword",begin:e.IDENT_RE},{begin:/\{/,end:/\}/,keywords:{keyword:"and case default else elsif false if in import enherits node or true undef unless main settings $string ",literal:"alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",built_in:"architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"},relevance:0,contains:[a,n,{begin:"[a-zA-Z_]+\\s*=>",returnBegin:!0,end:"=>",contains:[{className:"attr",begin:e.IDENT_RE}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},i]}],relevance:0}]}}function m(e){var n={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"},a={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/(fr|rf|f)'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/(fr|rf|f)"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},{begin:/(fr|rf|f)'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,i,s]},{begin:/(fr|rf|f)"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},t={className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},i={className:"params",begin:/\(/,end:/\)/,contains:["self",a,t,r,e.HASH_COMMENT_MODE]};return s.contains=[r,t,a],{aliases:["py","gyp","ipython"],keywords:n,illegal:/(<\/|->|\?)|=>/,contains:[a,t,{beginKeywords:"if",relevance:0},r,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,i,{begin:/->/,endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{begin:/\b(print|exec)\(/}]}}function _(e){var n="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",a={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},s={className:"doctag",begin:"@[A-Za-z]+"},i={begin:"#<",end:">"},r=[e.COMMENT("#","$",{contains:[s]}),e.COMMENT("^\\=begin","^\\=end",{contains:[s],relevance:10}),e.COMMENT("^__END__","\\n$")],t={className:"subst",begin:"#\\{",end:"}",keywords:a},l={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:"%[qQwWx]?\\(",end:"\\)"},{begin:"%[qQwWx]?\\[",end:"\\]"},{begin:"%[qQwWx]?{",end:"}"},{begin:"%[qQwWx]?<",end:">"},{begin:"%[qQwWx]?/",end:"/"},{begin:"%[qQwWx]?%",end:"%"},{begin:"%[qQwWx]?-",end:"-"},{begin:"%[qQwWx]?\\|",end:"\\|"},{begin:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{begin:/<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,returnBegin:!0,contains:[{begin:/<<[-~]?'?/},{begin:/\w+/,endSameAsBegin:!0,contains:[e.BACKSLASH_ESCAPE,t]}]}]},s={className:"params",begin:"\\(",end:"\\)",endsParent:!0,keywords:a},e=[l,i,{className:"class",beginKeywords:"class module",end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{begin:"<\\s*",contains:[{begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE}]}].concat(r)},{className:"function",beginKeywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:n}),s].concat(r)},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[l,{begin:n}],relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{className:"params",begin:/\|/,end:/\|/,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[i,{className:"regexp",contains:[e.BACKSLASH_ESCAPE,t],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r{",end:"}[a-z]*"},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(r),relevance:0}].concat(r);return t.contains=e,s.contains=e,{aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,contains:r.concat([{begin:/^\s*=>/,starts:{end:"$",contains:e}},{className:"meta",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",starts:{end:"$",contains:e}}]).concat(e)}}function E(e){var n="([ui](8|16|32|64|128|size)|f(32|64))?",a="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";return{aliases:["rs"],keywords:{keyword:"abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",literal:"true false Some None Ok Err",built_in:a},lexemes:e.IDENT_RE+"!?",illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{begin:"\\b0x([A-Fa-f0-9_]+)"+n},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+n}],relevance:0},{className:"function",beginKeywords:"fn",end:"(\\(|<)",excludeEnd:!0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"#\\!?\\[",end:"\\]",contains:[{className:"meta-string",begin:/"/,end:/"/}]},{className:"class",beginKeywords:"type",end:";",contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"\\S"},{className:"class",beginKeywords:"trait enum struct union",end:"{",contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"[\\w\\d]"},{begin:e.IDENT_RE+"::",keywords:{built_in:a}},{begin:"->"}]}}function f(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}function p(e){var n={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},s=e.inherit(a,{begin:"\\(",end:"\\)"}),i=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),r=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[a,r,i,s,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[a,s,r,i]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}function N(e){var n="true false yes no null",a={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+e.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+e.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"\\-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{className:"number",begin:e.C_NUMBER_RE+"\\b"},a]}}!function(){"use strict";a.registerLanguage("asciidoc",s),a.registerLanguage("bash",i),a.registerLanguage("diff",r),a.registerLanguage("dockerfile",t),a.registerLanguage("go",l),a.registerLanguage("java",c),a.registerLanguage("javascript",o),a.registerLanguage("json",d),a.registerLanguage("makefile",g),a.registerLanguage("markdown",u),a.registerLanguage("puppet",b),a.registerLanguage("python",m),a.registerLanguage("ruby",_),a.registerLanguage("rust",E),a.registerLanguage("shell",f),a.registerLanguage("xml",p),a.registerLanguage("yaml",N),a.registerLanguage("terraform",window.hljsDefineTerraform),[].slice.call(document.querySelectorAll("pre code.hljs")).forEach(function(e){a.highlightBlock(e)})}()}();