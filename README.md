# Bus Booking System – DevOps Project

## Project Overview
This project is a Bus Booking System developed as part of the DevOps module.  
It demonstrates collaborative development, CI/CD pipelines, and cloud deployment.

## Team Members
- **M. Dhanushkapriyan** (ITBIN-2312-0015) – DevOps, Git, CI/CD, Deployment
- **K. F. Kaseedha** (ITBIN-2312-0028) – Frontend Development

## Branch Strategy
- `main` – Production-ready stable code
- `develop` – Integration branch for testing features
- `feature/frontend` – Frontend feature development

## Collaboration Workflow
1. Frontend developed in `feature/frontend` branch
2. Pull Request created from `feature/frontend` → `develop`
3. CI pipeline executed on `develop`
4. Merge conflict intentionally created between `develop` and `main`
5. Conflict manually resolved and committed
6. Final merge to `main` branch

## CI/CD Pipeline
- Automated CI workflow using GitHub Actions
- Validates code before merging to main branch

## Deployment
- Platform: **Vercel**
- Live URL: https://bus-booking-system-devops-tuep.vercel.app/

## Challenges Faced
- Git merge conflicts during branch integration
- Resolved conflicts manually by reviewing and fixing code differences
- Ensured clean deployment structure for Vercel

## Conclusion
This project demonstrates practical DevOps practices including version control,
branching strategies, CI/CD automation, collaboration, and cloud deployment.
