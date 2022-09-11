import BaseRepository from './Base.Repository.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class ClassRepository extends BaseRepository 
{
  constructor() {
    super(prisma.Class)
  }
}

export default ClassRepository