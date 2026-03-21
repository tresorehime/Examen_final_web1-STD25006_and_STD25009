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

}