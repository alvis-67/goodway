(function () {
  const WA_URL = "https://wa.me/85291541431";
  const PHONE = "91541431";
  const PHONE_TEL = "+85291541431";
  const EMAIL = "goodway@gmail.com";

  const pages = [
    { href: "index.html", id: "home", label: "首頁" },
    { href: "services.html", id: "services", label: "服務" },
    { href: "process.html", id: "process", label: "流程" },
    { href: "cases.html", id: "cases", label: "案例" },
    { href: "about.html", id: "about", label: "關於我們" },
    { href: "faq.html", id: "faq", label: "常見問題" },
    { href: "contact.html", id: "contact", label: "聯絡我們" }
  ];

  const logo = `
    <svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="10" fill="#0A1B2E"/>
      <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="#C9A35A" stroke-width="2"/>
      <path d="M18 42V22h10.5c4.6 0 7.5 2.6 7.5 6.4 0 2.6-1.5 4.6-4 5.6 2.8.8 4.6 3 4.6 6 0 4.2-3.2 6-8.2 6H18zm6.2-11.6h3.6c2.2 0 3.5-1.1 3.5-2.8s-1.3-2.7-3.5-2.7h-3.6v5.5zm0 4.8v6.2h4.4c2.5 0 4-1.2 4-3.1s-1.5-3.1-4.1-3.1h-4.3z" fill="#F6F3EC"/>
      <rect x="42" y="38" width="8" height="4" fill="#E07A2F"/>
    </svg>`;

  function navLinks(active) {
    return pages.map(function (page) {
      const cls = page.id === active ? " active" : "";
      return '<a class="' + cls.trim() + '" href="' + page.href + '">' + page.label + "</a>";
    }).join("");
  }

  function renderChrome() {
    const active = document.body.getAttribute("data-page") || "home";
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

    if (header) {
      header.innerHTML = `
        <div class="header-top">
          <div class="container header-top-inner">
            <span>注册電業承辦商 REC No.: 020580</span>
            <span>
              <a href="tel:${PHONE_TEL}">電話 ${PHONE}</a>
              &nbsp;｜&nbsp;
              <a href="${WA_URL}?text=${encodeURIComponent("您好，我想查詢餐廳裝修／食肆牌照顧問服務。")}" target="_blank" rel="noopener">WhatsApp 即時了解</a>
            </span>
          </div>
        </div>
        <div class="container header-main">
          <a class="brand" href="index.html" aria-label="悅興行有限公司首頁">
            ${logo}
            <span>
              <span class="brand-name">悅興行有限公司</span>
              <span class="brand-tag">餐飲工程顧問｜由選址到開業</span>
            </span>
          </a>
          <nav class="nav" id="site-nav">${navLinks(active)}</nav>
          <div class="header-cta">
            <a class="btn btn-gold" href="contact.html">免費初步查詢</a>
          </div>
          <button class="menu-toggle" id="menu-toggle" aria-label="開啟選單" aria-expanded="false">☰</button>
        </div>`;
    }

    if (footer) {
      footer.innerHTML = `
        <div class="container">
          <div class="footer-grid">
            <div>
              <h3>悅興行有限公司</h3>
              <p>香港餐廳裝修、商舖裝修、食肆牌照顧問及工程統籌。協助餐飲業主由選址、圖則、機電到開業前驗收，一次過睇清楚。</p>
              <p>注册電業承辦商登記號碼／REC No.: 020580</p>
            </div>
            <div>
              <h3>服務</h3>
              <ul class="footer-links">
                <li><a href="services.html">餐廳裝修工程</a></li>
                <li><a href="services.html#license">食肆牌照顧問</a></li>
                <li><a href="services.html#survey">開店前場地評估</a></li>
                <li><a href="process.html">開餐廳流程</a></li>
                <li><a href="cases.html">成功案例</a></li>
              </ul>
            </div>
            <div>
              <h3>快速連結</h3>
              <ul class="footer-links">
                <li><a href="about.html">關於我們</a></li>
                <li><a href="faq.html">常見問題</a></li>
                <li><a href="contact.html">聯絡我們</a></li>
                <li><a href="landing.html">免費場地評估</a></li>
              </ul>
            </div>
            <div>
              <h3>聯絡</h3>
              <ul class="footer-links">
                <li><a href="tel:${PHONE_TEL}">${PHONE}</a></li>
                <li><a href="${WA_URL}" target="_blank" rel="noopener">WhatsApp ${PHONE}</a></li>
                <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
                <li>九龍新蒲崗景福街101號<br>啟德工廠大廈A座2樓 N室</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} 悅興行有限公司. 版權所有。</span>
            <span>本網站提供一般工程及牌照方向資訊，實際申請以政府部門最新規定為準。</span>
          </div>
        </div>`;
    }

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    document.querySelectorAll(".float-wa").forEach(function (el) {
      el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.5 2 2 6.3 2 11.7c0 2 .6 3.9 1.7 5.5L2 22l4.9-1.6c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.3 10-9.7S17.5 2 12 2zm5.8 13.8c-.2.7-1.3 1.2-1.8 1.3-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.7.8 2.3.8 2.4.1.2.1.3 0 .5-.1.2-.2.3-.3.5l-.5.6c-.2.2-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.1 2.5 1.5 2.9 1.6.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4.1.3 0 .8-.2 1.5z"/></svg>';
    });
  }

  function bindInquiryForms() {
    document.querySelectorAll("[data-inquiry-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const data = new FormData(form);
        const lines = [
          "您好，我想查詢悅興行餐廳裝修／食肆牌照顧問服務。",
          "姓名：" + (data.get("name") || ""),
          "電話：" + (data.get("phone") || ""),
          "WhatsApp：" + (data.get("whatsapp") || data.get("phone") || ""),
          "場地地址：" + (data.get("address") || ""),
          "餐飲類型：" + (data.get("type") || ""),
          "是否已租舖：" + (data.get("rented") || ""),
          "預計開業時間：" + (data.get("timeline") || ""),
          "查詢內容：" + (data.get("message") || "")
        ];
        window.open(WA_URL + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
      });
    });
  }

  renderChrome();
  bindInquiryForms();
})();
