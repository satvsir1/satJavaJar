webpackJsonp([0],{117:function(e,t){},118:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(56),o=n(57),i=r(o),c=n(54),l=n(55);$(function(){var e=$("#string-list"),t={},n={},r=void 0,o=void 0,s=0;$("#save-file").click(function(i){void 0===o?alert("Não ha nada para salvar."):!function(){var i=new a.JavaClassFileWriter;e.children(".input-field").filter(function(e,t){return""!==$(t).children("input").val()}).map(function(e,r){var a=$(r),o=a.find("input").val(),i=a.attr("data-id"),l=t[i],s=n[l.ownerClass],f=s.constant_pool[l.constantPoolIndex],d=(0,c.stringToUtf8ByteArray)(o);return f.length=d.length,f.bytes=[],d.forEach(function(e){return f.bytes.push(e)}),{className:l.ownerClass,classFile:s}}).each(function(e,t){var n=i.write(t.classFile);o.file(t.className,n.buffer)}),o.generateAsync({type:"blob"}).then(function(e){(0,l.saveAs)(e,r||"translated.jar")})}()}),$("#select-file").click(function(e){$("#file-input").click()}),$("#file-input").change(function(l){function f(r){var o=u.read(r.data),i=[];n[r.name]=o,o.methods.forEach(function(e){var n=e.attributes.filter(function(e){var t=String.fromCharCode.apply(null,o.constant_pool[e.attribute_name_index].bytes);return"Code"===t})[0];if(void 0!==n&&0!=n.length){var l=a.InstructionParser.fromBytecode(n.code);l.filter(function(e){return e.opcode==a.Opcode.LDC||e.opcode==a.Opcode.LDC_W}).forEach(function(e){var n=e.opcode==a.Opcode.LDC?e.operands[0]:e.operands[0]<<8|e.operands[1],l=o.constant_pool[n];if(l.tag===a.ConstantType.STRING){var f=o.constant_pool[l.string_index],d=(0,c.utf8ByteArrayToString)(f.bytes),u=document.createElement("div"),p=document.createElement("label"),h=document.createElement("input");t[s]={ownerClass:r.name,constantPoolIndex:l.string_index},u.setAttribute("data-id",s),u.className="input-field",p.innerText=d,p.setAttribute("for","input-id-"+s),h.type="text",h.id="input-id-"+s,u.appendChild(p),u.appendChild(h),i.push(u),++s}})}}),0!=i.length&&e.append(i)}var d=new FileReader,u=new a.JavaClassFileReader,p=l.target.files[0];void 0!==p&&(s=0,t={},n={},r=p.name,e.empty(),d.onload=function(e){var t=e.target.result;(new i.default).loadAsync(t).then(function(e){e.filter(function(e){return e.endsWith(".class")}).forEach(function(e){e.async("arraybuffer").then(function(t){return f({name:e.name,data:t})})}),o=e})},d.readAsArrayBuffer(p))})})},54:function(e,t,n){"use strict";var r=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},a=function(e){for(var t=[],n=0,r=0;n<e.length;){var a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){var o=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&o)}else if(a>239&&a<365){var o=e[n++],i=e[n++],c=e[n++],l=((7&a)<<18|(63&o)<<12|(63&i)<<6|63&c)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{var o=e[n++],i=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&o)<<6|63&i)}}return t.join("")};e.exports={utf8ByteArrayToString:a,stringToUtf8ByteArray:r}}},[118]);