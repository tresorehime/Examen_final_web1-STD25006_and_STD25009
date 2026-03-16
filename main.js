window.onload = function () {
    document.querySelector('.abt_part_one').textContent = data.aboutMe_part1;
    document.querySelector('.abt_part_two').textContent = data.aboutMe_part2;

    const overviewContainer = document.querySelector('.overview');
    data.overview.forEach(item => {
        overviewContainer.innerHTML += `
            <div>
                <h1 class ='text-red-800 text-2xl  from-neutral-950 numberOverview'>${item.number}</h1>
                <p class ='text-gray-600 labelOverview'>${item.label.toLocaleUpperCase()}</p>
            </div>`
    });


    const tagColors = {
        'Development': "bg-[#991b1b]",
        'Translation': "bg-[#1f2937]",
        'Research': "bg-[#4b5563]"
    };
    const learning = document.querySelector('.learning_courses')
    data.homeCourses.forEach(courses => {
        learning.insertAdjacentHTML('beforeend', `
            <div class="bg-white mt-[4rem] p-6 w-fit rounded-xl">
                <h4 class="px-3 py-1 rounded-3xl ${tagColors[courses.tag]} text-white w-fit text-sm h4_courses">
                    ${courses.tag}
                </h4>
                <p class="p_courses font-bold text-lg pt-3">${courses.title}</p>
                <div class="text-gray-500 flex items-center justify-between text-sm mt-9">
                    <span>${courses.mode}</span>
                    <span>${courses.duration}</span>
                </div>
            </div>`);


    });

  const expContainer = document.querySelector('.all_experiences');

const col1 = data.experiences.slice(0, 2);
const col2 = data.experiences.slice(2, 4);

const experiences = (exp, index) => `
    <div class="${index > 0 ? 'pt-8' : ''} group">
        <span class="year text-red-800 font-semibold">${exp.year.toUpperCase()}</span>
        <h1 class="role text-xl pt-2 pb-3 font-semibold">${exp.role}</h1>
        <span class="org text-gray-500 block text-sm exp_text">${exp.org.toUpperCase()}</span>
        <p class="desc pt-2 text-gray-700 text-sm exp_text">${exp.desc}</p>
    </div>
`;

expContainer.innerHTML = `
    <div class="exp_col border-l-2 pr-6">
        ${col1.map((exp, i) => experiences(exp, i)).join('')}
    </div>
    <div class="exp_col border-l-2 pr-6">
        ${col2.map((exp, i) => experiences(exp, i)).join('')}
    </div>
`;

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');


    });
};



