
function buscarCita(){PrimeFaces.ab({s:"formRegistroCitaExtranjero:buscarCita",p:"formRegistroCitaExtranjero formRegistroCitaExtranjero:buscarCita formRegistroCitaExtranjero:layoutCalendarWeb",u:"formRegistroCitaExtranjero formRegistroCitaExtranjero:layoutCalendarWeb formRegistroCitaExtranjero:captcha",onco:function(xhr,status,args){javascript:window.scrollTo(0,0); validaFormulario();;}});return false;}

var cfg4 = new Object();
cfg4.oncomplete = function(){
    document.getElementById('formRegistroCitaExtranjero:selectTipoTramite_input').value = '63';
    document.getElementById('formRegistroCitaExtranjero:noPasapAnt').value = 'K039784';
    document.getElementById('formRegistroCitaExtranjero:selectPaisPasaporte_input').value = '17';
    document.getElementById('formRegistroCitaExtranjero:nombre').value = 'ONAY';
    document.getElementById('formRegistroCitaExtranjero:Apellidos').value = 'TEJEDA PADRON';
    document.getElementById('formRegistroCitaExtranjero:selectNacionalidad_input').value = '49';
    document.getElementById('formRegistroCitaExtranjero:fechaNacimiento_input').value = '10/09/1971';
    document.getElementById('formRegistroCitaExtranjero:selectPaisNacimiento_input').value = '17';
    document.getElementById('formRegistroCitaExtranjero:sexo_input').value = '0';
    
    var captcha = document.getElementById("recaptcha-anchor")
    
    //while(captcha == null){}
    //if(captcha != null)
    //document.getElementById("recaptcha-anchor").click();
    //buscarCita();
}


var cfg3 = new Object();
cfg3.oncomplete = function(){
    document.getElementById('formRegistroCitaExtranjero:selectTramite_input').value = '12';
    PrimeFaces.ab({s:"formRegistroCitaExtranjero:selectTramite",e:"change",f:"formRegistroCitaExtranjero",p:"formRegistroCitaExtranjero:selectTramite formRegistroCitaExtranjero:selectTramite",u:"formRegistroCitaExtranjero:panelDatosSedes formRegistroCitaExtranjero:panelSelectNoLegalizados formRegistroCitaExtranjero:panelnoPasapNUT formRegistroCitaExtranjero:panelnoPasapAnt formRegistroCitaExtranjero:panelBotonesNut formRegistroCitaExtranjero formRegistroCitaExtranjero:panelSelectPaisNacimiento formRegistroCitaExtranjero:panelNacionalidad formRegistroCitaExtranjero:panelSelectPaisPasaporte",ps:true,rv:true},cfg4);
}


var cfg2 = new Object();
cfg2.oncomplete = function(){
    document.getElementById('formRegistroCitaExtranjero:selectTipoDocumento_input').value = '4';
    PrimeFaces.ab({s:"formRegistroCitaExtranjero:selectTipoDocumento",e:"change",f:"formRegistroCitaExtranjero",p:"formRegistroCitaExtranjero:selectTipoDocumento",u:"formRegistroCitaExtranjero:panelDatosSedes formRegistroCitaExtranjero:message formRegistroCitaExtranjero:layoutRegistroCitas matriculaConsularDialog formRegistroCitaExtranjero:panelSelectNoLegalizados formRegistroCitaExtranjero:panelnoPasapNUT formRegistroCitaExtranjero:panelnoPasapAnt formRegistroCitaExtranjero:panelBotonesNut formRegistroCitaExtranjero:panelApellidos formRegistroCitaExtranjero:panelApellidoPat formRegistroCitaExtranjero:panelApellidoMat formRegistroCitaExtranjero formRegistroCitaExtranjero:panelSelectPaisNacimiento formRegistroCitaExtranjero:panelNacionalidad formRegistroCitaExtranjero:panelSelectPaisPasaporte"},cfg3);
}

document.getElementById('formRegistroCitaExtranjero:selectPais_input').value = '17';
PrimeFaces.ab({s:"formRegistroCitaExtranjero:selectPais",e:"change",f:"formRegistroCitaExtranjero",p:"formRegistroCitaExtranjero:selectPais formRegistroCitaExtranjero:selectPais",u:"formRegistroCitaExtranjero:panelDatosSedes formRegistroCitaExtranjero:layoutMap formRegistroCitaExtranjero:panelSelectNoLegalizados formRegistroCitaExtranjero:panelnoPasapNUT formRegistroCitaExtranjero:panelnoPasapAnt formRegistroCitaExtranjero:panelApellidos formRegistroCitaExtranjero:panelApellidoPat formRegistroCitaExtranjero:panelApellidoMat formRegistroCitaExtranjero:captcha formRegistroCitaExtranjero:panelDatosUsuario formRegistroCitaExtranjero formRegistroCitaExtranjero:panelSelectPaisNacimiento formRegistroCitaExtranjero:panelNacionalidad formRegistroCitaExtranjero:panelSelectPaisPasaporte",ps:true,rv:true},cfg2)
