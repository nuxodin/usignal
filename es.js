/*! (c) Andrea Giammarchi */
const{is:s}=Object;let t;const e=s=>{const e=t;t=e||[];try{if(s(),!e)for(const{value:s}of t);}finally{t=e}};class i{constructor(s){this._=s}then(){return this.value}toJSON(){return this.value}toString(){return this.value}valueOf(){return this.value}}let h;class n extends i{constructor(s,t,e,i){super(s),this.f=i,this.$=!0,this.r=new Set,this.s=new p(t,e)}get value(){if(this.$){const s=h;h=this;try{this.s.value=this._(this.s._)}finally{this.$=!1,h=s}}return this.s.value}}const c={async:!1,equals:!0},o=(s,t,e=c)=>new n(s,t,e,!1);let r;const l=()=>{},u=s=>{for(const t of s)t.stop()};class a extends n{constructor(s,t,e){super(s,t,e,!0),this.i=0,this.a=!!e.async,this.m=!0,this.e=[]}get value(){this.a?this.async():this.sync()}async(){this.m&&(this.m=!1,queueMicrotask((()=>{this.m=!0,this.sync()})))}sync(){const s=r;r=this,this.i=0;const{length:t}=this.e;super.value,this.i<t&&u(this.e.splice(this.i));for(const{value:s}of this.e);r=s}stop(){this._=l,this.r.clear(),this.s.c.clear(),this.e.length&&u(this.e.splice(0))}}const f=(s,t,e=c)=>{let i;if(r){const{i:h,e:n}=r;h!==n.length&&n[h]._===s||(n[h]=new a(s,t,e)),i=n[h],r.i++}else(i=new a(s,t,e)).value;return()=>{i.stop()}},v=()=>!1;class p extends i{constructor(t,{equals:e}){super(t),this.c=new Set,this.s=!0===e?s:e||v}peek(){return this._}get value(){return h&&(this.c.add(h),h.r.add(this)),this._}set value(s){if(!this.s(this._,s)&&(this._=s,this.c.size)){const s=[],e=[this];for(const t of e)for(const i of t.c)if(!i.$&&i.r.has(t))if(i.r.clear(),i.$=!0,i.f){s.push(i);const t=[i];for(const s of t)for(const e of s.e)e.$=!0,t.push(e)}else e.push(i.s);for(const e of s)t?t.push(e):e.value}}}const y=(s,t=c)=>new p(s,t);export{i as Signal,e as batch,o as computed,f as effect,y as signal};
