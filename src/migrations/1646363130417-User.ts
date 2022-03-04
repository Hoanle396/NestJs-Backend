import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1646363130417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'article',
              columns: [
                {
                  name: 'id',
                  type: 'int4',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'firstName',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'lastName',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'email',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'password',
                  type:'string',
                  isNullable: false,
                },
                {
                   name: 'isActive',
                   type: 'boolean',
                   default : true,
                   isNullable: false,
                },
                {
                    name: 'avatarUrl',
                    type: 'string',
                    isNullable: true,
                },
                {
                    name: 'isAdmin',
                    type: 'boolean',
                    default: false,
                    isNullable : false,
                },
                {
                    name: 'isCompany',
                    type: 'boolean',
                    default: false,
                    isNullable : false,
                }
              ],
            }),
            false,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
