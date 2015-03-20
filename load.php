<?php
session_start();
if (isset($_POST['nombre'])) {
	$_SESSION['escuela'] =  $_POST['nombre'];
	$_SESSION['espacio'] =  $_POST['cespacio'];
	$_SESSION['cantidad'] =  $_POST['cantidad'];
} elseif($_POST['taller']) {
	if(isset($_SESSION['taller'])) { $_SESSION['taller'] =  $_SESSION['taller']."\n".$_POST['taller']; }
	else { $_SESSION['taller'] =  $_POST['taller']; }
		if ($_SESSION['tmp']){$_SESSION['tmp'] =  $_SESSION['taller']."  ".$_SESSION['tmp']."  "; }
		else {$_SESSION['tmp'] =  $_SESSION['taller']."  "; }
} elseif($_POST['torneo']) {
	if(isset($_SESSION['torneo'])) { $_SESSION['torneo'] =  $_SESSION['torneo']."\n".$_POST['torneo']; }
	else { $_SESSION['torneo'] =  $_POST['torneo']; }
		if ($_SESSION['tmp']){$_SESSION['tmp'] =  $_SESSION['torneo']."  ".$_SESSION['tmp']."  ";  }
		else {$_SESSION['tmp'] =  $_SESSION['torneo']."  "; }
} elseif($_POST['festival']) {
	if ($_SESSION['tmp']){$_SESSION['tmp'] =  $_SESSION['festival']."  ".$_SESSION['tmp']."  ";  }
	else {$_SESSION['tmp'] =  $_SESSION['festival']."  "; }
	if(isset($_SESSION['festival'])) { 
		$_SESSION['festival'] =  $_SESSION['festival']."\n".$_POST['festival']; 
	}
	else { $_SESSION['festival'] =  $_POST['festival']; }
} elseif($_POST['fecha']) {
	$_SESSION['fecha'] =  $_POST['fecha'];
	$_SESSION['tallerista'] =  $_POST['tallerista'];
	$_SESSION['total'] =  $_POST['total'];
} elseif($_POST['equipo']) {
	$_SESSION['equipo'] =  $_POST['equipo']; 	
}elseif($_POST['generar']) {
	$_SESSION['generar'] =  $_POST['generar'];
	require('files/reporte.php'); 	
}

?>
