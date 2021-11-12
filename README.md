# Practica05: Pruebas Funcionales
Automatizar pruebas funcionales de aplicaciones web utilizando Selenium Web Driver

## Pre-requisitos
+ NodeJS y NPM: Nos serviran para instalar Selenium Web Driver. 
+ Visual Studio Code: Es el editor de código donde trabajaremos el framework.
+ Selenium Web Driver: Para crear scripts que funcionen con Selenium, necesitamos instalar las dependencias y controladores del proyecto mediante NPM.
  El proceso de instalación y configuración se basó de la página: https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/
  + Creamos una carpeta para el proyecto en nuestro editor, luego los inicialimos el proyecto en el terminal con el comando
      ```bash
      npm init -y
      ```
      
    ![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/jason.png)
      
  + Automaticamente nos crea el archivo package.json, el cual contiene las configuraciones del proyecto .
  + Posterior escribimos el siguiente comando en la terminal para instalar los controladores para los navegadores de Chrome y Firefox.
      ```bash
        npm install --save selenium-webdriver chromedriver geckodriver
      ```
  + Crea la carpeta modulos que almacenará las dependencias del Selenium Web Driver, además que se actualiza el package.json.

    ![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/selenium.png)

    ![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/actualizado.png)

## Actividad
### Casos de prueba
Diagrama de los casos de prueba de la funcionalidad "Percentage Calculator".

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/casosPruebas.png)

### Script de prueba
+ Para la creación del script tomamos como base la página: https://www.tutorialspoint.com/selenium/selenium_webdriver.htm.
+ En el tutotial se presenta el script en Java, no obstante el script lo adaptamos a código de javascript donde le hacemos configuraciones en las direcciónes donde se realizarán las pruebas y lo enlazamos al navegador Chrome.
      
```js
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){
    var searchString = "Automation testing with Selenium";
 
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get("http://www.calculator.net/");

      await driver.findElement(By.xpath("/html/body/div[4]/div/table/tbody/tr/td[3]/div[2]/a")).click();

      await driver.findElement(By.xpath("/html/body/div[3]/div[1]/table[2]/tbody/tr/td/div[3]/a")).click();

      await driver.findElement(By.id("cpar1")).sendKeys("uh");

      await driver.findElement(By.id("cpar2")).sendKeys("1pl");

      await driver.findElement(By.xpath(".//*[@id = 'content']/table/tbody/tr[2]/td/input[2]")).click();

      var result = await driver.findElement(By.xpath("/html/body/div[3]/div[1]/p[2]/font/b")).getText();

      console.log("the result is " + result);
    }
    finally{
      await driver.quit();
    }
}

example();
```

### Resultados
+ Ejecución del código

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/ejec.png)

+ Ventana en Chrome

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/pagina.png)

+ Resultados en la terminal

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/resPrueba.png)
