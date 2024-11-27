# **Role-Based Access Control (RBAC) UI**

## **Project Overview**
This project is a **frontend UI** for managing `users`, `roles`, and `permissions` in a role-based access control (RBAC) system.  
It allows administrators to:
- View, manage, and assign roles and permissions to users in a secure and efficient way.
- The design focuses on **user experience**, **responsiveness**, and intuitive functionality to streamline role and permission management.

---

## **Core Features**

- **User Management:** `View`, `add`, `edit`, or `delete users`. Assign `roles` to users and toggle their status (`Active/Inactive`).
- **Role Management:** Define and edit `roles`. Assign `permissions` to roles (`Read`, `Write`, `Delete`) and create `custom attributes` for roles.
- **Permissions Management:** Assign or modify `permissions` dynamically. Clear visual representation of `permissions` for easy understanding.
- **Mock API Simulation:** Simulated API calls for `CRUD operations` on users and roles. Server responses are mocked to simulate real-time functionality.

---

## **Technologies Used**

- **Frontend Framework:** `React`  
- **Styling:** `Tailwind CSS`  
- **State Management:** React's `useState`/`useReducer`  
- **API Simulation:** Mock service with `JSON` or `JavaScript functions` to simulate API calls  
- **Responsive Design:** Tailored for `mobile` and `desktop devices`  

---

## **Installation and Setup**

Follow these steps to set up the project locally:

1. Clone the repository:  
   `git clone https://github.com/Aabhi2002/RBAC-VRV-Security-main.git`

2. Install dependencies:  
   `npm install`

3. Start the development server:  
   `npm start`  

   This will start the app in development mode. Open `http://localhost:3000` to view it in the browser.

---

## **Project Working**

- **Add Role:**  
  1. On the UI, start by clicking on the `Add Role` button.  
  2. Define the role you want to create (e.g., `Admin`, `Editor`, `Viewer`).  
  3. Assign `permissions` (`Read`, `Write`, `Delete`) to the role by selecting the corresponding checkboxes.  
  4. Save the role.

- **Add User:**  
  1. Navigate to the `User Management` section.  
  2. Click on the `Add User` button.  
  3. Enter the user's `full name` and `email address`.  
  4. Select the role for the user from the `dropdown menu` (roles must be created beforehand in the `Role Management` section).  
  5. Define whether the user is currently active by checking the `Active` checkbox.  
  6. Click `Save` to add the user.

- **Assign Roles and Permissions:**  
  The assigned `roles` determine what actions the user can perform based on the `permissions` configured during role creation.  
  This sequence ensures that roles are defined first, and users are added and managed with assigned roles and permissions.

---

## **Usage**

Once the app is running, you will be able to:  
- Navigate to the `User Management` section to `add/edit/remove users`.  
- In the `Role Management` section, define `new roles` and manage `permissions`.  
- Use the `Permissions Management` section to modify `role permissions`.

---

## **Acknowledgments**  
Thank you for giving me the opportunity to work on this project. It has been a great learning experience, and I gained valuable insights while working on it.  
I am excited about the possibility of contributing further to `VRV Security` in the future.
