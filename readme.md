Documentacion aplicacion en stack Django - Angular.

Esta aplicacion muestra la informacion de los empleados y de la empresa a la que corresponden.
El proyecto fue desarrollado con Python 3.9.5, Django 4.2.14, Angular 18.1.1
Django esta configurado para conectarse a un servidor Mysql a traves de localhost.

Setup del proyecto

clonar repositorio de git
git clone https://github.com/Chaya01/TecnicaLata.git
cd "repositorio"

crear entorno virtual
python -m venv "nombreDirectorio"
cd Scripts
.\activate o \activate.bat

python venv
instalar dependencias
pip install requirements.txt

migrar base de datos
python manage.py migrate

Ejecutar Django
python manage.py runserver

luego en otra ventana ir al directorio de la aplicacion de angular, front / front
instalar las dependencias 
npm install

y ejecutar la aplicacion

ng serve
