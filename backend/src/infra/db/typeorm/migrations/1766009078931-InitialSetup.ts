import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSetup1766009078931 implements MigrationInterface {
    name = 'InitialSetup1766009078931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
