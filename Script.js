// ================= SETTINGS (change only here) =================
const SHOP_PHONE = "917092660026"; // WhatsApp number with country code 91
const OPEN_HOUR = 9;               // Shop opens at 9 AM
const CLOSE_HOUR = 20;             // Shop closes at 8 PM (24 hour format)

// ================= SECURITY AND IT SOLUTIONS (from the logo) =================
const solutions = [
  { name: "CCTV Surveillance",      icon: "📹", text: "Cameras and recorders for home, shop and school." },
  { name: "Network Solutions",      icon: "🌐", text: "LAN, Wi-Fi and switch set-up." },
  { name: "Security Systems",       icon: "🛡️", text: "Complete security set-up for your place." },
  { name: "IT Solutions",           icon: "🖥️", text: "Computer, network and IT support." },
  { name: "Installation & Support", icon: "🔧", text: "Neat fitting and 24 x 7 support." }
];

// ================= CCTV BRANDS =================
const cctvBrands = [
  { name: "CP PLUS",   text: "CCTV cameras and DVR/NVR" },
  { name: "HIKVISION", text: "CCTV cameras and DVR/NVR" },
  {name: "@jhua",text:"CCTV cameras and DVR/NVR"},
  {name: "HI-FOCUS",text:"CCTV cameras and DVR/NVR"},
  {name: "UVISION ",text:"CCTV cameras and DVR/NVR"},
];

// ================= SERVICES =================
// type must match data-filter names in index.html
const services = [
  // ---- CCTV ----
  { name: "CCTV Camera Fitting", type: "cctv",   icon: "📹", text: "CP Plus and Hikvision dome,@jhua ,bullet, PTZ, IP and Wi-Fi cameras." },
  { name: "DVR / NVR Set-up",    type: "cctv",   icon: "🖥️", text: "Recorder, hard disk and mobile phone viewing set-up." },
  { name: "Night Vision Camera", type: "cctv",   icon: "🌙", text: "Clear video at night for shops, schools and homes." },
  // ---- Network / IT ----
  { name: "Network Solutions",   type: "it",     icon: "🌐", text: "LAN, Wi-Fi, switch and router set-up." },
  { name: "IT Solutions",        type: "it",     icon: "🖥️", text: "Computer and network support for shops and offices." },
  // ---- Dish / DTH ----
  { name: "New DTH Connection",  type: "dish",   icon: "📡", text: " Dish TV, d2h new connection." },
  { name: "DTH Recharge Help",   type: "dish",   icon: "💳", text: "Recharge and channel pack help for all DTH brands." },
  { name: "Set-Top Box",         type: "dish",   icon: "📦", text: "SD, HD and recording set-top boxes available." },
  { name: "Extra Connection",    type: "dish",   icon: "📺", text: "Second TV connection and multi-room set-up." },
  // ---- LED TV ----
  { name: "LED TV Sales",        type: "tv",     icon: "📺", text: "All brands LED TV at low price." },
  { name: "TV Wall Mounting",    type: "tv",     icon: "🏠", text: "Home and shop TV fitting with neat wiring." },
  // ---- Jio ----
  { name: "Jio Fiber Broadband", type: "jio",    icon: "🌐", text: "New Jio Fiber connection and router set-up." },
  { name: "Jio Set-Top Box",     type: "jio",    icon: "📦", text: "Jio Fiber set-top box and Jio TV set-up." },
  { name: "Jio SIM",             type: "jio",    icon: "📱", text: "New Jio SIM activation and porting help." },
  { name: "Jio Recharge (Prepaid & Postpaid)", text: "Quick Jio prepaid recharge and postpaid bill payment.", type: "jio", icon: "💳" },
{ name: "Jio MNP (Port to Jio)", text: "Switch your number to Jio with MNP. New SIM connection, prepaid or postpaid.", type: "jio", icon: "🔄" },
  // ---- Repair and refitting ----
  { name: "Refitting",           type: "repair", icon: "🔁", text: "Changing house? We remove and refit your dish, CCTV and TV." },
  { name: "Dish Repair",         type: "repair", icon: "🔧", text: "No signal, no picture and channel problems solved." },
  { name: "CCTV Repair",         type: "repair", icon: "🛠️", text: "Camera not working, DVR problem and cable fault." },
  { name: "Jio Fault Support",   type: "repair", icon: "📶", text: "Slow or no internet problem checked and fixed." },
  // ---- 24x7 care ----
  { name: "24 x 7 Customer Care", type: "care",  icon: "🕒", text: "Call any time for fault and support." }
];

// ================= PRODUCTS AND ACCESSORIES =================
// type: cable, cctv, dish, jio, remote, accessory
const products = [
  // ---- Cables ----
  { name: "RG-6 Coaxial Cable",      type: "cable",     icon: "🔌" },
  { name: "Orient Cables",           type: "cable",     icon: "🔌" },
  { name: "AV Cables",               type: "cable",     icon: "🔌" },
  { name: "HDMI Cables",             type: "cable",     icon: "🔌" },
  { name: "LAN / Ethernet Cables",   type: "cable",     icon: "🌐" },
  { name: "Thin Fiber-Optic Cables", type: "cable",     icon: "💡" },
  { name: "Cat 6 cable",      type: "cable", icon: "🌐" },
   { name: "3+1 CCTV cable",   type: "cable", icon: "📹" },
  // ---- CCTV ----
  { name: "CP Plus Cameras",         type: "cctv",      icon: "📹" },
  { name: "Hikvision Cameras",       type: "cctv",      icon: "📹" },
  { name: "@jhua",       type: "cctv",      icon: "📹" },
  { name: "DVR / NVR Recorders",     type: "cctv",      icon: "🖥️" },
  { name: "Hard Disk",     type: "cctv",      icon: " 🖥️ " },
  
  // ---- Dish / DTH ----
  { name: "Satellite Dish",          type: "dish",      icon: "📡" },
  { name: "LNB Units",               type: "dish",      icon: "📡" },
  { name: "SD Set-Top Box",          type: "dish",      icon: "📦" },
  { name: "HD Set-Top Box",          type: "dish",      icon: "📦" },
  { name: "Recording (PVR) Set-Top Box", type: "dish",  icon: "📦" },

  // ---- Jio ----
  { name: "Jio Fiber Broadband", desc: "New Jio Fiber connection and router set-up.", type: "jio", icon: "🌐" },
{ name: "Jio Set-Top Box", desc: "Jio Fiber set-top box and Jio TV set-up.", type: "jio", icon: "📦" },
{ name: "Jio WiFi Router / Gateway (ONT)", type: "jio", icon: "📶" },
{ name: "Jio SIM / MNP Recharges(Prepaid & Postpaid)", desc: "New Jio prepaid and postpaid SIM activation and porting help.", type: "jio", icon: "📱" },


  // ---- Remotes ----
  { name: "Dish TV Remote ", type: "remote",   icon: "🎛️" },
  { name: "Jio Fiber Remote",         type: "remote",   icon: "🎛️" },
  // ---- Accessories ----
  { name: "F-type Connector",        type: "accessory", icon: "🔩" },
  { name: "Wall Clips",              type: "accessory", icon: "📎" },
  { name: "Cable Nails",             type: "accessory", icon: "📌" },
  { name: "Power Adapters",          type: "accessory", icon: "🔋" },
  { name: "BNC connector with DC pin", type: "accessory", icon: "🔌" },
  { name: "Video balun", type: "accessory", icon: "🔁" }

];

// ================= JIO MATERIALS =================
const jioMaterials = [
  "Thin Fiber-Optic Cables",
  "Jio WiFi Router / Gateway (ONT)",
  "LAN / Ethernet Cables",
  "HDMI Cables",
  "Power Adapters",
  "Jio Set-Top Box and Remote",
  "Wall Clips and Cable Nails"
];

// ================= DTH BRANDS =================
const brands = [
{ name: "Dish TV",              icon: "📡" }
];

// ================= CAMERA TYPES =================
const cameraTypes = [
  "Dome Camera (indoor)",
  "Bullet Camera (outdoor)",
  "PTZ Camera (rotating)",
  "IP Camera (network)",
  "Wi-Fi Camera",
  "Solar Camera",
  "HD / Analog Camera",
  "Night Vision Camera",
  "Wireless / 4G SIM Camera",
  "DVR and NVR Recorder",
  "Dahua Camera"
];

// ================= DISH AND SET-TOP BOX TYPES =================
const dishTypes = [
  "DTH Dish Antenna and LNB",
  "SD Set-Top Box",
  "HD Set-Top Box",
  "Recording (PVR) Set-Top Box",
  "DD Free Dish Antenna",
  "Multi-TV / Extra Connection",
  "RG-6 Cable and F-type Connector"
];

// ================= PLACES WE SERVE =================
const places = [
  { name: "Homes",           icon: "🏠", text: "TV, dish, Wi-Fi, CCTV" },
  { name: "Shops",           icon: "🏪", text: "CCTV and internet" },
  { name: "Schools",         icon: "🏫", text: "Multi-camera security" },
  { name: "Colleges",        icon: "🎓", text: "Campus CCTV and network" },
  { name: "Hospitals",       icon: "🏥", text: "CCTV, TV and Wi-Fi" },
  { name: "Offices",         icon: "🏢", text: "Network and CCTV" },
  { name: "Hotels & Lodges", icon: "🏨", text: "Room TV and Wi-Fi" },
  { name: "Factories",       icon: "🏭", text: "Security cameras" },
  { name: "Other Places",    icon: "🌍", text: "Other places are also available, contact us" }
];

// ================= HELPER: make a WhatsApp link =================
function waLink(text) {
  return "https://wa.me/" + SHOP_PHONE + "?text=" + encodeURIComponent(text);
}

// ================= SHOW SECURITY AND IT SOLUTIONS =================
const solutionList = document.getElementById("solutionList");
solutions.forEach(function (s) {
  solutionList.innerHTML +=
    '<div class="card dark">' +
      '<div class="icon">' + s.icon + '</div>' +
      '<h3>' + s.name + '</h3>' +
      '<p>' + s.text + '</p>' +
      '<a class="enq" target="_blank" href="' + waLink("Hi DSK Agency, I need " + s.name) + '">Enquire →</a>' +
    '</div>';
});

// ================= SHOW CCTV BRANDS =================
const cctvBrandList = document.getElementById("cctvBrandList");
cctvBrands.forEach(function (b) {
  cctvBrandList.innerHTML +=
    '<div class="card brand">' +
      '<h3>' + b.name + '</h3>' +
      '<p>' + b.text + '</p>' +
      '<a class="enq" target="_blank" href="' + waLink("Hi DSK Agency, I need " + b.name + " camera") + '">Enquire →</a>' +
    '</div>';
});

// ================= SHOW SERVICES =================
const serviceList = document.getElementById("serviceList");

function showServices(filter) {
  serviceList.innerHTML = "";                       // clear old cards
  services.forEach(function (s) {                   // go through each service
    if (filter === "all" || s.type === filter) {    // show if "All" or type matches
      serviceList.innerHTML +=
        '<article class="card">' +
          '<div class="icon">' + s.icon + '</div>' +
          '<h3>' + s.name + '</h3>' +
          '<p>' + s.text + '</p>' +
          '<a class="enq" target="_blank" href="' + waLink("Hi DSK Agency, I need " + s.name) + '">Enquire →</a>' +
        '</article>';
    }
  });
}
showServices("all"); // show all when the page opens

// Service filter buttons
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (b) { b.classList.remove("active"); }); // remove blue from all
    btn.classList.add("active");                                           // clicked one turns blue
    showServices(btn.getAttribute("data-filter"));                         // show matching cards
  });
});

// ================= SHOW PRODUCTS =================
const productList = document.getElementById("productList");

function showProducts(filter) {
  productList.innerHTML = "";
  products.forEach(function (p) {
    if (filter === "all" || p.type === filter) {
      productList.innerHTML +=
        '<div class="card">' +
          '<div class="icon">' + p.icon + '</div>' +
          '<h3>' + p.name + '</h3>' +
          '<a class="enq" target="_blank" href="' + waLink("Hi DSK Agency, what is the price of " + p.name + "?") + '">Ask Price →</a>' +
        '</div>';
    }
  });
}
showProducts("all");

// Product filter buttons
const productButtons = document.querySelectorAll(".pfilter");
productButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    productButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    showProducts(btn.getAttribute("data-filter"));
  });
});

// ================= SHOW DTH BRANDS =================
const brandList = document.getElementById("brandList");
brands.forEach(function (b) {
  brandList.innerHTML +=
    '<div class="card">' +
      '<div class="icon">' + b.icon + '</div>' +
      '<h3>' + b.name + '</h3>' +
      '<a class="enq" target="_blank" href="' + waLink("Hi DSK Agency, I need " + b.name + " connection") + '">Enquire →</a>' +
    '</div>';
});

// ================= SHOW LISTS (camera, dish, Jio materials) =================
function fillList(id, items) {
  const list = document.getElementById(id);   // find the <ul>
  items.forEach(function (item) {
    list.innerHTML += "<li>" + item + "</li>"; // add one <li> per item
  });
}
fillList("cameraTypes", cameraTypes);
fillList("dishTypes", dishTypes);
fillList("jioMaterials", jioMaterials);

// ================= SHOW PLACES =================
const placeList = document.getElementById("placeList");
places.forEach(function (p) {
  placeList.innerHTML +=
    '<div class="card">' +
      '<div class="icon">' + p.icon + '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p>' + p.text + '</p>' +
    '</div>';
});

// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");              // open or close menu
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("show");            // close menu after clicking a link
  });
});

// ================= OPEN / CLOSED STATUS =================
function checkShopStatus() {
  const hour = new Date().getHours();         // current hour on the visitor's device
  const status = document.getElementById("openStatus");

  if (hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
    status.textContent = "🟢 Shop is Open now";
    status.className = "status open";
  } else {
    status.textContent = "🔴 Shop is Closed now, but 24 x 7 customer care is available";
    status.className = "status closed";
  }
}
checkShopStatus();

document.getElementById("hoursText").textContent = "9:00 AM - 8:00 PM (change to real timing)";

// // ================= ENQUIRY FORM -> WHATSAPP =================
// const form = document.getElementById("enquiryForm");
// const formError = document.getElementById("formError");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();                      // stop page reload
//   const shopphone="919344040239";
//   const name = document.getElementById("name").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const service = document.getElementById("service").value;
//   const place = document.getElementById("place").value;
//   const msg = document.getElementById("msg").value.trim();

//   if (name === "") {                           // name empty
//     formError.textContent = "Please enter your name.";
//     return;
//   }
//   if (phone.length !== 10 || isNaN(phone)) {   // must be 10 digits
//     formError.textContent = "Please enter a valid 10 digit mobile number.";
//     return;
//   }

//   formError.textContent = "";

//   const text =
//     "Hi DSK Agency,\nName: " + name +
//     "\nMobile: " + phone +
//     "\nNeed: " + service +
//     "\nPlace: " + place +
//     "\nMessage: " + (msg || "-");

//     // window.open("https://wa.me/" + shopphone + "?text=" + encodeURIComponent(text), "_blank");

//   // window.open(waLink(text), "_blank");    // open WhatsApp
//    window.location.href = "https://waLink/" + shopphone + "?text=" + encodeURIComponent(text);

//   form.reset();
// });


 // ================= ENQUIRY FORM -> WHATSAPP =================
  
const form = document.getElementById("enquiryForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const shopphone = "917092660026";

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const place = document.getElementById("place").value;
  const msg = document.getElementById("msg").value.trim();

  if (name === "") {
    formError.textContent = "Please enter your name.";
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    formError.textContent =
      "Please enter a valid 10 digit mobile number.";
    return;
  }

  formError.textContent = "";

  const text =
    "Hi DSK Agency! I want to make an enquiry.\n" +
    "Name: " + name + "\n" +
    "Mobile: " + phone + "\n" +
    "Need: " + service + "\n" +
    "Place: " + place + "\n" +
    "Message: " + (msg || "Not provided");

  const whatsappURL =
    "https://wa.me/" + shopphone +
    "?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
});



// ================= FOOTER YEAR =================
document.getElementById("year").textContent = new Date().getFullYear();

// ================= BACK TO TOP =================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none"; // show after 400px scroll
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== DSK FUTURISTIC MOTION PACK v2: reveal every page section =====
document.documentElement.classList.add('fx-ready');
(function initFuturisticMotion(){
  const sections = Array.from(document.querySelectorAll('body > section, main section, .footer, .care-band, .strip'));
  sections.forEach((section, index) => {
    if (!section.classList.contains('hero')) section.classList.add('fx-reveal');
    const groups = section.querySelectorAll('.grid, .grid.two, .grid.four, .grid.five, .steps, .foot-grid');
    groups.forEach(group => group.classList.add('fx-stagger'));
  });
  document.querySelectorAll('.hero .tag, .hero h1, .hero .tamil, .hero .motto, .hero .sub, .hero .care247, .hero .status, .hero .hero-btns, .hero .badges, .hero-logo').forEach((el,i)=>{
    el.classList.add('fx-reveal');
    el.style.transitionDelay = Math.min(i*75,525)+'ms';
  });
  document.querySelectorAll('.section h2, .section h3, .section p, .section ul, .section .map, .section form, .section .owner-box, .section .contact-box, .section .grid > *, .section .steps > *').forEach((el,i)=>{
    if (!el.classList.contains('fx-reveal')) el.classList.add('fx-reveal');
  });
  const revealItems = document.querySelectorAll('.fx-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('fx-visible'); obs.unobserve(entry.target); }
      });
    },{threshold:0.12,rootMargin:'0px 0px -35px 0px'});
    revealItems.forEach(el=>observer.observe(el));
  } else { revealItems.forEach(el=>el.classList.add('fx-visible')); }
  // Subtle 3D tilt on pointer devices only; no effect on touchscreens.
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll('.grid > *, .grid.two > *, .grid.four > *, .grid.five > *, .steps > *, .owner-box, .contact-box').forEach(card=>{
      card.addEventListener('pointermove', e=>{
        const r=card.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        card.style.transform=`perspective(850px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave',()=>{card.style.transform='';});
    });
  }
})();
