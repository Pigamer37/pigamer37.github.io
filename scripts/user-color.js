const colorPicks=document.getElementsByClassName("color-pickerr");
const resBut=document.getElementById("res");
const OGX=document.getElementById("OGX");
const r=document.querySelector(':root');
const t_c=document.querySelector('meta[name="theme-color"]');
const def_col="#ff9933";

function handlePickedEvent(event){handlePickedColor(event.target.value);}
function handlePickedColor(acolor,useGX=false){
  if((acolor===null)||(acolor===undefined)) return
  if(useGX) r.style.setProperty('--accent-orange',`env(-opera-gx-accent-color,env(-gx-color-primary-100,${acolor}))`)
  else r.style.setProperty('--accent-orange',acolor)
  t_c?.setAttribute("content",acolor)
}
if(resBut){resBut.addEventListener("click", (_)=>{colorPicks[0].value=def_col;handlePickedColor(def_col);localStorage.removeItem('acc-color');localStorage.removeItem('OGX-colors')})}
if(OGX){OGX.addEventListener("click", (_)=>{handlePickedColor(colorPicks[0].value,true);localStorage.setItem('OGX-colors','true')})}
if(window.localStorage!==undefined){const a_color=localStorage.getItem('acc-color');handlePickedColor(a_color||colorPicks[0].value,localStorage.getItem('OGX-colors')==='true');if(colorPicks.length>0){a_color!==null?colorPicks[0].value=a_color:colorPicks[0].value=def_col}}
if(colorPicks.length>0){
for(const colP of colorPicks){colP.addEventListener("input", handlePickedEvent)
if(window.localStorage!==undefined){colP.addEventListener("change", (event)=>{
  handlePickedEvent(event);
  localStorage.setItem('acc-color', event.target.value);
})}else{colP.addEventListener("change", handlePickedEvent)}colP.select()}
}