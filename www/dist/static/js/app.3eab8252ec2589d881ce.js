webpackJsonp([0],{"+/3q":function(e,t){},0:function(e,t){},"0+eF":function(e,t,s){e.exports=s.p+"static/img/math-formulas-678x381.5750013.jpg"},"04lK":function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"items",data:function(){return{items:[],sortBy:"perfis_id_perfis",sortDesc:!1,fields:[{key:"nome_user",label:"Nome",sortable:!0},{key:"username",label:"Username",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"perfis_id_perfis",label:"perfil"}]}},methods:{fetchUsers:function(e){this.$http.get("http://dbprojeto/api/users").then(function(e){var t=a()(e.body);this.items=JSON.parse(t),this.items=this.items[0],console.log(this.items)})}}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("b-table",{staticClass:"table",attrs:{"sort-by":e.sortBy,"sort-desc":e.sortDesc,items:e.fetchUsers,fields:e.fields,small:"",fixed:"",striped:"",responsive:""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"nome_user",fn:function(t){return[e._v("\r\n        "+e._s(e.items.nome_user)+"\r\n    ")]}}])})},staticRenderFns:[]};var n=s("VU/8")(o,i,!1,function(e){s("fYz2")},"data-v-14edf756",null);t.a=n.exports},"1/oy":function(e,t){},"3G21":function(e,t,s){e.exports=s.p+"static/img/kkkk1.48319e2.jpg"},"3dkZ":function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"UpdatePerfil",data:function(){return{alert:"",form:{preferencias:[],pref1:"",pref2:"",pref3:"",pref4:"",pref5:"",pref6:"",nome_user:"",username:"",foto:null,email:"",password_hash:"",descricao:"",dat_nasc:""}}},methods:{fetchUser:function(e){this.$http.get("http://dbprojeto/api/users/"+e).then(function(e){var t=a()(e.body);this.form=JSON.parse(t),this.form=this.form[0],console.log(this.form)})},onFileChanged:function(e){this.foto=e.target.files[0]},onSubmit:function(e){if(console.log(this.form.pref1.value),this.form.nome_user&&this.form.username&&this.form.email&&this.form.password_hash){var t={nome_user:this.form.nome_user,username:this.form.username,email:this.form.email,dat_nasc:this.form.dat_nasc,password_hash:this.form.password_hash,foto:this.form.foto.name,ficheiro:this.form.foto,descricao:this.user.descricao};this.$http.put("http://dbprojeto/api/users/update/"+this.$route.params.id_user,t).then(function(e){this.$router.push({path:"/",query:{alert:"Perfil atualizado"}})}),e.preventDefault()}else this.alert("Por favor preencha todos os campos");e.preventDefault()},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.nome_user="",this.form.username="",this.form.password_hash="",this.$refs.fileinput.reset(),this.form.preferencias=[],this.form.desc_user="",this.form.dat_nasc="",this.show=!1,this.$nextTick(function(){t.show=!0})}},created:function(){this.fetchUser(this.$route.params.id_user)},components:{alert:s("fSq5").a}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[e._m(0),e._v(" "),e.alert?s("alert",{attrs:{message:e.alert}}):e._e(),e._v(" "),s("div",[s("b-form",{staticClass:"form",on:{submit:e.onSubmit,reset:e.onReset}},[s("b-form-group",{attrs:{id:"nome_user",label:"Nome:","label-for":"nome_user"}},[s("b-form-input",{attrs:{id:"nome_user",type:"text",required:"",placeholder:"Insira o seu Nome:"},model:{value:e.form.nome_user,callback:function(t){e.$set(e.form,"nome_user",t)},expression:"form.nome_user"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"username",label:"Username:",required:"","label-for":"inputuser"}},[s("b-form-input",{attrs:{id:"username",type:"text",required:"",placeholder:"Insira o seu Username:"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"email",label:"E-mail:",required:"","label-for":"email_user"}},[s("b-form-input",{attrs:{id:"email",type:"text",required:"",placeholder:"Insira o seu E-mail:"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"password",label:"Palavra-passe:",required:"","label-for":"password"}},[s("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password_hash,callback:function(t){e.$set(e.form,"password_hash",t)},expression:"form.password_hash"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"ficheiroimg",label:"Fotografia do Utilizador:","label-for":"imagem_user"}},[s("b-form-file",{ref:"fileinput",attrs:{accept:".jpg, .png, .jpeg",state:Boolean(e.form.foto),placeholder:"Escolha um ficheiro"},on:{change:e.onFileChanged},model:{value:e.form.foto,callback:function(t){e.$set(e.form,"foto",t)},expression:"form.foto"}}),e._v(" "),s("div",{staticClass:"mt-3"},[e._v("Ficheiro selecionado: "+e._s(e.form.foto&&e.form.foto.name))])],1),e._v(" "),s("b-form-group",{attrs:{id:"datanasc",label:"Data de nascimento:","label-for":"data_nasc"}},[s("b-form-input",{attrs:{id:"datanasc",type:"text",placeholder:"YYYY-MM-DD",required:""},model:{value:e.form.dat_nasc,callback:function(t){e.$set(e.form,"dat_nasc",t)},expression:"form.dat_nasc"}})],1),e._v(" "),s("b-form-group"),e._v(" "),s("b-form-group",{attrs:{id:"preferencias",label:"Preferências Ciêntificas"}},[s("b-form-checkbox-group",{attrs:{stacked:"",id:"prefs"},model:{value:e.form.preferencias,callback:function(t){e.$set(e.form,"preferencias",t)},expression:"form.preferencias"}},[s("b-form-checkbox",{attrs:{value:"Fisica"},model:{value:e.form.pref1,callback:function(t){e.$set(e.form,"pref1",t)},expression:"form.pref1"}},[e._v("Física")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Quimica"},model:{value:e.form.pref2,callback:function(t){e.$set(e.form,"pref2",t)},expression:"form.pref2"}},[e._v("Quimica")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Biologia"},model:{value:e.form.pref3,callback:function(t){e.$set(e.form,"pref3",t)},expression:"form.pref3"}},[e._v("Biologia")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Matematica"},model:{value:e.form.pref4,callback:function(t){e.$set(e.form,"pref4",t)},expression:"form.pref4"}},[e._v("Matemática")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Robotica"},model:{value:e.form.pref5,callback:function(t){e.$set(e.form,"pref5",t)},expression:"form.pref5"}},[e._v("Robótica")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Geologia"},model:{value:e.form.pref6,callback:function(t){e.$set(e.form,"pref6",t)},expression:"form.pref6"}},[e._v("Geologia")])],1),e._v(" "),s("strong",[e._v(e._s(e.form.pref1))])],1),e._v(" "),s("b-form-group",{attrs:{id:"descricao",label:"Descrição","label-for":"descricao_user",placeholder:"Uma descrição do utilizador"}},[s("b-form-textarea",{attrs:{id:"desc_user",placeholder:"Escreva algo sobre si...",rows:3,"max-rows":6},model:{value:e.form.descricao,callback:function(t){e.$set(e.form,"descricao",t)},expression:"form.descricao"}})],1),e._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),s("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-auto"},[t("h2",[this._v("Perfil")])])}]};var n=s("VU/8")(o,i,!1,function(e){s("q2yh")},"data-v-d928936e",null);t.a=n.exports},"44Zz":function(e,t){},"4HdP":function(e,t){},"5LxE":function(e,t,s){e.exports=s.p+"static/img/matematica2.e552972.jpg"},"9M+g":function(e,t){},"9teF":function(e,t){},CTsD:function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"Forum",data:function(){return{areas:[],images:["biologia2","fisica","geologia","matematica3","quimica2","robotica"]}},methods:{fetchAreas:function(){this.$http.get("http://dbprojeto/api/areas").then(function(e){var t=a()(e.body);this.areas=JSON.parse(t),console.log(this.areas)})}},created:function(){this.fetchAreas()}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Forum"}},[r("h2",[e._v("Fórum")]),e._v(" "),e._l(e.areas,function(t,a){return r("div",{key:t,staticClass:"container"},[r("router-link",{attrs:{to:"forum/"+t.id_area}},[r("b-img",{staticClass:"image-forum",attrs:{fluid:"",center:"",src:s("eRck")("./"+e.images[a]+".jpg")}})],1),e._v(" "),r("div",{staticClass:"bottom-left"},[r("h3",[r("strong",[e._v(e._s(t.nome_area))])])])],1)})],2)},staticRenderFns:[]};var n=s("VU/8")(o,i,!1,function(e){s("4HdP")},"data-v-1a3d0de1",null);t.a=n.exports},DyKP:function(e,t,s){e.exports=s.p+"static/img/cropped-ciencia-b-1.9449b26.jpg"},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},M2Kl:function(e,t,s){e.exports=s.p+"static/img/geologia.79bcb9f.jpg"},M93x:function(e,t,s){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("router-view",[t("div",{attrs:{id:"app"}},[t("LandingPage")],1)])},staticRenderFns:[]};s("VU/8")({name:"App"},r,!1,function(e){s("TXSS")},null,null).exports},MEyz:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=s("7+uW"),r=(s("M93x"),s("/ocq")),a=s("8+8L"),o=s("TKn+"),i=s("04lK"),n=s("3dkZ"),u=s("xJsL"),c=s("OdmC"),l=s("gSTp"),m=s("TGRD"),f=s("CTsD"),d=s("RLLc"),p=s("tvHJ"),v=s("dIqY"),_=s("kmcC"),h=s("U1tr"),b=s("e6fC"),g=s("Jmt5"),x=(s.n(g),s("9M+g"));s.n(x);t.a.use(a.a),t.a.use(r.a),t.a.use(b.a),t.a.http.options.crossOrigin=!0;var $=new r.a({mode:"history",base:e,routes:[{path:"/login",component:u.a},{path:"/",component:_.a},{path:"/users",component:o.a},{path:"/usersv2",component:i.a},{path:"/add",component:c.a},{path:"/delete",component:m.a},{path:"/users/:id_user",component:h.a},{path:"/update/:id_user",component:l.a},{path:"/user/profile/:id_user",component:n.a},{path:"/register",component:v.a},{path:"/forum",component:f.a},{path:"/forum/:id_area",component:d.a},{path:"/forum/:id_area/thread/:id_post",component:p.a}]});new t.a({router:$,template:'\n    <div id="app">\n    <div>\n  \n  <b-navbar fixed="top" type="dark" variant="dark" toggleable="md">\n    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>\n    <b-collapse is-nav id="nav_collapse">\n      <b-navbar-nav>\n        \n        <b-nav-item v-bind:to="\'/\'">Home</b-nav-item>\n        <b-nav-item v-bind:to="\'/users\'">Utilizadores</b-nav-item>\n        <b-nav-item v-bind:to="\'/forum\'">Fórum</b-nav-item>\n        <b-nav-item-dropdown text="Dinis Rodrigues">\n          <b-dropdown-item v-bind:to="\'/user/profile/3\'">Perfil</b-dropdown-item>\n          <b-dropdown-item>Sair</b-dropdown-item>\n        </b-nav-item-dropdown> \n      </b-navbar-nav>\n     </b-collapse>\n    </b-navbar>    \n  </div>\n  <router-view></router-view>\n  </div>\n  '}).$mount("#app")}.call(t,"/")},OV2A:function(e,t,s){e.exports=s.p+"static/img/quimica3.4a49e69.jpg"},OdmC:function(e,t,s){"use strict";var r={name:"adduser",data:function(){return{user:{}}},methods:{addUser:function(e){if(this.user.nome_user&&this.user.username&&this.user.email&&this.user.password){var t={nome_user:this.user.nome_user,username:this.user.username,email:this.user.email,dat_nasc:this.user.data_nasc,password:this.user.password_hash,foto:this.user.foto,descricao:this.user.descricao};this.$http.post("http://dbprojeto/api/users/add",t).then(function(e){this.$router.push({path:"/users",query:{alert:"Utilizador Criado"}})}),e.preventDefault()}else alert("Por favor preencha todos os campos");e.preventDefault()}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add user"},[s("h2",[e._v("Add User")]),e._v(" "),s("form",{on:{submit:e.addUser}},[s("div",{staticClass:"form-group"},[s("label",[e._v("First Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.nome_user,expression:"user.nome_user"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.nome_user},on:{input:function(t){t.target.composing||e.$set(e.user,"nome_user",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Data de Nascimento")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.data_nasc,expression:"user.data_nasc"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Data de Nascimento"},domProps:{value:e.user.data_nasc},on:{input:function(t){t.target.composing||e.$set(e.user,"data_nasc",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Foto")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.foto,expression:"user.foto"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Foto"},domProps:{value:e.user.foto},on:{input:function(t){t.target.composing||e.$set(e.user,"foto",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Descrição")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.descricao,expression:"user.descricao"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descricao"},domProps:{value:e.user.descricao},on:{input:function(t){t.target.composing||e.$set(e.user,"descricao",t.target.value)}}})]),e._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Submit")])])])},staticRenderFns:[]};var o=s("VU/8")(r,a,!1,function(e){s("hdEe")},"data-v-e3f1066a",null);t.a=o.exports},RLLc:function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o=s("fSq5"),i={name:"Forum",data:function(){return{areas:[],infoArea:"",alert:"",form:{txt:"",title:""},posts:[],postsid:""}},methods:{fetchAreas:function(e){this.$http.get("http://dbprojeto/api/areas/"+e).then(function(e){var t=a()(e.body);this.areas=JSON.parse(t),this.areas=this.areas[0],this.infoArea=this.areas.nome_area})},fetchPosts:function(e){this.$http.get("http://dbprojeto/api/threads/"+e).then(function(e){var t=a()(e.body);this.posts=JSON.parse(t)})},addThread:function(e){if(this.form.title&&this.form.txt){var t={titulo:this.form.title,post:this.form.txt,id_area:this.areas.id_area};this.$http.post("http://dbprojeto/api/threads/add",t).then(function(e){this.$router.push({path:"/forum",query:{alert:"Thread Criado!"}})}),e.preventDefault()}else Object(o.a)("Por favor preencha todos os campos");e.preventDefault()}},created:function(){this.fetchPosts(this.$route.params.id_area),this.fetchAreas(this.$route.params.id_area)}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"forum"},[s("h2",[e._v(e._s(e.areas.nome_area))]),e._v(" "),s("ol",{staticClass:"breadcrumb"},[e._m(0),e._v(" "),s("li",{staticClass:"breadcrumb-item active"},[e._v(e._s(e.infoArea))])]),e._v(" "),e._l(e.posts,function(t){return s("div",{key:t,staticClass:"content"},[s("ul",{staticClass:"list-unstyled"},[s("b-media",{attrs:{tag:"li"}},[s("b-img",{staticClass:"image-color",attrs:{slot:"aside",blank:"","blank-color":"#bac",width:"64",alt:"placeholder"},slot:"aside"}),e._v(" "),s("router-link",{attrs:{to:"/forum/"+e.areas.id_area+"/thread/"+t.id_post}},[s("h5",{staticClass:"mt-0 mb-1"},[e._v(e._s(t.titulo))])]),e._v(" "),s("small",[e._v(e._s(t.data_post))])],1)],1)])}),e._v(" "),s("ul",{staticClass:"list-unstyled",attrs:{id:"two"}},[s("b-form",{on:{submit:e.addThread}},[s("b-form-group",{attrs:{id:"textarea1"}},[s("b-input",{attrs:{id:"input",type:"text",placeholder:"Título"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),s("b-form-textarea",{attrs:{placeholder:"Comece um tópico",rows:3,"max-rows":6},model:{value:e.form.txt,callback:function(t){e.$set(e.form,"txt",t)},expression:"form.txt"}}),e._v(" "),s("b-button",{attrs:{id:"submitbtn",type:"submit",variant:"outline-info"}},[e._v("Submeter")])],1)],1)],1)],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"breadcrumb-item"},[t("a",{attrs:{href:"/forum"}},[this._v("Fórum")])])}]};var u=s("VU/8")(i,n,!1,function(e){s("vF2t")},"data-v-edae17a8",null);t.a=u.exports},TGRD:function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"erase",data:function(){return{users:[]}},methods:{fetchUsers:function(){this.$http.delete("http://dbprojeto/api/users").then(function(e){var t=a()(e.body);this.users=JSON.parse(t)})}},created:function(){this.fetchUsers()}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"erase"},[s("h2",[e._v("Delete user")]),e._v(" "),s("table",[e._m(0),e._v(" "),s("tbody",e._l(e.users,function(t){return s("tr",[s("td",[e._v(e._s(t.nome_user))]),e._v(" "),s("td",[e._v(e._s(t.username))]),e._v(" "),s("td",[e._v(e._s(t.email))]),e._v(" "),s("td",[e._v(e._s(t.dat_nasc))]),e._v(" "),s("td",[e._v(e._s(t.foto))]),e._v(" "),s("td",[e._v(e._s(t.perfis_id_perfis))]),e._v(" "),s("td",[e._v(e._s(t.descricao))])])}))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Nome do Utilizador")]),e._v(" "),s("th",[e._v("Username")]),e._v(" "),s("th",[e._v("email")]),e._v(" "),s("th",[e._v("Data de Nascimento")]),e._v(" "),s("th",[e._v("foto")]),e._v(" "),s("th",[e._v("perfil de utilizador")]),e._v(" "),s("th",[e._v("descricao")])])])}]};var n=s("VU/8")(o,i,!1,function(e){s("l1fH")},"data-v-0b7fe3e0",null);t.a=n.exports},"TKn+":function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"users",data:function(){return{users:[],alert:"",filterInput:""}},methods:{fetchUsers:function(){this.$http.get("http://dbprojeto/api/users").then(function(e){var t=a()(e.body);this.users=JSON.parse(t)})},filterBy:function(e,t){return t=t.charAt(0).toUpperCase()+t.slice(1),e.filter(function(e){return e.username.indexOf(t)>-1})}},created:function(){this.$route.query.alert&&(this.alert=this.$route.query.alert),this.fetchUsers()},components:{alert:s("fSq5").a}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users"},[s("h2",[e._v("Users")]),e._v(" "),e.alert?s("alert",{attrs:{message:e.alert}}):e._e(),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filterInput,expression:"filterInput"}],staticClass:"form-control",attrs:{placeholder:"Digite o username"},domProps:{value:e.filterInput},on:{input:function(t){t.target.composing||(e.filterInput=t.target.value)}}}),s("br"),e._v(" "),s("b-button",{staticClass:"button-add",attrs:{variant:"outline-success",to:"/add"}},[e._v("Adicionar Utilizador")]),e._v(" "),s("table",{staticClass:"table table-striped table-responsive table-sm"},[e._m(0),e._v(" "),s("tbody",e._l(e.filterBy(e.users,e.filterInput),function(t){return s("tr",[s("td",[e._v(e._s(t.nome_user))]),e._v(" "),s("td",[e._v(e._s(t.username))]),e._v(" "),s("td",[e._v(e._s(t.email))]),e._v(" "),s("td",[e._v(e._s(t.perfis_id_perfis))]),e._v(" "),s("td",[s("b-button",{attrs:{variant:"outline-primary",to:"/users/"+t.id_user}},[e._v("Ver")])],1)])}))])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("Nome")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Username")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("E-mail")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Perfil")]),e._v(" "),s("th",{attrs:{scope:"col"}})])])}]};var n=s("VU/8")(o,i,!1,function(e){s("MEyz")},"data-v-0c2cb916",null);t.a=n.exports},TXSS:function(e,t){},TqWV:function(e,t){},U1tr:function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"userDetails",data:function(){return{user:[]}},methods:{fetchUser:function(e){this.$http.get("http://dbprojeto/api/users/"+e).then(function(e){var t=a()(e.body);this.user=JSON.parse(t),this.user=this.user[0],console.log(this.user)})},deleteUser:function(e){this.$http.delete("http://dbprojeto/api/users/delete/"+e).then(function(e){this.$router.push({path:"/users",query:{alert:"Utilizador Apagado"}})})}},created:function(){this.fetchUser(this.$route.params.id_user)}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"userDetails"},[s("h3",{staticClass:"page-header"},[e._v("Detalhes do Utilizador:")]),e._v(" "),s("b-button",{attrs:{variant:"outline-warning",to:"/update/"+e.user.id_user}},[e._v("Editar")]),e._v(" "),s("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){e.deleteUser(e.user.id_user)}}},[e._v("Apagar")]),e._v(" "),s("table",{staticClass:"table"},[e._m(0),e._v(" "),s("tbody",[s("tr",[s("td",[e._v(e._s(e.user.nome_user))]),e._v(" "),s("td",[e._v(e._s(e.user.username))]),e._v(" "),s("td",[e._v(e._s(e.user.email))]),e._v(" "),s("td",[e._v(e._s(e.user.dat_nasc))]),e._v(" "),s("td",[e._v(e._s(e.user.foto))]),e._v(" "),s("td",[e._v(e._s(e.user.perfis_id_perfis))]),e._v(" "),s("td",[e._v(e._s(e.user.descricao))]),e._v(" "),s("td",[e._v(e._s(e.user.preferencias))])])])]),e._v(" "),s("router-link",{attrs:{to:"/users"}},[e._v("Voltar")])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("Nome do Utilizador")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Username")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("E-mail")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Data de Nascimento")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Foto")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Perfil de Utilizador")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Descrição")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Preferencias")])])])}]};var n=s("VU/8")(o,i,!1,function(e){s("dnmh")},"data-v-5fea67a3",null);t.a=n.exports},dIqY:function(e,t,s){"use strict";var r={name:"Register",data:function(){return{form:{preferencias:[],pref1:"",pref2:"",pref3:"",pref4:"",pref5:"",pref6:"",nome_user:"",username:"",foto:null,email:"",password_hash:"",desc_user:"",data_nasc:""}}},methods:{onFileChanged:function(e){this.foto=e.target.files[0]},onSubmit:function(e){if(this.form.nome_user&&this.form.username&&this.form.email&&this.form.password_hash&&this.form.desc_user){var t={nome_user:this.form.nome_user,username:this.form.username,email:this.form.email,dat_nasc:this.form.data_nasc,password_hash:this.form.password_hash,foto:this.form.foto.name,ficheiro:this.form.foto,descricao:this.form.desc_user};this.$http.post("http://dbprojeto/api/user/register",t).then(this.$http.post("http://dbprojeto/api/upload",this.foto)).then(function(e){this.$router.push({path:"/",query:{alert:"Conta Criada"}})}),e.preventDefault()}else alert("Por favor preencha todos os campos");e.preventDefault()},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.nome_user="",this.form.username="",this.form.password_hash="",this.$refs.fileinput.reset(),this.form.preferencias=[],this.form.desc_user="",this.form.data_nasc="",this.form.status="",this.show=!1,this.$nextTick(function(){t.show=!0})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[e._m(0),e._v(" "),s("div",[s("b-form",{staticClass:"form",on:{submit:e.onSubmit,reset:e.onReset}},[s("b-form-group",{attrs:{id:"nome_user",label:"Nome:","label-for":"nome_user"}},[s("b-form-input",{attrs:{id:"nome_user",type:"text",required:"",placeholder:"Insira o seu Nome"},model:{value:e.form.nome_user,callback:function(t){e.$set(e.form,"nome_user",t)},expression:"form.nome_user"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"username",label:"Username:",required:"","label-for":"inputuser"}},[s("b-form-input",{attrs:{id:"username",type:"text",required:"",placeholder:"Insira o seu Username"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"email",label:"E-mail:",required:"","label-for":"email_user"}},[s("b-form-input",{attrs:{id:"email",type:"text",required:"",placeholder:"Insira o seu E-mail"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"password",label:"Palavra-passe",required:"","label-for":"password"}},[s("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password_hash,callback:function(t){e.$set(e.form,"password_hash",t)},expression:"form.password_hash"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"ficheiroimg",label:"Fotografia do Utilizador","label-for":"imagem_user"}},[s("b-form-file",{ref:"fileinput",attrs:{accept:".jpg, .png, .jpeg",state:Boolean(e.form.foto),placeholder:"Escolha um ficheiro"},on:{change:e.onFileChanged},model:{value:e.form.foto,callback:function(t){e.$set(e.form,"foto",t)},expression:"form.foto"}}),e._v(" "),s("div",{staticClass:"mt-3"},[e._v("Ficheiro selecionado: "+e._s(e.form.foto&&e.form.foto.name))])],1),e._v(" "),s("b-form-group",{attrs:{id:"datanasc",label:"Data de nascimento","label-for":"data_nasc"}},[s("b-form-input",{attrs:{id:"datanasc",type:"text",placeholder:"YYYY-MM-DD",required:""},model:{value:e.form.data_nasc,callback:function(t){e.$set(e.form,"data_nasc",t)},expression:"form.data_nasc"}})],1),e._v(" "),s("b-form-group"),e._v(" "),s("b-form-group",{attrs:{id:"preferencias",label:"Preferências Ciêntificas"}},[s("b-form-checkbox-group",{attrs:{stacked:"",id:"prefs"},model:{value:e.form.preferencias,callback:function(t){e.$set(e.form,"preferencias",t)},expression:"form.preferencias"}},[s("b-form-checkbox",{attrs:{value:"Fisica"},model:{value:e.form.pref1,callback:function(t){e.$set(e.form,"pref1",t)},expression:"form.pref1"}},[e._v("Física")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Quimica"},model:{value:e.form.pref2,callback:function(t){e.$set(e.form,"pref2",t)},expression:"form.pref2"}},[e._v("Quimica")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Biologia"},model:{value:e.form.pref3,callback:function(t){e.$set(e.form,"pref3",t)},expression:"form.pref3"}},[e._v("Biologia")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Matematica"},model:{value:e.form.pref4,callback:function(t){e.$set(e.form,"pref4",t)},expression:"form.pref4"}},[e._v("Matemática")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Robotica"},model:{value:e.form.pref5,callback:function(t){e.$set(e.form,"pref5",t)},expression:"form.pref5"}},[e._v("Robótica")]),e._v(" "),s("b-form-checkbox",{attrs:{value:"Geologia"},model:{value:e.form.pref6,callback:function(t){e.$set(e.form,"pref6",t)},expression:"form.pref6"}},[e._v("Geologia")])],1)],1),e._v(" "),s("b-form-group",{attrs:{id:"descricao",label:"Descrição","label-for":"descricao_user",placeholder:"Uma descrição do utilizador"}},[s("b-form-textarea",{attrs:{id:"desc_user",placeholder:"Escreva algo sobre si...",rows:3,"max-rows":6},model:{value:e.form.desc_user,callback:function(t){e.$set(e.form,"desc_user",t)},expression:"form.desc_user"}})],1),e._v(" "),s("b-form-group",[s("b-form-checkbox",{attrs:{id:"checkbox1",value:"accepted","unchecked-value":"not_accepted"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("\n    Eu aceito os termos de uso.\n  ")])],1),e._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),s("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-auto"},[t("h2",[this._v("Registo")])])}]};var o=s("VU/8")(r,a,!1,function(e){s("gBDd")},"data-v-cbc7b450",null);t.a=o.exports},dnmh:function(e,t){},eRck:function(e,t,s){var r={"./biologia.jpg":"euGH","./biologia2.jpg":"pgfB","./cropped-ciencia-b-1.jpg":"DyKP","./fisica.jpg":"mV9S","./geologia.jpg":"M2Kl","./kkkk1.jpg":"3G21","./matematica2.jpg":"5LxE","./matematica3.jpg":"tt+Q","./math-formulas-678x381.jpg":"0+eF","./quimica.jpg":"l5qf","./quimica2.jpg":"z9kv","./quimica3.jpg":"OV2A","./robotica.jpg":"whid"};function a(e){return s(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="eRck"},euGH:function(e,t,s){e.exports=s.p+"static/img/biologia.bfe15ec.jpg"},fSq5:function(e,t,s){"use strict";var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("b-alert",{attrs:{variant:"warning",fade:"",show:e.showDismissibleAlert,dismissible:""},on:{dismissed:function(t){e.showDismissibleAlert=!1}}},[e._v("\r\n  "+e._s(e.message)+"\r\n")])},staticRenderFns:[]};var a=s("VU/8")({name:"alert",props:["message"],data:function(){return{showDismissibleAlert:!0}}},r,!1,function(e){s("TqWV")},"data-v-615986d9",null);t.a=a.exports},fYz2:function(e,t){},gBDd:function(e,t){},gSTp:function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o={name:"updateUser",data:function(){return{user:{},alert:""}},methods:{fetchUser:function(e){this.$http.get("http://dbprojeto/api/users/"+e).then(function(e){var t=a()(e.body);this.user=JSON.parse(t),this.user=this.user[0],console.log(this.user)})},updateUser:function(e){if(this.user.nome_user&&this.user.username&&this.user.email){var t={nome_user:this.user.nome_user,username:this.user.username,email:this.user.email,dat_nasc:this.user.dat_nasc,foto:this.user.foto,perfis_id_perfis:this.user.perfis_id_perfis,descricao:this.user.descricao};this.$http.put("http://dbprojeto/api/users/update/"+this.$route.params.id_user,t).then(function(e){this.$router.push({path:"/users",query:{alert:"Utilizador Modificado"}})}),e.preventDefault()}else this.alert="Por favor preencha todos os campos.";e.preventDefault()}},created:function(){this.fetchUser(this.$route.params.id_user)},components:{alert:s("fSq5").a}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"update"},[s("h2",[e._v("Atualizar Utilizador")]),e._v(" "),e.alert?s("alert",{attrs:{message:e.alert}}):e._e(),e._v(" "),s("form",{on:{submit:e.updateUser}},[s("div",{staticClass:"form-group"},[s("label",[e._v("First Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.nome_user,expression:"user.nome_user"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.nome_user},on:{input:function(t){t.target.composing||e.$set(e.user,"nome_user",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Data de Nascimento")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.dat_nasc,expression:"user.dat_nasc"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Data de Nascimento"},domProps:{value:e.user.dat_nasc},on:{input:function(t){t.target.composing||e.$set(e.user,"dat_nasc",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Foto")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.foto,expression:"user.foto"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Foto"},domProps:{value:e.user.foto},on:{input:function(t){t.target.composing||e.$set(e.user,"foto",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Perfil")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.perfis_id_perfis,expression:"user.perfis_id_perfis"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Perfil"},domProps:{value:e.user.perfis_id_perfis},on:{input:function(t){t.target.composing||e.$set(e.user,"perfis_id_perfis",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Descrição")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.descricao,expression:"user.descricao"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descrição"},domProps:{value:e.user.descricao},on:{input:function(t){t.target.composing||e.$set(e.user,"descricao",t.target.value)}}})]),e._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Submit")])])],1)},staticRenderFns:[]};var n=s("VU/8")(o,i,!1,function(e){s("44Zz")},"data-v-bb990bde",null);t.a=n.exports},hdEe:function(e,t){},kmcC:function(e,t,s){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"landingpage"},[this._m(0),this._v(" "),this._m(1),this._v(" "),t("b-img",{staticClass:"image-home",attrs:{fluid:"",center:"","blank-color":"#bbb",src:s("3G21")}}),this._v(" "),t("div",{staticClass:"mx-auto-button"},[t("b-button",{staticClass:"al",attrs:{variant:"outline-info",to:"/login"}},[this._v("Log In/Registar")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-auto",staticStyle:{color:"#f1c761"}},[t("h2",[t("b",[this._v("Fórum Ciência Viva")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h6",{staticStyle:{color:"darkgrey","margin-left":"10%"}},[t("strong",[this._v("A ciência em diálogo aberto.")])])}]};var a=s("VU/8")({name:"Landingpage",data:function(){return{}}},r,!1,function(e){s("9teF")},"data-v-7eb90c50",null);t.a=a.exports},l1fH:function(e,t){},l5qf:function(e,t,s){e.exports=s.p+"static/img/quimica.e9ed586.jpg"},mV9S:function(e,t,s){e.exports=s.p+"static/img/fisica.7358398.jpg"},pgfB:function(e,t,s){e.exports=s.p+"static/img/biologia2.c5472c5.jpg"},q2yh:function(e,t){},"tt+Q":function(e,t,s){e.exports=s.p+"static/img/matematica3.972913c.jpg"},tvHJ:function(e,t,s){"use strict";var r=s("mvHQ"),a=s.n(r),o=s("fSq5"),i={name:"Post",data:function(){return{areas:[],infoArea:"",infoPost:"",alert:"",form:{txt:""},posts:[]}},methods:{fetchAreas:function(e){this.$http.get("http://dbprojeto/api/areas/"+e).then(function(e){var t=a()(e.body);this.areas=JSON.parse(t),this.areas=this.areas[0],this.infoArea=this.areas.nome_area})},fetchPosts:function(e){this.$http.get("http://dbprojeto/api/thread/"+e).then(function(e){var t=a()(e.body);this.posts=JSON.parse(t),console.log(this.posts),this.infoPost=this.posts[0].titulo,console.log(this.infoPost)})},addReply:function(e){if(this.form.txt){var t={post:this.form.txt,id_post:this.posts.id_post};this.$http.post("http://dbprojeto/api/threads/reply",t).then(function(e){this.$router.push({path:"/forum",query:{alert:"Resposta Enviada!"}})}),e.preventDefault()}else Object(o.a)("Por favor preencha todos os campos");e.preventDefault()}},created:function(){this.fetchPosts(this.$route.params.id_post),this.fetchAreas(this.$route.params.id_area)}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"post_detail"},[s("h2",[e._v(e._s(e.areas.nome_area))]),e._v(" "),s("ol",{staticClass:"breadcrumb"},[e._m(0),e._v(" "),s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/forum"}},[e._v(e._s(e.infoArea))])]),e._v(" "),s("li",{staticClass:"breadcrumb-item active"},[e._v(e._s(e.infoPost))])]),e._v(" "),s("b-media",e._l(e.posts,function(t){return s("div",{key:t,staticClass:"content"},[s("b-media",[s("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"placeholder"},slot:"aside"}),e._v(" "),s("h5",{staticClass:"mt-0"},[e._v(e._s(t.titulo))]),e._v(" "),s("p",[e._v("\r\n      "+e._s(t.post)+"\r\n    ")])],1)],1)})),e._v(" "),s("ul",{staticClass:"list-unstyled",attrs:{id:"two"}},[s("b-form",{on:{submit:e.addReply}},[s("b-form-group",{attrs:{id:"textarea1"}},[s("b-form-textarea",{attrs:{placeholder:"Escreva uma resposta",rows:3,"max-rows":6},model:{value:e.form.txt,callback:function(t){e.$set(e.form,"txt",t)},expression:"form.txt"}}),e._v(" "),s("b-button",{attrs:{id:"submitbtn",type:"submit",variant:"outline-info"}},[e._v("Submeter")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"breadcrumb-item"},[t("a",{attrs:{href:"/forum"}},[this._v("Fórum")])])}]};var u=s("VU/8")(i,n,!1,function(e){s("yoaF")},"data-v-27fea8b4",null);t.a=u.exports},vF2t:function(e,t){},whid:function(e,t,s){e.exports=s.p+"static/img/robotica.a8df019.jpg"},xJsL:function(e,t,s){"use strict";var r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("h2",[e._v("Log in")]),e._v(" "),s("div",{staticClass:"login-form"},[s("b-form",{attrs:{inline:""}},[s("label",{staticClass:"sr-only",attrs:{for:"username"}},[e._v("Name")]),e._v(" "),s("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"usernamelogin",placeholder:"Username"}}),e._v(" "),s("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Username")]),e._v(" "),s("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{left:"@"}},[s("b-input",{attrs:{id:"loginpassword",type:"password",placeholder:"Palavra-Passe"}})],1),e._v(" "),s("b-button",{attrs:{type:"submit",variant:"outline-info"}},[e._v("Entrar")])],1),e._v(" "),s("br"),e._v(" "),s("p",[e._v("Ainda não tem conta? "),s("b-link",{attrs:{to:"/register"}},[e._v("Registe-se")]),e._v(".")],1)],1)])},staticRenderFns:[]};var a=s("VU/8")({name:"Login",data:function(){return{}}},r,!1,function(e){s("+/3q")},"data-v-6e8e5fb4",null);t.a=a.exports},yoaF:function(e,t){},z9kv:function(e,t,s){e.exports=s.p+"static/img/quimica2.c163690.jpg"},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3eab8252ec2589d881ce.js.map