import BaseRepository from './Base.Repository.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class OfficerRepository extends BaseRepository 
{
  constructor() {
    super(prisma.Officer)
  }
}

export default OfficerRepository