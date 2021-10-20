const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};g();function c(e){return Object.prototype.toString.call(e)==="[object Array]"}function p(e){if(!c(e))return!1;if(e.length===0)return!0;if(!c(e[0]))return!1;const t=e.length,r=e[0].length;for(let o=1;o<t;o++){const n=e[o];if(!c(n)||n.length!==r)return!1}return!0}function h(e){let t=[];for(const r of e)t.push(Array.from(r));return t}function a(){this.step_array=[],this.x=void 0,this.xCNT=void 0}a.prototype.add=function(e){if(!p(e))throw e+" is not a matrix";this.step_array.push(h(e))};a.prototype.finish=function(e){if(!c(e))throw e+" is not an array";this.x=e};a.prototype.toString=function(){const e=this.step_array.length;let t=`steps:
`;for(let r=0;r<e;r++){const o=this.step_array[r];t+=r+`: [
`;for(const n of o)t+="	["+n.join(", ")+`]
`;t+=`]
`}switch(t+="result: ",this.xCNT){case 0:t+="0 solution";break;case 1:t+="["+this.x.join(", ")+"]";break;case 1/0:t+="infinity solutions";break;default:t+="not calculated yet"}return t};function x(e){let t=h(e);if(!p(t))throw t+" is not a matrix";let r=t.length;const o=t[0].length-1,n=new a;for(let i=0;i<r;i++){const l=t[i];if(l.slice(0,-1).filter(u=>u!==0).length===0){if(l[o]!==0)return n.xCNT=0,n;t.splice(i,1),i--,r--;continue}if(i===r-1)break;for(let u=i+1;u<r;u++){const d=t[u][i]/t[i][i];for(let f=0;f<o+1;f++)t[u][f]-=d*t[i][f]}n.add(t)}if(r===o)n.xCNT=1;else return r>o?n.xCNT=0:n.xCNT=1/0,n;let s=new Array(o);for(let i=o-1;i>=0;i--){if(s[i]=t[i][o]/t[i][i],t[i][i]=1,t[i][o]=s[i],i>0)for(let l=0;l<i;l++)t[l][o]-=s[i]*t[l][i],t[l][i]=0;n.add(t)}return n.finish(s),n}const y={data(){return{selectedIndex:0,algoArray:[{name:"\u9AD8\u65AF\u6D88\u5143\u6CD5",func:x}],inputMatrix:[[0,0,0],[0,0,0]],result:null}},methods:{addRow(){const e=this.inputMatrix[0].length;this.inputMatrix.push(new Array(e).fill(0))},removeRow(){this.inputMatrix.length>1&&this.inputMatrix.pop()},addCol(){const e=this.inputMatrix.length;for(let t=0;t<e;t++)this.inputMatrix[t].splice(-1,0,0)},removeCol(){const e=this.inputMatrix.length;if(this.inputMatrix[0].length!==2)for(let r=0;r<e;r++)this.inputMatrix[r].splice(-2,1)},calculate(){const e=this.algoArray[this.selectedIndex].func;this.result=e(this.inputMatrix),console.log(this.result)}}};Vue.createApp(y).mount("#app");
