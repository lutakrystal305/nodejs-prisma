import ClassRepository from '../Repositories/Class.Repository.js'

class ClassService {
  constructor() {
    this.repository = new ClassRepository()
  }
  async getAll() {
    try {   
      const classes = await this.repository.getAll();
      if (!classes || classes?.length === 0) throw new Error({msg: 'Error'});
      return classes;
    } catch(err) {
      throw new Error(err)
    }
  }
  async getById(id) {
    try {
      const cls = await this.repository.getById(id);
      return cls;
    } catch(error) {
      throw new Error(error)
    }
  }
  async create(cls) {
    try {
      const newCls = await this.repository.create(cls);
      return newCls;
    } catch(err) {
      throw new Error(err)
    }
  }
  async update(id, data) {
    try {
      const newCls =  await this.repository.update(id, data);
      return newCls;
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

export default ClassService