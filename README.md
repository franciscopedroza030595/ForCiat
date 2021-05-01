## CIAT

Clone the repository 

In the console go to the repository location

Run the command

```
docker build -t app .
```
you can use other name instead of app

docker will create the project's image

Run the command

```
docker run -p 3000:3000 -d app
```
you can use other port to expose the container

now the container is running!

http://localhost:3000/


#### NOTE: check the world file for the requirements.




