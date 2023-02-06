### Install library for a config

```
yarn install @nestjs/config
```

### Install Libraries

```
yarn add @typegoose/typegoose mongoose nestjs-typegoose
```

### Install Libraries devDependencies

```
yarn add -D @types/mongoose
```

### Adding Typegoose Module in AppModule

```
@Module({
  imports: [ConfigModule.forRoot(),
  TypegooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: getMongoConfig
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### Config function

    - in src/configs/mongo.config.ts

```
import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOption(),
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb://' +
  configService.get('MONGO_LOGIN') +
  ':' +
  configService.get('MONGO_PASS') +
  '@' +
  configService.get('MONGO_HOST') +
  ':' +
  configService.get('MONGO_PORT') +
  '/' +
  configService.get('MONGO_AUTHDATABASE');

const getMongoOption = () => ({
  useNewUrlParser: true,
});
```
