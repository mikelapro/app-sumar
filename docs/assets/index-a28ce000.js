(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const f=()=>{console.log("app sumar ok!")};console.log("Sumar ok!");function p(e,o){return console.log("Button sumar ok!"),e=parseFloat(e),o=parseFloat(o),e+o}console.log("Limpiar formulario ok!");function y(e,o,l,n,t,r){console.log("Button limpiar formulario ok!"),e.value="",o.value="",n.disabled=!1,r.disabled=!0,l.style.display="none",t.innerHTML="",t.style.display="none"}console.log("Validar ok!");function g(e,o,l){return isNaN(e)||e.trim()==""||e==null||e==null?(l.innerText="El primer número debe ser un número válido.",l.style.display="block",!1):isNaN(o)||o.trim()==""||o==null||o==null?(l.innerText="El segundo número debe ser un número válido.",l.style.display="block",!1):!0}function b(){let e=localStorage.getItem("contador-sumas");e==null?e=1:e++,localStorage.setItem("contador-sumas",e)}f();const i=document.querySelector("#button-sumar"),u=document.querySelector("#button-limpiar-formulario"),d=document.querySelector("#input-numero1"),m=document.querySelector("#input-numero2"),a=document.querySelector("#mensaje-error"),c=document.querySelector("#label-resultado");i.addEventListener("click",()=>{let e=d.value,o=m.value;if(g(e,o,a)==!0){let l=p(e,o);c.innerText=l,c.style.display="block",a.style.display="none",i.disabled=!0,u.disabled=!1,b()}});u.addEventListener("click",()=>{y(d,m,c,i,a,u)});