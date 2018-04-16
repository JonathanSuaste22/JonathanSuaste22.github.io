$(document).ready(function () {
    $.showLoading({ name: 'jump-pulse' });

    $("#tHisC").empty();
    $("#tHisE").empty()


    $("#tablaC").empty();
    $("#tablaE").empty();

    $("#link").empty();
    $("#link2").empty();

    $("#erHisCu").empty();
    $("#erHisEx").empty();


    $.ajax({
        type: 'POST',
        url: 'getInsCur',
        dataType: 'json',        
        success: function (data) {
            eval(data);

            if (data.length == 0) {

                $("#tHisC").text("CURSOS INSCRITOS");
                $("#erHisCu").text("NO EXISTE REGISTRO DE CURSOS INSCRITOS EN ESTE MOMENTO");
                $.hideLoading();
            }
            else {
                $("#tHisC").text("CURSOS INSCRITOS");
                $("#tablaC").append(
                   '<tr>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">FOLIO</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">SEMESTRE</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">NIVEL</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">IDIOMA</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;"></th>' +
                   '</tr>'
                    );

                $.each(data, function (i, curso) {


                    if (curso.estadoIns == 0)
                    {
                        var $row = '<tr> <td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.folio + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.semestre + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.nivelS + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.nombreCurso + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;"><div class="text-danger">Baja</div></td></tr>';
                    
                    }                    
                    else if(curso.estado == -1)
                    {
                        var $row = '<tr> <td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.folio + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.semestre + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.nivelS + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.nombreCurso + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;"><div class="text-danger">Grupo Cancelado, Acude a las Oficinas del CLE</div></td></tr>';
                                                           
                    }
                    else if (curso.estadoIns > 0) {

                        var $row = '<tr> <td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.folio + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.semestre + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.nivelS + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + curso.nombreCurso + '</td>' +
                                   '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;"> <input type="button" class="btn btn-success" value="Descargar Comprobante" onclick="getComprobanteCurso(' + curso.folio + ')"></td></tr>';
                    }


                    

                    $("#tablaC").append($row);
                });


                $("#tablaC").addClass("table table-striped");
                $.hideLoading();
            }            
        }
    });


    $.ajax({
        type: 'POST',
        url: 'getInsExam',
        dataType: 'json',        
        success: function (data) {
            eval(data);

            if (data.length == 0) {

                $("#tHisE").text("EXAMENES INSCRITOS");
                $("#erHisEx").text("NO EXISTE REGISTRO DE EXAMANES INSCRITOS EN ESTE MOMENTO");
                $.hideLoading();
            }
            else {
                $("#tHisE").text("EXAMENES INSCRITOS");
                $("#tablaE").append(
                   '<tr>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">FOLIO</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">EXAMEN</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;">IDIOMA</th>' +
                        '<th style="background-color: #337ab7; color: #fff; padding: 8px;line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd;"></th>' +
                   '</tr>'
                    );

                $.each(data, function (i, examen) {
                    var $row = '<tr> <td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + examen.folio + '</td>' +
                               '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + examen.nombreExamen + '</td>' +
                               '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;">' + examen.idioma + '</td>' +
                               '<td style = "padding: 8px;line-height: 1.42857143;vertical-align: top; border-top: 1px solid #ddd;"> <input type="button" class="btn btn-succes" value="Descargar Comprobante" onclick="comprobante()"></td></tr>'
                    $("#tablaE").append($row);
                    
                });

                $("#tablaE").addClass("table table-striped");
                $.hideLoading();
            }            
        }        
    });
   
});



function comprobante() {
    window.location.href = 'getComprobanteInscripcion';
}


function getComprobanteCurso(idFolio) {
    window.location.href = 'getComprobanteInscripcionCurso/?idInscripcion=' + idFolio;
}


$("#back").click(function () {

    window.location.href = "Index";
});