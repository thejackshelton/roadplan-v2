/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q-B-7LzFOP.js",[34],["nMziT77PL7c"]],["q-B-N7rbUr.js",[26],["pOSVX0sxo5g"]],["q-B5PCW6P5.js",[31],["1f2Em7FEZjk"]],["q-B8nS6dlJ.js",[34],["ArWQvjC1jos"]],["q-BAqFGEMi.js",[31],["8vNuXBze3QM"]],["q-BDfhs9ob.js",[34],["zzz0uHx6HJU"]],["q-BGKwt9Ol.js",[71],["PZgEfHP8lbk"]],["q-BPNbpfIM.js",[31],["3cYeyI9y820"]],["q-BPmy9_Xc.js",[34],["p7cAKeKKc0g"]],["q-BR_iO86E.js",[31]],["q-BU7qumIZ.js",[31],["bZNm5KMOQ0E"]],["q-BUFqyBG4.js",[53],["cD1J81Hwhnk"]],["q-BUt3EMaH.js",[34],["GA00qqsED1Q"]],["q-BV94psxR.js",[39],["KSpPcSuaVL8"]],["q-BXZWJhU_.js",[36],["9TV0gWsUk0s"]],["q-BZLGpEP5.js",[31],["prdYtIB9ODU"]],["q-B_Ij3liB.js",[44],["4w6eFp5J91s"]],["q-BcOTFb5-.js",[34],["LpOLSHD2inw"]],["q-Bncglp9i.js",[38],["J4Mtdt5IMP0"]],["q-BzSZgKLr.js",[34],["FB8K74JeDHA"]],["q-CDS00IZn.js",[31]],["q-CFxD8L_b.js",[34],["maVrSsQhWuA"]],["q-CG5T7iFe.js",[16],["wd2wgCWxeXk"]],["q-CG6Dc4jp.js",[]],["q-CHxDtX7n.js",[16],["Be9DMNq7zb8"]],["q-CU17xixQ.js",[31],["hvTqhuMOiD0"]],["q-CZJZBu0M.js",[53],["jU5cjTL68z4"]],["q-CbYKZi40.js",[3],["jJoqoZLlGVs"]],["q-Cg1AdFQC.js",[2]],["q-CgKteybh.js",[34],["00Crztcy1y8"]],["q-Cl1qwDo9.js",[34],["ontjkC3lkeI"]],["q-ClSRqbPg.js",[31],["tchn45rOtfs"]],["q-Ctm19_V6.js",[34],["nrqYTbDBmAY"]],["q-Cu9Su6G1.js",[],["nvIrZB5h10M"]],["q-D1iOw2Ye.js",[31],["Xetx7sn0yjw"]],["q-D2z7YFgl.js",[2,38,71],["IV8Zm5UxUgM"]],["q-D4kzdbiX.js",[2]],["q-D5aya-ru.js",[64],["z3sNOil0E9U"]],["q-D6wa76I2.js",[38],["K0ADDb0LSzM"]],["q-DAFseFY2.js",[34],["HOxeI6HRv04"]],["q-DB2-CIZj.js",[39],["jfObxD13NHo"]],["q-DBzT9CRj.js",[],["HkmBRwr9Hwo"]],["q-DDdhshQq.js",[28],["ONMrsg3G0LA"]],["q-DJecMXni.js",[3],["XGQ07kJFTQM"]],["q-DLjl_CcU.js",[38],["gxCoVRbsrf4"]],["q-DSUUY2tC.js",[31],["CwhX2KvTlzI"]],["q-DYve9VsR.js",[2]],["q-DcXpn3bI.js",[26],["OvbSPv52G2U"]],["q-DegkvDEx.js",[3],["jto9zz07f6g"]],["q-DhStM0vz.js",[31],["sB08dtTLKl0"]],["q-DhrgAUhK.js",[31],["B91QUZnh2Pc"]],["q-DnLAyOm3.js",[67],["87MQUuhRNdo"]],["q-DuffeZUq.js",[31],["fCkJOkBysDA"]],["q-DuhgoZb3.js",[2],["uOwIq53Bkeg"]],["q-DwOCtJJ4.js",[39],["qCbxkIj3iXA"]],["q-F66fGstR.js",[31]],["q-FHWXORsY.js",[3],["kJeX1P768eA"]],["q-JKs5F4E0.js",[53],["amsIh0v2qXw"]],["q-LuSzF8mJ.js",[8],["WoA6RoH7UvE"]],["q-PpnhLbZC.js",[31]],["q-RA1ybRd_.js",[34],["jitb0E7FCG8"]],["q-Rpce9Pws.js",[3],["kP2nXK8Qa9A"]],["q-SSRcVJ2B.js",[]],["q-TC9_nBAA.js",[31],["BgkIm0omKLU"]],["q-f591mrDi.js",[44],["4TgLHMDLICQ"]],["q-h3LFyJyP.js",[34],["EQXLCSJuGX4"]],["q-hLm_CFN1.js",[31],["N5aLeRD6maw"]],["q-hUrdKCRe.js",[53],["8Ntih0F11GA"]],["q-jjsAIp6o.js",[44],["nwE9yPYhSRc"]],["q-kRklc4LR.js",[2],["GDxxHPdb74Y"]],["q-t6QSOFBQ.js",[31],["yBeGiROfxYQ"]]];
const libraryBundleIds=[53];
const linkBundles=[[/^\/$/,[2,18,28,38,43,70,64,10,20]],[/^\/404\.html\/?$/,[71,9,15,40,56,6]],[/^\/docs\/getting-started\/?$/,[71,9,15,40,29]],[/^\/demo\/?$/,[2,18,28,38,43,70,64,47]],[/^\/docs\/?$/,[71,9,15,40,37]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
