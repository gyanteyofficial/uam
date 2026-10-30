import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserRecord {
  name: string;
  initials: string;
  email: string;
  phone: string;
  roles: string[];
  status: 'Active' | 'Pending' | 'Blocked' | 'Deactivated';
  joined: string;
}

@Component({
  imports: [CommonModule],
  selector: "app-user-management",
  styleUrl: "./user-management.css",
  templateUrl: "./user-management.html",
})
export class UserManagement implements OnInit {

   tableUsers: UserRecord[] = [
    { name: 'Rahul Sharma', initials: 'RS', email: 'rahul@example.com', phone: '+91 98765 43210', roles: ['Admin'], status: 'Active', joined: '12 Aug 2025' },
    { name: 'Priya Patel', initials: 'PP', email: 'priya@example.com', phone: '+91 87654 32109', roles: ['User'], status: 'Active', joined: '10 Aug 2025' },
    { name: 'Amit Kumar', initials: 'AK', email: 'amit@example.com', phone: '+91 76543 21098', roles: ['User', 'Editor'], status: 'Active', joined: '08 Aug 2025' },
    { name: 'Neha Singh', initials: 'NS', email: 'neha@example.com', phone: '+91 65432 10987', roles: ['User'], status: 'Pending', joined: '05 Aug 2025' },
    { name: 'Vikram Yadav', initials: 'VY', email: 'vikram@example.com', phone: '+91 54321 09876', roles: ['User'], status: 'Active', joined: '02 Aug 2025' },
    { name: 'Anjali Verma', initials: 'AV', email: 'anjali@example.com', phone: '+91 43210 98765', roles: ['Editor'], status: 'Active', joined: '28 Jul 2025' },
    { name: 'Suresh Reddy', initials: 'SR', email: 'suresh@example.com', phone: '+91 90123 45678', roles: ['User'], status: 'Blocked', joined: '25 Jul 2025' },
    { name: 'Pooja Gupta', initials: 'PG', email: 'pooja@example.com', phone: '+91 81234 56789', roles: ['User'], status: 'Active', joined: '22 Jul 2025' },
    { name: 'Rohit Mehta', initials: 'RM', email: 'rohit@example.com', phone: '+91 72345 67890', roles: ['Admin'], status: 'Active', joined: '18 Jul 2025' },
    { name: 'Sneha Iyer', initials: 'SI', email: 'sneha@example.com', phone: '+91 61234 56789', roles: ['User'], status: 'Deactivated', joined: '15 Jul 2025' }
  ];

  activeUser!: UserRecord;

  ngOnInit(): void {
    // Default fallback to first listed entity matching the image profile view state
    this.activeUser = this.tableUsers[0];
  }

  setActiveUser(user: UserRecord): void {
    this.activeUser = user;
  }
}
