FROM maven:3.9.4-eclipse-temurin-21-alpine AS build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

ENV BASE_URL=careerly.koyeb.app
ENV DATABASE_CONFIG=team-arc-team-arc-hackathon.l.aivencloud.com:15094/defaultdb?ssl=require
ENV DB_PASSWORD=AVNS_5GRM7pDPvPl59f7cYdZ
ENV DB_USERNAME=avnadmin
ENV JWT_SECRET_KEY=gaisvblgfi8fgy9bybfwet8p78rt7r6r64rrr88869286@&R&@*$V&^V(V@*V#*&V%&%#*V!%Vfisgyuykuyzseuyvusjvjsdfizsgiwr8aiy

COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
