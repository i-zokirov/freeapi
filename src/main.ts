import { NestFactory } from "@nestjs/core";
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from "@nestjs/swagger";
import { AppModule } from "./app.module";

const customOptions: SwaggerCustomOptions = {
  customSiteTitle: "BepulApi",
  swaggerOptions: {
    authActions: {
      bearerAuth: {
        name: "Bearer",
        schema: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
      value: "Bearer <JWT>",
    },
  },
};
const config = new DocumentBuilder()
  .setTitle("BepulApi")
  .setDescription("")
  .setVersion("1.0")
  .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" }, "JWT")
  .addTag("API")
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, customOptions);
  await app.listen(3000);
}
bootstrap();
