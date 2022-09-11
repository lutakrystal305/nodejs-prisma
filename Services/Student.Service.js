import StudentRepository from '../Repositories/Student.Repository.js'

class StudentService {
  constructor() {
    this.repository = new StudentRepository()
  }
  async getAll() {
    try {
      const students = await this.repository.getAll();
      if (!students || students?.length === 0) throw new Error({msg: 'Error'});
      return students;
    } catch(err) {
      throw new Error(err)
    }
  }
  async getById(id) {
    try {
      const student = await this.repository.getById(id);
      return student;
    } catch(error) {
      throw new Error(error)
    }
  }
  async create(std) {
    try {
      const newStd = await this.repository.create(std);
      return newStd;
    } catch(err) {
      throw new Error(err)
    }
  }
  async update(id, data) {
    try {
      const newStd =  await this.repository.update(id, data);
      return newStd;
    } catch(err) {
      throw new Error(err)
    }
  }
  async deleteById(id) {
    try {
      const result = await this.repository.deleteById(id);
      return result;
    } catch(err) {
      throw new Error(err)
    }
  }
}

export default StudentService