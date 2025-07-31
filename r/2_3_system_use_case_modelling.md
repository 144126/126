# 2.3. System Use Case Modelling

This section presents the use case modeling for the Taskify application, illustrating how users interact with the system to achieve their goals. Use case diagrams and descriptions provide a high-level overview of the system's functionality from a user's perspective.

## 2.3.1. Actors

The primary actor for the Taskify system is:

*   **User:** An individual who interacts with the Taskify application to manage their tasks.

## 2.3.2. Use Case Diagram

(An actual diagram would be inserted here, visually representing the use cases. For a text-based report, a textual description of the diagram's components will suffice.)

The main use cases for the Taskify application include:

*   **Manage Tasks:** This is a generalization of several sub-use cases, encompassing all actions related to tasks.
    *   **Create Task:** The user creates a new task.
    *   **View Tasks:** The user views a list of existing tasks.
    *   **Edit Task:** The user modifies an existing task's details.
    *   **Mark Task as Complete:** The user changes a task's status to completed.
    *   **Delete Task:** The user removes a task from the system.
*   **Organize Tasks:** The user applies categorization or tags to tasks.
*   **Filter Tasks:** The user narrows down the visible tasks based on specific criteria (e.g., status, due date, priority, tags).
*   **Search Tasks:** The user searches for tasks using keywords.

## 2.3.3. Use Case Descriptions

Here, detailed descriptions for key use cases are provided:

### Use Case: Create Task

*   **Actors:** User
*   **Preconditions:** The user has accessed the Taskify application.
*   **Flow of Events:**
    1.  The User navigates to the task creation interface.
    2.  The User inputs a task title (mandatory), description (optional), due date (optional), and priority (optional).
    3.  The User confirms task creation.
    4.  The System saves the new task locally (in `localStorage`) and initiates synchronization with Qdrant.
    5.  The System displays the newly created task in the task list.
*   **Postconditions:** A new task is created and persisted, visible in the application.
*   **Alternative Flows:**
    *   If task title is empty, the system prompts the user to enter a title.

### Use Case: View Tasks

*   **Actors:** User
*   **Preconditions:** The user has accessed the Taskify application and tasks exist.
*   **Flow of Events:**
    1.  The User opens the application.
    2.  The System retrieves tasks from `localStorage` and displays them in a list.
    3.  (Optional) The System fetches updated task data or search results from Qdrant if a search or filter is applied.
*   **Postconditions:** Tasks are displayed to the user.

### Use Case: Search Tasks

*   **Actors:** User
*   **Preconditions:** The user has accessed the Taskify application.
*   **Flow of Events:**
    1.  The User enters keywords into the search bar.
    2.  The User initiates the search.
    3.  The System sends the query to the Qdrant database.
    4.  Qdrant returns relevant tasks based on the search query.
    5.  The System displays the search results to the user.
*   **Postconditions:** A filtered list of tasks matching the search criteria is displayed.
*   **Alternative Flows:**
    *   If no tasks match the search query, the system displays a "No results found" message.