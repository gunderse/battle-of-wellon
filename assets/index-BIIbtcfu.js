const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-9jGLshuk.js","assets/CanvasPool-CX_31KdX.js","assets/art-CIoq3Xcy.js","assets/act1-BMJrq3BK.js","assets/canvasUtils-x2ND1UXV.js","assets/RenderTargetSystem-OSz9OCjs.js","assets/getTextureBatchBindGroup-eI8ZguMn.js","assets/BufferResource-24JE7Q3c.js","assets/slots-DwB5Tc57.js"])))=>i.map(i=>d[i]);
import{C as e,S as t,_t as n,a as r,at as i,bt as a,ct as o,ft as s,gt as c,h as l,ht as u,l as d,lt as f,mt as p,n as m,o as h,p as g,pt as _,s as v,t as y,ut as b,v as ee,vt as te,x as ne,xt as x,yt as S}from"./art-CIoq3Xcy.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var C=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function re(e){let t=S(),n=t.music;e.innerHTML=`
    <main class="jukebox">
      <h1>Jukebox</h1>
      <p class="tagline">Every tune in the Battle of Wellon</p>
      <ul class="tracks">
        ${a.map(e=>`<li><button class="btn track" data-mood="${e.mood}" ${x(e.mood)?``:`disabled`}><span class="track-title">${e.title}${x(e.mood)?``:` · not recorded yet`}</span><span class="track-where">${e.where}</span></button></li>`).join(``)}
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
    </main>`;let r=t=>e.querySelector(`#${t}`),i=r(`jb-now`),o=r(`jb-seek`),s=r(`jb-time`),c=r(`jb-dur`),l=r(`jb-play`),u=!1,d=e=>{t.unlock(),n.setMood(e,!0),n.setPaused(!1),p()},f=e=>{let t=a.length,r=a.findIndex(e=>e.mood===n.current);for(let n=0;n<t;n++)if(r=r<0?e>0?0:t-1:(r+e+t)%t,x(a[r].mood)){d(a[r].mood);return}};function p(){let t=a.find(e=>e.mood===n.current);for(let t of e.querySelectorAll(`.track`))t.classList.toggle(`active`,t.dataset.mood===n.current);let r=n.position(),d=!!r&&r.duration>0&&r.time>=r.duration-.05;i.textContent=t?`${n.isPaused()?d?`Finished`:`Paused`:`Now playing`}: ${t.title}`:`Pick a track to begin`,l.disabled=!t,o.disabled=!t,l.textContent=n.isPaused()?`Play`:`Pause`;let f=n.position();f&&f.duration>0&&(c.textContent=C(f.duration),u||(o.max=String(f.duration),o.value=String(f.time),s.textContent=C(f.time)))}e.querySelectorAll(`.track`).forEach(e=>e.addEventListener(`click`,()=>d(e.dataset.mood))),r(`jb-prev`).addEventListener(`click`,()=>f(-1)),r(`jb-next`).addEventListener(`click`,()=>f(1)),l.addEventListener(`click`,()=>{t.unlock(),n.setPaused(!n.isPaused()),p()}),o.addEventListener(`input`,()=>{u=!0,s.textContent=C(Number(o.value))}),o.addEventListener(`change`,()=>{n.seek(Number(o.value)),u=!1}),r(`jb-vol`).addEventListener(`input`,e=>t.setVolume(`music`,Number(e.target.value))),n.setMood(`off`,!0),t.armUnlock();let m=window.setInterval(p,250);return()=>window.clearInterval(m)}var ie=[{id:`all`,name:`Show everything`,description:`Every drop is picked up.`},{id:`leveling`,name:`Leveling`,description:`Normal items are salvaged on contact once you reach level 8; Magic from level 25.`},{id:`endgame`,name:`Endgame`,description:`Normal and Magic items are salvaged on contact. Rares and uniques only.`}];function ae(e,t,n){return t===`rare`||t===`unique`||e===`all`?!1:e===`endgame`?!0:t===`normal`?n>=8:n>=25}function oe(e,t,n){return ae(e,t.rarity,n)}var se={fire:[`Ember`,`Cinder`,`Pyre`,`Ash`,`Brand`],cold:[`Frost`,`Rime`,`Winter`,`Hail`,`Sleet`],lightning:[`Storm`,`Thunder`,`Spark`,`Tempest`,`Gale`],chaos:[`Venom`,`Rot`,`Blight`,`Plague`,`Miasma`],physical:[`Iron`,`Brute`,`Bone`,`Gore`,`Skull`],life:[`Blood`,`Heart`,`Vital`,`Pulse`],defence:[`Stone`,`Oak`,`Bastion`,`Rampart`],critical:[`Fang`,`Razor`,`Viper`,`Needle`],speed:[`Swift`,`Wind`,`Hawk`,`Quick`],resistance:[`Ward`,`Aegis`,`Hex`,`Rune`],attribute:[`Titan`,`Sage`,`Giant`,`Lion`],spell:[`Glyph`,`Sigil`,`Star`,`Moon`],minion:[`Ghoul`,`Grave`,`Wraith`,`Corpse`],fortune:[`Gilt`,`Sovereign`,`Fortune`,`Crown`]},ce=[`Grim`,`Dusk`,`Dread`,`Sorrow`,`Doom`,`Wrath`,`Woe`,`Gloom`,`Vile`,`Dire`],w={sword:[`Bane`,`Edge`,`Bite`,`Song`,`Fang`],greatsword:[`Bane`,`Cleaver`,`Reaper`,`Song`],axe:[`Cleaver`,`Bite`,`Splitter`,`Hew`],greataxe:[`Cleaver`,`Reaver`,`Splitter`,`Ruin`],mace:[`Crusher`,`Fist`,`Knell`,`Breaker`],dagger:[`Sting`,`Needle`,`Kiss`,`Whisper`],bow:[`Whisper`,`Shot`,`Reach`,`Sting`],wand:[`Call`,`Spire`,`Glyph`,`Whisper`],staff:[`Call`,`Pillar`,`Sigil`,`Spire`],shield:[`Wall`,`Guard`,`Aegis`,`Bulwark`],quiver:[`Nest`,`Sting`,`Flight`],focus:[`Eye`,`Lens`,`Sigil`],helm:[`Crown`,`Visage`,`Brow`,`Gaze`],body:[`Shell`,`Carapace`,`Mantle`,`Shroud`],gloves:[`Grip`,`Fist`,`Touch`,`Claw`],boots:[`Stride`,`Tread`,`Path`,`Dance`],belt:[`Cord`,`Girdle`,`Clasp`,`Bind`],ring:[`Loop`,`Whorl`,`Coil`,`Eye`],amulet:[`Charm`,`Heart`,`Idol`,`Tear`]},le=new Set([`damage`,`attack`,`elemental`,`caster`,`ailment`,`str`,`dex`,`int`,`block`,`area`,`rune`,`mana`,`projectile`,`dot`]);function ue(e,t){let n=t.bases.get(e.baseId),r=new Map;for(let n of e.affixes){let e=t.affixes.get(n.affixId);if(e)for(let t of e.tags)le.has(t)||r.set(t,(r.get(t)??0)+1)}let i=c((e.seed^2654435769)>>>0),a,o=0;for(let[e,t]of r)t>o&&se[e]&&(a=e,o=t);let s=a?se[a]:ce,l=n?.category??``,u=n?.slot??``,d=w[l]??w[u]??w[l.split(`-`)[1]??``]??[`Relic`];return`${s[i.int(0,s.length-1)]} ${d[i.int(0,d.length-1)]}`}function T(e,t){let n=t.bases.get(e.baseId)?.name??e.baseId;switch(e.rarity){case`unique`:return t.uniques.get(e.uniqueId??``)?.name??n;case`normal`:return n;case`magic`:{let r=``,i=``;for(let n of e.affixes){let e=t.affixes.get(n.affixId);e?.kind===`prefix`?r=e.magicName:e?.kind===`suffix`&&(i=e.magicName)}return[r,n,i].filter(Boolean).join(` `)}case`rare`:return ue(e,t)}}function E(e,t){let n=e/t;return t>1?n.toFixed(1):String(n)}function D(e,t){let n=e.text;return t.forEach((t,r)=>{let i=E(Math.abs(t),e.divisor),a=t<0?`-${i}`:i;n=n.replace(`+{${r}}`,t<0?`-${i}`:`+${i}`).replace(`{${r}}`,a)}),n}function O(e,t){return e.map(([e,n])=>`${E(e,t)}–${E(n,t)}`).join(` / `)}function k(e,t,r){let i=t.bases.get(e.baseId),a=o(e,t),s=e.uniqueId?t.uniques.get(e.uniqueId):void 0,c=[];if(a.weapon){let e=a.weapon;c.push(`Physical Damage: ${e.physMin}–${e.physMax}`),e.eleMax>0&&c.push(`Elemental Damage: ${e.eleMin}–${e.eleMax}`),e.chaosMax>0&&c.push(`Chaos Damage: ${e.chaosMin}–${e.chaosMax}`),c.push(`Attacks per Second: ${e.attacksPerSecond.toFixed(2)}`),c.push(`Critical Strike Chance: ${e.critChance.toFixed(1)}%`),c.push(`DPS: ${e.dps.toFixed(1)}`)}if(a.defence){let e=a.defence;e.armour>0&&c.push(`Armour: ${e.armour}`),e.evasion>0&&c.push(`Evasion Rating: ${e.evasion}`),e.ward>0&&c.push(`Ward: ${e.ward}`),e.block>0&&c.push(`Chance to Block: ${e.block}%`)}let l=Object.entries(a.requirements).filter(([,e])=>e>0).sort((e,t)=>n.indexOf(e[0])-n.indexOf(t[0])).map(([e,t])=>`${{str:`Str`,dex:`Dex`,int:`Int`}[e]} ${t}`).join(`, `),u={name:T(e,t),baseName:i?.name??e.baseId,typeLine:i?.typeLine??``,rarity:e.rarity,itemLevel:e.itemLevel,requirements:l,baseStats:c,affixes:[],sockets:e.sockets,corrupted:e.corrupted,crafted:!!e.crafted,score:f(e,t,r)};if(e.implicit){let n=t.affixes.get(e.implicit.affixId),r=n?.tiers[0];n&&r&&(u.implicit={text:D(n,e.implicit.rolls),kind:`implicit`,range:O(r.ranges,n.divisor),perfect:e.implicit.rolls.every((e,t)=>e===r.ranges[t]?.[1])})}for(let n of e.affixes){let e=t.affixes.get(n.affixId);if(e){if(n.tier===0){let t=s?.mods.find(e=>e.affixId===n.affixId);u.affixes.push({text:D(e,n.rolls),kind:`unique`,perfect:t?n.rolls.every((e,n)=>e===t.ranges[n]?.[1]):!1,...t?{range:O(t.ranges,e.divisor)}:{}})}else{let t=e.tiers[n.tier-1];u.affixes.push({text:D(e,n.rolls),kind:e.kind,tier:n.tier,...t?{range:O(t.ranges,e.divisor)}:{},perfect:t?n.rolls.every((e,n)=>e===t.ranges[n]?.[1]):!1})}}}return u.affixes.sort((e,t)=>+(e.kind===`suffix`)-(t.kind===`suffix`)),s&&(s.keystone&&(u.keystone=s.keystone),u.flavour=s.flavour),u}var de={vanguard:`str`,hunter:`dex`,arcanist:`int`},fe=new Map;function pe(e){return fe.get(e)??de[e]??`str`}function me(e,t){fe.set(e,t)}var he=[[`DPS`,e=>e.dps,``,1],[`Life`,e=>e.life,``,0],[`Mana`,e=>e.mana,``,0],[`Ward`,e=>e.ward,``,0],[`Armour`,e=>e.armour,``,0],[`Evasion`,e=>e.evasion,``,0],[`Block`,e=>e.block,`%`,0],[`Fire res`,e=>e.resistances.fire,`%`,0],[`Cold res`,e=>e.resistances.cold,`%`,0],[`Lightning res`,e=>e.resistances.lightning,`%`,0],[`Chaos res`,e=>e.resistances.chaos,`%`,0],[`Str`,e=>e.attributes.str,``,0],[`Dex`,e=>e.attributes.dex,``,0],[`Int`,e=>e.attributes.int,``,0],[`Crit chance`,e=>e.critChance,`%`,1],[`Spell damage`,e=>e.spellDamagePct,`%`,0],[`Move speed`,e=>e.movementSpeed,`%`,0],[`Item rarity`,e=>e.itemRarity,`%`,0],[`Life regen`,e=>e.lifeRegen,`/s`,1]],A=4;function ge(e,t){let n=[];for(let[r,i,a,o]of he){let s=Number(i(e).toFixed(o)),c=Number(i(t).toFixed(o));c!==s&&n.push({label:r,before:s,after:c,unit:a,decimals:o})}return n}function _e(e,t){let n=[];for(let[r,i,a,o]of he){let s=Number((i(t)-i(e)).toFixed(o));s!==0&&n.push(`${r} ${s>0?`+`:`−`}${Math.abs(s).toFixed(o)}${a}`)}return n.length===0?`no change to your stats`:n.length<=A?n.join(`, `):`${n.slice(0,A).join(`, `)} and ${n.length-A} more`}var j=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),ve=6,M=(e,t,n)=>`${e.toFixed(t)}${n}`;function ye(e){let t=e.after>e.before,n=Math.max(Math.abs(e.before),Math.abs(e.after),1e-9),r=Math.min(Math.abs(e.before),Math.abs(e.after))/n*100,i=100-r,a=e.after-e.before;return`<div class="gd-row ${t?`up`:`down`}">
    <span class="gd-label">${j(e.label)}</span>
    <span class="gd-bar"><i class="gd-keep" style="width:${r.toFixed(1)}%"></i><i class="gd-change" style="width:${i.toFixed(1)}%"></i></span>
    <span class="gd-nums">${M(e.before,e.decimals,e.unit)} → <b>${M(e.after,e.decimals,e.unit)}</b></span>
    <span class="gd-delta">${t?`▲`:`▼`} ${t?`+`:`−`}${Math.abs(a).toFixed(e.decimals)}${e.unit}</span>
  </div>`}function be(e,t,n,r,i=`Equipped`){let a=ge(n,r),o=a.filter(e=>e.after>e.before).length,s=a.length-o,c=a.length===0?`No change to your stats`:s===0?`All gains`:o===0?`All losses`:`${o} up · ${s} down`,l=a.slice(0,ve),u=a.length-l.length;return`<div class="gd-head"><span class="gd-verb">${j(i)}</span><b class="${t}">${j(e)}</b><em class="gd-verdict ${s===0&&o?`good`:o===0&&s?`bad`:``}">${c}</em></div>
    ${l.map(ye).join(``)}${u>0?`<div class="gd-more">and ${u} more change${u===1?``:`s`}</div>`:``}`}var xe;function N(e,t,n,r,i=`Equipped`,a=5200){let o=document.getElementById(`gear-diff`);o||(o=document.createElement(`div`),o.id=`gear-diff`,o.setAttribute(`role`,`status`),o.addEventListener(`click`,()=>o.classList.remove(`show`)),document.body.appendChild(o)),o.innerHTML=be(e,t,n,r,i),o.classList.remove(`show`),o.offsetWidth,o.classList.add(`show`),window.clearTimeout(xe),xe=window.setTimeout(()=>o.classList.remove(`show`),a)}var Se={str:[`ring_life`,`ring_gold`],dex:[`ring_speed`,`ring_flask`],int:[`ring_res`,`ring_rarity`]},Ce=e=>e.id===`core`?`core`:e.mastery?`mastery`:e.keystone?`notable`:`minor`;function we(e){let t=Se[e],n=[p.passives.get(`core`),...p.passiveList.filter(t=>t.branch===e),...t.map(e=>p.passives.get(e))],r=new Set(n.map(e=>e.id)),i=new Map;i.set(`core`,{x:0,y:0});let a=n.filter(t=>RegExp(`^${e}_\\d+$`).test(t.id)).sort((e,t)=>Number(e.id.split(`_`)[1])-Number(t.id.split(`_`)[1]));a.forEach((e,t)=>i.set(e.id,{x:0,y:t+1}));let o=new Map(a.map((e,t)=>[e.id,t+1])),s=new Map;for(let t of n){let n=RegExp(`^${e}_([a-z]+)_(\\d+)$`).exec(t.id);n&&s.set(n[1],[...s.get(n[1])??[],t])}[...s.values()].map(e=>e.sort((e,t)=>Number(e.id.split(`_`)[2])-Number(t.id.split(`_`)[2]))).sort((e,t)=>(o.get(e[0].links[0])??0)-(o.get(t[0].links[0])??0)).forEach((e,t)=>{let n=t%2==0?-1:1,r=o.get(e[0].links[0])??1,a=[[1.2,.6],[2.2,1.5],[2.2,2.5],[2.2,3.5]];e.forEach((e,t)=>{let[o,s]=a[Math.min(t,a.length-1)];i.set(e.id,{x:n*o,y:r+s+Math.max(0,t-3)})})});let c=[[1.1,.55],[2,1.25]];t.forEach((e,t)=>i.set(e,{x:c[t][0],y:c[t][1]}));let l=a.length;n.filter(e=>e.mastery).sort((e,t)=>e.id.localeCompare(t.id)).forEach((e,t,n)=>{let r=n.length===1?0:t===0?-.95:.95;i.set(e.id,{x:r,y:l+1.7})});let u=n.map(e=>{let t=i.get(e.id)??{x:0,y:0},n=[...new Set(e.links.filter(e=>!r.has(e)).map(e=>e.split(`_`)[0]))].filter(e=>e===`str`||e===`dex`||e===`int`);return{def:e,x:t.x,y:t.y,tier:Ce(e),crossTo:n}}),d=new Set,f=[];for(let e of n)for(let t of e.links){if(!r.has(t))continue;let n=[e.id,t].sort().join(`|`);d.has(n)||(d.add(n),f.push({a:t,b:e.id}))}let m=u.map(e=>e.x),h=u.map(e=>e.y);return{nodes:u,edges:f,minX:Math.min(...m),maxX:Math.max(...m),minY:Math.min(...h),maxY:Math.max(...h)}}var P=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e),F={mainHand:`Main hand`,offHand:`Off hand`,helm:`Helm`,body:`Body`,gloves:`Gloves`,boots:`Boots`,belt:`Belt`,ring1:`Ring`,ring2:`Ring`,amulet:`Amulet`},I=(e,t)=>`data-place="${e}" data-id="${P(t)}"`;function Te(e,t){if(!e.state.showHints)return``;let n=e.scoreDelta(t);return n===null?``:n>.5?`<span class="badge up">▲ ${n.toFixed(0)}</span>`:n<-.5?`<span class="badge down">▼</span>`:`<span class="badge same">≈</span>`}function Ee(e){return e.sockets.length===0?``:`<span class="sockets">${e.sockets.map((t,n)=>`<i class="socket ${t}${e.runes?.[n]?` filled`:``}"></i>`).join(``)}</span>`}function De(e,t){let n=e?y(`icons`,d(t?.uniqueId)??r(e),`glyph-img`):``;return n?`<span class="glyph art">${n}</span>`:`<span class="glyph">${P(e?.abbrev??`???`)}</span>`}function L(e,t,n,r=``){let i=k(t,p),a=p.bases.get(t.baseId);return`
    <button class="item-row r-${t.rarity}${t.corrupted?` corrupted`:``}${n===`inventory`&&(e.scoreDelta(t)??0)>.5?` is-upgrade`:``}" data-act="select" ${I(n,t.id)}>
      ${De(a,t)}
      <span class="item-main">
        <span class="item-name">${e.isLocked(t.id)?`★ `:``}${P(i.name)}</span>
        <span class="item-sub">${P(i.baseName)} · ilvl ${t.itemLevel}${t.affixes.length?` · ${t.affixes.length} mod${t.affixes.length===1?``:`s`}`:``} ${Ee(t)}</span>
      </span>
      ${r}${n===`equipment`?``:Te(e,t)}
    </button>`}function R(e,t,n,r){return t.length===0?`<p class="empty">${P(r)}</p>`:`<div class="list">${t.map(t=>L(e,t,n)).join(``)}</div>`}function Oe(e,n){let r=e.state,i=b(r.charLevel),a=r.charLevel>=t.level?100:Math.min(100,r.xp/i*100);return`
    <header class="lab-header">
      ${n.mode===`game`?`<button class="back" data-act="resume" aria-label="Back to game">‹</button>`:`<a class="back" href="#" aria-label="Back to title">‹</a>`}
      <div class="lab-title">
        <strong>${n.mode===`game`?`Bag &amp; Gear`:`Loot Lab`}</strong>
        <span>Level ${r.charLevel}${n.mode===`game`?``:` · zone ${r.zoneLevel}`}</span>
      </div>
      <div class="xp" title="${r.xp} / ${i} XP"><div class="xp-fill" style="width:${a.toFixed(1)}%"></div></div>
    </header>`}function ke(e){let n=e.state,r=n.log[0]??`Nothing has died yet.`;return`
    <section class="dials">
      <label class="dial">
        <span>Zone level <b id="zone-label">${n.zoneLevel}</b></span>
        <input type="range" id="zoneLevel" min="1" max="${t.level}" value="${n.zoneLevel}" />
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
    <p class="last">${P(r)}</p>

    <section>
      <div class="section-head">
        <h2>Ground <span class="count">${n.ground.length}</span></h2>
        <div class="row-actions">
          <button class="btn btn-small" data-act="sweep" ${n.ground.length?``:`disabled`}>Sweep</button>
          <button class="btn btn-small btn-primary" data-act="take-all" ${n.ground.length?``:`disabled`}>Take all</button>
        </div>
      </div>
      <p class="hint">Take all keeps everything you did not mark for auto-salvage (${n.autoSalvage.normal?`Normal`:``}${n.autoSalvage.normal&&n.autoSalvage.magic?` and `:``}${n.autoSalvage.magic?`Magic`:``}${!n.autoSalvage.normal&&!n.autoSalvage.magic?`nothing`:``}). Sweep salvages every Normal and Magic item on the ground.</p>
      ${R(e,n.ground,`ground`,`Kill something.`)}
    </section>`}function z(e,t,n=``){return`<div class="stat ${n}"><span>${P(e)}</span><b>${P(String(t))}</b></div>`}function B(e,t,n){let r=e.state.equipment[t],i=r?p.bases.get(r.baseId):void 0;return r?`<button class="doll-slot r-${r.rarity}${r.corrupted?` corrupted`:``}" style="grid-area:${n}" data-act="select" ${I(`equipment`,r.id)}>
    ${De(i,r)}<span class="doll-label">${F[t]}</span></button>`:`<div class="doll-slot empty" style="grid-area:${n}"><span class="glyph">—</span><span class="doll-label">${F[t]}</span></div>`}function Ae(e){let t=y(`dolls`,e.state.classId,`doll-figure`);return`
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
        ${B(e,`helm`,`helm`)}
        ${B(e,`amulet`,`amulet`)}
        ${B(e,`mainHand`,`mainhand`)}
        ${B(e,`body`,`body`)}
        ${B(e,`offHand`,`offhand`)}
        ${B(e,`ring1`,`ring1`)}
        ${B(e,`ring2`,`ring2`)}
        ${B(e,`gloves`,`gloves`)}
        ${B(e,`belt`,`belt`)}
        ${B(e,`boots`,`boots`)}
      </div>
    </div>`}var V=(e,t,n,r=``)=>`<div class="cs-tile ${e}"><small>${P(t)}</small><b>${P(String(n))}</b>${r?`<em>${P(r)}</em>`:``}</div>`;function je(e,t){let n=e.state,r=b(n.charLevel),i=Math.max(0,Math.min(100,n.xp/Math.max(1,r)*100)),a=e=>`conic-gradient(var(--gold) ${e*3.6}deg, rgba(255,255,255,0.1) 0)`,o=[[`Fire`,`fire`],[`Cold`,`cold`],[`Lightning`,`lightning`],[`Chaos`,`chaos`]].map(([e,n])=>{let r=t.resistances[n],i=t.resistancesRaw[n],a=Math.max(0,Math.min(100,r/75*100));return`<div class="cs-res ${n}${r<0?` neg`:``}${r>=75?` capped`:``}">
      <span class="cs-res-name">${e}</span>
      <span class="cs-bar"><i style="width:${a}%"></i></span>
      <span class="cs-res-val">${r}%${i>r?`<small> (${i})</small>`:``}</span>
    </div>`}).join(``),s=t.damageMix,c=[`physical`,`fire`,`cold`,`lightning`,`chaos`].filter(e=>s[e]>.005),l=`<div class="cs-mix" role="img" aria-label="Damage mix">${c.map(e=>`<i class="${e}" style="width:${(s[e]*100).toFixed(1)}%" title="${e} ${Math.round(s[e]*100)}%"></i>`).join(``)}</div>
    <div class="cs-mix-legend">${c.map(e=>`<span class="${e}">${e} ${Math.round(s[e]*100)}%</span>`).join(``)}</div>`,u=t.ailments,d=[`bleed`,`ignite`,`shock`,`poison`,`chill`].filter(e=>u[e]>0).map(e=>`<span class="cs-chip ${e}">${e} ${u[e]}%</span>`).join(``),f=(e,n)=>`<div class="cs-attr ${e}"><b>${t.attributes[e]}</b><small>${n}</small></div>`;return`<div class="charsheet">
    <div class="cs-top">
      <div class="cs-ring" style="background:${a(i)}"><span>${t.level}</span></div>
      <div class="cs-top-text"><strong>Level ${t.level}</strong><span class="cs-bar xp"><i style="width:${i}%"></i></span><small>${n.xp} / ${r} xp</small></div>
    </div>

    <div class="cs-hero">
      <div class="cs-dps"><b>${t.dps.toFixed(1)}</b><small>damage per second</small></div>
      <div class="cs-offense">
        ${V(``,`Per hit`,`${t.hitMin}–${t.hitMax}`)}
        ${V(``,`Attacks / s`,t.attacksPerSecond.toFixed(2))}
        ${V(``,`Crit`,`${t.critChance.toFixed(0)}%`,`×${t.critMulti.toFixed(2)}`)}
      </div>
      ${l}
      ${d?`<div class="cs-chips">${d}</div>`:``}
    </div>

    <div class="cs-vitals">
      ${V(`life`,`Life`,t.life,t.lifeRegen?`+${t.lifeRegen}/s`:``)}
      ${V(`mana`,`Mana`,t.mana)}
      ${V(`ward`,`Ward`,t.ward,t.level<20?`unlocks at level 20`:``)}
    </div>

    <div class="cs-attrs">${f(`str`,`Strength`)}${f(`dex`,`Dexterity`)}${f(`int`,`Intelligence`)}</div>

    <div class="cs-defence">
      ${V(`armour`,`Armour`,t.armour)}
      ${V(`evasion`,`Evasion`,t.evasion)}
      ${V(`block`,`Block`,`${t.block}%`)}
    </div>

    <div class="cs-resists"><small class="cs-title">Resistances <em>(cap 75%)</em></small>${o}</div>

    <div class="cs-misc">
      ${V(``,`Move speed`,`+${t.movementSpeed}%`)}
      ${V(``,`Item rarity`,`+${t.itemRarity}%`)}
      ${V(``,`Spell damage`,`+${t.spellDamagePct}%`)}
    </div>
  </div>`}function Me(e,t){let n=e.state,r=e.summary(),i=te.map(t=>{let r=n.equipment[t];return`
      <div class="slot">
        <span class="slot-label">${F[t]}</span>
        ${r?L(e,r,`equipment`):`<div class="item-row empty-slot"><span class="glyph">—</span><span class="item-main"><span class="item-sub">Empty</span></span></div>`}
      </div>`}).join(``);return`
    <section class="gear-equip">
      <div class="section-head"><h2>Equipment</h2>${t.mode===`game`?`<button class="btn btn-small" data-act="auto-equip">Auto-Equip</button>`:``}</div>
      <div class="gear-columns">
        ${Ae(e)}
        <div class="slots">${i}</div>
      </div>
    </section>
    <section class="gear-char">
      <h2>Character</h2>
      ${y(`classes`,e.state.classId,`char-portrait`)}
      ${je(e,r)}
    </section>`}function Ne(e){let t=e.state;return`
    <section class="bag-items">
      <div class="section-head">
        <h2>Bag <span class="count">${t.inventory.length}/${e.bagSize()}</span></h2>
        <button class="btn btn-small" data-act="salvage-bag" ${t.inventory.some(e=>e.rarity===`normal`||e.rarity===`magic`)?``:`disabled`}>Salvage Normal &amp; Magic</button>
      </div>
      ${R(e,t.inventory,`inventory`,`Your bag is empty. Take something from the ground.`)}
    </section>
    <section class="bag-runes">
      <div class="section-head"><h2>Rune pouch <span class="count">${t.runes.length}</span></h2></div>
      <p class="hint">Open an item and tap a socket to set a rune. Three of a kind and level fuse into the next level.</p>
      ${Ue(e)}
    </section>`}var H={str:`Strength`,dex:`Dexterity`,int:`Intelligence`},Pe={str:`#d9574b`,dex:`#58b368`,int:`#5b8be6`},Fe={heart:`M12 20.5s-7.5-4.8-9.6-9.4C1 8.2 2.6 4.8 6 4.8c2.1 0 3.5 1 4.2 2.3.7-1.3 2.1-2.3 4.2-2.3 3.400 0 5 3.400 3.600 6.300-2.100 4.600-9.600 9.400-9.600 9.400z`,shield:`M12 3l8 3v6c0 4.600-3.300 8-8 9.200C7.300 20 4 16.600 4 12V6l8-3z`,blade:`M5 19L19 5m-5 0h5v5M7 14l3 3M4 20l2.500-2.500`,bolt:`M13 2.500L5.500 13H11l-1 8.500L18 10.500h-5.500L13 2.500z`,aim:`M12 7.500a4.500 4.500 0 1 0 0 9 4.500 4.500 0 0 0 0-9zM12 3v3.500M12 17.500V21M3 12h3.500M17.500 12H21`,chevrons:`M6 6l6 6-6 6M13 6l6 6-6 6`,drop:`M12 3s6.200 6.600 6.200 11a6.200 6.200 0 0 1-12.400 0C5.800 9.600 12 3 12 3z`,flame:`M12 3c.800 4 5 5.200 5 10a5 5 0 0 1-10 0c0-2 1-3.200 2.200-4.200 0 2 .900 3 2 3C10.200 8.800 10.800 6 12 3z`,star:`M12 3.500l2.600 5.500 6 .8-4.400 4.200 1.100 6L12 17.200 6.700 20l1.100-6L3.400 9.800l6-.8L12 3.500z`,plus:`M12 5v14M5 12h14`};function Ie(e){let t=(e.mods.find(e=>e.value>0)??e.mods[0])?.stat??``,n=e=>e.test(t);return n(/^life|regen$/)?`heart`:n(/armour|block|ward_|^all_res|_res$/)?`shield`:n(/^damage|dot_pct|bleed|poison/)?`blade`:n(/attack_speed/)?`bolt`:n(/crit/)?`aim`:n(/evasion|movement/)?`chevrons`:n(/mana|flask|pickup/)?`drop`:n(/elemental|ignite|shock|lantern|spell/)?`flame`:n(/rarity|gold/)?`star`:`plus`}var Le=96,Re=84,ze=64,Be=44,U={core:30,minor:21,notable:28,mastery:38},Ve={core:`Starting node`,minor:`Minor`,notable:`Notable`,mastery:`Mastery`};function He(e,t){let n=e.state,r=e.passivePointsLeft(),i=t.treeBranch,a=Pe[i],o=we(i),c=e=>(e-o.minX)*Le+ze,l=e=>(e-o.minY)*Re+Be,u=(o.maxX-o.minX)*Le+128,d=(o.maxY-o.minY)*Re+Be+58,f=new Map(o.nodes.map(e=>[e.def.id,e])),m=new Set(n.passives),h=new Set(o.nodes.filter(e=>!m.has(e.def.id)&&s(e.def.id,n.passives,999,p).ok).map(e=>e.def.id)),g=o.edges.map(({a:e,b:t})=>{let n=f.get(e),r=f.get(t);return`<line class="edge ${m.has(e)&&m.has(t)?`taken`:m.has(e)&&h.has(t)||m.has(t)&&h.has(e)?`open`:`far`}" x1="${c(n.x)}" y1="${l(n.y)}" x2="${c(r.x)}" y2="${l(r.y)}" />`}).join(``),_=o.nodes.map(e=>{let n=e.def.id,r=m.has(n)?`have`:h.has(n)?`can`:`locked`,i=U[e.tier],a=c(e.x),o=l(e.y),s=t.treeSelected===n,u=Fe[Ie(e.def)],d=i*1.05/24,f=e.tier===`notable`||e.tier===`mastery`?`<circle class="ring" r="${i-5}" />`:``,p=e.tier===`mastery`?`<circle class="ring2" r="${i+5}" />`:``,g=e.crossTo.length?`<text class="cross" x="${i+6}" y="4">⇄ ${e.crossTo.map(e=>H[e].slice(0,3)).join(` · `)}</text>`:``,_=e.def.name.length>15?`${e.def.name.slice(0,14)}…`:e.def.name;return`<g class="tn ${e.tier} ${r}${s?` sel`:``}" transform="translate(${a} ${o})" data-act="tree-select" data-id="${n}" role="button" tabindex="0" aria-label="${P(e.def.name)}, ${Ve[e.tier].toLowerCase()}, ${r===`have`?`taken`:r===`can`?`available`:`not yet reachable`}">
      <circle class="halo" r="${i+8}" />${p}
      <circle class="body" r="${i}" />${f}
      <g class="glyph" transform="translate(${-12*d} ${-12*d}) scale(${d})"><path d="${u}" /></g>
      <text class="lbl" y="${i+14}">${P(_)}</text>${g}
    </g>`}).join(``),v=t.treeSelected?f.get(t.treeSelected):void 0,y=``;if(v){let e=v.def.id,t=m.has(e),n=h.has(e),i=t?`<span class="badge same">Taken</span>`:n&&r>0?`<button class="btn btn-primary btn-small" data-act="passive" data-id="${e}">Take (1 point)</button>`:n?`<span class="badge down">No passive points left</span>`:`<span class="badge down">Take a connected node first</span>`,a=U[v.tier],o=c(v.x),s=l(v.y),f=Math.min(250,u-8),p=o+a+12;p+f>u-4&&(p=o-a-12-f),p=Math.max(4,Math.min(u-f-4,p));let g=Math.max(4,Math.min(d-190,s-28));y=`<div class="tree-pop ${v.tier}" style="left:${p}px;top:${g}px;width:${f}px" role="dialog" aria-label="${P(v.def.name)}">
      <button class="tp-close" data-act="tree-select" data-id="" aria-label="Close">×</button>
      <div class="tp-head"><strong>${P(v.def.name)}</strong><span class="tp-tier">${Ve[v.tier]}</span></div>
      <ul class="tp-mods">${v.def.mods.map(e=>`<li class="${e.value<0?`neg`:``}">${P(e.text)}</li>`).join(``)}</ul>
      ${v.tier===`mastery`?`<p class="hint">A rare, build-defining choice, and usually costs something.</p>`:``}
      <div class="tp-action">${i}</div>
    </div>`}let b=[`str`,`dex`,`int`].map(e=>`<button class="btn btn-small ${e===i?`active`:``}" data-act="tree-branch" data-branch="${e}" style="${e===i?`border-color:${Pe[e]}`:``}">${H[e]}</button>`).join(``);return`
    <section class="tree-section" style="--accent:${a}">
      <div class="section-head"><h2>Passives <span class="count">${r} point${r===1?``:`s`} left</span></h2><button class="btn btn-small" data-act="passive-reset" ${n.passives.length>1?``:`disabled`}>Reset</button></div>
      <div class="row-actions" style="margin-bottom:8px">${b}</div>
      <div class="tree-legend"><span class="lg minor"></span>Minor <span class="lg notable"></span>Notable <span class="lg mastery"></span>Mastery<span class="tree-tip">Tap a node to read it. Drag to look around.</span></div>
      <div class="tree-canvas" data-centre-x="${c(0)}">
        <div class="tree-wrap" style="width:${u}px;height:${d}px">
        <svg class="tree-svg" width="${u}" height="${d}" viewBox="0 0 ${u} ${d}" role="group" aria-label="${H[i]} passive tree">
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
    </section>`}function Ue(e){let t=e.runeGroups();return t.length===0?`<p class="empty">No runes yet. Monsters drop them; rares and bosses more often.</p>`:`<div class="list">${t.map(e=>{let t=p.runes.get(e.runeId);return t?`
      <div class="rune-row">
        ${v(t.id)?y(`icons`,v(t.id),`rune-img`):`<i class="socket ${t.colour} big"></i>`}
        <span class="item-main"><span class="item-name">${P(t.name)} <b>L${e.level}</b> ×${e.count}</span><span class="item-sub">${P(_(t,e.level))}</span></span>
        ${e.count>=3&&e.level<5?`<button class="btn btn-small" data-act="fuse" data-rune="${e.runeId}" data-level="${e.level}">Fuse 3</button>`:``}
      </div>`:``}).join(``)}</div>`}function We(e){let n=e.state;return`
    <section>
      <div class="section-head"><h2>Stash <span class="count">${n.stash.length}/${t.stash}</span></h2></div>
      ${R(e,n.stash,`stash`,`Nothing stashed yet.`)}
    </section>`}function Ge(e,t){let n=e.state,r=u.map(e=>{let t=n.wallet[e.id]??0,r=n.wallet[`shard:${e.id}`]??0;return`
      <div class="orb ${t?``:`none`}">
        ${h(e.id)?`<span class="orb-short art">${y(`icons`,h(e.id),`orb-img`)}</span>`:`<span class="orb-short">${e.short}</span>`}
        <span class="orb-main"><span class="orb-name">${P(e.name)} <b>×${t}</b></span><span class="orb-desc">${P(e.description)}</span>
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
      ${ie.map(e=>`<label class="check"><input type="radio" name="filter" id="filter-${e.id}" value="${e.id}" ${n.filter===e.id?`checked`:``} /> <span><b>${P(e.name)}</b><br><small class="hint">${P(e.description)}</small></span></label>`).join(``)}
    </section>
    <section>
      <h2>Session</h2>
      <div class="stats">
        ${z(`Kills`,`${i.normal+i.magic+i.rare+i.boss} (${i.rare} rare, ${i.boss} boss)`)}
        ${z(`Drops`,`${a.normal+a.magic+a.rare+a.unique}`)}
        ${z(`Rares / uniques`,`${a.rare} / ${a.unique}`)}
        ${z(`Upgrades equipped`,n.stats.upgrades)}
        ${z(`Orbs used`,n.stats.orbsUsed)}
        ${z(`Items salvaged`,n.stats.salvaged)}
        ${z(`Minutes in lab`,o)}
      </div>
      <h3>Recent</h3>
      <ul class="log">${n.log.slice(0,12).map(e=>`<li>${P(e)}</li>`).join(``)||`<li>Nothing yet.</li>`}</ul>
      <button class="btn btn-small btn-danger" data-act="reset">${t.confirmReset?`Tap again to wipe the lab`:`Reset lab`}</button>
    </section>`}function Ke(e,t){let n=e.state;return`<nav class="tabbar">${[...t.mode===`game`?[]:[[`hunt`,`Hunt`,n.ground.length?String(n.ground.length):``]],[`gear`,`Gear`,e.upgradeSlotCount()?`▲${e.upgradeSlotCount()}`:``],[`bag`,`Bag`,`${n.inventory.length}`],[`stash`,`Stash`,n.stash.length?String(n.stash.length):``],[`tree`,`Tree`,e.passivePointsLeft()?String(e.passivePointsLeft()):``],[`orbs`,`Orbs`,String(Object.entries(n.wallet).filter(([e])=>!e.startsWith(`shard:`)).reduce((e,[,t])=>e+t,0))]].map(([e,n,r])=>`<button class="tab ${t.tab===e?`active`:``}" data-act="tab" data-tab="${e}">${n}${r?`<span class="tab-badge">${r}</span>`:``}</button>`).join(``)}</nav>`}function qe(e){return`
    <div class="tip r-${e.rarity}">
      <div class="tip-head">
        <span class="tip-name">${P(e.name)}</span>
        ${e.rarity===`normal`?``:`<span class="tip-base">${P(e.baseName)}</span>`}
        <span class="tip-type">${P(e.typeLine)} · ilvl ${e.itemLevel}${e.requirements?` · Req ${P(e.requirements)}`:``}</span>
      </div>
      ${e.baseStats.length?`<ul class="base-stats">${e.baseStats.map(e=>`<li>${P(e)}</li>`).join(``)}</ul>`:``}
      ${e.implicit?`<ul class="mods implicit"><li class="mod implicit"><span>${P(e.implicit.text)}</span><em>${P(e.implicit.range??``)}</em></li></ul>`:``}
      ${e.affixes.length?`<ul class="mods">${e.affixes.map(e=>`<li class="mod ${e.kind}${e.perfect?` perfect`:``}"><span>${P(e.text)}</span>${e.tier?`<em>T${e.tier}${e.range?` · ${P(e.range)}`:``}</em>`:e.range?`<em>${P(e.range)}</em>`:``}</li>`).join(``)}</ul>`:``}
      ${e.keystone?`<p class="keystone">${P(e.keystone)}</p>`:``}
      ${e.flavour?`<p class="flavour">${P(e.flavour)}</p>`:``}
      <div class="tip-foot">
        ${e.sockets.length?`<span class="sockets">${e.sockets.map(e=>`<i class="socket ${e}"></i>`).join(``)}</span>`:`<span></span>`}
        ${e.corrupted?`<span class="corrupt">Corrupted</span>`:``}${e.crafted?`<span class="crafted">Crafted</span>`:``}
        <span class="score">score ${e.score.toFixed(0)}</span>
      </div>
    </div>`}function Je(e,t,n){if(n===`equipment`)return``;let r=e.comparisonFor(t);if(!r)return``;let i=o(t,p),a=r.current?o(r.current,p):null,s=(e,t)=>e?e.global[t]??0:0,c=[];(i.weapon||a?.weapon)&&c.push([`DPS`,i.weapon?.dps??0,a?.weapon?.dps??0]),(i.defence||a?.defence)&&(c.push([`Armour`,i.defence?.armour??0,a?.defence?.armour??0]),c.push([`Evasion`,i.defence?.evasion??0,a?.defence?.evasion??0]),c.push([`Ward`,i.defence?.ward??0,a?.defence?.ward??0])),c.push([`Life`,s(i,`life_flat`),s(a,`life_flat`)]);let l=e=>s(e,`fire_res`)+s(e,`cold_res`)+s(e,`lightning_res`)+3*s(e,`all_res`);c.push([`Ele. res total`,l(i),l(a)]),c.push([`Move speed`,s(i,`movement_speed`),s(a,`movement_speed`)]);let u=c.filter(([,e,t])=>e!==0||t!==0).map(([e,t,n])=>{let r=Math.round((t-n)*10)/10;return`<div class="cmp-row"><span>${e}</span><b class="${r>0?`up`:r<0?`down`:`same`}">${r>0?`+`:``}${r}</b></div>`}).join(``),d=e.scoreDelta(t)??0;return`<div class="compare"><div class="cmp-head">${r.current?`Replaces <b>${P(k(r.current,p).name)}</b> (score ${e.score(r.current).toFixed(0)})`:`Fills your empty <b>${F[r.slot]}</b> slot`} ${e.state.showHints?`<span class="badge ${d>.5?`up`:d<-.5?`down`:`same`}">${d>0?`+`:``}${d.toFixed(0)}</span>`:``}</div>${u}</div>`}function Ye(e,t,n){if(n===`equipment`)return``;let r=e.comparisonFor(t),i=r?[r.slot]:[],a=e.attributes(i),s=o(t,p).requirements,c=Object.entries(s).filter(([e,t])=>t>a[e]).map(([e,t])=>`${t-a[e]} ${{str:`Str`,dex:`Dex`,int:`Int`}[e]}`);return c.length?`<p class="req-fail">You need ${P(c.join(`, `))} more to equip this.</p>`:``}function Xe(e,t,n){if(!n.craftOpen)return``;let r=e.state,a=u.map(e=>{let n=r.wallet[e.id]??0,a=i(t,e.id,p),o=n>0&&a.ok,s=n===0?`none owned`:a.ok?``:a.reason;return`
      <button class="orb-btn ${o?``:`cant`}" data-act="orb" data-orb="${e.id}" ${o?``:`disabled`}>
        ${h(e.id)?`<span class="orb-short art">${y(`icons`,h(e.id),`orb-img`)}</span>`:`<span class="orb-short">${e.short}</span>`}
        <span class="orb-main"><span class="orb-name">${P(e.name)} <b>×${n}</b></span><span class="orb-desc">${P(s||e.description)}</span></span>
      </button>`}).join(``);return`<div class="craft">${n.craftNote?`<p class="craft-note">${P(n.craftNote)}</p>`:``}<div class="orbs">${a}</div></div>`}function Ze(e,t,n,r){if(t.sockets.length===0)return``;let i=t.sockets.map((e,i)=>{let a=t.runes?.[i],o=a?p.runes.get(a.runeId):void 0;return`<button class="socket-cell ${e} ${n.socketPick===i?`open`:``}" data-act="socket-open" data-index="${i}" ${r}>
      <i class="socket ${e} big${a?` filled`:``}"></i>
      <span>${o?`${P(o.name)} L${a.level}`:`Empty`}</span>
      ${o&&a?`<em>${P(_(o,a.level))}</em>`:``}
    </button>`}).join(``),a=``;if(n.socketPick!==null&&n.socketPick<t.sockets.length){let i=t.sockets[n.socketPick],o=e.runeGroups().filter(e=>p.runes.get(e.runeId)?.colour===i);a=`<div class="socket-picker">
      ${t.runes?.[n.socketPick]?`<button class="btn btn-small" data-act="unsocket" data-index="${n.socketPick}" ${r}>Remove rune</button>`:``}
      ${o.length===0?`<p class="hint">No ${i} runes in your pouch.</p>`:o.map(e=>{let t=p.runes.get(e.runeId);return`<button class="rune-row pick" data-act="socket-put" data-index="${n.socketPick}" data-rune-instance="${e.ids[0]}" ${r}>
          ${v(t.id)?y(`icons`,v(t.id),`rune-img`):`<i class="socket ${t.colour} big"></i>`}
          <span class="item-main"><span class="item-name">${P(t.name)} <b>L${e.level}</b> ×${e.count}</span><span class="item-sub">${P(_(t,e.level))}</span></span>
        </button>`}).join(``)}
    </div>`}return`<div class="sockets-row">${i}</div>${a}`}function Qe(e,t){if(!t.selected)return``;let{place:n,id:r}=t.selected,i=e.find(n,r);if(!i)return``;let a=k(i,p),o=I(n,r),s=[],c=`<button class="btn btn-primary" data-act="equip" ${o}>Equip</button>`;return n===`ground`&&s.push(`<button class="btn btn-primary" data-act="take" ${o}>Take</button>`,c),n===`inventory`&&s.push(c,`<button class="btn" data-act="stash" ${o}>Stash</button>`,`<button class="btn" data-act="drop" ${o}>Drop</button>`),n===`stash`&&s.push(c,`<button class="btn" data-act="to-bag" ${o}>To bag</button>`),n===`equipment`&&s.push(`<button class="btn" data-act="unequip" ${o}>Unequip</button>`),s.push(`<button class="btn ${t.craftOpen?`active`:``}" data-act="craft" ${o}>Craft</button>`,`<button class="btn ${e.isLocked(i.id)?`active`:``}" data-act="lock" ${o} title="A locked item is never sold or salvaged in bulk">${e.isLocked(i.id)?`★ Locked`:`☆ Lock`}</button>`),`
    <div class="sheet-backdrop" data-act="close"></div>
    <div class="sheet" role="dialog" aria-label="${P(a.name)}">
      <button class="sheet-close" data-act="close" aria-label="Close">×</button>
      ${qe(a)}
      ${Ze(e,i,t,o)}
      ${Ye(e,i,n)}
      ${Je(e,i,n)}
      <div class="actions-row">${s.join(``)}</div>
      ${Xe(e,i,t)}
      <div class="actions-danger"><span class="hint">Break it into shards</span><button class="btn btn-danger btn-small" data-act="salvage" ${o}>Salvage</button></div>
    </div>`}function $e(e,t){let n={hunt:ke,gear:e=>Me(e,t),bag:Ne,stash:We,orbs:e=>Ge(e,t),tree:e=>He(e,t)}[t.tab](e);return`
    <div class="lab">
      ${Oe(e,t)}
      <main class="main" id="main" data-tab="${t.tab}">${n}</main>
      ${Ke(e,t)}
      ${t.toast?`<div class="toast lab-toast">${P(t.toast)}</div>`:``}
      ${Qe(e,t)}
    </div>`}var W=()=>ee();function et(t,n={}){let r=n.mode??`lab`,i=n.store??new e(g().lab),a={tab:n.tab??(r===`game`?`gear`:`hunt`),selected:null,craftOpen:!1,toast:null,craftNote:null,confirmReset:!1,mode:r,socketPick:null,treeBranch:pe(i.state.classId),treeSelected:null},o,s=``,c=()=>{let e=t.querySelector(`#main`)?.scrollTop??0,n=t.querySelector(`.tree-canvas`),r=n?.scrollLeft??0,o=n?.scrollTop??0,c=a.tab===`tree`?`tree:${a.treeBranch}`:``;t.innerHTML=$e(i,a);let l=t.querySelector(`#main`);l&&(l.scrollTop=e);let u=t.querySelector(`.tree-canvas`);if(u){if(c&&c!==s){let e=Number(u.dataset.centreX??0);u.scrollLeft=Math.max(0,e-u.clientWidth/2)}else u.scrollLeft=r,u.scrollTop=o;let e=u.querySelector(`.tree-pop`);if(e){let t=u.getBoundingClientRect(),n=e.getBoundingClientRect();n.right>t.right&&(u.scrollLeft+=n.right-t.right+8),n.left<t.left&&(u.scrollLeft-=t.left-n.left+8),n.bottom>t.bottom&&(u.scrollTop+=n.bottom-t.bottom+8),n.top<t.top&&(u.scrollTop-=t.top-n.top+8)}}s=c},l=e=>{a.toast=e,window.clearTimeout(o),o=window.setTimeout(()=>{a.toast=null,c()},Math.max(1800,1e3+e.length*45))},u=e=>{r===`game`&&S().play(e)},d=(e,t=!1,r,i=`denied`)=>{u(e.ok?r??`ui`:i),e.ok?e.message&&l(e.message):l(e.message),t&&e.ok&&(a.selected=null,a.craftOpen=!1,a.craftNote=null),W(),n.onChange?.(),c()},f=e=>{let r=e.target.closest(`[data-act]`);if(!r||!t.contains(r))return;let o=r.dataset.act,s=r.dataset.place??a.selected?.place,f=r.dataset.id??a.selected?.id;switch(o!==`reset`&&(a.confirmReset=!1),o){case`resume`:n.onClose?.();return;case`tab`:u(`ui_tab`),a.tab=r.dataset.tab,a.selected=null,a.craftOpen=!1,c();return;case`kill`:d(i.kill(r.dataset.kind));return;case`take-all`:d(i.takeAll());return;case`sweep`:d(i.salvageAll(`ground`,[`normal`,`magic`]),!1,`salvage`);return;case`salvage-bag`:d(i.salvageAll(`inventory`,[`normal`,`magic`]),!1,`salvage`);return;case`select`:u(`ui`),s&&f&&(a.selected={place:s,id:f},a.craftOpen=!1,a.craftNote=null,a.socketPick=null,c());return;case`fuse`:d(i.fuse(r.dataset.rune??``,Number(r.dataset.level)),!1,`rune_fuse`);return;case`auto-equip`:{let e=i.summary(),t=i.autoEquip();t.count>0&&(a.selected=null,N(`${t.count} item${t.count===1?``:`s`}`,`gd-r-rare`,e,i.summary())),d(t,!1,`equip_metal`);return}case`passive`:d(i.allocatePassive(r.dataset.id??``),!1,`passive`);return;case`passive-reset`:d(i.resetPassives());return;case`tree-select`:a.treeSelected=r.dataset.id||null,u(`ui`),c();return;case`tree-branch`:u(`ui_tab`),a.treeBranch=r.dataset.branch,a.treeSelected=null,me(i.state.classId,a.treeBranch),c();return;case`close`:a.selected=null,a.craftOpen=!1,a.craftNote=null,c();return;case`craft`:a.craftOpen=!a.craftOpen,a.craftNote=null,c();return;case`reset`:if(!a.confirmReset){a.confirmReset=!0,c();return}i.reset(),a.confirmReset=!1,a.selected=null,d({ok:!0,message:`Lab reset.`});return}if(s&&f)switch(o){case`take`:{let e=i.take(f);e.ok&&(a.selected={place:`inventory`,id:f}),d(e);return}case`equip`:{let e=i.summary(),t=i.find(s,f),n=i.equip(s,f);n.ok&&(n.message=`Equipped.`,t&&N(T(t,p),`gd-r-${t.rarity}`,e,i.summary()));let r=i.find(`equipment`,f)??i.find(s,f),a=r?p.bases.get(r.baseId)?.category??``:``;d(n,!0,/cloth|leather|belt|ring|amulet/.test(a)?`equip_cloth`:`equip_metal`);return}case`unequip`:{let e=i.summary(),t=i.find(`equipment`,f),n=i.unequip(f);n.ok&&(a.selected={place:`inventory`,id:f},n.message=`Removed.`,t&&N(T(t,p),`gd-r-${t.rarity}`,e,i.summary(),`Removed`)),d(n,!1,`unequip`);return}case`stash`:{let e=i.move(f,s,`stash`);e.ok&&(a.selected={place:`stash`,id:f}),d(e);return}case`to-bag`:{let e=i.move(f,s,`inventory`);e.ok&&(a.selected={place:`inventory`,id:f}),d(e);return}case`drop`:if(n.onDrop){let e=i.find(s,f);if(!e)return;if(!n.onDrop(e)){l(`There is no ground to drop it on here. Stash or salvage it instead.`);return}i.remove(s,f),d({ok:!0,message:`Dropped ${T(e,p)}.`},!0);return}d(i.move(f,s,`ground`),!0);return;case`lock`:l(i.toggleLock(f)?`Locked. It will not be sold or salvaged in bulk.`:`Unlocked.`),c();return;case`salvage`:d(i.salvage(s,f),!0,`salvage`);return;case`orb`:{let e=i.useOrb(s,f,r.dataset.orb??``);a.craftNote=e.message??null,d(e,!1,`orb_success`,`orb_fail`);return}case`socket-open`:{let e=Number(r.dataset.index);a.socketPick=a.socketPick===e?null:e,c();return}case`socket-put`:{let e=i.socket(s,f,Number(r.dataset.index),r.dataset.runeInstance??``);e.ok&&(a.socketPick=null),d(e,!1,`socket`);return}case`unsocket`:d(i.unsocket(s,f,Number(r.dataset.index)),!1,`unequip`);return}},m=e=>{let n=e.target;if(!t.contains(n))return;let r=i.state;switch(n.id){case`zoneLevel`:{i.setZoneLevel(Number(n.value));let e=t.querySelector(`#zone-label`);e&&(e.textContent=String(r.zoneLevel));let a=t.querySelector(`#followLevel`);a&&(a.checked=r.followLevel);break}case`rarityExtra`:{r.rarityExtra=Number(n.value);let e=t.querySelector(`#rarity-label`);e&&(e.textContent=`+${r.rarityExtra}%`);break}case`quantityExtra`:{r.quantityExtra=Number(n.value);let e=t.querySelector(`#quantity-label`);e&&(e.textContent=`+${r.quantityExtra}%`);break}default:return}W()},h=e=>{let n=e.target;if(!t.contains(n))return;let r=i.state;switch(n.id){case`followLevel`:r.followLevel=n.checked,n.checked&&(r.zoneLevel=r.charLevel);break;case`showHints`:r.showHints=n.checked;break;case`autoNormal`:r.autoSalvage.normal=n.checked;break;case`autoMagic`:r.autoSalvage.magic=n.checked;break;case`filter-all`:case`filter-leveling`:case`filter-endgame`:r.filter=n.value;break;case`zoneLevel`:case`rarityExtra`:case`quantityExtra`:break;default:return}W(),c()};return t.addEventListener(`click`,f),t.addEventListener(`input`,m),t.addEventListener(`change`,h),c(),()=>{t.removeEventListener(`click`,f),t.removeEventListener(`input`,m),t.removeEventListener(`change`,h),window.clearTimeout(o),W(),t.innerHTML=``}}var tt=`modulepreload`,nt=function(e){return`/battle-of-wellon/`+e},rt={},G=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=nt(t,n),t=s(t),t in rt)return;rt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:tt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},it=`false`,at=`false`,ot=it===`true`,st=at===`true`;function ct(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,ot||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await G(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/battle-of-wellon/sw.js`,{scope:`/battle-of-wellon/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!st){if(ot)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/battle-of-wellon/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function lt(e){let t=ct({immediate:!0,onOfflineReady:e.onOfflineReady,onNeedRefresh:()=>{e.onUpdateCheck(null),e.onNeedRefresh(()=>t(!0))},onRegisteredSW:(t,n)=>{if(!n||!navigator.onLine){e.onUpdateCheck(null);return}e.onUpdateCheck(`checking`);let r=window.setTimeout(()=>e.onUpdateCheck(null),8e3);n.update().then(()=>{e.onUpdateCheck(n.installing?`downloading`:null)},()=>e.onUpdateCheck(null)).finally(()=>{n.installing||window.clearTimeout(r)})},onRegisterError:()=>e.onUpdateCheck(null)})}function ut(){return window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function dt(){let e=navigator.userAgent,t=navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;return/iPad|iPhone|iPod/.test(e)||t}function ft(e){window.addEventListener(`beforeinstallprompt`,t=>{t.preventDefault(),e(async()=>{await t.prompt();let{outcome:e}=await t.userChoice;return e===`accepted`})})}function pt(){return`<div class="loading-screen" style="${m(`load-l`,`backdrops`,`loading-16x9`)}${m(`load-p`,`backdrops`,`loading-9x16`)}"><span>Loading…</span></div>`}var mt=()=>y(`icons`,`emblem`,`emblem emblem-art`)||`<img class="emblem" src="icons/emblem-256.png" width="128" height="128" alt="" />`,ht=()=>`<div class="title-bg" style="${m(`art-l`,`backdrops`,`title-16x9`)}${m(`art-p`,`backdrops`,`title-9x16`)}"></div>`;function gt(e){let t=e.checking===`checking`?`Checking for updates…`:e.checking===`downloading`?`Downloading an update…`:e.offline===`preparing`?`Preparing offline play…`:``;return t?`<div class="busy" role="status" aria-live="polite"><span class="spinner" aria-hidden="true"></span><span>${t}</span></div>`:``}function K(e,t){let n={preparing:`Preparing offline play…`,ready:`Ready to play offline`,preview:`Preview build (no offline mode)`,dev:`Dev mode (no service worker)`}[t.offline];e.innerHTML=`
    ${ht()}
    <main class="title">
      <button class="btn btn-small btn-secondary mute-toggle" id="mute" aria-pressed="${S().allMuted}">Sound: ${S().allMuted?`Off`:`On`}</button>
      ${mt()}
      <h1>The Battle<br />of Wellon</h1>
      <p class="tagline">A loot-hunter's action RPG</p>

      <div class="actions">
        <button class="btn btn-primary" id="play">Play</button>
        <a class="btn" href="#lab">Loot Lab (Debugging)</a>
        <a class="btn" href="#jukebox">Jukebox</a>
        ${t.install?`<button class="btn btn-secondary" id="install">Install</button>`:``}
      </div>

      ${t.iosHint?`<p class="hint">To install on iPhone or iPad: tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</p>`:``}

      ${gt(t)}
      <div class="status">
        <span class="chip" id="net" data-state="${navigator.onLine?`online`:`offline`}">${navigator.onLine?`Online`:`Offline`}</span>
        <span class="chip" data-state="${t.offline===`ready`?`ready`:``}">${n}</span>
      </div>

      ${t.update?`<div class="toast"><span>A new version is ready.</span><button class="btn btn-small" id="update-apply">Update</button></div>`:``}

      <footer>
        <span>v0.34.0</span>
        <span class="sep">·</span>
        <span title="2026-10-10T16:38:23.074Z">build 2026-10-10</span>
      </footer>
    </main>`;let r=e.querySelector(`#mute`);r?.addEventListener(`click`,()=>{let e=S();e.setAllMuted(!e.allMuted),r.textContent=`Sound: ${e.allMuted?`Off`:`On`}`,r.setAttribute(`aria-pressed`,String(e.allMuted))}),e.querySelector(`#play`)?.addEventListener(`click`,()=>t.onPlay()),e.querySelector(`#install`)?.addEventListener(`click`,()=>void t.install?.()),e.querySelector(`#update-apply`)?.addEventListener(`click`,()=>void t.update?.(),{once:!0})}function _t(e,t,n){e.innerHTML=`
    ${ht()}
    <main class="title splash">
      ${mt()}
      <h1>The Battle<br />of Wellon</h1>
      <button class="btn btn-primary" id="enter">Tap to begin</button>
      ${n?gt(n):``}
    </main>`,e.querySelector(`#enter`)?.addEventListener(`click`,t,{once:!0})}var q=document.querySelector(`#app`);if(!q)throw Error(`#app missing`);var J={offline:`preparing`,update:null,install:null,iosHint:!1,checking:null,onPlay:()=>{bt()}},Y=!1,X=null,Z=null;function vt(){let e=location.hash===`#lab`?`lab`:location.hash===`#jukebox`?`jukebox`:location.hash===`#game`?`game`:`title`;e!==X&&(Z?.(),Z=null,Q=!1,X=e,document.body.dataset.screen=e,e!==`title`&&(Y=!0),e===`lab`?Z=et(q):e===`jukebox`?Z=re(q):e===`game`?(q.innerHTML=pt(),G(async()=>{let{mountGame:e}=await import(`./game-9jGLshuk.js`);return{mountGame:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({mountGame:e})=>{X===`game`&&(Z=e(q))})):yt())}function yt(){let e=S();if(e.music.setMood(`intro`,!0),Y){K(q,J);return}e.armUnlock(),_t(q,()=>{Y=!0,e.unlock(),K(q,J)},J)}var Q=!1;async function bt(){let{renderSlots:e}=await G(async()=>{let{renderSlots:e}=await import(`./slots-DwB5Tc57.js`);return{renderSlots:e}},__vite__mapDeps([8,2,3]));X===`title`&&(Q=!0,e(q,{onBack:()=>{Q=!1,K(q,J)},onChoose:async e=>{await ne(e),Q=!1,location.hash=`#game`}}))}function $(){X===`title`&&!Q&&yt()}window.addEventListener(`hashchange`,vt),window.addEventListener(`online`,$),window.addEventListener(`offline`,$),lt({onOfflineReady(){J.offline=`ready`,$()},onNeedRefresh(e){J.update=e,$()},onUpdateCheck(e){J.checking!==e&&(J.checking=e,$())}}),navigator.serviceWorker?.controller&&(J.offline=`ready`),ut()||(dt()?J.iosHint=!0:ft(e=>{J.install=async()=>{let t=await e();return t&&(J.install=null,$()),t},$()})),l().then(()=>vt());export{N as a,T as c,L as i,oe as l,G as n,_e as o,et as r,k as s,pt as t};