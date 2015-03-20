function registroComunidad(){
	var datos = {
             "nombre" : $('#cnombre').val(),
             "cespacio" : $('#ccespacio').val(),
             "cantidad" : $('#ccantidad').val() 
     };
   envioDatos( datos );
}
function setTaller(){
	var taller = "";
	if(document.getElementById('mosaico').checked) { taller = "Taller de mosaicos." }
	if(document.getElementById('mural').checked) { taller = "Taller de muralismo.";}
	if(document.getElementById('cbarro').checked) { taller = "Taller de modelado en barro.";}
	if(document.getElementById('cmural').checked) { taller = "Taller de periodico mural.";}	
	if(document.getElementById('credaccion').checked) { taller = "Taller basico de redacción y organizacion.";}	
	if(document.getElementById('cradio').checked) { taller = "Taller basico de radio (circuito cerrado).";}	
	if(document.getElementById('ccomics').checked) { taller = "Taller de comics.";}	
	if(document.getElementById('cpintura').checked) { taller = "Taller de Pintura y Expresion.";}	
	if(document.getElementById('cexpresion').checked) { taller = "Taller de escritura basica.";}	
	if(document.getElementById('ccuidado').checked) { taller = "Taller Cuidado a quienes cuidan.";}	
	var datos = { "taller" : taller };
   envioDatos( datos );
	}
function setTorneo(){
	var torneo = "";
	if(document.getElementById('tfutbol').checked) { torneo = "Torneo de futbol." }
	if(document.getElementById('tcuento').checked) { torneo = "Concursos de cuentos cabales.";}
	var datos = { "torneo" : torneo };
   envioDatos( datos );
	}
function setFestival(){
	var festival = "";
	if(document.getElementById('fcorporal').checked) { festival = "Expresion corporal." }
	if(document.getElementById('fsocio').checked) { festival = "Socio dramas y organizacion.";}
	if(document.getElementById('fhiphop').checked) { festival = "Hip hop." }
	if(document.getElementById('ftiteres').checked) { festival = "Titeres.";}
	if(document.getElementById('fperiodista').checked) { festival = "Periodistas por un dia.";}
	var datos = { "festival" : festival };
   envioDatos( datos );
	}
function setEquipo(){
	var equipo = "";
	if(document.getElementById('eprimero').checked) { equipo = "1 docente cabal y 5 jovenes hombres y mujeres.";}
	if(document.getElementById('esegundo').checked) { equipo = "2 docente cabal y 10 jovenes hombres y mujeres.";}
	if(document.getElementById('etercero').checked) { equipo = $('#etercerocabal').val();  }
	var datos = { "equipo" : equipo };
   envioDatos( datos );
	}
function setFecha(){
	setEquipo();
	var datos = { "fecha" : $('#datepicker').val(), "tallerista" : $('#ftaller').val(), "total" : $('#ffestival').val() };
   envioDatos( datos );
   enlace = guid();
   var datos = { "generar" : enlace };
   salida = '<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading"><a href="'+enlace+'.pdf">Resumen de mi escuela y documento guia</a></h2></div></div>';
   salida = salida + '<div class="row"><h3 class="section-subheading text-muted">BIBLIOTECA CABAL.</h3></div>';
   salida = salida + '<div class="row"><div class="col-md-4"><a href="files/descargas/CEDAW.pdf"><img src="img/p1.png" class="img-responsive"></a></div><div class="col-md-4"><a href="files/descargas/LIE.pdf"><img src="img/p2.png" class="img-responsive"></a></div><div class="col-md-4"><a href="files/descargas/MANUAL.pdf"><img src="img/p3.png" class="img-responsive"></a></div></div>'; 
   salida = salida + '<br /><div class="row"><div class="col-md-4"><a href="files/descargas/PROTOCOLO.pdf"><img src="img/p4.png" class="img-responsive"></a></div><div class="col-md-4"><a href="files/descargas/SP.pdf"><img src="img/p5.png" class="img-responsive"></a></div><div class="col-md-4"></div></div>'; 
   $.ajax({
             data:  datos,
             url:   'load.php', 
             type:  'post',
             success:  function (response) { $('#results').append(salida); }
     });
	}
	
function envioDatos( datos ){
		$.ajax({
             data:  datos,
             url:   'load.php', 
             type:  'post',
             success:  function (response) { $('form')[0].reset(); }
     });
	}
	
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}