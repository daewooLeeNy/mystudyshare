(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1d10":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"small"},[a("canvas",{ref:"myFirst"})])},n=[],r=(a("c5f6"),a("d549")),s=a("cdba"),o={components:{},props:{asset:{required:!1,type:Number},yearSavingAmount:{required:!1,type:Number},interest:{required:!1,type:Number},periodOfRetire:{required:!1,type:Number},inflation:{required:!1,type:Number}},data:function(){return{datacollection:{},thisChart:null}},mounted:function(){this.initChart()},watch:{asset:function(){this.updateData()},yearSavingAmount:function(){this.updateData()},interest:function(){this.updateData()},periodOfRetire:function(){this.updateData()},inflation:function(){this.updateData()}},methods:{initChart:function(){var t=this.fillData(),e=t.assetData,a=t.yearSavingData,i=t.yData;this.loadChart(e,a,i)},fillData:function(){var t=Object(s["b"])({asset:this.asset,yearSavingAmount:this.yearSavingAmount,interest:this.interest,periodOfRetire:this.periodOfRetire,inflation:this.inflation}),e=t.reduce((function(t,e){return t.push(e.totalAsset),t}),[]),a=t.reduce((function(t,e){return t.push(e.calAsset),t}),[]),i=t.reduce((function(t,e){return t.push(e.calYearSavingAmount),t}),[]),n=t.reduce((function(t,e){return t.push("".concat(e.periodOfRetire,"년")),t}),[]);return{historyOfAssets:t,totalAssetData:e,assetData:a,yearSavingData:i,yData:n}},updateData:function(){var t=this.fillData(),e=t.assetData,a=t.yearSavingData,i=t.yData;if(this.thisChart){var n=[];this.asset>0&&n.push(this.addXAxisAsset(e)),this.yearSavingAmount>0&&n.push(this.addXAxisYearSaving(a)),this.thisChart.data.datasets=n,this.thisChart.data.labels=i,this.thisChart.update()}},addXAxisAsset:function(t){return{label:"자산",backgroundColor:"#FBE7C6",borderColor:"#FBE7C6",data:t,fill:!0}},addXAxisYearSaving:function(t){return{label:"저축",backgroundColor:"#B4F8C8",borderColor:"#B4F8C8",data:t,fill:!0}},loadChart:function(t,e,a){var i=a,n=[];this.asset>0&&n.push(this.addXAxisAsset(t)),this.yearSavingAmount>0&&n.push(this.addXAxisYearSaving(e));var s={labels:i,datasets:n},o={type:"line",data:s,options:{plugins:{title:{display:!0,text:function(t){return"총 자산 증가 추이"}},tooltip:{mode:"index"}},hover:{mode:"nearest",intersect:!1},interaction:{mode:"nearest",axis:"x",intersect:!1},radius:.5,elements:{line:{tension:.5}},scales:{x:{display:!0,grid:{display:!1}},y:{display:!0,grid:{display:!1},stacked:!0}}}};this.thisChart=new r["a"](this.$refs.myFirst,o)}}},u=o,d=(a("5d04"),a("2877")),l=Object(d["a"])(u,i,n,!1,null,null,null);e["default"]=l.exports},"5d04":function(t,e,a){"use strict";var i=a("6e82"),n=a.n(i);n.a},"6e82":function(t,e,a){},cdba:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return i}));a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("c47a"),a("6612");var i=function(t){var e=t.asset,a=t.yearSavingAmount,i=t.interest,s=t.periodOfRetire,o=t.inflation,u=n({asset:e,interest:i,periodOfRetire:s,inflation:o}),d=r({yearSavingAmount:a,interest:i,periodOfRetire:s,inflation:o}),l=u+d;return{totalAsset:l,calAsset:u,calYearSavingAmount:d,asset:e,yearSavingAmount:a,interest:i,periodOfRetire:s,inflation:o}},n=function(t){var e=t.asset,a=t.interest,i=t.periodOfRetire,n=e*Math.pow(1+a,i);return n},r=function(t){var e=t.yearSavingAmount,a=t.interest,i=t.periodOfRetire,n=t.inflation,r=a-n,s=Math.pow(1+a,i)-Math.pow(1+n,i),o=e*s/(r||1);return o},s=function(t){for(var e=t.asset,a=t.yearSavingAmount,n=t.interest,r=t.periodOfRetire,s=t.inflation,o=[],u=1;u<=r;u++){var d=i({asset:e,yearSavingAmount:a,interest:n,periodOfRetire:u,inflation:s});o.push(d)}return o}}}]);