# Calculator-api

Completed by Nathan McCraw using Angular 12 and .Net Core 5

This app is deployed to Azure and uses Azure SQL databe.  

[Try App Here](https://historicalcalculator.azurewebsites.net/)

## Local Installation

TLDR
- In CLI @ Calculator-api/API/Client:
npm install
- Publish SQL Server DB
In VS, right click CalculatorDB -> Publish -> Edit -> Browse -> Local -> MSSSQLLocalDB -> Ok -> Database name: CalculatorDB -> Publish
- In CLI @ Calculator-api/API
dotnet run
- Navigate browser to https://localhost:5001/   --You wil be redirected to https://localhost:5001/Calculator

Upon code clone/fork/download, you will need to install the npm depencies as specified by the package.json file. To do so, in the command line interface navigate to Calculator-api/API/Client and run: npm install

To start the application, you will need to first publish the SQL Server database before you run the API.  To do this you will need to ensure you have Data Storage and Processing tool on Visual Studio.  After ensuring you have Data Storage and Processing tool, open the calculator-api.sln file located in the root folder with Visual Studio.  Once open, right click on the CalculatorDB project (with the database icon).  Choose publish.  A new window will open.  You will click Edit, which will open another window.  Click browse to display server options.  Click on the local carot to display local databases and choose MSSQLLocalDB.  Then click OK to choose the selection.  Now you need to name the database, click the input box for Database name: and name it CalculatorDB.  Click publish.  This will publish the database and run a small post script that adds a small amount of data into the database.

Now we need launch the API, which builds and serves the Angular single page application on port 5001. Navigate to Calculator-api/API and in the command line interface run: dotnet run.

Launch browser and go to https://localhost:5001/

## Application

![CalcUI](https://user-images.githubusercontent.com/84479635/142713640-de27f9f5-dd26-44a4-9f0c-0a725b433db7.JPG)

The home page is a calculator app with key press and mouse click functionality.  The operators are served from the backend and dynamically appended to the calculator.  All calculations are completed through a posts request and calculated on the backend (design requirement for this coding challenge).  When the expression is submitted for calculation, the user ID is attached to the expression, and the calculation is stored in a SQL server DB (production app is using Azure SQL DB); the post requet response includes the answer to the calculation.  The user is selected using a drop down list on the right side of the navbar.

![AddUser](https://user-images.githubusercontent.com/84479635/142713828-e9746653-414a-4c0b-aa27-d6d76f31a974.JPG)

Application includes functionality to add a new user, sending a post request to the user table in the DB.  The user interface for the add new user is a centered modal.

![TableUI](https://user-images.githubusercontent.com/84479635/142713861-459fd2cb-1c3b-4222-bd13-be515c7e9289.JPG)

Usinng Angular router, a "history" page contains a table displaying all previous calculations.  The results are paginated, only receiving 10 results at a time.  The API is constructed to allow an adjustable number of responses, up to a maximum of 50.  Future updates will include an input to enable the user to adjust the number of results viewed on the table at a time.  Each page is a new http get request, allowing the frontend to remain lightweight.

![TableFilter](https://user-images.githubusercontent.com/84479635/142713920-94911810-9249-40c2-ba19-1ed1f51685cf.JPG)

The table allows sorting and filtering with all possible combinations of parameters to include ASC/DESC of dates, users, calculation answer, and first operand in the expression.  A search functionality allows the user to input a custom decimal number to query answers containing the search input.

Nathan McCraw -- Software Developer [LinkedIn](https://www.linkedin.com/in/nathan-mccraw-5291535b/) | [Personal Website](https://www.nathanmccraw.com/)




