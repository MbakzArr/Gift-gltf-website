/* ============================================================
   GLTF shared script. EDIT THE SITE BLOCK BELOW.
   Every page reads from it.
   ============================================================ */
const SITE = {
  totalKm:   1783,                       // total distance of the ride
  kmCovered: 1373,                       // UPDATE as Gift moves
  lastSeen:  "Beaufort West",            // UPDATE with the latest town

  donateUrl:   "",                       // paste BackaBuddy or PayFast link
  whatsappNo:  "27787912679",            // country code + number, no + or spaces
  contactEmail:"gftmph@gmail.com"
};

(function () {
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

  var toggle = document.querySelector(".nav-toggle"), links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { links.classList.remove("open"); }); });
  }

  var donate = SITE.donateUrl && SITE.donateUrl.trim() ? SITE.donateUrl.trim() : "donate.html";
  document.querySelectorAll(".js-donate").forEach(function (a) {
    a.href = donate; if (/^https?:/i.test(donate)) { a.target = "_blank"; a.rel = "noopener"; }
  });

  var waUrl = "https://wa.me/" + SITE.whatsappNo + "?text=" +
    encodeURIComponent("Hi GLTF, I would like to help with the Cycling for a Change ride.");
  document.querySelectorAll(".js-whatsapp").forEach(function (a) { a.href = waUrl; a.target = "_blank"; a.rel = "noopener"; });

  document.querySelectorAll(".js-email").forEach(function (a) {
    a.href = "mailto:" + SITE.contactEmail + "?subject=" + encodeURIComponent("Sponsoring the GLTF Cycling for a Change ride");
  });

  document.querySelectorAll(".js-share").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var data = { title: "GLTF Cycling for a Change", text: "Gift is riding 1783 km for 250 bicycles. Follow and help.", url: location.href };
      if (navigator.share) { navigator.share(data).catch(function () {}); }
      else if (navigator.clipboard) { navigator.clipboard.writeText(location.href); var t = a.textContent; a.textContent = "Link copied"; setTimeout(function () { a.textContent = t; }, 2000); }
    });
  });

  var covered = Math.max(0, Math.min(SITE.kmCovered, SITE.totalKm));
  var left = SITE.totalKm - covered, pct = Math.round(covered / SITE.totalKm * 100);
  var set = function (id, v) { var el = document.getElementById(id); if (el) el.textContent = v; };
  set("kmCovered", covered.toLocaleString()); set("kmLeft", left.toLocaleString()); set("pct", pct + "%"); set("lastSeen", SITE.lastSeen);

  var done = document.querySelector(".road__done"), bike = document.querySelector(".road__bike");
  function fillRoad(){ if (done) done.style.width = pct + "%"; if (bike) bike.style.left = pct + "%"; }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) fillRoad();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        if (en.target.querySelector && en.target.querySelector(".road")) fillRoad();
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
