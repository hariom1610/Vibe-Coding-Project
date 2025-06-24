const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DvnwtMtO.js","assets/motion-CZoIXZjG.js","assets/vendor-DbAb9B2p.js","assets/router-YJJfgekV.js","assets/3DElements-B3-bzeUH.js","assets/icons-BhROqqTr.js","assets/About-3Ro7htum.js","assets/Skills-CgOM4HiN.js","assets/Achievements-Byle2ABt.js","assets/Projects-Djmzeb0Q.js","assets/Contact-BxQlEZEg.js"])))=>i.map(i=>d[i]);
import{j as e,m as d,A as S}from"./motion-CZoIXZjG.js";import{a as L,r as l}from"./vendor-DbAb9B2p.js";import{u as C,L as u,B as T,R as I,a as p}from"./router-YJJfgekV.js";import{C as v,X as R,M as _,a as g,b as A,H as P,A as y,L as O,G as H,I as D,F as z,D as V}from"./icons-BhROqqTr.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();var j,f=L;j=f.createRoot,f.hydrateRoot;const B="modulepreload",M=function(r){return"/"+r},w={},x=function(n,c,s){let t=Promise.resolve();if(c&&c.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));t=Promise.allSettled(c.map(m=>{if(m=M(m),m in w)return;w[m]=!0;const b=m.endsWith(".css"),N=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${N}`))return;const h=document.createElement("link");if(h.rel=b?"stylesheet":B,b||(h.as="script"),h.crossOrigin="",h.href=m,i&&h.setAttribute("nonce",i),document.head.appendChild(h),b)return new Promise((k,E)=>{h.addEventListener("load",k),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return t.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return n().catch(o)})},J=()=>{const[r,n]=l.useState(!1),[c,s]=l.useState(!1),t=C();l.useEffect(()=>{const i=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),l.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t.pathname]);const o=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Skills",path:"/skills"},{name:"Achievements",path:"/achievements"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}],a=()=>{n(!1),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)};return e.jsxs(d.nav,{initial:{y:-100},animate:{y:0},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${c?"bg-white/10 backdrop-blur-md border-b border-white/20":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs(u,{to:"/",onClick:a,className:"flex items-center space-x-2",children:[e.jsx(v,{className:"h-8 w-8 text-blue-400"}),e.jsx("span",{className:"text-white font-bold text-xl",children:"Hariom"})]}),e.jsx("div",{className:"hidden md:block",children:e.jsx("div",{className:"flex items-center space-x-8",children:o.map(i=>e.jsxs(u,{to:i.path,onClick:a,className:`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${t.pathname===i.path?"text-blue-400":"text-gray-300 hover:text-white"}`,children:[i.name,t.pathname===i.path&&e.jsx(d.div,{layoutId:"activeTab",className:"absolute inset-0 bg-white/10 rounded-lg border border-blue-400/30",initial:!1})]},i.name))})}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>n(!r),className:"text-gray-300 hover:text-white p-2",children:r?e.jsx(R,{className:"h-6 w-6"}):e.jsx(_,{className:"h-6 w-6"})})})]})}),r&&e.jsx(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"md:hidden bg-white/10 backdrop-blur-md border-b border-white/20",children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1",children:o.map(i=>e.jsx(u,{to:i.path,onClick:a,className:`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${t.pathname===i.path?"text-blue-400 bg-white/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:i.name},i.name))})})]})},U=()=>{const r=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Skills",path:"/skills"},{name:"Achievements",path:"/achievements"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}],n=[{name:"LinkedIn",icon:O,url:"https://linkedin.com/in/hariom-shivnani",color:"hover:text-blue-400"},{name:"GitHub",icon:H,url:"https://github.com/hariom1610",color:"hover:text-gray-300"},{name:"Instagram",icon:D,url:"https://instagram.com/hariomshivnani",color:"hover:text-pink-400"}],c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"relative bg-slate-900/50 backdrop-blur-md border-t border-white/10",children:[e.jsx("div",{className:"absolute inset-0 opacity-5",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"})}),e.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 py-16",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs(d.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},className:"lg:col-span-1",children:[e.jsxs(u,{to:"/",className:"flex items-center space-x-2 mb-4",children:[e.jsx(v,{className:"h-8 w-8 text-blue-400"}),e.jsx("span",{className:"text-white font-bold text-xl",children:"Hariom Shivnani"})]}),e.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Building the future, one line of code at a time. A passionate tech enthusiast and aspiring software developer from Jaipur."}),e.jsx("div",{className:"flex space-x-4",children:n.map(s=>e.jsx(d.a,{href:s.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,y:-2},className:`p-2 bg-white/10 rounded-lg text-gray-400 ${s.color} transition-all duration-200 hover:bg-white/20`,children:e.jsx(s.icon,{className:"h-5 w-5"})},s.name))})]}),e.jsxs(d.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"lg:col-span-1",children:[e.jsx("h3",{className:"text-white font-semibold text-lg mb-4",children:"Quick Links"}),e.jsx("ul",{className:"space-y-3",children:r.map(s=>e.jsx("li",{children:e.jsxs(u,{to:s.path,className:"text-gray-400 hover:text-white transition-colors duration-200 flex items-center group",children:[e.jsx("span",{className:"w-2 h-2 bg-blue-400/50 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"}),s.name]})},s.name))})]}),e.jsxs(d.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"lg:col-span-1",children:[e.jsx("h3",{className:"text-white font-semibold text-lg mb-4",children:"Contact Me"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center text-gray-400",children:[e.jsx(g,{className:"h-4 w-4 mr-3 text-blue-400"}),e.jsx("a",{href:"mailto:hariom.shivnani23@gmail.com",className:"hover:text-white transition-colors duration-200",children:"hariom.shivnani23@gmail.com"})]}),e.jsxs("div",{className:"flex items-center text-gray-400",children:[e.jsx(A,{className:"h-4 w-4 mr-3 text-purple-400"}),e.jsx("span",{children:"Jaipur, Rajasthan"})]}),e.jsxs("div",{className:"flex items-center text-gray-400",children:[e.jsx(v,{className:"h-4 w-4 mr-3 text-teal-400"}),e.jsx("span",{children:"JECRC Foundation"})]})]})]}),e.jsxs(d.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"lg:col-span-1",children:[e.jsx("h3",{className:"text-white font-semibold text-lg mb-4",children:"Let's Connect"}),e.jsx("p",{className:"text-gray-400 mb-4",children:"Interested in collaborating or have a project in mind? Let's build something amazing together!"}),e.jsxs(u,{to:"/contact",className:"inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105",children:["Get In Touch",e.jsx(g,{className:"ml-2 h-4 w-4"})]})]})]}),e.jsxs(d.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center",children:[e.jsxs("div",{className:"flex items-center text-gray-400 mb-4 md:mb-0",children:[e.jsx("span",{children:"© 2024 All rights reserved by Hariom Shivnani"}),e.jsx(P,{className:"h-4 w-4 mx-2 text-red-400"}),e.jsx("span",{children:"Made with passion"})]}),e.jsx(d.button,{onClick:c,whileHover:{scale:1.1,y:-2},whileTap:{scale:.9},className:"p-3 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200",children:e.jsx(y,{className:"h-5 w-5"})})]})]})]})},F=()=>{const r=()=>{const n=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hariom Shivnani - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: white;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
        }
        
        .name {
            font-size: 2.5em;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .title {
            font-size: 1.2em;
            color: #6b7280;
            margin-bottom: 15px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 0.9em;
            color: #4b5563;
        }
        
        .section {
            margin: 30px 0;
        }
        
        .section-title {
            font-size: 1.4em;
            font-weight: bold;
            color: #1e40af;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        
        .education-item, .achievement-item {
            margin-bottom: 15px;
        }
        
        .institution {
            font-weight: bold;
            color: #1f2937;
        }
        
        .degree {
            color: #4b5563;
            font-style: italic;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .skill-category {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .skill-category h4 {
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .skill-list {
            list-style: none;
        }
        
        .skill-list li {
            padding: 3px 0;
            color: #4b5563;
        }
        
        .skill-list li:before {
            content: "▪ ";
            color: #3b82f6;
            font-weight: bold;
        }
        
        .achievement-list {
            list-style: none;
        }
        
        .achievement-list li {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .achievement-list li:before {
            content: "🏆 ";
            margin-right: 8px;
        }
        
        .traits {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .trait {
            background: #dbeafe;
            color: #1e40af;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9em;
        }
        
        .motto {
            text-align: center;
            font-style: italic;
            font-size: 1.1em;
            color: #6366f1;
            background: #f0f9ff;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #3b82f6;
        }
        
        @media print {
            body { padding: 20px; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">HARIOM SHIVNANI</div>
        <div class="title">Student at JECRC | Tech and AI Enthusiast | Creative Thinker | Aspiring Software Developer</div>
        <div class="contact-info">
            <span>📧 hariom.shivnani23@gmail.com</span>
            <span>📍 Jaipur, Rajasthan</span>
            <span>💼 linkedin.com/in/hariom-shivnani</span>
            <span>🔗 github.com/hariom1610</span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="education-item">
            <div class="institution">JECRC Foundation, Jaipur</div>
            <div class="degree">B.Tech Computer Science Engineering (2nd Year)</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Programming Languages</h4>
                <ul class="skill-list">
                    <li>Python (85%)</li>
                    <li>C (80%)</li>
                    <li>JavaScript (60%)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Web Technologies</h4>
                <ul class="skill-list">
                    <li>HTML (75%)</li>
                    <li>CSS (80%)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Database</h4>
                <ul class="skill-list">
                    <li>MySQL (85%)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Soft Skills</h4>
                <ul class="skill-list">
                    <li>Communication</li>
                    <li>Leadership</li>
                    <li>Teamwork</li>
                    <li>Problem Solving</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">ACHIEVEMENTS</div>
        <ul class="achievement-list">
            <li><strong>Winner of multiple inter-house quiz competitions</strong> - Demonstrated strong knowledge and quick thinking abilities</li>
            <li><strong>Winner in various sports events</strong> - Showcased teamwork and competitive spirit</li>
            <li><strong>3rd place in CBSE national essay writing competition</strong> - Excellent writing and communication skills</li>
            <li><strong>Ex-member of JIC (JECRC Incubation Centre)</strong> - Contributed to innovation and entrepreneurship activities</li>
            <li><strong>Ex-intern at YIIC 2.0 by Scaler</strong> - Gained valuable industry experience and technical skills</li>
        </ul>
    </div>

    <div class="section">
        <div class="section-title">PERSONAL TRAITS</div>
        <div class="traits">
            <span class="trait">Creative</span>
            <span class="trait">Curious</span>
            <span class="trait">Disciplined</span>
            <span class="trait">Passionate</span>
            <span class="trait">Simple</span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">HOBBIES & INTERESTS</div>
        <ul class="skill-list">
            <li>Reading</li>
            <li>Playing Games</li>
            <li>Exploring</li>
            <li>Learning New Things</li>
        </ul>
    </div>

    <div class="section">
        <div class="motto">
            "Building the future, one line of code at a time."
        </div>
    </div>
</body>
</html>
    `,c=new Blob([n],{type:"text/html"}),s=window.URL.createObjectURL(c),t=document.createElement("a");t.href=s,t.download="Hariom_Shivnani_Resume.html",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(s),setTimeout(()=>{alert('Resume downloaded as HTML file! To convert to PDF: Open the downloaded file in your browser and use "Print > Save as PDF" for best results.')},500)};return e.jsxs(d.button,{onClick:r,whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},className:"fixed top-20 right-4 z-40 flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full shadow-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 backdrop-blur-md border border-white/20",children:[e.jsx(z,{className:"h-4 w-4 mr-2"}),e.jsx("span",{className:"hidden sm:inline",children:"Resume"}),e.jsx(V,{className:"h-4 w-4 ml-2"})]})},$=()=>{const[r,n]=l.useState(!1);l.useEffect(()=>{const s=()=>{window.pageYOffset>300?n(!0):n(!1)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx(S,{children:r&&e.jsx(d.button,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},whileHover:{scale:1.1,y:-2},whileTap:{scale:.9},onClick:c,className:"fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 backdrop-blur-md border border-white/20",style:{boxShadow:"0 8px 25px rgba(59, 130, 246, 0.3)"},children:e.jsx(y,{className:"h-5 w-5"})})})},q=l.lazy(()=>x(()=>import("./Home-DvnwtMtO.js"),__vite__mapDeps([0,1,2,3,4,5]))),G=l.lazy(()=>x(()=>import("./About-3Ro7htum.js"),__vite__mapDeps([6,1,2,4,5]))),Y=l.lazy(()=>x(()=>import("./Skills-CgOM4HiN.js"),__vite__mapDeps([7,1,2,4,5]))),W=l.lazy(()=>x(()=>import("./Achievements-Byle2ABt.js"),__vite__mapDeps([8,1,2,5]))),K=l.lazy(()=>x(()=>import("./Projects-Djmzeb0Q.js"),__vite__mapDeps([9,1,2,4,5]))),Q=l.lazy(()=>x(()=>import("./Contact-BxQlEZEg.js"),__vite__mapDeps([10,1,2,5]))),X=()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"}),e.jsx("p",{className:"text-white",children:"Loading..."})]})});function Z(){return e.jsx(T,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[e.jsx(J,{}),e.jsx(F,{}),e.jsx($,{}),e.jsx(l.Suspense,{fallback:e.jsx(X,{}),children:e.jsxs(I,{children:[e.jsx(p,{path:"/",element:e.jsx(q,{})}),e.jsx(p,{path:"/about",element:e.jsx(G,{})}),e.jsx(p,{path:"/skills",element:e.jsx(Y,{})}),e.jsx(p,{path:"/achievements",element:e.jsx(W,{})}),e.jsx(p,{path:"/projects",element:e.jsx(K,{})}),e.jsx(p,{path:"/contact",element:e.jsx(Q,{})})]})}),e.jsx(U,{})]})})}j(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Z,{})}));
