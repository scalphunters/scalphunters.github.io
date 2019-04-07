// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('blog_project_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('ajax.core');
goog.require('hickory.core');
goog.require('hickory.select');
if((typeof blog_project_cljs !== 'undefined') && (typeof blog_project_cljs.core !== 'undefined') && (typeof blog_project_cljs.core.app_state !== 'undefined')){
} else {
blog_project_cljs.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$post_DASH_list,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$current_DASH_path,"/images/"], null));
}
blog_project_cljs.core.current_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
blog_project_cljs.core.handler = (function blog_project_cljs$core$handler(p__23859){
var vec__23860 = p__23859;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23860,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23860,(1),null);
if(cljs.core.truth_(ok)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(blog_project_cljs.core.app_state,cljs.core.assoc,cljs.core.cst$kw$post_DASH_list,response);

return console.log(response);
} else {
return console.error("Error");
}
});
blog_project_cljs.core.doc_handler = (function blog_project_cljs$core$doc_handler(p__23863){
var vec__23864 = p__23863;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23864,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23864,(1),null);
if(cljs.core.truth_(ok)){
var hdoc = cljs.core.second(hickory.core.as_hiccup(hickory.core.parse(response)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(blog_project_cljs.core.current_doc,cljs.core.assoc,cljs.core.cst$kw$body,hdoc);

return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hdoc));
} else {
return console.error(response);
}
});
blog_project_cljs.core.doc_handler2 = (function blog_project_cljs$core$doc_handler2(p__23867){
var vec__23868 = p__23867;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23868,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23868,(1),null);
if(cljs.core.truth_(ok)){
var hdoc = response;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(blog_project_cljs.core.current_doc,cljs.core.assoc,cljs.core.cst$kw$body,hdoc);

return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hdoc));
} else {
return console.error(response);
}
});
blog_project_cljs.core.doc_handler3 = (function blog_project_cljs$core$doc_handler3(p__23871){
var vec__23872 = p__23871;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(1),null);
if(cljs.core.truth_(ok)){
var hdoc = clojure.string.replace(response,/<head>/,["<head><base target='_blank' href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(blog_project_cljs.core.app_state))),"'"].join(''));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(blog_project_cljs.core.current_doc,cljs.core.assoc,cljs.core.cst$kw$body,hdoc);
} else {
return console.error(response);
}
});
blog_project_cljs.core.get_post_list = (function blog_project_cljs$core$get_post_list(){
var G__23875 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,"/post-list.json",cljs.core.cst$kw$handler,blog_project_cljs.core.handler,cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$format,(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$response_DASH_format,(function (){var G__23876 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyword_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__23876) : ajax.core.json_response_format.call(null,G__23876));
})()], null);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__23875) : ajax.core.ajax_request.call(null,G__23875));
});
blog_project_cljs.core.get_doc = (function blog_project_cljs$core$get_doc(address){
console.log(address);

var G__23877 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$uri,address,cljs.core.cst$kw$handler,blog_project_cljs.core.doc_handler3,cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null))], null);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__23877) : ajax.core.ajax_request.call(null,G__23877));
});
blog_project_cljs.core.header = (function blog_project_cljs$core$header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,"About"], null)], null)," | ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,"Items"], null)], null)], null);
});
blog_project_cljs.core.footer = (function blog_project_cljs$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"2019 Sentinel Holdings"], null);
});
blog_project_cljs.core.item_page = (function blog_project_cljs$core$item_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4523__auto__ = (function blog_project_cljs$core$item_page_$_iter__23878(s__23879){
return (new cljs.core.LazySeq(null,(function (){
var s__23879__$1 = s__23879;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__23879__$1);
if(temp__5720__auto__){
var s__23879__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23879__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23879__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23881 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23880 = (0);
while(true){
if((i__23880 < size__4522__auto__)){
var post = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23880);
cljs.core.chunk_append(b__23881,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__23880,post,c__4521__auto__,size__4522__auto__,b__23881,s__23879__$2,temp__5720__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(blog_project_cljs.core.app_state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"dir")),"/"].join(''));

return blog_project_cljs.core.get_doc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"dir")),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"filename"))].join(''));
});})(i__23880,post,c__4521__auto__,size__4522__auto__,b__23881,s__23879__$2,temp__5720__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"title")], null)], null));

var G__23882 = (i__23880 + (1));
i__23880 = G__23882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23881),blog_project_cljs$core$item_page_$_iter__23878(cljs.core.chunk_rest(s__23879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23881),null);
}
} else {
var post = cljs.core.first(s__23879__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (post,s__23879__$2,temp__5720__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(blog_project_cljs.core.app_state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"dir")),"/"].join(''));

return blog_project_cljs.core.get_doc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"dir")),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"filename"))].join(''));
});})(post,s__23879__$2,temp__5720__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"title")], null)], null),blog_project_cljs$core$item_page_$_iter__23878(cljs.core.rest(s__23879__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$post_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(blog_project_cljs.core.app_state)));
})()], null)], null);
});
blog_project_cljs.core.home_page = (function blog_project_cljs$core$home_page(){
var page = cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$route));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog_project_cljs.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog_project_cljs.core.item_page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(blog_project_cljs.core.current_doc))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog_project_cljs.core.footer], null)], null)], null);
});
blog_project_cljs.core.mount_root = (function blog_project_cljs$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog_project_cljs.core.home_page], null),document.getElementById("app"));
});
blog_project_cljs.core.init_BANG_ = (function blog_project_cljs$core$init_BANG_(){
blog_project_cljs.core.mount_root();

return blog_project_cljs.core.get_post_list();
});
