const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-Cbxv3xcr.js","assets/CanvasPool-CX_31KdX.js","assets/art-CQs664kC.js","assets/act1-vnaLqVve.js","assets/canvasUtils-x2ND1UXV.js","assets/RenderTargetSystem-OSz9OCjs.js","assets/getTextureBatchBindGroup-eI8ZguMn.js","assets/BufferResource-24JE7Q3c.js","assets/slots-reDDuBLR.js"])))=>i.map(i=>d[i]);
import{At as e,Bt as t,C as n,D as r,Dt as i,Ft as a,G as o,Ht as s,It as c,J as l,M as u,N as d,Nt as f,Ot as p,P as m,Pt as h,R as g,Rt as _,S as v,T as y,Vt as b,Y as ee,c as te,d as ne,f as x,h as S,jt as re,k as ie,kt as C,n as w,ot as ae,r as T,st as oe,t as se,u as E,v as ce,wt as le,zt as D}from"./art-CQs664kC.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var O=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function ue(e){let n=D(),r=n.music;e.innerHTML=`
    <main class="jukebox">
      <div class="jb-top"><a class="btn btn-small" href="#" aria-label="Back to the title">‹ Back</a><h1>Jukebox</h1></div>
      <p class="tagline">Every tune in the Battle of Wellon</p>
      <p class="tagline" id="jb-summary"></p>
      <ul class="tracks">
        ${t.map(e=>`<li><button class="btn track" data-mood="${e.mood}" ${b(e.mood)?``:`disabled`}><span class="track-title">${e.title}${b(e.mood)?``:` · not recorded yet`}</span><span class="track-status" data-status="${e.mood}"></span><span class="track-where">${e.where}</span></button></li>`).join(``)}
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
        <label class="vol">Volume <input type="range" id="jb-vol" min="0" max="1" step="0.05" value="${n.settings.music}" /></label>
      </div>
      <a class="btn btn-secondary" href="#">Back</a>
    </main>`;let i=t=>e.querySelector(`#${t}`),a=i(`jb-now`),o=i(`jb-seek`),c=i(`jb-time`),l=i(`jb-dur`),u=i(`jb-play`),d=!1,f=e=>{n.unlock(),r.setMood(e,!0),r.setPaused(!1),m()},p=e=>{let n=t.length,i=t.findIndex(e=>e.mood===r.current);for(let r=0;r<n;r++)if(i=i<0?e>0?0:n-1:(i+e+n)%n,b(t[i].mood)){f(t[i].mood);return}};function m(){let n=t.find(e=>e.mood===r.current);for(let t of e.querySelectorAll(`.track`))t.classList.toggle(`active`,t.dataset.mood===r.current);let i=r.position(),s=!!i&&i.duration>0&&i.time>=i.duration-.05;a.textContent=n?`${r.isPaused()?s?`Finished`:`Paused`:`Now playing`}: ${n.title}`:`Pick a track to begin`,u.disabled=!n,o.disabled=!n,u.textContent=r.isPaused()?`Play`:`Pause`;let f=r.position();f&&f.duration>0&&(l.textContent=O(f.duration),d||(o.max=String(f.duration),o.value=String(f.time),c.textContent=O(f.time)))}e.querySelectorAll(`.track`).forEach(e=>e.addEventListener(`click`,()=>f(e.dataset.mood))),i(`jb-prev`).addEventListener(`click`,()=>p(-1)),i(`jb-next`).addEventListener(`click`,()=>p(1)),u.addEventListener(`click`,()=>{n.unlock(),r.setPaused(!r.isPaused()),m()}),o.addEventListener(`input`,()=>{d=!0,c.textContent=O(Number(o.value))}),o.addEventListener(`change`,()=>{r.seek(Number(o.value)),d=!1}),i(`jb-vol`).addEventListener(`input`,e=>n.setVolume(`music`,Number(e.target.value)));let h=[],g=t.filter(e=>b(e.mood)),_=0,v=()=>{i(`jb-summary`).textContent=`${g.length} of ${t.length} recorded${_?` · ${_} would not load`:``}`};v();for(let t of g){let n=new Audio;n.preload=`metadata`;let r=e.querySelector(`[data-status="${t.mood}"]`);n.addEventListener(`loadedmetadata`,()=>{r&&(r.textContent=` ✓ ${O(n.duration)}`)}),n.addEventListener(`error`,()=>{_++,r&&(r.textContent=` ⚠ file will not play (error ${n.error?.code??`?`}): re-export it as a plain MP3`,r.classList.add(`bad`)),v()}),n.src=s(t.mood),h.push(n)}r.setMood(`off`,!0),n.armUnlock();let y=window.setInterval(m,250);return()=>{window.clearInterval(y);for(let e of h)e.removeAttribute(`src`),e.load()}}var de=[{id:`all`,name:`Show everything`,description:`Every drop is picked up.`},{id:`leveling`,name:`Leveling`,description:`Normal items are salvaged on contact once you reach level 8; Magic from level 25.`},{id:`endgame`,name:`Endgame`,description:`Normal and Magic items are salvaged on contact. Rares and uniques only.`},{id:`upgrades`,name:`Upgrades only`,description:`Only uniques and items that beat what you wear are picked up; the rest are salvaged on contact.`}];function fe(e,t,n){return e===`upgrades`?t===`normal`||t===`magic`:t===`rare`||t===`unique`||e===`all`?!1:e===`endgame`?!0:t===`normal`?n>=8:n>=25}function pe(e,t,n){return fe(e,t.rarity,n)}var me={vanguard:`str`,hunter:`dex`,arcanist:`int`},he=new Map;function ge(e){return he.get(e)??me[e]??`str`}function _e(e,t){he.set(e,t)}var ve=[[`DPS`,e=>e.dps,``,1],[`Life`,e=>e.life,``,0],[`Mana`,e=>e.mana,``,0],[`Ward`,e=>e.ward,``,0],[`Armour`,e=>e.armour,``,0],[`Evasion`,e=>e.evasion,``,0],[`Block`,e=>e.block,`%`,0],[`Fire res`,e=>e.resistances.fire,`%`,0],[`Cold res`,e=>e.resistances.cold,`%`,0],[`Lightning res`,e=>e.resistances.lightning,`%`,0],[`Chaos res`,e=>e.resistances.chaos,`%`,0],[`Str`,e=>e.attributes.str,``,0],[`Dex`,e=>e.attributes.dex,``,0],[`Int`,e=>e.attributes.int,``,0],[`Crit chance`,e=>e.critChance,`%`,1],[`Spell damage`,e=>e.spellDamagePct,`%`,0],[`Move speed`,e=>e.movementSpeed,`%`,0],[`Item rarity`,e=>e.itemRarity,`%`,0],[`Life regen`,e=>e.lifeRegen,`/s`,1]],k=4;function ye(e,t){let n=[];for(let[r,i,a,o]of ve){let s=Number(i(e).toFixed(o)),c=Number(i(t).toFixed(o));c!==s&&n.push({label:r,before:s,after:c,unit:a,decimals:o})}return n}function be(e,t){let n=[];for(let[r,i,a,o]of ve){let s=Number((i(t)-i(e)).toFixed(o));s!==0&&n.push(`${r} ${s>0?`+`:`−`}${Math.abs(s).toFixed(o)}${a}`)}return n.length===0?`no change to your stats`:n.length<=k?n.join(`, `):`${n.slice(0,k).join(`, `)} and ${n.length-k} more`}var A=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),xe=8,Se=(e,t,n)=>`${e.toFixed(t)}${n}`;function Ce(e){let t=e.after>e.before,n=Math.max(Math.abs(e.before),Math.abs(e.after),1e-9),r=Math.min(Math.abs(e.before),Math.abs(e.after))/n*100,i=100-r,a=e.after-e.before;return`<div class="gd-row ${t?`up`:`down`}" title="${A(e.label)}: ${Se(e.before,e.decimals,e.unit)} → ${Se(e.after,e.decimals,e.unit)}">
    <span class="gd-label">${A(e.label)}</span>
    <span class="gd-delta">${t?`▲`:`▼`}${t?`+`:`−`}${Math.abs(a).toFixed(e.decimals)}${e.unit}</span>
    <span class="gd-bar"><i class="gd-keep" style="width:${r.toFixed(1)}%"></i><i class="gd-change" style="width:${i.toFixed(1)}%"></i></span>
  </div>`}function we(e,t,n,r,i=`Equipped`,a=``){let o=ye(n,r),s=o.filter(e=>e.after>e.before).length,c=o.length-s,l=o.length===0?`No change to your stats`:c===0?`All gains`:s===0?`All losses`:`${s} up · ${c} down`,u=o.slice(0,xe),d=o.length-u.length;return`<div class="gd-head"><span class="gd-verb">${A(i)}</span><b class="${t}">${A(e)}</b>${a?`<span class="gd-meta">${A(a)}</span>`:``}<em class="gd-verdict ${c===0&&s?`good`:s===0&&c?`bad`:``}">${l}</em></div>
    <div class="gd-grid">${u.map(Ce).join(``)}</div>${d>0?`<div class="gd-more">+${d} more</div>`:``}`}var Te;function j(e,t,n,r,i=`Equipped`,a=5200,o=``){let s=document.getElementById(`gear-diff`);s||(s=document.createElement(`div`),s.id=`gear-diff`,s.setAttribute(`role`,`status`),s.addEventListener(`click`,()=>s.classList.remove(`show`)),document.body.appendChild(s)),s.innerHTML=we(e,t,n,r,i,o),s.classList.remove(`show`),s.offsetWidth,s.classList.add(`show`),window.clearTimeout(Te),Te=window.setTimeout(()=>s.classList.remove(`show`),a)}typeof window<`u`&&window.addEventListener(`hashchange`,()=>document.getElementById(`gear-diff`)?.classList.remove(`show`));var Ee={str:[`ring_life`,`ring_gold`],dex:[`ring_speed`,`ring_flask`],int:[`ring_res`,`ring_rarity`]},De=e=>e.id===`core`?`core`:e.mastery?`mastery`:e.keystone?`notable`:`minor`;function Oe(e){let t=Ee[e],n=[a.passives.get(`core`),...a.passiveList.filter(t=>t.branch===e),...t.map(e=>a.passives.get(e))],r=new Set(n.map(e=>e.id)),i=new Map;i.set(`core`,{x:0,y:0});let o=n.filter(t=>RegExp(`^${e}_\\d+$`).test(t.id)).sort((e,t)=>Number(e.id.split(`_`)[1])-Number(t.id.split(`_`)[1]));o.forEach((e,t)=>i.set(e.id,{x:0,y:t+1}));let s=new Map(o.map((e,t)=>[e.id,t+1])),c=new Map;for(let t of n){let n=RegExp(`^${e}_([a-z]+)_(\\d+)$`).exec(t.id);n&&c.set(n[1],[...c.get(n[1])??[],t])}[...c.values()].map(e=>e.sort((e,t)=>Number(e.id.split(`_`)[2])-Number(t.id.split(`_`)[2]))).sort((e,t)=>(s.get(e[0].links[0])??0)-(s.get(t[0].links[0])??0)).forEach((e,t)=>{let n=t%2==0?-1:1,r=s.get(e[0].links[0])??1,a=[[1.2,.6],[2.2,1.5],[2.2,2.5],[2.2,3.5]];e.forEach((e,t)=>{let[o,s]=a[Math.min(t,a.length-1)];i.set(e.id,{x:n*o,y:r+s+Math.max(0,t-3)})})});let l=[[1.1,.55],[2,1.25]];t.forEach((e,t)=>i.set(e,{x:l[t][0],y:l[t][1]}));let u=o.length;n.filter(e=>e.mastery).sort((e,t)=>e.id.localeCompare(t.id)).forEach((e,t,n)=>{let r=n.length===1?0:t===0?-.95:.95;i.set(e.id,{x:r,y:u+1.7})});let d=n.map(e=>{let t=i.get(e.id)??{x:0,y:0},n=[...new Set(e.links.filter(e=>!r.has(e)).map(e=>e.split(`_`)[0]))].filter(e=>e===`str`||e===`dex`||e===`int`);return{def:e,x:t.x,y:t.y,tier:De(e),crossTo:n}}),f=new Set,p=[];for(let e of n)for(let t of e.links){if(!r.has(t))continue;let n=[e.id,t].sort().join(`|`);f.has(n)||(f.add(n),p.push({a:t,b:e.id}))}let m=d.map(e=>e.x),h=d.map(e=>e.y);return{nodes:d,edges:p,minX:Math.min(...m),maxX:Math.max(...m),minY:Math.min(...h),maxY:Math.max(...h)}}var M=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e),N={mainHand:`Main hand`,offHand:`Off hand`,helm:`Helm`,body:`Body`,gloves:`Gloves`,boots:`Boots`,belt:`Belt`,ring1:`Ring`,ring2:`Ring`,amulet:`Amulet`},P=(e,t)=>`data-place="${e}" data-id="${M(t)}"`;function ke(e,t){if(!e.state.showHints)return``;let n=e.scoreDelta(t);return n===null?``:n>.5?`<span class="badge up">▲ ${n.toFixed(0)}</span>`:n<-.5?`<span class="badge down">▼</span>`:`<span class="badge same">≈</span>`}function Ae(e){return e.sockets.length===0?``:`<span class="sockets">${e.sockets.map((t,n)=>`<i class="socket ${t}${e.runes?.[n]?` filled`:``}"></i>`).join(``)}</span>`}function F(e,t){let n=e?w(`icons`,ce(t?.uniqueId)??te(e),`glyph-img`):``;return n?`<span class="glyph art">${n}</span>`:`<span class="glyph">${M(e?.abbrev??`???`)}</span>`}function I(e,t,n,r=``){let i=p(t,a),o=a.bases.get(t.baseId),s=r?`div`:`button`;return`
    <${s} class="item-row r-${t.rarity}${t.corrupted?` corrupted`:``}${n===`inventory`&&(e.scoreDelta(t)??0)>.5?` is-upgrade`:``}"${r?``:` data-act="select" ${P(n,t.id)}`}>
      ${F(o,t)}
      <span class="item-main">
        <span class="item-name">${e.isLocked(t.id)?`★ `:``}${M(i.name)}</span>
        <span class="item-sub">${M(i.baseName)} · ilvl ${t.itemLevel}${t.affixes.length?` · ${t.affixes.length} mod${t.affixes.length===1?``:`s`}`:``} ${t.sockets.length?`· ${t.sockets.length}S `:``}${Ae(t)}</span>
      </span>
      ${r?`<span class="row-end">${n===`equipment`?``:ke(e,t)}${r}</span>`:n===`equipment`?``:ke(e,t)}
    </${s}>`}function L(e,t,n,r){return t.length===0?`<p class="empty">${M(r)}</p>`:`<div class="list">${[...t].sort((e,t)=>Number(t.rarity===`unique`)-Number(e.rarity===`unique`)).map(t=>I(e,t,n)).join(``)}</div>`}function je(t,n){let r=t.state,i=e(r.charLevel),a=r.charLevel>=d.level?100:Math.min(100,r.xp/i*100);return`
    <header class="lab-header has-back">
      ${n.mode===`game`?`<button class="btn btn-small lab-back" data-act="resume" aria-label="Back to game">‹ Back</button>`:`<a class="btn btn-small lab-back" href="#" aria-label="Back to title">‹ Back</a>`}
      <div class="lab-title">
        <strong>${n.mode===`game`?`Bag &amp; Gear`:`Loot Lab`}</strong>
        <span>Level ${r.charLevel}${n.mode===`game`?``:` · zone ${r.zoneLevel}`}</span>
      </div>
      <div class="xp" title="${r.xp} / ${i} XP"><div class="xp-fill" style="width:${a.toFixed(1)}%"></div></div>
    </header>`}function Me(e,t){let n=e.state,r=n.log[0]??`Nothing has died yet.`;return`
    <section class="dials">
      <label class="dial">
        <span>Zone level <b id="zone-label">${n.zoneLevel}</b></span>
        <input type="range" id="zoneLevel" min="1" max="${d.level}" value="${n.zoneLevel}" />
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
      ${Re(e,t,`ground`)}
      ${L(e,n.ground,`ground`,`Kill something.`)}
    </section>`}function R(e,t,n=``){return`<div class="stat ${n}"><span>${M(e)}</span><b>${M(String(t))}</b></div>`}function z(e,t,n){let r=e.state.equipment[t],i=r?a.bases.get(r.baseId):void 0;return r?`<button class="doll-slot r-${r.rarity}${r.corrupted?` corrupted`:``}" style="grid-area:${n}" data-act="select" ${P(`equipment`,r.id)}>
    ${F(i,r)}<span class="doll-label">${N[t]}</span></button>`:`<div class="doll-slot empty" style="grid-area:${n}"><span class="glyph">—</span><span class="doll-label">${N[t]}</span></div>`}function Ne(e){let t=w(`dolls`,e.state.classId,`doll-figure`);return`
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
    </div>`}var B=(e,t,n,r=``,i=null)=>`<div class="cs-tile ${e}"><small>${w(`icons`,i,`cs-glyph`)}${M(t)}</small><b>${M(String(n))}</b>${r?`<em>${M(r)}</em>`:``}</div>`;function Pe(e){let t=ae(e.state.classId).skills,n=l(e.state.classId,e.state.skillLevels),r=t.map((e,t)=>{let r=oe(e),i=n[t]??0,a=r.cooldown>0?`${r.cooldown}s cooldown${r.mana?` · ${r.mana} mana`:``}`:`Automatic`;return`<li class="skill-row${i?``:` locked`}"><span class="sk-name">${M(r.name)}</span><span class="sk-lv">${i?`Lv ${i}/8`:`Not learned`}</span><span class="sk-desc">${M(r.description)}${i?` <em>${M(a)}</em>`:``}</span></li>`}).join(``),i=o.filter(t=>(e.state.upgrades[t.id]??0)>0).map(t=>`<li><span>${w(`icons`,ne(t.id),`cs-glyph`)}${M(t.name)} <small>×${e.state.upgrades[t.id]}</small></span><em>${M(t.describe(e.state.upgrades[t.id]))}</em></li>`).join(``);return`<div class="char-skills"><h3>Skills</h3><ul class="skill-list">${r}</ul>${i?`<h3>Level-up picks</h3><ul class="pick-list">${i}</ul>`:``}</div>`}function Fe(t,n){let r=t.state,i=e(r.charLevel),a=Math.max(0,Math.min(100,r.xp/Math.max(1,i)*100)),o=e=>`conic-gradient(var(--gold) ${e*3.6}deg, rgba(255,255,255,0.1) 0)`,s=[[`Fire`,`fire`],[`Cold`,`cold`],[`Lightning`,`lightning`],[`Chaos`,`chaos`]].map(([e,t])=>{let r=n.resistances[t],i=n.resistancesRaw[t],a=Math.max(0,Math.min(100,r/75*100));return`<div class="cs-res ${t}${r<0?` neg`:``}${r>=75?` capped`:``}">
      <span class="cs-res-name">${w(`icons`,S(`resist-${t}`),`cs-glyph`)}${e}</span>
      <span class="cs-bar"><i style="width:${a}%"></i></span>
      <span class="cs-res-val">${r}%${i>r?`<small> (${i})</small>`:``}</span>
    </div>`}).join(``),c=n.damageMix,l=[`physical`,`fire`,`cold`,`lightning`,`chaos`].filter(e=>c[e]>.005),u=`<div class="cs-mix" role="img" aria-label="Damage mix">${l.map(e=>`<i class="${e}" style="width:${(c[e]*100).toFixed(1)}%" title="${e} ${Math.round(c[e]*100)}%"></i>`).join(``)}</div>
    <div class="cs-mix-legend">${l.map(e=>`<span class="${e}">${e} ${Math.round(c[e]*100)}%</span>`).join(``)}</div>`,d=n.ailments,f=[`bleed`,`ignite`,`shock`,`poison`,`chill`].filter(e=>d[e]>0).map(e=>`<span class="cs-chip ${e}">${w(`icons`,se(e),`cs-glyph`)}${e} ${d[e]}%</span>`).join(``),p=(e,t)=>`<div class="cs-attr ${e}"><b>${n.attributes[e]}</b><small>${t}</small></div>`;return`<div class="charsheet">
    <div class="cs-top">
      <div class="cs-ring" style="background:${o(a)}"><span>${n.level}</span></div>
      <div class="cs-top-text"><strong>Level ${n.level}</strong><span class="cs-bar xp"><i style="width:${a}%"></i></span><small>${r.xp} / ${i} xp</small></div>
    </div>

    <div class="cs-hero">
      <div class="cs-dps"><b>${n.dps.toFixed(1)}</b><small>damage per second</small></div>
      <div class="cs-offense">
        ${B(``,`Per hit`,`${n.hitMin}–${n.hitMax}`)}
        ${B(``,`Attacks / s`,n.attacksPerSecond.toFixed(2))}
        ${B(``,`Crit`,`${n.critChance.toFixed(0)}%`,`×${n.critMulti.toFixed(2)}`,S(`crit`))}
      </div>
      ${u}
      ${f?`<div class="cs-chips">${f}</div>`:``}
    </div>

    <div class="cs-vitals">
      ${B(`life`,`Life`,n.life,n.lifeRegen?`+${n.lifeRegen}/s`:``,S(`life`))}
      ${B(`mana`,`Mana`,n.mana,``,S(`mana`))}
      ${B(`ward`,`Ward`,n.ward,n.level<20?`unlocks at level 20`:``,S(`ward`))}
    </div>

    <div class="cs-attrs">${p(`str`,`Strength`)}${p(`dex`,`Dexterity`)}${p(`int`,`Intelligence`)}</div>

    <div class="cs-defence">
      ${B(`armour`,`Armour`,n.armour,``,S(`armour`))}
      ${B(`evasion`,`Evasion`,n.evasion,``,S(`evasion`))}
      ${B(`block`,`Block`,`${n.block}%`,``,S(`block`))}
    </div>

    <div class="cs-resists"><small class="cs-title">Resistances <em>(cap 75%)</em></small>${s}</div>

    <div class="cs-misc">
      ${B(``,`Move speed`,`+${n.movementSpeed}%`,``,S(`speed`))}
      ${B(``,`Item rarity`,`+${n.itemRarity+ee(r.upgrades).luckFlat+g(r.blessings).luckFlat}%`,``,S(`rarity`))}
      ${B(``,`Spell damage`,`+${n.spellDamagePct}%`)}
    </div>
  </div>`}function Ie(e,t){let n=e.state,r=e.summary(),i=_.map(t=>{let r=n.equipment[t];return`
      <div class="slot">
        <span class="slot-label">${N[t]}</span>
        ${r?I(e,r,`equipment`):`<div class="item-row empty-slot"><span class="glyph">—</span><span class="item-main"><span class="item-sub">Empty</span></span></div>`}
      </div>`}).join(``);return`
    <section class="gear-equip">
      <div class="section-head"><h2>Equipment</h2>${t.mode===`game`?`<button class="btn btn-small" data-act="auto-equip">Auto-Equip</button>`:``}</div>
      <div class="gear-columns">
        ${Ne(e)}
        <div class="slots">${i}</div>
      </div>
    </section>
    <section class="gear-char">
      <h2>Character</h2>
      ${w(`classes`,e.state.classId,`char-portrait`)}
      ${Fe(e,r)}
      ${Pe(e)}
    </section>`}var Le=[{id:`normal`,label:`Normal`,rarities:[`normal`]},{id:`magic`,label:`Up to Magic`,rarities:[`normal`,`magic`]},{id:`rare`,label:`Up to Rare`,rarities:[`normal`,`magic`,`rare`]}];function Re(e,t,n){return`<div class="row-actions salvage-tiers"><span class="hint">Salvage</span>${Le.map(r=>{let i=e.salvageCount(n,r.rarities),a=t.confirmSalvage===`${n}:${r.id}`;return`<button class="btn btn-small ${a?`btn-danger`:``}" data-act="salvage-tier" data-place="${n}" data-tier="${r.id}" ${i?``:`disabled`}>${a?`Tap again: salvage ${i}`:`${r.label} · ${i}`}</button>`}).join(``)}</div>`}function ze(e,t){let n=e.state;return`
    <section class="bag-items">
      <div class="section-head">
        <h2>Bag <span class="count">${n.inventory.length}/${e.bagSize()}</span></h2>
      </div>
      ${Re(e,t,`inventory`)}
      <p class="hint">Uniques and starred items are locked and never salvaged. Unlock one from its details.</p>
      ${L(e,n.inventory,`inventory`,`Your bag is empty. Take something from the ground.`)}
    </section>
    <section class="bag-runes">
      <div class="section-head"><h2>Rune pouch <span class="count">${n.runes.length}</span></h2>${e.runeGroups().some(e=>e.count>=3&&e.level<5)?`<button class="btn btn-small" data-act="fuse-all">Fuse all</button>`:``}</div>
      <p class="hint">Open an item and tap a socket to set a rune. Three of a kind and level fuse into the next level.</p>
      ${Xe(e)}
    </section>`}var V={str:`Strength`,dex:`Dexterity`,int:`Intelligence`},Be={str:`#d9574b`,dex:`#58b368`,int:`#5b8be6`},Ve={heart:`M12 20.5s-7.5-4.8-9.6-9.4C1 8.2 2.6 4.8 6 4.8c2.1 0 3.5 1 4.2 2.3.7-1.3 2.1-2.3 4.2-2.3 3.400 0 5 3.400 3.600 6.300-2.100 4.600-9.600 9.400-9.600 9.400z`,shield:`M12 3l8 3v6c0 4.600-3.300 8-8 9.200C7.300 20 4 16.600 4 12V6l8-3z`,blade:`M5 19L19 5m-5 0h5v5M7 14l3 3M4 20l2.500-2.500`,bolt:`M13 2.500L5.500 13H11l-1 8.500L18 10.500h-5.500L13 2.500z`,aim:`M12 7.500a4.500 4.500 0 1 0 0 9 4.500 4.500 0 0 0 0-9zM12 3v3.500M12 17.500V21M3 12h3.500M17.500 12H21`,chevrons:`M6 6l6 6-6 6M13 6l6 6-6 6`,drop:`M12 3s6.200 6.600 6.200 11a6.200 6.200 0 0 1-12.400 0C5.800 9.600 12 3 12 3z`,flame:`M12 3c.800 4 5 5.200 5 10a5 5 0 0 1-10 0c0-2 1-3.200 2.200-4.200 0 2 .900 3 2 3C10.200 8.800 10.800 6 12 3z`,star:`M12 3.500l2.600 5.500 6 .8-4.400 4.200 1.100 6L12 17.200 6.700 20l1.100-6L3.400 9.800l6-.8L12 3.500z`,plus:`M12 5v14M5 12h14`};function He(e){let t=(e.mods.find(e=>e.value>0)??e.mods[0])?.stat??``,n=e=>e.test(t);return n(/^life|regen$/)?`heart`:n(/armour|block|ward_|^all_res|_res$/)?`shield`:n(/^damage|dot_pct|bleed|poison/)?`blade`:n(/attack_speed/)?`bolt`:n(/crit/)?`aim`:n(/evasion|movement/)?`chevrons`:n(/mana|flask|pickup/)?`drop`:n(/elemental|ignite|shock|lantern|spell/)?`flame`:n(/rarity|gold/)?`star`:`plus`}var Ue=96,We=84,Ge=64,Ke=44,qe={core:30,minor:21,notable:28,mastery:38},Je={core:`Starting node`,minor:`Minor`,notable:`Notable`,mastery:`Mastery`};function Ye(e,t){let n=e.state,r=e.passivePointsLeft(),i=t.treeBranch,o=Be[i],s=Oe(i),c=e=>(e-s.minX)*Ue+Ge,l=e=>(e-s.minY)*We+Ke,u=(s.maxX-s.minX)*Ue+128,d=(s.maxY-s.minY)*We+Ke+58,p=new Map(s.nodes.map(e=>[e.def.id,e])),m=new Set(n.passives),h=new Set(s.nodes.filter(e=>!m.has(e.def.id)&&f(e.def.id,n.passives,999,a).ok).map(e=>e.def.id)),g=s.edges.map(({a:e,b:t})=>{let n=p.get(e),r=p.get(t);return`<line class="edge ${m.has(e)&&m.has(t)?`taken`:m.has(e)&&h.has(t)||m.has(t)&&h.has(e)?`open`:`far`}" x1="${c(n.x)}" y1="${l(n.y)}" x2="${c(r.x)}" y2="${l(r.y)}" />`}).join(``),_=s.nodes.map(e=>{let n=e.def.id,r=m.has(n)?`have`:h.has(n)?`can`:`locked`,i=qe[e.tier],a=c(e.x),o=l(e.y),s=t.treeSelected===n,u=Ve[He(e.def)],d=i*1.05/24,f=e.tier===`notable`||e.tier===`mastery`?`<circle class="ring" r="${i-5}" />`:``,p=e.tier===`mastery`?`<circle class="ring2" r="${i+5}" />`:``,g=e.crossTo.length?`<text class="cross" x="${i+6}" y="4">⇄ ${e.crossTo.map(e=>V[e].slice(0,3)).join(` · `)}</text>`:``,_=e.def.name.length>15?`${e.def.name.slice(0,14)}…`:e.def.name;return`<g class="tn ${e.tier} ${r}${s?` sel`:``}" transform="translate(${a} ${o})" data-act="tree-select" data-id="${n}" role="button" tabindex="0" aria-label="${M(e.def.name)}, ${Je[e.tier].toLowerCase()}, ${r===`have`?`taken`:r===`can`?`available`:`not yet reachable`}">
      <circle class="halo" r="${i+8}" />${p}
      <circle class="body" r="${i}" />${f}
      <g class="glyph" transform="translate(${-12*d} ${-12*d}) scale(${d})"><path d="${u}" /></g>
      <text class="lbl" y="${i+14}">${M(_)}</text>${g}
    </g>`}).join(``),v=t.treeSelected?p.get(t.treeSelected):void 0,y=``;if(v){let e=v.def.id,t=m.has(e),n=h.has(e),i=t?`<span class="badge same">Taken</span>`:n&&r>0?`<button class="btn btn-primary btn-small" data-act="passive" data-id="${e}">Take (1 point)</button>`:n?`<span class="badge down">No passive points left</span>`:`<span class="badge down">Take a connected node first</span>`,a=qe[v.tier],o=c(v.x),s=l(v.y),f=Math.min(250,u-8),p=o+a+12;p+f>u-4&&(p=o-a-12-f),p=Math.max(4,Math.min(u-f-4,p));let g=Math.max(4,Math.min(d-190,s-28));y=`<div class="tree-pop ${v.tier}" style="left:${p}px;top:${g}px;width:${f}px" role="dialog" aria-label="${M(v.def.name)}">
      <button class="tp-close" data-act="tree-select" data-id="" aria-label="Close">×</button>
      <div class="tp-head"><strong>${M(v.def.name)}</strong><span class="tp-tier">${Je[v.tier]}</span></div>
      <ul class="tp-mods">${v.def.mods.map(e=>`<li class="${e.value<0?`neg`:``}">${M(e.text)}</li>`).join(``)}</ul>
      ${v.tier===`mastery`?`<p class="hint">A rare, build-defining choice, and usually costs something.</p>`:``}
      <div class="tp-action">${i}</div>
    </div>`}let b=[`str`,`dex`,`int`].map(e=>`<button class="btn btn-small ${e===i?`active`:``}" data-act="tree-branch" data-branch="${e}" style="${e===i?`border-color:${Be[e]}`:``}">${V[e]}</button>`).join(``);return`
    <section class="tree-section" style="--accent:${o}">
      <div class="section-head"><h2>Passives <span class="count">${r} point${r===1?``:`s`} left</span></h2><button class="btn btn-small" data-act="passive-reset" ${n.passives.length>1?``:`disabled`}>Reset</button></div>
      <div class="row-actions" style="margin-bottom:8px">${b}</div>
      <div class="tree-legend"><span class="lg minor"></span>Minor <span class="lg notable"></span>Notable <span class="lg mastery"></span>Mastery<span class="tree-tip">Tap a node to read it. Drag to look around.</span></div>
      <div class="tree-canvas" data-centre-x="${c(0)}">
        <div class="tree-wrap" style="width:${u}px;height:${d}px">
        <svg class="tree-svg" width="${u}" height="${d}" viewBox="0 0 ${u} ${d}" role="group" aria-label="${V[i]} passive tree">
          <defs>
            <radialGradient id="tn-body" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#3a3326" /><stop offset="1" stop-color="#14110e" /></radialGradient>
            <radialGradient id="tn-have" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#7a5a1c" /><stop offset="1" stop-color="#2a1d08" /></radialGradient>
            <radialGradient id="tn-mastery" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#4d3a6a" /><stop offset="1" stop-color="#17102a" /></radialGradient>
            <filter id="tn-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5" /></filter>
          </defs>
          <g class="edges">${g}</g>
          <g class="nodes">${_}</g>
        </svg>
        ${y}
        </div>
      </div>
    </section>`}function Xe(e){let t=e.runeGroups();return t.length===0?`<p class="empty">No runes yet. Monsters drop them; rares and bosses more often.</p>`:`<div class="list">${t.map(e=>{let t=a.runes.get(e.runeId);return t?`
      <div class="rune-row">
        ${x(t.id)?w(`icons`,x(t.id),`rune-img`):`<i class="socket ${t.colour} big"></i>`}
        <span class="item-main"><span class="item-name">${M(t.name)} <b>L${e.level}</b> ×${e.count}</span><span class="item-sub">${M(h(t,e.level))}</span></span>
        ${e.count>=3&&e.level<5?`<button class="btn btn-small" data-act="fuse" data-rune="${e.runeId}" data-level="${e.level}">Fuse 3</button>`:``}
      </div>`:``}).join(``)}</div>`}function Ze(e,t){let n=e.state,r=`
    <section>
      <div class="section-head"><h2>Stash <span class="count">${n.stash.length}/${d.stash}</span></h2></div>
      ${L(e,n.stash,`stash`,`Nothing stashed yet.`)}
    </section>`;if(t.embedded&&t.tab===`stash`)return r;let i=`
    <section>
      <div class="section-head"><h2>Shared stash <span class="count">${e.shared.length}/${d.shared}</span></h2></div>
      <p class="hint">Every hero on this device can open this stash. Shields, quivers and spell books only fit their own class, so put the ones you cannot wear here for another hero. Open an item and tap Share.</p>
      ${L(e,e.shared,`shared`,`Nothing shared yet.`)}
    </section>`;return t.embedded?i:r+i}function Qe(e,t){let n=e.state,r=c.map(e=>{let t=n.wallet[e.id]??0,r=n.wallet[`shard:${e.id}`]??0;return`
      <div class="orb ${t?``:`none`}">
        ${E(e.id)?`<span class="orb-short art">${w(`icons`,E(e.id),`orb-img`)}</span>`:`<span class="orb-short">${e.short}</span>`}
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
      ${de.map(e=>`<label class="check opt"><input type="radio" name="filter" id="filter-${e.id}" value="${e.id}" ${n.filter===e.id?`checked`:``} /><span><b>${M(e.name)}</b><small class="hint">${M(e.description)}</small></span></label>`).join(``)}
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
    </section>`}function $e(e,t){let n=e.state;return`<nav class="tabbar">${[...t.mode===`game`?[]:[[`hunt`,`Hunt`,n.ground.length?String(n.ground.length):``]],[`gear`,`Gear`,e.upgradeSlotCount()?`▲${e.upgradeSlotCount()}`:``],[`bag`,`Bag`,`${n.inventory.length}`],[`stash`,`Stash`,n.stash.length?String(n.stash.length):``],[`tree`,`Tree`,e.passivePointsLeft()?String(e.passivePointsLeft()):``],[`orbs`,`Orbs`,String(Object.entries(n.wallet).filter(([e])=>!e.startsWith(`shard:`)).reduce((e,[,t])=>e+t,0))]].map(([e,n,r])=>`<button class="tab ${t.tab===e?`active`:``}" data-act="tab" data-tab="${e}">${n}${r?`<span class="tab-badge">${r}</span>`:``}</button>`).join(``)}</nav>`}function et(e,t,n=!1){let r=t?F(a.bases.get(t.baseId),t):``;return`
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
    </div>`}function tt(e,t,n){if(n===`equipment`)return``;let r=e.comparisonFor(t);if(!r)return``;let i=C(t,a),o=r.current?C(r.current,a):null,s=(e,t)=>e?e.global[t]??0:0,c=[];(i.weapon||o?.weapon)&&c.push([`DPS`,i.weapon?.dps??0,o?.weapon?.dps??0]),(i.defence||o?.defence)&&(c.push([`Armour`,i.defence?.armour??0,o?.defence?.armour??0]),c.push([`Evasion`,i.defence?.evasion??0,o?.defence?.evasion??0]),c.push([`Ward`,i.defence?.ward??0,o?.defence?.ward??0])),c.push([`Life`,s(i,`life_flat`),s(o,`life_flat`)]);let l=e=>s(e,`fire_res`)+s(e,`cold_res`)+s(e,`lightning_res`)+3*s(e,`all_res`);c.push([`Ele. res total`,l(i),l(o)]),c.push([`Move speed`,s(i,`movement_speed`),s(o,`movement_speed`)]);let u=c.filter(([,e,t])=>e!==0||t!==0).map(([e,t,n])=>{let r=Math.round((t-n)*10)/10;return`<div class="cmp-row"><span>${e}</span><b class="${r>0?`up`:r<0?`down`:`same`}">${r>0?`+`:``}${r}</b></div>`}).join(``),d=e.scoreDelta(t)??0;return`<div class="compare"><div class="cmp-head">${r.current?`Replaces <b>${M(p(r.current,a).name)}</b> (score ${e.score(r.current).toFixed(0)})`:`Fills your empty <b>${N[r.slot]}</b> slot`} ${e.state.showHints?`<span class="badge ${d>.5?`up`:d<-.5?`down`:`same`}">${d>0?`+`:``}${d.toFixed(0)}</span>`:``}</div>${u}</div>`}function nt(e,t,n){if(n===`equipment`)return``;let r=e.comparisonFor(t),o=r?[r.slot]:[],s=e.attributes(o),c=C(t,a).requirements,l=Object.entries(c).filter(([e,t])=>t>s[e]).map(([e,t])=>`${t-s[e]} ${{str:`Str`,dex:`Dex`,int:`Int`}[e]}`),u=a.bases.get(t.baseId);return u?.classes&&!e.classOk(t)?`<p class="req-fail">Only ${M(u.classes.map(e=>i[e]).join(` or `))} can wear this. Share it or stash it for another hero (in town).</p>`:l.length?`<p class="req-fail">You need ${M(l.join(`, `))} more to equip this.</p>`:``}function rt(e,t,n){if(!n.craftOpen)return``;let r=e.state,i=c.map(e=>{let n=r.wallet[e.id]??0,i=le(t,e.id,a),o=n>0&&i.ok,s=n===0?`none owned`:i.ok?``:i.reason;return`
      <button class="orb-btn ${o?``:`cant`}" data-act="orb" data-orb="${e.id}" ${o?``:`disabled`}>
        ${E(e.id)?`<span class="orb-short art">${w(`icons`,E(e.id),`orb-img`)}</span>`:`<span class="orb-short">${e.short}</span>`}
        <span class="orb-main"><span class="orb-name">${M(e.name)} <b>×${n}</b></span><span class="orb-desc">${M(s||e.description)}</span></span>
      </button>`}).join(``);return`<div class="craft">${n.craftNote?`<p class="craft-note">${M(n.craftNote)}</p>`:``}<div class="orbs">${i}</div></div>`}function it(e,t,n,r){if(t.sockets.length===0)return``;let i=t.sockets.map((e,i)=>{let o=t.runes?.[i],s=o?a.runes.get(o.runeId):void 0;return`<button class="socket-cell ${e} ${n.socketPick===i?`open`:``}" data-act="socket-open" data-index="${i}" ${r}>
      <i class="socket ${e} big${o?` filled`:``}"></i>
      <span>${s?`${M(s.name)} L${o.level}`:`Empty`}</span>
      ${s&&o?`<em>${M(h(s,o.level))}</em>`:``}
    </button>`}).join(``),o=``;if(n.socketPick!==null&&n.socketPick<t.sockets.length){let i=t.sockets[n.socketPick],s=e.runeGroups().filter(e=>a.runes.get(e.runeId)?.colour===i);o=`<div class="socket-picker">
      ${t.runes?.[n.socketPick]?`<button class="btn btn-small" data-act="unsocket" data-index="${n.socketPick}" ${r}>Remove rune</button>`:``}
      ${s.length===0?`<p class="hint">No ${i} runes in your pouch.</p>`:s.map(e=>{let t=a.runes.get(e.runeId);return`<button class="rune-row pick" data-act="socket-put" data-index="${n.socketPick}" data-rune-instance="${e.ids[0]}" ${r}>
          ${x(t.id)?w(`icons`,x(t.id),`rune-img`):`<i class="socket ${t.colour} big"></i>`}
          <span class="item-main"><span class="item-name">${M(t.name)} <b>L${e.level}</b> ×${e.count}</span><span class="item-sub">${M(h(t,e.level))}</span></span>
        </button>`}).join(``)}
    </div>`}return`<div class="sockets-row">${i}</div>${o}`}function at(e,t,n,r=!1){return`<div class="reward-card">${et(p(t,a),t,r)}${nt(e,t,`stash`)}${tt(e,t,`stash`)}<div class="actions-row">${n}</div></div>`}function ot(e,t){if(!t.selected)return``;let{place:n,id:r}=t.selected,i=e.find(n,r);if(!i)return``;let o=p(i,a),s=P(n,r),c=[],l=`<button class="btn btn-primary" data-act="equip" ${s}>Equip</button>`;n===`ground`&&c.push(`<button class="btn btn-primary" data-act="take" ${s}>Take</button>`,l);let u=t.town?``:` disabled title="Only in town"`,d=`<button class="btn" data-act="share" ${s}${u||` title="Every hero on this device can take it from the shared stash"`}>Share</button>`;return n===`inventory`&&c.push(l,`<button class="btn" data-act="stash" ${s}${u}>Stash</button>`,d,`<button class="btn" data-act="drop" ${s}>Drop</button>`),n===`stash`&&c.push(l,`<button class="btn" data-act="to-bag" ${s}>To bag</button>`,d),n===`shared`&&c.push(`<button class="btn btn-primary" data-act="to-bag" ${s}>To bag</button>`,`<button class="btn" data-act="stash" ${s}${u}>To stash</button>`),n===`equipment`&&c.push(`<button class="btn" data-act="unequip" ${s}>Unequip</button>`),c.push(`<button class="btn ${t.craftOpen?`active`:``}" data-act="craft" ${s}>Craft</button>`,`<button class="btn ${e.isLocked(i.id)?`active`:``}" data-act="lock" ${s} title="A locked item is never sold or salvaged. Uniques start locked.">${e.isLocked(i.id)?`★ Locked`:`☆ Lock`}</button>`),`
    <div class="sheet-backdrop" data-act="close"></div>
    <div class="sheet" role="dialog" aria-label="${M(o.name)}">
      <button class="sheet-close" data-act="close" aria-label="Close">×</button>
      ${et(o,i,n===`equipment`)}
      ${it(e,i,t,s)}
      ${nt(e,i,n)}
      ${tt(e,i,n)}
      <div class="actions-row">${c.join(``)}</div>
      ${rt(e,i,t)}
      <div class="actions-danger"><span class="hint">Break it into shards</span><button class="btn btn-danger btn-small" data-act="salvage" ${s}>Salvage</button></div>
    </div>`}function st(e,t){let n={hunt:e=>Me(e,t),gear:e=>Ie(e,t),bag:e=>ze(e,t),stash:e=>Ze(e,t),orbs:e=>Qe(e,t),tree:e=>Ye(e,t),shared:e=>Ze(e,t)}[t.tab](e);return t.embedded?`
    <div class="lab embedded">
      <main class="main" id="main" data-tab="${t.tab}">${n}</main>
      ${t.toast?`<div class="toast lab-toast">${M(t.toast)}</div>`:``}
      ${ot(e,t)}
    </div>`:`
    <div class="lab">
      ${je(e,t)}
      <main class="main" id="main" data-tab="${t.tab}">${n}</main>
      ${$e(e,t)}
      ${t.toast?`<div class="toast lab-toast">${M(t.toast)}</div>`:``}
      ${ot(e,t)}
    </div>`}var H=()=>ie();function ct(e,t={}){let i=t.mode??`lab`,o=t.store??new m(v().lab);t.store||(o.shared=n(),o.onShared=r);let s={tab:t.tab??(i===`game`?`gear`:`hunt`),selected:null,craftOpen:!1,toast:null,craftNote:null,confirmReset:!1,mode:i,socketPick:null,treeBranch:ge(o.state.classId),treeSelected:null,town:!0,...t.embedded?{embedded:!0}:{}},c,l=``,u=()=>{s.town=!t.inTown||t.inTown();let n=e.querySelector(`#main`)?.scrollTop??0,r=e.querySelector(`.tree-canvas`),i=r?.scrollLeft??0,a=r?.scrollTop??0,c=s.tab===`tree`?`tree:${s.treeBranch}`:``;e.innerHTML=st(o,s);let u=e.querySelector(`#main`);u&&(u.scrollTop=n);let d=e.querySelector(`.tree-canvas`);if(d){if(c&&c!==l){let e=Number(d.dataset.centreX??0);d.scrollLeft=Math.max(0,e-d.clientWidth/2)}else d.scrollLeft=i,d.scrollTop=a;let e=d.querySelector(`.tree-pop`);if(e){let t=d.getBoundingClientRect(),n=e.getBoundingClientRect();n.right>t.right&&(d.scrollLeft+=n.right-t.right+8),n.left<t.left&&(d.scrollLeft-=t.left-n.left+8),n.bottom>t.bottom&&(d.scrollTop+=n.bottom-t.bottom+8),n.top<t.top&&(d.scrollTop-=t.top-n.top+8)}}l=c},d=e=>{s.toast=e,window.clearTimeout(c),c=window.setTimeout(()=>{s.toast=null,u()},Math.max(1800,1e3+e.length*45))},f=e=>{i===`game`&&D().play(e)},p=(e,n=!1,r,i=`denied`)=>{f(e.ok?r??`ui`:i),e.ok?e.message&&d(e.message):d(e.message),n&&e.ok&&(s.selected=null,s.craftOpen=!1,s.craftNote=null),H(),t.onChange?.(),u()},h=n=>{let r=n.target.closest(`[data-act]`);if(!r||!e.contains(r))return;let i=r.dataset.act,c=r.dataset.place??s.selected?.place,l=r.dataset.id??s.selected?.id;switch(i!==`reset`&&(s.confirmReset=!1),i!==`salvage-tier`&&(s.confirmSalvage=null),i){case`resume`:t.onClose?.();return;case`tab`:f(`ui_tab`),s.tab=r.dataset.tab,s.selected=null,s.craftOpen=!1,u();return;case`kill`:p(o.kill(r.dataset.kind));return;case`take-all`:p(o.takeAll());return;case`salvage-tier`:{let e=r.dataset.place,t=Le.find(e=>e.id===r.dataset.tier);if(!t)return;let n=`${e}:${t.id}`;if(t.id===`rare`&&s.confirmSalvage!==n){s.confirmSalvage=n,f(`ui`),u();return}s.confirmSalvage=null,p(o.salvageAll(e,[...t.rarities]),!1,`salvage`);return}case`select`:f(`ui`),c&&l&&(s.selected={place:c,id:l},s.craftOpen=!1,s.craftNote=null,s.socketPick=null,u());return;case`fuse-all`:{let e=o.fuseAll();p(e,!1,e.ok?`rune_fuse`:void 0);return}case`fuse`:p(o.fuse(r.dataset.rune??``,Number(r.dataset.level)),!1,`rune_fuse`);return;case`auto-equip`:{let e=o.summary(),t=o.autoEquip();t.count>0&&(s.selected=null,j(`${t.count} item${t.count===1?``:`s`}`,`gd-r-rare`,e,o.summary())),p(t,!1,`equip_metal`);return}case`passive`:p(o.allocatePassive(r.dataset.id??``),!1,`passive`);return;case`passive-reset`:p(o.resetPassives());return;case`tree-select`:s.treeSelected=r.dataset.id||null,f(`ui`),u();return;case`tree-branch`:f(`ui_tab`),s.treeBranch=r.dataset.branch,s.treeSelected=null,_e(o.state.classId,s.treeBranch),u();return;case`close`:s.selected=null,s.craftOpen=!1,s.craftNote=null,u();return;case`craft`:s.craftOpen=!s.craftOpen,s.craftNote=null,u();return;case`reset`:if(!s.confirmReset){s.confirmReset=!0,u();return}o.reset(),s.confirmReset=!1,s.selected=null,p({ok:!0,message:`Lab reset.`});return}if(c&&l)switch(i){case`take`:{let e=o.take(l);e.ok&&(s.selected={place:`inventory`,id:l}),p(e);return}case`equip`:{let e=o.summary(),t=o.find(c,l),n=o.equip(c,l);n.ok&&(n.message=`Equipped.`,t&&j(re(t,a),`gd-r-${t.rarity}`,e,o.summary(),`Equipped`,5200,t.sockets.length?`${t.sockets.length} socket${t.sockets.length===1?``:`s`}`:`no sockets`));let r=o.find(`equipment`,l)??o.find(c,l),i=r?a.bases.get(r.baseId)?.category??``:``;p(n,!0,/cloth|leather|belt|ring|amulet/.test(i)?`equip_cloth`:`equip_metal`);return}case`unequip`:{let e=o.summary(),t=o.find(`equipment`,l),n=o.unequip(l);n.ok&&(s.selected={place:`inventory`,id:l},n.message=`Removed.`,t&&j(re(t,a),`gd-r-${t.rarity}`,e,o.summary(),`Removed`)),p(n,!1,`unequip`);return}case`stash`:{if(!s.town){d(`Items can only be stashed in town.`);return}let e=o.move(l,c,`stash`);e.ok&&(s.selected={place:`stash`,id:l}),p(e);return}case`share`:{if(!s.town){d(`Items can only be shared in town.`);return}let e=o.move(l,c,`shared`);e.ok&&(s.selected={place:`shared`,id:l},e.message=`Moved to the shared stash. Every hero can take it.`),p(e);return}case`to-bag`:{let e=o.move(l,c,`inventory`);e.ok&&(s.selected={place:`inventory`,id:l}),p(e);return}case`drop`:if(t.onDrop){let e=o.find(c,l);if(!e)return;if(!t.onDrop(e)){d(`There is no ground to drop it on here. Stash or salvage it instead.`);return}o.remove(c,l),p({ok:!0,message:`Dropped ${re(e,a)}.`},!0);return}p(o.move(l,c,`ground`),!0);return;case`lock`:d(o.toggleLock(l)?`Locked. It will not be sold or salvaged.`:`Unlocked.`),u();return;case`salvage`:p(o.salvage(c,l),!0,`salvage`);return;case`orb`:{let e=o.useOrb(c,l,r.dataset.orb??``);s.craftNote=e.message??null,p(e,!1,`orb_success`,`orb_fail`);return}case`socket-open`:{let e=Number(r.dataset.index);s.socketPick=s.socketPick===e?null:e,u();return}case`socket-put`:{let e=o.socket(c,l,Number(r.dataset.index),r.dataset.runeInstance??``);e.ok&&(s.socketPick=null),p(e,!1,`socket`);return}case`unsocket`:p(o.unsocket(c,l,Number(r.dataset.index)),!1,`unequip`);return}},g=t=>{let n=t.target;if(!e.contains(n))return;let r=o.state;switch(n.id){case`zoneLevel`:{o.setZoneLevel(Number(n.value));let t=e.querySelector(`#zone-label`);t&&(t.textContent=String(r.zoneLevel));let i=e.querySelector(`#followLevel`);i&&(i.checked=r.followLevel);break}case`rarityExtra`:{r.rarityExtra=Number(n.value);let t=e.querySelector(`#rarity-label`);t&&(t.textContent=`+${r.rarityExtra}%`);break}case`quantityExtra`:{r.quantityExtra=Number(n.value);let t=e.querySelector(`#quantity-label`);t&&(t.textContent=`+${r.quantityExtra}%`);break}default:return}H()},_=t=>{let n=t.target;if(!e.contains(n))return;let r=o.state;switch(n.id){case`followLevel`:r.followLevel=n.checked,n.checked&&(r.zoneLevel=r.charLevel);break;case`showHints`:r.showHints=n.checked;break;case`autoNormal`:r.autoSalvage.normal=n.checked;break;case`autoMagic`:r.autoSalvage.magic=n.checked;break;case`filter-all`:case`filter-leveling`:case`filter-endgame`:case`filter-upgrades`:r.filter=n.value;break;case`zoneLevel`:case`rarityExtra`:case`quantityExtra`:break;default:return}H(),u()};return e.addEventListener(`click`,h),e.addEventListener(`input`,g),e.addEventListener(`change`,_),u(),Object.assign(()=>{e.removeEventListener(`click`,h),e.removeEventListener(`input`,g),e.removeEventListener(`change`,_),window.clearTimeout(c),H(),e.innerHTML=``},{setTab:e=>{s.tab=e,s.selected=null,s.craftOpen=!1,u()}})}var lt=`modulepreload`,ut=function(e){return`/battle-of-wellon/`+e},dt={},U=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ut(t,n),t=s(t),t in dt)return;dt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:lt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ft=`false`,pt=`false`,mt=ft===`true`,ht=pt===`true`;function gt(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,mt||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await U(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/battle-of-wellon/sw.js`,{scope:`/battle-of-wellon/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!ht){if(mt)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/battle-of-wellon/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function _t(e){let t=[],n=new Set;for(let r of e.matchAll(/\{url:"([^"]+)",revision:(?:"([^"]*)"|null)\}/g)){let e=`${r[1]}|${r[2]??``}`;n.has(e)||(n.add(e),t.push({url:r[1],revision:r[2]??null}))}return t}function vt(e,t){let n=new URL(t.url,e);return t.revision&&n.searchParams.set(`__WB_REVISION__`,t.revision),n.href}var yt=async e=>{let t=Number(e.headers.get(`content-length`));return t>0?t:(await e.clone().blob()).size};function bt(e,t){let n=!1;return(async()=>{try{let r=(await caches.keys()).filter(e=>e.includes(`precache`)),i=await Promise.all(r.map(e=>caches.open(e))),a=new Set;for(let e of i)for(let t of await e.keys())a.add(t.url);let o=await(await fetch(e.scriptURL,{cache:`no-store`})).text(),s=new URL(e.scriptURL).href,c=_t(o).map(e=>({e,key:vt(s,e)})).filter(e=>!a.has(e.key));if(n)return;let l=new Map,u=0;await Promise.all(c.map(async e=>{try{let t=Number((await fetch(new URL(e.e.url,s).href,{method:`HEAD`,cache:`no-store`})).headers.get(`content-length`));t>0?(l.set(e.key,t),u+=t):u=null}catch{u=null}})),u===0&&(u=null);let d=new Set,f=0,p=async()=>{for(let e of await Promise.all((await caches.keys()).filter(e=>e.includes(`precache`)).map(e=>caches.open(e))))for(let t of c){if(d.has(t.key))continue;let n=await e.match(t.key);n&&(d.add(t.key),f+=l.get(t.key)??await yt(n))}t({done:f,total:u})};for(;!n&&e.state===`installing`;)await p(),await new Promise(e=>setTimeout(e,300));!n&&e.state!==`redundant`&&t({done:u??f,total:u})}catch{}})(),()=>{n=!0}}function xt(e){let t=gt({immediate:!0,onOfflineReady:e.onOfflineReady,onNeedRefresh:()=>{e.onUpdateProgress(null),e.onUpdateCheck(null),e.onNeedRefresh(()=>t(!0))},onRegisteredSW:(t,n)=>{if(n&&(wt(n),St(n,e)),!n||!navigator.onLine){e.onUpdateCheck(null);return}e.onUpdateCheck(`checking`);let r=window.setTimeout(()=>{n.installing||e.onUpdateCheck(null)},8e3);n.update().then(()=>{e.onUpdateCheck(n.installing?`downloading`:null)},()=>e.onUpdateCheck(null)).finally(()=>{n.installing||window.clearTimeout(r)})},onRegisterError:()=>e.onUpdateCheck(null)})}function St(e,t){let n=null,r=()=>{let r=e.installing;r&&navigator.serviceWorker.controller&&(n?.(),t.onUpdateCheck(`downloading`),n=bt(r,e=>t.onUpdateProgress(e)),r.addEventListener(`statechange`,()=>{r.state===`redundant`&&(t.onUpdateProgress(null),t.onUpdateCheck(null))}))};e.addEventListener(`updatefound`,r),r()}var Ct=12e5;function wt(e){let t=Date.now(),n=()=>{!navigator.onLine||Date.now()-t<3e5||(t=Date.now(),e.update().catch(()=>{}))};window.setInterval(n,Ct),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&n()})}function Tt(){return window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function Et(){let e=navigator.userAgent,t=navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;return/iPad|iPhone|iPod/.test(e)||t}function Dt(e){window.addEventListener(`beforeinstallprompt`,t=>{t.preventDefault(),e(async()=>{await t.prompt();let{outcome:e}=await t.userChoice;return e===`accepted`})})}var Ot=null,kt=new Set;function At(){return Ot}function jt(e){Ot=e;for(let e of kt)e()}function Mt(e){return kt.add(e),()=>{kt.delete(e)}}function Nt(){return`<div class="loading-screen" style="${T(`load-l`,`backdrops`,`loading-16x9`)}${T(`load-p`,`backdrops`,`loading-9x16`)}"><span>Loading…</span></div>`}function W(e){return e<1048576?`${Math.max(0,Math.round(e/1024)).toLocaleString(`en-US`)} KB`:`${(e/1048576).toFixed(1)} MB`}var G=null,Pt=()=>G;async function Ft(){try{let e=await navigator.storage?.estimate?.();e&&typeof e.usage==`number`&&(G=e.usage)}catch{}return G}var It=e=>e===null?``:`${W(e)} on this device`,Lt=()=>w(`icons`,`emblem`,`emblem emblem-art`)||`<img class="emblem" src="icons/emblem-256.png" width="128" height="128" alt="" />`,Rt=()=>`<div class="title-bg" style="${T(`art-l`,`backdrops`,`title-16x9`)}${T(`art-p`,`backdrops`,`title-9x16`)}"></div>`,zt=e=>e?e.total?`Downloading an update… ${W(Math.min(e.done,e.total))} of ${W(e.total)}`:`Downloading an update… ${W(e.done)}`:`Downloading an update…`;function Bt(){return`<footer>
        <span>v1.0.5</span>
        <span class="sep">·</span>
        <span title="2026-10-18T15:28:31.577Z">build 2026-10-18</span>
        <span class="sep disk-sep"${Pt()===null?` hidden`:``}>·</span>
        <span class="disk-use" title="Everything this game keeps on the device: app files, cached art and music, and saves. The browser's own estimate.">${It(Pt())}</span>
      </footer>`}function Vt(e){Ft().then(t=>{e.querySelectorAll(`.disk-use`).forEach(e=>{e.textContent=It(t)}),e.querySelectorAll(`.disk-sep`).forEach(e=>{e.hidden=t===null})})}function Ht(e){let t=e.checking===`checking`?`Checking for updates…`:e.checking===`downloading`?zt(e.progress):e.offline===`preparing`?`Preparing offline play…`:``;return t?`<div class="busy" role="status" aria-live="polite"><span class="spinner" aria-hidden="true"></span><span>${t}</span></div>`:``}var Ut=e=>e.update?`<div class="toast"><span>A new version is ready.</span><button class="btn btn-small" id="update-apply">Update</button></div>`:``,Wt=e=>e.checking!==null;function Gt(e,t){let n={preparing:`Preparing offline play…`,ready:`Ready to play offline`,preview:`Preview build (no offline mode)`,dev:`Dev mode (no service worker)`}[t.offline];e.innerHTML=`
    ${Rt()}
    <main class="title">
      <button class="btn btn-small btn-secondary mute-toggle" id="mute" aria-pressed="${D().allMuted}">Sound: ${D().allMuted?`Off`:`On`}</button>
      ${Lt()}
      <h1>The Battle<br />of Wellon</h1>
      <p class="tagline">A loot-hunter's action RPG</p>

      <div class="actions">
        <button class="btn btn-primary" id="play"${Wt(t)?` disabled`:``}>Play</button>
        <a class="btn" href="#lab">Loot Lab (Debugging)</a>
        <a class="btn" href="#jukebox">Jukebox</a>
        ${t.install?`<button class="btn btn-secondary" id="install">Install</button>`:``}
      </div>

      ${t.iosHint?`<p class="hint">To install on iPhone or iPad: tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</p>`:``}

      ${Ht(t)}
      <div class="status">
        <span class="chip" id="net" data-state="${navigator.onLine?`online`:`offline`}">${navigator.onLine?`Online`:`Offline`}</span>
        <span class="chip" data-state="${t.offline===`ready`?`ready`:``}">${n}</span>
      </div>

      ${Ut(t)}

      ${Bt()}
    </main>`,Vt(e);let r=e.querySelector(`#mute`);r?.addEventListener(`click`,()=>{let e=D();e.setAllMuted(!e.allMuted),r.textContent=`Sound: ${e.allMuted?`Off`:`On`}`,r.setAttribute(`aria-pressed`,String(e.allMuted))}),e.querySelector(`#play`)?.addEventListener(`click`,()=>t.onPlay()),e.querySelector(`#install`)?.addEventListener(`click`,()=>void t.install?.()),e.querySelector(`#update-apply`)?.addEventListener(`click`,()=>void t.update?.(),{once:!0})}function Kt(e,t,n){e.innerHTML=`
    ${Rt()}
    <main class="title splash">
      ${Lt()}
      <h1>The Battle<br />of Wellon</h1>
      <button class="btn btn-primary" id="enter"${n&&Wt(n)?` disabled`:``}>Tap to begin</button>
      ${n?Ht(n):``}
      ${n?Ut(n):``}
      ${Bt()}
    </main>`,Vt(e),e.querySelector(`#enter`)?.addEventListener(`click`,t,{once:!0}),e.querySelector(`#update-apply`)?.addEventListener(`click`,()=>void n?.update?.(),{once:!0})}function K(){let e=document.documentElement;if(!(Et()&&Tt())){e.style.removeProperty(`--app-h`);return}let t=window.innerHeight,n=window.innerWidth>window.innerHeight,r=window.screen,i=n?Math.min(r.width,r.height):Math.max(r.width,r.height);i>t&&i-t<=120&&(t=i),e.style.setProperty(`--app-h`,`${t}px`)}K(),window.addEventListener(`resize`,K),window.addEventListener(`orientationchange`,()=>window.setTimeout(K,200)),document.addEventListener(`visibilitychange`,K);var q=document.querySelector(`#app`);if(!q)throw Error(`#app missing`);var J={offline:`preparing`,update:null,install:null,iosHint:!1,checking:null,progress:null,onPlay:()=>{Yt()}},Y=!1,X=null,Z=null;function qt(){let e=location.hash===`#lab`?`lab`:location.hash===`#jukebox`?`jukebox`:location.hash===`#game`?`game`:`title`;if(e!==X){if(Z?.(),Z=null,Q=!1,X=e,document.body.dataset.screen=e,e!==`title`&&(Y=!0),e===`lab`)Z=ct(q);else if(e===`jukebox`)Z=ue(q);else if(e===`game`)q.innerHTML=Nt(),U(async()=>{let{mountGame:e}=await import(`./game-Cbxv3xcr.js`);return{mountGame:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({mountGame:e})=>{X===`game`&&(Z=e(q))});else{Jt();let e=!1;try{e=sessionStorage.getItem(`wellon.toSlots`)===`1`,sessionStorage.removeItem(`wellon.toSlots`)}catch{}e&&Y&&Yt()}}}function Jt(){let e=D();if(e.music.setMood(`intro`,!0),Y){Gt(q,J);return}e.armUnlock(),Kt(q,()=>{Y=!0,e.unlock(),Gt(q,J)},J)}var Q=!1;async function Yt(){let{renderSlots:e}=await U(async()=>{let{renderSlots:e}=await import(`./slots-reDDuBLR.js`);return{renderSlots:e}},__vite__mapDeps([8,2,3]));X===`title`&&(Q=!0,e(q,{onBack:()=>{Q=!1,Gt(q,J)},onChoose:async e=>{await u(e),Q=!1,location.hash=`#game`}}))}function $(){X===`title`&&!Q&&Jt()}window.addEventListener(`hashchange`,qt),document.addEventListener(`visibilitychange`,()=>{X!==`game`&&D().setPaused(document.hidden)}),window.addEventListener(`online`,$),window.addEventListener(`offline`,$),xt({onOfflineReady(){J.offline=`ready`,$()},onNeedRefresh(e){J.update=e,jt(e),$()},onUpdateProgress(e){J.progress=e,$()},onUpdateCheck(e){J.checking!==e&&(J.checking=e,$())}}),navigator.serviceWorker?.controller&&(J.offline=`ready`),Tt()||(Et()?J.iosHint=!0:Dt(e=>{J.install=async()=>{let t=await e();return t&&(J.install=null,$()),t},$()})),y().then(()=>qt());export{Mt as a,ct as c,j as d,be as f,Nt as i,at as l,It as n,At as o,pe as p,Ft as r,U as s,Pt as t,I as u};