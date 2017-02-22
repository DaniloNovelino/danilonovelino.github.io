(function(angular) {

    'use strict';

    angular.module('ngResumeApp')
    .service('staticDataService', ['$http',
        function($http) {

            var strings = {
              name: "Danilo Novelino",
              title: "I'm Danilo Novelino.",
              subtitle: "Business Analyst/Consultant at Facilit Tecnologia",
              aboutMeEducation: "Postgraduate in Agile Project Management at CESAR College (CESAR - 2013) and BSc in Information Systems at University of Pernambuco (UPE - 2011).",
              aboutMeWork: "I've been working at Facilit Technology since 2012 and during that time I was involved in several projects using various technologies, detailed below.",
              address: "Recife, Pernambuco - Brazil",
              email: "danilonovelino@gmail.com",
              ufpe: {
                name: "CESAR College (CESAR)",
                role: "Postgraduate in Agile Project Management",
                period: "December 2013",
                description: "In-depth study of project management with emphasis on agile values and principles, requirements engineering, estimate and agile methodologies."
            },
            upe: {
                name: "University of Pernambuco (UPE)",
                role: "BSc in Information Systems",
                period: "December 2011",
                description: "The final paper of the course performs an analysis of a tool to assist in the management of projects that adop DSD(Distributed Software Development,) and SPL(Software Product Lines)."
            },
            
           /* umc: {
                name: "Upper Madison College",
                role: "ESL - English as a Second Language",
                period: "October 2012",
                description: "18 weeks of full-time Language Course, completing a 24 weeks exchange"
            }, */
            
            facilit: {
                name: "Facilit Tecnologia",
                role: "Business Analyst/Consultant",
                period: "May 2016 - Current",
                description: "Java Web Systems and Apps (Android, Windows 8/Phone) Development."
            },
            
           /* Analisar se é necessária a inclusão(ou modificaçãi) dessa entrada no Index */
            facilit2: {
                name: "Facilit Tecnologia",
                role: "Project Manager / Product Owner",
                period: "Jully 2012 - May 2015",
                description: "Java Web Systems and Apps (Android, Windows 8/Phone) Development."
            },
            skills_plp: "Management models, frameworks and tools:",
            skills_plp1: "Project Management, Scrum, Agile Methodologies and Strategic Planning (Very Good);",
            skills_plp2: "Business Analysis, Business Process, Balanced Scorecard and Software Engineering (Good);",
            skills_plp3: "Management 3.0, UML and ITIL  (Basic)",
            skills_experience: "Experience in:",
            skills_experience_array: [
            {
              text: "Management porjects using Scrum and some tools of anothers Agile Methodologies;"
          },
          {
              text: "Work with agile teams always seeking self-management;"
          },
          {
              text: "Management toll: MS Project, Redmine, Trello, Jira, Asana, ect;"
          },
          /*{
              text: "IDE: Eclipse, Android Studio, IntelliJ IDEA, Visual Studio, NetBeans;"
          },
          {
              text: "Frameworks, API’s, General Applications: AngularJS, jQuery, NodeJs, ExpressJS, Struts, Spring, Liferay Portal;"
          },
          {
              text: "CVS: SVN, Git"
          }*/
          ],
          skills_and_recommendations: "Skills and Recommendations",
          skills_section_description: "In this section all data were collected from my Linkedin's profile, and it's based on number of recomendations. We know it can not show all the reality, but I belive it can show a little bit more about what I've done based in recomendations",
          linkedin_skills: [
          {
              votes: 40,
              skill: "Scrum"
          },
          {
              votes: 40,
              skill: "Project Management"
          },
          {
              votes: 39,
              skill: "Agile Methodologies"
          },
          {
              votes: 27,
              skill: "Business Process"
          },
          {
              votes: 19,
              skill: "Software Engineering"
          },
          {
              votes: 22,
              skill: "UML"
          },
          {
              votes: 26,
              skill: "MS Project"
          },
          {
              votes: 16,
              skill: "PMBOK"
          },
          {
              votes: 8,
              skill: "Management 3.0"
          },
          ],
          last_updated: "Last updated at 21/02/2017",
          portfolios: [
          {
              closed: true,
              title: "Strategic Monitoring Panel of the Governo do Rio Grande do Norte",
              description: "Strategic Monitoring Panel of the Governo do Rio Grande do Norte, julho 2016",
              imgUrl: "images/portfolio/painel_rn.jpg",
              modalImgUrl: "images/portfolio/modals/painel_rn.jpg",
              url: "http://www.rn.gov.br/Conteudo.asp?TRAN=ITEM&TARG=131472&ACT&PAGE&PARM&LBL=NOT%C3%8DCIA",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "javascript"
              }
              ]
          },
          {
              closed: true,
              title: "Workshop In Companny about Scrum",
              description: "Workshop in company about Scrum for Amarante Hospitalidade through the Trampoline Academy. Excellent experience to talk about Scrum in a different context of Software!.",
              imgUrl: "images/portfolio/trampolim.jpg",
              modalImgUrl: "images/portfolio/modals/workshop.jpg",
              url: "",
              tags: [
              {
                  name: "C#"
              }
              ]
          },
          {
              closed: true,
              title: "Target App for Android",
              description: "This application aims to access the strategic planning of an institution that uses the Target management platform enables you to navigate so offline Objectives and Strategic Actions, with its detail: graphics, schedule, photos, indicators, maps, etc.",
              imgUrl: "images/portfolio/tgapp_android.png",
              modalImgUrl: "images/portfolio/modals/tgapp_android.jpg",
              url: "http://play.google.com/store/apps/details?id=br.com.facilit.target.app.android&hl=pt-br",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "android"
              }
              ]
          },
          {
              closed: true,
              title: "Na Onda",
              description: "Na Onda was designed to display information about the wave forecast for surfers scattered in the four corners of Brazil. All forecast information is provided by CPTEC / INPE",
              imgUrl: "images/portfolio/naonda.png",
              modalImgUrl: "images/portfolio/modals/naonda.jpg",
              url: "http://play.google.com/store/apps/details?id=com.victorlaerte.na_onda&hl=pt-br",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "android"
              }
              ]
          },
          {
              closed: true,
              title: "Strategic Monitoring Panel of the National Ministry of Integration for the Water for All Program - BR",
              description: "Strategic Monitoring Panel of the National Ministry of Integration for the Water for All Program, julho 2014",
              imgUrl: "images/portfolio/painel_apt.jpg",
              modalImgUrl: "images/portfolio/modals/painel_apt.jpg",
              url: "http://painel.mi.gov.br/web/agua-para-todos/login",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "javascript"
              }
              ]
          },
          {
              closed: true,
              title: "Strategic Monitoring Panel of the National Ministry of Integration for the Project Integrao do São di Francisco (PISF)- BR",
              description: "Strategic Monitoring Panel of the National Ministry of Integration for the Project Integrao do São di Francisco (PISF), abril 2014",
              imgUrl: "images/portfolio/painel_pisf.jpg",
              modalImgUrl: "images/portfolio/modals/painel_pisf.jpg",
              url: "http://pisf.mi.gov.br",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "javascript"
              }
              ]
          },
          {
              closed: true,
              title: "Strategic Monitoring Panel of the Governo de Pernambuco - BR",
              description: "Strategic Monitoring Panel of the Governo de Pernambuco, novembro 2013",
              imgUrl: "images/portfolio/painel_govpe.jpg",
              modalImgUrl: "images/portfolio/modals/painel_govpe.jpg",
              url: "http://www.paineldecontrole.pe.gov.br",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "javascript"
              }
              ]
          },
          {
              closed: true,
              title: "Strategic Monitoring Panel of the National Ministry of Integration - BR",
              description: "Strategic Monitoring Panel of the National Ministry of Integration, novembro 2013",
              imgUrl: "images/portfolio/painel_mi.jpg",
              modalImgUrl: "images/portfolio/modals/painel_mi.jpg",
              url: "http://painel.mi.gov.br",
              tags: [
              {
                  name: "java"
              },
              {
                  name: "javascript"
              }
              ]
          }
          ],
          quotes: [
          {
              quote: "“There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.”",
              author: "C.A.R. Hoare (British computer scientist, winner of the 1980 Turing Award)"
          },
          {
              quote: "“Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”",
              author: "Linus Torvalds (Finnish American, software engineer and hacker, principal force behind the development of the Linux kernel)"
          },
          {
              quote: "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
              author: "Martin Fowler (author and speaker on software development)"
          },
          {
              quote: "“Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?'”",
              author: "Steve McConnell (author of many software engineering books including “Code Complete”)"
          },
          {
              quote: "“One of my most productive days was throwing away 1000 lines of code.”",
              author: "Ken Thompson (computer scientist, early developer of UNIX OS)"
          }
          ],
          testimonials: [
          {
              testimonial: "Victor is smart, proactive has is a multitasker. Technically versatile, and also a team player. I'm sure he would be a great asset to any company.",
              author: "Carlos Brandão Jr (Scrum Master at Liferay, Inc)",
              info: "20 de outubro de 2016, Linkedin — Carlos supervised Victor Laerte at Facilit Tecnologia"
          },
          {
              testimonial: "Victor is one of the best problem-solvers I have ever worked with. During the time I've spent with him, he demonstrated expertise in his area and makes great decisions as Scrum Master, especially under pressure. I would gladly certify his skills in Software Development (Web and Mobile apps) from the many projects we've worked together.",
              author: "Maxwell Francisco (Web Developer at Urban Insight)",
              info: "18 de outubro de 2016, Linkedin — Maxwell worked directly with Victor Laerte at Facilit Technology"
          },
          {
              testimonial: "Victor is a great, experienced workmate and friend, talented and easy to work with. He has great technical skills and always willing to learn new technologies and practices (both academical and professional). He's willing to help the workmates and not afraid to work on challenging projects. He also gave great contributions to our internal processes in the company, such as adopt GitHub, Jenkins and other tools, which demonstrates interest to the company and its team, proactivity, out-of-the-box thinking and updated with best practices. He sure was a great addition to our team and will be anywhere he works. ",
              author: "Everson Veríssimo (Developer at Facilit Tecnologia)",
              info: "17 de outubro de 2016, Linkedin — Everson worked directly with Victor Laerte at Facilit Tecnologia"
          },
          {
              testimonial: "We worked together by few years and I can say that Victor is one of the best developers who have had the opportunity to collaborate. Proactive, studious, committed to constantly improve their skills and always with strong and relevant opinions, whether or not on technical issues. As Scrum Master, showed one of his most admirable traits: being a good leader, fair and always enhancing the team work, resolving conflicts and ensuring delivering value to our product. Certainly one of the IT professionals that every company seeks and who would like to have another opportunity to work. I can't see a different future for Victor as well as great success.",
              author: "Jordana Morais (Senior UX Designer & Front-end at Facilit Tecnologia)",
              info: "27 de setembro de 2016, Linkedin — Jordana worked directly with Victor Laerte at Facilit Tecnologia"
          }
          ],

      }

      this.get = function(key) {

        return strings[key];
    };

    this.getRandom = function(key) {

        var random = strings[key][Math.floor(Math.random()*strings[key].length)];
        return random;
    };

}
]);
})(window.angular);
