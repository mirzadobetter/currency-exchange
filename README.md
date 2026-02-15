# Currency Exchange 🌍💱

![Currency Exchange](https://img.shields.io/badge/Download%20Releases-%20%F0%9F%93%88-brightgreen?style=flat-square&logo=github)

Welcome to the **Currency Exchange** repository! This project harnesses the power of Google Sheets to provide financial data without the need for third-party APIs. Instead, we utilize Google Finance to deliver accurate currency exchange rates and other financial information. This repository also integrates various Google Cloud services to streamline data management and transformation.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Releases](#releases)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **Currency Exchange** project aims to simplify access to financial data. By leveraging Google Sheets, users can obtain real-time currency exchange rates and perform conversions easily. This project eliminates the need for costly third-party APIs, making financial data accessible to everyone.

We also incorporate Google BigQuery for efficient data storage and transformation. Dataform is used to manage our data workflows, while Google Workflows orchestrates the entire process. This setup allows users to focus on their financial analyses without worrying about data retrieval and management.

## Features

- **Real-time Currency Exchange Rates**: Get up-to-date exchange rates directly from Google Finance.
- **Data Transformation**: Utilize BigQuery and Dataform for effective data management.
- **Seamless Integration**: Combine Google Sheets with Google Cloud services for a smooth user experience.
- **User-friendly Interface**: Simple setup and easy navigation within Google Sheets.
- **Free Access**: No need for expensive APIs or subscriptions.

## Technologies Used

This project employs several key technologies:

- **Google Sheets**: For data presentation and manipulation.
- **Google Finance**: To fetch real-time financial data.
- **BigQuery**: For large-scale data storage and querying.
- **Dataform**: To manage data transformations.
- **Google Workflows**: For orchestrating various tasks and services.
- **Firestore**: For storing and managing user data.

## Getting Started

To get started with the Currency Exchange project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mirzadobetter/currency-exchange.git
   cd currency-exchange
   ```

2. **Set Up Google Sheets**:
   - Open Google Sheets and create a new spreadsheet.
   - Use the provided templates to connect to Google Finance.

3. **Configure BigQuery**:
   - Set up a Google Cloud project.
   - Enable BigQuery and create a dataset.

4. **Install Dataform**:
   - Follow the Dataform documentation to install and set up your environment.

5. **Create Workflows**:
   - Use Google Workflows to automate your data processes.

## How to Use

Using the Currency Exchange project is straightforward. Follow these steps:

1. **Open Google Sheets**: Start with your spreadsheet.
2. **Fetch Exchange Rates**: Use the built-in functions to pull data from Google Finance.
3. **Transform Data**: Utilize BigQuery and Dataform for any necessary data transformations.
4. **Automate Workflows**: Set up Google Workflows to streamline your processes.

For detailed instructions, refer to the documentation in the repository.

## Releases

You can find the latest releases of the Currency Exchange project [here](https://github.com/mirzadobetter/currency-exchange/releases). Download the necessary files and execute them to get started with your own instance of the project.

![Releases](https://img.shields.io/badge/Visit%20Releases-%20%F0%9F%93%88-brightgreen?style=flat-square&logo=github)

## Contributing

We welcome contributions to the Currency Exchange project! If you have ideas for improvements or new features, please follow these steps:

1. **Fork the Repository**: Click on the fork button in the top right corner.
2. **Create a Branch**: Use a descriptive name for your branch.
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make Changes**: Implement your changes and test them thoroughly.
4. **Commit Your Changes**:
   ```bash
   git commit -m "Add your message here"
   ```
5. **Push to Your Fork**:
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Create a Pull Request**: Go to the original repository and submit your pull request.

We appreciate your contributions and look forward to collaborating!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

For any questions or support, please check the "Releases" section or feel free to open an issue in the repository. Your feedback is important to us!