$(function(){
    $('.drop1, .drop2, .drop3, .drop4, .drop5, .drop6, .drop7, .drop8').draggable({
        //containment : '#content_move',
        revert: true,
        drag: function(){
            $("#rep_drop").html("");
            $("#rep_drop2").html("");
        }
    }); // appel du plugin
    
    $('.dpzone').droppable({
        activeClass:"dpzone-active cacheZone",
        hoverClass: 'ui-state-active',
    });
    
    $('.dropzone1_drop8').droppable({
        drop : function(event, ui){
            if (ui.draggable.is('.drop8')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }
        }
    });
    
    $('.dropzone1_drop2').droppable({
        accept: (".drop8", ".drop2"),
        drop : function(event, ui){
            if (ui.draggable.is('.drop2')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });
    
    $('.dropzone2_drop4').droppable({
        drop : function(event, ui){
            if (ui.draggable.is('.drop4')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });
    
     $('.dropzone2_drop6').droppable({
        accept: (".drop4", ".drop6"),
        drop : function(event, ui){
            if (ui.draggable.is('.drop6')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });
    
    $('.dropzone3_drop3').droppable({
        drop : function(event, ui){
            if (ui.draggable.is('.drop3')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });
    
    $('.dropzone3_drop5').droppable({
        accept: (".drop3", ".drop5"),
        drop : function(event, ui){
            if (ui.draggable.is('.drop5')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });
    
    $('.dropzone4_drop1').droppable({
        drop : function(event, ui){
            if (ui.draggable.is('.drop1')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("C’est une action collective, réalisée lors du 1er conseil de classe <br/> en concertation avec l’équipe éducative.");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });
    
    $('.dropzone4_drop7').droppable({
        accept: (".drop1", ".drop7"),
        drop : function(event, ui){
            if (ui.draggable.is('.drop7')) {
            $("#rep_drop").html("<b>Bonne réponse</b>");
            $("#rep_drop2").html("Il s’agit d’utiliser un document interne à l’établissement, dans le but d’alimenter la réflexion du lycéen et de le conseiller dans ses recherches si besoin, pas d’alimenter le dossier scolaire de l’élève.");
            $("#rep_drop").css('color', '#016fa2');
            $("#rep_drop2").css('color', '#016fa2');
            ui.draggable.remove();
           } else {
            $("#rep_drop").html("<b>Mauvaise réponse</b>");
            $("#rep_drop2").html("");
            $("#rep_drop").css('color', '#ff025f');
           }          
        }
    });

});