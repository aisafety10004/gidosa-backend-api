import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource, getDataSourceByName } from 'typeorm-transactional';
// import { SchemaConsts } from './constants/SchemaConsts';
import { QueryLogger } from './utils/QueryLogging';
import { entities } from './utils/Entities.entity';

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
        useFactory: async (configService: ConfigService) => {
          console.log('DB Config:', {
            type: configService.get('DB_TYPE'),
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            db_username: configService.get('DB_USERNAME'),
            db_password: configService.get('DB_PASSWORD'),
            db_database: configService.get('DB_DATABASE'),
            db_max_pool_size: configService.get('DB_MAX_POOL_SIZE'),
          });
          
          return {
            type: configService.get<string>('DB_TYPE') as 'mysql',
            entities,
            // entities: [__dirname + '/../**/*.entity.{js,ts}'],
            // autoLoadEntities: true,
            synchronize: true,  // default: true
            logging: false,
            subscribers: [QueryLogger],
            maxPoolSize: Number(configService.get<string>('DB_MAX_POOL_SIZE')),
            replication: {
              master: {
                host: configService.get<string>('DB_HOST'),
                port: Number(configService.get<string>('DB_PORT')),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                //schema: SchemaConsts.USERS,
              },
              slaves: [
                {
                  host: configService.get<string>('DB_HOST'),
                  port: Number(configService.get<string>('DB_PORT')),
                  username: configService.get<string>('DB_USERNAME'),
                  password: configService.get<string>('DB_PASSWORD'),
                  database: configService.get<string>('DB_DATABASE'),
                  //schema: SchemaConsts.USERS,
                },
              ],
            },
          };
        },
        async dataSourceFactory(options) {
          if (!options) throw new Error('Invalid options passed');
          return getDataSourceByName('default') || addTransactionalDataSource(new DataSource(options));
        },
      }),
    ],
    providers: [],
    exports: [],
  })
  export class DatabaseModule {}
  