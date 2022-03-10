# Guia para usar iconos SVG en la aplicación

### Para generar un nuevo componente desde un SVG debe seguir los siguentes pasos:

1. Poner el icono.svg dentro de src/assets/icons/svg

1. Ejecutar el comando `npx @svgr/cli --native ./src/assets/icons/svg/[YOUR_ICON.SVG]`

1. Crear una carpeta con el nombre del componente nuevo

1. Crear un archivo con el mismo nombre con la extension .tsx y un index.tsx

1. Copiar y pegar el resultado de la ejecucion del comando dentro del archivo con el nombre de la carpeta del componente.

1. Hacer destructuring de las props en la etiqueta svg `<svg ATRIBUTOS_POR_DEFECTO {...props} viewbox="0 0 24 24">...</svg>`

1. Importar el icono en el index de `icons` y exportarlo en el objeto con un nombre de facil acceso.

1. Agregar dicho nombre a la lista que se utilizara en el componente `<Icon />` para poder sugerir los nombres de los iconos.

1. De ser necesario cambiar el color del svg:

   1. Importar un color desde el tema `(primary, secondary, common, etc)`

   1. Establecer un color por defecto en las props: `({color = COLOR_IMPORTADO, ...props}) => {`

   1. Reemplazar el valor del atributo fill que se quiera modificar con el prop `color`
