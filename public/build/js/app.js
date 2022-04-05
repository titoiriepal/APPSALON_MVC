let paso=1;const pasoInicial=1,pasoFinal=3,cita={id:"",nombre:"",fecha:"",hora:"",servicios:[]};function iniciarApp(){mostrarSeccion(),tabs(),botonesPaginador(),paginaSiguiente(),paginaAnterior(),consultarAPI(),nombreCliente(),idCliente(),seleccionarFecha(),seleccionarHora(),mostrarResumen()}function mostrarSeccion(){const e=document.querySelector(".mostrar");e&&e.classList.remove("mostrar");const t="#paso-"+paso;document.querySelector(t).classList.add("mostrar");const o=document.querySelector(".actual");o&&o.classList.remove("actual");document.querySelector(`[data-paso="${paso}"]`).classList.add("actual")}function tabs(){document.querySelectorAll(".tabs button").forEach(e=>{e.addEventListener("click",(function(e){paso=parseInt(e.target.dataset.paso),mostrarSeccion(),botonesPaginador()}))})}function botonesPaginador(){const e=document.querySelector("#siguiente"),t=document.querySelector("#anterior");1===paso?(t.classList.add("ocultar"),e.classList.remove("ocultar")):3===paso?(t.classList.remove("ocultar"),e.classList.add("ocultar"),mostrarResumen()):(t.classList.remove("ocultar"),e.classList.remove("ocultar")),mostrarSeccion()}function paginaSiguiente(){document.querySelector("#siguiente").addEventListener("click",(function(){paso>=3||(paso++,botonesPaginador())}))}function paginaAnterior(){document.querySelector("#anterior").addEventListener("click",(function(){paso<=1||(paso--,botonesPaginador())}))}async function consultarAPI(){try{const e="http://localhost:3000/api/servicios",t=await fetch(e);mostrarServicios(await t.json())}catch(e){console.log(e)}}function mostrarServicios(e){e.forEach(e=>{const{id:t,nombre:o,precio:a}=e,n=document.createElement("P");n.classList.add("nombre-servicio"),n.textContent=o;const c=document.createElement("P");c.classList.add("precio-servicio"),c.textContent=a+" €";const r=document.createElement("DIV");r.classList.add("servicio"),r.dataset.idServicio=t,r.onclick=function(){seleccionarServicio(e)},r.appendChild(n),r.appendChild(c),document.querySelector("#servicios").appendChild(r)})}function seleccionarServicio(e){const{id:t}=e,{servicios:o}=cita,a=document.querySelector(`[data-id-servicio="${t}"]`);o.some(e=>e.id===t)?(cita.servicios=o.filter(e=>e.id!==t),a.classList.remove("seleccionado")):(cita.servicios=[...o,e],a.classList.add("seleccionado"))}function nombreCliente(){cita.nombre=document.querySelector("#nombre").value}function idCliente(){cita.id=document.querySelector("#id").value}function seleccionarFecha(){document.querySelector("#fecha").addEventListener("input",(function(e){const t=new Date(e.target.value).getUTCDay();[6,0].includes(t)?(e.target.value="",mostrarAlerta("Fines de semana no permitidos","error",".formulario")):cita.fecha=e.target.value}))}function seleccionarHora(){document.querySelector("#hora").addEventListener("input",(function(e){const t=e.target.value,o=t.split(":")[0];o<9||o>=20||o>=13&&o<17?(e.target.value="",mostrarAlerta("Nuestro horario es de 9:00 a 13:00 y de 17:00 a 20:00","error",".formulario")):cita.hora=t}))}function mostrarAlerta(e,t,o,a=!0){const n=document.querySelector(".alerta");n&&n.remove();const c=document.createElement("DIV");c.textContent=e,c.classList.add("alerta"),c.classList.add(t);document.querySelector(o).appendChild(c),a&&setTimeout(()=>{c.remove()},3e3)}function mostrarResumen(){const e=document.querySelector(".contenido-resumen");for(;e.firstChild;)e.removeChild(e.firstChild);if(Object.values(cita).includes("")||0===cita.servicios.length)return void mostrarAlerta("Faltan datos o servicios","error",".contenido-resumen",!1);const{nombre:t,fecha:o,hora:a,servicios:n}=cita,c=document.createElement("P");c.innerHTML="<span>Nombre: </span> "+t;const r=new Date(o),i=r.getMonth(),s=r.getDate(),d=r.getFullYear(),l=new Date(Date.UTC(d,i,s)).toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),u=document.createElement("P");u.innerHTML="<span>Fecha: </span> "+l;const m=document.createElement("P");m.innerHTML=`<span>Hora: </span> ${a} Horas`;const p=document.createElement("H2");p.textContent="RESUMEN DE TU CITA",e.appendChild(p),e.appendChild(c),e.appendChild(u),e.appendChild(m);let v=0;const h=document.createElement("H3");h.textContent="Resumen de Servicios",e.appendChild(h),n.forEach(t=>{const{id:o,precio:a,nombre:n}=t,c=document.createElement("DIV");c.classList.add("contenedor-servicio");const r=document.createElement("P");r.innerHTML=`${n} <br><br><span>Precio: </span> ${a} €`,c.appendChild(r),e.appendChild(c),v+=parseInt(t.precio)});const f=document.createElement("P");f.innerHTML=`<span>Precio total: </span> ${v} €`,e.appendChild(f);const S=document.createElement("BUTTON");S.classList.add("boton"),S.textContent="Reservar Cita",S.onclick=reservarCita,e.appendChild(S)}async function reservarCita(){const{id:e,fecha:t,hora:o,servicios:a}=cita,n=a.map(e=>e.id),c=new FormData;c.append("idusuario",e),c.append("fecha",t),c.append("hora",o),c.append("servicios",n);try{const e="http://localhost:3000/api/citas",t=await fetch(e,{method:"POST",body:c}),o=await t.json();console.log(o.resultado),!0===o.resultado&&Swal.fire({icon:"success",title:"Cita Creada",text:"Tu cita fue creada correctamente"}).then(()=>{window.location.reload()})}catch{Swal.fire({icon:"error",title:"ERROR",text:"No se pudo crear tu cita"}).then(()=>{window.location.reload()})}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));