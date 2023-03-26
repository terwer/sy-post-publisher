import{h as a,a as e,K as n,f as i,e as t,v as s,B as l,A as u,t as d,E as o}from"./vendor_element-plus-6396cda2.js";import{O as c,ad as p,u as r,z as g,A as k,P as m,Q as y,U as f,_ as v,x as b,V as M,$ as V,a2 as _,a1 as w,ao as I,X as A,a0 as h,ap as T}from"./vendor-42595716.js";import{s as x,L as C,b as B,ao as $,c as j,l as z,ap as K,v as O,t as S,aq as U,k as q}from"./AppLayout.vue_vue_type_script_setup_true_lang-59c75e45.js";import{u as E}from"./vendor_vue-i18n-8a61efa7.js";const L=async(a,e,n)=>{const i=x.getSiyuanWindow(),t=null==i?void 0:i.SyCmd;return await t.customCmd(a,e,{},n)},P={class:"anki-body"},R={class:"block-title"},W={class:"anki-option"},J={class:"anki-deck"},N={class:"anki-tags"},Q=q(c({__name:"AnkiIndex",props:{pageId:{type:String,default:void 0}},setup(c){const x=c,q=C.getLogger("components/anki/AnkiIndex.vue"),{t:Q}=E(),X=new O,D=p({ankiInfo:null,ankiMap:{},deckMap:{},tagMap:{}}),F=r(!1),G=["&quot;","&amp;","amp;","quot;"],H=r(!1),Y=async()=>{d.confirm("准备同步Anki卡片，是否继续？",Q("main.opt.warning"),{confirmButtonText:Q("main.opt.ok"),cancelButtonText:Q("main.opt.cancel"),type:"warning"}).then((async()=>{F.value=!0;const a=$(),e=`${a}/widgets/sy-post-publisher/lib/cmd`,n=`${a}/widgets/sy-post-publisher/lib/cmd/ankisiyuan.bin`;q.info("ankisiyuanPath=>",n);const i=await L(n,[],e);0===i.code?o.success("操作成功，执行结果=>"+i.data.split("\n").slice(-2).join(" ")):o.error("操作异常，错误消息=>"+i.data),F.value=!1})).catch((a=>{F.value=!1,a.toString().indexOf("cancel")<=-1&&(o({type:"error",message:Q("main.opt.failure")+"，请将 ankisiyuan.bin 或者 ankisiyuan.exe 复制到 data/widgets/sy-post-publisher/lib/cmd 目录=>"+a}),q.error(Q("main.opt.failure")+"=>"+a))}))},Z=a=>{D.deckMap[a].inputValue&&D.deckMap[a].dynamicTags.push(D.deckMap[a].inputValue),D.deckMap[a].inputVisible=!1,D.deckMap[a].inputValue=""},aa=a=>{D.tagMap[a].inputValue&&D.tagMap[a].dynamicTags.push(D.tagMap[a].inputValue),D.tagMap[a].inputVisible=!1,D.tagMap[a].inputValue=""},ea=async()=>{const a=await j(!0,x.pageId);D.ankiInfo=await X.getAnkilinkInfo(a),q.debug("ankiInfo=>",D.ankiInfo),D.ankiInfo.forEach((a=>{var e,n,i;D.ankiMap[a.id]=a,q.debug("item.value=>",a.value);let t=[],s=[];if(!z(a.value)){const l=null==(e=a.value)?void 0:e.split("\n"),u=null==(n=l[0])?void 0:n.replace(/"/g,"").replace(/deck_name=/g,"");if(t=null==u?void 0:u.split("::"),K.includeInArray(u,G)&&(H.value=!0),l.length>1){const a=null==(i=l[1])?void 0:i.replace(/"/g,"").replace(/tags=\[/g,"").replace(/]/g,"");s=a.split(","),K.includeInArray(a,G)&&(H.value=!0)}}t=t.filter((function(a){return""!==a})),s=s.filter((function(a){return""!==a})),q.debug("deckArr=>",t),q.debug("tagArr=>",s),D.deckMap[a.id]={inputValue:"",dynamicTags:t,inputVisible:!1},D.tagMap[a.id]={inputValue:"",dynamicTags:s,inputVisible:!1}}))};return g((()=>x.pageId),(async(a,e)=>{await ea(),q.debug("Anki初始化")})),k((async()=>{await ea()})),(d,c)=>{const p=a,r=e,g=n,k=i,x=t,C=s,$=l,j=u;return m(),y("div",P,[H.value?(m(),f(p,{key:0,class:"top-version-tip",title:"检测到Anki标记已被转义，可能是使用了优化排版导致，请点击保存自动修复。若无法自动修复，请删除重新修改保存。注意：可能有缓存，保存之后可间隔一段时间再来看。",type:"error",closable:!1})):v("",!0),b(B)()?(m(),f(r,{key:1,type:"primary",onClick:Y,loading:F.value},{default:M((()=>[V("更新卡片 ")])),_:1},8,["loading"])):v("",!0),_(j,{gutter:12},{default:M((()=>[(m(!0),y(w,null,I(D.ankiInfo,((a,e)=>(m(),f($,{key:a.id,span:8,class:"anki-card-col"},{default:M((()=>[_(C,{shadow:"always"},{default:M((()=>[A("div",R,h(e)+"."+h(a.content)+" - "+h(a.id),1),A("div",W,[A("div",J,[_(x,{label:d.$t("anki.siyuan.deck")},{default:M((()=>{var e;return[(m(!0),y(w,null,I(null!=(e=D.deckMap[a.id].dynamicTags)?e:[],(e=>(m(),f(g,{key:e,class:"mx-1",closable:"","disable-transitions":!1,onClose:n=>{return i=a.id,t=e,void D.deckMap[i].dynamicTags.splice(D.deckMap[i].dynamicTags.indexOf(t),1);var i,t}},{default:M((()=>[V(h(e),1)])),_:2},1032,["onClose"])))),128)),D.deckMap[a.id].inputVisible?(m(),f(k,{key:0,ref_for:!0,ref:"deckRefInput",modelValue:D.deckMap[a.id].inputValue,"onUpdate:modelValue":e=>D.deckMap[a.id].inputValue=e,class:"ml-1 w-20",size:"small",onKeyup:T((e=>Z(a.id)),["enter"]),onBlur:e=>Z(a.id)},null,8,["modelValue","onUpdate:modelValue","onKeyup","onBlur"])):(m(),f(r,{key:1,class:"button-new-tag ml-1 el-tag",size:"small",onClick:e=>{return n=a.id,void(D.deckMap[n].inputVisible=!0);var n}},{default:M((()=>[V(h(d.$t("anki.siyuan.deck.new")),1)])),_:2},1032,["onClick"]))]})),_:2},1032,["label"])]),A("div",N,[_(x,{label:d.$t("anki.siyuan.tag")},{default:M((()=>[(m(!0),y(w,null,I(D.tagMap[a.id].dynamicTags,(e=>(m(),f(g,{key:e,class:"mx-1",closable:"","disable-transitions":!1,onClose:n=>((a,e)=>{D.tagMap[a].dynamicTags.splice(D.tagMap[a].dynamicTags.indexOf(e),1)})(a.id,e)},{default:M((()=>[V(h(e),1)])),_:2},1032,["onClose"])))),128)),D.tagMap[a.id].inputVisible?(m(),f(k,{key:0,ref_for:!0,ref:"tagRefInput",modelValue:D.tagMap[a.id].inputValue,"onUpdate:modelValue":e=>D.tagMap[a.id].inputValue=e,class:"ml-1 w-20",size:"small",onKeyup:T((e=>aa(a.id)),["enter"]),onBlur:e=>aa(a.id)},null,8,["modelValue","onUpdate:modelValue","onKeyup","onBlur"])):(m(),f(r,{key:1,class:"button-new-tag ml-1 el-tag",size:"small",onClick:e=>{return n=a.id,void(D.tagMap[n].inputVisible=!0);var n}},{default:M((()=>[V(h(d.$t("anki.siyuan.tag.new")),1)])),_:2},1032,["onClick"]))])),_:2},1032,["label"])]),_(r,{type:"primary",class:"button","data-block-id":a.id,onClick:e=>(async a=>{q.debug("blockId=>",a);const e=D.ankiMap[a],n=D.deckMap[a],i=D.tagMap[a];let t;q.debug("deckInfo=>",n),q.debug("tagInfo=>",i),t=S('deck_name="',n.dynamicTags.join("::"),'"'),t=S(t,"\n","tags=",JSON.stringify(i.dynamicTags));for(let l=0;l<G.length;l++){const a=G[l];t=t.replace(new RegExp(a,"g"),"")}e.value=t,q.info("准备保存anki标记，ankiInfo=>",e.value);const s={[e.name]:e.value};await X.setBlockAttrs(a,s),H.value?U.reloadPageWithMessage(Q("main.opt.success")):o.success(Q("main.opt.success"))})(a.id)},{default:M((()=>[V("保存Anki标记 ")])),_:2},1032,["data-block-id","onClick"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-c410cfdb"]]);export{Q as A};
