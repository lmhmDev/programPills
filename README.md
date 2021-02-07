# PROGRAM PILLS
## Pildoras que harán que aprendas un lenguaje de programación de manera instantanea

### Documentación:

**Project SetUp:**

1. Primero debemos instalar las dependencias usando el comando `npm install`.
2. Tras instalar las dependencias debemos generas datos de ejemplo en la base de datos usando el comando `node install_db.js`.
3. Cuando en la consola nos notifique que ha finalizado mediante la palabra `Finished` pulsaremos Ctrl^C para finalizar el proceso.


---

**Project Init:**

- Para poner el proyecto en marcha solo necesitaremos ejecutar el comando `npm start`.
- Una vez nos notifique que se ha conectado correctamente e la base de datos todo estaría listo.

---

**Usage:**

*GET Methods*

- Para poder visualizar los datos basta con dirigirte a tu navegador y dirigirte a http://localhost:3000 donde veras la pagina principal del proyecto.
- Una vez estes en http://localhost:3000/api/pills podras filtrar por diversos valores:
    1. name (String)
    2. price ([Number]) primero el numero minimo y luego el maximo
    3. tags ([String])
    4. selling (Boolean)
- Tambien puedes añadir filtros como:
    - limit
    - skip
    - sort

- Podrás ver todos los tags en http://localhost:3000/api/pills/tags

*POST Methods*

- Para hacer http request de tipo Post se recomienda el uso de herramientas para http requests como POSTMAN.
- La request de creación de anuncio se hace a http://localhost:3000/api/pills y los parametros a enviar son:
    - name (String)
    - price([Number])
    - selling (Boolean)
    - tags ([String])
    - description (String)
    - image (String)