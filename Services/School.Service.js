import SchoolRepository from '../Repositories/School.Repository.js'

class SchoolService {
  constructor() {
    this.repository = new SchoolRepository()
  }
  async getAll() {
    try {
      console.log(2)
      const schools = await this.repository.getAll();
      if (!schools || schools?.length === 0) throw new Error({msg: 'Error'});
      return schools;
    } catch(err) {
      throw new Error(err)
    }
  }
  async getById(id) {
    try {  
      console.log(id)
      const school = await this.repository.getById(id);
      return school;
    } catch(error) {
      throw new Error(error)
    }
  }
  async create(sch) {
    try {
      const newSch = await this.repository.create(sch);
      return newSch;
    } catch(err) {
      throw new Error(err)
    }
  }
  async update(id, data) {
    try {
      const newSch =  await this.repository.update(id, data);
      return newSch;
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

export default SchoolService