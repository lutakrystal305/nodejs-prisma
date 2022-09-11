import BaseRepository from './Base.Repository.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


class StudentRepository extends BaseRepository 
{
  constructor() {
    super(prisma.Student)
  }
}

export default StudentRepository