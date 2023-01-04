"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Modrunner is a Discord bot for finding information and monitoring for updates of Minecraft projects hosted on popular hosting sites like CurseForge and Modrinth.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1672855590,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{},sidebar:"docs",next:{title:"Frequently Asked Questions",permalink:"/faq"}},l={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"Features",id:"features",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Comparison with other bots",id:"comparison-with-other-bots",level:2},{value:"Claptrap",id:"claptrap",level:3},{value:"CurseForge-Bot",id:"curseforge-bot",level:3},{value:"Staying Informed",id:"staying-informed",level:2},{value:"Something missing?",id:"something-missing",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Modrunner is a Discord bot for finding information and monitoring for updates of Minecraft projects hosted on popular hosting sites like CurseForge and Modrinth.\nYou can search for projects, and add projects to tracking to receive updates in Discord when these projects get updates."),(0,o.kt)("p",null,"If you can't find what you're looking for or you have a question, come talk to us in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fm88jhzEbt"},"Discord"),"."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Get started with Modrunner in just a few minutes."),(0,o.kt)("p",null,"Ensure you have a ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/login"},"Discord account")," and your own server that you have bot permissions in."),(0,o.kt)("p",null,"Then invite the bot to join your server by using\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=978413985722404924&permissions=2048&scope=bot%20applications.commands"},"this link")," and following the prompts."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"In-Discord searching"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Search supported platforms for modding projects and get information posted directly into Discord, without having to navigate between the website\nand Discord, and without having to copy-paste links all the time."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project update tracking"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For many people, Discord serves as a hub of activity for many of the communities they love. Why not incorporate notifications for project updates into them?"),(0,o.kt)("li",{parentName:"ul"},"Get notified that your favorite projects have been updated, with all the flexiblity and customizability that the Discord client offers."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customizable settings"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make Modrunner your own - customize settings like notification style and changelog length (so your notifications don't look like CVS receipts!)")))),(0,o.kt)("h2",{id:"design-principles"},"Design principles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to use")," Modrunner is designed to provide as painless a user experience as possible. To that end, Modrunner uses Discord's new slash command system, to make it easy to know command arguments and which ones are available to you. This improves usability,\naccessiblity and the general user experience with Modrunner."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Free and open source")," FOSS software is the backbone of companies and communities everywhere. We're committed to maintaining that Modrunner remain free for everyone to\nuse, and that the source remain accessible, so that anyone can contribute to the future of Modrunner.")),(0,o.kt)("h2",{id:"comparison-with-other-bots"},"Comparison with other bots"),(0,o.kt)("p",null,"Modrunner is of course, not the only bot that offers this kind of functionality. We've taken a look at some of the other available choices and have provided some\ninsights about each, in an effort to help make your choice easier."),(0,o.kt)("p",null,"If you know of any other bots that should be on this list, come let us know in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fm88jhzEbt"},"Discord"),"!"),(0,o.kt)("h3",{id:"claptrap"},"Claptrap"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://claptrapbot.me/"},"Claptrap")," by HypherionSA is likely the closest comparison in terms of functionality. Like Modrunner, it features CurseForge and Modrinth\nsupport, but also includes support for ",(0,o.kt)("a",{parentName:"p",href:"https://atlauncher.com/"},"ATLauncher")," projects, ",(0,o.kt)("a",{parentName:"p",href:"https://www.minecraft.net/"},"Minecraft")," releases,\n",(0,o.kt)("a",{parentName:"p",href:"https://files.minecraftforge.net"},"Forge")," releases, ",(0,o.kt)("a",{parentName:"p",href:"https://fabricmc.net/"},"Fabric")," releases, ",(0,o.kt)("a",{parentName:"p",href:"https://quiltmc.org/"},"Quilt")," releases, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),"\nreleases, and ",(0,o.kt)("a",{parentName:"p",href:"https://www.feed-the-beast.com/"},"Feed the Beast")," projects. Overall, Claptrap is much more focused on supporting a purely Minecraft-focused community\nthan Modrunner and is a fine alternative."),(0,o.kt)("p",null,"Claptrap also features a web dashboard to help server administrators manage their tracked projects, as well as Minecraft crash report parsing."),(0,o.kt)("h3",{id:"curseforge-bot"},"CurseForge-Bot"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ErdbeerbaerLP/Curseforge-Bot"},"CurseForge-Bot")," by ErdbeerbaerLP is another bot that offers similar tracking functionality, though only for\nCurseForge Minecraft projects. Additionally, the bot requires self-hosting, which may be overly complicated and expensive for beginners."),(0,o.kt)("h2",{id:"staying-informed"},"Staying Informed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/smcmo/modrunner-bot"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../blog"},"Blog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/fm88jhzEbt"},"Discord"))),(0,o.kt)("h2",{id:"something-missing"},"Something missing?"),(0,o.kt)("p",null,"We're always open to feedback and looking for ways to improve and add new functionality to Modrunner. Please let us know these things\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fm88jhzEbt"},"in our Discord"),". Chances are, we're already working on it as well. Check the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/users/smcmo/projects/9"},"development board")," to see what we're currently developing."))}u.isMDXComponent=!0}}]);