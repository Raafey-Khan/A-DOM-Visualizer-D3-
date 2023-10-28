# A-DOM-Visualizer-D3-

<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 0 auto;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">Hilary</td>
                <td rowspan="1">Advanced</td>
                <td>75</td>
            </tr>
            <tr>
                <td>Web</td>
                
            </tr>
            <tr>
                <td>Operating System</td>
                <td>60</td>
            </tr>
            
            <tr>
                <td rowspan="2">Lary</td>
                <td>Advanced</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Web</td>
                <td></td>
            </tr>
            <tr>
                <td>Operating </td>
                <td>75</td>
            </tr>
            <tr>
                <td>System</td>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" style="text-align: right;">Total Average:</td>
                <td>72.5</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
