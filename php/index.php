<?phpif (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: login.php');
    exit;
}
//Estas líneas comprueban si la variable de sesión loggedin está configurada y si es true. Si cualquiera de estas condiciones no se cumple, el script redirige al usuario a login.php, lo que efectivamente impide que accedan al contenido de demostracion.php sin estar autenticados.
?>

