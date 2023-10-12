**Application Overview:**

Web application that allows users to register and authenticate. Non-authenticated users won't have access to the user management (admin panel). Authenticated users will have access to a user management table, displaying user information such as id, name, email, last login time, registration time, and status (active/blocked). 

**Features:**

1. **User Authentication:**
   - Users can register with any non-empty password (even a single character).
   - Users must authenticate to access the user management panel.

2. **User Management:**
   - The user management table displays user information.
   - A leftmost column contains checkboxes for multiple selections.
   - Each row allows for individual user actions.

3. **Admin Panel:**
   - Only authenticated users have access to the user management table.

4. **User Actions:**
   - **Block**:  Allows users to block selected users.
   - **Unblock**: Enables users to unblock selected users.
   - **Delete**:  Lets users delete selected users.

