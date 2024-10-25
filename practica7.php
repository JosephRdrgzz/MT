<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados</title>
    <link rel="stylesheet" href="estilo.css"> 
</head>
<body>
    <?php
    //calcular Pi
    function calcularPi($n_pi) {
        echo "<h2>Aproximación de Pi</h2>";
        echo "<table>
                <tr>
                    <th>Iteración (n)</th>
                    <th>Valor de Pi en n</th>
                </tr>";

        $pi = 0.0;
        for ($i = 0; $i <= $n_pi; $i++) {
            $pi += pow(-1, $i) / (2 * $i + 1);
            echo "<tr>
                    <td>$i</td>
                    <td>" . (4 * $pi) . "</td>
                  </tr>";
        }

        echo "</table>";
    }

    //calcular e
    function calcularE($n_e) {
        echo "<h2>Aproximación de e</h2>";
        echo "<table>
                <tr>
                    <th>Iteración (n)</th>
                    <th>Valor de e en n</th>
                </tr>";

        $e = 0.0;

        //factorial
        for ($i = 0; $i <= $n_e; $i++) {
            $factorial = 1;
            for ($j = 1; $j <= $i; $j++) {
                $factorial *= $j;
            }

            $e += 1 / $factorial;
            echo "<tr>
                    <td>$i</td>
                    <td>$e</td>
                  </tr>";
        }

        echo "</table>";
    }


    $n_pi = $_POST['n_pi'];
    $n_e = $_POST['n_e'];

    calcularPi($n_pi);
    calcularE($n_e);
    ?>
</body>
</html>
