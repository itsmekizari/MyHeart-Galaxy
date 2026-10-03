const memories=[
  {file:'01.webp',title:'Soft little smile',text:'နူးညံ့တဲ့အမှတ်တရတစ်ခု။'},
  {file:'02.webp',title:'A quiet moment',text:'ရိုးရိုးလေးပဲဖြစ်ပေမယ့် မှတ်မိနေတဲ့အခိုက်အတန့်။'},
  {file:'03.webp',title:'Red day',text:'အရောင်တောက်တောက်နဲ့ memory တစ်ခု။'},
  {file:'04.webp',title:'That familiar look',text:'တစ်ချက်ကြည့်ရုံနဲ့ မှတ်မိသွားတဲ့မျက်နှာ။'},
  {file:'05.webp',title:'Comfy memories',text:'အေးအေးဆေးဆေးဖြစ်တဲ့နေ့တစ်နေ့။'},
  {file:'06.webp',title:'Playful energy',text:'ဟာသလေးတွေပါနေတဲ့ memory။'},
  {file:'07.webp',title:'Close to the heart',text:'နီးနီးကပ်ကပ် သိမ်းထားချင်တဲ့ပုံ။'},
  {file:'08.webp',title:'Late-night memory',text:'တိတ်တိတ်လေးနဲ့ မှတ်မိနေဆဲ။'},
  {file:'09.webp',title:'Vintage mood',text:'အဟောင်းပုံစံလေးနဲ့ ချစ်စရာ memory။'},
  {file:'10.webp',title:'Old-school smile',text:'အချိန်ကြာသွားပေမယ့် ပျောက်မသွားတဲ့အမှတ်တရ။'}
];
const satellites=document.getElementById('satellites');
const viewer=document.getElementById('viewer');
const viewerImage=document.getElementById('viewerImage');
const viewerTitle=document.getElementById('viewerTitle');
const viewerIndex=document.getElementById('viewerIndex');
const captionTitle=document.getElementById('captionTitle');
const captionText=document.getElementById('captionText');
let paused=false;

function render(order=memories){
  satellites.innerHTML='';
  order.forEach((m,i)=>{
    const btn=document.createElement('button');
    btn.className='memory';
    btn.type='button';
    btn.dataset.orbit=String(i+1);
    btn.innerHTML=`<img src="assets/images/${m.file}" alt="${m.title}" loading="lazy">`;
    btn.addEventListener('click',()=>openViewer(m,i));
    satellites.appendChild(btn);
  });
}

function openViewer(m,i){
  viewerImage.src=`assets/images/${m.file}`;
  viewerImage.alt=m.title;
  viewerTitle.textContent=m.title;
  viewerIndex.textContent=`MEMORY ${String(i+1).padStart(2,'0')} / ${memories.length}`;
  captionTitle.textContent=m.title;
  captionText.textContent=m.text;
  viewer.classList.add('open');
  viewer.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeViewer(){
  viewer.classList.remove('open');
  viewer.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  viewerImage.src='';
}

document.getElementById('viewerClose').addEventListener('click',closeViewer);
viewer.addEventListener('click',e=>{if(e.target.dataset.close)closeViewer()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeViewer()});

document.getElementById('toggleMotion').addEventListener('click',e=>{
  paused=!paused;
  document.body.classList.toggle('paused',paused);
  e.currentTarget.textContent=paused?'▶ လည်အောင်လုပ်':'⏸ လည်တာရပ်';
});

document.getElementById('shuffle').addEventListener('click',()=>{
  const shuffled=[...memories].sort(()=>Math.random()-.5);
  render(shuffled);
  captionTitle.textContent='New orbit, same memories.';
  captionText.textContent='Random လုပ်တိုင်း ပုံတွေက အစီအစဉ်ပြောင်းပြီး galaxy တစ်ခုလုံးကို ပြန်လည်လည်ပတ်မယ်။';
});

const core=document.getElementById('core');
core.addEventListener('click',()=>openViewer(memories[3],3));
render();
