Calculator
<html>
<head>
  <title>Calculator</title>
  <style>
    /* Add some basic styling to the calculator */
    body {
      font-family: Arial, sans-serif;
    }

    .calculator {
      width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    input[type="text"] {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 18px;
    }

    button {
      width: 50px;
      height: 50px;
      font-size: 18px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="result" readonly>
    <button onclick="appendToResult('7')">7</button>
    <button onclick="appendToResult('8')">8</button>
    <button onclick="appendToResult('9')">9</button>
    <button onclick="appendToResult('+')">+</button>
    <br>
    <button onclick="appendToResult('4')">4</button>
    <button onclick="appendToResult('5')">5</button>
    <button onclick="appendToResult('6')">6</button>
    <button onclick="appendToResult('-')">-</button>
    <br>
    <button onclick="appendToResult('1')">1</button>
    <button onclick="appendToResult('2')">2</button>
    <button onclick="appendToResult('3')">3</button>
    <button onclick="appendToResult('*')">*</button>
    <br>
    <button onclick="appendToResult('0')">0</button>
    <button onclick="clearResult()">C</button>
    <button onclick="calculate()">=</button>
    <button onclick="appendToResult('/')">/</button>
  </div>

  <script>
    // JavaScript functions for calculator functionality
    function appendToResult(value) {
      document.getElementById('result').value += value;
    }

    function clearResult() {
      document.getElementById('result').value = '';
    }

    function calculate() {
      try {
        var result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
      } catch (error) {
        document.getElementById('result').value = 'Error';
      }
    }
  </script>
</body>
</html>

