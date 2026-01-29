# 📝 Registration Form Backend

A robust RESTful API designed to handle student registrations for university workshops. Built using **Node.js**, **Express.js**, and **MongoDB**.

## 🚀 Features
- **Student Registration:** Securely collect student details (Name, ID, University, etc.).
- **Workshop Selection:** Enforced selection from pre-defined technical workshops (e.g., UVM, Digital Design).
- **Data Validation:** Strict schema validation using Mongoose to ensure data integrity.
- **CRUD Operations:** Support for Creating, Reading, and Updating registration entries.

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Tooling:** Postman (for API testing)

## 📂 Project Structure
```bash
src/
├── DB/
│   ├── models/       # Mongoose Schemas (Registration Model)
│   └── connectionDB.js # Database connection logic
├── modules/
│   └── registration/ # Controller, Service, and Router
├── middleware/       # Validation and Error handling
└── app.controller.js # Entry point logic

```

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone [https://github.com/Seif-Sallam-1/registration-form-backend.git](https://github.com/Seif-Sallam-1/registration-form-backend.git)
cd registration-form-backend

```


2. **Install dependencies**
```bash
npm install

```


3. **Environment Setup**
Create a `.env` file in `src/config/` (or root, depending on your setup) and add:
```env
PORT=3000
DB_CONNECTION=your_mongodb_connection_string

```


4. **Run the server**
```bash
npm start
# OR for development
npm run dev

```



## 🔌 API Endpoints

### 1. Register a Student

* **URL:** `/registration/register`
* **Method:** `POST`
* **Body:**
```json
{
  "name": "Seif Sallam",
  "email": "seif@example.com",
  "phone": "010xxxxxxxx",
  "ID": "30101010101010",
  "university": "Cairo University",
  "faculty": "Engineering",
  "facultyID": "2020001",
  "workshop": "Digital design",
  "technicalBackground": "Experience with C++ and Logic Design"
}

```



### 2. Get Student Details

* **URL:** `/registration/:id`
* **Method:** `GET`
* **Description:** Retrieve a student's data using their MongoDB `_id`.

### 3. Update Registration

* **URL:** `/registration/:id`
* **Method:** `PATCH`
* **Body:** (Send only fields you want to change)
```json
{
  "workshop": "UVM"
}

```



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

---

### 3. The License

```MIT License

Copyright (c) 2026 Seif Sallam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
