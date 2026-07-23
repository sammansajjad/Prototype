const CATEGORY_COLORS = {
  "Emergency Relief": "#E10032",
  "Water & Sanitation": "#64B4E6",
  "Education": "#FAD241",
  "Health & Medical": "#009B78",
  "Child Welfare & Orphans": "#F096C8",
  "Livelihoods & Food Security": "#C8D700"
};

const CATEGORIES_INFO = {
  "Emergency Relief": {
    color: "#E10032",
    icon: "emergency",
    description: "Responding swiftly to floods, earthquakes, and winter crises in Pakistan with life-saving aid."
  },
  "Water & Sanitation": {
    color: "#64B4E6",
    icon: "water",
    description: "Building solar water wells, hand pumps, and hygiene stations in arid regions of Balochistan and Sindh."
  },
  "Education": {
    color: "#FAD241",
    icon: "education",
    description: "Supporting primary schools, girls' education, and vocational scholarships across KPK and Punjab."
  },
  "Health & Medical": {
    color: "#009B78",
    icon: "health",
    description: "Running mobile medical camps, supporting local clinics, and providing maternal healthcare in remote villages."
  },
  "Child Welfare & Orphans": {
    color: "#F096C8",
    icon: "orphan",
    description: "Sponsoring vulnerable orphans, providing education, food, and emotional support to secure their future."
  },
  "Livelihoods & Food Security": {
    color: "#C8D700",
    icon: "livelihood",
    description: "Empowering widows, providing agricultural training, livestock, and distributing essential food packs."
  }
};

const SEED_ARTICLES = [
  {
    id: "art-1",
    title: "Balochistan Water Crisis: Installing Solar-Powered Wells",
    category: "Water & Sanitation",
    author: "Zainab Malik",
    date: "2026-07-15",
    coverImage: "https://images.unsplash.com/photo-1541913757956-49daaa43fa36?q=80&w=800",
    excerpt: "Discover how solar-powered water pumps are transforming daily life in the drought-prone regions of Lasbela, Balochistan.",
    content: "For generations, the residents of Lasbela district in Balochistan walked for hours under the scorching sun to fetch turbid, brackish water from seasonal streams. With the installation of our new solar-powered water filtration wells, over 500 families now have direct access to clean, potable water at their doorsteps.\n\nThis project not only provides clean drinking water but also powers simple drip irrigation systems, allowing locals to cultivate kitchen gardens and grow their own vegetables. The incidence of waterborne diseases in the target villages has dropped by over 70% in just six months.\n\nOur team continues to install clean water systems, aiming to reach another 1,500 households in surrounding areas by the end of 2026. Your contributions are vital to expanding this life-saving infrastructure.",
    status: "published"
  },
  {
    id: "art-2",
    title: "Sindh Floods Recovery: Rebuilding Resilient Shelters",
    category: "Emergency Relief",
    author: "Tariq Mahmood",
    date: "2026-07-10",
    coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
    excerpt: "Following devastating seasonal rainfalls, Human Appeal Pakistan is constructing climate-resilient shelters for displaced families in Sindh.",
    content: "The monsoon season brought record rainfall, destroying thousands of mud houses across rural Sindh. In response, Human Appeal Pakistan launched the 'Resilient Shelters' project in Dadu district, creating flood-resistant brick homes elevated on raised concrete platforms.\n\nThese homes are designed using local materials, built to withstand earthquakes and high-velocity floodwaters. Alongside shelter, each family receives a sanitation kit and solar lanterns to ensure safety during power outages.\n\n'We lost everything last summer,' says Amina, a mother of four. 'Now, we sleep at night knowing we have a solid roof that won't wash away.' Over 120 shelters have been handed over, with plans to build 200 more before the upcoming winter.",
    status: "published"
  },
  {
    id: "art-3",
    title: "Empowering Rural Girls Through Education in KPK",
    category: "Education",
    author: "Sadia Khan",
    date: "2026-07-02",
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    excerpt: "A look inside the newly renovated primary school in Swat Valley, bringing smiles and quality education to over 250 young girls.",
    content: "Access to quality education remains a significant challenge for girls in remote districts of Khyber Pakhtunkhwa. To bridge this gap, Human Appeal has renovated a local school in Swat, introducing modern classrooms, clean drinking water, separate washrooms, and solar power.\n\nWe have also recruited local female teachers to ensure a culturally supportive environment. In addition to textbooks, student bags, and uniforms, the school offers computer literacy classes to prepare girls for the modern workforce.\n\nEnrollment has doubled since the renovation, proving that families are eager to educate their daughters when safe and proper facilities are available.",
    status: "published"
  },
  {
    id: "art-4",
    title: "Mobile Health Camps Reach Remote Hamlets in Punjab",
    category: "Health & Medical",
    author: "Dr. Farhan Qureshi",
    date: "2026-06-25",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    excerpt: "With no local clinics for miles, our mobile health vans bring essential checkups, maternal care, and medicine to Muzaffargarh.",
    content: "Rural communities in Muzaffargarh often lack basic healthcare access, forcing families to travel up to 50 kilometers for routine treatment. Human Appeal's Mobile Health Clinic vans visit five designated locations weekly, offering free consultations, lab testing, and essential medications.\n\nSpecialized care focuses on prenatal and postnatal health, helping decrease maternal and infant mortality rates in these high-risk zones. The clinics also distribute vitamins and nutrition packets to children suffering from acute malnutrition.\n\nOver the last three months, our medical teams have treated more than 8,500 patients, providing a lifeline to those who would otherwise go without basic healthcare.",
    status: "published"
  },
  {
    id: "art-5",
    title: "Sponsoring Orphans: Securing a Brighter Future in Lahore",
    category: "Child Welfare & Orphans",
    author: "Fatima Ali",
    date: "2026-06-18",
    coverImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800",
    excerpt: "Meet Bilal, an orphan whose life took a positive turn thanks to a generous sponsor through our Child Welfare program.",
    content: "When Bilal's father passed away, his mother struggled to put food on the table, let alone pay for his school fees. Bilal was at risk of dropping out and entering child labor. Today, through Human Appeal's Orphan Sponsorship Program, he is attending a private school and dreaming of becoming a software engineer.\n\nOur program provides a monthly stipend covering tuition, school materials, clothing, nutrition, and medical expenses. Regular home visits ensure sponsored children grow up in a safe, nurturing environment.\n\nCurrently, we support over 1,200 orphans in Pakistan, but hundreds more remain on our waiting list. A small monthly contribution can completely rewrite a child's story.",
    status: "published"
  },
  {
    id: "art-6",
    title: "Tharparkar Livelihoods: Livestock Distribution for Widows",
    category: "Livelihoods & Food Security",
    author: "Imran Raza",
    date: "2026-06-05",
    coverImage: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800",
    excerpt: "In the desert of Tharparkar, giving goats to female-headed households creates a sustainable source of food and income.",
    content: "Tharparkar suffers from recurring droughts and high rates of poverty, particularly affecting widows and female-headed households. Human Appeal's Livelihood Support project distributes dairy goats to these vulnerable families, establishing a sustainable cycle of self-sufficiency.\n\nGoats thrive in the semi-arid climate, providing milk for children's nutrition and extra income through the sale of kids and dairy products. Recipients also undergo a training course in animal healthcare and fodder management.\n\nTo date, 300 households have received livestock packages, enabling them to build financial independence and avoid falling into extreme poverty.",
    status: "published"
  },
  {
    id: "art-7",
    title: "Winter Emergency: Warm Kits Distributed in Gilgit-Baltistan",
    category: "Emergency Relief",
    author: "Tariq Mahmood",
    date: "2026-05-20",
    coverImage: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=800",
    excerpt: "As temperatures drop below freezing, Human Appeal teams deliver winter kits containing heavy blankets, jackets, and fuel.",
    content: "Winter in the mountainous regions of Gilgit-Baltistan is severe, with heavy snowfall blocking roads and isolating villages. Poor families struggle to heat their homes, leading to widespread respiratory issues.\n\nOur Winterization Drive distributed over 1,000 emergency kits to families in remote villages of Ghizer and Baltistan. Each kit includes high-thermal blankets, heavy winter jackets for children, waterproof groundsheets, coal, and warm socks.\n\n'This blanket keeps my children warm at night,' says Rahmat, a local resident. 'Without it, this winter would have been unbearable.' Your continued support helps us reach high-altitude villages before heavy snow blocks access routes.",
    status: "published"
  },
  {
    id: "art-8",
    title: "Hygiene and Sanitation Education in Muzaffargarh Schools",
    category: "Water & Sanitation",
    author: "Zainab Malik",
    date: "2026-05-12",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    excerpt: "Teaching children proper handwashing and personal hygiene helps protect entire communities from waterborne illness.",
    content: "Alongside building clean water infrastructure, Human Appeal Pakistan conducts hygiene awareness workshops in rural primary schools. Children are taught proper handwashing techniques, the importance of safe water storage, and general sanitation practices.\n\nEach participating school is equipped with a modern handwashing station and receives clean water storage coolers. Children are also given 'Hygiene Kits' containing soap, toothbrushes, toothpaste, and towels to take home to their families.\n\nBy teaching children, we reach parents, creating a community-wide defense against diseases like cholera and diarrhea.",
    status: "published"
  },
  {
    id: "art-9",
    title: "Vocational Training Centers: Sewing Machines for Widows",
    category: "Livelihoods & Food Security",
    author: "Sadia Khan",
    date: "2026-04-28",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    excerpt: "Establishing vocational training centers allows local women to learn sewing and tailoring, fostering financial freedom.",
    content: "In many conservative areas of Pakistan, opportunities for women to earn an independent income are limited. Human Appeal has established two vocational sewing centers in Rawalpindi district, offering free six-month certification courses in cutting, sewing, and embroidery.\n\nUpon graduation, each student is gifted a brand-new manual sewing machine and a starting fabrics kit to begin their home-based tailoring businesses.\n\n'Now I can pay my children's school fees and buy groceries myself,' says Shazia, a course graduate. 'This training gave me my dignity back.' We aim to open three additional centers across rural Punjab by next year.",
    status: "published"
  },
  {
    id: "art-10",
    title: "Draft Article: Future Clinic Plans in Khyber District",
    category: "Health & Medical",
    author: "Dr. Farhan Qureshi",
    date: "2026-07-18",
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800",
    excerpt: "Proposed development plan for a comprehensive maternity clinic in Khyber Agency, awaiting sponsor allocation.",
    content: "This is a draft project proposal for a maternity clinic in Landi Kotal, Khyber District. The clinic aims to serve a population of 25,000 residents, focusing on pre/post-natal care, pediatric support, and vaccination clinics.\n\nExpected milestones include site acquisition, building reconstruction, and staffing. This project is currently in the planning stage, with full development expected to start in late 2026 once funding goals are met.",
    status: "draft"
  }
];

function seedData() {
  if (!localStorage.getItem("ha_articles")) {
    localStorage.setItem("ha_articles", JSON.stringify(SEED_ARTICLES));
    console.log("Human Appeal Pakistan seed articles initialized in localStorage.");
  }
}

seedData();

const DataManager = {
  getArticles(includeDrafts = false) {
    const raw = localStorage.getItem("ha_articles");
    if (!raw) return [];
    let articles = JSON.parse(raw);
    if (!includeDrafts) {
      articles = articles.filter(a => a.status === "published");
    }
    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  getArticleById(id) {
    const articles = this.getArticles(true);
    return articles.find(a => a.id === id) || null;
  },

  addArticle(articleData) {
    const articles = this.getArticles(true);
    const newArticle = {
      id: "art-" + Date.now(),
      ...articleData,
      date: articleData.date || new Date().toISOString().split("T")[0]
    };
    articles.push(newArticle);
    localStorage.setItem("ha_articles", JSON.stringify(articles));
    return newArticle;
  },

  updateArticle(id, updatedData) {
    const articles = this.getArticles(true);
    const index = articles.findIndex(a => a.id === id);
    if (index === -1) return false;

    articles[index] = {
      ...articles[index],
      ...updatedData
    };
    localStorage.setItem("ha_articles", JSON.stringify(articles));
    return true;
  },

  deleteArticle(id) {
    let articles = this.getArticles(true);
    const originalLength = articles.length;
    articles = articles.filter(a => a.id !== id);
    if (articles.length === originalLength) return false;

    localStorage.setItem("ha_articles", JSON.stringify(articles));
    return true;
  },

  getArticlesByCategory(category, includeDrafts = false) {
    return this.getArticles(includeDrafts).filter(a => a.category === category);
  },

  getRecentArticles(limit = 3, includeDrafts = false) {
    return this.getArticles(includeDrafts).slice(0, limit);
  },

  getCategoryColors() {
    return CATEGORY_COLORS;
  },

  getCategoriesInfo() {
    return CATEGORIES_INFO;
  }
};
window.DataManager = DataManager;