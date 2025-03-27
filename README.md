# CallSystem Frontend

## Overview
The **CallSystem Frontend** is an Angular application that serves as the user interface for the CallSystem API. It provides authentication, user management, and an intuitive UI for handling customers, technicians, and service calls.

## Features
- **CRUD Operations**: Manage customers, technicians, and service calls.
- **Authentication & Authorization**: Secure login using JWT tokens.
- **Service Call Management**:
  - Calls must be linked to a client and a technician.
  - Calls cannot be deleted.
- **Angular Material UI** for an enhanced user experience.
- **Development and Production Modes**.

## Tech Stack
- **Angular** (Latest Version)
- **Angular Material** (UI Components)
- **RxJS** (Reactive Programming)
- **TypeScript** (Strongly Typed Language)
- **SCSS** (Styling)

## Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/callsystem-frontend.git

# Navigate to the project folder
cd callsystem-frontend

# Install dependencies
npm install
```

## Running the Application
```sh
# Development Mode
ng serve

# Production Build
ng build --configuration=production
```

## Environment Configuration
The environment variables are defined in:
- `src/environments/environment.ts` (Development)
- `src/environments/environment.prod.ts` (Production)

Ensure that the API base URL is set correctly for backend communication.

## Project Structure
```
callSystem/
├── src/
│   ├── app/
│   │   ├── components/    # UI Components
│   │   ├── services/      # API Calls & Business Logic
│   │   ├── models/        # Data Models
│   │   ├── guards/        # Route Guards
│   │   ├── interceptors/  # HTTP Interceptors
│   ├── assets/            # Static Files
│   ├── environments/      # Environment Configurations
│   ├── styles.css         # Global Styles
│   ├── main.ts            # Entry Point
│   ├── index.html         # Root HTML
```

## Dependencies
Key dependencies from `angular.json`:
- **`@angular/material`** - Prebuilt Material UI themes
- **SCSS** - Styling language
- **Environment-based Configurations**

## API Integration
The frontend communicates with the CallSystem backend using HTTP requests.
Make sure to update `environment.ts` with the correct API base URL:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

## Contribution
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit your changes.
4. Push to the branch and create a pull request.

## License
MIT License

