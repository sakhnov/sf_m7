const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Елена",
            "id_3": "Наталья",
            "id_4": "Ирина",
            "id_5": "Анастасия",
            "id_6": "Марина",
            "id_7": "Вера",
            "id_8": "Зоя",
            "id_9": "Екатерина",
            "id_10": "Валентина"
        }
    }`,
    jobFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Учительница",
            "id_3": "Врач",
            "id_4": "Адвокат",
            "id_5": "Маркетолог",
            "id_6": "Дизайнер",
            "id_7": "Психолог",
            "id_8": "Ведущая",
            "id_9": "Актриса",
            "id_10": "Бухгалтер"          
        }
    }`,
    jobMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Инженер",
            "id_3": "Архитектор",
            "id_4": "Программист",
            "id_5": "Полицейский",
            "id_6": "Бухгалтер",
            "id_7": "Юрист",
            "id_8": "Учитель",
            "id_9": "Водитель",
            "id_10": "Строитель"          
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    randomGender: function() {
        let gender = this.GENDER_MALE;
        if (this.randomIntNumber(1,0)) {
            gender =  this.GENDER_FEMALE;
        }
    
        return gender;
    },
    randomFirstName: function(gender) {
        if (gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSecondName: function(gender) {
        second = this.randomValue(this.firstNameMaleJson);
        if (gender == 'Мужчина') {
            if (second == 'Никита') return 'Никитич'; 
            if (second == 'Михаил') return 'Михайлович'; 
        
            if (second.slice(-1) == 'й') return second.slice(0, -1) + 'евич';
            if (second.slice(-1) == 'а') return second.slice(0, -1) + 'oвич';
            return second + 'ович';
        } else {
            if (second == 'Никита') return 'Никитична';
            if (second == 'Михаил') return 'Михайловна';

            if (second.slice(-1) == 'й') return second.slice(0, -1) + 'евна';
            if (second.slice(-1) == 'а') return second.slice(0, -1) + 'oвна';
            return second + 'овна';            
        }
    },    

     randomSurname: function(gender) {
        if (gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);    
        } else {
            return this.randomValue(this.surnameJson)+'a';
        }

    },
    randomBirthday: function() {
        const monthArr = new Map([
            ['1', 'января'],
            ['2', 'февраля'],
            ['3', 'марта'],
            ['4', 'апреля'],
            ['5', 'мая'],
            ['6', 'июня'],
            ['7', 'июля'],
            ['8', 'августа'],
            ['9', 'сентября'],
            ['10', 'октября'],
            ['11', 'ноября'],
            ['12', 'декабря']
          ]);
          
        let month = this.randomIntNumber(1,12);
        console.log(monthArr.get(month.toString()));        
        let day = 1;
        let year = this.randomIntNumber(1950,2023);
        let day30 = [4, 6, 9, 11];
        //let day31 = [1, 3, 5, 7, 8, 10, 12];
        if (month == 2) return this.randomIntNumber(1,28) + ' ' + monthArr.get(month.toString()) + ' ' + year;
        if (day30.indexOf(month) != -1) return this.randomIntNumber(1,30) + ' ' + monthArr.get(month.toString()) + ' ' + year;
        return this.randomIntNumber(1,31) + ' ' + monthArr.get(month.toString()) + ' ' + year;
        
    },
    randomJob: function(gender) {
        if (gender == 'Мужчина') {
            return this.randomValue(this.jobMaleJson);
        } else {
            return this.randomValue(this.jobFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.secondName = this.randomSecondName(this.person.gender);
        this.person.birthday = this.randomBirthday(this.person.gender);
        this.person.job = this.randomJob(this.person.gender);
        return this.person;
    }
};
