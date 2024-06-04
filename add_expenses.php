<?php
// Replace "your_username", "your_password", "your_database" with your MySQL credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "krrish";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $description = $_POST["description"];
    $amount = $_POST["amount"];

    $sql = "INSERT INTO expenses (description, amount) VALUES ('$description', '$amount')";

    if ($conn->query($sql) === TRUE) {
        echo "Expense added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
