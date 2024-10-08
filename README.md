# 🖥️ XiaoDev Portfolio

Hello there! 👋 Welcome to my portfolio. 

I'm Xiaolin Jin Lin, a fullstack developer passionate about creating interactive and dynamic web applications. In this portfolio, you will find a showcase of my skills and projects, all designed to provide an engaging user experience that simulates an operating system. Thank you for visiting!

🔗 **Live Project**: [xiaojl.dev](https://xiaojl.dev)

## 📸 Preview

Here are some screenshots of the portfolio:

| Theme 1 | Theme 2 |
|---------------|---------------|
| ![Screenshot 1](screenshots/screenshot-1.jpeg) | ![Screenshot 2](screenshots/screenshot-2.jpeg) |

![Screenshot 3](screenshots/screenshot-3.jpeg)
![Screenshot 4](screenshots/screenshot-4.jpeg)

## 📄 Project Information

- **Name**: XiaoDev Portfolio
- **Author**: Xiaolin Jin Lin
- **Email**: [dev@xiaojl.dev](mailto:dev@xiaojl.dev)

## 🌟 Key Features

- **Interactive windows**: Users can open, resize, move, and close windows, providing a desktop-like experience.
- **Responsive design**: The portfolio is designed to work seamlessly on various devices and screen sizes.
- **Smooth animations**: Utilizes animations for a more engaging user experience.
- **Showcase projects**: Highlights various projects and skills, demonstrating my abilities as a developer.

## ⚙️ Stack

The portfolio is built with the following stack:

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="src/assets/icons/vue.png" alt="Vue" style="margin: 0 10px;" />
  <img src="src/assets/icons/sass.png" alt="Sass" style="margin: 0 10px;" />
  <img src="src/assets/icons/bootstrap.png" alt="Bootstrap" style="margin: 0 10px;" />
  <img src="src/assets/icons/php.png" alt="PHP" style="margin: 0 10px;" />
</div>
<br/>

- **Vue 2**: Frontend framework.
- **SASS**: For styling and animations.
- **Bootstrap**: For styles and UI components.
- **Fontawesome**: For icons.
- **PHP**: Handles server-side logic for processing email submissions through the `email.php` file in the `api/` folder.

## 🗂️ Project Structure

- `api/`: Contains the backend logic for handling API requests.
- `dist/`: Folder generated after the build, ready for production deployment.
- `screenshots/`: Contains screenshots showcasing the user interface and functionalities of the portfolio.
- `public/`: Static files and the `index.html`.
- `src/`: Contains the main components, views, and project files.

## 🚀 Scripts

The project has the following scripts defined in the `package.json`:

- `npm run serve`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs the linter to detect and fix code issues.
- `npm run format`: Formats the code using Prettier.

## 📋 Environment Variables

This project uses environment variables to manage configuration settings. You can find the following variables in the `.env` file:

```bash
VUE_APP_PORT=3000 # the port of development server
VUE_APP_API_ENDPOINT_URL=http://localhost:8000/api/ # the URL of api endpoint
VUE_APP_CV_URL= # the URL of CV
VUE_APP_GA_ID= # Google Analytics ID
```

- `VUE_APP_PORT`: Set the port of development server (default: 3000).
- `VUE_APP_API_ENDPOINT_URL`: The API endpoint URL for making requests (default: `http://localhost:8000/api/`).
- `VUE_APP_CV_URL`: The URL of CV.
- `VUE_APP_GA_ID`: The Google Analytics ID (not required).

## 🔌 Running the PHP Server

To start the PHP server, ensure that PHP is installed on your machine. Then, navigate to the project directory and run the following command:

   ```bash
   php -S localhost:8000
   ```

## 🛠️ Build and Deployment

Run the build command:

   ```bash
   npm run build
   ```

The generated files will be in the `dist` folder, ready to be deployed to any web server.

## 🚀 Future Improvements

I am committed to continuously enhancing this portfolio project by adding more features and functionalities, as well as improving the code quality. Stay tuned for updates as I strive to improve the user experience and showcase my skills as a fullstack developer!

## 🤝 Get In Touch

I invite you to explore the project and share your thoughts! If you have any questions or feedback, don't hesitate to reach out. Your input is greatly appreciated!