const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-CcELDupc.js","assets/CanvasPool-CX_31KdX.js","assets/art-DqegbQLT.js","assets/act1-qJkFTbuP.js","assets/canvasUtils-x2ND1UXV.js","assets/RenderTargetSystem-OSz9OCjs.js","assets/getTextureBatchBindGroup-eI8ZguMn.js","assets/BufferResource-24JE7Q3c.js","assets/slots-CPiEiVfh.js"])))=>i.map(i=>d[i]);
import{A as e,At as t,C as n,Ct as r,D as i,Dt as a,Et as o,Ft as s,It as c,K as l,Lt as u,M as d,Mt as f,Pt as p,Rt as m,T as h,Tt as g,U as _,b as v,bt as y,c as b,d as ee,f as x,g as te,h as S,it as ne,j as C,jt as w,kt as re,n as T,r as E,rt as ie,t as ae,u as D,wt as O,x as oe}from"./art-DqegbQLT.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var k=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function se(e){let t=s(),n=t.music;e.innerHTML=`
    <main class="jukebox">
      <div class="jb-top"><a class="btn btn-small" href="#" aria-label="Back to the title">‹ Back</a><h1>Jukebox</h1></div>
      <p class="tagline">Every tune in the Battle of Wellon</p>
      <p class="tagline" id="jb-summary"></p>
      <ul class="tracks">
        ${c.map(e=>`<li><button class="btn track" data-mood="${e.mood}" ${u(e.mood)?``:`disabled`}><span class="track-title">${e.title}${u(e.mood)?``:` · not recorded yet`}</span><span class="track-status" data-status="${e.mood}"></span><span class="track-where">${e.where}</span></button></li>`).join(``)}
      </ul>
      <div class="player">
        <div class="now" id="jb-now">Pick a track to begin</div>
        <input type="range" id="jb-seek" min="0" max="1" step="0.01" value="0" disabled aria-label="Seek" />
        <div class="times"><span id="jb-time">0:00</span><span id="jb-dur">0:00</span></div>
        <div class="controls">
          <button class="btn btn-small" id="jb-prev" aria-label="Previous track">Prev</button>
          <button class="btn btn-small" id="jb-play" disabled>Pause</button>
          <button class="btn btn-small" id="jb-next" aria-label="Next track">Next</button>
        </div>
        <label class="vol">Volume <input type="range" id="jb-vol" min="0" max="1" step="0.05" value="${t.settings.music}" /></label>
      </div>
      <a class="btn btn-secondary" href="#">Back</a>
    </main>`;let r=t=>e.querySelector(`#${t}`),i=r(`jb-now`),a=r(`jb-seek`),o=r(`jb-time`),l=r(`jb-dur`),d=r(`jb-play`),f=!1,p=e=>{t.unlock(),n.setMood(e,!0),n.setPaused(!1),g()},h=e=>{let t=c.length,r=c.findIndex(e=>e.mood===n.current);for(let n=0;n<t;n++)if(r=r<0?e>0?0:t-1:(r+e+t)%t,u(c[r].mood)){p(c[r].mood);return}};function g(){let t=c.find(e=>e.mood===n.current);for(let t of e.querySelectorAll(`.track`))t.classList.toggle(`active`,t.dataset.mood===n.current);let r=n.position(),s=!!r&&r.duration>0&&r.time>=r.duration-.05;i.textContent=t?`${n.isPaused()?s?`Finished`:`Paused`:`Now playing`}: ${t.title}`:`Pick a track to begin`,d.disabled=!t,a.disabled=!t,d.textContent=n.isPaused()?`Play`:`Pause`;let u=n.position();u&&u.duration>0&&(l.textContent=k(u.duration),f||(a.max=String(u.duration),a.value=String(u.time),o.textContent=k(u.time)))}e.querySelectorAll(`.track`).forEach(e=>e.addEventListener(`click`,()=>p(e.dataset.mood))),r(`jb-prev`).addEventListener(`click`,()=>h(-1)),r(`jb-next`).addEventListener(`click`,()=>h(1)),d.addEventListener(`click`,()=>{t.unlock(),n.setPaused(!n.isPaused()),g()}),a.addEventListener(`input`,()=>{f=!0,o.textContent=k(Number(a.value))}),a.addEventListener(`change`,()=>{n.seek(Number(a.value)),f=!1}),r(`jb-vol`).addEventListener(`input`,e=>t.setVolume(`music`,Number(e.target.value)));let _=[],v=c.filter(e=>u(e.mood)),y=0,b=()=>{r(`jb-summary`).textContent=`${v.length} of ${c.length} recorded${y?` · ${y} would not load`:``}`};b();for(let t of v){let n=new Audio;n.preload=`metadata`;let r=e.querySelector(`[data-status="${t.mood}"]`);n.addEventListener(`loadedmetadata`,()=>{r&&(r.textContent=` ✓ ${k(n.duration)}`)}),n.addEventListener(`error`,()=>{y++,r&&(r.textContent=` ⚠ file will not play (error ${n.error?.code??`?`}): re-export it as a plain MP3`,r.classList.add(`bad`)),b()}),n.src=m(t.mood),_.push(n)}n.setMood(`off`,!0),t.armUnlock();let ee=window.setInterval(g,250);return()=>{window.clearInterval(ee);for(let e of _)e.removeAttribute(`src`),e.load()}}var ce=[{id:`all`,name:`Show everything`,description:`Every drop is picked up.`},{id:`leveling`,name:`Leveling`,description:`Normal items are salvaged on contact once you reach level 8; Magic from level 25.`},{id:`endgame`,name:`Endgame`,description:`Normal and Magic items are salvaged on contact. Rares and uniques only.`},{id:`upgrades`,name:`Upgrades only`,description:`Only uniques and items that beat what you wear are picked up; the rest are salvaged on contact.`}];function le(e,t,n){return e===`upgrades`?t===`normal`||t===`magic`:t===`rare`||t===`unique`||e===`all`?!1:e===`endgame`?!0:t===`normal`?n>=8:n>=25}function ue(e,t,n){return le(e,t.rarity,n)}var de={vanguard:`str`,hunter:`dex`,arcanist:`int`},fe=new Map;function pe(e){return fe.get(e)??de[e]??`str`}function me(e,t){fe.set(e,t)}var he=[[`DPS`,e=>e.dps,``,1],[`Life`,e=>e.life,``,0],[`Mana`,e=>e.mana,``,0],[`Ward`,e=>e.ward,``,0],[`Armour`,e=>e.armour,``,0],[`Evasion`,e=>e.evasion,``,0],[`Block`,e=>e.block,`%`,0],[`Fire res`,e=>e.resistances.fire,`%`,0],[`Cold res`,e=>e.resistances.cold,`%`,0],[`Lightning res`,e=>e.resistances.lightning,`%`,0],[`Chaos res`,e=>e.resistances.chaos,`%`,0],[`Str`,e=>e.attributes.str,``,0],[`Dex`,e=>e.attributes.dex,``,0],[`Int`,e=>e.attributes.int,``,0],[`Crit chance`,e=>e.critChance,`%`,1],[`Spell damage`,e=>e.spellDamagePct,`%`,0],[`Move speed`,e=>e.movementSpeed,`%`,0],[`Item rarity`,e=>e.itemRarity,`%`,0],[`Life regen`,e=>e.lifeRegen,`/s`,1]],ge=4;function _e(e,t){let n=[];for(let[r,i,a,o]of he){let s=Number(i(e).toFixed(o)),c=Number(i(t).toFixed(o));c!==s&&n.push({label:r,before:s,after:c,unit:a,decimals:o})}return n}function ve(e,t){let n=[];for(let[r,i,a,o]of he){let s=Number((i(t)-i(e)).toFixed(o));s!==0&&n.push(`${r} ${s>0?`+`:`−`}${Math.abs(s).toFixed(o)}${a}`)}return n.length===0?`no change to your stats`:n.length<=ge?n.join(`, `):`${n.slice(0,ge).join(`, `)} and ${n.length-ge} more`}var A=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),ye=8,be=(e,t,n)=>`${e.toFixed(t)}${n}`;function xe(e){let t=e.after>e.before,n=Math.max(Math.abs(e.before),Math.abs(e.after),1e-9),r=Math.min(Math.abs(e.before),Math.abs(e.after))/n*100,i=100-r,a=e.after-e.before;return`<div class="gd-row ${t?`up`:`down`}" title="${A(e.label)}: ${be(e.before,e.decimals,e.unit)} → ${be(e.after,e.decimals,e.unit)}">
    <span class="gd-label">${A(e.label)}</span>
    <span class="gd-delta">${t?`▲`:`▼`}${t?`+`:`−`}${Math.abs(a).toFixed(e.decimals)}${e.unit}</span>
    <span class="gd-bar"><i class="gd-keep" style="width:${r.toFixed(1)}%"></i><i class="gd-change" style="width:${i.toFixed(1)}%"></i></span>
  </div>`}function Se(e,t,n,r,i=`Equipped`,a=``){let o=_e(n,r),s=o.filter(e=>e.after>e.before).length,c=o.length-s,l=o.length===0?`No change to your stats`:c===0?`All gains`:s===0?`All losses`:`${s} up · ${c} down`,u=o.slice(0,ye),d=o.length-u.length;return`<div class="gd-head"><span class="gd-verb">${A(i)}</span><b class="${t}">${A(e)}</b>${a?`<span class="gd-meta">${A(a)}</span>`:``}<em class="gd-verdict ${c===0&&s?`good`:s===0&&c?`bad`:``}">${l}</em></div>
    <div class="gd-grid">${u.map(xe).join(``)}</div>${d>0?`<div class="gd-more">+${d} more</div>`:``}`}var Ce;function j(e,t,n,r,i=`Equipped`,a=5200,o=``){let s=document.getElementById(`gear-diff`);s||(s=document.createElement(`div`),s.id=`gear-diff`,s.setAttribute(`role`,`status`),s.addEventListener(`click`,()=>s.classList.remove(`show`)),document.body.appendChild(s)),s.innerHTML=Se(e,t,n,r,i,o),s.classList.remove(`show`),s.offsetWidth,s.classList.add(`show`),window.clearTimeout(Ce),Ce=window.setTimeout(()=>s.classList.remove(`show`),a)}typeof window<`u`&&window.addEventListener(`hashchange`,()=>document.getElementById(`gear-diff`)?.classList.remove(`show`));var we={str:[`ring_life`,`ring_gold`],dex:[`ring_speed`,`ring_flask`],int:[`ring_res`,`ring_rarity`]},Te=e=>e.id===`core`?`core`:e.mastery?`mastery`:e.keystone?`notable`:`minor`;function Ee(e){let t=we[e],n=[w.passives.get(`core`),...w.passiveList.filter(t=>t.branch===e),...t.map(e=>w.passives.get(e))],r=new Set(n.map(e=>e.id)),i=new Map;i.set(`core`,{x:0,y:0});let a=n.filter(t=>RegExp(`^${e}_\\d+$`).test(t.id)).sort((e,t)=>Number(e.id.split(`_`)[1])-Number(t.id.split(`_`)[1]));a.forEach((e,t)=>i.set(e.id,{x:0,y:t+1}));let o=new Map(a.map((e,t)=>[e.id,t+1])),s=new Map;for(let t of n){let n=RegExp(`^${e}_([a-z]+)_(\\d+)$`).exec(t.id);n&&s.set(n[1],[...s.get(n[1])??[],t])}[...s.values()].map(e=>e.sort((e,t)=>Number(e.id.split(`_`)[2])-Number(t.id.split(`_`)[2]))).sort((e,t)=>(o.get(e[0].links[0])??0)-(o.get(t[0].links[0])??0)).forEach((e,t)=>{let n=t%2==0?-1:1,r=o.get(e[0].links[0])??1,a=[[1.2,.6],[2.2,1.5],[2.2,2.5],[2.2,3.5]];e.forEach((e,t)=>{let[o,s]=a[Math.min(t,a.length-1)];i.set(e.id,{x:n*o,y:r+s+Math.max(0,t-3)})})});let c=[[1.1,.55],[2,1.25]];t.forEach((e,t)=>i.set(e,{x:c[t][0],y:c[t][1]}));let l=a.length;n.filter(e=>e.mastery).sort((e,t)=>e.id.localeCompare(t.id)).forEach((e,t,n)=>{let r=n.length===1?0:t===0?-.95:.95;i.set(e.id,{x:r,y:l+1.7})});let u=n.map(e=>{let t=i.get(e.id)??{x:0,y:0},n=[...new Set(e.links.filter(e=>!r.has(e)).map(e=>e.split(`_`)[0]))].filter(e=>e===`str`||e===`dex`||e===`int`);return{def:e,x:t.x,y:t.y,tier:Te(e),crossTo:n}}),d=new Set,f=[];for(let e of n)for(let t of e.links){if(!r.has(t))continue;let n=[e.id,t].sort().join(`|`);d.has(n)||(d.add(n),f.push({a:t,b:e.id}))}let p=u.map(e=>e.x),m=u.map(e=>e.y);return{nodes:u,edges:f,minX:Math.min(...p),maxX:Math.max(...p),minY:Math.min(...m),maxY:Math.max(...m)}}var M=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e),N={mainHand:`Main hand`,offHand:`Off hand`,helm:`Helm`,body:`Body`,gloves:`Gloves`,boots:`Boots`,belt:`Belt`,ring1:`Ring`,ring2:`Ring`,amulet:`Amulet`},P=(e,t)=>`data-place="${e}" data-id="${M(t)}"`;function De(e,t){if(!e.state.showHints)return``;let n=e.scoreDelta(t);return n===null?``:n>.5?`<span class="badge up">▲ ${n.toFixed(0)}</span>`:n<-.5?`<span class="badge down">▼</span>`:`<span class="badge same">≈</span>`}function Oe(e){return e.sockets.length===0?``:`<span class="sockets">${e.sockets.map((t,n)=>`<i class="socket ${t}${e.runes?.[n]?` filled`:``}"></i>`).join(``)}</span>`}function F(e,t){let n=e?T(`icons`,te(t?.uniqueId)??b(e),`glyph-img`):``;return n?`<span class="glyph art">${n}</span>`:`<span class="glyph">${M(e?.abbrev??`???`)}</span>`}function I(e,t,n,r=``){let i=O(t,w),a=w.bases.get(t.baseId),o=r?`div`:`button`;return`
    <${o} class="item-row r-${t.rarity}${t.corrupted?` corrupted`:``}${n===`inventory`&&(e.scoreDelta(t)??0)>.5?` is-upgrade`:``}"${r?``:` data-act="select" ${P(n,t.id)}`}>
      ${F(a,t)}
      <span class="item-main">
        <span class="item-name">${e.isLocked(t.id)?`★ `:``}${M(i.name)}</span>
        <span class="item-sub">${M(i.baseName)} · ilvl ${t.itemLevel}${t.affixes.length?` · ${t.affixes.length} mod${t.affixes.length===1?``:`s`}`:``} ${t.sockets.length?`· ${t.sockets.length}S `:``}${Oe(t)}</span>
      </span>
      ${r?`<span class="row-end">${n===`equipment`?``:De(e,t)}${r}</span>`:n===`equipment`?``:De(e,t)}
    </${o}>`}function L(e,t,n,r){return t.length===0?`<p class="empty">${M(r)}</p>`:`<div class="list">${[...t].sort((e,t)=>Number(t.rarity===`unique`)-Number(e.rarity===`unique`)).map(t=>I(e,t,n)).join(``)}</div>`}function ke(e,t){let n=e.state,r=o(n.charLevel),i=n.charLevel>=C.level?100:Math.min(100,n.xp/r*100);return`
    <header class="lab-header has-back">
      ${t.mode===`game`?`<button class="btn btn-small lab-back" data-act="resume" aria-label="Back to game">‹ Back</button>`:`<a class="btn btn-small lab-back" href="#" aria-label="Back to title">‹ Back</a>`}
      <div class="lab-title">
        <strong>${t.mode===`game`?`Bag &amp; Gear`:`Loot Lab`}</strong>
        <span>Level ${n.charLevel}${t.mode===`game`?``:` · zone ${n.zoneLevel}`}</span>
      </div>
      <div class="xp" title="${n.xp} / ${r} XP"><div class="xp-fill" style="width:${i.toFixed(1)}%"></div></div>
    </header>`}function Ae(e,t){let n=e.state,r=n.log[0]??`Nothing has died yet.`;return`
    <section class="dials">
      <label class="dial">
        <span>Zone level <b id="zone-label">${n.zoneLevel}</b></span>
        <input type="range" id="zoneLevel" min="1" max="${C.level}" value="${n.zoneLevel}" />
      </label>
      <label class="check"><input type="checkbox" id="followLevel" ${n.followLevel?`checked`:``} /> Zone follows my level</label>
      <details>
        <summary>Lab dials · rarity +${e.rarityBonus()}% · quantity +${n.quantityExtra}%</summary>
        <label class="dial"><span>Extra item rarity <b id="rarity-label">+${n.rarityExtra}%</b></span><input type="range" id="rarityExtra" min="0" max="300" step="10" value="${n.rarityExtra}" /></label>
        <label class="dial"><span>Extra item quantity <b id="quantity-label">+${n.quantityExtra}%</b></span><input type="range" id="quantityExtra" min="0" max="300" step="10" value="${n.quantityExtra}" /></label>
        <p class="hint">Gear with "Rarity of Items found" adds to the rarity bonus automatically.</p>
      </details>
    </section>

    <section class="kills">
      <button class="btn kill k-normal" data-act="kill" data-kind="normal">Kill<small>monster</small></button>
      <button class="btn kill k-magic" data-act="kill" data-kind="magic">Kill<small>magic pack</small></button>
      <button class="btn kill k-rare" data-act="kill" data-kind="rare">Kill<small>rare monster</small></button>
      <button class="btn kill k-boss" data-act="kill" data-kind="boss">Kill<small>boss</small></button>
    </section>
    <p class="last">${M(r)}</p>

    <section>
      <div class="section-head">
        <h2>Ground <span class="count">${n.ground.length}</span></h2>
        <div class="row-actions">
          <button class="btn btn-small btn-primary" data-act="take-all" ${n.ground.length?``:`disabled`}>Take all</button>
        </div>
      </div>
      <p class="hint">Take all keeps everything you did not mark for auto-salvage (${n.autoSalvage.normal?`Normal`:``}${n.autoSalvage.normal&&n.autoSalvage.magic?` and `:``}${n.autoSalvage.magic?`Magic`:``}${!n.autoSalvage.normal&&!n.autoSalvage.magic?`nothing`:``}). Salvage by tier below; uniques and starred items are never salvaged.</p>
      ${Ie(e,t,`ground`)}
      ${L(e,n.ground,`ground`,`Kill something.`)}
    </section>`}function R(e,t,n=``){return`<div class="stat ${n}"><span>${M(e)}</span><b>${M(String(t))}</b></div>`}function z(e,t,n){let r=e.state.equipment[t],i=r?w.bases.get(r.baseId):void 0;return r?`<button class="doll-slot r-${r.rarity}${r.corrupted?` corrupted`:``}" style="grid-area:${n}" data-act="select" ${P(`equipment`,r.id)}>
    ${F(i,r)}<span class="doll-label">${N[t]}</span></button>`:`<div class="doll-slot empty" style="grid-area:${n}"><span class="glyph">—</span><span class="doll-label">${N[t]}</span></div>`}function je(e){let t=T(`dolls`,e.state.classId,`doll-figure`);return`
    <div class="paperdoll-wrap">
      <div class="paperdoll${t?` has-figure`:``}">
        ${t}
        <svg class="doll-silhouette" viewBox="0 0 100 200" aria-hidden="true">
          <circle cx="50" cy="26" r="16" />
          <path d="M28 50 Q50 40 72 50 L78 120 Q50 132 22 120 Z" />
          <rect x="10" y="55" width="14" height="60" rx="6" />
          <rect x="76" y="55" width="14" height="60" rx="6" />
          <rect x="30" y="120" width="16" height="65" rx="6" />
          <rect x="54" y="120" width="16" height="65" rx="6" />
        </svg>
        ${z(e,`helm`,`helm`)}
        ${z(e,`amulet`,`amulet`)}
        ${z(e,`mainHand`,`mainhand`)}
        ${z(e,`body`,`body`)}
        ${z(e,`offHand`,`offhand`)}
        ${z(e,`ring1`,`ring1`)}
        ${z(e,`ring2`,`ring2`)}
        ${z(e,`gloves`,`gloves`)}
        ${z(e,`belt`,`belt`)}
        ${z(e,`boots`,`boots`)}
      </div>
    </div>`}var B=(e,t,n,r=``,i=null)=>`<div class="cs-tile ${e}"><small>${T(`icons`,i,`cs-glyph`)}${M(t)}</small><b>${M(String(n))}</b>${r?`<em>${M(r)}</em>`:``}</div>`;function Me(e){let t=ie(e.state.classId).skills,n=l(e.state.classId,e.state.skillLevels),r=t.map((e,t)=>{let r=ne(e),i=n[t]??0,a=r.cooldown>0?`${r.cooldown}s cooldown${r.mana?` · ${r.mana} mana`:``}`:`Automatic`;return`<li class="skill-row${i?``:` locked`}"><span class="sk-name">${M(r.name)}</span><span class="sk-lv">${i?`Lv ${i}/8`:`Not learned`}</span><span class="sk-desc">${M(r.description)}${i?` <em>${M(a)}</em>`:``}</span></li>`}).join(``),i=_.filter(t=>(e.state.upgrades[t.id]??0)>0).map(t=>`<li><span>${T(`icons`,ee(t.id),`cs-glyph`)}${M(t.name)} <small>×${e.state.upgrades[t.id]}</small></span><em>${M(t.describe(e.state.upgrades[t.id]))}</em></li>`).join(``);return`<div class="char-skills"><h3>Skills</h3><ul class="skill-list">${r}</ul>${i?`<h3>Level-up picks</h3><ul class="pick-list">${i}</ul>`:``}</div>`}function Ne(e,t){let n=e.state,r=o(n.charLevel),i=Math.max(0,Math.min(100,n.xp/Math.max(1,r)*100)),a=e=>`conic-gradient(var(--gold) ${e*3.6}deg, rgba(255,255,255,0.1) 0)`,s=[[`Fire`,`fire`],[`Cold`,`cold`],[`Lightning`,`lightning`],[`Chaos`,`chaos`]].map(([e,n])=>{let r=t.resistances[n],i=t.resistancesRaw[n],a=Math.max(0,Math.min(100,r/75*100));return`<div class="cs-res ${n}${r<0?` neg`:``}${r>=75?` capped`:``}">
      <span class="cs-res-name">${T(`icons`,S(`resist-${n}`),`cs-glyph`)}${e}</span>
      <span class="cs-bar"><i style="width:${a}%"></i></span>
      <span class="cs-res-val">${r}%${i>r?`<small> (${i})</small>`:``}</span>
    </div>`}).join(``),c=t.damageMix,l=[`physical`,`fire`,`cold`,`lightning`,`chaos`].filter(e=>c[e]>.005),u=`<div class="cs-mix" role="img" aria-label="Damage mix">${l.map(e=>`<i class="${e}" style="width:${(c[e]*100).toFixed(1)}%" title="${e} ${Math.round(c[e]*100)}%"></i>`).join(``)}</div>
    <div class="cs-mix-legend">${l.map(e=>`<span class="${e}">${e} ${Math.round(c[e]*100)}%</span>`).join(``)}</div>`,d=t.ailments,f=[`bleed`,`ignite`,`shock`,`poison`,`chill`].filter(e=>d[e]>0).map(e=>`<span class="cs-chip ${e}">${T(`icons`,ae(e),`cs-glyph`)}${e} ${d[e]}%</span>`).join(``),p=(e,n)=>`<div class="cs-attr ${e}"><b>${t.attributes[e]}</b><small>${n}</small></div>`;return`<div class="charsheet">
    <div class="cs-top">
      <div class="cs-ring" style="background:${a(i)}"><span>${t.level}</span></div>
      <div class="cs-top-text"><strong>Level ${t.level}</strong><span class="cs-bar xp"><i style="width:${i}%"></i></span><small>${n.xp} / ${r} xp</small></div>
    </div>

    <div class="cs-hero">
      <div class="cs-dps"><b>${t.dps.toFixed(1)}</b><small>damage per second</small></div>
      <div class="cs-offense">
        ${B(``,`Per hit`,`${t.hitMin}–${t.hitMax}`)}
        ${B(``,`Attacks / s`,t.attacksPerSecond.toFixed(2))}
        ${B(``,`Crit`,`${t.critChance.toFixed(0)}%`,`×${t.critMulti.toFixed(2)}`,S(`crit`))}
      </div>
      ${u}
      ${f?`<div class="cs-chips">${f}</div>`:``}
    </div>

    <div class="cs-vitals">
      ${B(`life`,`Life`,t.life,t.lifeRegen?`+${t.lifeRegen}/s`:``,S(`life`))}
      ${B(`mana`,`Mana`,t.mana,``,S(`mana`))}
      ${B(`ward`,`Ward`,t.ward,t.level<20?`unlocks at level 20`:``,S(`ward`))}
    </div>

    <div class="cs-attrs">${p(`str`,`Strength`)}${p(`dex`,`Dexterity`)}${p(`int`,`Intelligence`)}</div>

    <div class="cs-defence">
      ${B(`armour`,`Armour`,t.armour,``,S(`armour`))}
      ${B(`evasion`,`Evasion`,t.evasion,``,S(`evasion`))}
      ${B(`block`,`Block`,`${t.block}%`,``,S(`block`))}
    </div>

    <div class="cs-resists"><small class="cs-title">Resistances <em>(cap 75%)</em></small>${s}</div>

    <div class="cs-misc">
      ${B(``,`Move speed`,`+${t.movementSpeed}%`,``,S(`speed`))}
      ${B(``,`Item rarity`,`+${t.itemRarity}%`,``,S(`rarity`))}
      ${B(``,`Spell damage`,`+${t.spellDamagePct}%`)}
    </div>
  </div>`}function Pe(e,t){let n=e.state,r=e.summary(),i=p.map(t=>{let r=n.equipment[t];return`
      <div class="slot">
        <span class="slot-label">${N[t]}</span>
        ${r?I(e,r,`equipment`):`<div class="item-row empty-slot"><span class="glyph">—</span><span class="item-main"><span class="item-sub">Empty</span></span></div>`}
      </div>`}).join(``);return`
    <section class="gear-equip">
      <div class="section-head"><h2>Equipment</h2>${t.mode===`game`?`<button class="btn btn-small" data-act="auto-equip">Auto-Equip</button>`:``}</div>
      <div class="gear-columns">
        ${je(e)}
        <div class="slots">${i}</div>
      </div>
    </section>
    <section class="gear-char">
      <h2>Character</h2>
      ${T(`classes`,e.state.classId,`char-portrait`)}
      ${Ne(e,r)}
      ${Me(e)}
    </section>`}var Fe=[{id:`normal`,label:`Normal`,rarities:[`normal`]},{id:`magic`,label:`Up to Magic`,rarities:[`normal`,`magic`]},{id:`rare`,label:`Up to Rare`,rarities:[`normal`,`magic`,`rare`]}];function Ie(e,t,n){return`<div class="row-actions salvage-tiers"><span class="hint">Salvage</span>${Fe.map(r=>{let i=e.salvageCount(n,r.rarities),a=t.confirmSalvage===`${n}:${r.id}`;return`<button class="btn btn-small ${a?`btn-danger`:``}" data-act="salvage-tier" data-place="${n}" data-tier="${r.id}" ${i?``:`disabled`}>${a?`Tap again: salvage ${i}`:`${r.label} · ${i}`}</button>`}).join(``)}</div>`}function Le(e,t){let n=e.state;return`
    <section class="bag-items">
      <div class="section-head">
        <h2>Bag <span class="count">${n.inventory.length}/${e.bagSize()}</span></h2>
      </div>
      ${Ie(e,t,`inventory`)}
      <p class="hint">Uniques and starred items are locked and never salvaged. Unlock one from its details.</p>
      ${L(e,n.inventory,`inventory`,`Your bag is empty. Take something from the ground.`)}
    </section>
    <section class="bag-runes">
      <div class="section-head"><h2>Rune pouch <span class="count">${n.runes.length}</span></h2></div>
      <p class="hint">Open an item and tap a socket to set a rune. Three of a kind and level fuse into the next level.</p>
      ${Je(e)}
    </section>`}var V={str:`Strength`,dex:`Dexterity`,int:`Intelligence`},Re={str:`#d9574b`,dex:`#58b368`,int:`#5b8be6`},ze={heart:`M12 20.5s-7.5-4.8-9.6-9.4C1 8.2 2.6 4.8 6 4.8c2.1 0 3.5 1 4.2 2.3.7-1.3 2.1-2.3 4.2-2.3 3.400 0 5 3.400 3.600 6.300-2.100 4.600-9.600 9.400-9.600 9.400z`,shield:`M12 3l8 3v6c0 4.600-3.300 8-8 9.200C7.300 20 4 16.600 4 12V6l8-3z`,blade:`M5 19L19 5m-5 0h5v5M7 14l3 3M4 20l2.500-2.500`,bolt:`M13 2.500L5.500 13H11l-1 8.500L18 10.500h-5.500L13 2.500z`,aim:`M12 7.500a4.500 4.500 0 1 0 0 9 4.500 4.500 0 0 0 0-9zM12 3v3.500M12 17.500V21M3 12h3.500M17.500 12H21`,chevrons:`M6 6l6 6-6 6M13 6l6 6-6 6`,drop:`M12 3s6.200 6.600 6.200 11a6.200 6.200 0 0 1-12.400 0C5.800 9.600 12 3 12 3z`,flame:`M12 3c.800 4 5 5.200 5 10a5 5 0 0 1-10 0c0-2 1-3.200 2.200-4.200 0 2 .900 3 2 3C10.200 8.800 10.800 6 12 3z`,star:`M12 3.500l2.600 5.500 6 .8-4.400 4.200 1.100 6L12 17.200 6.700 20l1.100-6L3.400 9.800l6-.8L12 3.500z`,plus:`M12 5v14M5 12h14`};function Be(e){let t=(e.mods.find(e=>e.value>0)??e.mods[0])?.stat??``,n=e=>e.test(t);return n(/^life|regen$/)?`heart`:n(/armour|block|ward_|^all_res|_res$/)?`shield`:n(/^damage|dot_pct|bleed|poison/)?`blade`:n(/attack_speed/)?`bolt`:n(/crit/)?`aim`:n(/evasion|movement/)?`chevrons`:n(/mana|flask|pickup/)?`drop`:n(/elemental|ignite|shock|lantern|spell/)?`flame`:n(/rarity|gold/)?`star`:`plus`}var Ve=96,He=84,Ue=64,We=44,Ge={core:30,minor:21,notable:28,mastery:38},Ke={core:`Starting node`,minor:`Minor`,notable:`Notable`,mastery:`Mastery`};function qe(e,t){let n=e.state,r=e.passivePointsLeft(),i=t.treeBranch,a=Re[i],o=Ee(i),s=e=>(e-o.minX)*Ve+Ue,c=e=>(e-o.minY)*He+We,l=(o.maxX-o.minX)*Ve+128,u=(o.maxY-o.minY)*He+We+58,d=new Map(o.nodes.map(e=>[e.def.id,e])),f=new Set(n.passives),p=new Set(o.nodes.filter(e=>!f.has(e.def.id)&&re(e.def.id,n.passives,999,w).ok).map(e=>e.def.id)),m=o.edges.map(({a:e,b:t})=>{let n=d.get(e),r=d.get(t);return`<line class="edge ${f.has(e)&&f.has(t)?`taken`:f.has(e)&&p.has(t)||f.has(t)&&p.has(e)?`open`:`far`}" x1="${s(n.x)}" y1="${c(n.y)}" x2="${s(r.x)}" y2="${c(r.y)}" />`}).join(``),h=o.nodes.map(e=>{let n=e.def.id,r=f.has(n)?`have`:p.has(n)?`can`:`locked`,i=Ge[e.tier],a=s(e.x),o=c(e.y),l=t.treeSelected===n,u=ze[Be(e.def)],d=i*1.05/24,m=e.tier===`notable`||e.tier===`mastery`?`<circle class="ring" r="${i-5}" />`:``,h=e.tier===`mastery`?`<circle class="ring2" r="${i+5}" />`:``,g=e.crossTo.length?`<text class="cross" x="${i+6}" y="4">⇄ ${e.crossTo.map(e=>V[e].slice(0,3)).join(` · `)}</text>`:``,_=e.def.name.length>15?`${e.def.name.slice(0,14)}…`:e.def.name;return`<g class="tn ${e.tier} ${r}${l?` sel`:``}" transform="translate(${a} ${o})" data-act="tree-select" data-id="${n}" role="button" tabindex="0" aria-label="${M(e.def.name)}, ${Ke[e.tier].toLowerCase()}, ${r===`have`?`taken`:r===`can`?`available`:`not yet reachable`}">
      <circle class="halo" r="${i+8}" />${h}
      <circle class="body" r="${i}" />${m}
      <g class="glyph" transform="translate(${-12*d} ${-12*d}) scale(${d})"><path d="${u}" /></g>
      <text class="lbl" y="${i+14}">${M(_)}</text>${g}
    </g>`}).join(``),g=t.treeSelected?d.get(t.treeSelected):void 0,_=``;if(g){let e=g.def.id,t=f.has(e),n=p.has(e),i=t?`<span class="badge same">Taken</span>`:n&&r>0?`<button class="btn btn-primary btn-small" data-act="passive" data-id="${e}">Take (1 point)</button>`:n?`<span class="badge down">No passive points left</span>`:`<span class="badge down">Take a connected node first</span>`,a=Ge[g.tier],o=s(g.x),d=c(g.y),m=Math.min(250,l-8),h=o+a+12;h+m>l-4&&(h=o-a-12-m),h=Math.max(4,Math.min(l-m-4,h));let v=Math.max(4,Math.min(u-190,d-28));_=`<div class="tree-pop ${g.tier}" style="left:${h}px;top:${v}px;width:${m}px" role="dialog" aria-label="${M(g.def.name)}">
      <button class="tp-close" data-act="tree-select" data-id="" aria-label="Close">×</button>
      <div class="tp-head"><strong>${M(g.def.name)}</strong><span class="tp-tier">${Ke[g.tier]}</span></div>
      <ul class="tp-mods">${g.def.mods.map(e=>`<li class="${e.value<0?`neg`:``}">${M(e.text)}</li>`).join(``)}</ul>
      ${g.tier===`mastery`?`<p class="hint">A rare, build-defining choice, and usually costs something.</p>`:``}
      <div class="tp-action">${i}</div>
    </div>`}let v=[`str`,`dex`,`int`].map(e=>`<button class="btn btn-small ${e===i?`active`:``}" data-act="tree-branch" data-branch="${e}" style="${e===i?`border-color:${Re[e]}`:``}">${V[e]}</button>`).join(``);return`
    <section class="tree-section" style="--accent:${a}">
      <div class="section-head"><h2>Passives <span class="count">${r} point${r===1?``:`s`} left</span></h2><button class="btn btn-small" data-act="passive-reset" ${n.passives.length>1?``:`disabled`}>Reset</button></div>
      <div class="row-actions" style="margin-bottom:8px">${v}</div>
      <div class="tree-legend"><span class="lg minor"></span>Minor <span class="lg notable"></span>Notable <span class="lg mastery"></span>Mastery<span class="tree-tip">Tap a node to read it. Drag to look around.</span></div>
      <div class="tree-canvas" data-centre-x="${s(0)}">
        <div class="tree-wrap" style="width:${l}px;height:${u}px">
        <svg class="tree-svg" width="${l}" height="${u}" viewBox="0 0 ${l} ${u}" role="group" aria-label="${V[i]} passive tree">
          <defs>
            <radialGradient id="tn-body" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#3a3326" /><stop offset="1" stop-color="#14110e" /></radialGradient>
            <radialGradient id="tn-have" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#7a5a1c" /><stop offset="1" stop-color="#2a1d08" /></radialGradient>
            <radialGradient id="tn-mastery" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#4d3a6a" /><stop offset="1" stop-color="#17102a" /></radialGradient>
            <filter id="tn-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5" /></filter>
          </defs>
          <g class="edges">${m}</g>
          <g class="nodes">${h}</g>
        </svg>
        ${_}
        </div>
      </div>
    </section>`}function Je(e){let n=e.runeGroups();return n.length===0?`<p class="empty">No runes yet. Monsters drop them; rares and bosses more often.</p>`:`<div class="list">${n.map(e=>{let n=w.runes.get(e.runeId);return n?`
      <div class="rune-row">
        ${x(n.id)?T(`icons`,x(n.id),`rune-img`):`<i class="socket ${n.colour} big"></i>`}
        <span class="item-main"><span class="item-name">${M(n.name)} <b>L${e.level}</b> ×${e.count}</span><span class="item-sub">${M(t(n,e.level))}</span></span>
        ${e.count>=3&&e.level<5?`<button class="btn btn-small" data-act="fuse" data-rune="${e.runeId}" data-level="${e.level}">Fuse 3</button>`:``}
      </div>`:``}).join(``)}</div>`}function Ye(e){let t=e.state;return`
    <section>
      <div class="section-head"><h2>Stash <span class="count">${t.stash.length}/${C.stash}</span></h2></div>
      ${L(e,t.stash,`stash`,`Nothing stashed yet.`)}
    </section>
    <section>
      <div class="section-head"><h2>Shared stash <span class="count">${e.shared.length}/${C.shared}</span></h2></div>
      <p class="hint">Every hero on this device can open this stash. Shields, quivers and spell books only fit their own class, so put the ones you cannot wear here for another hero. Open an item and tap Share.</p>
      ${L(e,e.shared,`shared`,`Nothing shared yet.`)}
    </section>`}function Xe(e,t){let n=e.state,r=f.map(e=>{let t=n.wallet[e.id]??0,r=n.wallet[`shard:${e.id}`]??0;return`
      <div class="orb ${t?``:`none`}">
        ${D(e.id)?`<span class="orb-short art">${T(`icons`,D(e.id),`orb-img`)}</span>`:`<span class="orb-short">${e.short}</span>`}
        <span class="orb-main"><span class="orb-name">${M(e.name)} <b>×${t}</b></span><span class="orb-desc">${M(e.description)}</span>
        <span class="shards"><i style="width:${r/10*100}%"></i></span><span class="orb-desc">${r}/10 shards</span></span>
      </div>`}).join(``),i=n.stats.kills,a=n.stats.drops,o=Math.max(1,Math.round((Date.now()-n.stats.started)/6e4));return`
    <section><div class="section-head"><h2>Gold</h2><span class="count">${n.gold}</span></div></section>
    <section><h2>Orbs</h2><div class="orbs">${r}</div></section>
    <section>
      <h2>Lab settings</h2>
      <label class="check"><input type="checkbox" id="showHints" ${n.showHints?`checked`:``} /> Show upgrade hints (▲ ▼ ≈ badges)</label>
      <label class="check"><input type="checkbox" id="autoNormal" ${n.autoSalvage.normal?`checked`:``} /> Take all auto-salvages Normal items</label>
      <label class="check"><input type="checkbox" id="autoMagic" ${n.autoSalvage.magic?`checked`:``} /> Take all auto-salvages Magic items</label>
      <h3>Loot filter</h3>
      <p class="hint">Hidden drops are salvaged into shards the moment you walk over them, so nothing is wasted.</p>
      ${ce.map(e=>`<label class="check opt"><input type="radio" name="filter" id="filter-${e.id}" value="${e.id}" ${n.filter===e.id?`checked`:``} /><span><b>${M(e.name)}</b><small class="hint">${M(e.description)}</small></span></label>`).join(``)}
    </section>
    <section>
      <h2>Session</h2>
      <div class="stats">
        ${R(`Kills`,`${i.normal+i.magic+i.rare+i.boss} (${i.rare} rare, ${i.boss} boss)`)}
        ${R(`Drops`,`${a.normal+a.magic+a.rare+a.unique}`)}
        ${R(`Rares / uniques`,`${a.rare} / ${a.unique}`)}
        ${R(`Upgrades equipped`,n.stats.upgrades)}
        ${R(`Orbs used`,n.stats.orbsUsed)}
        ${R(`Items salvaged`,n.stats.salvaged)}
        ${R(`Minutes in lab`,o)}
      </div>
      <h3>Recent</h3>
      <ul class="log">${n.log.slice(0,12).map(e=>`<li>${M(e)}</li>`).join(``)||`<li>Nothing yet.</li>`}</ul>
      <button class="btn btn-small btn-danger" data-act="reset">${t.confirmReset?`Tap again to wipe the lab`:`Reset lab`}</button>
    </section>`}function Ze(e,t){let n=e.state;return`<nav class="tabbar">${[...t.mode===`game`?[]:[[`hunt`,`Hunt`,n.ground.length?String(n.ground.length):``]],[`gear`,`Gear`,e.upgradeSlotCount()?`▲${e.upgradeSlotCount()}`:``],[`bag`,`Bag`,`${n.inventory.length}`],[`stash`,`Stash`,n.stash.length?String(n.stash.length):``],[`tree`,`Tree`,e.passivePointsLeft()?String(e.passivePointsLeft()):``],[`orbs`,`Orbs`,String(Object.entries(n.wallet).filter(([e])=>!e.startsWith(`shard:`)).reduce((e,[,t])=>e+t,0))]].map(([e,n,r])=>`<button class="tab ${t.tab===e?`active`:``}" data-act="tab" data-tab="${e}">${n}${r?`<span class="tab-badge">${r}</span>`:``}</button>`).join(``)}</nav>`}function Qe(e,t,n=!1){let r=t?F(w.bases.get(t.baseId),t):``;return`
    <div class="tip r-${e.rarity}">
      <div class="tip-top">${r}<div class="tip-head">
        <span class="tip-name">${M(e.name)}</span>
        ${e.rarity===`normal`?``:`<span class="tip-base">${M(e.baseName)}</span>`}
        <span class="tip-type">${M(e.typeLine)} · ilvl ${e.itemLevel}${e.requirements?` · Req ${M(e.requirements)}`:``}</span>
        <span class="tip-state">${n?`<b class="tip-worn">Equipped</b>`:``}<span>${e.sockets.length?`${e.sockets.length} socket${e.sockets.length===1?``:`s`}`:`No sockets`}</span></span>
      </div></div>
      ${e.baseStats.length?`<ul class="base-stats">${e.baseStats.map(e=>`<li>${M(e)}</li>`).join(``)}</ul>`:``}
      ${e.implicit?`<ul class="mods implicit"><li class="mod implicit"><span>${M(e.implicit.text)}</span><em>${M(e.implicit.range??``)}</em></li></ul>`:``}
      ${e.affixes.length?`<ul class="mods">${e.affixes.map(e=>`<li class="mod ${e.kind}${e.perfect?` perfect`:``}"><span>${M(e.text)}</span>${e.tier?`<em>T${e.tier}${e.range?` · ${M(e.range)}`:``}</em>`:e.range?`<em>${M(e.range)}</em>`:``}</li>`).join(``)}</ul>`:``}
      ${e.keystone?`<p class="keystone">${M(e.keystone)}</p>`:``}
      ${e.flavour?`<p class="flavour">${M(e.flavour)}</p>`:``}
      <div class="tip-foot">
        ${e.sockets.length?`<span class="sockets">${e.sockets.map(e=>`<i class="socket ${e}"></i>`).join(``)}</span>`:`<span></span>`}
        ${e.corrupted?`<span class="corrupt">Corrupted</span>`:``}${e.crafted?`<span class="crafted">Crafted</span>`:``}
        <span class="score">score ${e.score.toFixed(0)}</span>
      </div>
    </div>`}function $e(e,t,n){if(n===`equipment`)return``;let r=e.comparisonFor(t);if(!r)return``;let i=g(t,w),a=r.current?g(r.current,w):null,o=(e,t)=>e?e.global[t]??0:0,s=[];(i.weapon||a?.weapon)&&s.push([`DPS`,i.weapon?.dps??0,a?.weapon?.dps??0]),(i.defence||a?.defence)&&(s.push([`Armour`,i.defence?.armour??0,a?.defence?.armour??0]),s.push([`Evasion`,i.defence?.evasion??0,a?.defence?.evasion??0]),s.push([`Ward`,i.defence?.ward??0,a?.defence?.ward??0])),s.push([`Life`,o(i,`life_flat`),o(a,`life_flat`)]);let c=e=>o(e,`fire_res`)+o(e,`cold_res`)+o(e,`lightning_res`)+3*o(e,`all_res`);s.push([`Ele. res total`,c(i),c(a)]),s.push([`Move speed`,o(i,`movement_speed`),o(a,`movement_speed`)]);let l=s.filter(([,e,t])=>e!==0||t!==0).map(([e,t,n])=>{let r=Math.round((t-n)*10)/10;return`<div class="cmp-row"><span>${e}</span><b class="${r>0?`up`:r<0?`down`:`same`}">${r>0?`+`:``}${r}</b></div>`}).join(``),u=e.scoreDelta(t)??0;return`<div class="compare"><div class="cmp-head">${r.current?`Replaces <b>${M(O(r.current,w).name)}</b> (score ${e.score(r.current).toFixed(0)})`:`Fills your empty <b>${N[r.slot]}</b> slot`} ${e.state.showHints?`<span class="badge ${u>.5?`up`:u<-.5?`down`:`same`}">${u>0?`+`:``}${u.toFixed(0)}</span>`:``}</div>${l}</div>`}function et(e,t,n){if(n===`equipment`)return``;let i=e.comparisonFor(t),a=i?[i.slot]:[],o=e.attributes(a),s=g(t,w).requirements,c=Object.entries(s).filter(([e,t])=>t>o[e]).map(([e,t])=>`${t-o[e]} ${{str:`Str`,dex:`Dex`,int:`Int`}[e]}`),l=w.bases.get(t.baseId);return l?.classes&&!e.classOk(t)?`<p class="req-fail">Only ${M(l.classes.map(e=>r[e]).join(` or `))} can wear this. Share it or stash it for another hero.</p>`:c.length?`<p class="req-fail">You need ${M(c.join(`, `))} more to equip this.</p>`:``}function tt(e,t,n){if(!n.craftOpen)return``;let r=e.state,i=f.map(e=>{let n=r.wallet[e.id]??0,i=y(t,e.id,w),a=n>0&&i.ok,o=n===0?`none owned`:i.ok?``:i.reason;return`
      <button class="orb-btn ${a?``:`cant`}" data-act="orb" data-orb="${e.id}" ${a?``:`disabled`}>
        ${D(e.id)?`<span class="orb-short art">${T(`icons`,D(e.id),`orb-img`)}</span>`:`<span class="orb-short">${e.short}</span>`}
        <span class="orb-main"><span class="orb-name">${M(e.name)} <b>×${n}</b></span><span class="orb-desc">${M(o||e.description)}</span></span>
      </button>`}).join(``);return`<div class="craft">${n.craftNote?`<p class="craft-note">${M(n.craftNote)}</p>`:``}<div class="orbs">${i}</div></div>`}function nt(e,n,r,i){if(n.sockets.length===0)return``;let a=n.sockets.map((e,a)=>{let o=n.runes?.[a],s=o?w.runes.get(o.runeId):void 0;return`<button class="socket-cell ${e} ${r.socketPick===a?`open`:``}" data-act="socket-open" data-index="${a}" ${i}>
      <i class="socket ${e} big${o?` filled`:``}"></i>
      <span>${s?`${M(s.name)} L${o.level}`:`Empty`}</span>
      ${s&&o?`<em>${M(t(s,o.level))}</em>`:``}
    </button>`}).join(``),o=``;if(r.socketPick!==null&&r.socketPick<n.sockets.length){let a=n.sockets[r.socketPick],s=e.runeGroups().filter(e=>w.runes.get(e.runeId)?.colour===a);o=`<div class="socket-picker">
      ${n.runes?.[r.socketPick]?`<button class="btn btn-small" data-act="unsocket" data-index="${r.socketPick}" ${i}>Remove rune</button>`:``}
      ${s.length===0?`<p class="hint">No ${a} runes in your pouch.</p>`:s.map(e=>{let n=w.runes.get(e.runeId);return`<button class="rune-row pick" data-act="socket-put" data-index="${r.socketPick}" data-rune-instance="${e.ids[0]}" ${i}>
          ${x(n.id)?T(`icons`,x(n.id),`rune-img`):`<i class="socket ${n.colour} big"></i>`}
          <span class="item-main"><span class="item-name">${M(n.name)} <b>L${e.level}</b> ×${e.count}</span><span class="item-sub">${M(t(n,e.level))}</span></span>
        </button>`}).join(``)}
    </div>`}return`<div class="sockets-row">${a}</div>${o}`}function rt(e,t,n,r=!1){return`<div class="reward-card">${Qe(O(t,w),t,r)}${et(e,t,`stash`)}${$e(e,t,`stash`)}<div class="actions-row">${n}</div></div>`}function it(e,t){if(!t.selected)return``;let{place:n,id:r}=t.selected,i=e.find(n,r);if(!i)return``;let a=O(i,w),o=P(n,r),s=[],c=`<button class="btn btn-primary" data-act="equip" ${o}>Equip</button>`;n===`ground`&&s.push(`<button class="btn btn-primary" data-act="take" ${o}>Take</button>`,c);let l=`<button class="btn" data-act="share" ${o} title="Every hero on this device can take it from the shared stash">Share</button>`;return n===`inventory`&&s.push(c,`<button class="btn" data-act="stash" ${o}>Stash</button>`,l,`<button class="btn" data-act="drop" ${o}>Drop</button>`),n===`stash`&&s.push(c,`<button class="btn" data-act="to-bag" ${o}>To bag</button>`,l),n===`shared`&&s.push(`<button class="btn btn-primary" data-act="to-bag" ${o}>To bag</button>`,`<button class="btn" data-act="stash" ${o}>To stash</button>`),n===`equipment`&&s.push(`<button class="btn" data-act="unequip" ${o}>Unequip</button>`),s.push(`<button class="btn ${t.craftOpen?`active`:``}" data-act="craft" ${o}>Craft</button>`,`<button class="btn ${e.isLocked(i.id)?`active`:``}" data-act="lock" ${o} title="A locked item is never sold or salvaged. Uniques start locked.">${e.isLocked(i.id)?`★ Locked`:`☆ Lock`}</button>`),`
    <div class="sheet-backdrop" data-act="close"></div>
    <div class="sheet" role="dialog" aria-label="${M(a.name)}">
      <button class="sheet-close" data-act="close" aria-label="Close">×</button>
      ${Qe(a,i,n===`equipment`)}
      ${nt(e,i,t,o)}
      ${et(e,i,n)}
      ${$e(e,i,n)}
      <div class="actions-row">${s.join(``)}</div>
      ${tt(e,i,t)}
      <div class="actions-danger"><span class="hint">Break it into shards</span><button class="btn btn-danger btn-small" data-act="salvage" ${o}>Salvage</button></div>
    </div>`}function at(e,t){let n={hunt:e=>Ae(e,t),gear:e=>Pe(e,t),bag:e=>Le(e,t),stash:Ye,orbs:e=>Xe(e,t),tree:e=>qe(e,t)}[t.tab](e);return`
    <div class="lab">
      ${ke(e,t)}
      <main class="main" id="main" data-tab="${t.tab}">${n}</main>
      ${Ze(e,t)}
      ${t.toast?`<div class="toast lab-toast">${M(t.toast)}</div>`:``}
      ${it(e,t)}
    </div>`}var H=()=>i();function ot(e,t={}){let n=t.mode??`lab`,r=t.store??new d(v().lab);t.store||(r.shared=oe(),r.onShared=h);let i={tab:t.tab??(n===`game`?`gear`:`hunt`),selected:null,craftOpen:!1,toast:null,craftNote:null,confirmReset:!1,mode:n,socketPick:null,treeBranch:pe(r.state.classId),treeSelected:null},o,c=``,l=()=>{let t=e.querySelector(`#main`)?.scrollTop??0,n=e.querySelector(`.tree-canvas`),a=n?.scrollLeft??0,o=n?.scrollTop??0,s=i.tab===`tree`?`tree:${i.treeBranch}`:``;e.innerHTML=at(r,i);let l=e.querySelector(`#main`);l&&(l.scrollTop=t);let u=e.querySelector(`.tree-canvas`);if(u){if(s&&s!==c){let e=Number(u.dataset.centreX??0);u.scrollLeft=Math.max(0,e-u.clientWidth/2)}else u.scrollLeft=a,u.scrollTop=o;let e=u.querySelector(`.tree-pop`);if(e){let t=u.getBoundingClientRect(),n=e.getBoundingClientRect();n.right>t.right&&(u.scrollLeft+=n.right-t.right+8),n.left<t.left&&(u.scrollLeft-=t.left-n.left+8),n.bottom>t.bottom&&(u.scrollTop+=n.bottom-t.bottom+8),n.top<t.top&&(u.scrollTop-=t.top-n.top+8)}}c=s},u=e=>{i.toast=e,window.clearTimeout(o),o=window.setTimeout(()=>{i.toast=null,l()},Math.max(1800,1e3+e.length*45))},f=e=>{n===`game`&&s().play(e)},p=(e,n=!1,r,a=`denied`)=>{f(e.ok?r??`ui`:a),e.ok?e.message&&u(e.message):u(e.message),n&&e.ok&&(i.selected=null,i.craftOpen=!1,i.craftNote=null),H(),t.onChange?.(),l()},m=n=>{let o=n.target.closest(`[data-act]`);if(!o||!e.contains(o))return;let s=o.dataset.act,c=o.dataset.place??i.selected?.place,d=o.dataset.id??i.selected?.id;switch(s!==`reset`&&(i.confirmReset=!1),s!==`salvage-tier`&&(i.confirmSalvage=null),s){case`resume`:t.onClose?.();return;case`tab`:f(`ui_tab`),i.tab=o.dataset.tab,i.selected=null,i.craftOpen=!1,l();return;case`kill`:p(r.kill(o.dataset.kind));return;case`take-all`:p(r.takeAll());return;case`salvage-tier`:{let e=o.dataset.place,t=Fe.find(e=>e.id===o.dataset.tier);if(!t)return;let n=`${e}:${t.id}`;if(t.id===`rare`&&i.confirmSalvage!==n){i.confirmSalvage=n,f(`ui`),l();return}i.confirmSalvage=null,p(r.salvageAll(e,[...t.rarities]),!1,`salvage`);return}case`select`:f(`ui`),c&&d&&(i.selected={place:c,id:d},i.craftOpen=!1,i.craftNote=null,i.socketPick=null,l());return;case`fuse`:p(r.fuse(o.dataset.rune??``,Number(o.dataset.level)),!1,`rune_fuse`);return;case`auto-equip`:{let e=r.summary(),t=r.autoEquip();t.count>0&&(i.selected=null,j(`${t.count} item${t.count===1?``:`s`}`,`gd-r-rare`,e,r.summary())),p(t,!1,`equip_metal`);return}case`passive`:p(r.allocatePassive(o.dataset.id??``),!1,`passive`);return;case`passive-reset`:p(r.resetPassives());return;case`tree-select`:i.treeSelected=o.dataset.id||null,f(`ui`),l();return;case`tree-branch`:f(`ui_tab`),i.treeBranch=o.dataset.branch,i.treeSelected=null,me(r.state.classId,i.treeBranch),l();return;case`close`:i.selected=null,i.craftOpen=!1,i.craftNote=null,l();return;case`craft`:i.craftOpen=!i.craftOpen,i.craftNote=null,l();return;case`reset`:if(!i.confirmReset){i.confirmReset=!0,l();return}r.reset(),i.confirmReset=!1,i.selected=null,p({ok:!0,message:`Lab reset.`});return}if(c&&d)switch(s){case`take`:{let e=r.take(d);e.ok&&(i.selected={place:`inventory`,id:d}),p(e);return}case`equip`:{let e=r.summary(),t=r.find(c,d),n=r.equip(c,d);n.ok&&(n.message=`Equipped.`,t&&j(a(t,w),`gd-r-${t.rarity}`,e,r.summary(),`Equipped`,5200,t.sockets.length?`${t.sockets.length} socket${t.sockets.length===1?``:`s`}`:`no sockets`));let i=r.find(`equipment`,d)??r.find(c,d),o=i?w.bases.get(i.baseId)?.category??``:``;p(n,!0,/cloth|leather|belt|ring|amulet/.test(o)?`equip_cloth`:`equip_metal`);return}case`unequip`:{let e=r.summary(),t=r.find(`equipment`,d),n=r.unequip(d);n.ok&&(i.selected={place:`inventory`,id:d},n.message=`Removed.`,t&&j(a(t,w),`gd-r-${t.rarity}`,e,r.summary(),`Removed`)),p(n,!1,`unequip`);return}case`stash`:{let e=r.move(d,c,`stash`);e.ok&&(i.selected={place:`stash`,id:d}),p(e);return}case`share`:{let e=r.move(d,c,`shared`);e.ok&&(i.selected={place:`shared`,id:d},e.message=`Moved to the shared stash. Every hero can take it.`),p(e);return}case`to-bag`:{let e=r.move(d,c,`inventory`);e.ok&&(i.selected={place:`inventory`,id:d}),p(e);return}case`drop`:if(t.onDrop){let e=r.find(c,d);if(!e)return;if(!t.onDrop(e)){u(`There is no ground to drop it on here. Stash or salvage it instead.`);return}r.remove(c,d),p({ok:!0,message:`Dropped ${a(e,w)}.`},!0);return}p(r.move(d,c,`ground`),!0);return;case`lock`:u(r.toggleLock(d)?`Locked. It will not be sold or salvaged.`:`Unlocked.`),l();return;case`salvage`:p(r.salvage(c,d),!0,`salvage`);return;case`orb`:{let e=r.useOrb(c,d,o.dataset.orb??``);i.craftNote=e.message??null,p(e,!1,`orb_success`,`orb_fail`);return}case`socket-open`:{let e=Number(o.dataset.index);i.socketPick=i.socketPick===e?null:e,l();return}case`socket-put`:{let e=r.socket(c,d,Number(o.dataset.index),o.dataset.runeInstance??``);e.ok&&(i.socketPick=null),p(e,!1,`socket`);return}case`unsocket`:p(r.unsocket(c,d,Number(o.dataset.index)),!1,`unequip`);return}},g=t=>{let n=t.target;if(!e.contains(n))return;let i=r.state;switch(n.id){case`zoneLevel`:{r.setZoneLevel(Number(n.value));let t=e.querySelector(`#zone-label`);t&&(t.textContent=String(i.zoneLevel));let a=e.querySelector(`#followLevel`);a&&(a.checked=i.followLevel);break}case`rarityExtra`:{i.rarityExtra=Number(n.value);let t=e.querySelector(`#rarity-label`);t&&(t.textContent=`+${i.rarityExtra}%`);break}case`quantityExtra`:{i.quantityExtra=Number(n.value);let t=e.querySelector(`#quantity-label`);t&&(t.textContent=`+${i.quantityExtra}%`);break}default:return}H()},_=t=>{let n=t.target;if(!e.contains(n))return;let i=r.state;switch(n.id){case`followLevel`:i.followLevel=n.checked,n.checked&&(i.zoneLevel=i.charLevel);break;case`showHints`:i.showHints=n.checked;break;case`autoNormal`:i.autoSalvage.normal=n.checked;break;case`autoMagic`:i.autoSalvage.magic=n.checked;break;case`filter-all`:case`filter-leveling`:case`filter-endgame`:case`filter-upgrades`:i.filter=n.value;break;case`zoneLevel`:case`rarityExtra`:case`quantityExtra`:break;default:return}H(),l()};return e.addEventListener(`click`,m),e.addEventListener(`input`,g),e.addEventListener(`change`,_),l(),()=>{e.removeEventListener(`click`,m),e.removeEventListener(`input`,g),e.removeEventListener(`change`,_),window.clearTimeout(o),H(),e.innerHTML=``}}var st=`modulepreload`,ct=function(e){return`/battle-of-wellon/`+e},lt={},U=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ct(t,n),t=s(t),t in lt)return;lt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:st,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ut=`false`,dt=`false`,ft=ut===`true`,pt=dt===`true`;function mt(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,ft||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await U(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/battle-of-wellon/sw.js`,{scope:`/battle-of-wellon/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!pt){if(ft)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/battle-of-wellon/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function ht(e){let t=mt({immediate:!0,onOfflineReady:e.onOfflineReady,onNeedRefresh:()=>{e.onUpdateCheck(null),e.onNeedRefresh(()=>t(!0))},onRegisteredSW:(t,n)=>{if(n&&_t(n),!n||!navigator.onLine){e.onUpdateCheck(null);return}e.onUpdateCheck(`checking`);let r=window.setTimeout(()=>e.onUpdateCheck(null),8e3);n.update().then(()=>{e.onUpdateCheck(n.installing?`downloading`:null)},()=>e.onUpdateCheck(null)).finally(()=>{n.installing||window.clearTimeout(r)})},onRegisterError:()=>e.onUpdateCheck(null)})}var gt=12e5;function _t(e){let t=Date.now(),n=()=>{!navigator.onLine||Date.now()-t<3e5||(t=Date.now(),e.update().catch(()=>{}))};window.setInterval(n,gt),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&n()})}function vt(){return window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function yt(){let e=navigator.userAgent,t=navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;return/iPad|iPhone|iPod/.test(e)||t}function bt(e){window.addEventListener(`beforeinstallprompt`,t=>{t.preventDefault(),e(async()=>{await t.prompt();let{outcome:e}=await t.userChoice;return e===`accepted`})})}var xt=null,W=new Set;function St(){return xt}function Ct(e){xt=e;for(let e of W)e()}function wt(e){return W.add(e),()=>{W.delete(e)}}function Tt(){return`<div class="loading-screen" style="${E(`load-l`,`backdrops`,`loading-16x9`)}${E(`load-p`,`backdrops`,`loading-9x16`)}"><span>Loading…</span></div>`}var Et=()=>T(`icons`,`emblem`,`emblem emblem-art`)||`<img class="emblem" src="icons/emblem-256.png" width="128" height="128" alt="" />`,Dt=()=>`<div class="title-bg" style="${E(`art-l`,`backdrops`,`title-16x9`)}${E(`art-p`,`backdrops`,`title-9x16`)}"></div>`;function Ot(e){let t=e.checking===`checking`?`Checking for updates…`:e.checking===`downloading`?`Downloading an update…`:e.offline===`preparing`?`Preparing offline play…`:``;return t?`<div class="busy" role="status" aria-live="polite"><span class="spinner" aria-hidden="true"></span><span>${t}</span></div>`:``}function G(e,t){let n={preparing:`Preparing offline play…`,ready:`Ready to play offline`,preview:`Preview build (no offline mode)`,dev:`Dev mode (no service worker)`}[t.offline];e.innerHTML=`
    ${Dt()}
    <main class="title">
      <button class="btn btn-small btn-secondary mute-toggle" id="mute" aria-pressed="${s().allMuted}">Sound: ${s().allMuted?`Off`:`On`}</button>
      ${Et()}
      <h1>The Battle<br />of Wellon</h1>
      <p class="tagline">A loot-hunter's action RPG</p>

      <div class="actions">
        <button class="btn btn-primary" id="play">Play</button>
        <a class="btn" href="#lab">Loot Lab (Debugging)</a>
        <a class="btn" href="#jukebox">Jukebox</a>
        ${t.install?`<button class="btn btn-secondary" id="install">Install</button>`:``}
      </div>

      ${t.iosHint?`<p class="hint">To install on iPhone or iPad: tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</p>`:``}

      ${Ot(t)}
      <div class="status">
        <span class="chip" id="net" data-state="${navigator.onLine?`online`:`offline`}">${navigator.onLine?`Online`:`Offline`}</span>
        <span class="chip" data-state="${t.offline===`ready`?`ready`:``}">${n}</span>
      </div>

      ${t.update?`<div class="toast"><span>A new version is ready.</span><button class="btn btn-small" id="update-apply">Update</button></div>`:``}

      <footer>
        <span>v0.56.0</span>
        <span class="sep">·</span>
        <span title="2026-10-15T23:04:19.603Z">build 2026-10-15</span>
      </footer>
    </main>`;let r=e.querySelector(`#mute`);r?.addEventListener(`click`,()=>{let e=s();e.setAllMuted(!e.allMuted),r.textContent=`Sound: ${e.allMuted?`Off`:`On`}`,r.setAttribute(`aria-pressed`,String(e.allMuted))}),e.querySelector(`#play`)?.addEventListener(`click`,()=>t.onPlay()),e.querySelector(`#install`)?.addEventListener(`click`,()=>void t.install?.()),e.querySelector(`#update-apply`)?.addEventListener(`click`,()=>void t.update?.(),{once:!0})}function kt(e,t,n){e.innerHTML=`
    ${Dt()}
    <main class="title splash">
      ${Et()}
      <h1>The Battle<br />of Wellon</h1>
      <button class="btn btn-primary" id="enter">Tap to begin</button>
      ${n?Ot(n):``}
    </main>`,e.querySelector(`#enter`)?.addEventListener(`click`,t,{once:!0})}function K(){let e=document.documentElement;if(!(yt()&&vt())){e.style.removeProperty(`--app-h`);return}let t=window.innerHeight,n=window.innerWidth>window.innerHeight,r=window.screen,i=n?Math.min(r.width,r.height):Math.max(r.width,r.height);i>t&&i-t<=120&&(t=i),e.style.setProperty(`--app-h`,`${t}px`)}K(),window.addEventListener(`resize`,K),window.addEventListener(`orientationchange`,()=>window.setTimeout(K,200)),document.addEventListener(`visibilitychange`,K);var q=document.querySelector(`#app`);if(!q)throw Error(`#app missing`);var J={offline:`preparing`,update:null,install:null,iosHint:!1,checking:null,onPlay:()=>{Mt()}},Y=!1,X=null,Z=null;function At(){let e=location.hash===`#lab`?`lab`:location.hash===`#jukebox`?`jukebox`:location.hash===`#game`?`game`:`title`;if(e!==X){if(Z?.(),Z=null,Q=!1,X=e,document.body.dataset.screen=e,e!==`title`&&(Y=!0),e===`lab`)Z=ot(q);else if(e===`jukebox`)Z=se(q);else if(e===`game`)q.innerHTML=Tt(),U(async()=>{let{mountGame:e}=await import(`./game-CcELDupc.js`);return{mountGame:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({mountGame:e})=>{X===`game`&&(Z=e(q))});else{jt();let e=!1;try{e=sessionStorage.getItem(`wellon.toSlots`)===`1`,sessionStorage.removeItem(`wellon.toSlots`)}catch{}e&&Y&&Mt()}}}function jt(){let e=s();if(e.music.setMood(`intro`,!0),Y){G(q,J);return}e.armUnlock(),kt(q,()=>{Y=!0,e.unlock(),G(q,J)},J)}var Q=!1;async function Mt(){let{renderSlots:t}=await U(async()=>{let{renderSlots:e}=await import(`./slots-CPiEiVfh.js`);return{renderSlots:e}},__vite__mapDeps([8,2,3]));X===`title`&&(Q=!0,t(q,{onBack:()=>{Q=!1,G(q,J)},onChoose:async t=>{await e(t),Q=!1,location.hash=`#game`}}))}function $(){X===`title`&&!Q&&jt()}window.addEventListener(`hashchange`,At),document.addEventListener(`visibilitychange`,()=>{X!==`game`&&s().setPaused(document.hidden)}),window.addEventListener(`online`,$),window.addEventListener(`offline`,$),ht({onOfflineReady(){J.offline=`ready`,$()},onNeedRefresh(e){J.update=e,Ct(e),$()},onUpdateCheck(e){J.checking!==e&&(J.checking=e,$())}}),navigator.serviceWorker?.controller&&(J.offline=`ready`),vt()||(yt()?J.iosHint=!0:bt(e=>{J.install=async()=>{let t=await e();return t&&(J.install=null,$()),t},$()})),n().then(()=>At());export{ot as a,j as c,U as i,ve as l,wt as n,rt as o,St as r,I as s,Tt as t,ue as u};