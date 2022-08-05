import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-listusers',

  templateUrl: './listusers.component.html',

  styleUrls: ['./listusers.component.css']

})

export class ListUsersComponent implements OnInit {



  constructor() { }



  ngOnInit(): void {

  }

//users!:any;



  //users = ["vishishta","swapnika","deekshitha"];



  users=[



    {id:101, name:"vishishta", email:"vish@gmail.com"},

 

    {id:102, name:"swapnika", email:"swap@gmail.com"},

 

    {id:103, name:"deekshitha", email:"deek@gmail.com"},

 

  ];

 

 

 

  //Next Task:ListTaskComponent

 

  tasks = [

 

    {id:1, name:"Install Java", status:"COMPLETED"},

 

    {id:2, name:"Install NodeJS", status:"PENDING"},

 

  ]

 

    deleteUser(){

 

      alert("Successfully Deleted");

 

    }

 

 

 

 

 

  }

 

  function deleteUser() {

 

    throw new Error('Function not implemented.');

 

  }
