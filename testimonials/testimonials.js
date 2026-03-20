window.onload = function () {
    const studentsContainer = document.getElementById('students');

    const student = data.testimonials.filter(t => t.role === 'student');
    const stars = (rating) =>
        Array.from({ length: 5 }, (_, i) => `
       <svg class="star" viewBox="0 0 16 16" fill="${i < rating ? '#b91c1c' : '#e5e7eb'}">
            <path d="M8 1l1.85 3.74 4.13.6-2.99 2.91.71 4.11L8 10.4l-3.7 1.96.71-4.11L2.02 5.34l4.13-.6z"/>
        </svg>
    `).join('');

    const cardStudent = ({ author, description, rating, thumbnail }) =>
        `
        <div class="oneCard w-fit">
            <div class="flex items-center gap-4 ">
              <div class=" avatar">
                 <img src="${thumbnail}" alt="${author}"/>
              </div>
                <div>
                    <p class="text-sm font-medium text-gray-900 leading-snug font_body">${author}</p>
                    <p class="text-xs text-gray-400 mt-0.5 font_body">student</p>
                </div>
            </div>
            <div class="w-10 h-[0.1rem] bg-red-700 rounded mt-4 mb-3"></div>
            <p class="text-sm text-gray-500 leading-relaxed flex-1  font_body">${description}</p>
            <div class="flex gap-1 text-red-600">${stars(rating)}</div>
        </div>
        `
    studentsContainer.innerHTML = student.map(cardStudent).join('');


    const collaboratorContainer = document.getElementById('collaborator');

    const collaborator = data.testimonials.filter(n => n.role === 'collaborator');

    const cardCollaborator = ({ description, thumbnail, author }) => ` 
      <div class= "oneCardCollaborator ">
            <p class="text-md font_title italic leading-relaxed flex-1 border-b-2 pb-5 ">${description}</p>
         <div class="flex items-center gap-4 pt-6">
                <div class=" avatar">
                   <img src="${thumbnail}" alt="${author}"/> 
                 </div>
                <div>
                    <p class="text-sm font-medium text-gray-900 leading-snug font_body">${author}</p>
                    <p class=" text-gray-400 mt-0.5 text-xs font_body">COLLABORATOR</p>
                </div>
         </div>
     </div> 
    `
    collaboratorContainer.innerHTML = collaborator.map(cardCollaborator).join('');

    const customerContainer = this.document.getElementById('customer');

    const customer = data.testimonials.filter(b => b.role === 'customer');

    const starsCustomer = (rating) =>
        Array.from({ length: 5 }, (_, i) => `
       <svg class="star" viewBox="0 0 16 16" fill="${i < rating ? '#b91c1c' : '#e5e7eb'}">
            <path d="M8 1l1.85 3.74 4.13.6-2.99 2.91.71 4.11L8 10.4l-3.7 1.96.71-4.11L2.02 5.34l4.13-.6z"/>
        </svg>
    `).join('');

    const cardCustomer = ({ author, description, rating, thumbnail }) =>
        `
        <div class="oneCard w-fit">
           <div class="flex gap-1 text-red-600 mb-2">${starsCustomer(rating)}</div>
            <p class="text-sm text-gray-500 leading-relaxed flex-1 font_body mb-2">${description}</p>
            <div class="flex items-center gap-4 ">
              <div class=" avatar">
                 <img src="${thumbnail}" alt="${author}"/>
              </div>
                <div>
                    <p class="text-sm font-medium text-gray-900 leading-snug font_body">${author}</p>
                    <p class="text-xs text-gray-400 mt-0.5 font_body">CUSTOMER</p>
                </div>
            </div>
           
            
        </div>
        `
    customerContainer.innerHTML = customer.map(cardCustomer).join('');

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');


    });
}
