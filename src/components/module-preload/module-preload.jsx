import { component$, sync$, useOnWindow } from '@qwik.dev/core'


export const ModulePreload = component$(() => {
  useOnWindow(
    'load',
    sync$(async()=>{window.requestIdleCallback||(window.requestIdleCallback=function(t,e){let n=e||{},r=n.timeout||1,a=performance.now();return setTimeout(function(){t({get didTimeout(){return!n.timeout&&performance.now()-a-1>r},timeRemaining:function(){return Math.max(0,1+(performance.now()-a))}})},1)});let t=async()=>{let t=document.querySelector('script[type="qwik/state"]'),e=document.querySelector('script[q\\:type="prefetch-bundles"]');if(!t?.textContent)return;let n=await JSON.parse(t.textContent),r=new Set;if(JSON.stringify(n).replace(/q-[^"]+?\.js/g,t=>(r.add(t),t)),e?.textContent){let a=e.textContent,i=a.match(/\["prefetch","\/build\/","(.*?)"\]/);i&&i[1]&&i[1].split('","').forEach(t=>{t.startsWith("q-")&&r.add(t)})}r.forEach(t=>{let e=document.createElement("link");e.rel="modulepreload",e.as="script",e.href="/build/"+t,document.head.appendChild(e)})};await requestIdleCallback(t)}),
  )

  return <></>
})
