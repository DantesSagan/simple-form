(function(e){function t(t){for(var i,s,n=t[0],o=t[1],c=t[2],d=0,v=[];d<n.length;d++)s=n[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);m&&m(t);while(v.length)v.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],i=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(i=!1)}i&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},r={app:0},l=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/simple-form/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var m=o;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-100",attrs:{id:"app"}},[a("div",{staticClass:"container-fluid h-100 justify-content-center align-items-center"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col-md-1 vue-bg h-100 d-flex"}),a("div",{staticClass:"col-md-9 h-100 d-flex justify-content-center align-items-center"},[a("div",{staticClass:"col-md-8 rounded px-5 py-4 shadow bg-white text-left"},[a("SignupForm")],1)])])])])},l=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{id:"signup-form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-12 form-group"},[e._m(1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.fullname.$model,expression:"$v.fullname.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.fullname)},attrs:{type:"name"},domProps:{value:e.$v.fullname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.fullname,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.fullname.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Фамилия". ')]),e.$v.fullname.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 2 букв.")]),e.$v.fullname.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(" Не более 40 букв. ")])]),a("div",{staticClass:"col-12 form-group"},[e._m(2),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.name)},attrs:{type:"name"},domProps:{value:e.$v.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.name,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.name.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v('Заполните поле "Имя".')]),e.$v.name.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 2 букв.")]),e.$v.name.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 40 букв.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(3),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.fname.$model,expression:"$v.fname.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"text"},domProps:{value:e.$v.fname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.fname,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"col-12 form-group"},[e._m(4),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.birth.$model,expression:"$v.birth.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.birth)},attrs:{type:"date",id:"start",name:"trip-start",value:"2021-04-29",min:"1935-01-01",max:"2021-12-31"},domProps:{value:e.$v.birth.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.birth,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.birth.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Дата рождения". ')])]),a("div",{staticClass:"col-12 form-group"},[e._m(5),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.tele.$model,expression:"$v.tele.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.tele)},attrs:{type:"tele",name:"phone",placeholder:"11 цифр. Начинается с +7"},domProps:{value:e.$v.tele.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.tele,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.tele.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Номер телефона". ')]),e.$v.tele.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 11 цифр.")]),e.$v.tele.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 11 цифр.")])]),a("div",{staticClass:"col-12 form-group",attrs:{id:"gender"}},[e._m(6),a("label",{attrs:{id:"male"}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.gender.$model,expression:"$v.gender.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"user-prefer",unchecked:"",value:"male"},domProps:{checked:e._q(e.$v.gender.$model,"male")},on:{change:function(t){return e.$set(e.$v.gender,"$model","male")}}}),e._v("Мужчина")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.gender.$model,expression:"$v.gender.$model",modifiers:{trim:!0}}],attrs:{id:"female",type:"radio",name:"user-prefer",unchecked:"",value:"female"},domProps:{checked:e._q(e.$v.gender.$model,"female")},on:{change:function(t){return e.$set(e.$v.gender,"$model","female")}}}),e._v("Женщина")])]),a("div",{staticClass:"col-12 form-group"},[e._m(7),a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.clients.$model,expression:"$v.clients.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.clients)},attrs:{multiple:"",value:"selector",id:"clients"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.clients,"$model",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"value1"}},[e._v("VIP")]),a("option",{attrs:{value:"value2"}},[e._v("Проблемные")]),a("option",{attrs:{value:"value3"}},[e._v("ОМС")])]),e.$v.tele.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Группа клиентов". ')])]),a("div",{staticClass:"col-12 form-group"},[e._m(8),a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.doctor,expression:"doctor",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"select",value:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.doctor=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Выберите врача")]),a("option",{attrs:{value:"Ivanov"}},[e._v("Иванов")]),a("option",{attrs:{value:"Zaharov"}},[e._v("Захаров")]),a("option",{attrs:{value:"Chernyshova"}},[e._v("Чернышева")])])]),a("div",{staticClass:"col-12 form-group",attrs:{id:"sms"}},[e._m(9),a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.send,expression:"send",modifiers:{trim:!0}}],attrs:{id:"send",type:"checkbox",name:"SMS",value:"send",unchecked:""},domProps:{checked:Array.isArray(e.send)?e._i(e.send,"send")>-1:e.send},on:{change:function(t){var a=e.send,i=t.target,r=!!i.checked;if(Array.isArray(a)){var l="send",s=e._i(a,l);i.checked?s<0&&(e.send=a.concat([l])):s>-1&&(e.send=a.slice(0,s).concat(a.slice(s+1)))}else e.send=r}}}),e._v("Оправлять")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.notsend,expression:"notsend",modifiers:{trim:!0}}],attrs:{id:"notsend",type:"checkbox",name:"SMS",value:"notsend",unchecked:""},domProps:{checked:Array.isArray(e.notsend)?e._i(e.notsend,"notsend")>-1:e.notsend},on:{change:function(t){var a=e.notsend,i=t.target,r=!!i.checked;if(Array.isArray(a)){var l="notsend",s=e._i(a,l);i.checked?s<0&&(e.notsend=a.concat([l])):s>-1&&(e.notsend=a.slice(0,s).concat(a.slice(s+1)))}else e.notsend=r}}}),e._v("Не отправлять")])]),e._m(10),a("div",{staticClass:"col-12 form-group"},[e._m(11),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.index.$model,expression:"$v.index.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.index)},attrs:{type:"text",name:"index",placeholder:"Почтовый индекс"},domProps:{value:e.$v.index.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.index,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.index.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Индекс". ')]),e.$v.index.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 4 цифр.")]),e.$v.index.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 6 цифр.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(12),a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.country,expression:"country",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"select",value:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.country=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Выберите страну")]),a("option",{attrs:{value:"Ukraine"}},[e._v("Украина")]),a("option",{attrs:{value:"Russia"}},[e._v("Россия")]),a("option",{attrs:{value:"Belarus"}},[e._v("Беларусь")]),a("option",{attrs:{value:"Kazakhstan"}},[e._v("Казахстан")])])]),a("div",{staticClass:"col-12 form-group"},[e._m(13),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.district.$model,expression:"$v.district.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.district)},attrs:{type:"text"},domProps:{value:e.$v.district.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.district,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.district.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Область". ')]),e.$v.district.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(" Не менее 10 букв. ")]),e.$v.district.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(" Не более 40 букв. ")])]),a("div",{staticClass:"col-12 form-group"},[e._m(14),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.city.$model,expression:"$v.city.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.city)},attrs:{type:"text"},domProps:{value:e.$v.city.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.city,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.city.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Город". ')]),e.$v.city.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 2 букв.")]),e.$v.city.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 40 букв.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(15),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.street.$model,expression:"$v.street.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.street)},attrs:{type:"text"},domProps:{value:e.$v.street.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.street,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.street.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Улица". ')]),e.$v.street.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 2 букв.")]),e.$v.street.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 40 букв.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(16),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.home.$model,expression:"$v.home.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.home)},attrs:{type:"text"},domProps:{value:e.$v.home.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.home,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._m(17),a("div",{staticClass:"col-12 form-group"},[e._m(18),a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.id.$model,expression:"$v.id.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.id)},attrs:{type:"select",value:"selector"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.id,"$model",t.target.multiple?a:a[0])}}},[e._m(19),a("option",{attrs:{value:"Ivanov"}},[e._v("Паспорт")]),a("option",{attrs:{value:"Zaharov"}},[e._v("Свидетельсвто о рождении")]),a("option",{attrs:{value:"Chernyshova"}},[e._v("Вод. удостоверение")])]),e.$v.id.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Выберите в поле "Тип паспорта". ')])]),a("div",{staticClass:"col-12 form-group"},[e._m(20),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.series.$model,expression:"$v.series.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.series)},attrs:{type:"text"},domProps:{value:e.$v.series.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.series,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.series.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Серия документа". ')]),e.$v.series.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 2 цифр.")]),e.$v.series.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 4 цифр.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(21),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.nb.$model,expression:"$v.nb.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.nb)},attrs:{type:"number"},domProps:{value:e.$v.nb.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nb,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.nb.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Номер документа". ')]),e.$v.nb.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 4 цифр.")]),e.$v.nb.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 6 цифр.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(22),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.whom.$model,expression:"$v.whom.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.whom)},attrs:{type:"text"},domProps:{value:e.$v.whom.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.whom,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.whom.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Кем выдан был документ?". ')]),e.$v.whom.minLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не менее 10 букв.")]),e.$v.whom.maxLength?e._e():a("div",{staticClass:"invalid-feedback"},[e._v("Не более 30 букв.")])]),a("div",{staticClass:"col-12 form-group"},[e._m(23),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.given.$model,expression:"$v.given.$model",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",class:{"is-invalid":e.validationStatus(e.$v.given)},attrs:{type:"date",id:"start",name:"trip-start",value:"2021-04-29",min:"1935-01-01",max:"2021-12-31"},domProps:{value:e.$v.given.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.given,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.given.required?e._e():a("div",{staticClass:"invalid-feedback"},[e._v(' Заполните поле "Дата выдачи документа". ')])]),e._m(24)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"form-control-lg"},[a("h1",[e._v("Атрибуты Формы")]),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Фамилия"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Имя"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg",attrs:{for:"fname"}},[e._v("Отчество"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg",attrs:{for:"start"}},[e._v("Дата рождения"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg",attrs:{for:"phone"}},[e._v("Номер телефона"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg",attrs:{for:"gender"}},[e._v("Пол"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Группа клиентов"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Лечащий врач"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("СМС-оповещение"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"form-control-lg"},[a("h1",[e._v("Адрес")]),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg",attrs:{for:"index"}},[e._v("Индекс"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Страна"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Область"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Город"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Улица"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Дом"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"form-control-lg"},[a("h1",[e._v("Паспорт")]),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Тип документа"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("option",{attrs:{value:""}},[a("article",{attrs:{id:"type"}},[e._v("Выберите тип документа")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Серия"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Номер"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg"},[e._v("Кем выдан"),a("span",{staticClass:"text-danger"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-form-label col-form-label-lg",attrs:{for:"start"}},[e._v("Дата выдачи"),a("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 form-group text-center"},[a("button",{staticClass:"btn btn-vue btn-lg col-4"},[e._v("Отправить")])])}],o=(a("b0c0"),a("b5ae")),c={name:"SignupForm",data:function(){return{fullname:"",name:"",fname:"",birth:"",tele:"",gender:"",clients:"",doctor:"",send:"",notsend:"",email:"",country:"",district:"",city:"",street:"",home:"",id:"",series:"",nb:"",whom:"",given:"",index:""}},validations:{fullname:{required:o["required"],minLength:Object(o["minLength"])(2),maxLength:Object(o["maxLength"])(40)},name:{required:o["required"],minLength:Object(o["minLength"])(2),maxLength:Object(o["maxLength"])(40)},fname:{required:o["required"],minLength:Object(o["minLength"])(2),maxLength:Object(o["maxLength"])(40)},birth:{required:o["required"]},tele:{required:o["required"],minLength:Object(o["minLength"])(11),maxLength:Object(o["maxLength"])(11)},gender:{required:o["required"]},clients:{required:o["required"]},doctor:"",send:"",notsend:"",email:"",country:"",district:"",city:{required:o["required"]},street:"",home:"",id:{required:o["required"]},series:{required:o["required"],minLength:Object(o["minLength"])(2),maxLength:Object(o["maxLength"])(4)},nb:{required:o["required"],minLength:Object(o["minLength"])(4),maxLength:Object(o["maxLength"])(6)},whom:{required:o["required"],minLength:Object(o["minLength"])(15),maxLength:Object(o["maxLength"])(40)},given:{required:o["required"]},index:{required:o["required"],minLength:Object(o["minLength"])(4),maxLength:Object(o["maxLength"])(6)}},methods:{resetData:function(){this.fullname="",this.name="",this.fname="",this.clients="",this.gender="",this.tele="",this.index="",this.birth="",this.data="",this.doctor="",this.email="",this.country="",this.district="",this.city="",this.street="",this.home="",this.index="",this.id="",this.series="",this.whom="",this.given="",this.nb=""},validationStatus:function(e){return"undefined"!=typeof e&&e.$error},submit:function(){this.$v.$touch(),this.$v.$pendding||this.$v.$error||(alert("Клиент успешно создан"),this.$v.$reset(),this.resetData())}}},m=c,d=(a("8afd"),a("2877")),v=Object(d["a"])(m,s,n,!1,null,null,null),u=v.exports,f={name:"App",components:{SignupForm:u}},p=f,$=(a("034f"),Object(d["a"])(p,r,l,!1,null,null,null)),g=$.exports,_=a("1dce"),h=a.n(_);i["a"].config.productionTip=!1,i["a"].config.devtools=!0,i["a"].use(h.a),new i["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,a){},"8afd":function(e,t,a){"use strict";a("e979")},e979:function(e,t,a){}});
//# sourceMappingURL=app.8f41aa1f.js.map