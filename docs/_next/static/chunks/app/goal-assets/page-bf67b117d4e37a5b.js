(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{74900:function(e,s,l){Promise.resolve().then(l.bind(l,21833))},21833:function(e,s,l){"use strict";l.r(s);var n=l(620),a=l(99426),i=l(80088),t=l(65335),d=l(14410),r=l(32385),c=l(73692),u=l(15322),o=l(80753),x=l(81261),m=l(32192),h=l(55121),j=l(88601);let p=e=>(0,n.jsxs)(j.zs,{children:[(0,n.jsx)(j.Yi,{className:"cursor-pointer",children:(0,n.jsx)(f,{value:e.actualTargetAmount})}),(0,n.jsxs)(j.bZ,{className:"w-96",children:["낙원을 위한 목표 금액을 더 빠르게 달성하려면 투자 수익율을 높이거나 저축금액을 늘려야 합니다.",(0,n.jsxs)("ul",{className:"list-decimal ml-4",children:[(0,n.jsx)("li",{children:"절약하기"}),(0,n.jsx)("li",{children:"소득 높이기"}),(0,n.jsx)("li",{children:"투자 공부"})]}),(0,n.jsx)("br",{}),"당장 소득금액을 높이기 어렵다면 소비금액을 줄여보세요. 아무리 소득이 높아도 그만큼 소비한다면 목표를 달성 하기 어렵다는 점을 기억하세요.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," 여러분의 슬기로운 저축과 투자를 응원합니다. \uD83D\uDCB0\uD83D\uDCB0"]})]}),v=e=>(0,n.jsxs)(j.zs,{children:[(0,n.jsx)(j.Yi,{children:(0,n.jsxs)("span",{className:"font-semibold underline decoration-primary cursor-pointer",children:[(0,h.D)(e.annualDividend/12),"/월 "]})}),(0,n.jsxs)(j.bZ,{className:"w-96",children:[e.years,"년 후 ",e.dividendYield,"%의 배당수익율로 월 ",(0,n.jsx)(f,{value:e.annualDividend/12}),"의 배당수입을 만들 수 있습니다. ",(0,n.jsx)("br",{}),"영구적인 배당(낙원)을 유지하기 위해서는 자산(",(0,n.jsx)(f,{value:e.actualTargetAmount}),")이 매년 ",(0,n.jsx)(g,{value:"저축증가율".concat(e.isApplyInflation?"(".concat(100*e.inflation,"%)"):"")}),"만큼 증가해야 합니다.",(0,n.jsx)("br",{}),"배당중 일부는 다시 자산으로 재투자를 하거나 배당을 제외하고 물가상승을 따라가는 자산에 투자해야 합니다."]})]}),f=e=>{let{value:s}=e;return(0,n.jsx)(g,{value:(0,h.D)(s)})},g=e=>{let{value:s}=e;return(0,n.jsx)("span",{className:"font-semibold underline decoration-primary",children:s})};s.default=()=>{let{currentAssets:e,annualSavings:s,targetPeriod:l,investmentReturn:j,dividendYield:f,inflation:g,isApplyInflation:D,setAssetAttributes:b}=(0,o.w)(),[N,y]=(0,a.useState)(null),[C,A]=(0,a.useState)([]),[F,k]=(0,a.useState)(null),[Y,S]=(0,a.useState)(null),I=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l=>{let n=l.target.value;if(s&&n.indexOf(".")>=0){if(n.split(".").length>1){let s=n.split(".");b({[e]:[s[0],s.slice(1).join("")].join(".")});return}b({[e]:n});return}try{let s=parseFloat(n.replaceAll(/,/g,""));if(isNaN(s)){b({[e]:0});return}b({[e]:s.toLocaleString()})}catch(s){b({[e]:n})}}},w=()=>{let{years:n,annualData:a,actualTargetAmount:i,annualDividend:t}=(0,c.j)({currentAssets:e||"0",annualSavings:s||"0",targetPeriod:l||"0",investmentReturn:j||"0",dividendYield:f||"0",inflation:g||0,isApplyInflation:D})||{};null!==n&&(n<=100?y(n):y(1001),k(i),S(t),A(a))};(0,a.useEffect)(()=>{w()},[e,s,l,j,f,g,D]);let T=e=>{null==b||b({...e})};return(0,n.jsxs)("main",{className:"w-full",children:[(0,n.jsxs)("h1",{className:"text-lg font-bold",children:["\uD83C\uDFD6 낙원 자산(\uD83D\uDCB0) 계산기 ",(0,n.jsx)("span",{className:"text-sm font-medium",children:"(목표 자산 계산하기)"})]}),(0,n.jsx)("p",{className:"text-sm",children:"여러분의 낙원(경제적 자유)을 만들기 위해 자산\uD83D\uDCB0 목표를 세워보세요. 여러분은 이미 낙원\uD83C\uDFD6에 한발자국\uD83D\uDC5F\uD83D\uDC5F 다가갔습니다."}),(0,n.jsxs)(t.Zb,{className:"my-4",children:[(0,n.jsxs)(t.Ol,{className:"relative",children:[(0,n.jsxs)("div",{className:"flex justify-between w-full",children:[(0,n.jsx)(t.ll,{className:"flex-1",children:"목표 설정"}),(0,n.jsxs)("div",{className:"flex flex-1 items-center justify-end gap-2 xs:mr-8",children:[(0,n.jsx)(r._,{htmlFor:"dividend-goal-main",children:"저축 증가율"}),(0,n.jsx)(d.r,{id:"dividend-goal-main",checked:D,onCheckedChange:()=>T({isApplyInflation:!D})})]})]}),(0,n.jsx)(u.Z,{displayTargetType:!1,inflation:g,isApplyInflation:D,onChange:T,className:"hidden xs:block"})]}),(0,n.jsx)(t.aY,{children:(0,n.jsxs)("div",{className:"grid grid-cols-2 space-4 gap-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"dividendYield",className:"block text-sm font-medium mb-1",children:"낙원(자유) 기간"}),(0,n.jsx)(i.I,{id:"targetPeriod",type:"text",value:l,onChange:I("targetPeriod",!0),placeholder:"0"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"investmentReturn",className:"block text-sm font-medium mb-1",children:"목표 투자 수익률 (%)"}),(0,n.jsx)(i.I,{id:"investmentReturn",type:"text",value:j,onChange:I("investmentReturn",!0),placeholder:"0"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"currentAssets",className:"block text-sm font-medium mb-1",children:"현재 자산 (원)"}),(0,n.jsx)(i.I,{id:"currentAssets",type:"text",value:e,onChange:I("currentAssets"),placeholder:"0"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"annualSavings",className:"block text-sm font-medium mb-1",children:"연간 저축액 (원)"}),(0,n.jsx)(i.I,{id:"annualSavings",type:"text",value:s,onChange:I("annualSavings"),placeholder:"0"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"dividendYield",className:"block text-sm font-medium mb-1",children:"목표 달성 후 예상 배당 수익률 (%)"}),(0,n.jsx)(i.I,{id:"dividendYield",type:"text",value:f,onChange:I("dividendYield",!0),placeholder:"0"})]})]})})]}),(0,n.jsxs)(t.Zb,{className:"mb-4",children:[(0,n.jsx)(t.Ol,{children:(0,n.jsx)(t.ll,{children:"결과"})}),(0,n.jsx)(t.aY,{children:null!==N?(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsxs)("p",{className:"text-lg font-semibold",children:["\uD83C\uDFD6낙원\uD83C\uDFD6 목표 자산은 ",F&&(0,n.jsxs)("span",{children:[(0,n.jsx)(p,{actualTargetAmount:F})," ",D?" (물가상승률: ↑".concat(100*(g||0),"%)"):""]})," 입니다."]}),Y&&(0,n.jsxs)("p",{children:["달성 후 예상 배당금:\xa0",(0,n.jsx)(v,{years:String(N),annualDividend:Y,actualTargetAmount:F,dividendYield:f,inflation:g,isApplyInflation:D}),", ",(0,n.jsxs)("span",{className:"font-semibold underline decoration-primary",children:[(0,h.D)(Y),"/연"]})]})]}):(0,n.jsx)("p",{className:"text-lg font-semibold text-muted-foreground",children:"모든 값을 입력해주세요."})})]}),C.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.F,{annaulAssetData:C}),(0,n.jsx)(x.u,{annaulAssetData:C,displayTargetAmount:!1})]})]})}}},function(e){e.O(0,[536,930,543,15,318,113,535,855,731,744],function(){return e(e.s=74900)}),_N_E=e.O()}]);