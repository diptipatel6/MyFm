# MyFm
MyFm Application

portal-server : Server application developed in Spring-Boot. This application serves REST API calls to UI. In turn it fetches data from Last FM API

portal-ui: Angular application integrated with spring boot

Build:On my-lastfm-parent run,
mvn clean install 

Run Application:
java -jar .\portal-server-0.0.1-SNAPSHOT.jar --server.port=8080