(()=>{
if(!document.querySelector('link[data-artes-estagios="v68"]')){const l=document.createElement("link");l.rel="stylesheet";l.href="../../../estagios-artes-v66.css?v=68";l.dataset.artesEstagios="v68";document.head.appendChild(l)}
const A=(atributos={},pericias={},recursos={})=>({atributos,pericias,recursos});
const R={
 Uchiha:{cor:"#ef304f",descricao:"O sangue Uchiha carrega um poder ocular adormecido. Sua evolução começa somente quando o Sharingan desperta — antes disso, o personagem permanece em sua forma base.",etapas:[
  ["Uchiha","Forma base",A()],
  ["Sharingan de Um Tomoe","Primeiro despertar",A({agilidade:3,presenca:1},{Percepção:10,Esquiva:6,Bloqueio:6})],
  ["Sharingan de Dois Tomoe","Domínio ocular",A()],
  ["Sharingan de Três Tomoe","Domínio avançado",A()],
  ["Mangekyou Sharingan","Olhos da autodestruição",A()]
 ]},
 Ghoul:{cor:"#c92735",descricao:"A Kagune cresce junto do instinto predatório do Ghoul. Os bônus de Uma Kagune pertencem à própria forma base da raça.",etapas:[
  ["Uma Kagune","Forma base",A({presenca:3}, {Bloqueio:5,"Percepção":7})],
  ["Duas Kagunes","Regeneração voraz",A({forca:1,resistencia:1},{},{sanidade_max:20})],
  ["Três Kagunes","Fera enjaulada",A({forca:2,resistencia:2},{},{sanidade_max:25})],
  ["Quatro Kagunes","Predador completo",A()]
 ]},
 Vampiro:{cor:"#b7152c",descricao:"O despertar vampírico começa na Lua Nova. Seus primeiros bônus já pertencem à forma base e acompanham o personagem desde a seleção da raça.",etapas:[
  ["Lua Nova","Forma base",A({resistencia:4,apt_magica:2},{Furtividade:4})],
  ["Lua Crescente","Soberania carmesim",A({agilidade:3},{Percepção:4})],
  ["Lua de Sangue","Sangue primordial",A({presenca:5,forca:2,resistencia:2},{Percepção:6})],
  ["Eclipse Eterno","Território do Vampiro",A({forca:4,resistencia:4,presenca:10,agilidade:4})]
 ]},
 Kitsune:{cor:"#f38b2b",descricao:"Cada cauda é uma extensão física da alma da Kitsune. A raça começa com duas caudas e conserva os bônus conquistados conforme sua essência amadurece.",etapas:[
  ["Duas Caudas","Forma base",A({apt_magica:3,agilidade:2,resistencia:2},{Esquiva:2,Furtividade:3})],
  ["Quatro Caudas","Raposa traiçoeira",A({apt_magica:1,presenca:2,resistencia:2},{Percepção:4},{energia_max:15})],
  ["Seis Caudas","Tempestade espiritual",A({apt_magica:6,agilidade:1,presenca:2,resistencia:4},{Percepção:5,Esquiva:3})],
  ["Nove Caudas","Verdadeira raposa",A()]
 ]},
 Fada:{cor:"#72d9aa",descricao:"As asas representam o amadurecimento da alma feérica. Mesmo sem asas, a Fada já possui sua forma base e o poder de seu Tesouro Espiritual.",etapas:[
  ["Sem Asas","Espírito nascente",A({apt_magica:8,agilidade:3},{Percepção:4,Vontade:3,Esquiva:3})],
  ["Pequenas Asas","Primeiro florescer",A({apt_magica:3,agilidade:2},{Esquiva:3,Vontade:2})],
  ["Asas Completas","Florescer real",A({apt_magica:7,agilidade:2,presenca:2},{Esquiva:4})],
  ["Asas Primordiais","Coração da Árvore Sagrada",A()]
 ]},
 Elfo:{cor:"#3fd7c8",descricao:"A evolução élfica é medida pela harmonia de sua alma com a mana do mundo. Os bônus da Primeira Ressonância constituem a forma base da raça.",etapas:[
  ["Primeira Ressonância","Forma base",A({presenca:1},{Percepção:2,Vontade:2,Pontaria:5})],
  ["Convergência Harmônica","Fluxos entrelaçados",A({apt_magica:3,presenca:5},{Vontade:3,Bloqueio:3})],
  ["Sinfonia Ancestral","Vozes de outras eras",A({apt_magica:4,agilidade:2},{Percepção:3,Vontade:4,Pontaria:3,Bloqueio:3})],
  ["Cântico do Mundo","O regente da mana",A()]
 ]}
};
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const arteRaca=n=>`../../../assets/racas/${norm(n)}.webp?v=68`;
const arteEtapa=(n,i)=>`../../../assets/estagios/${norm(n)}-${i}.webp?v=68`;
function somar(p){const r=R[p?.raca],fim=Math.max(0,Math.min(Number(p?.etapa_raca)||0,(r?.etapas.length||1)-1)),out=A();if(!r)return out;for(let i=0;i<=fim;i++){const b=r.etapas[i][2];for(const k of ["atributos","pericias","recursos"])for(const [n,v] of Object.entries(b[k]||{}))out[k][n]=(out[k][n]||0)+Number(v||0)}return out}
function icone(raca,i){const n=norm(raca),c=R[raca].cor;if(n==="uchiha"){if(i===0)return `<div class="sigilo-base">団</div>`;const t=i===4?8:i;return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#d9273f"/><circle cx="50" cy="50" r="18" fill="#05070b"/><circle cx="50" cy="50" r="8" fill="#d9273f"/>${Array.from({length:t},(_,x)=>`<circle cx="50" cy="18" r="6" fill="#05070b" transform="rotate(${x*360/t} 50 50)"/>`).join("")}</svg>`}if(n==="ghoul")return `<svg viewBox="0 0 100 100">${Array.from({length:i+1},(_,x)=>`<path d="M50 82 Q ${10+x*24} ${48-x*5}, ${22+x*19} 13" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>`).join("")}<circle cx="50" cy="80" r="11" fill="#161a20"/></svg>`;if(n==="vampiro")return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="${i===0?'#252b37':i===1?'#e6e4dc':i===2?'#b8122d':'#07090d'}"/><circle cx="${i===1?61:50}" cy="${i===3?50:42}" r="${i===1?34:i===3?25:0}" fill="#0b1018"/>${i===3?'<circle cx="50" cy="50" r="35" fill="none" stroke="#dc233d" stroke-width="7"/>':''}</svg>`;if(n==="kitsune")return `<svg viewBox="0 0 100 100">${Array.from({length:[2,4,6,9][i]},(_,x)=>`<path d="M50 77 Q ${10+x*(80/Math.max(1,[2,4,6,9][i]-1))} 45, ${14+x*(72/Math.max(1,[2,4,6,9][i]-1))} 17" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`).join("")}<path d="M38 75 L50 56 62 75Z" fill="#f6c36b"/></svg>`;if(n==="fada")return `<svg viewBox="0 0 100 100">${i?`<ellipse cx="${i>1?27:35}" cy="42" rx="${i>1?22:14}" ry="${i>1?31:21}" fill="none" stroke="${c}" stroke-width="5"/><ellipse cx="${i>1?73:65}" cy="42" rx="${i>1?22:14}" ry="${i>1?31:21}" fill="none" stroke="${c}" stroke-width="5"/>`:''}<circle cx="50" cy="54" r="10" fill="${c}"/>${i===3?'<circle cx="50" cy="50" r="43" fill="none" stroke="#f0d96b" stroke-width="3" stroke-dasharray="5 6"/>':''}</svg>`;return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="${18+i*7}" fill="none" stroke="${c}" stroke-width="5"/><circle cx="50" cy="50" r="8" fill="${c}"/>${Array.from({length:3+i},(_,x)=>`<path d="M50 8 Q ${20+x*16} 50 50 92" fill="none" stroke="${c}" opacity=".45" stroke-width="3" transform="rotate(${x*360/(3+i)} 50 50)"/>`).join("")}</svg>`}
const titulo=n=>({agilidade:"Agilidade",forca:"Força",apt_magica:"Aptidão Mágica",presenca:"Presença",resistencia:"Resistência",energia_max:"Energia Mágica máxima",sanidade_max:"Sanidade máxima"}[n]||n);
function textos(b){return [...Object.entries(b.atributos),...Object.entries(b.pericias),...Object.entries(b.recursos)].filter(([,v])=>v).map(([n,v])=>`${v>0?"+":""}${v} ${titulo(n)}`)}
async function esperar(){if(window.RPG_AUTH)return window.RPG_AUTH;return new Promise(x=>document.addEventListener("rpg:auth-pronto",e=>x(e.detail),{once:true}))}
async function montar(){if(document.body.dataset.rpg!=="abismo")return;const painel=document.querySelector("#painel-descricao");if(!painel||painel.querySelector(".progressao-racial-v62"))return;const alvo=painel.querySelector("#form-descricao")||painel.querySelector(".editor-descricao-jogador")||painel.firstElementChild;if(!alvo)return;const auth=await esperar(),id=new URLSearchParams(location.search).get("id");if(!id)return;const {data:p}=await auth.cliente.from("personagens").select("*").eq("id",id).maybeSingle();if(!p||!alvo.isConnected)return;document.querySelector(".raca-v60")?.remove();const atual=R[p.raca],pode=auth.perfil==="mestre"||p.campanha==="Testes";const s=document.createElement("section");s.className="progressao-racial-v62";s.dataset.raca=norm(p.raca);s.style.setProperty("--raca-cor",atual?.cor||"#37bdf2");s.style.setProperty("--raca-fundo",`url('${arteRaca(p.raca)}')`);s.innerHTML=`<header><div><span>Linagem do personagem</span><h2>${p.raca||"Raça ainda não definida"}</h2><p>${atual?.descricao||"Escolha uma raça para despertar sua progressão racial."}</p></div>${pode?'<button class="botao trocar-raca-v62" type="button">Escolher raça</button>':'<small>Na campanha principal, a raça e sua evolução são definidas pelo Mestre.</small>'}</header><div class="etapas-raciais-v62"></div><div class="bonus-raciais-v62"></div>`;alvo.after(s);
 const render=()=>{const r=R[p.raca],grade=s.querySelector(".etapas-raciais-v62"),bonus=s.querySelector(".bonus-raciais-v62");if(!r){grade.innerHTML="";bonus.innerHTML="";return}grade.innerHTML=r.etapas.map((e,i)=>`<button type="button" data-etapa="${i}" style="--arte-fundo:url('${arteEtapa(p.raca,i)}')" class="etapa-racial-v62 ${i===(Number(p.etapa_raca)||0)?'ativa':''}" ${pode?'':'disabled'}><span class="arte-etapa-v62"><img src="${arteEtapa(p.raca,i)}" alt="${e[0]}" loading="lazy"></span><small>${e[1]}</small><strong>${e[0]}</strong>${i===(Number(p.etapa_raca)||0)?'<em>Etapa atual</em>':''}</button>`).join("");const b=somar(p),lista=textos(b);bonus.innerHTML=`<span>Bônus raciais ativos</span><div>${lista.length?lista.map(x=>`<strong>${x}</strong>`).join(""):'<em>Esta etapa não concede bônus numéricos permanentes.</em>'}</div>`;grade.querySelectorAll("button").forEach(x=>x.onclick=()=>salvar(Number(x.dataset.etapa),p.raca))};
 async function salvar(etapa,raca){s.classList.add("salvando");const {error}=await auth.cliente.rpc("definir_progressao_racial",{personagem_alvo:p.id,nova_raca:raca,nova_etapa:etapa});if(error){alert(error.message);s.classList.remove("salvando");return}location.reload()}
 function seletor(){const d=document.createElement("dialog");d.className="modal-racas-v62";d.innerHTML=`<form method="dialog"><header><div><small>Linagens de Abismo</small><h2>Escolha a raça</h2><p>A nova raça começa em sua etapa base. Os bônus antigos deixam de ser aplicados automaticamente.</p></div><button value="cancel">×</button></header><div>${Object.entries(R).map(([n,r])=>`<button type="button" data-raca="${n}" style="--raca-cor:${r.cor}"><span class="retrato-raca-v64"><img src="${arteRaca(n)}" alt="Representação da raça ${n}"></span><strong>${n}</strong><small>${r.etapas[0][0]}</small></button>`).join("")}</div></form>`;document.body.appendChild(d);d.querySelectorAll("[data-raca]").forEach(x=>x.onclick=()=>salvar(0,x.dataset.raca));d.addEventListener("close",()=>d.remove());d.showModal()}
 s.querySelector(".trocar-raca-v62")?.addEventListener("click",seletor);render();
}
window.RPG_RACAS=R;window.RPG_bonusRacial=somar;window.RPG_textosBonusRacial=textos;
document.addEventListener("DOMContentLoaded",()=>{
 let tentativas=0,emMontagem=false;
 const tentar=async()=>{
  if(emMontagem)return;
  emMontagem=true;
  try{
   await montar();
   if(document.querySelector("#painel-descricao .progressao-racial-v62")){
    clearInterval(repetir);
    return;
   }
   if(++tentativas>=30)clearInterval(repetir);
  }finally{
   emMontagem=false;
  }
 };
 const repetir=setInterval(tentar,400);
 setTimeout(tentar,80);
});
})();
