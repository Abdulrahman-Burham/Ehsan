import{a as e}from"./axios.js";import{i as n}from"./selectAmountModule.js";const t=document.getElementById("maincontent"),o=document.getElementById("moreDetails"),a=document.getElementById("moreDetailsOrg"),i=document.querySelectorAll(".numberOfVisits"),r=document.querySelector(".main-amount"),s=document.getElementById("donateNow");document.addEventListener("DOMContentLoaded",(()=>{n(),r&&r.value&&r.value>0&&s&&s.classList.remove("disabled")}));const{caseId:d,initiativeType:c,caseUrl:l,fromEjar:m,orgId:u}=t.dataset;function f(){e.get(`/visit-count/${c}/${d}`).then((e=>{const n=e.data||0;var t;t=n,i.forEach((e=>{e.innerText=t}))})).catch((e=>{console.error("Failed to load visit count:",e)}))}document.addEventListener("DOMContentLoaded",(function(){f(),void(o&&e.post(l,{id:d}).then((e=>{o.innerHTML=e.data})).catch((e=>{console.error("Failed to load more information:",e),o.style.display="none"}))),m&&fetch(`/PartnerProfile/GetOrganizationBasicInfo?organizationId=${u}`,{method:"GET",headers:{Accept:"application/json"}}).then((e=>{if(!e.ok)throw new Error(`Request failed with status ${e.status}`);return e.json()})).then((e=>{const n=e.logo,t=`\n          <hr />\n          <h5 class="fs-18px mt-2">الجمعية الشريكة</h5>\n          <div class="align-items-center bg-neutral-s d-flex fs-14px justify-content-between min-h-72px mb-3 mt-3 px-3 py-2 rounded-3">\n            <div class="align-items-center d-flex">\n              <div class="bg-white p-1 rounded-circle">\n                <img loading="lazy"\n                     src="${n?`data:image/png;base64,${n}`:"/ehsan-ui/images/Default_org.svg"}"\n                     class="w-65px h-65px"\n                     alt="${e.name||"لا يوجد اسم"}"\n                />\n              </div>\n              <p class="fs-14px h6 ms-2 text-neutral-5">${e.name||""}</p>\n            </div>\n            <a class="text-decoration-none text-neutral-5"\n               href="/PartnerProfile?organizationId=${e.id||0}&c=false">\n              عرض التفاصيل\n            </a>\n          </div>\n          `;a.innerHTML=t})).catch((e=>{console.error("Error fetching organization info:",e)}))}));
//# sourceMappingURL=details.js.map
