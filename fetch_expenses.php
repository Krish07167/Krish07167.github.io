<?php
$servername = "localhost";
$username = "root";
$password = "1601";
$dbname = "expense_tracker";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM expenses";
$result = $conn->query($sql);

$expenses = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $expenses[] = $row;
    }
}

$conn->close();

echo json_encode($expenses);
?>
