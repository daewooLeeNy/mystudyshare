(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{17083:function(e,t,s){Promise.resolve().then(s.bind(s,80753)),Promise.resolve().then(s.bind(s,5790)),Promise.resolve().then(s.t.bind(s,66858,23))},80753:function(e,t,s){"use strict";s.d(t,{GoalAssetProvider:function(){return l},w:function(){return o}});var a=s(620),n=s(99426);let r={currentAssets:"100,000,000",annualSavings:"20,000,000",targetAmount:"1,000,000,000",targetPeriod:"10",investmentReturn:"10",dividendYield:"5",years:"10",isDividendGoal:!1,inflation:.03,isApplyInflation:!0},i=n.createContext(r),l=e=>{let{assetAttributes:t,children:s}=e,[l,o]=n.useState(t||r);return(0,a.jsx)(i.Provider,{value:{...l,setAssetAttributes:e=>{o(t=>({...t||{},...e}))}},children:s})},o=()=>n.useContext(i)},15322:function(e,t,s){"use strict";s.d(t,{Z:function(){return w}});var a=s(620),n=s(14410),r=s(32385),i=s(99426),l=s(39038),o=s(79959),d=s(51269);let c=l.fC,u=l.xz,f=l.h_,x=l.x8,m=i.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(l.aV,{ref:t,className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...n})});m.displayName=l.aV.displayName;let p=i.forwardRef((e,t)=>{let{className:s,children:n,...r}=e;return(0,a.jsxs)(f,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(l.VY,{ref:t,className:(0,d.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...r,children:[n,(0,a.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(o.Pxu,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=l.VY.displayName;let g=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};g.displayName="DialogHeader";let h=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,d.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};h.displayName="DialogFooter";let b=i.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(l.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold leading-none tracking-tight",s),...n})});b.displayName=l.Dx.displayName;let v=i.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(l.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",s),...n})});v.displayName=l.dk.displayName;var y=s(28724),j=s(80088),N=s(73600),w=e=>{let{isApplyInflation:t,isDividendGoal:s,inflation:l=0,displayTargetType:o=!0,className:f,onChange:m}=e,[w,k]=i.useState(String(100*l)),[C,D]=i.useState(s),[A,z]=i.useState(t);return i.useEffect(()=>{k(String(100*l)),z(t),D(s)},[l,t,s]),(0,a.jsxs)(c,{onOpenChange:e=>{e||(k(String(100*l)),z(t),D(s))},children:[(0,a.jsx)(u,{asChild:!0,children:(0,a.jsx)(y.Z,{size:18,className:(0,d.cn)("absolute top-[18px] right-7",f)})}),(0,a.jsxs)(p,{className:"bg-white",children:[(0,a.jsxs)(g,{className:"text-left",children:[(0,a.jsx)(b,{children:"설정"}),(0,a.jsx)(v,{children:"계산에 사용된 설정 값을 변경 할 수 있습니다."})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start mt-4 space-y-4",children:[(0,a.jsxs)("div",{className:"w-full flex flex-1 gap-4",children:[(0,a.jsx)(r._,{htmlFor:"apply-inflation",className:"w-26",children:"물가상승률 반영"}),(0,a.jsx)(n.r,{id:"apply-inflation",checked:A,onCheckedChange:z})]}),(0,a.jsxs)("div",{className:"w-full grid flex-1 gap-2",children:[(0,a.jsx)(r._,{htmlFor:"link",children:"물가상승률(%)"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(j.I,{type:"text",id:"inflation",placeholder:"물가상승률을 입력해주세요",value:Number(w)>0?w:"",onChange:e=>k(e.target.value)}),(0,a.jsx)("span",{children:"%"})]})]}),o&&(0,a.jsxs)("div",{className:"w-full flex flex-1 gap-4",children:[(0,a.jsx)(r._,{htmlFor:"dividend-goal",className:"w-26",children:"배당 목표로 계산"}),(0,a.jsx)(n.r,{id:"dividend-goal",checked:C,onCheckedChange:D})]})]}),(0,a.jsx)(h,{children:(0,a.jsx)(x,{children:(0,a.jsx)(N.z,{type:"button",variant:"secondary",onClick:()=>{null==m||m({inflation:parseInt(String(w))/100,isDividendGoal:C,isApplyInflation:A})},children:"저장"})})})]})]})}},5790:function(e,t,s){"use strict";var a=s(620),n=s(27801),r=s(15322),i=s(80753),l=s(16421),o=s(51269),d=s(81620);let c=e=>e?"font-bold text-black":"";t.default=()=>{let e=(0,d.usePathname)(),t=(0,i.w)(),s="/goal-interest"!==e;return(0,a.jsx)("main",{className:"sticky top-0 z-50 w-full p-4 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,a.jsxs)("div",{className:(0,o.cn)("flex items-center justify-between w-full max-w-screen-lg mx-auto",s&&"pr-8"),children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 xs:gap-12",children:[(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(n.default,{src:"".concat("/freeder","/logo.png"),width:"30",height:"30",alt:"freeder logo"}),(0,a.jsx)("h1",{className:"text-black text-xl font-bold",children:"Freeder"})]}),(0,a.jsxs)("nav",{className:"flex-1 inline-flex justify-start items-start gap-x-4 gap-y-2 flex-wrap",children:[(0,a.jsx)(l.default,{href:"/goal-line",className:(0,o.cn)("text-gray-600",c("/goal-line"===e)),title:"낙원 시간 계산기",children:"낙원 기간 \uD83C\uDFC1"}),(0,a.jsx)(l.default,{href:"/goal-assets",className:(0,o.cn)("text-gray-600",c("/goal-assets"===e)),title:"낙원 자산 계산기",children:"낙원 자산 \uD83D\uDCB0"}),(0,a.jsx)(l.default,{href:"/goal-interest",className:(0,o.cn)("text-gray-600",c("/goal-interest"===e)),title:"목표 수익율",children:"목표 수익율"})]})]}),s&&(0,a.jsx)(r.Z,{inflation:t.inflation,isApplyInflation:t.isApplyInflation,isDividendGoal:t.isDividendGoal,onChange:e=>{let{inflation:s,isApplyInflation:a,isDividendGoal:n}=e;t.setAssetAttributes({inflation:s,isDividendGoal:n,isApplyInflation:a})},className:"xs:hidden"})]})})}},73600:function(e,t,s){"use strict";s.d(t,{z:function(){return d}});var a=s(620),n=s(99426),r=s(74274),i=s(16363),l=s(51269);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:s,variant:n,size:i,asChild:d=!1,...c}=e,u=d?r.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(o({variant:n,size:i,className:s})),ref:t,...c})});d.displayName="Button"},80088:function(e,t,s){"use strict";s.d(t,{I:function(){return i}});var a=s(620),n=s(99426),r=s(51269);let i=n.forwardRef((e,t)=>{let{className:s,type:n,...i}=e;return(0,a.jsx)("input",{type:n,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...i})});i.displayName="Input"},32385:function(e,t,s){"use strict";s.d(t,{_:function(){return d}});var a=s(620),n=s(99426),r=s(64700),i=s(16363),l=s(51269);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(r.f,{ref:t,className:(0,l.cn)(o(),s),...n})});d.displayName=r.f.displayName},14410:function(e,t,s){"use strict";s.d(t,{r:function(){return l}});var a=s(620),n=s(99426),r=s(6879),i=s(51269);let l=n.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(r.fC,{className:(0,i.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...n,ref:t,children:(0,a.jsx)(r.bU,{className:(0,i.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});l.displayName=r.fC.displayName},51269:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var a=s(82513),n=s(63188);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m6)((0,a.W)(t))}}}]);