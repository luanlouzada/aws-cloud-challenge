var translations = {
    'en': {
        'name': 'Luan Louzada',
        'role': 'Cloud Solutions Architect',
        'phone': '(55) 38 99800-1302',
        'location': 'Montes Claros - MG',
        'email': 'luanlouzadadev@gmail.com',
        'linkedin': '<a href="https://www.linkedin.com/in/luanlouzada" target="_blank">Luan Louzada | LinkedIn</a>',
        'education-title': 'EDUCATION',
        'highschool': 'High School Completed',
        'university': 'UNIVERSITY',
        'cs-degree': 'Computer Science – 2023 – 2027<br>Estácio',
        'economics-degree': 'Economics – 2023 – 2027<br>Estácio',
        'keyskills-title': 'KEY SKILLS',
        'skill-python': 'Python - Intermediate',
        'skill-bash': 'Bash - Intermediate',
        'skill-linux': 'Linux Knowledge - Intermediate',
        'skill-networks': 'Networking Knowledge – Intermediate',
        'skill-htmlcss': 'Html and Css Advanced',
        'additionalskills-title': 'ADDITIONAL SKILLS',
        'skill-english': 'English B1',
        'skill-communicative': 'Communicative',
        'skill-fastlearning': 'Fast Learning',
        'skill-selftaught': 'Self-Taught',
        'experience-title': 'PROFESSIONAL EXPERIENCE',
        'exp1-title': 'Director, Co-Founder Partner<br>2018 - 2020<br>Montes Claros - MG',
        'exp1-desc': 'Opportunity is a marketing agency that provides services for the holding company of José Semenzato\'s franchises (Shark Tank), where I had the opportunity to manage a team of 30 employees for 2 years, from the Design team, Traffic Management, Customer Experience to administration.',
        'exp2-title': 'Managing Partner<br>2019-2022<br>Bocaiuva - MG',
        'exp2-desc': 'I was a partner of the company OdontoCompany located in the interior of Minas Gerais, a franchise specializing in Dentistry, where for 3 years I set up and managed the company from scratch.',
        'exp3-title': 'Cloud Solutions Architect<br>2023',
        'exp3-desc': 'I hold the AWS Solutions Architect Associate certificate',
        'visitor-text': 'Visitors',
    },
    'pt': {
        'name': 'Luan Louzada',
        'role': 'Arquiteto de Soluções Cloud',
        'phone': '(55) 38 99800-1302',
        'location': 'Montes Claros - MG',
        'email': 'luanlouzadadev@gmail.com',
        'linkedin': '<a href="https://www.linkedin.com/in/luanlouzada" target="_blank">Luan Louzada | LinkedIn</a>',
        'education-title': 'FORMAÇÃO',
        'highschool': 'Ensino Médio Completo',
        'university': 'UNIVERSIDADE',
        'cs-degree': 'Ciência da Computação – 2023 – 2027<br>Estácio',
        'economics-degree': 'Economia – 2023 – 2027<br>Estácio',
        'keyskills-title': 'HABILIDADES PRINCIPAIS',
        'skill-python': 'Python - Intermediário',
        'skill-bash': 'Bash - Intermediário',
        'skill-linux': 'Conhecimentos em Linux - Intermediário',
        'skill-networks': 'Conhecimentos em Redes – Intermediário',
        'skill-htmlcss': 'Html e Css Avançado',
        'additionalskills-title': 'HABILIDADES ADICIONAIS',
        'skill-english': 'Inglês B1',
        'skill-communicative': 'Comunicativo',
        'skill-fastlearning': 'Aprendizado Rápido',
        'skill-selftaught': 'Autodidata',
        'experience-title': 'EXPERIÊNCIA PROFISSIONAL',
        'exp1-title': 'Diretor, Sócio Fundador<br>2018 - 2020<br>Montes Claros - MG',
        'exp1-desc': 'Oportunidade é uma agência de marketing que presta serviços para a holding de franquias de José Semenzato (Shark Tank), onde tive a oportunidade de gerenciar uma equipe de 30 colaboradores por 2 anos, desde a equipe de Design, Gestão de Tráfego, Experiência do Cliente até a administração.',
        'exp2-title': 'Sócio Gerente<br>2019-2022<br>Bocaiuva - MG',
        'exp2-desc': 'Fui sócio da empresa OdontoCompany localizada no interior de Minas Gerais, uma franquia especializada em Odontologia, onde por 3 anos montei e gerenciei a empresa desde o início.',
        'exp3-title': 'Arquiteto de Soluções Cloud<br>2023',
        'exp3-desc': 'Possuo a certificação AWS Solutions Architect Associate',
        'visitor-text': 'Visitantes',
    }
};

function changeLanguage(language) {
    var elements = document.querySelectorAll('[id]');

    elements.forEach(function(element) {
        var id = element.getAttribute('id');
        var translation = translations[language][id];

        if (translation) {
            element.innerHTML = translation;
        }
    });
}

function downloadPdf() {
    var element = document.querySelector('.container');
    var opt = {
        margin: [0,0,0,-15],
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, width: 1040 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}
