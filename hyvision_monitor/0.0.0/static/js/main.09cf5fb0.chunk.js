(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,n){e.exports=n(433)},196:function(e,t,n){},197:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},198:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(7),r=n.n(o),s=(n(196),n(44)),c=n(23),l=n(20),u=n(46),d=n(45),p=n(47),h=(n(197),n(198),n(18));function f(e){var t=1/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),n=Math.round(t);return 0===n&&(n=t),Math.round(e*n)/n}n(199);var m=n(11),v=n.n(m),g=n(182),b=n.n(g),y=n(54),O=n.n(y),R=n(179),j=n(117),w=n.n(j),C="http://hyv.decade.tw:8080/";var S,D=n(187),k=n.n(D),_=n(116),E=n.n(_),x=n(180),F=n.n(x),I=n(189),T=n(114),L=n.n(T),U=(n(203),F.a.RangePicker);R.getLogger("AnalysisUI");function A(e,t){var n=t,a=e.map(function(e){var t=n.map(function(t){return t.judgeReports.find(function(t){return t.id===e.id}).value}),a=t.reduce(function(e,t){return e+t},0)/t.length,i=Math.sqrt(t.reduce(function(e,t){return e+(a-t)*(a-t)},0)/t.length),o=(e.USL-a)/(3*i),r=(a-e.LSL)/(3*i),s=Math.min(o,r),c=(a-e.value)/((e.USL-e.LSL)/2),l=s*(1-Math.abs(c)),u=e.id,d=e.name,p=e.subtype;return o=f(o,.001),r=f(r,.001),s=f(s,.001),c=f(c,.001),l=f(l,.001),{id:u,name:d,subtype:p,measure:e,valArr:t,mean:a,sigma:i,CPU:o,CPL:r,CP:s,CA:c,CPK:l}});return console.log(a),a}i.a.Component;function N(e){return"string"===typeof e||e instanceof String}var M="NA",H="UOK",P="LOK",W="UCNG",X="LCNG",q="USNG",Q="LSNG";S={},Object(h.a)(S,M,{COLOR:"#aaa",TEXT:M}),Object(h.a)(S,H,{COLOR:"#87d068",TEXT:H}),Object(h.a)(S,P,{COLOR:"#87d068",TEXT:P}),Object(h.a)(S,W,{COLOR:"#d0d068",TEXT:W}),Object(h.a)(S,X,{COLOR:"#d0d068",TEXT:X}),Object(h.a)(S,q,{COLOR:"#f50",TEXT:q}),Object(h.a)(S,Q,{COLOR:"#f50",TEXT:Q});var B=function(e){function t(e){var n,a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).divID="ControlChart_ID_"+Math.round(1e4*Math.random()),a.charObj=void 0,a.state={chartOpt:{type:"line",data:{labels:[],datasets:[{borderColor:"rgba(100, 255, 100,0)",lineTension:0,data:[],pointBackgroundColor:[]},{type:"scatter",borderColor:"rgba(100, 255, 100)",lineTension:0,data:[],pointBackgroundColor:[]}]},bezierCurve:!1,options:(n={responsive:!0,scales:{xAxes:[{display:!0,type:"time",distribution:"linear",ticks:{callback:function(e,t,n){return e.toString()},source:"labels",autoSkip:!0},time:{displayFormat:!0,displayFormats:{hour:"MMM D, h:mm:ss"},minUnit:"hour"}}],yAxes:[{display:!0,scaleLabel:{display:!0}}]},elements:{line:{fill:!1},point:{radius:6}},bezierCurve:!1,animation:{duration:0},maintainAspectRatio:!1},Object(h.a)(n,"responsive",!0),Object(h.a)(n,"title",{display:!0,text:""}),Object(h.a)(n,"annotation",{annotations:[]}),Object(h.a)(n,"legend",{display:!1}),Object(h.a)(n,"tooltips",{enabled:!0}),n)}},a.default_annotationTargets=[{type:"USL",color:"rgba(200, 0, 0,0.2)"},{type:"LSL",color:"rgba(200, 0, 0,0.2)"},{type:"UCL",color:"rgba(100, 100, 0,0.2)"},{type:"LCL",color:"rgba(100, 100, 0,0.2)"},{type:"value",color:"rgba(0, 0, 0,0.2)"}],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(e,t){}},{key:"componentWillUpdate",value:function(e,t){this.PropsUpdate(e)}},{key:"PropsUpdate",value:function(e){if(this.state.chartOpt.data.labels=[],this.state.chartOpt.data.datasets.forEach(function(e){e.data=[],e.pointBackgroundColor=[]}),0!==e.reportArray.length){this.state.chartOpt.options.title.text=e.targetMeasure.name,e.reportArray.reduce(function(t,n,a){if(void 0!==e.xAxisRange&&(e.xAxisRange[0]>n.time_ms||e.xAxisRange[1]<n.time_ms))return t;var i=n.judgeReports.find(function(t){return t.id===e.targetMeasure.id});if(-128===i.status)return t;var o={x:new Date(n.time_ms).toString(),y:i.value};return t.datasets[0].pointBackgroundColor.push(void 0),t.datasets[0].data.push(o),t},this.state.chartOpt.data),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12e4,n=e,a=[],i=void 0;function o(e){i={group:[e],startTime:e.time_ms,endTime:e.time_ms},a.push(i)}o(n[0]);for(var r=1;r<n.length;r++)n[r].time_ms-i.endTime<t?(i.group.push(n[r]),i.group.endTime=n[r].time_ms):o(n[r]);return a}(e.reportArray,this.props.groupInterval).reduce(function(t,n,a){var i=n.group.map(function(t){return t.judgeReports.find(function(t){return t.id===e.targetMeasure.id&&-128!==t.status})}),o=i.reduce(function(e,t){return e+t.value},0)/i.length,r=n.group.reduce(function(e,t){return e+t.time_ms},0)/i.length;if(void 0!==e.xAxisRange&&(e.xAxisRange[0]>r||e.xAxisRange[1]<r))return t;t.labels.push(new Date(r));var s={x:new Date(r).toString(),y:o};return t.datasets[1].pointBackgroundColor.push(void 0),t.datasets[1].data.push(s),t},this.state.chartOpt.data);var t=this.props.anotationTargets;void 0===t&&(t=this.default_annotationTargets),this.state.chartOpt.options.annotation.annotations=t.map(function(t){return{type:"line",mode:"horizontal",scaleID:"y-axis-0",value:e.targetMeasure[t.type],borderColor:t.color,borderWidth:4,borderDash:[12,12],label:{position:"right",enabled:!0,content:t.type}}}),void 0!==this.charObj&&this.charObj.update(),console.log(this.state.chartOpt.options.scales)}}},{key:"componentDidMount",value:function(){var e=document.getElementById(this.divID).getContext("2d");this.charObj=new L.a(e,this.state.chartOpt),this.PropsUpdate(this.props)}},{key:"onResize",value:function(e,t){}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className},i.a.createElement("canvas",{id:this.divID,style:{height:"400px"}}),i.a.createElement(I.a,{handleWidth:!0,handleHeight:!0,onResize:this.onResize.bind(this)}))}}]),t}(i.a.Component);function z(e,t){return void 0===e&&(e=new Date),e.setDate(e.getDate()+t)}var J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).ec_canvas=null,n.state={defFileSearchName:"",dateRange:[v()(z(new Date,-7)),v()(z(new Date,1))],inspectionRec:[],groupInterval:6e5},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"stateUpdate",value:function(e){return this.setState(Object(s.a)({},this.state,e))}},{key:"render",value:function(){var e=this;if(void 0===this.props.defFile)return null;var t=2===this.state.dateRange.length&&this.state.dateRange.reduce(function(e,t){return e&&void 0!==t._d&&void 0!==t._d.getTime},!0),n=this.state.dateRange.map(function(e){return e._d}),a=this.props.DefFileHash,o=(this.props.DefFileName,N(this.props.DefFileHash)&&this.props.DefFileHash.length>5);console.log(this.props.defFile);var r=this.props.defFile.featureSet[0].features.filter(function(e){return"measure"===e.type}),s=null;this.state.inspectionRec.length>0&&(s=[i.a.createElement(k.a,{range:!0,min:this.state.inspectionRec[0].time_ms,max:this.state.inspectionRec[this.state.inspectionRec.length-1].time_ms,defaultValue:[this.state.inspectionRec[0].time_ms,this.state.inspectionRec[this.state.inspectionRec.length-1].time_ms],step:72e5,tipFormatter:function(e){return new Date(e).toString()},onChange:function(t){return e.stateUpdate({displayRange:t})}}),i.a.createElement(E.a,{defaultValue:v()("0:10","HH:mm"),format:"HH:mm",minuteStep:5,allowClear:!1,onChange:function(t){if(null!==t){console.log(t);var n=t._d.getTime(),a=v()(t._d).startOf("date")._d.getTime();console.log(n-a),e.stateUpdate({groupInterval:n-a})}}})]);var c;return c=r.map(function(t){return i.a.createElement(B,{reportArray:e.state.inspectionRec,key:t.name+"_",targetMeasure:t,xAxisRange:e.state.displayRange,groupInterval:e.state.groupInterval})}),i.a.createElement("div",{className:"HXF"},i.a.createElement("div",{className:"overlayCon s overlayCon width12 HXF"},i.a.createElement("div",{className:"s height12"},i.a.createElement(U,{key:"RP",defaultValue:this.state.dateRange,onChange:function(t){return e.stateUpdate({dateRange:t})}}),i.a.createElement(O.a,{type:"primary",icon:"search",disabled:!t||!o,onClick:function(){(function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,i=C+"query/inspection?";return i+="tStart="+t.toString()+"&tEnd="+n.toString()+"&",i+="limit="+a+"&page=1&",i+="subFeatureDefSha1="+e+"&",i+="projection="+JSON.stringify({_id:0,"InspectionData.time_ms":1,"InspectionData.judgeReports.id":1,"InspectionData.judgeReports.value":1,"InspectionData.judgeReports.status":1}),i+="",new Promise(function(e,t){w()(i,function(n,a){null===n?e(a):t(n),console.log(n,a)})})})(a,n[0],n[1],1e7).then(function(t){console.log(t);var n=t.map(function(e){return e.InspectionData[0]});n.sort(function(e,t){return e.time_ms-t.time_ms}),e.stateUpdate({inspectionRec:n})}).catch(function(e){console.log(e)})}}),i.a.createElement(O.a,{type:"primary",icon:"download",disabled:!t||!o||0===this.state.inspectionRec.length,onClick:function(){}})),s,c,i.a.createElement("div",{key:"k1",className:"s overlay scroll MenuAnim HXA",style:{top:"0px",width:"100px"}},[])))}}]),t}(i.a.Component),G=n(188),K=n.n(G),V=n(83);V.a.WORKER_PATH="./qr-scanner-worker.min.js";var $=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.QR_WebCam;V.a.hasCamera().then(function(e){return console.log(e)}),this.qrScanner=new V.a(e,this.props.onScanResult),this.qrScanner.start(),console.log(this.qrScanner)}},{key:"componentWillUnmount",value:function(){this.qrScanner.destroy(),this.qrScanner=void 0}},{key:"render",value:function(){return i.a.createElement("video",{ref:"QR_WebCam",className:this.props.className,style:this.props.style,muted:!0,playsInline:!0})}}]),t}(i.a.Component);function Y(e){var t=e?e.split("?")[1]:window.location.search.slice(1),n={};if(t)for(var a=(t=t.split("#")[0]).split("&"),i=0;i<a.length;i++){var o=a[i].split("="),r=o[0],s="undefined"===typeof o[1]||o[1];if((r=r.toLowerCase()).match(/\[(\d+)?\]$/)){var c=r.replace(/\[(\d+)?\]/,"");if(n[c]||(n[c]=[]),r.match(/\[\d+\]$/)){var l=/\[(\d+)\]/.exec(r)[1];n[c][l]=s}else n[c].push(s)}else n[r]?n[r]&&"string"===typeof n[r]?(n[r]=[n[r]],n[r].push(s)):n[r].push(s):n[r]=s}return n}var Z=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e)),console.log(Y()),n.state={DefFileInfo:void 0,allowQRScan:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Y();void 0!==e.v&&void 0!==e.name&&void 0!==e.hash?this.onQRScanResult(JSON.stringify(e)):this.setState(Object(s.a)({},this.state,{allowQRScan:!0}))}},{key:"onDefFileInfoUpdate",value:function(e){var t=this;this.setState(Object(s.a)({},this.state,{DefFileInfo:e})),console.log(e),function(e,t,n){var a=C+"query/deffile?";return a+="limit=1000",void 0!==e&&(a+="&name="+e),void 0!==t&&(a+="&featureSet_sha1="+t),a+=void 0!==n?"&projection="+JSON.stringify(n):"&projection={}",new Promise(function(e,t){w()(a,function(n,a){null===n?e(a):t(n),console.log(n,a)})})}(e.name,e.hash).then(function(e){e.length>0&&t.setState(Object(s.a)({},t.state,{defFile:e[0].DefineFile})),console.log(e)})}},{key:"onQRScanResult",value:function(e){try{var t=JSON.parse(e);("string"===typeof(n=t.v)||n instanceof String)&&(t.v=Number(t.v)),0===t.v&&void 0!==t.hash&&t.hash.length>5&&(console.log(window.location.protocol),"https:"===window.location.protocol?(window.location.href="http:"+window.location.href.substring(window.location.protocol.length).split("?")[0]+"?v="+t.v+"&hash="+t.hash+"&name="+t.name,console.log(window.location.href),this.setState(Object(s.a)({},this.state,{allowQRScan:!1}))):this.onDefFileInfoUpdate(t))}catch(a){alert(a)}var n}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(K.a,{title:null,visible:void 0===this.state.DefFileInfo,onCancel:this.props.onCancel,onOk:this.props.onOk},void 0===this.state.DefFileInfo&&this.state.allowQRScan?i.a.createElement($,{style:{width:"100%",height:"100%"},onScanResult:this.onQRScanResult.bind(this)}):null),void 0!==this.state.DefFileInfo?i.a.createElement(J,{DefFileHash:this.state.DefFileInfo.hash,DefFileName:this.state.DefFileInfo.name,defFile:this.state.defFile}):null)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[191,1,2]]]);
//# sourceMappingURL=main.09cf5fb0.chunk.js.map