# **Role-Based Access Control (RBAC) UI**

## **Project Overview**  
This project is a **frontend user interface** designed for managing `users`, `roles`, and `permissions` in a **Role-Based Access Control (RBAC)** system.  

It empowers administrators to:  
- Efficiently **manage users, roles, and permissions**.  
- Maintain a **secure, responsive, and intuitive system** for managing access controls.

This application streamlines the complexities of role and permission management, offering a seamless user experience.

---

## **Core Features**

### **User Management**  
- Add, view, edit, or delete users.  
- Assign roles to users and toggle their status as **Active** or **Inactive**.

### **Role Management**  
- Create, update, or delete roles.  
- Assign granular permissions to roles (`Read`, `Write`, `Delete`).  
- Customize roles with additional attributes.  

### **Permissions Management**  
- Dynamically assign or modify permissions.  
- Intuitive visualization of permissions for better understanding.

### **Mock API Simulation**  
- Simulated API calls to perform `CRUD operations` (Create, Read, Update, Delete) on users and roles.  
- Mocked server responses for testing real-world functionality.

---

## **Technologies Used**

- **Frontend Framework:** [React](https://reactjs.org/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **State Management:** React’s `useState` and `useReducer` hooks  
- **API Simulation:** Mock services with JSON/JavaScript  
- **Responsive Design:** Optimized for `mobile` and `desktop devices`  

---

## **Installation and Setup**

Follow these steps to set up the project locally:

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/krishnaxshukla/VRV-Security.git

2. **Navigate to the project directory**:  
   ```bash
   cd VRV-Security

3. **Install the dependencies**:  
   ```bash
   npm install

4. **Start the development server**:  
   ```bash
   npm start

Open your browser and visit `http://localhost:3000` to access the application.

---

## **How the App Works**

### **Role Management**  
1. Navigate to the **Role Management** section and click **Add Role**.  
2. Define the role name (e.g., `Admin`, `Editor`, `Viewer`).  
3. Assign permissions to the role by selecting the appropriate checkboxes (`Read`, `Write`, `Delete`).  
4. Save the role to make it available for assignment.

### **User Management**  
1. Navigate to the **User Management** section and click **Add User**.  
2. Enter the user's **name** and **email address**.  
3. Select a role for the user from the dropdown (ensure roles are created first in the **Role Management** section).  
4. Define the user’s status by toggling the **Active/Inactive** checkbox.  
5. Click **Save** to add the user.

### **Assigning Roles and Permissions**  
- Roles define the actions users can perform in the system.  
- Configure permissions during role creation for effective access management.

---

## **Usage**

Once the application is running, you can:  
- **Manage Users:** Add, update, delete, and assign roles to users.  
- **Define Roles:** Create roles with specific permissions (`Read`, `Write`, `Delete`).  
- **Modify Permissions:** Adjust role permissions as required.  

The app ensures efficient role-based access control, enhancing security and scalability.

---

## **Project Highlights**  
- **User-Friendly Interface:** Simple and clear UI for managing roles and permissions.  
- **Simulated API Calls:** Replicates server behavior for testing and demonstration.  
- **Responsive Design:** Fully functional across devices, including mobile and desktop.  

---

## **Future Enhancements**  
1. **Integration with a real backend API** to enable live data handling.  
2. **Activity Logs:** Keep track of changes made by users.  
3. **Advanced Filters:** Search and filter users/roles for quicker access.  
4. **Role Hierarchy:** Support for nested roles and inheritance of permissions.  

---

## **Acknowledgments**  
This project has been a tremendous learning opportunity. It helped enhance my understanding of React, Tailwind CSS, and creating user-centric designs.  

I extend my gratitude to **VRV Security** for the chance to work on this project. I look forward to expanding its scope and making more meaningful contributions in the future.
