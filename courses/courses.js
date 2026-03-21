window.onload = function () {

    const langMap = { en: 'EN', fr: 'FR', mg: 'MG' };

    function formatPrice(p) {
        return 'MGA ' + p.toLocaleString('fr-MG');
    }

    function renderCards(courses) {
        const grid = document.getElementById('courses_grid');
        document.getElementById('results_count').textContent = courses.length + ' COURSE' + (courses.length !== 1 ? 'S' : '') + ' FOUND';
        grid.innerHTML = courses.map(c => {
            const techs = c.technologies.map(t => `<span class="badgelang">${t}</span>`).join('');
            const langBadge = `<span class="badge">${langMap[c.language] || c.language.toUpperCase()}</span>`;
            return `
                <div class="course-card shadow-sm">
                    <div class="cover-wrapper">
                        <img class="cover " src="${c.thumbnail}" alt="${c.title}" loading="lazy"/>
                        <div class="absolute top-3 left-3 flex gap-2">
                            ${langBadge}
                            ${techs}
                        </div>
                        <span class="level-badge level-${c.level}">${c.level}</span>
                    </div>
                    <div class="card-body">
                        <div class="card-title">${c.title}</div>
                        <div class="card-price">${formatPrice(c.price)}</div>
                        <p class="card-desc">${c.description}</p>
                        <div class="card-actions">
                            <button class="btn-learn shadow-sm whitespace-nowrap"">Learn more</button>
                            <button class="btn-cart  whitespace-nowrap"><i class="fa-solid fa-cart-shopping mr-1"></i>Add to cart</button>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }
    renderCards(data.courses);

    let activeLang = "";

    const flags = {
        img_flag_eu: "en",
        img_flag_fr: "fr",
        img_flag_mg: "mg"
    };

    Object.entries(flags).forEach(([id, lang]) => {
        document.getElementById(id).addEventListener('click', () => {
            activeLang = activeLang === lang ? "" : lang;
            filterCourses();
        });
    });


    let activeTech = "";

    document.getElementById('filter_tech').addEventListener('change', e => {
        activeTech = e.target.value;
        filterCoursesTech();
    });

    const filterCoursesTech = () => {
        const filtered = data.courses.filter(c => {
            const matchTech = activeTech === "" || c.technologies.includes(activeTech);
            return matchTech;

        })
        renderCards(filtered);

    };

    let activeLevel = "";

    document.getElementById('filter_level').addEventListener('change', e => {
        activeLevel = e.target.value;
        filterCoursesLevel();
    });

    const filterCoursesLevel = () => {
        const filtered = data.courses.filter(c => {
            const matchLevel = activeLevel === "" || c.level === activeLevel;
            return matchLevel;

        })
        renderCards(filtered);

    };

    let activeMinPrice = 0;
    let activeMaxPrice = 300000;

    document.getElementById('min_range').addEventListener('input', e => {
        activeMinPrice = parseInt(e.target.value);
        document.getElementById('price_label').textContent =
            activeMinPrice.toLocaleString('fr-MG') + ' Ar – ' + activeMaxPrice.toLocaleString('fr-MG') + ' Ar';
        filterCourses();
    });

    document.getElementById('max_range').addEventListener('input', e => {
        activeMaxPrice = parseInt(e.target.value);
        document.getElementById('price_label').textContent =
            activeMinPrice.toLocaleString('fr-MG') + ' Ar – ' + activeMaxPrice.toLocaleString('fr-MG') + ' Ar';
        filterCourses();
    }); document.getElementById('min_range').addEventListener('input', e => {
        activeMinPrice = parseInt(e.target.value);
        document.getElementById('price_label').textContent =
            activeMinPrice.toLocaleString('fr-MG') + ' Ar – ' + activeMaxPrice.toLocaleString('fr-MG') + ' Ar';
        filterCourses();
    });

    document.getElementById('max_range').addEventListener('input', e => {
        activeMaxPrice = parseInt(e.target.value);
        document.getElementById('price_label').textContent =
            activeMinPrice.toLocaleString('fr-MG') + ' Ar – ' + activeMaxPrice.toLocaleString('fr-MG') + ' Ar';
        filterCourses();
    });

    function filterCourses() {
        const filtered = data.courses.filter(c => {
            const matchLang = activeLang === "" || c.language === activeLang;
            const matchPrice = c.price >= activeMinPrice && c.price <= activeMaxPrice;
            return matchLang && matchPrice;
        });
        renderCards(filtered);
    };

    document.getElementById('clear_filters').addEventListener('click', () => {
        activeLang = "";
        activeTech = "";
        activeLevel = "";
        activeMinPrice = 0;
        activeMaxPrice = 300000;

        document.getElementById('filter_tech').value = "";
        document.getElementById('filter_level').value = "";
        document.getElementById('min_range').value = 0;
        document.getElementById('max_range').value = 300000;
        document.getElementById('price_label').textContent = "0 Ar – 300 000 Ar";

        filterCourses();
        filterCoursesLevel();
        filterCoursesTech();

    });
}