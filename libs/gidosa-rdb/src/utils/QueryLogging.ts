import {
    EntitySubscriberInterface,
    EventSubscriber,
    QueryRunner,
  } from 'typeorm';
  
  @EventSubscriber()
  export class QueryLogger implements EntitySubscriberInterface {
    beforeQuery(event: any) {
      const queryRunner: QueryRunner = event.queryRunner;
  
      if (queryRunner.connection.driver['slaves']) {
        console.log(`Connection SLAVE : read`);
      } else {
        console.log(`Connection MASTER : write`);
      }
    }
  }
  