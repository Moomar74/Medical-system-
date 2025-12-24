# Medical System - Microservices Architecture

A comprehensive medical management system built with a modern microservices architecture, featuring a React frontend and multiple Node.js/Express backend services.

## 🏗️ Architecture Overview

The system is divided into several specialized microservices to ensure scalability, maintainability, and fault isolation:

- **API Gateway (Port 5000)**: The single entry point for all client requests, routing them to the appropriate backend service.
- **Admin Service (Port 5001)**: Handles administrative tasks and system-wide management.
- **Auth Service (Port 5002)**: Manages user authentication, registration, and JWT token issuance.
- **Booking Service (Port 5003)**: Manages appointments, scheduling, and clinic visits.
- **Patient Service (Port 5004)**: Handles patient records, profiles, and dental history.
- **Doctor Service (Port 5005)**: Manages doctor profiles, specialties, and availability.
- **Frontend Client**: A modern React application built with Vite and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)
- [Docker](https://www.docker.com/) (Optional, for containerized deployment)

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Medical-system-
   ```

2. **Install Dependencies**:
   You need to install dependencies for each service. Navigate into each directory in `Microservices/` and run:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Each microservice requires a `.env` file with its specific configuration (MONGODB_URI, JWT_SECRET, etc.). Ensure these are set up based on the provided examples.

4. **Run the System**:
   You can use the provided PowerShell script to start all services at once:
   ```powershell
   cd Microservices
   ./start-system.ps1
   ```

---

## 🐳 Docker Deployment

The entire system can be containerized using Docker and orchestrated with Docker Compose.

### Running with Docker Compose

1. **Build and start the containers**:
   ```bash
   docker-compose up --build
   ```

2. **Access the application**:
   - Frontend: `http://localhost:8080` (Mapped from Nginx port 80)
   - API Gateway: `http://localhost:5000`

---

---


