window.onload = function () {
    document.querySelector('.abt_part_one').textContent = data.aboutMe_part1;
    document.querySelector('.abt_part_two').textContent = data.aboutMe_part2;

  
};

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
            </div>`)
    });

