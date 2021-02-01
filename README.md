# MyFm
MyFm Application


## Application Server

portal-server : Server application developed in Spring-Boot. 
This application serves REST API calls to UI. In turn it fetches data from Last FM API

## Web Server

portal-ui: Angular application integrated with spring boot

## Build

Build:On my-lastfm-parent directory,
mvn clean install 

The build artifacts will be stored in the, MyFm\my-lastfm-parent\portal-server\target directory


## Run the application

java -jar .\portal-server-0.0.1-SNAPSHOT.jar --server.port=8080