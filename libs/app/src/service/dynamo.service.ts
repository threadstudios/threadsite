import { Injectable } from '@nestjs/common';
import {
  BatchManager,
  createConnection,
  EntityManager,
  getBatchManager,
  getEntityManager,
  getTransactionManger,
  ReadBatch,
  ReadBatchItem,
  TransactionManager,
} from '@typedorm/core';
import { DocumentClientV3 } from '@typedorm/document-client';

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ContentfulItemEntity } from '../entities/contentful/item.entity';
import { PageEntity } from '../entities/page.entity';
import { ThreadTable } from './thread.table.service';

@Injectable()
export class DynamoService {
  private _entityManager: EntityManager;
  private _batchManager: BatchManager;
  private _transactionManager: TransactionManager;

  constructor(private readonly threadTable: ThreadTable) {
    const documentClient = new DocumentClientV3(
      new DynamoDBClient({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      }),
    );

    createConnection({
      table: this.threadTable.table,
      entities: [ContentfulItemEntity, PageEntity],
      documentClient,
    });

    this._entityManager = getEntityManager();
    this._batchManager = getBatchManager();
    this._transactionManager = getTransactionManger();
  }

  get entityManager() {
    return this._entityManager;
  }

  get batchManager() {
    return this._batchManager;
  }

  get transactionManager() {
    return this._transactionManager;
  }

  async getBatch<T>(batch: ReadBatch): Promise<{
    items: T[];
    unprocessedItems: ReadBatchItem<any, any>[];
    failedItems: ReadBatchItem<any, any>[];
  }> {
    const result = await this.batchManager.read(batch);
    return {
      ...result,
      items: result.items as T[],
    };
  }
}
