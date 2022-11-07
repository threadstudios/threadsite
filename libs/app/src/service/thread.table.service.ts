import { Injectable } from '@nestjs/common';
import { INDEX_TYPE, Table } from '@typedorm/common';

@Injectable()
export class ThreadTable {
  private _table: Table;

  public get table() {
    if (!this._table) {
      this._table = new Table({
        name: `thread-website`,
        partitionKey: 'pk',
        sortKey: 'sk',
        indexes: {
          gsi1: {
            type: INDEX_TYPE.GSI,
            partitionKey: 'gsi1pk',
            sortKey: 'gsi1sk',
          },
          gsi2: {
            type: INDEX_TYPE.GSI,
            partitionKey: 'gsi2pk',
            sortKey: 'gsi2sk',
          },
          gsi3: {
            type: INDEX_TYPE.GSI,
            partitionKey: 'gsi3pk',
            sortKey: 'gsi3sk',
          },
        },
      });
    }
    return this._table;
  }
}
