🏠 FixMyHostel – Hostel Complaint Management System

FixMyHostel is a full-stack MERN application designed to digitize and streamline hostel complaint management.
It provides a role-based system for students, staff, and administrators to efficiently raise, track, assign, resolve, and review complaints.

🚀 Live Overview

Roles Supported:

👨‍🎓 Student

🧑‍🔧 Staff

🛡 Admin

Core Idea:

Replace manual complaint registers with a transparent, trackable, role-based digital system.

✨ Features:

👨‍🎓 Student:

Register & login securely

Raise hostel complaints (water, electricity, cleanliness, etc.)

Track complaint status with timeline

View complaint history

Submit feedback & rating after resolution

🧑‍🔧 Staff:

Login securely

View assigned complaints

Update complaint status (In Progress / Resolved)

Add work notes during resolution

View resolved complaints

🛡 Admin:

Secure admin login

View all complaints

Assign complaints to staff

Create staff & admin accounts

Manage all users (students, staff, admins)

Delete users with safety checks

View staff performance based on feedback & ratings

🧠 Key Highlights:

Role-based access control (RBAC)

JWT authentication

Complaint lifecycle tracking

Timeline-based status updates

Feedback-driven staff performance

Clean, responsive UI with consistent theme

Secure admin-only operations

🛠 Tech Stack:
Frontend:

React.js (Vite)

React Router

Axios

CSS (custom dark theme)

Backend:

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

🔐 Authentication & Authorization:

JWT-based authentication

Protected routes for each role

Admin-only APIs secured using middleware

Users cannot access unauthorized dashboards

🔁 Complaint Lifecycle:

Student raises complaint

Admin assigns complaint to staff

Staff updates status (In Progress → Resolved)

Student submits feedback

Admin reviews staff performance

🧪 API Overview (Sample):
Method	Endpoint	Description
POST	/api/auth/login	Login
POST	/api/auth/register	Student registration
POST	/api/complaints	Raise complaint
GET	/api/complaints/my	Student complaints
PUT	/api/complaints/:id/assign	Assign staff
PUT	/api/complaints/:id/status	Update status
POST	/api/complaints/:id/feedback	Submit feedback
GET	/api/users	Admin: all users
DELETE	/api/users/:id	Admin: delete user

👨‍💻 Author:
Shubham Raikar
Computer Science & Engineering
