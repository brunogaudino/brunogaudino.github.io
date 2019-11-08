import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  courseProjects: Array<any> = [
    {
      'title': 'API Payment',
      'description': 'NodeJs API development. The code is available in github and is accessible through the link below.',
      'link': 'https://github.com/brunogaudino/api.payment'
    },
    {
      'title': 'Casa do código',
      'description': 'Development of the home of the "Casa do código" website in Nodejs, as a NodeJs course project. The code is available in github and can be accessed from the Home Code link.',
      'link': 'https://github.com/brunogaudino/casadocodigo/'
    },
    {
      'title': 'Webapp Angular',
      'description': 'Web application development with angular. The code is available in github and is accessible through the Webapp Angular link.',
      'link': 'https://github.com/brunogaudino/angular-alurapic/'
    },
    {
      'title': 'Workflow gulp',
      'description': 'Workflow development with automatization tool gulp. The code is available in github and is accessible through the Website Workflow link below.',
      'link': 'https://brunogaudino.github.io/website-workflow-gulp/'
    }
  ];

  independentProjects: Array<any> = [
    {
      'title':'API service',
      'description':'An API who provides CRUD(create, read, update, delete) operations services. The code is available in github and is accessible through the link bellow.',
      'link':'https://github.com/brunogaudino/api-service/'
    },
    {
      'title':'Developer nodejs project',
      'description':'A project built with HTML5, CSS3, javascipt, node.js and mongodb, as a complement to the training. The code is available in github and is accessible through the link developer nodejs project.',
      'link':'https://github.com/brunogaudino/developer-nodejs-project/'
    },
    {
      'title':'Shot on the target',
      'description':'Development of a simple game with javascript in which the user needs to hit the target. This page is usually blocked by the browser for security, it is necessary to unlock to see the game by running the example page can be accessed on the link shot on the target.',
      'link':'https://brunogaudino.github.io/shot-on-the-target/'
    },
    {
      'title':'Minimalist jekyll blog',
      'description':'Minimalist blog development using jekyll, with posts lists, pagination, commentary with disqus, and contact form. A sample page can be accessed on the minimalist jekyll blog.',
      'link':'https://brunogaudino.github.io/minimalist-jekyll-blog/'
    },
    {
      'title':'Framework Grid CSS',
      'description':'CSS framework adaptation based on grid concept, for facilitates the website interface development. A sample page can be accessed on the Framework Grid CSS.',
      'link':'https://github.com/brunogaudino/framework-grid-css'
    }
  ];
  
  constructor() {  
  }

  ngOnInit() { 
    return this.courseProjects && this.independentProjects;
  }

}
