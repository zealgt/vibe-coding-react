# Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others’ private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

## Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [INSERT CONTACT EMAIL]. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project’s leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4, available at [https://www.contributor-covenant.org/version/1/4/code-of-conduct.html](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html)

[homepage]: https://www.contributor-covenant.org

## Coding Style and Standards

To ensure consistency and maintainability across the project, all contributors are expected to adhere to the following coding style and standards:

### General Guidelines

- Write clean, readable, and well-documented code.
- Follow the DRY (Don't Repeat Yourself) principle to avoid redundancy.
- Use meaningful variable and function names that clearly describe their purpose.
- Avoid hardcoding values; use constants or configuration files where applicable.

### JavaScript/TypeScript Standards

- Use modern ES6+ syntax wherever possible.
- Always use `const` and `let` instead of `var`.
- Prefer arrow functions for anonymous functions.
- Ensure proper type annotations in TypeScript.
- Use strict equality (`===` and `!==`) instead of loose equality (`==` and `!=`).

### CSS Standards

- Use BEM (Block Element Modifier) methodology for naming CSS classes.
- Avoid inline styles; use external stylesheets or CSS-in-JS solutions.
- Ensure proper use of Tailwind CSS utilities if applicable.

### Linting and Formatting

- Run the linter (`eslint`) before committing code.
- Use Prettier for consistent code formatting.
- Fix all linting errors and warnings before submitting a pull request.

### Testing

- Write unit tests for all new features and bug fixes.
- Ensure all tests pass before merging code.
- Use descriptive names for test cases and ensure they cover edge cases.

By following these standards, we aim to maintain a high-quality codebase that is easy to understand, extend, and debug.
