define(["jquery"],function(a){"use strict";var b={options:{data:{contact:null},selectCallback:function(a){},matchings:[{name:"name",content:"Name"},{name:"id",disabled:!0},{name:"children",disabled:!0},{name:"parent",disabled:!0}]},translations:{title:"sulu_article.category-selection-overlay.title"},templates:{skeleton:['<div class="grid">','   <div class="grid-row">','       <div class="grid-col-12 category-selection-list"/>',"   </div>","</div>"].join("")}};return{defaults:b,initialize:function(){var b=a("<div/>");this.$el.append(b),this.data=this.options.data,this.sandbox.start([{name:"overlay@husky",options:{el:b,instanceName:"category-selection",openOnStart:!0,removeOnClose:!0,skin:"medium",slides:[{title:this.translations.title,data:a(this.templates.skeleton({translations:this.translations})),okCallback:this.okCallbackOverlay.bind(this)}]}}]),this.sandbox.once("husky.overlay.category-selection.opened",function(){this.sandbox.start([{name:"datagrid@husky",options:{el:b.find(".category-selection-list"),instanceName:"category-selection",url:"/admin/api/categories?locale="+this.options.locale+"&flat=true&sortBy=name&sortOrder=asc",resultKey:"categories",sortable:!1,selectedCounter:!1,preselected:this.options.data.category?[this.options.data.category.id]:[],paginationOptions:{dropdown:{limit:20}},childrenPropertyName:"hasChildren",viewOptions:{table:{cropContents:!1,noItemsText:"sulu.category.no-categories-available",showHead:!1,cssClass:"white-box",selectItem:{type:"radio",inFirstCell:!0}}},matchings:this.options.matchings}}])}.bind(this))},okCallbackOverlay:function(){this.sandbox.emit("husky.datagrid.category-selection.items.get-selected",function(a,b){b.length>0&&(this.data.categoryId=a[0],this.data.categoryItem=b[0]),this.options.selectCallback(this.data),this.sandbox.stop()}.bind(this),!0)}}});