window.onload = function() {
    document.querySelector('.abt_part_one').textContent = data.aboutMe_part1;
    document.querySelector('.abt_part_two').textContent = data.aboutMe_part2;
};

const overviewContainer = document.querySelector('.overview');
data.overview.forEach(item => {
     overviewContainer.innerHTML += `
            <div>
                <h2 class ='text-red-800 text-2xl  from-neutral-950 numberOverview'>${item.number}</h2>
                <p class ='text-gray-600 labelOverview'>${item.label.toLocaleUpperCase()}</p>
            </div>`
});