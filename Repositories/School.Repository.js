import BaseRepository from './Base.Repository.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


class SchoolRepository extends BaseRepository 
{
  constructor() {
    super(prisma.School)
  }
}

export default SchoolRepository