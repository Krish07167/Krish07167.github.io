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

$sql = "SELECT * FROM expenses";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<p>" . $row["description"] . " - $" . $row["amount"] . "</p>";
    }
} else {
    echo "No expenses found";
}

$conn->close();
?>
