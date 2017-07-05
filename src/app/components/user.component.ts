import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService]
})
export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    employees: string[];
    showEmployee: boolean;
    posts: Post[]; 

    constructor(private postsService: PostsService){
        this.name = "Adam Thompson";
        this.email = "adam@codingbrains.com";
        this.address = {
            street: "vipul khand",
            city : 'lucknow',
            state: 'UP'
        };
        this.employees = ['Lalit', 'Bipin', 'Ravi'];
        this.showEmployee = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    toggleEmp(){
        if( this.showEmployee == false){
             this.showEmployee = true;
        }else{
             this.showEmployee = false;
        }
    }

    addEmp(employee){
        this.employees.push(employee);
    }

    deleteEmp(i){
        this.employees.splice(i, 1);
    }
}

interface address{
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}