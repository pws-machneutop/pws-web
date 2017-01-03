<!DOCTYPE php>

<?php
$text = file_get_contents('flatFileDB.txt');
$textArray = explode("\n", $text);
$randArrayIndexNum = array_rand($textArray);
$randPhrase = $textArray[$randArrayIndexNum];

$pn = file_get_contents('pn.txt');
$textArraypn = explode("\n", $pn);
$randArrayIndexNumpn = array_rand($textArraypn);
$randpn = $textArraypn[$randArrayIndexNumpn];

?>
	<html>

	<head>
		<meta charset="utf-8">
		<title>Waar is Anne Marttin?</title>
		<link href="jquery-mobile/jquery.mobile-1.0.min.css" rel="stylesheet" type="text/css" />
		<script src="jquery-mobile/jquery-1.6.4.min.js" type="text/javascript"></script>
		<script src="jquery-mobile/jquery.mobile-1.0.min.js" type="text/javascript"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		
		<style>
			
			
			#pcon {
			color:white;
			background-color:#3399fe;
			position:absolute;
    		top:0px;
    		left:0px;
    		width:100%;
    		height:100%;
    		overflow:auto;
			}
			
			#ptext {
			margin: 0 auto; 
			}
			
			#foot {
			color:white;
			position:fixed;
			bottom:0;
			}
		
		</style>
		
	</head>

	<body>

		<div data-role="page" id="page">
			<div data-role="content">
				
				<div id="pcon">
					
					<div id="ptext">
					test
					</div>
					
				</div>
				
			</div>
			
			<div id="foot">
				
						© データソフト 2016
				
			</div>	
			
		</div>
		<div data-role="page" id="page2">
			<div data-role="header">



			</div>
			<div data-role="content">

				<h2>Mevrouw Marttin is even <?php echo $randPhrase; ?>.</h2>

			</div>
			<div data-role="footer">

			</div>
		</div>
		<div data-role="page" id="page3">
			<div data-role="header">
				<h1>Page Three</h1>
			</div>
			<div data-role="content"> Content </div>
			<div data-role="footer">
				<h4>Page Footer</h4>
			</div>
		</div>
		<div data-role="page" id="page4">
			<div data-role="header">
				<h1>Page Four</h1>
			</div>
			<div data-role="content"> Content </div>
			<div data-role="footer">
				<h4>Page Footer</h4>
			</div>
		</div>
	</body>

	</html>