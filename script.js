document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".item-row"));
  const itemsList = document.getElementById("itemsList");
  const searchInput = document.getElementById("search");
  const submitLink = document.getElementById("submitLink");
  const submitLinkBottom = document.getElementById("submitLinkBottom");

  const DATA = {
    amazon: {
      title: "Amazon",
      sub: "dave@teare.me",
      username: "dave@teare.me",
      password: "hunter2",
      otp: "311 • 239",
      website: "https://amazon.ca",
      links: "Prime Video",
      notes: "Amazon Prime 🇨🇦. Use Sara's account for 🇦🇺."
    },
    apple: {
      title: "Apple ID",
      sub: "dave@teare.me",
      username: "dave@teare.me",
      password: "••••••",
      otp: "",
      website: "https://appleid.apple.com",
      links: "",
      notes: ""
    },
    disney: {
      title: "Disney+",
      sub: "dave@teare.me",
      username: "dave@teare.me",
      password: "••••••",
      otp: "",
      website: "https://disneyplus.com",
      links: "",
      notes: ""
    },
    twitter: {
      title: "Twitter",
      sub: "@teare",
      username: "@teare",
      password: "••••••",
      otp: "",
      website: "https://twitter.com",
      links: "",
      notes: ""
    },
    visa: {
      title: "Visa",
      sub: "•••• 1881",
      username: "Card",
      password: "••••",
      otp: "",
      website: "",
      links: "",
      notes: "Card ending 1881"
    }
  };

  // Populate detail pane with a given id
  function showDetail(id) {
    const data = DATA[id];
    if (!data) return;
    document.getElementById("detailTitle").textContent = data.title;
    document.getElementById("field-username").textContent = data.username || "";
    document.getElementById("field-password").textContent = data.password || "";
    document.getElementById("field-otp").textContent = data.otp || "";
    const websiteEl = document.getElementById("field-website");
    if (data.website) {
      websiteEl.innerHTML = `<a href="${data.website}" target="_blank" rel="noopener">${data.website}</a>`;
    } else {
      websiteEl.textContent = "";
    }
    document.getElementById("field-links").textContent = data.links || "";
    document.getElementById("field-notes").textContent = data.notes || "";
    // set detail icon letter/appearance
    const activeItem = document.querySelector(".item-row.active .icon");
    const detailIcon = document.querySelector(".detail-icon");
    if (activeItem && detailIcon) {
      detailIcon.innerHTML = activeItem.innerText.trim().slice(0,1);
      // copy background for simple visual match
      const bg = getComputedStyle(activeItem.querySelector(".icon")).background;
      detailIcon.style.background = bg;
    }
  }

  // Wire up list selection
  items.forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".item-row").forEach(r => r.classList.remove("active"));
      item.classList.add("active");
      showDetail(item.dataset.id);
    });
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") item.click();
    });
  });

  // Default show first item
  const first = document.querySelector(".item-row.active");
  if (first) showDetail(first.dataset.id);

  // Search filter
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    items.forEach(i => {
      const name = i.querySelector(".meta .name").textContent.toLowerCase();
      const sub = i.querySelector(".meta .sub").textContent.toLowerCase();
      if (name.includes(q) || sub.includes(q)) {
        i.style.display = "";
      } else {
        i.style.display = "none";
      }
    });
  });

submitLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "https://example.com";
});

if (submitLinkBottom) {
  submitLinkBottom.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://example.com";
  });
}


  document.getElementById("newItem").addEventListener("click", () => {
    alert("Yeah I can't be bothered to make this work if I'm being honest.");
  });
});