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

async function example(x,y){
    var result;
 
    let driver = await new Builder().forBrowser("chrome").build();
    try{
    await driver.get("http://www.calculator.net/");

    await driver.findElement(By.xpath("/html/body/div[4]/div/table/tbody/tr/td[3]/div[2]/a")).click();

    await driver.findElement(By.xpath("/html/body/div[3]/div[1]/table[2]/tbody/tr/td/div[3]/a")).click();

    await driver.findElement(By.id("cpar1")).sendKeys(y);

    await driver.findElement(By.id("cpar2")).sendKeys(x);

    await driver.findElement(By.xpath(".//*[@id = 'content']/table/tbody/tr[2]/td/input[2]")).click();
 
    result = await driver.findElement(By.xpath("/html/body/div[3]/div[1]/p[2]/font/b")).getText();

    //console.log("the result is " + result);
    }
    finally{
    await driver.quit();
    }
    
    return result;
}

module.exports = example; 
```

### Integrar xUnit
+ Instalamos Jest.js para las pruebas necesarias.

```bash
      npm i -D jest
```
+ Creamos las pruebas a realizar

```js
const porr = require('./calcu');

test('Porcentaje dado dos enteros',async ()=>{
    expect(await porr(50,10)).toBe("5");
},10000);

test('Porcentaje dado un entero y un decimal',async ()=>{
    expect(await porr(50,10.50)).toBe("5.25");
},10000);

test('Porcentaje dado dos decimales',async ()=>{
    expect(await porr(50.20,98.50)).toBe("49.447");
},10000);

test('Porcentaje cambiando el simbolo del decimal',async ()=>{
    expect(await porr("50,20","98,50")).toBe("494470");
},10000);

test('Porcentaje dado dos valores vacios',async ()=>{
    expect(await porr("","")).toBe("494470");
},10000);

test('Porcentaje dado un valor vacio y un entero',async ()=>{
    expect(await porr("",10)).toBe("Please provide two numeric Values in any field below");
},10000);

test('Porcentaje dado un arreglo y un entero',async ()=>{
    expect(await porr("1pl",10)).toBe("Please provide two numeric Values in any field below");
},10000);

test('Porcentaje dado dos arreglos',async ()=>{
    expect(await porr("5iopp","huh7")).toBe("Please provide two numeric Values in any field below");
},10000);
```

### Resultados
+ Ejecución del código

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/test.png)

+ Ventana en Chrome

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/pagina.png)

+ Resultados en la terminal

![HI](https://github.com/ImaMos01/IS_II_Practica05/blob/main/imagenes/resultado.png)
