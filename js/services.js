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
                description: "Among the activities I highlight the management of projects of implantation, consulting, pre-sale and contractual management."
            },
            
           /* Analisar se é necessária a inclusão(ou modificaçãi) dessa entrada no Index */
            facilit2: {
                name: "Facilit Tecnologia",
                role: "Project Manager / Product Owner",
                period: "Jully 2012 - May 2015",
                description: "Project Manager working with the development of web systems using Scrum as the main agile methodology."
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
                  name: "Management"
              }
              ]
          },
          {
              closed: true,
              title: "Workshop In Companny about Scrum",
              description: "Workshop in company about Scrum for Amarante Hospitalidade through the Trampoline Academy. Excellent experience to talk about Scrum in a different context of Software.",
              imgUrl: "images/portfolio/trampolim.jpg",
              modalImgUrl: "images/portfolio/modals/workshop.jpg",
              url: "",
              tags: [
              {
                  name: "Scrum"
              }
              ]
          },
          {
              closed: true,
              title: "LAI - Lei de Acesso a Informação",
              description: "The LAI are intended to allow quick, organized and reliable access to information of public interest.",
              imgUrl: "images/portfolio/lai.png",
              modalImgUrl: "images/portfolio/modals/lai.png",
              url: "http://www.lai.pe.gov.br/web/portal",
              tags: [
              {
                  name: "management"
              },
              
              ]
          },
          {
              closed: true,
              title: "Portal da Transparência de Pernambuco",
              description: "The Portal da Transparência is a site of the Government of Pernambuco that contains information about governmental actions.",
              imgUrl: "images/portfolio/transp.png",
              modalImgUrl: "images/portfolio/modals/transparencia.png",
              url: "http://www2.transparencia.pe.gov.br/web/portal-da-transparencia",
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
              title: "Atlas do Investidor",
              description: "The Atlas do Investidor is a support tool for the investor interested in knowing the potential of the state of Pernambuco.",
              imgUrl: "images/portfolio/atlas.png",
              modalImgUrl: "images/portfolio/modals/atlas.png",
              url: "http://www.atlasdoinvestidor.pe.gov.br/",
              tags: [
              {
                  name: "management"
              },
            
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
              quote: "“Innovation distinguishes between a leader and a follower”",
              author: "Steve Jobs"
          },
          {
              quote: "“The world is changing very fast. Big will not beat small any more. It will be the fast beating the slow.”",
              author: "Rupert Murdoch"
          },
          {
              quote: "“No Heroics. If you need a hero to get things done, you have a problem. Heroic effort should be viewed as a failure of planning.”",
              author: " Jeff Sutherland, Scrum: The Art of Doing Twice the Work in Half the Time"
          },
          {
              quote: "“That absolute alignment of purpose and trust is something that creates greatness.”",
              author: "Jeff Sutherland, Scrum: The Art of Doing Twice the Work in Half the Time"
          },
 
          ],
          testimonials: [
          {
              testimonial: "Danilo is a proactive guy that changed the process in our company and the way how we work. I had the opportunity to follow all the changes brought by Danilo, especially regarding to agile methodologies where he first introduced in his team and until today we use it all over the company. In addition to his know how in agile methods and project management, he is also very creative and with very relevant opinion both for business, product or personal things. With so many things to agregate, he is definetily a good aquisition for your company.",
              author: "Victor Laert (Software Developer at Facilit Tecnologia)",
              info: "24 de fevereiro de 2017, Linkedin."
          },
          {
              testimonial: "Danilo é um profissional extremamente competente, ético e orientado a resultados. É um líder nato, sabe lidar com as pressões diárias, orienta a equipe para a melhor direção, garantindo o cumprimento dos processos. Inspira confiança e sempre está disponível para ajudar a todos. Sabe delegar e trabalha de uma maneira na qual consegue fazer com que todos se sintam incluídos em suas decisões. É um profissional completo.",
              author: "Rodolfo Baptista (Product Owner at Facilit Tecnologia)",
              info: "05 de março de 2015, Linkedin."
          },
     /*     {
              testimonial: "Victor is a great, experienced workmate and friend, talented and easy to work with. He has great technical skills and always willing to learn new technologies and practices (both academical and professional). He's willing to help the workmates and not afraid to work on challenging projects. He also gave great contributions to our internal processes in the company, such as adopt GitHub, Jenkins and other tools, which demonstrates interest to the company and its team, proactivity, out-of-the-box thinking and updated with best practices. He sure was a great addition to our team and will be anywhere he works. ",
              author: "Everson Veríssimo (Developer at Facilit Tecnologia)",
              info: "17 de outubro de 2016, Linkedin — Everson worked directly with Victor Laerte at Facilit Tecnologia"
          },
          {
              testimonial: "We worked together by few years and I can say that Victor is one of the best developers who have had the opportunity to collaborate. Proactive, studious, committed to constantly improve their skills and always with strong and relevant opinions, whether or not on technical issues. As Scrum Master, showed one of his most admirable traits: being a good leader, fair and always enhancing the team work, resolving conflicts and ensuring delivering value to our product. Certainly one of the IT professionals that every company seeks and who would like to have another opportunity to work. I can't see a different future for Victor as well as great success.",
              author: "Jordana Morais (Senior UX Designer & Front-end at Facilit Tecnologia)",
              info: "27 de setembro de 2016, Linkedin — Jordana worked directly with Victor Laerte at Facilit Tecnologia"
          } */
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
