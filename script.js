
const profiles = {
    'Kleyr Carmelina': 'Open Kleyr Carmelina Profile Information?',
    'Vince Juan': 'Open Vince Juan Profile Information?',
    'Cherilyn Lozano': 'Open Cherilyn Lozano Profile Information?',
    'Macky Alexis Publico': 'Open Macky Alexis Publico Profile Information?',
    'Andrea Medallon': 'Open Andrea Medallon Profile Information?'
};

const viewProfileBtn = document.getElementById('viewProfileBtn');
const nameSelect = document.getElementById('name');


viewProfileBtn.addEventListener('click', function() {
   
    const selectedName = nameSelect.value;

    
    if (selectedName) {
      
        const profileInfo = profiles[selectedName];

        alert(profileInfo);
    } else {

        alert('Please select a member.');
    }
});
