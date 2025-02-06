import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { SchemaConsts } from './constants/SchemaConsts';
// import { entities } from './utils/Entities.entytiy';
import { QueryLogger } from './utils/QueryLogging';

@Module({
    imports: [
      // TypeOrmModule.forRootAsync({
      //   imports: [ConfigModule],
      //   inject: [ConfigService],
      //   useFactory: async (configService: ConfigService) => ({
      //     type: configService.get<string>('DB_TYPE') as 'mysql',
      //     name: 'slave1',
      //     host: configService.get<string>('DB_HOST'),
      //     port: Number(configService.get<string>('DB_PORT')),
      //     username: configService.get<string>('DB_USERNAME'),
      //     password: configService.get<string>('DB_PASSWORD'),
      //     database: configService.get<string>('DB_DATABASE'),
      //     schema: configService.get<string>('DB_SCHEMA'),
      //     autoLoadEntities: true,
      //     synchronize: false,
      //     logging: true,
      //     maxPoolSize: Number(configService.get<string>('DB_MAX_POOL_SIZE')),
      //   }),
      // })
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          type: configService.get<string>('DB_TYPE') as 'mysql',
          // entities,
          // entities: [__dirname + '/../**/*.entity.{js,ts}'],
          // autoLoadEntities: true,
          synchronize: true,
          logging: true,
          subscribers: [QueryLogger],
          maxPoolSize: Number(configService.get<string>('DB_MAX_POOL_SIZE')),
          replication: {
            master: {
              host: configService.get<string>('DB_HOST'),
              port: Number(configService.get<string>('DB_PORT')),
              username: configService.get<string>('DB_USERNAME'),
              password: configService.get<string>('DB_PASSWORD'),
              database: configService.get<string>('DB_DATABASE'),
              schema: SchemaConsts.USERS,
            },
            slaves: [
              {
                host: configService.get<string>('DB_HOST'),
                port: Number(configService.get<string>('DB_PORT')),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                schema: SchemaConsts.USERS,
              },
            ],
          },
        }),
        async dataSourceFactory(option) {
          if (!option) throw new Error('Invalid options passed');
  
          return addTransactionalDataSource(new DataSource(option));
        },
      }),
    ],
    providers: [],
    exports: [],
  })
  export class DatabaseModule {}
  