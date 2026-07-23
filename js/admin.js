if (localStorage.getItem("ha_admin_session") !== "active") {
  window.location.href = "./login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

let currentEditId = null;
let base64ImageString = "";

function initDashboard() {
  refreshDashboard();

  document.getElementById("search-input").addEventListener("input", filterAndRenderTable);
  document.getElementById("filter-category").addEventListener("change", filterAndRenderTable);
  document.getElementById("filter-status").addEventListener("change", filterAndRenderTable);

  document.getElementById("btn-add-article").addEventListener("click", () => openArticleModal());
  document.getElementById("modal-close-x").addEventListener("click", closeArticleModal);
  document.getElementById("btn-cancel-form").addEventListener("click", closeArticleModal);

  document.getElementById("article-form").addEventListener("submit", handleFormSubmit);

  const coverUrlInput = document.getElementById("form-cover-url");
  const fileInput = document.getElementById("form-cover-file");
  const previewImg = document.getElementById("preview-img");

  coverUrlInput.addEventListener("input", (e) => {
    if (e.target.value) {
      previewImg.src = e.target.value;
      base64ImageString = "";
      fileInput.value = "";
    } else {
      previewImg.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800";
    }
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        base64ImageString = event.target.result;
        previewImg.src = base64ImageString;
        coverUrlInput.value = "";
      };
      reader.readAsDataURL(file);
    }
  });
}

function refreshDashboard() {
  updateMetrics();

  populateCategorySelects();

  filterAndRenderTable();
}

function updateMetrics() {
  const articles = window.DataManager.getArticles(true);
  const total = articles.length;
  const published = articles.filter(a => a.status === "published").length;
  const drafts = articles.filter(a => a.status === "draft").length;

  document.getElementById("metric-total").innerText = total;
  document.getElementById("metric-published").innerText = published;
  document.getElementById("metric-draft").innerText = drafts;
}

function populateCategorySelects() {
  const categories = Object.keys(window.DataManager.getCategoriesInfo());

  const filterSelect = document.getElementById("filter-category");
  const formSelect = document.getElementById("form-category");

  filterSelect.innerHTML = `<option value="all">All Categories</option>`;
  formSelect.innerHTML = `<option value="" disabled selected>Select Category</option>`;

  categories.forEach(cat => {
    filterSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    formSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
}

function filterAndRenderTable() {
  const searchQuery = document.getElementById("search-input").value.toLowerCase();
  const categoryFilter = document.getElementById("filter-category").value;
  const statusFilter = document.getElementById("filter-status").value;

  let articles = window.DataManager.getArticles(true);

  if (searchQuery) {
    articles = articles.filter(art => 
      art.title.toLowerCase().includes(searchQuery) || 
      art.excerpt.toLowerCase().includes(searchQuery) ||
      art.author.toLowerCase().includes(searchQuery)
    );
  }

  if (categoryFilter !== "all") {
    articles = articles.filter(art => art.category === categoryFilter);
  }

  if (statusFilter !== "all") {
    articles = articles.filter(art => art.status === statusFilter);
  }

  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  if (articles.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No matching articles found.</td></tr>`;
    return;
  }

  articles.forEach(art => {
    const tr = document.createElement("tr");
    const formattedDate = new Date(art.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    tr.innerHTML = `
      <td><strong>${art.title}</strong></td>
      <td>${art.category}</td>
      <td>${formattedDate}</td>
      <td><span class="status-badge status-${art.status}">${art.status}</span></td>
      <td class="actions-cell">
        <button class="action-btn edit" onclick="editArticle('${art.id}')" title="Edit Article">
          ${window.getIconSvg("edit", "var(--ha-purple)")}
        </button>
        <button class="action-btn delete" onclick="deleteArticle('${art.id}')" title="Delete Article">
          ${window.getIconSvg("trash", "var(--ha-red)")}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openArticleModal(article = null) {
  const modal = document.getElementById("article-modal");
  const modalTitle = document.getElementById("modal-title");
  const form = document.getElementById("article-form");
  const previewImg = document.getElementById("preview-img");

  form.reset();
  base64ImageString = "";
  previewImg.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800";

  if (article) {
    currentEditId = article.id;
    modalTitle.innerText = "Edit Project Story / Article";

    document.getElementById("form-title").value = article.title;
    document.getElementById("form-category").value = article.category;
    document.getElementById("form-author").value = article.author;
    document.getElementById("form-date").value = article.date;
    document.getElementById("form-excerpt").value = article.excerpt;
    document.getElementById("form-content").value = article.content;
    document.getElementById("form-status").value = article.status;

    if (article.coverImage.startsWith("data:image")) {
      base64ImageString = article.coverImage;
      previewImg.src = base64ImageString;
    } else {
      document.getElementById("form-cover-url").value = article.coverImage;
      previewImg.src = article.coverImage;
    }
  } else {
    currentEditId = null;
    modalTitle.innerText = "Add New Project Story / Article";
    document.getElementById("form-date").value = new Date().toISOString().split("T")[0];
  }

  modal.classList.add("show");
}

function closeArticleModal() {
  const modal = document.getElementById("article-modal");
  modal.classList.remove("show");
}

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("form-title").value.trim();
  const category = document.getElementById("form-category").value;
  const author = document.getElementById("form-author").value.trim();
  const date = document.getElementById("form-date").value;
  const excerpt = document.getElementById("form-excerpt").value.trim();
  const content = document.getElementById("form-content").value.trim();
  const status = document.getElementById("form-status").value;

  const coverUrl = document.getElementById("form-cover-url").value.trim();
  let coverImage = coverUrl || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800";

  if (base64ImageString) {
    coverImage = base64ImageString;
  }

  const articleData = {
    title,
    category,
    author,
    date,
    excerpt,
    content,
    status,
    coverImage
  };

  if (currentEditId) {
    const success = window.DataManager.updateArticle(currentEditId, articleData);
    if (success) {
      window.showToast("Story updated successfully!", "success");
    } else {
      window.showToast("Failed to update story.", "error");
    }
  } else {
    window.DataManager.addArticle(articleData);
    window.showToast("New story published successfully!", "success");
  }

  closeArticleModal();
  refreshDashboard();
}

window.editArticle = function(id) {
  const article = window.DataManager.getArticleById(id);
  if (article) {
    openArticleModal(article);
  }
};

window.deleteArticle = function(id) {
  const article = window.DataManager.getArticleById(id);
  if (!article) return;

  const confirmation = confirm(`Are you sure you want to delete the story: "${article.title}"? This action cannot be undone.`);
  if (confirmation) {
    const success = window.DataManager.deleteArticle(id);
    if (success) {
      window.showToast("Story deleted successfully.", "success");
      refreshDashboard();
    } else {
      window.showToast("Failed to delete story.", "error");
    }
  }
};

window.adminLogout = function() {
  localStorage.removeItem("ha_admin_session");
  window.showToast("Logged out successfully.", "success");
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 1000);
};