import{d as e,g as t,t as n,yt as r}from"./art-CIoq3Xcy.js";import{n as i}from"./act1-BMJrq3BK.js";var a={vanguard:`Vanguard`,hunter:`Forestman`,arcanist:`Keeper`},o=e=>{let t=Math.floor((Date.now()-e)/864e5);return t<=0?`today`:t===1?`yesterday`:`${t} days ago`},s=[`Normal`,`Hard`,`Brutal`],c=(e,t,n)=>`<div class="sv-tile ${e}"><b>${n}</b><small>${t}</small></div>`;function l(e,t){if(e.empty)return`<div class="save-slot">
      <div class="sv-empty"><span class="sv-plus">+</span><div class="slot-main"><span class="slot-name">Slot ${e.slot}</span><span class="slot-sub">Empty. Begin a new hero.</span></div></div>
      <div class="slot-actions"><button class="btn btn-primary" data-slot="${e.slot}" data-do="play">New hero</button></div>
    </div>`;let r=n(`classes`,e.classId,`sv-portrait`)||`<span class="sv-portrait sv-portrait-fallback">${(a[e.classId]??`?`).slice(0,1)}</span>`,l=s[e.challenge]??`Normal`;return`<div class="save-slot has-hero">
    <div class="sv-top">
      <div class="sv-hero">${r}<div class="sv-ring" style="--p:${Math.round(e.xpFrac*100)}%" title="${Math.round(e.xpFrac*100)}% to the next level"><span><small>LV</small>${e.level}</span></div></div>
      <div class="sv-info">
        <span class="slot-name">${a[e.classId]??`Wanderer`}</span>
        <span class="slot-sub">Slot ${e.slot} · ${l} · played ${o(e.savedAt)}</span>
        <div class="sv-tiles">${c(`life`,`Life`,String(e.life))}${c(`dmg`,`Damage/s`,String(Math.round(e.dps)))}${c(`arm`,`Armour`,String(e.armour))}${c(`mana`,`Mana`,String(e.mana))}</div>
        <div class="sv-bar" title="${e.cleared} of ${i.length} zones cleared"><i style="width:${Math.round(100*e.cleared/i.length)}%"></i><span>${e.cleared}/${i.length} zones</span></div>
        <span class="slot-sub">${e.deaths} death${e.deaths===1?``:`s`}</span>
      </div>
    </div>
    <div class="slot-actions">
      <button class="btn btn-primary" data-slot="${e.slot}" data-do="play">Continue</button>
      <button class="btn btn-small ${t?`btn-danger`:``}" data-slot="${e.slot}" data-do="delete">${t?`Tap again to erase`:`Erase`}</button>
    </div>
  </div>`}async function u(n,i){let a=0,o=async()=>{n.innerHTML=`<main class="title">
      <section class="save-slots" aria-label="Save slots">
        <h2>Choose your save</h2>
        ${(await t()).map(e=>l(e,a===e.slot)).join(``)}
        <button class="btn btn-secondary" data-do="back">Back</button>
      </section>
    </main>`};await o(),n.onclick=async t=>{let s=t.target.closest(`[data-do]`);if(!s)return;let c=s.dataset.do,l=Number(s.dataset.slot??0);if(c===`back`){n.onclick=null,i.onBack();return}if(!(l<1||l>3)){if(c===`delete`){if(a!==l){a=l,await o();return}a=0,await e(l),r().play(`ui_tab`),await o();return}c===`play`&&(n.onclick=null,await i.onChoose(l))}}}export{u as renderSlots};