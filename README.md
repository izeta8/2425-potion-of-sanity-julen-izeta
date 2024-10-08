# REGLAS DE CREACIÓN DE POCIONES

- Si dos ingredientes tienen efectos iguales la poción creada será exitosa: 
    - Si el efecto es positivo el resultado creado será una poción (Potion), y es el efecto es negativo, el resultado creado será un veneno (Poison)

- En caso contrario, la poción creada será fallida y devolveremos un objeto de la clase FailedPotion


# EFECTO DE LA POCIÓN

- Si entre los ingredientes hay más de un efecto en común, se cogerá el primero que se encuentre.


# PROPIEDADES DE LAS POCIONES

Las propiedades de las pociones creadas se calcularán de la siguiente manera:
 - name: El nombre de la poción. 
 - Pociones: Tendrá la estructura “Potion of” + nombre efecto. 
 - Venenos: Tendrá la estructura “Poison of” + nombre efecto.
 - weight: suma del peso de cada ingrediente.
 - value: El valor o potencia de los efectos de la poción. Se calculará sumando los valores de cada ingrediente.
 - time:  tendrá un valor constante de 10 unidades. 


# EXCEPCIONES

Al mezclar 2 ingredientes concretos ocurrirán se creará una poción con efectos inesperados, que no seguirán ninguna regla de las anteriores descritas. En su lugar, se creará la pócima de la cordura, descrita a continuación, si se verifica la condición necesaria para ello:

# PÓCIMA DE LA CORDURA

La pócima más deseada. La razón de ser de la humanidad. Ocurre al mezclar los ingredientes “Nightshade” y “Ectoplasm”. Posee las siguientes propiedades:
 - name: “Potion of Sanity”
 - value: 1000
 - weight: 1
 - time: 50


# ESQUEMA:

Para crear pociones necesitamos 2 elementos principales: ingredientes y un caldero mágico donde mezclarlos.

Por lo tanto, el proceso de creación de pociones constará de 3 fases: 

A. creación de los ingredientes: para ello crearemos las clases Ingredients, Ingredient y Effect.
B. creación del caldero: para ello crearemos la clase Cauldron.
C. creación de la poción: para ello, completaremos la funcionalidad de las clases anteriores creadas, y crearemos la clase Potion, que construirá los objetos poción.

