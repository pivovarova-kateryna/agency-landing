// tabs

window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.nav'),
          tabs = tabsParent.querySelectorAll('.nav-link'),
          tabsContent = document.querySelectorAll('.product-block img');


    function showTabContent(className) {    
        tabsContent.forEach(item => {
            item.classList.toggle('hide', !item.classList.contains(className));
        });
    }

    tabsParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if(target && target.classList.contains('nav-link') && !target.classList.contains('active')) {
            const tab = target.dataset.tab;
            tabsParent.querySelector('.active').classList.remove('active');
            target.classList.add('active');
            showTabContent(tab);
        }
    })
});