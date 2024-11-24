# **EcoChain: Pioneering Sustainable E-Commerce Logistics for SMBs**

## **Overview**

EcoChain is an AI-driven solution designed to optimize **logistics**, **route optimization**, and **sustainable packaging** for **small and medium-sized businesses (SMBs)**. This platform integrates seamlessly with Amazon's logistics network to reduce **carbon emissions** and operational costs while helping businesses adopt **eco-friendly logistics practices**. EcoChain uses **Next.js**, **Tailwind CSS**, and **Django** to offer a responsive and user-friendly interface with real-time **eco-impact tracking**.

---

## **Prerequisites**

Before running EcoChain locally or in a deployed environment, ensure that you have the following installed:

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package installer)
- **PostgreSQL** (for database management) or any other database of your choice
- **AWS CLI** (optional, if deploying to AWS)
- **Django** (v3.2 or higher)

---

## **Setup Instructions**

### 1. **Clone the Repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/fromjyce/EcoChain.git
cd EcoChain
```

### 2. **Frontend Setup (Next.js + Tailwind CSS)**

EcoChain’s frontend is built with **Next.js** for **server-side rendering (SSR)**, offering optimized performance for **eco-dashboard**, **route optimization**, **SPEN**, and **low-emission courier marketplace** pages. **Tailwind CSS** is used for styling to ensure a clean, responsive UI.

#### Steps to Install Frontend Dependencies:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
   
2. Install required dependencies:
   ```bash
   npm install
   ```
   
3. Configure **Tailwind CSS** by ensuring that `tailwind.config.js` is set up to process your stylesheets.
   
4. To start the **Next.js development server**, run:
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:3000`.

---

### 3. **Backend Setup (Django)**

The backend is built with **Django** to manage **API requests**, **user authentication**, **database interactions** (e.g., packaging details, courier data, EcoPoints tracking), and **machine learning model** integration for **route optimization**.

#### Steps to Install Backend Dependencies:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Set up your database (PostgreSQL or the database of your choice). If you're using PostgreSQL, make sure you have it installed and create a database for EcoChain:
   ```bash
   CREATE DATABASE ecochain;
   ```

3. Run Django migrations to set up the database schema:
   ```bash
   python manage.py migrate
   ```

4. Run the Django development server:
   ```bash
   python manage.py runserver
   ```
   
   The backend will be available at `http://localhost:8000`.

---

### 4. **Running the Application**

After setting up both the frontend and backend, you can run the full application locally by starting both the **Next.js** frontend and **Django** backend servers. Ensure both are running simultaneously.

**Frontend**:
```bash
npm run dev  # Runs on http://localhost:3000
```

**Backend**:
```bash
python manage.py runserver  # Runs on http://localhost:8000
```

---

## **Key Features of EcoChain**

- **Amazon Green Score**: A real-time tracking system that calculates the **environmental impact** of **delivery routes**, **packaging**, and **courier selection**.
- **EcoPoints System**: **Incentivizes eco-friendly choices** made by users, such as choosing **low-emission couriers** and **reusable packaging**. Users earn points for making sustainable choices.
- **Smart Packaging Exchange Network (SPEN)**: Facilitates the exchange of **reusable packaging** between SMBs, integrating with **IoT technologies** to track packaging locations and usage.
- **AI-Driven Route Optimization**: **AI models** (using **AWS SageMaker**) provide optimized **delivery routes** that minimize **carbon emissions** and **delivery time** based on **real-time data**.
- **Low-Emission Courier Marketplace**: Allows SMBs to select **green delivery services** based on **carbon emission ratings** and **delivery costs**.

---

## **Important Links**
- [GitHub Repository](https://github.com/fromjyce/EcoChain)
- [Deployment Link](https://eco-chain-three.vercel.app/)
- [Demo Video Link](https://your-demo-link)

---

### **License**

All the code in this repository is licensed under the **MIT License**. You are free to use and modify it for educational purposes. However, I do not take any responsibility for the accuracy or reliability of the code.