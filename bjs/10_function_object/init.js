
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#jobOutput').innerText = initPerson.job;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthday;

    document.querySelector('#retry').addEventListener('click', function () {
        location.reload();
    });
    document.querySelector('#clear').addEventListener('click', function () {
        document.querySelector('#firstNameOutput').innerText = '';
        document.querySelector('#secondNameOutput').innerText = '';
        document.querySelector('#surnameOutput').innerText = '';
        document.querySelector('#genderOutput').innerText = '';
        document.querySelector('#jobOutput').innerText = '';
        document.querySelector('#birthYearOutput').innerText = '';
    });    

};

