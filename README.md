# Student Profile API

A RESTful API for managing student profiles, subjects, grades, and registrar information. The project includes a web frontend (Bootstrap 5 + DataTables) and a Node.js/Express.js backend with SQLite for persistent storage.

## Features
- Registrar and student authentication
- CRUD operations for students, registrars, and subjects
- Manage student grades (reate, read, update, delete)
- API key-based authentication for protected endpoints
- Responsive web UI with Bootstrap 5 and DataTables
- Environment variable management with dotenv
- Password hashing with bcrypt
- CORS support for cross-origin requests

## Technologies Used
- **Node.js** (JavaScript runtime for backend server)
- **Express.js** (Web framework for Node.js)
- **SQLite** (with `sqlite3` and `sqlite` npm packages)
- **bcrypt** (for password hashing)
- **cors** (for CORS support)
- **dotenv** (for environment variables)
- **Bootstrap 5** (frontend UI)
- **DataTables** (frontend table display)

## API Endpoints

### Registrar Endpoints
- `POST   /registrar/login` — Registrar login
- `POST   /registrar/newreg` — Create new registrar
- `GET    /registrar/allreg` — Get all registrars
- `GET    /registrar/:id` — Get registrar by ID
- `PUT    /registrar/:id/info` — Update registrar info
- `DELETE /registrar/delreg` — Delete registrar
- `PUT    /registrar/:id/username` — Update registrar username
- `PUT    /registrar/:id/password` — Update registrar password

### Student Endpoints
- `POST   /student/login` — Student login
- `POST   /student/newstud` — Create new student
- `GET    /student/allstud` — Get all students
- `GET    /student/:id` — Get student by ID
- `PUT    /student/:id/info` — Update student info
- `DELETE /student/delstud` — Delete student
- `PUT    /student/:id/username` — Update student username
- `PUT    /student/:id/password` — Update student password

### Subject & Grades Endpoints
- `POST   /subject/newsub` — Create new subject
- `GET    /subject/allsub` — Get all subjects
- `GET    /subject/:id` — Get subject by ID
- `PUT    /subject/:id` — Update subject info
- `DELETE /subject/delsub` — Delete subject
- `POST   /subject/addstudgrades` — Add student grades
- `PATCH  /subject/updatestudgrades` — Update student grades
- `DELETE /subject/delstudgrades` — Delete student grades
- `GET    /subject/studgrades/:studentId` — View student grades by student ID

## Project Structure

```
app.js                                  # Main Express app
package.json                            # Project metadata and dependencies
student_profile.db                      # SQLite database file
.gitignore                              # Git ignored files and folders

controllers/                            # Route handler logic
  registrar_controller.js
  student_controller.js
  subject_controller.js

db/                                     # Database setup and schema
  database.js
  student_profile_db_schema.drawio

middleware/                             # Express middleware
  auth_middleware.js                    # API key validation

models/                                 # Data access logic
  registrar_model.js
  student_model.js
  subject_model.js

public/                                 # Static frontend files (HTML, CSS, JS)
  all_students.html
  all_subjects.html
  delete_registrar.html
  delete_student.html
  delete_student_grades.html
  delete_subject.html
  get_registrar_by_id.html
  get_student_by_id.html
  get_subject_by_id.html
  index.html                            # API documentation UI
  newgrade.html
  newreg.html
  newstud.html
  newsub.html
  registrar_login.html
  student_login.html
  update_registrar_info.html
  update_registrar_password.html
  update_registrar_username.html
  update_student_grades.html
  update_student_info.html
  update_student_password.html
  update_student_username.html
  update_subject_info.html
  view_student_grades.html

routes/                                 # Express route definitions
  registrar_routes.js
  student_routes.js
  subject_routes.js
```

---

**Authors:** Christopher Sembrano, Joshua Repique, Bea Verna Barañao

**License:** ISC