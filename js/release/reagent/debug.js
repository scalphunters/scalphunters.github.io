// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25841__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25842__i = 0, G__25842__a = new Array(arguments.length -  0);
while (G__25842__i < G__25842__a.length) {G__25842__a[G__25842__i] = arguments[G__25842__i + 0]; ++G__25842__i;}
  args = new cljs.core.IndexedSeq(G__25842__a,0,null);
} 
return G__25841__delegate.call(this,args);};
G__25841.cljs$lang$maxFixedArity = 0;
G__25841.cljs$lang$applyTo = (function (arglist__25843){
var args = cljs.core.seq(arglist__25843);
return G__25841__delegate(args);
});
G__25841.cljs$core$IFn$_invoke$arity$variadic = G__25841__delegate;
return G__25841;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25844__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25845__i = 0, G__25845__a = new Array(arguments.length -  0);
while (G__25845__i < G__25845__a.length) {G__25845__a[G__25845__i] = arguments[G__25845__i + 0]; ++G__25845__i;}
  args = new cljs.core.IndexedSeq(G__25845__a,0,null);
} 
return G__25844__delegate.call(this,args);};
G__25844.cljs$lang$maxFixedArity = 0;
G__25844.cljs$lang$applyTo = (function (arglist__25846){
var args = cljs.core.seq(arglist__25846);
return G__25844__delegate(args);
});
G__25844.cljs$core$IFn$_invoke$arity$variadic = G__25844__delegate;
return G__25844;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
