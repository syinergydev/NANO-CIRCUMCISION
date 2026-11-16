(function(){
const D=window.NANO,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IC={
 instagram:'<svg viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
 facebook:'<svg viewBox="0 0 24 24"><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8S15.6 3.5 14.3 3.5c-2.7 0-4.4 1.6-4.4 4.6v2.4H7v3.3h2.9V22h3.6Z"/></svg>',
 tiktok:'<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.2v13.4a2.8 2.8 0 1 1-2-2.7V9.4a6 6 0 1 0 5.2 5.9V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8A4.3 4.3 0 0 1 16.6 2Z"/></svg>',
 wa:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1a16 16 0 0 1-4.9-3 9 9 0 0 1-2-2.7c-.4-1-.3-2 .5-2.8.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.3-.1.6.6 1 1.4 1.8 2.5 2.4.3.2.5.1.7-.1l.7-.9c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.4.1.2.1.8-.1 1.5Z"/></svg>'};
const wa=(b,t)=>`https://wa.me/${b.wa}?text=${encodeURIComponent(t||'Halo Sunat Nano Circumcision '+b.name+', saya ingin berkonsultasi.')}`;
const main=D.branches[0];
const soc=()=>`<div class="soc">${D.social.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" data-tip="${s.name}">${IC[s.id]}</a>`).join('')}</div>`;
const pages=[['index.html','Beranda'],['tentang.html','Tentang'],['layanan.html','Layanan'],['fasilitas.html','Fasilitas'],['lokasi.html','Lokasi'],['home-service.html','Home Service'],['galeri.html','Galeri'],['edukasi.html','Edukasi'],['faq.html','FAQ'],['kontak.html','Kontak']];
const cur=(location.pathname.split('/').pop()||'index.html');
const link=([h,n],c)=>`<a href="${h}" class="${c}${h===cur?' on':''}">${n}</a>`;
$('#hdr').outerHTML=`<header class="site"><div class="wrap bar"><a class="logo" href="index.html" aria-label="Beranda"><img src="assets/img/logo.png" alt="Logo Nano Circumcision" width="98" height="44"></a>
<nav class="main" aria-label="Navigasi utama">${pages.filter(p=>p[0]!=='faq.html').map(p=>link(p,'')).join('')}</nav>
<div class="hdr-r"><span class="hdr-soc">${soc()}</span><a class="btn btn-wa btn-sm hdr-wa" href="${wa(main)}" target="_blank" rel="noopener">WhatsApp</a><button class="burger" aria-label="Menu" aria-expanded="false"><span></span></button></div></div></header>
<div class="drawer" id="drawer">${pages.map(p=>link(p,'l')).join('')}<a class="btn btn-wa" href="${wa(main)}" target="_blank" rel="noopener">Konsultasi WhatsApp</a>${soc()}</div>`;
$('#ftr').outerHTML=`<footer class="site"><div class="wrap"><div class="cols"><div><span class="logobox"><img src="assets/img/logo.png" alt="Nano Circumcision"></span><p style="margin:14px 0 16px;max-width:42ch">Klinik khitan modern dengan konsep ramah anak dan keluarga di Jawa Timur.</p>${soc()}</div>
<div><h4>Halaman</h4><ul>${pages.map(([h,n])=>`<li><a href="${h}">${n}</a></li>`).join('')}</ul></div>
<div><h4>Cabang</h4><ul>${D.branches.map(b=>`<li><b style="color:#fff">${b.name}</b><br>${b.address}<br><a href="${wa(b)}" target="_blank" rel="noopener">WhatsApp ${b.waText}</a></li>`).join('')}</ul></div></div>
<p class="copy">© ${new Date().getFullYear()} Sunat Nano Circumcision. Informasi pada website ini bersifat edukasi dan tidak menggantikan konsultasi langsung dengan tenaga medis.</p></div></footer>
<a class="fab" href="#" aria-label="Pilih WhatsApp cabang">${IC.wa}</a><div class="fabmenu">${D.branches.map(b=>`<a href="${wa(b)}" target="_blank" rel="noopener">WhatsApp ${b.name}</a>`).join('')}</div>`;
const bu=$('.burger'),dr=$('#drawer');
bu.onclick=()=>{const o=dr.classList.toggle('open');bu.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
$('.fab').onclick=e=>{e.preventDefault();$('.fabmenu').classList.toggle('open')};
// data-driven renders
const R={
 ratings:()=>D.branches.map(b=>`<div class="rate rv"><div><div class="n"><span data-count="${b.rating}" data-dec="1">${b.rating.toFixed(1).replace('.',',')}</span></div><div class="stars">★★★★★</div></div><div><b>${b.name}</b><small>Google · <span data-count="${b.reviews}">${b.reviews}</span> ulasan</small></div></div>`).join(''),
 services:()=>D.services.map((s,i)=>`<article class="card rv" style="--i:${i}" id="${s.id}"><div class="imgw"><img class="th" loading="lazy" src="assets/img/${s.img}-s.webp" alt="Ilustrasi ${s.name}"></div><div class="bd"><h3>${s.name}</h3><p>${s.desc}</p><div class="acts"><a class="btn btn-out btn-sm" href="faq.html">Detail</a><a class="btn btn-wa btn-sm" href="${wa(main,'Halo, saya ingin konsultasi layanan '+s.name+'.')}" target="_blank" rel="noopener">Konsultasi</a></div></div></article>`).join(''),
 features:()=>D.features.map((f,i)=>`<div class="card feat rv" style="--i:${i}"><div class="ico">${['🧸','🎈','🏥','💬'][i]}</div><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join(''),
 branches:()=>D.branches.map((b,i)=>`<article class="card rv" style="--i:${i}"><div class="imgw"><img class="th" loading="lazy" src="assets/img/${b.photo}-s.webp" alt="Foto klinik ${b.name}"></div><div class="bd"><h3>${b.full}</h3><div class="stars">★★★★★ <span style="color:var(--ink);font-weight:700;letter-spacing:0">${b.rating.toFixed(1).replace('.',',')} (${b.reviews} ulasan)</span></div><p>${b.address}</p><p><b>WA:</b> ${b.waText}<br><b>Jam:</b> ${b.hours||D.hours}</p><div class="acts"><a class="btn btn-out btn-sm" href="${b.maps}" target="_blank" rel="noopener">Google Maps</a><a class="btn btn-wa btn-sm" href="${wa(b)}" target="_blank" rel="noopener">Konsultasi</a></div></div></article>`).join(''),
 faq:()=>D.faq.slice(0,+($('[data-render=faq]').dataset.n||99)).map(f=>`<details><summary>${f[0]}</summary><div class="ans"><div><p>${f[1]}</p></div></div></details>`).join(''),
 areas:()=>D.areas.map(a=>`<span class="chip">${a}</span>`).join(''),
 articles:()=>D.articles.map((a,i)=>`<article class="card rv" style="--i:${i}"><div class="bd"><span class="eyebrow" style="align-self:flex-start">Draf</span><h3>${a[0]}</h3><p>${a[1]}</p><p style="font-size:.82rem;color:var(--orange)">⚠ Konten medis perlu diperiksa dan disetujui tenaga medis sebelum dipublikasikan.</p><div class="acts"><a class="btn btn-out btn-sm" href="${wa(main,'Halo, saya ingin bertanya tentang: '+a[0])}" target="_blank" rel="noopener">Tanya admin</a></div></div></article>`).join(''),
 reviews:()=>D.branches.map((b,i)=>`<a class="card rv feat" style="--i:${i}" href="${b.maps}" target="_blank" rel="noopener"><div class="stars" style="font-size:1.3rem">★★★★★</div><h3>${b.name}: ${b.rating.toFixed(1).replace('.',',')} dari ${b.reviews} ulasan</h3><p>Baca ulasan asli pelanggan langsung di Google Maps →</p></a>`).join(''),
 social:()=>soc()
};
$$('[data-render]').forEach(e=>e.innerHTML=R[e.dataset.render]());
// location tabs
const lm=$('#locmap');if(lm){let k=0;const t=$('#loctabs');t.innerHTML=D.branches.map((b,i)=>`<button class="tab${i?'':' on'}" data-i="${i}">${b.name}</button>`).join('');
 const set=i=>{const b=D.branches[i];$$('.tab',t).forEach((x,j)=>x.classList.toggle('on',i===j));lm.innerHTML=`<iframe loading="lazy" title="Peta ${b.full}" src="https://www.google.com/maps?q=${encodeURIComponent(b.embed)}&output=embed"></iframe>`;$('#locinfo').innerHTML=`<h3>${b.full}</h3><div class="meta"><span>📍 ${b.address}</span><span>📞 WhatsApp <b>${b.waText}</b></span><span>🕗 ${b.hours||D.hours} <small>(konfirmasi ke admin)</small></span><span class="stars">★★★★★ <b style="color:var(--ink)">${b.rating.toFixed(1).replace('.',',')} · ${b.reviews} ulasan Google</b></span></div><div class="cta-row"><a class="btn btn-pri" href="${b.maps}" target="_blank" rel="noopener">Petunjuk arah</a><a class="btn btn-wa" href="${wa(b)}" target="_blank" rel="noopener">Konsultasi cabang</a></div>`};
 t.onclick=e=>{const x=e.target.closest('.tab');if(x)set(+x.dataset.i)};set(0)}
// gallery
const gg=$('#gal');if(gg){const items=D.gallery;let vis=[],ci=0;
 const draw=f=>{vis=items.filter(g=>f==='all'||g[1]===f);gg.innerHTML=vis.map((g,i)=>`<button data-i="${i}" aria-label="${g[2]}"><img loading="lazy" src="assets/img/${g[0]}-s.webp" alt="${g[2]}"></button>`).join('')};
 draw('all');$$('#gfilter .tab').forEach(b=>b.onclick=()=>{$$('#gfilter .tab').forEach(x=>x.classList.toggle('on',x===b));draw(b.dataset.f)});
 const lb=document.createElement('div');lb.className='lb';lb.innerHTML='<button class="x" aria-label="Tutup">✕</button><button class="pv" aria-label="Sebelumnya">‹</button><img alt=""><p></p><button class="nx" aria-label="Berikutnya">›</button>';document.body.append(lb);
 const show=i=>{ci=(i+vis.length)%vis.length;const g=vis[ci];$('img',lb).src=`assets/img/${g[0]}.webp`;$('img',lb).alt=g[2];$('p',lb).textContent=g[2]};
 gg.onclick=e=>{const b=e.target.closest('button');if(b){show(+b.dataset.i);lb.classList.add('open')}};
 lb.onclick=e=>{if(e.target===lb||e.target.className==='x')lb.classList.remove('open');if(e.target.className==='pv')show(ci-1);if(e.target.className==='nx')show(ci+1)};
 addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(ci-1);if(e.key==='ArrowRight')show(ci+1)});
 let sx=0;lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX);lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(ci+(d<0?1:-1))});
 const vb=$('#vbox');if(vb)vb.innerHTML=D.videoApproved?`<video controls preload="none" playsinline src="${D.video.src}"></video>`:`<div><img src="assets/img/logo.png" alt="" style="width:200px;margin:0 auto 16px;background:#fff;border-radius:16px;padding:10px"><p style="font-weight:700">Video klinik</p><p style="font-size:.85rem;opacity:.8;margin-top:6px">Disembunyikan sampai pemilik memastikan izin orang tua/wali. Aktifkan lewat <code>videoApproved</code> di data.js.</p></div>`}
// reservation form
const f=$('#rsv');if(f){$('#cab').innerHTML=D.branches.map((b,i)=>`<option value="${i}">${b.name}</option>`).join('');$('#lay').innerHTML=D.services.map(s=>`<option>${s.name}</option>`).join('');
 f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f)),b=D.branches[+v.cab];
 const t=`Halo Sunat Nano Circumcision ${b.name}, saya ingin reservasi/konsultasi.\n\nNama orang tua: ${v.ortu}\nNama pasien: ${v.pasien||'-'}\nUsia pasien: ${v.usia}\nLayanan: ${v.lay}\nPesan: ${v.pesan||'-'}`;
 window.open(`https://wa.me/${b.wa}?text=${encodeURIComponent(t)}`,'_blank','noopener')}}
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);$$('[data-count]',x.target).forEach(cnt)}}),{threshold:.12});
function cnt(el){const to=+el.dataset.count,dec=+(el.dataset.dec||0);if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const t0=performance.now();(function s(t){const p=Math.min((t-t0)/1100,1),v=to*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec).replace('.',',');if(p<1)requestAnimationFrame(s)})(t0)}
$$('.rv').forEach(e=>io.observe(e));
// light parallax
const px=$$('[data-px]');if(px.length&&!matchMedia('(prefers-reduced-motion:reduce)').matches)addEventListener('scroll',()=>px.forEach(e=>{const r=e.getBoundingClientRect();e.style.transform=`translateY(${(r.top-innerHeight/2)*-.04}px)`}),{passive:true});
// page transition
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||a.target||/^(http|#|mailto|tel)/.test(a.getAttribute('href')))return;e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,200)});
addEventListener('pageshow',()=>document.body.classList.remove('leaving'));
window.NANO_WA=wa;
})();
