CivicPulse – Smart City Grievance Management System

_Frontend Preview: https://jaspal-s-rajput.github.io/CivicPulse_Public_Grievence_System/_

Overview

CivicPulse is a web-based Smart City grievance and feedback management system designed to facilitate structured complaint submission, tracking, and resolution between citizens and municipal authorities. The system supports role-based access and ensures transparency in grievance handling and service-level agreement (SLA) monitoring.

Problem Statement

Municipal grievance handling often lacks transparency, real-time tracking, and accountability. CivicPulse addresses these challenges by providing a centralized digital platform for grievance registration, workflow management, and performance analytics.

System Roles
Citizen

Register and authenticate

Submit grievances with supporting details

Track grievance status

Provide feedback after resolution

Administrator

View and manage all grievances

Assign grievances to departments or officers

Set priorities and deadlines

Monitor SLA compliance and analytics

Department Officer

View assigned grievances

Update progress and resolution status

Add resolution notes and attachments

Functional Modules
1. Authentication and Authorization

JWT-based authentication

Role-based access control

Secure login and registration

2. Grievance Submission

Category-based grievance creation

Image and location support

Status tracking (Pending, In Progress, Resolved)

3. Grievance Management

Centralized grievance dashboard

Assignment to departments or officers

Priority and deadline configuration

4. Officer Workflow

View assigned grievances

Update grievance progress

Submit resolution details

5. Feedback Management

Citizen rating after resolution

Reopen option for unresolved issues

6. Reporting and Analytics

Category-wise complaint analysis

Area-wise complaint distribution

SLA performance reports

Administrative dashboards

Technology Stack
Frontend

React (Vite) / Angular

REST API integration

Chart-based data visualization

Backend

Spring Boot

Spring Security

JWT Authentication

RESTful services

Database

MySQL

JPA / Hibernate

Tools
STS

Git and GitHub

Maven

Postman
