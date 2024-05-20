import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}

	async seeder(): Promise<Prisma.BatchPayload> {
		return await this.prisma.user.createMany({
			data: [{ id: 'Primer Usuario' }, { id: 'Segundo Usuario' }],
		});
	}

	async getHello(): Promise<User[]> {
		return await this.prisma.user.findMany();
	}
}
