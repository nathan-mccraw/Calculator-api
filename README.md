# Calculator-api

Completed by Nathan McCraw using Angular 12 and .Net Core 5

## Installation

TLDR
- In CLI @ Calculator-api/API/Client:
npm install
- Publish SQL Server DB
In VS, right click CalculatorDB -> Publish -> Edit -> Browse -> Local -> MSSSQLLocalDB -> Ok -> Database name: CalculatorDB -> Publish
- In CLI @ Calculator-api/API
dotnet run
- Navigate browser to https://localhost::5001/   --You wil be redirected to https://localhost::5001/Calculator

Upon code clone/fork/download, you will need to install the npm depencies as specified by the package.json file. To do so, in the command line interface navigate to Calculator-api/API/Client and run: npm install

To start the application, you will need to first publish the SQL Server database before you run the API.  To do you need to ensure you have Data Storage and Processing tool on Visual Studio.  After ensuring you have Data Storage and Processing tool, open the calculator-api.sln file located in the root folder with Visual Studio.  Once open, right click on the CalculatorDB project (with the database icon).  Choose publish.  A new window will open.  You will click Edit, which will open another window.  Click browse to display server options.  Click on the local carot to display local databases and choose MSSQLLocalDB.  Then click OK to choose the selection.  Now you need to name the database, click the input box for Database name: and name it CalculatorDB.  Click publish.  This will publish the database and run a small post script that adds a small amount of data into the database.

Now we need launch the API, which builds and serves the Angular single page application on port 5001. Navigate to Calculator-api/API and in the command line interface run: dotnet run.

Launch browser and go to https://localhost:5001/

## Design Documents

[Piedmont Plastics Calculator Static Frontend.pdf](https://github.com/nathan-mccraw/Calculator-api/files/7435922/Piedmont.Plastics.Calculator.Static.Frontend.pdf)

[Piedmont Plastics Calculator Overview.pdf](https://github.com/nathan-mccraw/Calculator-api/files/7435924/Piedmont.Plastics.Calculator.Overview.pdf)


## Application

![Calculator Screen Shot](https://user-images.githubusercontent.com/84479635/139299521-edc54368-4919-483e-97db-2855d63e2591.JPG)

## Update

Added SQL Server and Dapper to display calculations history on a seperate page using Angular routing

![CalculatorUI](https://user-images.githubusercontent.com/84479635/140686286-5db0a46e-399a-42b9-aaca-0b0079ac0083.JPG)

![AddUser](https://user-images.githubusercontent.com/84479635/140686296-3ee5d75b-2df4-4621-8083-8099104101b6.JPG)

![TableUI](https://user-images.githubusercontent.com/84479635/140686302-3b3b4c8c-bc46-4c68-9cdc-b05a024ac47f.JPG)

