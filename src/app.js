/* APP -------------------------------- */
const express = require('express');
const path = require('path');
const app = express();
const routesUsers = require("./routes/usersRoutes.js");
const routesProducts = require("./routes/productsRoutes.js");
const routesMain = require("./routes/mainRoutes.js");

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(express.urlencoded({ extended:false}));
app.use(express.json( ));

app.use('/', express.static(path.resolve(__dirname, '../public'))); /*estilos*/
/*View engine setup*/
app.use("/users", routesUsers);

//Productos
app.use("/products", routesProducts);

//Home y variados
app.use("/", routesMain);
/*error*/
app.use((req,res,next)=>{res.status(404).render('404-page');
next( );
});




app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});
