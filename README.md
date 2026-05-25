LMS Platform Setup & Architecture Documentation
Project Overview

This repository contains a complete Learning Management System (LMS) platform with two separate frontend applications connected to an Oracle backend using ORDS APIs.

The architecture consists of:

Konzpetes LMS → Student-facing learning platform
LMS Admin Dashboard → Administrative management panel
Oracle Database → Main database layer
Oracle ORDS APIs → Backend REST API layer

Overall Architecture

┌─────────────────────────────┐
│      Oracle Database        │
│        (Oracle DB)          │
└─────────────┬───────────────┘
              │
              │ ORDS REST APIs
              │
┌─────────────▼───────────────┐
│       Oracle ORDS API       │
│     Backend REST Layer      │
└─────────────┬───────────────┘
              │
      ┌───────┴────────┐
      │                │
      │                │
┌─────▼─────┐   ┌──────▼────────┐
│ Konzpetes │   │ LMS Dashboard │
│ Frontend  │   │ Admin Panel   │
└───────────┘   └───────────────┘

Projects Included
1. Konzpetes LMS (Student LMS)
Purpose

This is the main student-facing LMS application.

It contains:

Learning modules
Interactive educational activities
Crossword games
Word search activities
Grammar/spelling exercises
Educational content rendering
Student dashboards
Technology Used
Next.js
React
Node.js
CSS
JavaScript
Important Structure

/app
/pages
/components
/base
/public
/utils
/server.js
/.env.local

Key Architectural Understanding

The project uses a hybrid Next.js architecture:

pages/

Classic Next.js routing system.

app/

Modern Next.js App Router.

Both are being used together.

Educational Engine

The /base folder contains the core learning engine.

Includes:
Crossword systems
Word search systems
Interactive exercises
Grammar datasets
Vocabulary systems
Dynamic educational content
Backend Connection

The frontend connects to Oracle ORDS APIs using environment variables.

Environment File
.env.local
Example
NEXT_PUBLIC_API_URL=http://localhost:8080/ords/dev

This URL is used throughout the application to connect frontend requests to Oracle ORDS backend services.

Running Konzpetes LMS
Install Dependencies
npm install
Start Development Server
npm run dev
2. LMS Admin Dashboard
Purpose

This is the administration panel for managing the LMS system.

It is a completely separate frontend application.

Features

Likely responsibilities include:

User management
Course management
Content management
Reports
Analytics
Admin authentication
Role management
Technology Used
React
JavaScript
Node.js
Important Structure
/src
/public
/package.json
/.env
Backend Connection

The Admin Dashboard connects to Oracle ORDS APIs using a centralized API helper configuration.

Important File
src/helpers/api_helper.js
Example Configuration
const API_URL = "http://localhost:8080/ords/dev";

All API requests are routed through this backend URL.

Running LMS Admin Dashboard
Install Dependencies
yarn install
Start Development Server
yarn start
Replit Deployment & Setup

This project is configured to run inside Replit using two separate frontend applications connected to Oracle ORDS APIs.

Replit Setup Requirements
Node.js Environment

Required Node.js version:

Node.js 18+ recommended
Project Setup Flow in Replit
Step 1 — Upload Repository

Upload the entire project repository into Replit workspace.

Step 2 — Install Dependencies
For Konzpetes LMS
npm install
For LMS Admin Dashboard
cd "Admin dashboard"
yarn install
Environment Configuration
Konzpetes LMS

Create or update:

.env.local

Add:

NEXT_PUBLIC_API_URL= "http://localhost:8080/ords/dev" (replacable with live server API)
LMS Admin Dashboard

Update backend URL inside:

src/helpers/api_helper.js

Set:

const API_URL = "http://localhost:8080/ords/dev";
Running Both Projects

The repository contains two independent frontend applications.

Both must be started separately.

Run Konzpetes LMS

From root directory:

npm run dev

Default development port:

3000
Run LMS Admin Dashboard

From Admin dashboard directory:

cd "Admin dashboard"
yarn start

Default development port:

3001 or configured React port
Backend Architecture Understanding

The frontend applications do not contain the primary business backend logic.

The backend architecture is:

Frontend Apps
      ↓
Oracle ORDS REST APIs
      ↓
Oracle Database

ORDS acts as:

API gateway
REST service layer
Database connector

All frontend requests communicate with Oracle Database through ORDS endpoints.

Development Understanding

This repository is not a basic demo project.

It is a modular LMS platform containing:

Multiple frontend applications
Shared educational engine
Dynamic learning modules
Oracle backend integration
REST API architecture
Production-oriented structure


This project is a full LMS ecosystem composed of:

Student LMS frontend
Admin management frontend
Oracle ORDS backend APIs
Oracle Database

The architecture follows a modern decoupled frontend/backend design where:

React/Next.js handles UI
ORDS handles APIs
Oracle handles persistent data storage