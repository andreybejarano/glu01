# Pasos para crear un repositorio desde cero
1. Crear en repositorio remoto en Github/Gitlab/Bitbucket
2. Crear repositorio local, en un terminal correr el siguiente comando en la ruta del proyecto:
``` shell
git init
```
3. Crear `.gitignore` e ignorar `node_modules` para proyecto con `Node.js`
4. Preparar los archivos que van a ir en el commit con la siguiente instruccion en la terminal:
``` shell
git add .
```
5. Confirmar los cambios de los archivos:
``` shell
git commit -m "first commit"
```
6. Cambiar el nombre del brach por defecto de `master` a `main`:
``` shell
git branch -M main
```
7. Asociar el reposiotrio local con el remoto:
``` shell
git remote add origin <<URL_REPOSITORIO_REMOTO>>
```
8. Subir los cambios or primera vez:
``` shell
git push -u origin main
```

# Agregar nuevos cambios
1. ejecutar:
``` shell 
git add .
```
2. ver el status
``` shell
git status
```
3. Crear el commit
``` shell
git commit -m "El mensaje de commit"
```
4. subir los cambios
``` shell
git push
```

## Traer los cambios del repositio remoto a mi local
1. En una terminal hacer:
``` shell
git pull
```

## Clonar el proyecto
>> En el caso que el repositorio sea publico cualquiera puede ver los cambios y puede clonarlo con https pero no puedo subir cambios nuevos.
Si el repositorio es privado si o si debo tener acceso como colaborador.
1. En una teminal debo hacer, este comando ya me crea una carpeta nueva con el nombre del repositorio:
``` shell
git clone <<REMPLAZAR POR LA URL DEL REPOSITORIO>>
```
2. Abrir con `VSCode`