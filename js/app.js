$( document ).ready(function() {
    
    Parse.initialize("XuHObAs84OfVt668Rax8Dsd74bqSba7zNtlrtpKD", "pQURLJDs4X8EK5drcHQNUQMvsmDTgQWtQAQa1xnw");

    $( "#register_client" ).click(function( e ) {
        e.preventDefault();
        
        // Simple syntax to create a new subclass of Parse.Object.
        var Client = Parse.Object.extend("Client");
         
        // Create a new instance of that class.
        var client = new Client();

        client.set("nombre", $("#nombre").val());
        client.set("email", $("#email").val());
        client.set("direccion", $("#direccion").val());
        client.set("estado", $("#estado").val());
        client.set("ciudad", $("#municipio").val());
         
        client.save(null, {
          success: function(client) {
            // Execute any logic that should take place after the object is saved.
            //$("#cliente_form").hide()
            //$("#cliente_success").show()
          },
          error: function(client, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
            console.log('Failed to create new object, with error code: ' + error.description);
            //$("#cliente_form").hide()
            //$("#cliente_success").show()
          }
        });
    });

    /* FORMULARIO DE CONTACTO */
    $( "#contacto_send" ).click(function( e ) {
        e.preventDefault();
        
        // Simple syntax to create a new subclass of Parse.Object.
        var Contacto = Parse.Object.extend("Contacto");
         
        // Create a new instance of that class.
        var contacto = new Contacto();

        contacto.set("nombre", $("#nombre").val());
        contacto.set("comentarios", $("#comentarios").val());
        contacto.set("email", $("email").val());

         
        contacto.save(null, {
          success: function(client) {
            // Execute any logic that should take place after the object is saved.
            $("#contact_form").hide()
            $("#contact_success").show()
            //console.log("success");
          },
          error: function(client, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
            //console.log('Failed to create new object, with error code: ' + error.description);
            //$("#worker_form").hide()
            //$("#worker_success").show()
            return
          }
        });
    });
});
