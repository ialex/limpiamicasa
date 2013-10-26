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
            $("#cliente_form").hide()
            $("#cliente_success").show()
          },
          error: function(client, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
            alert('Failed to create new object, with error code: ' + error.description);
          }
        });
    });

    $( "#register_worker" ).click(function( e ) {
        e.preventDefault();
        
        // Simple syntax to create a new subclass of Parse.Object.
        var Worker = Parse.Object.extend("Worker");
         
        // Create a new instance of that class.
        var worker = new Worker();

        worker.set("nombre", $("#nombre_w").val());
        worker.set("celular", $("#celular_w").val());
        worker.set("direccion", $("#direccion_w").val());
        worker.set("estado", $("#estado_w").val());
        worker.set("ciudad", $("#municipio_w").val());
         
        worker.save(null, {
          success: function(client) {
            // Execute any logic that should take place after the object is saved.
            $("#worker_form").hide()
            $("#worker_success").show()
          },
          error: function(client, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
            alert('Failed to create new object, with error code: ' + error.description);
          }
        });
    });
});
