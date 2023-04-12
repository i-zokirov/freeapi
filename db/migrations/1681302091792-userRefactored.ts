import { MigrationInterface, QueryRunner } from "typeorm";

export class UserRefactored1681302091792 implements MigrationInterface {
    name = 'UserRefactored1681302091792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "status" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
    }

}
