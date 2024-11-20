import{_ as o,a as _}from"./q-Cl1qwDo9.js";import{b as r,q as s,o as u,v as d,d as l,i as p,j as v,_hW as m}from"./q-Cu9Su6G1.js";const h=`// This code is the actual code that is running in the counter below 👇

import { component$, useSignal } from "@qwik.dev/core";

export default component$(() => {
  const counter = useSignal(0);
  return (
    <div class="flex flex-col items-center">
      <h1 class="mb-4 text-4xl font-bold ">{counter.value}</h1>
      <button
        onClick$={() => counter.value++}
        class="rounded border-2 px-6 py-2 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
      >
        Increment
      </button>
    </div>
  );
});
`,b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),S=Object.assign({"/src/routes/demo/snippets/Counter.tsx":b}),j=r(s(()=>o(()=>Promise.resolve().then(()=>x),void 0),"s_hvTqhuMOiD0")),g=r(s(()=>o(()=>import("./q-f591mrDi.js"),[]),"s_4TgLHMDLICQ")),f=e=>{const t=_(),n=e.name.endsWith(".tsx")||e.name.endsWith(".ts")||e.name.endsWith(".css")?"":".tsx",a=`/src/routes${t.url.pathname}snippets/${e.name}${n}`,i=u();return d(s(()=>o(()=>Promise.resolve().then(()=>P),void 0),"s_OvbSPv52G2U",[i,a])),l("div",null,{class:"shadow-3xl mb-6 rounded-md border shadow-lg"},l(g,null,{code:p(c=>c.value||"",[i])},null,3,"8W_0"),1,"8W_1")},x=Object.freeze(Object.defineProperty({__proto__:null,s_hvTqhuMOiD0:f},Symbol.toStringTag,{value:"Module"})),O=async()=>{const[e,t]=v(),n=S[t];e.value=n.default},P=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_OvbSPv52G2U:O},Symbol.toStringTag,{value:"Module"}));export{j as C,O as s,f as s_hvTqhuMOiD0};
