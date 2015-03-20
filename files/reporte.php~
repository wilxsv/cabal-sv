<?php

require('fpdf/fpdf.php');

class PDF extends FPDF{
// Cabecera de página
function Header()
{    
    // Arial bold 15
    $this->SetFont('Arial','B',12);
    // Movernos a la derecha
    $this->Cell(80);
    // Título
    $this->Cell(0,10,'Ruta cabal de mi escuela',0,0,'C');
    // Salto de línea
    $this->Ln(20);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,'Pagina '.$this->PageNo().'/{nb}',0,0,'C');
}
}

$image = "./img/centro.png";
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->SetAutoPageBreak(true, 20);
$pdf->AddPage();
$pdf->Image($image, 60 ,60, 100, 100,'png', 'Esta es nuestra ruta Cabal');
$pdf->SetFont('Arial','B',26);
$pdf->Ln(160);
$pdf->Cell(0,0,'Escuela: '.$_SESSION['escuela'],0,0,'C');
$pdf->SetFont('Arial','',10);
$pdf->AddPage();
$pdf->SetFont('Arial','B',26);
$pdf->Cell(0,0,'Sobre mi comunidad ',0,0,'C');
$pdf->SetFont('Arial','',10);
$pdf->Ln(5);
$pdf->Cell(70,10,'Mi escuela cuenta con espacios amplios:',0,0,'L');
$pdf->Cell(0,10, $_SESSION['espacio'],0,0,'L');
$pdf->Ln(10);
$pdf->Cell(70,10,'Estudiantes somos aproximadamente:',0,0,'L');
$pdf->Cell(0,10, $_SESSION['cantidad'],0,0,'L');
$pdf->Ln(10);
$pdf->Cell(70,10,utf8_encode('Nuestros talleres seran:'),0,0,'L');
$pdf->MultiCell(0,10, $_SESSION['taller'],0,'J',false);
$pdf->Ln(10);
$pdf->Ln(10);
$pdf->SetFont('Arial','B',26);
$pdf->Cell(0,0,'FESTIVAL PARA BUXOS Y BUXAS ',0,0,'C');
$pdf->SetFont('Arial','',10);
$pdf->Ln(5);
$pdf->Cell(70,10,utf8_encode('Nuestros torneos y concursos seran:'),0,0,'L');
$pdf->MultiCell(0,10, $_SESSION['torneo'],0,'J',false);
$pdf->Ln(10);
$pdf->Cell(70,10,utf8_encode('Tambien tendremos:'),0,0,'L');
$pdf->MultiCell(0,5, $_SESSION['festival'],0,'J',false);
$pdf->Ln(10);
$pdf->Cell(70,10,utf8_encode('El festival se realizara el:'),0,0,'L');
$pdf->MultiCell(0,10, $_SESSION['fecha'],0,'J',false);
$pdf->Ln(10);
$pdf->Cell(90,10,utf8_encode('Total de estudiantes a participar en los talleres:'),0,0,'L');
$pdf->MultiCell(0,10, $_SESSION['tallerista'],0,'J',false);
$pdf->Ln(10);
$pdf->Cell(90,10,utf8_encode('Total de estudiantes a participar en el Festival CABAL:'),0,0,'L');
$pdf->MultiCell(0,5, $_SESSION['total'],0,'J',false);
$pdf->Ln(10);
$pdf->AddPage();
$pdf->SetFont('Arial','B',26);
$pdf->Cell(0,0,'Nuestro equipo cabal ',0,0,'C');
$pdf->SetFont('Arial','',10);
$pdf->Ln(5);
$pdf->Cell(70,10,'Mi equipo cabal es:',0,0,'L');
$pdf->Cell(0,10,$_SESSION['equipo'],0,0,'L');
$pdf->Ln(10);
$pdf->SetFont('Arial','B',26);
$pdf->Ln(10);
$pdf->Cell(0,0,'Talleres para docentes y estudiantes cabales ',0,0,'C');
$pdf->SetFont('Arial','',10);
$pdf->Ln(10);
$pdf->Cell(70,5,'Equipo Cabal:',0,0,'L');
$pdf->MultiCell(0,5, 'El festival tiene una duracion aproximada de 4 horas en los que se promovera la convivencia pacifica, la no violencia y la igualdad de genero a traves del arte. Este festival es una fiesta y la oportunidad de carnetizar a las y los jóvenes buxos y buxas que buscan ser cabales.
	Consisten en hacer una especie de intramuros, quienes participen se llevaran el kit de deportista cabal, esta actividad se propone sea coordinada por profesores/as segun acuerde el centro educativo.
	Promocionales: Carnet (la cantidad es de acuerdo al numero de estudiantes de la institucion, todas reciben esto según el numero de estudiantes de la escuela) y pulseras
	Perfil: El equipo del Centro educativo decidira quienes seran las y los responsabes de esta actividad',0,'J',false);
$saldo = 0;
$saldo += $_SESSION['total']*1;
/*Taller de Mosaico*/
if (strpos($_SESSION['tmp'], "osaicos", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Taller de Mosaicos',0,0,'L');
		$pdf->MultiCell(0,5, 'El mosaico es el arte de plasmar un dibujo en una superficie con pequenos trozos de ceramica, vidrio, azulejo, piedra o marmol, a los cuales se les denomina teselas. El mosaico resulta ser una especie de rompecabezas de diferentes disenos. El taller de arte en mosaicos ademas persigue que cada participante al dominar la tecnica, sea capaz de aplicarla sobre cualquier superficie, utilizando su imaginacion creadora y desarrollando su expresion personal y rompiendo estereotipos al ser un taller en el que participan hombres y mujeres.
		Valor por jornada: [4 horas = $300.00]
		Asistentes: [Minimo = 15], [Maximo = 20] 
		Promocionales: camisetas',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode('Claudia Rebeca Flores [Contactos: 61001080 claufloresarte@yahoo.com]
		Perfil: Artista plastica especilizada en reutilizacion y reciclaje, amplia experiencia en trabajo con ninas y ninos, y utilizando el arte como herramienta de transformacion social, ha impartido talleres en el programa "Angeles descalzos", que trabaja con ninas y ninos pepenadore'),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Guillermo Eduardo Araujo Lozano [Contactos: 72 01 86 41 guillermo.araujo@gmail.com]
		Perfil: Artista plastico, docente universitario, con estudios de Diseno grafico, dibujo, escultura entre otras expresiones del arte. Cuenta con amplia experiencia en la facilitacion de talleres para ninas y ninos y jovenes de diferentes realidades."),0,'J',false);
		$saldo += 300;
	}
/*Taller de muralismo*/
if (strpos($_SESSION['tmp'], "uralismo", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Muralismo, grabado o calado en ladrillo',0,0,'L');
		$pdf->MultiCell(0,5, 'Los murales buscan plasmar un mensaje, contenido todo en una solo imagen, utiliza paredes y busca que este siempre sea visible, es un importante medio de comunicacion.
		Valor por jornada: [2 horas = $200.00],  [4 horas = $300.00]
		Asistentes: [Minimo = 15], [Maximo = 20] 
		Promocionales: camisetas',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Maria Luisa Saenz Jaramillo [Contactos: 79850712      ma.lucas77@gmail.com]
		Perfil:  Muralista, artista del graffiti  Editora visual y disenadora grafica, con experiencia en la facilitacion de talleres con jovenes con temas relacionados a la recuperacion de la memoria historica"),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Guillermo Eduardo Araujo Lozano [Contactos: 72 01 86 41 guillermo.araujo@gmail.com]
		Perfil: Artista plastico, docente universitario, con estudios de Diseno grafico, dibujo, escultura entre otras expresiones del arte. Cuenta con amplia experiencia en la facilitacion de talleres para ninas y ninos y jovenes de diferentes realidades."),0,'J',false);
		$saldo += 300;
	}
/*Taller de Modelado en expresion*/
if (strpos($_SESSION['tmp'], "xpresion", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Taller de Pintura y Expresion',0,0,'L');
		$pdf->MultiCell(0,5, 'Tecnicas Experimentales para reafirmar los Derechos de la Mujer.
		Valor por jornada: [2 horas = $200.00],  [4 horas = $300.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: Pulseras',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Krissia Barahona [Contactos: 77035578     krissias81@hotmail.com]
		Perfil: Artista y egresada de la Licenciatura en Artes plasticas de la Universidad Nacional. Sus talleres se enfocan en la educacion artistica para la transformacion social a traves de la exploración visual y plastica."),0,'J',false);
		$saldo += 300;
	}
/*Taller de Modelado en barro*/
if (strpos($_SESSION['tmp'], "odelado", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Curso de Modelado',0,0,'L');
		$pdf->MultiCell(0,5, 'Modelado en barro para el autoconocimiento.
		Valor por jornada: [2 horas = $200.00],  [4 horas = $300.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: Pulseras',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Cristina Vasquez [Contactos: 73501726      nathaly1artes@hotmail.com]
		Perfil: Artista visual con especialidad en ceramica, Licenciada en artes plasticas de la Universidad Nacional. Sus talleres se enfocan en la educacion artistica para la transformacion social a traves de materiales organicos y moldeables."),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Doris Mejia [Contactos: 74370121]
		Perfil: Artista visual con especialidad en ceramica, Egresada en artes plasticas de la Universidad Nacional. Sus talleres se enfocan en la educacion artistica para la transformacion social a traves de materiales organicos y moldeables."),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Rebeca Tovar [Contactos: 77577069  rebk.tovar@gmail.com]
		Perfil: Artista visual con especialidad en ceramica, Egresada en artes plasticas de la Universidad Nacional. Sus talleres se enfocan en la educacion artistica para la transformacion social a traves de materiales organicos y moldeables."),0,'J',false);
		$saldo += 300;
	}
/*Taller de radio*/
if (strpos($_SESSION['tmp'], "adio", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Taller basico de radio (circuito cerrado)',0,0,'L');
		$pdf->MultiCell(0,5, 'EL taller consiste en la capacitacion basica en instalacion y entendimiento del funcionamiento de un circuito cerrado de radio, tecnicas de locucion, reporteo y edicion de audios, esta capacitacion incluye comunicacion inclusiva y analisis de la musica sexista y no sexista. (no incluye alquiler de equipo.
		Valor por jornada: [4 horas = $300.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: Pulseras',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Josselyn Garcia [Contactos: 70109703 yoshigarcia@hotmail.es]
		Perfil: comunicadora y programadora de la Radio de Todas, experiencia impartiendo talleres de radio y comunicacion inclusiva a jovenes, abordaje de temas como: violencia contra la mujer, derechos humanos, DS y DR, genero, sexualidad, entre otros "),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Claudia Fuentes [Contactos: cfuentes.voicesartproductions@gmail.com]
		Perfil: Periodista y comunicadora social y  radialista, especialista en radio comunitaria, experiencia facilitando talleres para jovenes"),0,'J',false);
		$saldo += 300;
	}
/*Taller de comics*/

if (strpos($_SESSION['tmp'], "omics", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Taller de comics',0,0,'L');
		$pdf->MultiCell(0,5, 'El taller consiste en la capacitacion basica en tecnicas de dibujo, color y redacción para comics, incluyendo leguaje no sexista, se propone la inclusion de los resultados de este taller en los elementos de comunicacion como el periodico mural o el boletin CABAL.
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: botones',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitador propuesto!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Guillermo Eduardo Araujo Lozano [Contactos: 72 01 86 41 guillermo.araujo@gmail.com]
		Perfil: Artista plastico, docente universitario, con estudios de Diseno grafico, dibujo, escultura entre otras expresiones del arte. Cuenta con amplia experiencia en la facilitacion de talleres para ninas y ninos y jovenes de diferentes realidades."),0,'J',false);
		$saldo += 200;
	}
/*Taller de Escritura*/
if (strpos($_SESSION['tmp'], "escritura", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Taller de escritura basica:',0,0,'L');
		$pdf->MultiCell(0,5, 'Cuentos Cabales, recoge historias de gente o seres cabales, la idea es que estos cuentos siga reforzando la identidad de la persona cabal. Para esta actividad se propone: Un taller sobre escritura de cuentos cortos en los que se aborde tecnicas basicas de redaccion literaria, que incluya el abordaje del lenguaje no sexista.
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: camisetas y squizzers',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Ana Lucia Saenz Jaramillo [Contactos: 70949131 aluciasaenz@gmail.com]
		Perfil: Comunicadora y escritora, cuenta con experiencia en el trabajo con poblacion juvenil"),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Liza Alas [Contactos: liza.alas.07@gmail.com]
		Perfil: Artista visual y poesia, con experiencia en la facilitacion de talleres de escritura a mujeres y jovenes en comunidades en riesgo"),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Jennifer Valiente [Contactos: 71298086    gaticueva.harryjen@gmail.com]
		Perfil: Artista escenica, biologa,  y escritora, dirige y escribe guines para teatro, amplia experiencia en el trabajo con ninas y ninos y jovenes"),0,'J',false);
		$saldo += 200;
	}
/*Taller de cuidado quien cuidan*/
if (strpos($_SESSION['tmp'], "uidado", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'CUIDANDO A QUIENES CUIDAN:',0,0,'L');
		$pdf->MultiCell(0,5, 'Este es un taller de biodanza que se propone para docentes, es un proceso de autocuidado que permite un espacio para que el cuerpo docente tomar un tiempo para ellos y ellas. Se brindará a todo el personal docente de las 17 escuelas.
		Promocionales: Camisetas',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitador propuesto',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Jose Manuel Ramirez
		Perfil: Sicologo y especialista en genero y masculinidaes, experiencia en la facilitacion de talleres de autocuidado y contencion."),0,'J',false);
		$pdf->Ln(5);
	}
/*Taller de Expresion corporal*/
if (strpos($_SESSION['tmp'], "orporal", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Expresion corporal:',0,0,'L');
		$pdf->MultiCell(0,5, 'Exploracion del cuerpo como medio de expresion.
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: Pulseras"',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Jennifer Valiente [Contactos: gaticueva.harryjen@gmail.com]
		Perfil: Artista escenica, biologa,  y escritora, dirige y escribe guines para teatro, amplia experiencia en el trabajo con ninas y ninos y jovenes"),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Paola Lorenzana [Contactos: paolareginalorenzana@gmail.com]
		Perfil: Artista, bailarina, comunicadora y docente universitaria, gran experiencia en la facilitacion de talleres de expresion corporal "),0,'J',false);
		$saldo += 200;
	}
/*Taller de Socio drama*/
if (strpos($_SESSION['tmp'], "drama", 0)>0){
		$pdf->Ln(10);		
		$pdf->Cell(70,5,'Socio dramas:',0,0,'L');
		$pdf->MultiCell(0,5, 'Contando historias de manera creativa, contacto con el teatro.
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 15], [Maximo = 20] 
		Promocionales: Pulseras"',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadoras propuestas!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Juan Garcia [Contactos: garciamejia@hotmail.com]
		Perfil: Actor de teatro, facilitador de procesos sociales utilizando el arte como herramienta canalizadora"),0,'J',false);
		$pdf->Ln(5);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Lissania Carolina Zelaya Zepeda [Contactos: 71772153, 25665374]
		Perfil: Lic. En Jurisprudencias, experiencia de 7 anyos en diversos procesos de formacion Artistica,  facilitacion de Talleres ludicos y Artisticos con enfoque de prevencion de violencia"),0,'J',false);
		$saldo += 200;
	}
/*Taller de Hip hop*/
if (strpos($_SESSION['tmp'], "hop", 0)>0){
		$pdf->Ln(10);
		$pdf->Cell(70,5,'Taller de Hip hop:',0,0,'L');
		$pdf->MultiCell(0,5, 'Hip hop: expresion musical que posibilita el uso de la lirica urbana, con ella se puede contar un problema o contar una historia utilizando la voz y la rima como recursos.
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 10], [Maximo = 15] 
		Promocionales: Pulseras',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadora propuesta!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Josselyn Garcia [Contactos: 70109703 yoshigarcia@hotmail.es]
		Perfil: comunicadora, artista y cantante de rap y programadora de la Radio de Todas, experiencia impartiendo talleres de radio y comunicacion inclusiva a jovenes, abordaje de temas como: violencia contra la mujer, derechos humanos, DS y DR, genero, sexualidad, hip hop, entre otros"),0,'J',false);
		$saldo += 200;
	}
/*Taller de Titeres*/
if (strpos($_SESSION['tmp'], "teres", 0)>0){
	   $pdf->Ln(10);
		$pdf->Cell(70,5,'Taller de Titeres:',0,0,'L');
		$pdf->MultiCell(0,5, 'Titeres: expresion teatral que utiliza un personaje ficticio  que interactua con las personas, puede contar cuentos, cantar, denunciar es un medio para la catarsis.}
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 8], [Maximo = 13] 
		Promocionales: Pulseras',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadora propuesta!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Emmety Pleitez [Contactos: 22841991 74357986 emmety.m@gmail.com Facebook: Emmety Pleitez Quinonez]
		Perfil: Actriz y titiritera, posee experiencia en la realizacion de talleres como herramienta canalizadora de la violencia contra ninas y ninos"),0,'J',false);
		$saldo += 200;
	}
/*Taller de Periodistas*/
if (strpos($_SESSION['tmp'], "riodistas", 0)>0){
	   $pdf->Ln(10);
		$pdf->Cell(70,5,'Taller de "Periodistas por un dia":',0,0,'L');
		$pdf->MultiCell(0,5, 'Taller de redaccion expres, se aprende haciendo!
		Valor por jornada: [2 horas = $100.00], [4 horas = $200.00]
		Asistentes: [Minimo = 5], [Maximo = 8] 
		Promocionales: Pulseras',0,'J',false);
		$pdf->MultiCell(70,5, 'Fascilitadora propuesta!',0,'J',false);
		$pdf->MultiCell(0,5, utf8_encode("Artista: Rosio Villatoro [Contactos: 79789845   rosiovillatoro@gmail.com]
		Perfil: Periodista y comunicadora social, especialista en el enfoque de genero y lenguaje inclusivo, experiencia facilitando talleres para jovenes"),0,'J',false);
		$saldo += 200;
	}

$pdf->Output($_SESSION['generar'].".pdf", "F");
?>
