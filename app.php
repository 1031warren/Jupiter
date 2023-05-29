<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jupiter Pilot Application</title>
    <script src="validator.js"></script>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <h1>Jupiter Pilot Application</h1>

    <form name="appForm" onsubmit="return validateForm();" action="#" method="post">
        <div class="row">
            <label>Full Name</label>
            <input type="text" name="fullName">
            <div class="error" id="fullNameErr"></div>
        </div>
        
        <div class="row">
            <label>Age</label>
            <input type="text" name="age">
            <div class="error" id="ageErr"></div>
        </div>

        <div class="row">
            <label>ID#</label>
            <input type="text" name="idNum">
            <div class="error" id="idNumErr"></div>
        </div>

        <div class="row">
            <label>where are you from?</label>
            <input type="text" name="location">
            <div class="error" id="locationErr"></div>
        </div>

        <div class="row">
            <label>Are you afraid of heights?</label>
            <div class="form-inline">
                <label><input type="radio" name="heights" value="yes"> Yes</label>
                <label><input type="radio" name="heights" value="no"> No</label>
            </div>
            <div class="error" id="heightsErr"></div>
        </div>

        <div class="row">
            <input type="submit" value="Submit">
        </div>
</body>
</html>
