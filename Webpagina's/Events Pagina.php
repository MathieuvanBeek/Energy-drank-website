<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $database = "energy";

    $conn = new mysqli($host, $user, $pass, $database);

    if ($conn->connect_error){
        die("Geeft een error");
    }
?>
<!doctype html>
<html>
<meta charset="utf-8">
<meta http-equiv="language" content="NL">
<meta name="viewport" content="width=device, initial-scale=1">
<meta name="description" content="Energy Events Pagina">
<meta name="author" content="Mathieu van Beek">
<meta name="keywords" content="Events Pagina Energy Drink Website">
<link href="css/events pagina.css" rel="stylesheet" type="text/css">
<script src="js/main script.js" type="text/javascript"></script>
<title></title>
</head>
<body>
<header id="item-header">
    <article><img src="img/vuur logo.png" alt="logo"></article>
        <nav id="item-nav">
            <ul>
            <il><a href="Home Pagina.php">Home pagina</a></il>
            <il><a href="Product Pagina.php">Producten</a></il>
            <il><a href="Overons pagina.php">Over ons</a></il>
            <il><a href="Events Pagina.php">Events</a></il>
            <il><a href="Contact pagina.php">Contact</a></il>
            </ul>
        </nav>
    <article><img src="img/inlog logo.png" alt="inlog logo"></article>
    <article><img src="img/search logo.png" alt="search logo"></article>
    <article>
    <p id="drop-nav">&#9776;</p>
        <nav id="menu">
                <a href="Home Pagina.php">Home pagina</a>
                <a href="Product Pagina.php">Producten</a>
                <a href="Overons pagina.php">Over ons</a>
                <a href="Events Pagina.php">Events</a>
                <a href="Contact pagina.php">Contact</a>
        </nav>
</article>
</header>
<main>
    <section id="item-artiest">
        <h1>Artiesten die komen</h1>
        <article><img src="img/evlis presley.jpeg" alt="elvis presley"></article>
    </section>

<?php

    $sql = "SELECT * FROM artiesten";  
    $query = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($query)){
        
        echo "<section id='artiesten'>$row[naam]</section>";
        
    }
    ?>
</main>
<footer>
    <article>
        <p>Privacybeleid</p>
        <p>Cookiebeleid</p>
        <p>Voorwaarden</p>
        <div>&copy;Bluefire company</div>
    </article>
</footer>
</body>
</html>
<?php
$conn->close();
?>

